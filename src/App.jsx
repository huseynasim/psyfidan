import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import FAQ from './pages/FAQ.jsx';
import Contact from './pages/Contact.jsx';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/haqqimda" element={<About />} />
          <Route path="/xidmetler" element={<Services />} />
          <Route path="/suallar" element={<FAQ />} />
          <Route path="/elaqe" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}
