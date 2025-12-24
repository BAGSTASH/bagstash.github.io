/* =========================
   CART DATA (localStorage)
========================= */
let cart = JSON.parse(localStorage.getItem("cart")) || [];

/* =========================
   DOM ELEMENTS
========================= */
const cartBox = document.getElementById("cart");
const cartItemsBox = document.getElementById("cartItems");
const totalPriceEl = document.getElementById("totalPrice");
const cartCountEl = document.getElementById("cartCount");

/* =========================
   TOGGLE CART
========================= */
function toggleCart() {
  cartBox.classList.toggle("active");
}

/* =========================
   ADD TO CART
========================= */
function addToCart(name, price) {
  cart.push({ name, price });
  saveCart();
}

/* =========================
   REMOVE ITEM
========================= */
function removeItem(index) {
  cart.splice(index, 1);
  saveCart();
}

/* =========================
   SAVE & UPDATE CART
========================= */
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartUI();
}

/* =========================
   UPDATE CART UI
========================= */
function updateCartUI() {
  let itemsHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;
    itemsHTML += `
      <div class="cart-item">
        <span>${item.name}</span>
        <span>₹${item.price}</span>
        <span onclick="removeItem(${index})">❌</span>
      </div>
    `;
  });

  cartItemsBox.innerHTML = itemsHTML || "<p>Your cart is empty</p>";
  totalPriceEl.innerText = total;
  cartCountEl.innerText = cart.length;
}

/* =========================
   WHATSAPP INVOICE CHECKOUT
========================= */
function checkout() {
  if (cart.length === 0) {
    alert("❗ Your cart is empty");
    return;
  }

  let message =
    "🧾 *BAGSTASH – ORDER INVOICE*%0A%0A" +
    "🛍️ *Items:*%0A";

  cart.forEach(item => {
    message += `• ${item.name} – ₹${item.price}%0A`;
  });

  message +=
    `%0A💰 *Total Amount:* ₹${totalPriceEl.innerText}%0A%0A` +
    "👤 *Customer Details:*%0A" +
    "Name:%0A" +
    "Phone:%0A" +
    "Address:%0A%0A" +
    "📦 Order Type: Retail / Bulk";

  window.open(
    "https://wa.me/918777438644?text=" + message,
    "_blank"
  );
}

/* =========================
   BULK ORDER BUTTON
========================= */
function bulkOrder() {
  window.open("https://wa.me/918777438644", "_blank");
}

/* =========================
   INIT
========================= */
updateCartUI();
