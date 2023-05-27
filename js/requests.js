const baseUrl = "http://diwserver.vps.webdock.cloud:8765";
const productsParent = $('.linkDosItensVendidos'); 

const getRatingStarts = (count) => {
  let startOnTemplate = `<img src="images/estrelas/on.png" style="width:15px"/>`;
  let startOffTemplate = `<img src="images/estrelas/off.png" style="width:15px"/>`;
  return '<div>' + startOnTemplate.repeat(count) + startOffTemplate.repeat(5 - count) + '</div>';
}

const getProductTemplate = (id, title, price, img, rate,) => `
<li>
<div class="product">
  <div class="product-thumb">
    <a><img src="${img}" /></a>
  </div>
  <div class="product-description clearfix">
    <h3><a href="/detalhes-bruna.html?id=${id}">${title}</a></h3>
    <a>${getRatingStarts(Math.trunc(rate))}</a>
    <span class="double-border"></span>
    <p class="price"><b>R$ ${price}</b></p>
  </div>
</div>
</li>
`;

const getProducts = async () => {
  await fetch(`${baseUrl}/products`)
  .then(res=>res.json())
  .then(json=> {
    let pageCount = 5;
    Promise.all(Array.apply(null, Array(pageCount)).map((e, i) => fetch(`${baseUrl}/products?page=${i}&sort=desc`)))
    .then(res=>res.map(r=>r.json()))
    .then(result=>result.map(r => r.then(r => {
      r.products.forEach(product => {
        productsParent.append(getProductTemplate(
          product.id,
          product.title,
          product.price,
          product.image,
          product.rating.rate
        ));
      });
    })));
  });
} 
$(document).ready(() => {
  getProducts();
});