const schemeSvg = document.querySelector('.scheme-svg');
const totalPriceTag = document.querySelector(".price-total");
let cost = 800;
let totalPrice = 0;

schemeSvg.addEventListener('click', (event) => {
  if (!event.target.classList.contains('booked') && !event.target.classList.contains('scheme-bg') && !event.target.classList.contains('light')) {
    event.target.classList.toggle('active');
    const totalSeats = schemeSvg.querySelectorAll('.active').length
    totalPrice = totalSeats * cost;
    totalPriceTag.textContent = totalPrice;
  }
});