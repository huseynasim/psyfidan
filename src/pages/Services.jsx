import Breadcrumbs from "../components/Breadcrumbs.jsx";
import CTABar from "../components/CTABar.jsx";
import { User, Mail } from "../components/Icons.jsx";

const SERVICES = [
  {
    id: "ferdi",
    icon: <User />,
    title: "Fərdi terapiya",
    tagline: "Özünüz, hissləriniz və həyatınızla təkbətək iş.",
    body: "Stress, narahatlıq, depressiya, özünüqiymətləndirmə, kədər, peşmançılıq, qərarsızlıq və travma kimi mövzularda dərin, struktur olunmuş iş. Hər seans bir əvvəlkinin üzərində qurulur.",
    meta: [
      { label: "Müddət", value: "50 dəqiqə" },
      { label: "Qiymət", value: "80 AZN" },
      { label: "Format", value: "Üzbəüz / onlayn" },
      { label: "Tezlik", value: "Həftədə 1 dəfə" },
    ],
    listHead: "Nəyə kömək edirəm",
    list: [
      "Davamlı narahatlıq və panik atak idarəetməsi",
      "Depressiya simptomları və enerji itkisi",
      "Travma və post-travmatik stress (PTSP)",
    ],
  },
  {
    id: "onlayn",
    icon: <Mail />,
    title: "Onlayn seanslar",
    tagline: "Dünyanın istənilən nöqtəsindən, ana dilinizdə.",
    body: "Tədqiqatlar göstərir ki, video seanslar bir çox hallarda üzbəüz seans qədər effektivdir. Zoom və ya Google Meet istifadə edirəm — şifrəli, qeydiyyatsız və yalnız bizim üçün.",
    meta: [
      { label: "Müddət", value: "50 dəqiqə" },
      { label: "Qiymət", value: "80 AZN" },
      { label: "Platforma", value: "Zoom / Google Meet" },
      { label: "Ödəniş", value: "Kart / Stripe / Wise" },
    ],
    listHead: "Kimə uyğundur",
    list: [
      "Bakıdan kənarda yaşayanlar (regionlar, xaricdə diasporu)",
      "Çox yüklü iş qrafiki olanlar",
      "Fiziki olaraq evdən çıxa bilməyənlər",
      "Anonimliyə daha çox dəyər verənlər",
    ],
  },
];

export default function Services() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <Breadcrumbs current="Xidmətlər" />
          <span className="eyebrow">
            <span className="dot" aria-hidden="true" />
            Xidmətlər
          </span>
          <h1>Sizə kömək edə biləcəyim sahələr</h1>
          <p className="lead">
            Hər xidmət şəxsi ehtiyaclarınıza uyğun planlaşdırılır. Aşağıda hər
            birinin ətraflı təsvirini, müddətini, qiymətini və kimə uyğun
            olduğunu görəcəksiniz.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container content-grid">
          <aside aria-label="Səhifə daxilində naviqasiya">
            <h3>Xidmətlərə keç</h3>
            <ul className="toc-list">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`}>{s.title}</a>
                </li>
              ))}
            </ul>
          </aside>

          <div>
            {SERVICES.map((s) => (
              <article key={s.id} className="svc-detail" id={s.id}>
                <div className="svc-detail-head">
                  <span className="service-icon" aria-hidden="true">
                    {s.icon}
                  </span>
                  <div>
                    <h2>{s.title}</h2>
                    <p>{s.tagline}</p>
                  </div>
                </div>

                <p>{s.body}</p>

                <div className="svc-meta-grid">
                  {s.meta.map((m) => (
                    <div key={m.label}>
                      <span>{m.label}</span>
                      <strong>{m.value}</strong>
                    </div>
                  ))}
                </div>

                {s.list && (
                  <>
                    <h3>{s.listHead}</h3>
                    <ul className="check-list">
                      {s.list.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </>
                )}

                {s.warning && (
                  <p
                    style={{
                      marginTop: 18,
                      padding: "14px 16px",
                      background: "rgba(200, 75, 60, .08)",
                      borderLeft: "3px solid var(--color-error)",
                      borderRadius: "var(--r-sm)",
                      color: "var(--color-fg)",
                      fontSize: ".95rem",
                    }}
                  >
                    <strong>{s.warning.split(":")[0]}:</strong>
                    {s.warning.split(":").slice(1).join(":")}
                  </p>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
