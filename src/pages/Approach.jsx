import Breadcrumbs from '../components/Breadcrumbs.jsx';
import CTABar from '../components/CTABar.jsx';
import { Clock2, Eye, Shield, ArrowLoop, Couple, ChartUp } from '../components/Icons.jsx';

const METHODS = [
  {
    icon: <Clock2 />,
    title: 'Koqnitiv-davranış terapiyası (KDT)',
    body: 'Düşüncələrin, hisslərin və davranışların qarşılıqlı əlaqəsi üzərində qurulan struktur metod. Narahatlıq, depressiya və panik atak üzrə dünyada ən geniş tədqiq edilmiş yanaşma.',
    meta: '8 – 20 seans · Praktik tapşırıqlar',
  },
  {
    icon: <Eye />,
    title: 'EMDR — travma terapiyası',
    body: 'Eye Movement Desensitization and Reprocessing — keçmiş travmatik hadisələrin beyində yenidən işlənməsi. PTSP üzrə Dünya Səhiyyə Təşkilatı tərəfindən tövsiyə edilir.',
    meta: '6 – 15 seans · Travma fokuslu',
  },
  {
    icon: <Shield />,
    title: 'Sxema terapiyası',
    body: 'Uşaqlıqda formalaşmış davamlı inanc və davranış nümunələri ilə işləmə. Şəxsiyyət pozuntuları, münasibət problemləri və dərin emosional çatışmazlıqlar üçün.',
    meta: '6 – 24 ay · Dərin iş',
  },
  {
    icon: <Clock2 />,
    title: 'Mindfulness-əsaslı terapiya',
    body: 'Diqqətli olma və bu anda qalma bacarıqları. Stress, davamlı narahatlıq və kədərin təkrarlanmasının qarşısını almaq üçün effektivdir.',
    meta: '8 həftəlik proqram',
  },
  {
    icon: <Couple />,
    title: 'Gottman və EFT — cüt terapiyası',
    body: 'John Gottman-ın 40+ illik tədqiqatına və emosional fokuslu terapiyaya əsaslanan, cütlər üçün ən geniş tədqiq edilmiş iki yanaşmanın birləşməsi.',
    meta: '10 – 20 seans',
  },
  {
    icon: <ChartUp />,
    title: 'Həll-fokuslu qısa terapiya',
    body: 'Konkret bir məqsəd ətrafında qısa, fokuslu iş. Karyera qərarları, həyat keçidləri və dəqiq müəyyən edilmiş problemlər üçün.',
    meta: '3 – 8 seans',
  },
];

const STEPS = [
  { num: '01', title: 'Pulsuz tanışlıq', body: '15 dəqiqəlik zəng və ya video. Sizi narahat edən mövzunu qısaca paylaşırsız, mən yanaşmamı izah edirəm. Heç bir öhdəlik yoxdur.' },
  { num: '02', title: 'İlk diaqnostik seans', body: '50 dəqiqəlik dərin söhbət. Hekayənizi, simptomları və məqsədlərinizi anlayırıq.' },
  { num: '03', title: 'Plan və müqavilə', body: 'İkimizin də razılaşdığı yazılı terapiya planı: hansı metodu, neçə seansı, hansı tezliklə tətbiq edəcəyimiz.' },
  { num: '04', title: 'Aktiv terapiya mərhələsi', body: 'Həftəlik və ya iki həftədə bir seans. Seansdan kənar tapşırıqlar — vərdiş izləmə, ağıl jurnalı, məşqlər.' },
  { num: '05', title: 'Aralıq qiymətləndirmə', body: 'Hər 4 – 6 seansdan sonra birlikdə ölçürük: nə dəyişdi, nə hələ də qalır, nəyi düzəltməliyik.' },
  { num: '06', title: 'Bitirmə və izləmə', body: 'Məqsədlərə çatdıqda terapiyanı tədricən bitiririk. 3 və 6 aydan sonra izləmə görüşləri (istəyə görə).' },
];

