import 'bootstrap';

import '../scss/index.scss';
import hostingPrice from './hostingPrice';

$('#alert').on('click', () => {
  alert('jQuery works!');
});

const [hostingPriceListContainer] = $('.hosting-price__list');
function hostingPriceItemHTML(hosting) {
  const element = document.createElement('div');
  element.classList.add('hosting-price__item');
  element.innerHTML = `
    <div class="hosting-price__item__heading">
      <h4 class="hosting-price__item__name">${hosting.name}</h4>
      <div class="hosting-price__item__price">
        <div class="hosting-price__item__price__original">
          <s>Rp${hosting.originalPrice}</s>
        </div>
        <div class="hosting-price__item__price__discount">
          <span class="hosting-price__item__price__currency">Rp</span>
          <span class="hosting-price__item__price__nominal">${hosting.discountPrice}</span>
        </div>
        <div>per bulan</div>
      </div>
      <div class="hosting-price__item__button">
        <button class="btn btn-dark">Pesan</butto>
      </div>
    </div>
  `;

  return element;
}
hostingPrice.forEach(hosting => {
  hostingPriceListContainer.appendChild(hostingPriceItemHTML(hosting));
});
