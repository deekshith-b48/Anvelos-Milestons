/* ==============================
   Landing Page - 2 | scripts.js
   ============================== */

'use strict';

/* ---- Activate JS-gated animations ---- */
document.body.classList.add('lp-js-ready');

/* ---- Navbar scroll shadow ---- */
(function initNavbarScroll() {
  const navbar = document.getElementById('main-navbar');
  if (!navbar) return;

  const onScroll = () => {
    if (window.scrollY > 40) {
      navbar.classList.add('lp-scrolled');
    } else {
      navbar.classList.remove('lp-scrolled');
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // run on load
}());

/* ---- Active nav link on scroll ---- */
(function initActiveNavLink() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.lp-nav-link[href^="#"]');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + entry.target.id) {
            link.classList.add('active');
          }
        });
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  sections.forEach(section => observer.observe(section));
}());

/* ---- Scroll Animations (IntersectionObserver) ---- */
(function initScrollAnimations() {
  const animatedEls = document.querySelectorAll('[data-animate]');
  if (!animatedEls.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('lp-visible');
        observer.unobserve(entry.target); // animate once
      }
    });
  }, { threshold: 0.15 });

  animatedEls.forEach(el => observer.observe(el));
}());

/* ---- Newsletter form submission ---- */
(function initNewsletterForm() {
  const form = document.getElementById('newsletter-form');
  const emailInput = document.getElementById('newsletter-email');
  const submitBtn = document.getElementById('newsletter-submit-btn');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const email = emailInput.value.trim();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      emailInput.classList.add('is-invalid');
      emailInput.focus();
      return;
    }

    emailInput.classList.remove('is-invalid');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Subscribing…';

    // Simulate async call
    setTimeout(() => {
      submitBtn.textContent = '✓ Subscribed!';
      submitBtn.classList.add('lp-btn-success');
      emailInput.value = '';
      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Subscribe';
        submitBtn.classList.remove('lp-btn-success');
      }, 3000);
    }, 1200);
  });
}());

/* ---- Smooth close mobile nav on link click ---- */
(function initMobileNavClose() {
  const navLinks = document.querySelectorAll('#navbarNav .lp-nav-link');
  const collapseEl = document.getElementById('navbarNav');
  if (!collapseEl) return;

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      const bsCollapse = bootstrap.Collapse.getInstance(collapseEl);
      if (bsCollapse) bsCollapse.hide();
    });
  });
}());
