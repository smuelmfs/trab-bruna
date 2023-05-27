const baseUrl = "http://diwserver.vps.webdock.cloud:8765";
const productDetails = $('#product-details');

const productDetailsTemplate = (name, img, price, description, gender, year) => {
  return `<div class="product-image">
                    <img src="${img}" alt="Imagem do Produto" width=60%>
                  </div>
                  <div>
                    <h2>${name}</h2>
                    <p>R$ ${price}</p>
                    <p>${description}</p>
                    <p>Gênero: ${gender}</p>
                    <p>Ano de Lançamento: ${year}</p>
                  </div>`;
}

$(document).ready(() => {
  let id = new URLSearchParams(window.location.search).get('id');
  if(id == null || id == "") window.location.href = "/";
  fetch(`${baseUrl}/products/${id}`).then(res=>res.json()).then(p=>{
    productDetails.append(productDetailsTemplate(p.title, p.image, p.price, p.description, p.gender, p.year));
  });
});