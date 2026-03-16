// FAQ accordion
function toggleFaq(item) {
  const question = item.querySelector('.faq-question');
  const answer = item.querySelector('.faq-answer');
  const isActive = item.classList.contains('active');

  document.querySelectorAll('[data-faq]').forEach(i => {
    i.classList.remove('active');
    i.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
    const a = i.querySelector('.faq-answer');
    if (a) a.style.maxHeight = null;
  });

  if (!isActive) {
    item.classList.add('active');
    question.setAttribute('aria-expanded', 'true');
    if (answer) answer.style.maxHeight = answer.scrollHeight + 'px';
  }
}

document.querySelectorAll('[data-faq]').forEach(item => {
  const question = item.querySelector('.faq-question');

  question.addEventListener('click', () => toggleFaq(item));

  question.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleFaq(item);
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
