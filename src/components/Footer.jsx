import { Link } from 'react-router-dom';
import { PHONE_DISPLAY, PHONE_TEL, EMAIL, ADDRESS_SHORT } from '../data/contact.js';
import { SITE_NAME } from '../data/site.js';
import { Psi } from './Icons.jsx';

const FOOTER_NAV = [
  { to: '/haqqimda', label: 'Haqqımda' },
  { to: '/xidmetler', label: 'Xidmətlər' },
  { to: '/suallar', label: 'Suallar' },
  { to: '/elaqe', label: 'Əlaqə' },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="brand">
            <span className="brand-mark" aria-hidden="true">
              <Psi size={20} />
            </span>
            <span className="brand-text">
              {SITE_NAME}
              <small>Psixoloq · Bakı</small>
            </span>
          </span>
          <p className="muted">Sakit, etibarlı və elmi əsaslı psixoloji dəstək.</p>
        </div>

        <nav className="footer-nav" aria-label="Alt naviqasiya">
          <h4>Naviqasiya</h4>
          <ul>
            {FOOTER_NAV.map((item) => (
              <li key={item.to}>
                <Link to={item.to}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer-contact">
          <h4>Əlaqə</h4>
          <ul>
            <li>
              <a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a>
            </li>
            <li>
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </li>
            <li>{ADDRESS_SHORT}</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <small>© {year} {SITE_NAME}. Bütün hüquqlar qorunur.</small>
          <small>
            <a href="#">Məxfilik siyasəti</a> · <a href="#">İstifadə şərtləri</a>
          </small>
        </div>
      </div>
    </footer>
  );
}
