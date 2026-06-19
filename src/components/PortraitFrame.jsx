import { Check, Instagram, LinkedIn } from './Icons.jsx';
import { SITE_NAME, PORTRAIT_SRC, SOCIAL } from '../data/site.js';

export default function PortraitFrame({
  badgeTitle = 'Sertifikatlı',
  badgeSub = 'APA · EABCT standartları',
  socials = false,
  instagram = 'psyfidan',
  linkedinLabel = 'Fidan Allahverdiyeva',
}) {
  return (
    <div className="col-portrait">
      <div className="portrait-frame">
        <img
          className="portrait-photo"
          src={PORTRAIT_SRC}
          alt={SITE_NAME}
          width={440}
          height={550}
          loading="lazy"
          decoding="async"
        />
        {socials ? (
          <div className="badge-overlay badge-split">
            <a
              className="badge-half"
              href={SOCIAL.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Instagram — @${instagram}`}
            >
              <span className="badge-icon" aria-hidden="true">
                <Instagram size={18} />
              </span>
              <div>
                <strong>Instagram</strong>
                <span>@{instagram}</span>
              </div>
            </a>
            <a
              className="badge-half"
              href={SOCIAL.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`LinkedIn — ${linkedinLabel}`}
            >
              <span className="badge-icon" aria-hidden="true">
                <LinkedIn size={18} />
              </span>
              <div>
                <strong>LinkedIn</strong>
                <span>{linkedinLabel}</span>
              </div>
            </a>
          </div>
        ) : (
          <div className="badge-overlay">
            <span className="badge-icon" aria-hidden="true">
              <Check size={20} />
            </span>
            <div>
              <strong>{badgeTitle}</strong>
              <span>{badgeSub}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
