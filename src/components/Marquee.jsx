const ITEMS = [
  'Təşviş Pozuntuları ',
  'Stress ve Tükənmişlik ',
  'Özünə İnam ',
  'Emosional Tənzimlənmə ',
  'Şəxsi inkişaf ',
  'Münasibət problemləri',
  'Ailə dinamikası',
  'Travma',
  'Həyat keçidləri',
  'Narahatlıq',
  'Depressiya',
  'Özünüqiymətləndirmə',
];

function Row() {
  return (
    <span>
      {ITEMS.map((item, i) => (
        <span key={i}>
          {item}
          {i < ITEMS.length - 1 && (
            <>
              {' '}
              <i>—</i>{' '}
            </>
          )}
        </span>
      ))}
    </span>
  );
}

export default function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        <Row />
        <Row />
      </div>
    </div>
  );
}
