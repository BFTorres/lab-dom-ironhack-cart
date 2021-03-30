// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector('.quantity input').value;
  let subtotal = product.querySelector('.subtotal span');
  return subtotal.innerText = Number(price) * quantity;
}
  






  
 // console.log('Calculating subtotal, yey!');

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
 // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test
  // ITERATION 2
  let allProducts = document.querySelectorAll(".product");
  console.log(allProducts);

  // ITERATION 3

  let total = 0;
  allProducts.forEach((product) => {
    total = total + updateSubtotal(product);
  });
  let totalPrice = document.querySelector("#total-value span");
  totalPrice.innerText = total;
  
  // console.log(totalValue)
    
}


// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget
  console.log('The target in remove is:', target)
  const parentTarget = event.currentTarget.parentNode;
  let productTarget = parentTarget.parentNode;
  productTarget.remove()


    
    // console.log('The target in remove is:', target);
   
    calculateAll();
  
  }



// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
