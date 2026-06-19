import Breadcrumbs from '../components/Breadcrumbs.jsx';
import CTABar from '../components/CTABar.jsx';
import Rating from '../components/Rating.jsx';

const STATS = [
  { num: '1500+', label: 'Aparılan seans' },
  { num: '98%', label: 'Məmnunluq' },
  { num: '12 il', label: 'Praktik təcrübə' },
  { num: '87%', label: 'Tövsiyə edir' },
];

const REVIEWS = [
  {
    quote: '“Fidan xanım ilə işləmək həyatımın ən vacib qərarlarından biri oldu. Panik atakları olan biriyəm və indi onlarla yaşamağı yox, onları idarə etməyi öyrəndim. Hər seansdan sonra ürəyim yüngülləşir.”',
    by: '— Leyla M., 29 yaş · Fərdi terapiya, 14 seans',
  },
  {
    quote: '“Cüt terapiyası bizim üçün dönüş nöqtəsi oldu. Fidan xanım heç birimizin tərəfini tutmadı — anlamağı öyrətdi. Artıq hətta mübahisələrimizin də keyfiyyəti dəyişib.”',
    by: '— Rəşad və Səbinə, 7 il evli · Cüt terapiyası, 16 seans',
  },
  {
    quote: '“Berlin-də yaşayıram, onlayn seanslar mənim üçün xilas oldu. Ana dilimdə peşəkar dəstək almaq əvəzsizdir. Hər həftə cümə günü gözlədiyim yeganə görüş.”',
    by: '— Elvin H., Berlin · Onlayn fərdi seans, davam edir',
  },
  {
    quote: '“Atamı itirəndən sonra özümə gələ bilmirdim. Fidan xanım kədəri keçirməyi yox, onunla birlikdə yaşamağı öyrətdi. Bu fərqi indi başa düşürəm.”',
    by: '— Aysel K., 42 yaş · Fərdi terapiya, 22 seans',
  },
  {
    quote: '“Qızımla münasibətim bərbad idi. Birlikdə seanslara gəldik. İndi bir-birimizi eşidən iki nəfərik.”',
    by: '— Gülnar S., 51 yaş · Ailə terapiyası, 11 seans',
  },
  {
    quote: '“6 ay əvvəl avtomobil qəzasından sonra yatağa girə bilmirdim. EMDR terapiyası sözün əsl mənasında həyatımı geri qaytardı.”',
    by: '— Tural R., 34 yaş · EMDR, 9 seans',
  },
  {
    quote: '“15 yaşında olan oğlum heç kimə açılmırdı. Fidan xanım onun dilini tapdı. Artıq dərslərinə qayıdıb, gülməyə başlayıb.”',
    by: '— Nigar B. (valideyn) · Yeniyetmə terapiyası, 18 seans',
  },
  {
    quote: '“Karyera dəyişikliyi haqqında qərarsız idim. Cəmi 6 seansda öz dəyərlərimi başa düşdüm və qərar verdim. Hələ də o qərardan razıyam.”',
    by: '— Anar M., 38 yaş · Həll-fokuslu, 6 seans',
  },
  {
    quote: '“Doğuşdan sonra depressiya keçirirdim. Heç kim mənə inanmırdı. Fidan xanım inandı və mənə özümü inandırdı.”',
    by: '— Sevinc A., 31 yaş · Fərdi terapiya, 20 seans',
  },
];

export default function Reviews() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <Breadcrumbs current="Rəylər" />
          <span className="eyebrow">
            <span className="dot" aria-hidden="true" />
            Müraciətçi rəyləri
          </span>
          <h1>Birlikdə qət etdiyimiz yolun səsləri</h1>
          <p className="lead">
            Aşağıdakı rəylər müraciətçilərin yazılı icazəsi ilə paylaşılıb. Məxfiliyi qorumaq üçün
            adlar dəyişdirilib və bəzi detallar saxlanılıb. Heç bir rəy mənim tərəfimdən redaktə edilməyib.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="stats-row">
            {STATS.map((s) => (
              <div key={s.label} className="stat-block">
                <span className="stat-num">{s.num}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>

          <div className="reviews-grid">
            {REVIEWS.map((r) => (
              <figure key={r.by} className="review">
                <Rating />
                <blockquote>{r.quote}</blockquote>
                <figcaption>{r.by}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <CTABar
            title="Sizin də hekayəniz buraya əlavə oluna bilər"
            description="Pulsuz tanışlıq görüşü ilə başlayın. Söz veririk — sizi qiymətləndirmirik."
          />
        </div>
      </section>
    </>
  );
}
