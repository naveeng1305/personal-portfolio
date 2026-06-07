// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

document.querySelectorAll('.horizontal-section').forEach(section => {
  const track = section.querySelector('.horizontal-track');

  window.addEventListener('scroll', () => {
    const rect = section.getBoundingClientRect();

    const progress = Math.max(
      0,
      Math.min(
        1,
        -rect.top / (section.offsetHeight - window.innerHeight)
      )
    );

    const maxMove =
      track.scrollWidth - window.innerWidth + 100;

    track.style.transform =
      `translateX(-${progress * maxMove}px)`;
  });
});
