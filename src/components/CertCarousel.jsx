import { useEffect, useRef, useState, useCallback } from 'react';
import { ArrowRight } from './Icons.jsx';

const CERTS = [
  { src: '/certs/01-atu-i-yer.jpeg', title: 'I yer — ATU Tələbə Elmi Konfransı', meta: 'Azərbaycan Tibb Universiteti · Bakı 2026' },
  { src: '/certs/02-saglamliq-zirvesi.jpeg', title: 'Sağlamlıq və Texnologiyanın Zirvəsi', meta: 'ATU & Səhiyyə Nazirliyi · 6–8 May 2026 · 12 DTT kredit' },
  { src: '/certs/03-icams-forum.jpeg', title: 'Elmi Araşdırmalar Forumu — ICAMS', meta: 'Yeni Klinika & Azərbaycan Daxili Xəstəliklər Dərnəyi · 4 Aprel 2026' },
  { src: '/certs/04-apa-membership.jpeg', title: 'APA — Üzvlük sertifikatı', meta: 'American Psychological Association · Beynəlxalq üzv · 2026' },
  { src: '/certs/05-klinik-psixologiya.jpeg', title: 'Klinik psixologiya — ixtisasartırma', meta: 'Psixologiya Elmi Tədqiqat İnstitutu · 126 saat · 47/50 bal · 11.12.2025' },
  { src: '/certs/06-boylam-kupon.jpeg', title: 'Klinik Uygulamada Psikoloji Okulu', meta: 'Boylam Psikiyatri Hastanesi & KUPO-N · Ankara · 1–8 Avqust 2025 · 42 saat' },
  { src: '/certs/07-harvard-positive.jpeg', title: 'Positive Psychology', meta: 'Harvard Health Publishing / Harvard Medical School · 15 Avqust 2025' },
  { src: '/certs/08-chipadam-ilk-gorusme.jpeg', title: 'Klinik İlk Görüşmə Texnikaları', meta: 'Chip Adam Eğitim Danışmanlık · 120 saat · 13.02.2025' },
  { src: '/certs/09-elte-degree.jpeg', title: 'Bakalavr diplomu — Psixologiya', meta: 'Eötvös Loránd Universiteti · Budapeşt · 30 Yanvar 2025' },
  { src: '/certs/10-apostille.jpeg', title: 'Apostille — Macarıstan', meta: 'Macarıstan Xarici İşlər və Ticarət Nazirliyi · 26 Fevral 2025' },
  { src: '/certs/11-azerbaycan-sehadetname.jpeg', title: 'Ali təhsilin tanınması — Şəhadətnamə', meta: 'Azərbaycan Respublikası Elm və Təhsil Nazirliyi · NS00039272' },
  { src: '/certs/12-chipadam-kendini-sevme.jpeg', title: 'Kendini Sevme və “Xeyr” deyə bilmə', meta: 'Chip Adam Eğitim Danışmanlık · 4 saat · 22.01.2025' },
];

export default function CertCarousel() {
  const [i, setI] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const stageRef = useRef(null);
  const touchStart = useRef(null);
  const len = CERTS.length;

  const go = useCallback((delta) => setI((p) => (p + delta + len) % len), [len]);
  const jump = useCallback((n) => setI(((n % len) + len) % len), [len]);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e) => {
      if (e.key === 'Escape') setLightbox(false);
      if (e.key === 'ArrowRight') go(1);
      if (e.key === 'ArrowLeft') go(-1);
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [lightbox, go]);

  const onStageKey = (e) => {
    if (e.key === 'ArrowRight') go(1);
    if (e.key === 'ArrowLeft') go(-1);
  };

  const onTouchStart = (e) => { touchStart.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    if (touchStart.current == null) return;
    const dx = e.changedTouches[0].clientX - touchStart.current;
    if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
    touchStart.current = null;
  };

  const cur = CERTS[i];

  return (
    <div className="cert-carousel" aria-roledescription="carousel" aria-label="Sertifikatlar">
      <div
        ref={stageRef}
        className="cc-stage"
        tabIndex={0}
        onKeyDown={onStageKey}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        role="group"
        aria-roledescription="slide"
        aria-label={`${i + 1} / ${len} — ${cur.title}`}
      >
        <button
          type="button"
          className="cc-nav cc-prev"
          aria-label="Əvvəlki sertifikat"
          onClick={() => go(-1)}
        >
          <ArrowRight />
        </button>

        <button
          type="button"
          className="cc-image-btn"
          onClick={() => setLightbox(true)}
          aria-label={`${cur.title} — böyütmək üçün klikləyin`}
        >
          <img src={cur.src} alt={cur.title} loading="lazy" draggable={false} />
        </button>

        <button
          type="button"
          className="cc-nav cc-next"
          aria-label="Növbəti sertifikat"
          onClick={() => go(1)}
        >
          <ArrowRight />
        </button>
      </div>

      <div className="cc-meta">
        <div className="cc-counter" aria-hidden="true">
          {String(i + 1).padStart(2, '0')} <span>/</span> {String(len).padStart(2, '0')}
        </div>
        <div className="cc-caption">
          <h3>{cur.title}</h3>
          <p>{cur.meta}</p>
        </div>
      </div>

      <div className="cc-dots" role="tablist" aria-label="Sertifikatlar arasında keçid">
        {CERTS.map((c, n) => (
          <button
            key={c.src}
            type="button"
            role="tab"
            aria-selected={n === i}
            aria-label={`${n + 1}. sertifikat: ${c.title}`}
            className={`cc-dot ${n === i ? 'is-active' : ''}`}
            onClick={() => jump(n)}
          />
        ))}
      </div>

      {lightbox && (
        <div
          className="cc-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={cur.title}
          onClick={() => setLightbox(false)}
        >
          <button
            type="button"
            className="cc-lb-close"
            aria-label="Bağla"
            onClick={(e) => { e.stopPropagation(); setLightbox(false); }}
          >
            ×
          </button>
          <button
            type="button"
            className="cc-lb-nav cc-lb-prev"
            aria-label="Əvvəlki"
            onClick={(e) => { e.stopPropagation(); go(-1); }}
          >
            <ArrowRight />
          </button>
          <img src={cur.src} alt={cur.title} onClick={(e) => e.stopPropagation()} />
          <button
            type="button"
            className="cc-lb-nav cc-lb-next"
            aria-label="Növbəti"
            onClick={(e) => { e.stopPropagation(); go(1); }}
          >
            <ArrowRight />
          </button>
          <div className="cc-lb-caption" onClick={(e) => e.stopPropagation()}>
            <strong>{cur.title}</strong>
            <span>{cur.meta}</span>
          </div>
        </div>
      )}
    </div>
  );
}
