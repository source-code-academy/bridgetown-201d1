Forms:  
```HTML
<div class="form">
	<form id="new-store-form">
		<fieldset>
				<legend>Enter New Cookie Store:</legend>
				<label for="name">Store Name:</label>
				<input name="name" id="name-input" type="text" />
				<label for="maxCust">Max Customers / hour:</label>
				<input name="maxCust" id="max-cust-input" type="text" />
				<label for="minCust">Min Customers / hour:</label>
				<input name="minCust" id="min-cust-input" type="text" />
				<label for="avgCookies">Average Cookies sold / hour:</label>
				<input name="avgCookies" id="avg-cookies-input" type="text" />
				<button id="submit-button" type="submit">SUBMIT</button>
		</fieldset>
	</form>
</div>
```  

EventListeners:  
```javascript
console.log('----------------Event Listeners-----------------');

var submitButtonEl = document.getElementById('new-store-form');

submitButtonEl.addEventListener('submit', function(event){
  event.preventDefault(); //discuss
  event.stopPropagation(); //discuss

  var storeNameInput = event.target.name.value;
  var maxCustInput = event.target.maxCust.value;
  var minCustInput = event.target.minCust.value;
  var avgCookieInput = event.target.avgCookies.value;

  console.log(event.target);

  console.log('------NEW STORE DETAILS:-----');

  var newStore = new CookieStore(storeNameInput, maxCustInput, minCustInput, avgCookieInput);

  console.log(newStore);

});
```
