"use struct";

//Arrays are lists fo values
var unicornNames = ["Sparkle", "Rainbow", "Stardust"];
var unicornColors = ["Pink", "Rainbow", "Black with white spots"];
var unicornWeights = ["Fat", "Skinny", "Ethereal"];

//We can group different types fo values together in an Object Literal
var unicorn1 = {
  color: "pink", //string
  name: "Sparkle",
  weight: 250, //number
  isSick: true, //boolean
  greet: function() {
    //A property that has a function as it's value is a called a method
    alert("neigh!");
  }, //function also known as a method
  location: {
    street: "High Street",
    parish: "Christ Church"
  } //Inception!!!
};

/*
Here are some methods we already know about

.log() (found on the console object)
.toLowerCase() (found on string objects)
.toUpperCase() (found on string objects)

.push() (found on arrays)
*/

//Key value pairs are called properties
var unicorn2 = { color: "pink", name: "Rainbow", weight: 250 };
var unicorn3 = { color: "pink", name: "Stardust", weight: 250 };

//We like when our code looks similar, it's usually a good sign that we can use loops to DRY our code
//Exercise: Tell me what DRY and WET code are after lunch!

console.log(unicorn1);

console.log(unicorn1.name);
console.log(unicorn1["name"]);
var key = "name";
console.log(unicorn1[key]);

//We can call our methods using dot notation
// unicorn1.greet();

//Lets declare an array to hols all of our unicorns
var unicorns = [];

//Suppose we had a function we could trigger with a click
function handleClick() {
  //make an object from the fields
  var unicorn = {
    name: document.getElementById("unicornName").value,
    hp: document.getElementById("weight").value,
    color: document.getElementById("color").value,
    food: document.getElementById("food").value,
    location: {
      street: document.getElementById("location").value.split()[0],
      parish: document.getElementById("location").value.split()[0]
    },
    isSick: document.getElementById("sick").checked ? true : false
  };

  //push object to end fo array
  unicorns.push(unicorn);

  //Clear the field
  clearFields();

  //change color of button
  document.getElementById("saveButton").style = "background: darkgrey;";
}

function clearFields() {
  document.getElementById("unicornName").value = "";
  document.getElementById("hp").value = "";
  document.getElementById("weight").value = "";
  document.getElementById("color").value = "";
  document.getElementById("food").value = "";
  document.getElementById("location").value = "";
  document.getElementById("sick").checked = false;
}

function renderList() {
  // var ul = document.getElementsByTagName("ul")[0];
  // var ul = document.querySelectorAll("ul#saved")[0];
  var ul = document.querySelector("ul#saved");

  for (var i = 0; i < unicorns.length; i++) {
    var liEl = document.createElement("li");
    liEl.textContent = `Name: ${unicorns[i].name}, Health: ${unicorns[i].hp}, Sick: ${unicorns[i].isSick}`;

    ul.appendChild(liEl);
  }
}

//Event listeners don't worry we'll go over this later!
var buttonEl = document.getElementById("saveButton");
var displayEl = document.getElementById("displayButton");

buttonEl.addEventListener("click", handleClick);
displayEl.addEventListener("click", renderList);
