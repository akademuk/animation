const banner = document.querySelector('.new-banner');

function playBannerAnimation() {
  if (!banner || banner.classList.contains('is-animated')) return;
  banner.classList.add('is-animated');
}

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          playBannerAnimation();
          observer.unobserve(banner);
        }
      });
    },
    { threshold: 0.15 }
  );

  if (banner) observer.observe(banner);
} else {
  playBannerAnimation();
}
