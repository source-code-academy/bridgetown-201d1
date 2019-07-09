alert('Hi! Let\'s play a guessing game about my cats!');

var cats = ['FLUFFY', 'RHEA', 'BOBBY'];
var correct = false;

do {
  //Prompt user and get a response
  var answer1 = prompt('What is the name of one of Dario\'s cats').toUpperCase();

  //loop over kitties
  for (var i = 0; i < cats.length; i++) {
    if (answer1 === cats[i]) {
      alert('DING!');
      correct = true;
      console.log({ correct });
      break;
    } else if (i == cats.length - 1) {
      alert('Try Again');
    }
  }
} while (!correct);
