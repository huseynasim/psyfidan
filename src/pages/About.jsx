import { Link } from "react-router-dom";
import { SITE_NAME } from "../data/site.js";
import Breadcrumbs from "../components/Breadcrumbs.jsx";
import CTABar from "../components/CTABar.jsx";
import PortraitFrame from "../components/PortraitFrame.jsx";
import CertCarousel from "../components/CertCarousel.jsx";
import { ArrowRight, Settings } from "../components/Icons.jsx";

const TIMELINE = [
  {
    period: "2022 – 2025",
    title: "Bakalavr, Psixologiya",
    body: "Eötvös Loránd Universiteti (Budapeşt, Macarıstan). Diplom işi: “Effects of Bilingualism on Children’s Cognitive Development in Azerbaijan”.",
  },
  {
    period: "2025",
    title: "Klinik Psixologiya — ixtisasartırma",
    body: "Psixologiya Tədqiqat İnstitutu. Klinik psixologiya üzrə ixtisasartırma proqramı.",
  },
  {
    period: "2025",
    title: "Klinik müşahidə proqramı",
    body: "“Boylam Psikiyatri” özəl psixiatriya xəstəxanası. Klinik müşahidə proqramı.",
  },
  {
    period: "2025 – 2031",
    title: "Tibb təhsili",
    body: "Azərbaycan Tibb Universiteti, Tibb fakültəsi (MPF-1). Prezident təqaüdü qrupu.",
  },
];

const VALUES = [
  {
    icon: <Settings />,
    title: "Tam məxfilik",
    body: "Söhbətlərimiz heç bir formada üçüncü tərəflə paylaşılmır. Peşə etikası və qanunla qorunur.",
  },
  {
    icon: <Settings />,
    title: "Hökmsüz dinləmə",
    body: "Sizi nə üçün axtardığınızı dəyərləndirmirəm. Yalnız anlamağa çalışıram.",
  },
  {
    icon: <Settings />,
    title: "Elmi metod",
    body: "Tövsiyələrim sübuta əsaslanan metodikalara söykənir, instinkt deyil.",
  },
  {
    icon: <Settings />,
    title: "Şəffaflıq",
    body: "Terapiya planı və hər addım sizinlə açıq müzakirə olunur. Sürpriz olmur.",
  },
];

export default function About() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <Breadcrumbs current="Haqqımda" />
          <span className="eyebrow">
            <span className="dot" aria-hidden="true" />
            Haqqımda
          </span>
          <h1>{SITE_NAME}</h1>
          <p className="lead">
            Psixoterapevt, neyroelm və psixi sağlamlıq üzrə tədqiqatçı. Eyni
            zamanda psixiatriya sahəsində ixtisaslaşmaq üçün tibb təhsili
            alıram. İnsan davranışını, emosiyaları və beynin işləmə
            mexanizmlərini daha dərindən anlamaq mənim üçün həm peşə, həm də
            maraq sahəsidir.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container two-col">
          <div className="col-text">
            <h2>Yanaşmam</h2>
            <p>
              Hər insanın hekayəsi fərqlidir və terapiya da buna uyğun
              olmalıdır. İşim üç əsas prinsipə söykənir:{" "}
              <strong>empatik dinləmə</strong>, <strong>elmi yanaşma</strong> və{" "}
              <strong>real dəyişiklik</strong>. Məqsədimiz yalnız hissləri
              anlamaq deyil, onları gündəlik həyatınızda müsbət dəyişiklik
              yaradan addımlara çevirməkdir.
            </p>
            <p>
              Mən yalnız simptomlarla deyil, onların altında yatan düşüncə,
              inanc və davranış nümunələri ilə işləyirəm. Bu yanaşma
              qısamüddətli rahatlıqdan daha çox, davamlı və dərin dəyişiklik
              yaratmağa kömək edir.
            </p>

            <h2>Niyə bu peşəni seçdim</h2>
            <p>
              Universitet illərində bir şeyi aydın şəkildə gördüm: insanların
              yaşadığı ən dərin ağrıların bir çoxu görünmür. Bəzən onlar
              deyilməyən sözlərdə, başa düşülməyən hisslərdə və illərlə içimizdə
              daşıdığımız yükdə gizlənir. Psixoterapiya mənim üçün sadəcə peşə
              deyil. Bu, insanların özlərini daha yaxşı anlamalarına, çətin
              həyat dövrlərindən keçmələrinə və daxili resurslarını yenidən kəşf
              etmələrinə kömək etmək imkanıdır.
            </p>
          </div>

          <PortraitFrame socials />
        </div>
      </section>

      <section className="section section-muted">
        <div className="container two-col">
          <div className="col-text">
            <span className="eyebrow eyebrow-muted">Təhsil</span>
            <h2>Akademik yol</h2>
            <p>Avropada başlayıb köklərinə qayıdan təhsil yolu.</p>
          </div>
          <ul className="timeline">
            {TIMELINE.map((t) => (
              <li key={t.period}>
                <time>{t.period}</time>
                <h3>{t.title}</h3>
                <p>{t.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head section-head-center">
            <span className="eyebrow eyebrow-muted">
              Sertifikatlar və üzvlüklər
            </span>
            <h2>Peşəkar akkreditasiya</h2>
            <p className="section-sub">
              Beynəlxalq standartlara uyğun fasiləsiz peşəkar inkişaf.
            </p>
          </div>
          <CertCarousel />
        </div>
      </section>
    </>
  );
}
