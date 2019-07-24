var data;

function loadData() {
  var cartInfo = localStorage.getItem('cart');
  data = JSON.parse(cartInfo);
}

function clearData() {
  console.log('Clearing Data!');
  localStorage.clear();
}
