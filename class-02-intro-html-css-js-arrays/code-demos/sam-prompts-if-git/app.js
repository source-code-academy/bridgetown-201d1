'use strict';

alert('Hi! Let\'s play a guessing game about me!');

var answer1 = prompt('Does Sam have 3 cats?').toUpperCase();

if (answer1 === 'Y' || answer1 === 'YES') {
  alert('BOOM');
} else {
  alert('WRONG');
}
