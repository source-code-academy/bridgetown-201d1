

### Lecture Code  
Constructors:  
```javascript
function CookieStore(name, minCust, maxCust, avgCookie){
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;
}

CookieStore.prototype.getAvgCookieCount = function() {
  console.log('some random number');
};

var pikePlace = new CookieStore('pike', 15, 40, 6.3);
var otherStore = new CookieStore('otherStore', 10, 30, 2.3);
var anotherCookieStore = new CookieStore('anotherCookieStore', 5, 45, 3.3);

var stores = [pikePlace, otherStore, anotherCookieStore];
```  

Tables:  
```javascript
var tableEl = document.createElement('table');

for(var i = 0; i < stores.length; i++){
  var rowEl = document.createElement('tr');
  var currentStore  = stores[i];

  var el = document.createElement('th');
  el.textContent = currentStore.name;
  rowEl.appendChild(el);

  var el = document.createElement('td');
  el.textContent = currentStore.minCust;
  rowEl.appendChild(el);

  var el = document.createElement('td');
  el.textContent = currentStore.maxCust;
  rowEl.appendChild(el);

  var el = document.createElement('td');
  el.textContent = currentStore.avgCookie;
  rowEl.appendChild(el);
  tableEl.appendChild(rowEl);
}

document.body.appendChild(tableEl);
```
