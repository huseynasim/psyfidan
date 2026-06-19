import { Link } from 'react-router-dom';

export default function CTABar({
  title,
  description,
  buttonText = 'Konsultasiya yazıl',
  buttonTo = '/elaqe',
}) {
  return (
    <div className="cta-bar">
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <Link to={buttonTo} className="btn btn-primary btn-lg">
        {buttonText}
      </Link>
    </div>
  );
}
