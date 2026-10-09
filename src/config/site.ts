export const site = {
  name: 'Weik',
  legalName: 'Weik',
  url: 'https://weik.se',
  founder: 'Alan Weik',
  email: 'alanweik@me.com',
  linkedin: 'https://linkedin.com/in/alan-weik-768854219/',
  github: 'https://github.com/AlanWeik',
  city: 'Halmstad',
  region: 'Halland',
  regionFull: 'Hallands län',
  country: 'SE',
  geo: { lat: 56.6745, lng: 12.8578 },
  cv: '/alan-weik-cv.pdf',
  ogImage: '/og.png',
  /** Export a scene in Spline (Export > Code > React) and paste the .splinecode URL here or in PUBLIC_SPLINE_SCENE. */
  splineScene: import.meta.env.PUBLIC_SPLINE_SCENE ?? '',
} as const;
