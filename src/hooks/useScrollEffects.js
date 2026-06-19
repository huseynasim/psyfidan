import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Wires up all DOM-level visual effects from the old script.js:
 *   - Scroll progress bar
 *   - Custom cursor (dot + ring, desktop only)
 *   - Reveal-on-scroll via IntersectionObserver
 *   - Counter animation for .stat-num
 *   - Magnetic buttons
 *
 * Re-runs on every route change so it picks up the new page's DOM.
 */
export default function useScrollEffects() {
  const { pathname } = useLocation();

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

    const cleanups = [];

    // ---------- Scroll progress bar ----------
    if (!prefersReduced) {
      let bar = document.querySelector('.scroll-progress');
      if (!bar) {
        bar = document.createElement('div');
        bar.className = 'scroll-progress';
        document.body.appendChild(bar);
      }
      let ticking = false;
      const updateBar = () => {
        const scrolled = window.scrollY;
        const max = document.documentElement.scrollHeight - window.innerHeight;
        const pct = max > 0 ? (scrolled / max) * 100 : 0;
        bar.style.width = pct + '%';
        ticking = false;
      };
      const onScroll = () => {
        if (!ticking) {
          requestAnimationFrame(updateBar);
          ticking = true;
        }
      };
      document.addEventListener('scroll', onScroll, { passive: true });
      updateBar();
      cleanups.push(() => document.removeEventListener('scroll', onScroll));
    }

    // ---------- Custom cursor ----------
    let cursorCleanup = null;
    if (isFinePointer && !prefersReduced) {
      let dot = document.querySelector('.cursor-dot');
      let ring = document.querySelector('.cursor-ring');
      if (!dot) {
        dot = document.createElement('div');
        dot.className = 'cursor-dot';
        document.body.appendChild(dot);
      }
      if (!ring) {
        ring = document.createElement('div');
        ring.className = 'cursor-ring';
        document.body.appendChild(ring);
      }

      let mx = window.innerWidth / 2;
      let my = window.innerHeight / 2;
      let rx = mx;
      let ry = my;
      let cursorReady = false;
      let rafId = 0;

      const onMove = (e) => {
        mx = e.clientX;
        my = e.clientY;
        if (!cursorReady) {
          cursorReady = true;
          document.body.classList.add('cursor-ready');
        }
        dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
      };
      const animateRing = () => {
        rx += (mx - rx) * 0.18;
        ry += (my - ry) * 0.18;
        ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
        rafId = requestAnimationFrame(animateRing);
      };
      document.addEventListener('mousemove', onMove, { passive: true });
      rafId = requestAnimationFrame(animateRing);

      const hoverEnter = () => document.body.classList.add('cursor-hover');
      const hoverLeave = () => document.body.classList.remove('cursor-hover');
      const hoverables = document.querySelectorAll(
        'a, button, summary, .service-card, .step, .review, .stat-block, input, textarea, select',
      );
      hoverables.forEach((el) => {
        el.addEventListener('mouseenter', hoverEnter);
        el.addEventListener('mouseleave', hoverLeave);
      });

      cursorCleanup = () => {
        document.removeEventListener('mousemove', onMove);
        cancelAnimationFrame(rafId);
        hoverables.forEach((el) => {
          el.removeEventListener('mouseenter', hoverEnter);
          el.removeEventListener('mouseleave', hoverLeave);
        });
      };
      cleanups.push(cursorCleanup);
    }

    // ---------- Reveal on scroll ----------
    if (!prefersReduced && 'IntersectionObserver' in window) {
      const autoReveal = document.querySelectorAll(
        '.section .section-head, .service-card, .step, .review, .badge-list li, .timeline li, .svc-detail, .stats-row .stat-block, .direction-card, .contact-list li, .cta-bar, .hero-card, .hero-content > *, .faq details, .map-card, .marquee, .footer-wordmark',
      );
      autoReveal.forEach((el) => {
        if (!el.hasAttribute('data-reveal')) el.setAttribute('data-reveal', '');
      });

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: '0px 0px -80px 0px' },
      );
      document.querySelectorAll('[data-reveal]').forEach((el) => {
        if (!el.classList.contains('is-visible')) observer.observe(el);
      });
      cleanups.push(() => observer.disconnect());
    } else {
      document.querySelectorAll('[data-reveal]').forEach((el) => el.classList.add('is-visible'));
    }

    // ---------- Counter animation ----------
    if (!prefersReduced && 'IntersectionObserver' in window) {
      const animateCounter = (el) => {
        if (el.dataset.counted) return;
        const text = el.textContent.trim();
        const match = text.match(/^(\d+)(.*)$/);
        if (!match) return;
        const target = parseInt(match[1], 10);
        const suffix = match[2];
        if (target < 5) return;
        el.dataset.counted = '1';

        const duration = 1600;
        const startTime = performance.now();
        const step = (now) => {
          const elapsed = now - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 4);
          const current = Math.floor(target * eased);
          el.textContent = current + suffix;
          if (progress < 1) requestAnimationFrame(step);
          else el.textContent = target + suffix;
        };
        requestAnimationFrame(step);
      };
      const statObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              animateCounter(entry.target);
              statObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.6 },
      );
      document.querySelectorAll('.stat-num').forEach((el) => statObserver.observe(el));
      cleanups.push(() => statObserver.disconnect());
    }

    // ---------- Magnetic buttons ----------
    if (isFinePointer && !prefersReduced) {
      const magnets = document.querySelectorAll('.btn-primary, .nav-cta');
      const handlers = [];
      magnets.forEach((btn) => {
        let raf = null;
        const onMove = (e) => {
          if (raf) return;
          raf = requestAnimationFrame(() => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            btn.style.transform = `translate(${x * 0.18}px, ${y * 0.22}px)`;
            raf = null;
          });
        };
        const onLeave = () => {
          btn.style.transform = '';
        };
        btn.addEventListener('mousemove', onMove);
        btn.addEventListener('mouseleave', onLeave);
        handlers.push([btn, onMove, onLeave]);
      });
      cleanups.push(() => {
        handlers.forEach(([btn, onMove, onLeave]) => {
          btn.removeEventListener('mousemove', onMove);
          btn.removeEventListener('mouseleave', onLeave);
        });
      });
    }

    return () => cleanups.forEach((fn) => fn());
  }, [pathname]);
}
