// =========================================================
// 1) HERO LOGO CYCLER — foto lalu judul sertifikasi, bergantian
// =========================================================
const cyclerData = [
  { logo: "assets/img/logo-penn.jpeg",      title: "Positive Psychology Specialization" },
  { logo: "assets/img/logo-michigan.jpeg",  title: "Leading People and Teams Specialization" },
  { logo: "assets/img/logo-yale.jpeg",      title: "The Introduction to Psychology" },
  { logo: "assets/img/logo-cbs.png",        title: "Neuroscience and Neuromarketing" }
];

(function initCycler() {
  const wrap = document.getElementById("logoCycler");
  if (!wrap) return;
  const logoEl = wrap.querySelector(".cycler-logo");
  const titleEl = wrap.querySelector(".cycler-title");

  let index = 0;      // which university
  let showingLogo = true; // state: logo first, then title

  function render() {
    const entry = cyclerData[index];
    logoEl.src = entry.logo;
    titleEl.textContent = entry.title;

    // fade both out first
    logoEl.classList.remove("is-shown");
    titleEl.classList.remove("is-shown");

    requestAnimationFrame(() => {
      setTimeout(() => {
        if (showingLogo) {
          logoEl.classList.add("is-shown");
        } else {
          titleEl.classList.add("is-shown");
        }
      }, 60);
    });
  }

  render();

  setInterval(() => {
    if (showingLogo) {
      // switch to title of same university
      showingLogo = false;
    } else {
      // move to next university, show its logo
      showingLogo = true;
      index = (index + 1) % cyclerData.length;
    }
    render();
  }, 1900);
})();

// =========================================================
// 2) SCROLL REVEAL — gambar muncul dari kiri / kanan saat discroll
// =========================================================
(function initScrollReveal() {
  const targets = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    targets.forEach((el) => el.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.25 }
  );
  targets.forEach((el) => observer.observe(el));
})();

// =========================================================
// 3) TICKER — sertifikat berjalan seperti running text berita
// =========================================================
(function initTicker() {
  const track = document.getElementById("tickerTrack");
  if (!track) return;

  const certs = [15, 16, 17, 18, 19, 20, 21, 22, 23, 24].map(
    (n) => `assets/img/cert-${n}.jpg`
  );

  // render the set twice back-to-back for a seamless infinite loop
  const html = certs
    .concat(certs)
    .map((src) => `<img src="${src}" alt="Sertifikat kursus Coursera" loading="lazy">`)
    .join("");

  track.innerHTML = html;
})();
