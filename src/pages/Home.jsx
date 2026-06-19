import { Link } from "react-router-dom";
import { SITE_NAME } from "../data/site.js";
import Marquee from "../components/Marquee.jsx";
import CTABar from "../components/CTABar.jsx";
import PortraitFrame from "../components/PortraitFrame.jsx";
import { ArrowRight, Check, User, Mail } from "../components/Icons.jsx";

const PREVIEW_SERVICES = [
  {
    icon: <User />,
    title: "Fərdi terapiya",
    desc: "Stress, narahatlıq, depressiya, özünüqiymətləndirmə və travma ilə işləmə.",
    meta: "50 dəq · 80 AZN",
  },
  {
    icon: <Mail />,
    title: "Onlayn seanslar",
    desc: "Zoom və ya Google Meet vasitəsilə təhlükəsiz, məxfi dəstək.",
    meta: "50 dəq · İstənilən ölkədən",
  },
];

export default function Home() {
  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-bg" aria-hidden="true" />
        <div className="container hero-grid">
          <div className="hero-content">
            <span className="eyebrow">
              <span className="dot" aria-hidden="true" />
              Lisenziyalı Psixoterapevt · Neyroelm üzrə tədqiqatçı
            </span>
            <h1 id="hero-title">
              Psixoloji Dəstək:{" "}
              <span className="text-accent">etibarlı və peşəkar</span>
            </h1>
            <p className="lead">
              Stress, narahatlıq, depressiya və münasibət çətinliklərində sizi
              dinləyən və anlayan dəstək təqdim edirəm. Görüşlər Bakıda üzbəüz
              və ya dünyanın istənilən yerindən onlayn mümkündür.
            </p>
            <div className="hero-actions">
              <Link to="/elaqe" className="btn btn-primary btn-lg">
                Konsultasiya yazıl <ArrowRight />
              </Link>
              <Link to="/xidmetler" className="btn btn-ghost btn-lg">
                Xidmətlərə bax
              </Link>
            </div>
            <ul className="trust-row" aria-label="Etibar göstəriciləri">
              <li>
                <Check /> Tam məxfilik
              </li>
              <li>
                <Check /> Elmi əsaslı
              </li>
              <li>
                <Check /> Daimi Dəstək
              </li>
            </ul>
          </div>

          <aside className="hero-card" aria-label="Tez baxış">
            <div className="hero-card-row">
              <div className="stat">
                <span className="stat-num">2500+</span>
                <span className="stat-label">Uğurlu Seans</span>
              </div>
              <div className="stat">
                <span className="stat-num">100+</span>
                <span className="stat-label">Məmnun Pasient</span>
              </div>
            </div>
            <hr className="card-sep" />
            <div className="quick-info">
              <h3>Seansın gedişi</h3>
              <ol>
                <li>İlkin psixoloji dəyərləndirmə</li>

                <li>Şəxsi terapiya planı</li>
                <li>Davamlı dəstək və izləmə</li>
              </ol>
            </div>
          </aside>
        </div>
      </section>

      <Marquee />

      <section className="section" aria-labelledby="about-prev-title">
        <div className="container two-col">
          <div className="col-text">
            <span className="eyebrow eyebrow-muted">Haqqımda</span>
            <h2 id="about-prev-title">{SITE_NAME} — Tanış Olaq!</h2>
            <p>
              Klinik psixologiya üzrə magistr dərəcəsi, Avropada davam
              etdirilmiş tədris və 12 illik praktik təcrübə. KDT, EMDR və sxema
              terapiyası üzrə beynəlxalq sertifikatlar.
            </p>
            <p>
              Yanaşmam üç prinsipə əsaslanır: <strong>hökmsüz dinləmə</strong>,{" "}
              <strong>elmi metod</strong> və{" "}
              <strong>davamlı, ölçülən nəticə</strong>. Hər insanın hekayəsi
              unikaldır — terapiya da elə qurulur.
            </p>
            <Link to="/haqqimda" className="btn btn-ghost">
              Haqqımda daha ətraflı <ArrowRight size={16} />
            </Link>
          </div>
          <PortraitFrame />
        </div>
      </section>

      <section
        className="section section-muted"
        aria-labelledby="svc-prev-title"
      >
        <div className="container">
          <div className="section-head">
            <span className="eyebrow eyebrow-muted">Xidmətlər</span>
            <h2 id="svc-prev-title">Fərdi terapiya və onlayn seanslar</h2>
            <p className="section-sub">
              Seanslar şəxsi ehtiyaclarınıza uyğun planlaşdırılır.
            </p>
          </div>

          <div className="services-grid">
            {PREVIEW_SERVICES.map((s) => (
              <article key={s.title} className="service-card">
                <span className="service-icon" aria-hidden="true">
                  {s.icon}
                </span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <span className="service-meta">{s.meta}</span>
              </article>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: 32 }}>
            <Link to="/xidmetler" className="btn btn-ghost">
              Bütün xidmətlərə bax <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
