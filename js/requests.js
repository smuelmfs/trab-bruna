const baseUrl = "http://diwserver.vps.webdock.cloud:8765";
const productsParent = $('.linkDosItensVendidos'); 

const getRatingStarts = (count) => {
  let startOnTemplate = `<img src="images/estrelas/on.png" style="width:15px"/>`;
  let startOffTemplate = `<img src="images/estrelas/off.png" style="width:15px"/>`;
  return '<div>' + startOnTemplate.repeat(count) + startOffTemplate.repeat(5 - count) + '</div>';
}

const getProductTemplate = (id, title, price, img, rate,) => `
<li>
<div class="product" id=${id}>
  <div class="product-thumb">
    <a><img src="${img}" /></a>
  </div>
  <div class="product-description clearfix">
    <h3><a href="#">${title}</a></h3>
    <a>${getRatingStarts(Math.trunc(rate))}</a>
    <span class="double-border"></span>
    <p class="price"><b>R$ ${price}</b></p>
  </div>
</div>
</li>
`;

$(document).ready(() => {
  fetch(`${baseUrl}/products`)
  .then(res=>res.json())
  .then(json=> {
    console.log(json);
    json.products.forEach(product => {
      productsParent.append(getProductTemplate(
        product.id,
        product.title,
        product.price,
        product.image,
        product.rating.rate
      ));
    });
  });
});