import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';
import Lenis from '@studio-freight/lenis';

// Register the GSAP plugins
gsap.registerPlugin(ScrollTrigger, TextPlugin);

// --- UTILITY FUNCTIONS ---
const initSmoothScroll = (): Lenis => {
  const lenis = new Lenis();
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => { lenis?.raf(time * 1000); });
  gsap.ticker.lagSmoothing(0);
  return lenis;
};

const animateSections = (selector: string, options: Partial<GSAPTweenVars> = {}): void => {
  const sections = gsap.utils.toArray(selector);
  sections.forEach((section) => {
    gsap.from(section as HTMLElement, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: { trigger: section as HTMLElement, start: 'top 85%' },
      ...options
    });
  });
};

// --- LOADING SPINNER ---
window.onload = () => {
  const loader = document.getElementById('loader');
  if (loader) {
    gsap.to(loader, {
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out',
      onComplete: () => {
        gsap.set(loader, { display: 'none' });
      }
    });
  }
};document.addEventListener('DOMContentLoaded', () => {

  // --- PAGE ROUTING LOGIC ---
  const isLionPage = document.body.classList.contains('lion-page');
  const isLeopardPage = document.body.classList.contains('leopard-page');
  const isRhinoPage = document.body.classList.contains('rhino-page');
  const isElephantPage = document.body.classList.contains('elephant-page');
  const isBuffaloPage = document.body.classList.contains('buffalo-page');

  if (isLionPage) {
    initLionPageAnimations();
  } else if (isLeopardPage) {
    initLeopardPageAnimations();
  } else if (isRhinoPage) {
    initRhinoPageAnimations();
  } else if (isElephantPage) {
    initElephantPageAnimations();
  } else if (isBuffaloPage) {
    initBuffaloPageAnimations();
  } else {
    initMainPageLayout();
  }

  // --- LION PAGE ANIMATIONS ---
  function initLionPageAnimations() {
    initSmoothScroll();

    animateSections('.content-section');

    const scroller = document.querySelector('.gallery-scroller');
    if (scroller) {
      const images = gsap.utils.toArray('.gallery-scroller .gallery-image');
      images.forEach(image => {
        const clone = (image as HTMLElement).cloneNode(true);
        scroller.appendChild(clone);
      });
      const totalWidth = (scroller as HTMLElement).offsetWidth / 2;
      gsap.to(scroller, { x: -totalWidth, duration: 40, ease: 'none', repeat: -1 });
    }
  }

  // --- LEOPARD PAGE ANIMATIONS ---
  function initLeopardPageAnimations() {
    initSmoothScroll();

    const body = document.body;
    body.addEventListener('mousemove', e => {
      body.style.setProperty('--mouse-x', e.clientX + 'px');
      body.style.setProperty('--mouse-y', e.clientY + 'px');
    });

    const sections = gsap.utils.toArray('.leopard-page .content-section');
    sections.forEach(section => {
      const el = section as HTMLElement;
      const slideDir = el.classList.contains('align-left') ? -100 : 100;
      gsap.from(el, { opacity: 0, x: slideDir, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 80%' }});
    });
  }

  // --- RHINO PAGE ANIMATIONS ---
  function initRhinoPageAnimations() {
    initSmoothScroll();

    const sections = gsap.utils.toArray('.rhino-page .content-section');
    sections.forEach(section => {
      gsap.from(section as HTMLElement, {
        opacity: 0,
        y: 100,
        scale: 0.98,
        duration: 0.8,
        ease: 'back.out(1)',
        scrollTrigger: { trigger: section as HTMLElement, start: 'top 80%' }
      });
    });
  }

  // --- ELEPHANT PAGE ANIMATIONS ---
  function initElephantPageAnimations() {
    initSmoothScroll();

    const sections = gsap.utils.toArray('.elephant-page .content-section');
    sections.forEach((section) => {
      const el = section as HTMLElement;
      const slideDir = el.classList.contains('wide-image') ? -100 : 100;
      gsap.from(el, {
        opacity: 0,
        x: slideDir,
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 85%' }
      });
    });
  }

  // --- BUFFALO PAGE ANIMATIONS ---
  function initBuffaloPageAnimations() {
    initSmoothScroll();

    // Animate hero section
    const heroSection = document.querySelector('.hero-buffalo');
    if (heroSection) {
      gsap.from(heroSection.querySelector('h1'), {
        opacity: 0,
        y: -50,
        duration: 1,
        ease: 'power2.out'
      });

      gsap.from(heroSection.querySelector('p'), {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power2.out',
        delay: 0.3
      });
    }

    // Animate content sections
    animateSections('.buffalo-page .content-section');

    // Buffalo Gallery Autoscrolling Carousel
    const gallery = document.querySelector('.buffalo-gallery');
    if (gallery) {
      const scroller = gallery.querySelector('.gallery-scroller');
      if (scroller) {
        // Add pause on hover functionality
        gallery.addEventListener('mouseenter', () => {
          (scroller as HTMLElement).style.animationPlayState = 'paused';
        });

        gallery.addEventListener('mouseleave', () => {
          (scroller as HTMLElement).style.animationPlayState = 'running';
        });
      }
    }

    // Footer navigation animation
    const footerLinks = gsap.utils.toArray('.page-footer .footer-nav');
    if (footerLinks.length > 0) {
      gsap.from(footerLinks, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.page-footer',
          start: 'top 90%'
        }
      });
    }
  }

  // --- MAIN PAGE LAYOUT & ANIMATIONS ---
  function initMainPageLayout() {
    // ... [Main page code remains exactly the same] ...
    const switchToVerticalBtn = document.getElementById('switch-to-vertical') as HTMLButtonElement;
    const switchToHorizontalBtn = document.getElementById('switch-to-horizontal') as HTMLButtonElement;
    const verticalLayout = document.getElementById('layout-vertical-scroll') as HTMLElement;
    const horizontalLayout = document.getElementById('layout-horizontal-carousel') as HTMLElement;
    const parallaxLayer = document.querySelector('#layout-horizontal-carousel') as HTMLElement;
    const layoutParam = new URLSearchParams(window.location.search).get('layout');

    if (layoutParam === 'horizontal') {
      verticalLayout.style.display = 'none';
      horizontalLayout.style.display = 'block';
      switchToHorizontalBtn.classList.add('active');
      switchToVerticalBtn.classList.remove('active');
      initHorizontalCarouselAnimations(parallaxLayer);
    } else {
      horizontalLayout.style.display = 'none';
      verticalLayout.style.display = 'block';
      switchToVerticalBtn.classList.add('active');
      switchToHorizontalBtn.classList.remove('active');
      initVerticalScrollAnimations();
    }

    switchToHorizontalBtn.addEventListener('click', () => {
      if (layoutParam !== 'horizontal') {
        window.location.href = window.location.pathname + '?layout=horizontal';
      }
    });

    switchToVerticalBtn.addEventListener('click', () => {
      if (layoutParam === 'horizontal') {
        window.location.href = window.location.pathname;
      }
    });
  }

  function initVerticalScrollAnimations() {
    const lenis = new Lenis();
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => { lenis?.raf(time * 1000); });
    gsap.ticker.lagSmoothing(0);

    const heroTimeline = gsap.timeline();
    heroTimeline
      .from('#layout-vertical-scroll .hero h1', { opacity: 0, y: -50, duration: 1, ease: 'power2.out' })
      .from('#layout-vertical-scroll .hero p', { opacity: 0, y: -20, duration: 0.8, ease: 'power2.out' }, '-=0.6');

    const animals = ['lion', 'leopard', 'rhino', 'elephant', 'buffalo'];
    animals.forEach(animal => {
      const sectionId = `#${animal}-v`;
      const sectionEl = document.querySelector(sectionId);
      if (!sectionEl) return;

      const h2 = sectionEl.querySelector('h2');
      const a = sectionEl.querySelector('a');
      const p = sectionEl.querySelector('p') as HTMLElement;
      const originalText = p.textContent || '';

      gsap.from([h2, a], { opacity: 0, y: 30, duration: 0.8, stagger: 0.2, ease: 'power2.out', scrollTrigger: { trigger: sectionId, start: 'top 75%' }});

      switch (animal) {
        case 'lion': p.textContent = ''; gsap.to(p, { text: originalText, duration: 2.5, ease: 'none', scrollTrigger: { trigger: sectionId, start: 'top 70%' } }); break;
        case 'leopard': const words = originalText.split(' '); p.innerHTML = words.map(word => `<span style="display: inline-block; opacity: 0;">${word}</span>`).join(' '); gsap.to(p.children, { opacity: 1, stagger: 0.08, duration: 0.5, ease: 'power1.in', scrollTrigger: { trigger: sectionId, start: 'top 70%' } }); break;
        case 'rhino': const chars = originalText.split(''); p.style.overflow = 'hidden'; p.innerHTML = chars.map(char => `<span style="display: inline-block; transform: translateY(100%);">${char === ' ' ? '&nbsp;' : char}</span>`).join(''); gsap.to(p.children, { y: '0%', stagger: 0.03, duration: 0.8, ease: 'power2.out', scrollTrigger: { trigger: sectionId, start: 'top 70%' } }); break;
        case 'elephant': const elephantChars = originalText.split(''); p.innerHTML = elephantChars.map(char => `<span style="opacity: 0;">${char === ' ' ? '&nbsp;' : char}</span>`).join(''); gsap.to(p.children, { opacity: 1, stagger: 0.04, duration: 1.5, ease: 'power1.in', scrollTrigger: { trigger: sectionId, start: 'top 70%' } }); break;
        default: gsap.from(p, { opacity: 0, x: -100, duration: 1.2, ease: 'power3.out', scrollTrigger: { trigger: sectionId, start: 'top 70%' } }); break;
      }
    });
  }

  function initHorizontalCarouselAnimations(parallaxLayer: HTMLElement) {
    const slides = gsap.utils.toArray('#layout-horizontal-carousel .carousel-slide') as HTMLElement[];
    
    gsap.to(slides, {
      xPercent: -100 * (slides.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: '#layout-horizontal-carousel',
        pin: true,
        scrub: 1,
        end: `+=${(slides.length * 1000)}`,
        snap: { snapTo: 1 / (slides.length - 1), duration: 0.4, ease: 'power2.inOut' }
      }
    });

    slides.forEach((slide) => {
      gsap.from(slide.querySelector('.slide-content'), {
        y: 100, opacity: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: {
          trigger: slide,
          containerAnimation: gsap.getTweensOf(slides)[0],
          start: 'center 60%',
          end: 'center 40%',
          toggleActions: 'play none none reverse'
        }
      });
    });

    parallaxLayer.addEventListener('mousemove', (e) => {
      const { clientX, clientY } = e;
      const x = clientX / window.innerWidth - 0.5;
      const y = clientY / window.innerHeight - 0.5;
      gsap.to('#layout-horizontal-carousel .carousel-slide', { 
        x: -x * 40,
        y: -y * 40,
        duration: 0.5,
        ease: 'power2.out'
      });
    });
  }
});