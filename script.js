// animaçõa de digitação no hero
  const elementoTexto = document.querySelector("#typing");
const frases = [
  "Olá, eu sou o Gabriel Souza.",
  "Desenvolvedor Full Stack.",
  "Criador de Soluções Digitais.",]

  let frasesIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  //velocidade de digitação
  const typeSpeed = 100;
  const deleteSpeed = 50;
  const pauseAfterType = 1200;
  const pauseAfterDelete = 300;

  function animarDigitacao () {
    const currentFrase = frases[frasesIndex]

    if (!isDeleting) {
      charIndex++;
      elementoTexto.textContent = currentFrase.slice(0, charIndex);
  } else {
    charIndex--;
    elementoTexto.textContent = currentFrase.slice(0, charIndex);
  }

  let time = isDeleting ? deleteSpeed : typeSpeed;

  if (!isDeleting && charIndex === currentFrase.length) {
    time = pauseAfterType
    isDeleting = true;
  }

  if (isDeleting && charIndex === 0) {
    time = pauseAfterDelete;
    isDeleting = false;
    frasesIndex = (frasesIndex + 1) % frases.length;
  }

  setTimeout(animarDigitacao, time);
  }

  animarDigitacao();

// Scroll reveal (cards animando ao rolar)
const revealItems = document.querySelectorAll(
  ".about-card, .skills-group, .project-card, .contact-form, .contact-info, .hero-card-body"
);

revealItems.forEach(el => el.classList.add("reveal"));

const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      io.unobserve(entry.target); // anima uma vez (mais profissional)
    }
  });
}, { threshold: 0.12 });

revealItems.forEach(el => io.observe(el));















// NAV MOBILE
const navToggle = document.getElementById("nav-toggle");
const nav = document.getElementById("nav");
const navLinks = document.querySelectorAll(".nav-link");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    nav.classList.toggle("open");
    navToggle.classList.toggle("open");
  });
}

// Fechar menu ao clicar em um link
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    navToggle.classList.remove("open");
  });
});

// SCROLL SUAVE
navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const href = link.getAttribute("href");
    if (href && href.startsWith("#")) {
      event.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const yOffset = -80; // compensar o header fixo
        const y =
          target.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  });
});

// ATUALIZA ANO NO FOOTER
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// MARCAR LINK ATIVO CONFORME A SEÇÃO
const sections = document.querySelectorAll("section[id]");

function onScrollHighlight() {
  const scrollY = window.pageYOffset;

  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 120;
    const sectionId = section.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelectorAll(".nav-link")
        .forEach((link) => link.classList.remove("active"));

      const currentLink = document.querySelector(
        `.nav-link[href="#${sectionId}"]`
      );
      if (currentLink) currentLink.classList.add("active");
    }
  });
}

window.addEventListener("scroll", onScrollHighlight);

// FORM CONTATO (FAKE SUBMIT)
const contactForm = document.getElementById("contact-form");
const formFeedback = document.getElementById("form-feedback");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = contactForm.name.value.trim();
    const email = contactForm.email.value.trim();
    const message = contactForm.message.value.trim();

    if (!name || !email || !message) {
      formFeedback.textContent = "Preencha todos os campos para enviar a mensagem.";
      formFeedback.style.color = "#f97373";
      return;
    }

    // Aqui você poderia integrar com uma API de email (ex: EmailJS, backend etc.)
    formFeedback.textContent = "Mensagem enviada com sucesso! Obrigado pelo contato.";
    formFeedback.style.color = "#4ade80";

    contactForm.reset();
  });
}
