(() => {
  'use strict';

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  // ---------- Year in footer ----------
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ---------- Mobile nav toggle ----------
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');

  if (navToggle && navMenu) {
    const closeNav = () => {
      navMenu.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.setAttribute('aria-label', 'Menyunu aç');
    };
    const openNav = () => {
      navMenu.classList.add('is-open');
      navToggle.setAttribute('aria-expanded', 'true');
      navToggle.setAttribute('aria-label', 'Menyunu bağla');
    };

    navToggle.addEventListener('click', () => {
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      expanded ? closeNav() : openNav();
    });

    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        if (window.matchMedia('(max-width: 760px)').matches) closeNav();
      });
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navMenu.classList.contains('is-open')) {
        closeNav();
        navToggle.focus();
      }
    });
  }

  // ---------- Scroll progress bar ----------
  if (!prefersReduced) {
    const bar = document.createElement('div');
    bar.className = 'scroll-progress';
    document.body.appendChild(bar);

    let ticking = false;
    const updateBar = () => {
      const scrolled = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const pct = max > 0 ? (scrolled / max) * 100 : 0;
      bar.style.width = pct + '%';
      ticking = false;
    };
    document.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(updateBar);
        ticking = true;
      }
    }, { passive: true });
  }

  // ---------- Custom cursor (desktop only) ----------
  if (isFinePointer && !prefersReduced) {
    const dot = document.createElement('div');
    dot.className = 'cursor-dot';
    const ring = document.createElement('div');
    ring.className = 'cursor-ring';
    document.body.appendChild(dot);
    document.body.appendChild(ring);

    let mx = window.innerWidth / 2, my = window.innerHeight / 2;
    let rx = mx, ry = my;
    let cursorReady = false;

    document.addEventListener('mousemove', (e) => {
      mx = e.clientX;
      my = e.clientY;
      if (!cursorReady) {
        cursorReady = true;
        document.body.classList.add('cursor-ready');
      }
      dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
    }, { passive: true });

    // Lerp ring
    const animateRing = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      requestAnimationFrame(animateRing);
    };
    requestAnimationFrame(animateRing);

    // Hover targets
    const hoverables = 'a, button, summary, .service-card, .step, .review, .stat-block, input, textarea, select, label[for]';
    document.querySelectorAll(hoverables).forEach(el => {
      el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
      el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
    });
  }

  // ---------- Split-text reveal (per word) ----------
  if (!prefersReduced) {
    document.querySelectorAll('[data-split]').forEach(el => {
      const text = el.innerHTML.trim();
      // Split by space, preserving any nested <span> tags by treating them as words
      // Simple word split — won't break inline HTML if used carefully
      const wrapper = document.createElement('span');
      wrapper.className = 'split-line';
      // Split inner content keeping <span> tags whole
      const tokens = text.split(/(\s+)/);
      let wi = 1;
      tokens.forEach(tok => {
        if (tok.trim() === '') {
          wrapper.appendChild(document.createTextNode(' '));
        } else {
          const w = document.createElement('span');
          w.className = 'split-word';
          w.setAttribute('data-i', wi++);
          w.innerHTML = tok;
          wrapper.appendChild(w);
        }
      });
      el.innerHTML = '';
      el.appendChild(wrapper);
    });
  }

  // ---------- Reveal on scroll ----------
  if (!prefersReduced && 'IntersectionObserver' in window) {
    const autoReveal = document.querySelectorAll(
      '.section .section-head, .service-card, .step, .review, .badge-list li, .timeline li, .svc-detail, .stats-row .stat-block, .direction-card, .contact-list li, .cta-bar, .hero-card, .hero-content > *, .faq details, .map-card, .marquee, .footer-wordmark'
    );
    autoReveal.forEach((el) => {
      if (!el.hasAttribute('data-reveal')) {
        el.setAttribute('data-reveal', '');
      }
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -80px 0px' });

    document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el));

    // Split-line reveal observer (separate so it triggers immediately on visible)
    const splitObs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          splitObs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.split-line').forEach(el => splitObs.observe(el));
  } else {
    document.querySelectorAll('[data-reveal]').forEach(el => el.classList.add('is-visible'));
    document.querySelectorAll('.split-line').forEach(el => el.classList.add('is-visible'));
  }

  // ---------- Counter animation for stats ----------
  if (!prefersReduced && 'IntersectionObserver' in window) {
    const animateCounter = (el) => {
      const text = el.textContent.trim();
      const match = text.match(/^(\d+)(.*)$/);
      if (!match) return;
      const target = parseInt(match[1], 10);
      const suffix = match[2];
      if (target < 5) return;

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

    const statObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          statObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.6 });

    document.querySelectorAll('.stat-num').forEach(el => statObserver.observe(el));
  }

  // ---------- Magnetic buttons (desktop only) ----------
  if (isFinePointer && !prefersReduced) {
    const magnets = document.querySelectorAll('.btn-primary, .nav-cta');
    magnets.forEach(btn => {
      let raf = null;
      btn.addEventListener('mousemove', (e) => {
        if (raf) return;
        raf = requestAnimationFrame(() => {
          const rect = btn.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
          btn.style.transform = `translate(${x * 0.18}px, ${y * 0.22}px)`;
          raf = null;
        });
      });
      btn.addEventListener('mouseleave', () => {
        btn.style.transform = '';
      });
    });
  }

  // ---------- Page enter fade ----------
  if (!prefersReduced) {
    document.body.style.opacity = '0';
    requestAnimationFrame(() => {
      document.body.style.transition = 'opacity 600ms cubic-bezier(.16,1,.3,1)';
      document.body.style.opacity = '1';
    });
  }

  // ---------- Contact form validation ----------
  const form = document.getElementById('contactForm');
  if (!form) return;

  const fields = {
    name: { input: form.querySelector('#name'), err: form.querySelector('#err-name') },
    email: { input: form.querySelector('#email'), err: form.querySelector('#err-email') },
    message: { input: form.querySelector('#message'), err: form.querySelector('#err-message') },
    consent: { input: form.querySelector('#consent'), err: form.querySelector('#err-consent') },
  };
  const submitBtn = form.querySelector('#submitBtn');
  const successEl = form.querySelector('#formSuccess');

  const setError = (key, msg) => {
    const f = fields[key];
    if (!f) return;
    f.err.textContent = msg || '';
    const wrapper = f.input.closest('.field') || f.input.parentElement;
    if (wrapper) wrapper.classList.toggle('has-error', Boolean(msg));
  };

  const validate = () => {
    let valid = true;
    let firstInvalid = null;

    const name = fields.name.input.value.trim();
    if (name.length < 2) {
      setError('name', 'Adınızı tam yazın.');
      firstInvalid = firstInvalid || fields.name.input;
      valid = false;
    } else setError('name', '');

    const email = fields.email.input.value.trim();
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!emailRe.test(email)) {
      setError('email', 'Düzgün e-poçt ünvanı daxil edin.');
      firstInvalid = firstInvalid || fields.email.input;
      valid = false;
    } else setError('email', '');

    const msg = fields.message.input.value.trim();
    if (msg.length < 10) {
      setError('message', 'Mesajınız ən azı 10 simvol olmalıdır.');
      firstInvalid = firstInvalid || fields.message.input;
      valid = false;
    } else setError('message', '');

    if (!fields.consent.input.checked) {
      setError('consent', 'Davam etmək üçün razılığı təsdiqləyin.');
      firstInvalid = firstInvalid || fields.consent.input;
      valid = false;
    } else setError('consent', '');

    if (firstInvalid) firstInvalid.focus();
    return valid;
  };

  ['name', 'email', 'message'].forEach(key => {
    fields[key].input.addEventListener('blur', () => {
      if (fields[key].input.value.trim().length === 0) return;
      if (key === 'name') {
        const v = fields.name.input.value.trim();
        setError('name', v.length < 2 ? 'Adınızı tam yazın.' : '');
      }
      if (key === 'email') {
        const v = fields.email.input.value.trim();
        const ok = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);
        setError('email', ok ? '' : 'Düzgün e-poçt ünvanı daxil edin.');
      }
      if (key === 'message') {
        const v = fields.message.input.value.trim();
        setError('message', v.length < 10 ? 'Mesajınız ən azı 10 simvol olmalıdır.' : '');
      }
    });
  });
  fields.consent.input.addEventListener('change', () => {
    if (fields.consent.input.checked) setError('consent', '');
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    successEl.hidden = true;
    if (!validate()) return;

    submitBtn.classList.add('is-loading');
    submitBtn.disabled = true;

    setTimeout(() => {
      submitBtn.classList.remove('is-loading');
      submitBtn.disabled = false;
      successEl.hidden = false;
      form.reset();
      successEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 1100);
  });
})();
