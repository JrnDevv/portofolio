// ===== Menu Mobile =====
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  // Fecha ao clicar em um link
  navLinks.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      navLinks.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// ===== Ano no footer =====
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ===== Scroll Reveal (IntersectionObserver) =====
const revealEls = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14 }
  );

  revealEls.forEach((el) => obs.observe(el));
} else {
  // fallback simples
  revealEls.forEach((el) => el.classList.add("is-visible"));
}

// ===== Form (exemplo: feedback visual) =====
const form = document.getElementById("leadForm");
const formMsg = document.getElementById("formMsg");

if (form && formMsg) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    formMsg.textContent = "Mensagem pronta para envio. Em produção, conecte ao seu backend/WhatsApp/Email.";
    form.reset();
  });
}