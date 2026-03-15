// FAQ accordion toggle
document.querySelectorAll('.faq-item').forEach(item => {
  const toggle = item.querySelector('.faq-toggle');
  const answer = item.querySelector('.faq-answer');

  item.addEventListener('click', () => {
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => {
      i.classList.remove('open');
      const t = i.querySelector('.faq-toggle');
      if (t) t.textContent = '+';
    });

    if (!isOpen) {
      item.classList.add('open');
      if (toggle) toggle.textContent = '−';
    }
  });
});
