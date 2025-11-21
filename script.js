// Insere ano
document.getElementById("ano").innerText = new Date().getFullYear();

// Menu mobile toggle
document.getElementById("nav-toggle").addEventListener("click", () => {
  document.getElementById("nav-menu").classList.toggle("hidden");
});

// Scroll suave para ofertas (botão premium)
const btnPremium = document.getElementById("btn-premium");
if (btnPremium) {
  btnPremium.addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("ofertas").scrollIntoView({ behavior: "smooth" });
    btnPremium.classList.add("opacity-80");
    setTimeout(() => btnPremium.classList.remove("opacity-80"), 700);
  });
}

// Acordeões de <details> já são nativos — opcional: animação suave
document.querySelectorAll("details").forEach(d => {
  d.addEventListener("toggle", (ev) => {
    if (d.open) {
      // close others
      document.querySelectorAll("details").forEach(other => {
        if (other !== d) other.removeAttribute("open");
      });
    }
  });
});
