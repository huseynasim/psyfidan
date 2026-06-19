import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { SITE_NAME, SOCIAL } from "../data/site.js";
import { Psi, LinkedIn, Instagram } from "./Icons.jsx";

const NAV_ITEMS = [
  { to: "/", label: "Ana səhifə" },
  { to: "/haqqimda", label: "Haqqımda" },
  { to: "/xidmetler", label: "Xidmətlər" },
  { to: "/suallar", label: "Suallar" },
  { to: "/elaqe", label: "Əlaqə" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <NavLink to="/" className="brand" aria-label="Ana səhifə">
          <span className="brand-mark" aria-hidden="true">
            <Psi size={20} />
          </span>
          <span className="brand-text">
            {SITE_NAME}
            <small>Psixoterapevt</small>
          </span>
        </NavLink>
        <div className="header-end">
          <div className="header-social" aria-label="Sosial şəbəkələr">
            <a
              href={SOCIAL.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn — Fidan Allahverdiyeva"
            >
              <LinkedIn size={16} />
            </a>
            <a
              href={SOCIAL.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram — @psyfidan"
            >
              <Instagram size={16} />
            </a>
          </div>
          <nav className="primary-nav" aria-label="Əsas naviqasiya">
            <button
              type="button"
              className="nav-toggle"
              aria-expanded={open}
              aria-controls="navMenu"
              aria-label={open ? "Menyunu bağla" : "Menyunu aç"}
              onClick={() => setOpen((o) => !o)}
            >
              <span className="nav-toggle-bar" />
              <span className="nav-toggle-bar" />
              <span className="nav-toggle-bar" />
            </button>
            <ul id="navMenu" className={`nav-menu${open ? " is-open" : ""}`}>
              {NAV_ITEMS.map((item) => (
                <li key={item.to}>
                  <NavLink to={item.to} end={item.to === "/"}>
                    {item.label}
                  </NavLink>
                </li>
              ))}
              <li>
                <NavLink to="/elaqe" className="btn btn-primary nav-cta">
                  Görüş Təyin Et
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
