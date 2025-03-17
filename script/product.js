import { product } from "../data/productData.js";

generateHTML()

function generateHTML(){
  let productHTML = ''

  product.forEach(product => {
    productHTML += `
        <div class="product-item">
            <div class="product-image">
              <img src="${product.image}" alt="Помидоры">
            </div>
            <div class="product_description">
              <div class="product-info">
                <p class="product-name">${product.name}</p>
                <p class="product-price">${product.price} руб./${product.weight} кг.</p>
              </div>
              <p>${product.description}</p>
            </div>
            <button class="button-add">В корзину</button>
        </div>
    `
  })
  document.querySelector('.product-list').innerHTML = productHTML;
}

let button = document.querySelector('.header-burger')
let bodyWrapper = document.querySelector('.body__wrapper')

button.addEventListener('click', ()=>{
  if(!bodyWrapper.classList.contains('open')){
    bodyWrapper.classList.add('open')
  } else if(bodyWrapper.classList.contains('open')){
    bodyWrapper.classList.remove('open')
  }
})
