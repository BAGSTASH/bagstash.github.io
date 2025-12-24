/* =========================
   LOAD CART FROM localStorage
========================= */
const cart = JSON.parse(localStorage.getItem("cart")) || [];
const itemsBox = document.getElementById("checkoutItems");
const totalEl = document.getElementById("checkoutTotal");

/* =========================
   RENDER CART ITEMS
========================= */
let total = 0;

if (!cart.length) {
  itemsBox.innerHTML = '<div class="empty-cart">Your cart is empty</div>';
} else {
  let html = '';
  cart.forEach(item => {
    const qty = item.qty || 1; // fallback if qty not set
    const lineTotal = item.price * qty;
    total += lineTotal;
    html += `
      <div class="checkout-item">
        <span>${item.name} × ${qty}</span>
        <span>₹${lineTotal}</span>
      </div>
    `;
  });
  itemsBox.innerHTML = html;
}

totalEl.innerText = total;

/* =========================
   PLACE ORDER FUNCTION
========================= */
function placeOrder(e) {
  e.preventDefault();

  if (!cart.length) {
    alert("❌ Your cart is empty!");
    return;
  }

  const name = document.getElementById("custName").value.trim();
  const phone = document.getElementById("custPhone").value.trim();
  const address = document.getElementById("custAddress").value.trim();

  if (!name || !phone || !address) {
    alert("❗ Please fill all customer details");
    return;
  }

  // Build WhatsApp message
  let msg = `🧾 *BAGSTASH – ORDER INVOICE*%0A%0A` +
            `👤 *Customer Details*%0A` +
            `Name: ${name}%0A` +
            `Phone: ${phone}%0A` +
            `Address: ${address}%0A%0A` +
            `🛍️ *Items:*%0A`;

  cart.forEach(item => {
    const qty = item.qty || 1;
    msg += `• ${item.name} × ${qty} – ₹${item.price * qty}%0A`;
  });

  msg += `%0A💰 *Total Amount:* ₹${total}`;

  // Open WhatsApp link
  window.open("https://wa.me/918777438644?text=" + msg, "_blank");

  // Clear cart
  localStorage.removeItem("cart");

  // Redirect to success page after short delay
  setTimeout(() => {
    window.location.href = "success.html";
  }, 800);
}

/* =========================
   Attach form submit
========================= */
const checkoutForm = document.querySelector(".checkout-form");
if (checkoutForm) {
  checkoutForm.addEventListener("submit", placeOrder);
}