// ++++++++++++++++++++++++++++++++++++++++++++
// COPYING AN ARRAY WITHOUT SIDE EFFECTS
// AND THEN SORTING IT WITH .sort()
// ++++++++++++++++++++++++++++++++++++++++++++

var array1 = [8,5,3,1];
var array2 = array1;

array2.sort();
// console.log('array2 is sorted: ' + array2);
// console.log('array1 started as [8,5,3,1] and is meow ' + array1);

var array3 = [4,8,2,6];
function cleanSort(inputArray) {
  // var sortedArray = [];
  // for (var i = 0; i < inputArray.length; i++) {
  //   sortedArray[i] = inputArray[i];
  // }
  var sortedArray = (function(){ return inputArray;})();
  sortedArray.sort();
  return sortedArray;
}
// cleanSort(array3);
// console.log('after the sort, array3, our input, remains : ' + array3);
// console.log('sortedArray produced by cleanSort() is ' + cleanSort(array3));

// ++++++++++++++++++++++++++++++++++++++++++++
// .forEach
// ++++++++++++++++++++++++++++++++++++++++++++

function printInConsole(input1, input2) {
  console.log(input);
}

// array1.forEach(printInConsole);

// Wow! That's a lot leaner than a 'for' loop!

// We can also access other info with the 'index' and 'array' parameters

function printDetailsToConsole(arrayElement, index, array) {
  console.log(arrayElement + ' is the individual element');
  console.log(index + ' is where the element is in the array');
  console.log(array + ' is the array');
  console.log('+++++++++++++');
}

array1.forEach(printDetailsToConsole);
