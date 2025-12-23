/* REVEAL ON SCROLL */
function reveal() {
  document.querySelectorAll(".reveal").forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 80) {
      el.classList.add("active");
    }
  });
}
window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);

/* PRODUCT FILTER */
function filterProducts() {
  const val = document.getElementById("filter").value;
  document.querySelectorAll(".product-card").forEach(card => {
    card.style.display =
      val === "all" || card.dataset.cat === val ? "block" : "none";
  });
}

/* IMAGE SWITCH */
function changeImg(src) {
  document.getElementById("mainImg").src = src;
}

/* SKELETON LOADER */
window.addEventListener("load", () => {
  document.querySelectorAll(".skeleton").forEach(s => s.remove());
});
