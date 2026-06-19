// All inline SVGs live here for reuse.
// width/height default to common sizes; override via props.

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
};

export const ArrowRight = ({ size = 18, ...rest }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} {...base} {...rest}>
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

export const Check = ({ size = 18, ...rest }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} {...base} {...rest}>
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

export const Heart = ({ size = 22, ...rest }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} {...base} {...rest}>
    <path d="M12 21s-7-4.5-9.5-9A5.5 5.5 0 0 1 12 6a5.5 5.5 0 0 1 9.5 6c-2.5 4.5-9.5 9-9.5 9z" />
  </svg>
);

export const Psi = ({ size = 22, ...rest }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    aria-hidden="true"
    {...rest}
  >
    <text
      x="12"
      y="19"
      textAnchor="middle"
      fontFamily='"Playfair Display", "Book Antiqua", "Cambria", Georgia, serif'
      fontSize="22"
      fontWeight="600"
      fill="currentColor"
    >
      Ψ
    </text>
  </svg>
);

export const ChevDown = ({ size = 18, ...rest }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} {...base} {...rest}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export const Star = ({ size = 16, ...rest }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size} aria-hidden="true" {...rest}>
    <path d="m12 2 3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01z" />
  </svg>
);

export const User = ({ size = 22, ...rest }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} {...base} {...rest}>
    <circle cx="12" cy="8" r="4" />
    <path d="M6 21a6 6 0 0 1 12 0" />
  </svg>
);

export const Couple = ({ size = 22, ...rest }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} {...base} {...rest}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

export const Mail = ({ size = 22, ...rest }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} {...base} {...rest}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-10 6L2 7" />
  </svg>
);

export const Phone = ({ size = 18, ...rest }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} {...base} {...rest}>
    <path d="M22 16.92V21a1 1 0 0 1-1.1 1A19 19 0 0 1 2 4.1 1 1 0 0 1 3 3h4.1a1 1 0 0 1 1 .75l1 4a1 1 0 0 1-.3 1L7 10.5a16 16 0 0 0 6.5 6.5l1.7-1.8a1 1 0 0 1 1-.3l4 1a1 1 0 0 1 .8 1z" />
  </svg>
);

export const WhatsApp = ({ size = 18, ...rest }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} {...base} {...rest}>
    <path d="M20.5 13.5c.3-.8.5-1.6.5-2.5a8 8 0 1 0-4 6.9L21 22l-1-4.5a8 8 0 0 0 .5-4z" />
  </svg>
);

export const Pin = ({ size = 18, ...rest }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} {...base} {...rest}>
    <path d="M20 10c0 7-8 12-8 12s-8-5-8-12a8 8 0 0 1 16 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export const Clock = ({ size = 18, ...rest }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} {...base} {...rest}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
  </svg>
);

export const Home = ({ size = 22, ...rest }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} {...base} {...rest}>
    <path d="M3 9 12 2l9 7" />
    <path d="M5 9v12h14V9" />
    <path d="M9 21V13h6v8" />
  </svg>
);

export const HeartRate = ({ size = 22, ...rest }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} {...base} {...rest}>
    <path d="M3 12h2l3-8 4 16 3-12 2 4h4" />
  </svg>
);

export const Warning = ({ size = 22, ...rest }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} {...base} {...rest}>
    <path d="M20.8 18.6a2 2 0 0 1-1.8 1.1H5a2 2 0 0 1-1.7-3l7-12a2 2 0 0 1 3.4 0l7 12a2 2 0 0 1 .1 1.9z" />
    <path d="M12 9v4" />
    <path d="M12 17h.01" />
  </svg>
);

export const Award = ({ size = 18, ...rest }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} {...base} {...rest}>
    <circle cx="12" cy="8" r="6" />
    <path d="M15.5 12.5 17 22l-5-3-5 3 1.5-9.5" />
  </svg>
);

export const Book = ({ size = 18, ...rest }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} {...base} {...rest}>
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </svg>
);

export const Settings = ({ size = 18, ...rest }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} {...base} {...rest}>
    <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
    <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 0 1-4 0v-.1A1.7 1.7 0 0 0 9 19.4a1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 0 1 0-4h.1A1.7 1.7 0 0 0 4.6 9a1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 0 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 0 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z" />
  </svg>
);

export const Lock = ({ size = 22, ...rest }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} {...base} {...rest}>
    <rect x="3" y="11" width="18" height="11" rx="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

export const Bookmark = ({ size = 22, ...rest }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} {...base} {...rest}>
    <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9A2 2 0 0 0 19.72 9z" />
    <path d="M2 13v9" />
  </svg>
);

export const Bars = ({ size = 22, ...rest }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} {...base} {...rest}>
    <path d="M9 11H5a2 2 0 0 0-2 2v7h6V11z" />
    <path d="M15 7h-6v13h6V7z" />
    <path d="M21 4h-6v16h6V4z" />
  </svg>
);

export const ArrowLoop = ({ size = 22, ...rest }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} {...base} {...rest}>
    <path d="M3 12c0-5 4-9 9-9s9 4 9 9-4 9-9 9" />
    <path d="M3 12h7" />
    <path d="m7 8-4 4 4 4" />
  </svg>
);

export const Clock2 = ({ size = 22, ...rest }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} {...base} {...rest}>
    <path d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0Z" />
    <path d="M12 7v5l3 2" />
  </svg>
);

export const Eye = ({ size = 22, ...rest }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} {...base} {...rest}>
    <path d="M2 12h6" />
    <path d="M16 12h6" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

export const Shield = ({ size = 22, ...rest }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} {...base} {...rest}>
    <path d="M12 2 4 7v6c0 5 3.5 8.5 8 9 4.5-.5 8-4 8-9V7z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

export const ChartUp = ({ size = 22, ...rest }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} {...base} {...rest}>
    <path d="M21 12c0 5-4 9-9 9s-9-4-9-9 4-9 9-9c2 0 4 .5 5.5 1.5" />
    <path d="m21 3-9 9-3-3" />
  </svg>
);

export const Train = ({ size = 20, ...rest }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} {...base} {...rest}>
    <rect x="5" y="3" width="14" height="18" rx="2" />
    <path d="M9 3v18" />
    <path d="M15 3v18" />
  </svg>
);

export const Bus = ({ size = 20, ...rest }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} {...base} {...rest}>
    <rect x="3" y="8" width="18" height="12" rx="2" />
    <path d="M3 14h18" />
    <circle cx="7" cy="18" r="1" />
    <circle cx="17" cy="18" r="1" />
  </svg>
);

export const Car = ({ size = 20, ...rest }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} {...base} {...rest}>
    <path d="M14 16H9m10 0h3v-3.15a1 1 0 0 0-.84-.99L16 11l-2.7-3.6a1 1 0 0 0-.8-.4H5.24a2 2 0 0 0-1.8 1.1L2 11v5h3" />
    <circle cx="6.5" cy="16.5" r="2.5" />
    <circle cx="16.5" cy="16.5" r="2.5" />
  </svg>
);

export const ExternalLink = ({ size = 16, ...rest }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} {...base} {...rest}>
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <path d="M15 3h6v6" />
    <path d="m10 14 11-11" />
  </svg>
);

export const LinkedIn = ({ size = 16, ...rest }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true" {...rest}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export const Instagram = ({ size = 16, ...rest }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true" {...rest}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
  </svg>
);
