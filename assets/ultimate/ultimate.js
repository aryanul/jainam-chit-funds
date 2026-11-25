// Hero: the kalash loop. It starts only from here, so reduced motion never sees a frame move, just the poster;
// off-screen it pauses so it costs nothing.
const v = document.querySelector('[data-kalash]');
if (v && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  new IntersectionObserver(([e]) => (e.isIntersecting ? v.play().catch(() => {}) : v.pause())).observe(v);
}
