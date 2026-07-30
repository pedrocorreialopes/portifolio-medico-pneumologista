/* ============================================
   Dr. Paulo Condé — Pneumologista
   script.js | Interatividade e responsividade
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {
  /* Inicializa ícones Lucide
     -------------------------------------------- */
  lucide.createIcons();

  /* Elementos
     -------------------------------------------- */
  const header = document.getElementById('header');
  const nav = document.getElementById('nav');
  const navToggle = document.getElementById('navToggle');
  const navClose = document.getElementById('navClose');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');
  const faqItems = document.querySelectorAll('.faq-item');
  const track = document.getElementById('testimonialsTrack');
  const prevBtn = document.getElementById('prevTestimonial');
  const nextBtn = document.getElementById('nextTestimonial');
  const dotsContainer = document.getElementById('testimonialsDots');

  /* Header: efeito ao rolar
     -------------------------------------------- */
  function updateHeader() {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', updateHeader, { passive: true });
  updateHeader();

  /* Menu mobile
     -------------------------------------------- */
  let overlay = document.querySelector('.nav-overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.className = 'nav-overlay';
    document.body.appendChild(overlay);
  }

  function openMenu() {
    nav.classList.add('open');
    overlay.classList.add('active');
    navToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    nav.classList.remove('open');
    overlay.classList.remove('active');
    navToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  navToggle.addEventListener('click', openMenu);
  navClose.addEventListener('click', closeMenu);
  overlay.addEventListener('click', closeMenu);

  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      if (nav.classList.contains('open')) {
        closeMenu();
      }
    });
  });

  /* Atualiza link ativo no scroll
     -------------------------------------------- */
  function setActiveLink() {
    let current = '';
    const scrollPos = window.scrollY + 120;

    sections.forEach(function (section) {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(function (link) {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', setActiveLink, { passive: true });
  setActiveLink();

  /* Acordeão FAQ
     -------------------------------------------- */
  faqItems.forEach(function (item) {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', function () {
      const isActive = item.classList.contains('active');

      // Fecha todos os outros itens
      faqItems.forEach(function (other) {
        if (other !== item) {
          other.classList.remove('active');
          other.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
        }
      });

      // Alterna o estado do item clicado
      item.classList.toggle('active');
      question.setAttribute('aria-expanded', String(!isActive));
    });
  });

  /* Carrossel de depoimentos
     -------------------------------------------- */
  const cards = Array.from(track.children);
  const totalCards = cards.length;
  let visibleCards = getVisibleCards();
  let currentIndex = 0;
  let autoSlideInterval;

  function getVisibleCards() {
    if (window.innerWidth <= 640) return 1;
    if (window.innerWidth <= 1024) return 2;
    return 3;
  }

  function createDots() {
    dotsContainer.innerHTML = '';
    const dotsCount = totalCards - visibleCards + 1;
    for (let i = 0; i < dotsCount; i++) {
      const dot = document.createElement('button');
      dot.className = 'testimonials-dot';
      dot.setAttribute('aria-label', 'Ir para depoimento ' + (i + 1));
      dot.addEventListener('click', function () {
        goToSlide(i);
        resetAutoSlide();
      });
      dotsContainer.appendChild(dot);
    }
  }

  function updateDots() {
    const dots = dotsContainer.querySelectorAll('.testimonials-dot');
    dots.forEach(function (dot, index) {
      dot.classList.toggle('active', index === currentIndex);
    });
  }

  function goToSlide(index) {
    const maxIndex = totalCards - visibleCards;
    currentIndex = Math.max(0, Math.min(index, maxIndex));
    const cardWidth = cards[0].offsetWidth;
    const gap = 24;
    const offset = currentIndex * (cardWidth + gap);
    track.style.transform = 'translateX(-' + offset + 'px)';
    updateDots();
  }

  function nextSlide() {
    const maxIndex = totalCards - visibleCards;
    if (currentIndex < maxIndex) {
      goToSlide(currentIndex + 1);
    } else {
      goToSlide(0);
    }
  }

  function prevSlide() {
    if (currentIndex > 0) {
      goToSlide(currentIndex - 1);
    } else {
      goToSlide(totalCards - visibleCards);
    }
  }

  function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 5000);
  }

  function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
  }

  function initCarousel() {
    visibleCards = getVisibleCards();
    createDots();
    goToSlide(0);
  }

  prevBtn.addEventListener('click', function () {
    prevSlide();
    resetAutoSlide();
  });

  nextBtn.addEventListener('click', function () {
    nextSlide();
    resetAutoSlide();
  });

  window.addEventListener('resize', function () {
    const newVisible = getVisibleCards();
    if (newVisible !== visibleCards) {
      visibleCards = newVisible;
      createDots();
      goToSlide(0);
    } else {
      goToSlide(currentIndex);
    }
  });

  initCarousel();
  startAutoSlide();

  /* Animação de entrada ao scroll (reveal)
     -------------------------------------------- */
  const revealElements = document.querySelectorAll(
    '.section-header, .treatment-card, .symptom-card, .testimonial-card, .faq-item, .contact-card, .about-content, .about-media, .hero-content, .hero-media, .credibility-item'
  );

  revealElements.forEach(function (el) {
    el.classList.add('reveal');
  });

  const revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(function (el) {
    revealObserver.observe(el);
  });

  /* Fecha menu ao pressionar Escape
     -------------------------------------------- */
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && nav.classList.contains('open')) {
      closeMenu();
    }
  });

  /* Scroll suave para links internos (fallback cross-browser)
     -------------------------------------------- */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerOffset = header.offsetHeight + 20;
        const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
});
