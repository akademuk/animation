const banners = document.querySelectorAll('.new-banner');

function playBannerAnimation(banner) {
  if (!banner || banner.classList.contains('is-animated')) return;
  banner.classList.add('is-animated');
}

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          playBannerAnimation(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  banners.forEach((banner) => observer.observe(banner));
} else {
  banners.forEach(playBannerAnimation);
}
