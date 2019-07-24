'use strict';

var products = [];
var productIds = ['one', 'two', 'three'];

function Product(id, quantity) {
  this.id = id;
  this.quantity = quantity || 0;
  products.push(this);
}

var search = function(id) {
  for (var i = 0; i < products.length; i++) {
    if (id === products[i].id) {
      products[i].quantity += 1;
      console.log(products);
    }
  }
};

function buyItem(event) {
  search(event.target.id);
  updateData();
}

function updateData() {
  localStorage.setItem('cart', JSON.stringify(products));
}

loadData();

for (var i = 0; i < productIds.length; i++) {
  var pic = document.getElementById(productIds[i]);
  pic.addEventListener('click', buyItem);
  if (typeof data === 'object' && data instanceof Array) {
    new Product(data[i].id, data[i].quantity);
  } else {
    new Product(productIds[i]);
  }
}
