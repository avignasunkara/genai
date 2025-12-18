// Fade-in animation for sections on page load
window.addEventListener("load", () => {
  document.querySelectorAll("section").forEach((section, index) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(40px)";
    section.style.transition = "all 0.6s ease";

    setTimeout(() => {
      section.style.opacity = "1";
      section.style.transform = "translateY(0)";
    }, index * 200);
  });
});

// Card hover effect (projects)
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "scale(1.03)";
    card.style.transition = "0.3s";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "scale(1)";
  });
});

// Dynamic year update in footer
const footer = document.querySelector("footer p");
const year = new Date().getFullYear();
footer.innerHTML = `© ${year} Sunkara Avigna`;

// Scroll to top button
const btn = document.createElement("button");
btn.innerText = "↑";
btn.style.position = "fixed";
btn.style.bottom = "20px";
btn.style.right = "20px";
btn.style.padding = "10px";
btn.style.border = "none";
btn.style.borderRadius = "50%";
btn.style.background = "#222";
btn.style.color = "white";
btn.style.cursor = "pointer";
btn.style.display = "none";
document.body.appendChild(btn);

window.addEventListener("scroll", () => {
  btn.style.display = window.scrollY > 200 ? "block" : "none";
});

btn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
