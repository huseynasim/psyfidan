import { Link } from 'react-router-dom';

export default function Breadcrumbs({ current }) {
  return (
    <ol className="breadcrumbs">
      <li>
        <Link to="/">Ana səhifə</Link>
      </li>
      <li>
        <span aria-current="page">{current}</span>
      </li>
    </ol>
  );
}
