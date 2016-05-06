
// Define a function named group that takes in two arguments:
//     arr (an array of objects)
//     key (string)
//
// Returns an object containing collections grouped by the value of each object
// at that key
//
// Example:
// var cards = [
//   {name: 'ace', suit: 'spades'},
//   {name: '2', suit: 'spades'},
//   ...
//   {name: 'ace', suit: 'hearts'},
//   ...
// ]
//
// group(cards, 'suit') ->
//   {
//     spades: [{name: 'ace', suit: 'spades'}, {name: '2', suit: 'spades'} ...]
//     hearts: [{name: 'ace', suit: 'hearts'}, ...]
//     diamonds: [{name: 'ace', suit: 'diamonds'}, ...]
//     clubs: [{name: 'ace', suit: 'clubs'}, ...]
//   }
function group(arr, key) {
  var result = {}
  for(var i = 0; i < arr.length; i++) {
    if (result[arr[i][key]] === undefined) {
      result[arr[i][key]] = [];
    }
    result[arr[i][key]].push(arr[i]);
  }

  return result;
}

// Define a function named merge that takes in two arguments:
//    arr1 (sorted array of numbers)
//    arr2 (sortedarray of numbers)
//
// Return a new array that contains all the numbers in each array still sorted.
// Example: given [1, 3, 5] and [2, 4], it would produce [1, 2, 3, 4, 5]
// Another example: given [1, 3, 5], [2, 2], it would produce [1, 2, 2, 3, 5]
//
// Tip: Each array may contain duplicate numbers. You need to ensure that each
// number is still accounted for.
// Another Tip: Each array is sorted, which makes the solution easier.
function merge(arr1, arr2) {
  var output = [];
  while(arr1.length > 0 && arr2.length > 0) {
    if (arr1[0] < arr2[0]) {
      output.push(arr1.shift());
    } else {
      output.push(arr2.shift());
    }
  }

  while(arr1.length > 0) {
    output.push(arr1.shift());
  }

  while(arr2.length > 0) {
    output.push(arr2.shift());
  }

  return output;
}

// Write a function named bigSum that takes in an arbitrary number of
// parameters. We can assume all parameters are numbers.
//
// Returns the sum of all of the parameters. For example
// bigSum(1, 2, 3, 4) produces 10.
// If there are no parameters, return 0.
// Tip: Think about how this is different from sum.
function bigSum() {
  var sum = 0;
  for(var i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}