const FIRST_SESSION = [
  'Sizinlə tanış olur, sizə rahat hiss etdirməyə çalışıram',
  'Necə işlədiyimi və məxfiliyin sərhədlərini izah edirəm',
  'Sizi nəyin gətirdiyini, nə vaxtdan davam etdiyini dinləyirəm',
  'Sual verirəm — amma yalnız sizin rahat olduğunuz qədər',
  'Birlikdə qısa məqsəd və növbəti addımı müəyyənləşdiririk',
];

const PRIVACY_EXC = [
  'Sizin və ya başqasının həyatı üçün təhlükə',
  'Uşaq və ya zəif şəxsə qarşı zorakılıq',
  'Məhkəmə qərarı (çox nadir hallarda)',
];

export default function Approach() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <Breadcrumbs current="Yanaşma" />
          <span className="eyebrow">
            <span className="dot" aria-hidden="true" />
            Yanaşma və metod
          </span>
          <h1>Elmi əsaslı, sizə uyğun terapiya</h1>
          <p className="lead">
            Hər insan üçün eyni resept işləmir. Mən sizin vəziyyətinizə uyğun olaraq sübuta əsaslanan
            bir neçə metodu birləşdirirəm — KDT-nin strukturu, EMDR-in travma fokusu və sxema
            terapiyasının dərinliyi.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head section-head-center">
            <span className="eyebrow eyebrow-muted">Metodikalar</span>
            <h2>İstifadə etdiyim terapevtik yanaşmalar</h2>
            <p className="section-sub">Hər birinin elmi əsası, məqsədi və tipik müddəti var.</p>
          </div>

          <div className="services-grid">
            {METHODS.map((m) => (
              <article key={m.title} className="service-card">
                <span className="service-icon" aria-hidden="true">{m.icon}</span>
                <h3>{m.title}</h3>
                <p>{m.body}</p>
                <span className="service-meta">{m.meta}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <div className="section-head section-head-center">
            <span className="eyebrow eyebrow-muted">Proses</span>
            <h2>Necə işləyirik</h2>
            <p className="section-sub">Şəffaf, mərhələli və sizin tempinizə uyğunlaşdırılmış 6 addım.</p>
          </div>

          <ol className="steps" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
            {STEPS.map((s) => (
              <li key={s.num} className="step">
                <span className="step-num">{s.num}</span>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="container two-col">
          <div className="col-text">
            <span className="eyebrow eyebrow-muted">İlk seans</span>
            <h2>Birinci görüşdə nə baş verir?</h2>
            <p>
              İlk seans çox vaxt insanlar üçün ən stressli olur. Buna görə proses haqqında qabaqcadan
              açıq danışmağı vacib hesab edirəm.
            </p>
            <ul className="check-list">
              {FIRST_SESSION.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <p style={{ marginTop: 18 }}>
              <strong>Vacib:</strong> İlk seansda hər şeyi danışmaq məcburi deyil. Etibarın qurulması
              zaman alır — bu normaldır.
            </p>
          </div>

          <div className="col-text">
            <span className="eyebrow eyebrow-muted">Məxfilik</span>
            <h2>Məxfilik və etika</h2>
            <p>
              Seanslarımızda paylaşdığınız hər şey peşə etikası və Azərbaycan qanunvericiliyi tərəfindən
              qorunur. Heç bir məlumat üçüncü tərəflə paylaşılmır.
            </p>
            <h3 style={{ marginTop: 18 }}>Yalnız üç istisna var:</h3>
            <ul className="check-list">
              {PRIVACY_EXC.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <p style={{ marginTop: 18 }}>
              Onlayn seanslarda Zoom və ya Google Meet-in son-ucdan-uca şifrələnmiş bağlantısından
              istifadə edirik. Seanslar qeyd olunmur.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <CTABar
            title="Hazırsınız?"
            description="Sual vermək və ya tanışlıq görüşü təyin etmək üçün əlaqə saxlayın."
            buttonText="Əlaqə saxla"
          />
        </div>
      </section>
    </>
  );
}
