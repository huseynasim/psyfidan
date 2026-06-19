import Breadcrumbs from '../components/Breadcrumbs.jsx';
import CTABar from '../components/CTABar.jsx';
import { ChevDown } from '../components/Icons.jsx';

const CATEGORIES = [
  {
    id: 'umumi',
    title: 'Ümumi suallar',
    items: [
      {
        q: 'Terapiya nədir?',
        a: 'Terapiya düşüncələrinizi, hisslərinizi və davranış nümunələrinizi daha yaxşı anlamağa kömək edən əməkdaşlıq prosesidir. Məqsəd yalnız simptomları azaltmaq deyil, həm də həyat keyfiyyətini və psixoloji rifahı artırmaqdır.',
        open: true,
      },
      {
        q: 'Psixoloq, psixoterapevt və psixiatr arasında fərq nədir?',
        a: 'Psixoloq insan davranışı və psixi proseslər üzrə təhsil almış mütəxəssisdir. Psixoterapevt xüsusi terapiya təlimləri keçərək psixoloji problemlərlə terapevtik üsullarla işləyən mütəxəssisdir. Psixiatr isə tibb təhsili almış həkimdir və lazım olduqda dərman müalicəsi təyin edə bilər.',
      },
    ],
  },
  {
    id: 'proses',
    title: 'Proses və seanslar',
    items: [
      {
        q: 'İlk seans necə keçir?',
        a: 'İlk görüş əsasən tanışlıq və qiymətləndirmə məqsədi daşıyır. Sizi terapiyaya gətirən səbəbləri, həyat tarixçənizi və məqsədlərinizi müzakirə edirik. Bu görüş həm də suallarınızı cavablandırmaq və terapiya prosesini planlaşdırmaq üçün fürsətdir.',
      },
      {
        q: 'Seanslar arası nə etməliyəm?',
        a: 'Terapiyada əldə etdiyiniz müşahidələri gündəlik həyatınıza tətbiq etməyə çalışmaq faydalıdır. Bəzi hallarda qeydlər aparmaq və ya müəyyən tapşırıqlar üzərində işləmək tövsiyə oluna bilər.',
      },
      {
        q: 'Seansların effektivliyi nədən asılıdır?',
        a: 'Effektivlik bir çox amildən asılıdır: terapiyaya davamlı qatılım, açıq ünsiyyət, terapevt-pasiyent əməkdaşlığı və əldə olunan nəticələrin gündəlik həyata tətbiqi.',
      },
      {
        q: 'Terapiya neçə seans çəkəcək?',
        a: 'Bunun üçün universal bir cavab yoxdur. Müddət müraciət səbəbinə, məqsədlərə və fərdi ehtiyaclara görə dəyişir. Bəzi mövzular qısa müddətdə həll oluna bildiyi halda, daha dərin problemlər daha uzunmüddətli iş tələb edə bilər.',
      },
    ],
  },
  {
    id: 'ohdelikler',
    title: 'Öhdəliklər',
    items: [
      {
        q: 'Pasiyentin öhdəlikləri nədir?',
        a: 'Terapiya prosesində aktiv iştirak etmək, görüşlərə vaxtında qoşulmaq, açıq ünsiyyət qurmağa çalışmaq və razılaşdırılmış qaydalara əməl etmək əsas öhdəliklərdir.',
      },
      {
        q: 'Terapevtin öhdəlikləri nədir?',
        a: 'Təhlükəsiz, etik və məxfi mühit yaratmaq, peşəkar standartlara uyğun işləmək, pasiyentə hörmətlə yanaşmaq və onun rifahını prioritet tutmaq terapevtin əsas öhdəlikləridir.',
      },
    ],
  },
  {
    id: 'qiymet',
    title: 'Qiymət və onlayn',
    items: [
      {
        q: 'Qiymət və müddət nə qədərdir?',
        a: 'Bir seansın müddəti adətən 50 dəqiqədir. Qiymət və mövcud xidmətlər haqqında ən aktual məlumat üçün əlaqə bölməsindən müraciət edə bilərsiniz.',
      },
      {
        q: 'Onlayn seanslar effektivdirmi?',
        a: 'Araşdırmalar göstərir ki, bir çox psixoloji problem üçün onlayn terapiya üzbəüz terapiya qədər effektiv ola bilər. Əsas şərt rahat, sakit və məxfi bir mühitdə iştirak etməkdir.',
      },
      {
        q: 'Seanslardan effekt görmürəmsə nə etməliyəm?',
        a: 'Bu hissləri terapiyada açıq şəkildə müzakirə etmək vacibdir. Bəzən məqsədlərin yenidən müəyyənləşdirilməsi, yanaşmanın dəyişdirilməsi və ya terapiya prosesinin yenidən qiymətləndirilməsi lazım ola bilər. Terapiya əməkdaşlıq prosesidir və geri bildirim bu prosesin mühüm hissəsidir.',
      },
    ],
  },
];

function FAQItem({ q, a, open }) {
  return (
    <details open={open}>
      <summary>
        <span>{q}</span>
        <span className="chev" aria-hidden="true">
          <ChevDown />
        </span>
      </summary>
      <p>{a}</p>
    </details>
  );
}

export default function FAQ() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <Breadcrumbs current="Suallar" />
          <span className="eyebrow">
            <span className="dot" aria-hidden="true" />
            Tez-tez verilən suallar
          </span>
          <h1>Sizi maraqlandıra biləcəklər</h1>
          <p className="lead">
            Mövzuya görə qruplaşdırılmış, ən çox verilən suallar. Cavabınızı tapa bilməsəniz,{' '}
            <a href="/elaqe">birbaşa yazın</a> — 24 saat ərzində cavab verirəm.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container content-grid">
          <aside aria-label="Bölmələrə keç">
            <h3>Kateqoriyalar</h3>
            <ul className="toc-list">
              {CATEGORIES.map((c) => (
                <li key={c.id}>
                  <a href={`#${c.id}`}>{c.title}</a>
                </li>
              ))}
            </ul>
          </aside>

          <div>
            {CATEGORIES.map((cat) => (
              <div key={cat.id} className="faq-cat" id={cat.id}>
                <h2>{cat.title}</h2>
                <div className="faq">
                  {cat.items.map((it, i) => (
                    <FAQItem key={i} q={it.q} a={it.a} open={it.open} />
                  ))}
                </div>
              </div>
            ))}

            <div style={{ marginTop: 40 }}>
              <CTABar
                title="Cavabı tapmadınız?"
                description="Sualınızı yazın — fərdi cavab verirəm."
                buttonText="Sual yaz"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
