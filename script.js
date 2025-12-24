// ===== CART SYSTEM =====
let cartCount = localStorage.getItem("cartCount") || 0;
const cartCountEl = document.getElementById("cart-count");

// Set cart count on load
cartCountEl.textContent = cartCount;

// Add to cart buttons
const addToCartButtons = document.querySelectorAll(".product-card button");

addToCartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    cartCount++;
    cartCountEl.textContent = cartCount;

    // Save to local storage
    localStorage.setItem("cartCount", cartCount);

    // Feedback
    button.textContent = "Added ✔";
    button.disabled = true;

    setTimeout(() => {
      button.textContent = "Add to Cart";
      button.disabled = false;
    }, 1200);
  });
});