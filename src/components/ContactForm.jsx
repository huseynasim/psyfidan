import { useRef, useState } from 'react';

const INITIAL = {
  name: '',
  email: '',
  phone: '',
  service: 'ferdi',
  message: '',
  consent: false,
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(data) {
  const errs = {};
  if (data.name.trim().length < 2) errs.name = 'Adınızı tam yazın.';
  if (!EMAIL_RE.test(data.email.trim())) errs.email = 'Düzgün e-poçt ünvanı daxil edin.';
  if (data.message.trim().length < 10) errs.message = 'Mesajınız ən azı 10 simvol olmalıdır.';
  if (!data.consent) errs.consent = 'Davam etmək üçün razılığı təsdiqləyin.';
  return errs;
}

export default function ContactForm() {
  const [data, setData] = useState(INITIAL);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const successRef = useRef(null);

  const set = (field) => (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setData((d) => ({ ...d, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: '' }));
  };

  const onBlur = (field) => () => {
    const value = data[field];
    if (typeof value === 'string' && value.trim() === '') return;
    const errs = validate(data);
    setErrors((prev) => ({ ...prev, [field]: errs[field] || '' }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setSuccess(false);
    const errs = validate(data);
    setErrors(errs);
    if (Object.keys(errs).length > 0) {
      // Focus first invalid
      const firstKey = ['name', 'email', 'message', 'consent'].find((k) => errs[k]);
      if (firstKey) {
        const el = document.getElementById(firstKey);
        if (el) el.focus();
      }
      return;
    }

    setLoading(true);
    // Simulated submit — replace with real API call later
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setData(INITIAL);
      requestAnimationFrame(() => {
        successRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      });
    }, 1100);
  };

  return (
    <form className="contact-form" onSubmit={onSubmit} noValidate>
      <h2 style={{ marginTop: 0 }}>Mesaj göndər</h2>
      <p style={{ marginBottom: 18, fontSize: '.92rem' }}>
        Formu doldurun, 24 saat ərzində sizinlə əlaqə saxlayacağam.
      </p>

      <div className={`field${errors.name ? ' has-error' : ''}`}>
        <label htmlFor="name">
          Ad, Soyad <span aria-hidden="true">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          autoComplete="name"
          value={data.name}
          onChange={set('name')}
          onBlur={onBlur('name')}
          required
          aria-required="true"
        />
        <p className="error" aria-live="polite">{errors.name || ''}</p>
      </div>

      <div className="field-row">
        <div className={`field${errors.email ? ' has-error' : ''}`}>
          <label htmlFor="email">
            E-poçt <span aria-hidden="true">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            value={data.email}
            onChange={set('email')}
            onBlur={onBlur('email')}
            required
            aria-required="true"
          />
          <p className="error" aria-live="polite">{errors.email || ''}</p>
        </div>
        <div className="field">
          <label htmlFor="phone">Telefon</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            autoComplete="tel"
            inputMode="tel"
            value={data.phone}
            onChange={set('phone')}
          />
          <p className="helper">İstəyə görə</p>
        </div>
      </div>

      <div className="field">
        <label htmlFor="service">Xidmət növü</label>
        <select id="service" name="service" value={data.service} onChange={set('service')}>
          <option value="ferdi">Fərdi terapiya</option>
          <option value="onlayn">Onlayn seans</option>
          <option value="bilmirem">Hələ qərar verməmişəm</option>
        </select>
      </div>

      <div className={`field${errors.message ? ' has-error' : ''}`}>
        <label htmlFor="message">
          Mesajınız <span aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={data.message}
          onChange={set('message')}
          onBlur={onBlur('message')}
          required
          aria-required="true"
          placeholder="Sizi narahat edən mövzunu qısaca yazın..."
        />
        <p className="error" aria-live="polite">{errors.message || ''}</p>
      </div>

      <label className="check">
        <input
          type="checkbox"
          id="consent"
          name="consent"
          checked={data.consent}
          onChange={set('consent')}
          required
          aria-required="true"
        />
        <span>Şəxsi məlumatlarımın yalnız əlaqə məqsədilə istifadə olunmasına razıyam.</span>
      </label>
      <p className="error" aria-live="polite">{errors.consent || ''}</p>

      <button
        type="submit"
        className={`btn btn-primary btn-lg btn-block${loading ? ' is-loading' : ''}`}
        disabled={loading}
      >
        <span className="btn-label">Mesajı göndər</span>
        <span className="btn-spinner" aria-hidden="true" />
      </button>

      {success && (
        <p ref={successRef} className="success" role="status" aria-live="polite">
          Mesajınız göndərildi. 24 saat ərzində sizinlə əlaqə saxlayacağam.
        </p>
      )}
    </form>
  );
}
