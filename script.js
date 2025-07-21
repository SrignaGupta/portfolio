document.addEventListener('DOMContentLoaded', () => {
  const arrowBtns = document.querySelectorAll('.arrow-btn');

  arrowBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const desc = btn.parentElement.nextElementSibling;
      const arrow = btn.querySelector('.arrow');

      if (desc.style.display === 'block') {
        desc.style.display = 'none';
        arrow.classList.remove('rotate');
      } else {
        desc.style.display = 'block';
        arrow.classList.add('rotate');
      }
    });
  });

  document.querySelector('.main').classList.add('show');
});
