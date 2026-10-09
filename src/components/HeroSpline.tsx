import { lazy, Suspense, useEffect, useState } from 'react';

const Spline = lazy(() => import('@splinetool/react-spline'));

type Props = { scene: string };

export default function HeroSpline({ scene }: Props) {
  const [enabled, setEnabled] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const capable = matchMedia('(min-width: 768px) and (prefers-reduced-motion: no-preference)').matches;
    const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData;
    if (!scene || !capable || saveData) return;

    if ('requestIdleCallback' in window) {
      const id = requestIdleCallback(() => setEnabled(true), { timeout: 2500 });
      return () => cancelIdleCallback(id);
    }
    const id = setTimeout(() => setEnabled(true), 1200);
    return () => clearTimeout(id);
  }, [scene]);

  if (!enabled) return null;

  return (
    <Suspense fallback={null}>
      <div
        className="absolute inset-0 transition-opacity duration-[1500ms]"
        style={{ opacity: loaded ? 1 : 0 }}
      >
        <Spline
          scene={scene}
          onLoad={() => {
            setLoaded(true);
            document.documentElement.dataset.spline = 'ready';
          }}
        />
      </div>
    </Suspense>
  );
}
