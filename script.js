// FAQ accordion
document.querySelectorAll('[data-faq]').forEach(item => {
  const question = item.querySelector('.faq-question');
  const answer = item.querySelector('.faq-answer');

  question.addEventListener('click', () => {
    const isActive = item.classList.contains('active');

    document.querySelectorAll('[data-faq]').forEach(i => {
      i.classList.remove('active');
      const a = i.querySelector('.faq-answer');
      if (a) a.style.maxHeight = null;
    });

    if (!isActive) {
      item.classList.add('active');
      if (answer) answer.style.maxHeight = answer.scrollHeight + 'px';
    }
  });
});

// Scroll-triggered reveal animations
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
);

document.querySelectorAll('[data-reveal], [data-stagger]').forEach(el => {
  revealObserver.observe(el);
});
