const navToggle = document.querySelector(".nav-toggle");
const mainNav = document.querySelector(".main-nav");

if (navToggle && mainNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!isOpen));
    navToggle.setAttribute("aria-label", isOpen ? "Ouvrir le menu" : "Fermer le menu");
    mainNav.classList.toggle("open", !isOpen);
  });
}

document.querySelectorAll(".filter-chip").forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    document.querySelectorAll(".filter-chip").forEach((chip) => {
      const selected = chip === button;
      chip.classList.toggle("active", selected);
      chip.setAttribute("aria-pressed", String(selected));
    });
    document.querySelectorAll(".dish-card").forEach((dish) => {
      dish.hidden = filter !== "all" && dish.dataset.category !== filter;
    });
  });
});

const bookingForm = document.querySelector(".booking-form");

if (bookingForm) {
  bookingForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = new FormData(bookingForm).get("name").toString().trim();
    const status = bookingForm.querySelector(".form-status");
    status.textContent = `Merci ${name} ! Ce site de démonstration n'est pas relié à un système de réservation : votre demande n'a pas été envoyée.`;
    bookingForm.reset();
  });
}
