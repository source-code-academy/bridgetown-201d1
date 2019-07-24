var div = document.getElementById('order');

loadData();
var ul = document.createElement('ul');
div.appendChild(ul);
for (var i = 0; i < data.length; i++) {
  var li = document.createElement('li');
  ul.appendChild(li);
  li.textContent = `Product: ${data[i].id} - quantity:${data[i].quantity}`;
}
