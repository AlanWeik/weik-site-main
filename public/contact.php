<?php
declare(strict_types=1);

const TO_EMAIL = 'alanweik@me.com';
const FROM_EMAIL = 'hej@weik.se';
const MIN_SECONDS = 3;

$types = [
    'web' => 'Webbutveckling & fullstack',
    'ecommerce' => 'E-handel',
    'wordpress' => 'WordPress',
    'shopify' => 'Shopify',
    'seo' => 'SEO & prestanda',
    'support' => 'Underhåll & support',
    'other' => 'Något annat',
];

$allowedRedirects = ['/kontakt/tack/', '/en/contact/thanks/'];
$allowedBacks = ['/kontakt/', '/en/contact/'];

function field(string $key, int $max): string
{
    $value = trim((string) ($_POST[$key] ?? ''));
    $value = str_replace(["\r\n", "\r"], "\n", $value);
    return mb_substr($value, 0, $max);
}

function oneLine(string $value): string
{
    return trim(preg_replace('/[\r\n\t]+/', ' ', $value) ?? '');
}

function go(string $path): void
{
    header('Location: ' . $path, true, 303);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    go('/kontakt/');
}

$back = in_array($_POST['back'] ?? '', $allowedBacks, true) ? $_POST['back'] : '/kontakt/';
$redirect = in_array($_POST['redirect'] ?? '', $allowedRedirects, true) ? $_POST['redirect'] : '/kontakt/tack/';
$fail = fn () => go($back . '?status=error#form');

// Bots: honeypot filled or submitted faster than a human could. Pretend success.
$ts = (int) ($_POST['ts'] ?? 0);
if (field('website', 200) !== '' || ($ts > 0 && (time() * 1000 - $ts) < MIN_SECONDS * 1000)) {
    go($redirect);
}

$name = oneLine(field('name', 120));
$email = oneLine(field('email', 200));
$type = (string) ($_POST['type'] ?? '');
$message = field('message', 5000);
$lang = ($_POST['lang'] ?? 'sv') === 'en' ? 'en' : 'sv';

if ($name === '' || $message === '' || !filter_var($email, FILTER_VALIDATE_EMAIL) || !array_key_exists($type, $types)) {
    $fail();
}

$typeLabel = $types[$type];
$subject = '=?UTF-8?B?' . base64_encode("Ny förfrågan från weik.se: {$typeLabel} – {$name}") . '?=';
$ip = $_SERVER['REMOTE_ADDR'] ?? '';
$body = <<<TXT
Ny förfrågan via weik.se

Namn: {$name}
E-post: {$email}
Projekttyp: {$typeLabel}
Språk: {$lang}

Meddelande:
{$message}

--
IP: {$ip}
Tid: {$_SERVER['REQUEST_TIME']}
TXT;

$headers = [
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: 8bit',
    'From: Weik <' . FROM_EMAIL . '>',
    'Reply-To: ' . $name . ' <' . $email . '>',
    'X-Mailer: weik.se',
];

$sent = mail(TO_EMAIL, $subject, $body, implode("\r\n", $headers), '-f' . FROM_EMAIL);

$sent ? go($redirect) : $fail();
