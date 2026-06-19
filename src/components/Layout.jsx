import { Outlet } from 'react-router-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import useScrollEffects from '../hooks/useScrollEffects.js';

export default function Layout() {
  useScrollEffects();
  return (
    <>
      <a href="#main" className="skip-link">Əsas məzmuna keç</a>
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
