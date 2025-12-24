function filterProducts(type) {
  const cards = document.querySelectorAll('.product-card');
  cards.forEach(card => {
    if (type === 'all' || card.classList.contains(type)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}
