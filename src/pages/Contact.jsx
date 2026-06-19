import Breadcrumbs from "../components/Breadcrumbs.jsx";
import ContactForm from "../components/ContactForm.jsx";
import { SITE_NAME } from "../data/site.js";
import {
  PHONE_DISPLAY,
  PHONE_TEL,
  PHONE_WA,
  EMAIL,
  ADDRESS_LINES,
  ADDRESS_SHORT,
  HOURS,
  MAP_EMBED_SRC,
  GOOGLE_MAPS_PLACE_URL,
  GOOGLE_MAPS_DIRECTIONS_URL,
} from "../data/contact.js";
import {
  Phone,
  WhatsApp,
  Mail,
  Pin,
  Clock,
  Train,
  Bus,
  Car,
  ArrowRight,
  ExternalLink,
} from "../components/Icons.jsx";

const CONTACTS = [
  {
    icon: <Phone />,
    title: "Telefon",
    body: <a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a>,
  },
  {
    icon: <WhatsApp />,
    title: "WhatsApp",
    body: (
      <a
        href={`https://wa.me/${PHONE_WA}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {PHONE_DISPLAY}
      </a>
    ),
  },
  {
    icon: <Mail />,
    title: "Email",
    body: <a href={`mailto:${EMAIL}`}>{EMAIL}</a>,
  },
  {
    icon: <Pin />,
    title: "Ünvan",
    body: (
      <span>
        {ADDRESS_LINES[0]},
        <br />
        {ADDRESS_LINES[1]}
      </span>
    ),
  },
  {
    icon: <Clock />,
    title: "İş saatları",
    body: <span>{HOURS}</span>,
  },
];

export default function Contact() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <Breadcrumbs current="Əlaqə" />
          <span className="eyebrow">
            <span className="dot" aria-hidden="true" />
            Əlaqə
          </span>
          <h1>İlk addımı bu gün atın</h1>
          <p className="lead">
            Klinikam 6 Mərkəzi bulvar küçəsində yerləşir. Onlayn seanslar üçün
            dünyanın istənilən nöqtəsindən əlaqə saxlaya bilərsiniz. Mesajınıza
            24 saat ərzində cavab verirəm.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container two-col contact-grid">
          <div className="col-text">
            <h2>Əlaqə məlumatları</h2>
            <ul className="contact-list">
              {CONTACTS.map((c) => (
                <li key={c.title}>
                  <span className="ci" aria-hidden="true">
                    {c.icon}
                  </span>
                  <div>
                    <strong>{c.title}</strong>
                    {c.body}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section map-section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow eyebrow-muted">Klinikanın yeri</span>
            <h2>{ADDRESS_SHORT}</h2>
            <p className="section-sub">
              Xəritədə Google Maps Plus Code: <strong>9VJR+WJ</strong> (Баку,
              Азербайджан).
            </p>
          </div>

          <div className="map-card">
            <div className="map-frame">
              <iframe
                src={MAP_EMBED_SRC}
                title={`${SITE_NAME} — klinikanın yerləşdiyi yer Google Maps-də`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <div className="map-info">
              <div>
                <h3>6 Mərkəzi bulvar küçəsi</h3>
                <p>Bakı, Азербайджан · 9VJR+WJ</p>
              </div>
              <div className="map-info-actions">
                <a
                  href={GOOGLE_MAPS_PLACE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost"
                >
                  Xəritədə aç <ExternalLink />
                </a>
                <a
                  href={GOOGLE_MAPS_DIRECTIONS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Yol al <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <div
            style={{
              background: "rgba(200, 75, 60, .06)",
              borderLeft: "4px solid var(--color-error)",
              borderRadius: "var(--r-sm)",
              padding: "24px 28px",
            }}
          >
            <h2
              style={{
                fontSize: "1.3rem",
                marginBottom: 8,
                color: "var(--color-error)",
              }}
            >
              Təcili psixoloji yardım
            </h2>
            <p style={{ margin: 0, color: "var(--color-fg)" }}>
              Həyat üçün təhlükə yaradan vəziyyətlərdə (özünə zərər vermə fikri,
              intihar düşüncəsi) dərhal <strong>112</strong>-yə zəng edin və ya
              yaxındakı təcili tibbi yardım xəstəxanasına müraciət edin. Bu sayt
              böhran xidməti deyil və 24/7 cavab vermir.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
