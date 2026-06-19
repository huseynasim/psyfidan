import { Star } from './Icons.jsx';

export default function Rating({ count = 5 }) {
  return (
    <div className="rating" aria-label={`${count} ulduzdan ${count}`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} />
      ))}
    </div>
  );
}
