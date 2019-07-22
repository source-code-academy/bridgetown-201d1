"use strict";
const entrants = 3;
const rounds = 20;

let counter = 0;

const unicornPics = [
  "ember.png",
  "pinky.jpg",
  "rainbow.jpg",
  "snowflake.png",
  "sparkles.jpg",
  "stardust.jpg",
  "thunder.jpg",
  "umbra.jpg"
];

let unicorns = [];

function Unicorn(image) {
  this.displays = 0;
  this.likes = 0;
  this.name = image.split(".")[0];
  this.image = `img/${image}`;
}

Unicorn.prototype.incrementDisplay = function() {
  this.displays++;
};
Unicorn.prototype.incrementLikes = function() {
  this.likes++;
};

function createUnicorns() {
  for (let i = 0; i < unicornPics.length; i++) {
    unicorns.push(new Unicorn(unicornPics[i]));
  }
  console.log("Unicorns created!");
}

function chooseUniqueRandom(max, pool) {
  const number = pool || 3;
  let result = [];
  for (let i = 0; i < number; i++) {
    let pick = randomNumber(max);
    if (result.indexOf(pick) === -1) {
      result.push(pick);
    } else {
      i--;
    }
  }
  return result;
}

function randomNumber(max) {
  return Math.floor(Math.random() * max);
}

function displayRandomUnicorns() {
  const main = document.getElementById("unicorns");
  main.innerHTML = "";

  let contestants = chooseUniqueRandom(unicorns.length, entrants);
  console.log({ contestants });
  for (let i = 0; i < contestants.length; i++) {
    const currentUnicorn = unicorns[contestants[i]];
    console.log({ currentUnicorn });
    let img = new Image(100);
    img.setAttribute("data-number", contestants[i]);
    // img.setAttribute("width", 100);
    img.setAttribute("src", currentUnicorn.image);
    console.log({ img });
    img.addEventListener("click", handleVote);
    main.appendChild(img);
    currentUnicorn.incrementDisplay();
  }
  if (counter === rounds) {
    hideUnicorns();
    displayResults();
  }
}

function handleVote(event) {
  const unicornIndex = event.target.getAttribute("data-number");
  console.log({ unicornIndex });
  unicorns[unicornIndex].incrementLikes();
  console.log({ current: unicorns[unicornIndex] });
  displayRandomUnicorns();
  counter++;
}

function hideUnicorns() {
  const main = document.getElementById("unicorns");
  main.innerHTML = "";
}

function displayResults() {
  const main = document.getElementById("unicorns");
  main.style.flexDirection = "column";
  for (let i = 0; i < unicorns.length; i++) {
    main.innerHTML += `<div>${unicorns[i].name} was liked ${unicorns[i].likes} times out of ${
      unicorns[i].displays
    }</div><br/>`;
  }
}

function start() {
  counter = 0;
  displayRandomUnicorns();
}

createUnicorns();
start();
