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

// Define a function named bigSum that takes in an arbitrary number of
// parameters. We can assume all parameters are numbers.
//
// Returns the sum of all of the parameters. For example
// bigSum(1, 2, 3, 4) produces 10.
// If there are no parameters, return 0.
// Tip: Think about how this is different from sum function in the assignment.
function bigSum() {
  var sum = 0;
  for(var i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}


// Eventually, someone thought it would be terribly clever if putting a smaller
// number before a larger one meant you had to subtract the smaller one. As a
// result of this development, you must now suffer.
//
// Rewrite your previous program so that, when passed any integer between 1 and
// 1000
// Return a string containing the proper modern Roman numeral.
//
// Example:
//   newSchoolRomanNumeral(9) === 'IX'
//
// TIP #1: Here's a mapping of Roman to Arabic numerals:
//
//   1000 = M
//    900 = CM
//    500 = D
//    400 = CD
//    100 = C
//     90 = XC
//     50 = L
//     40 = XL
//     10 = X
//      9 = IX
//      5 = V
//      4 = IV
//      1 = I
// TIP #3: You may like to use the repeat function that you defined above.
function newSchoolRomanNumeral(num) {
  var denominations = [
    {letter: 'M', value: 1000},
    {letter: 'CM', value: 900},
    {letter: 'D', value: 500},
    {letter: 'CD', value: 400},
    {letter: 'C', value: 100},
    {letter: 'XC', value: 90},
    {letter: 'L', value: 50},
    {letter: 'XL', value: 40},
    {letter: 'X', value: 10},
    {letter: 'IX', value: 9},
    {letter: 'V', value: 5},
    {letter: 'IV', value: 4},
    {letter: 'I', value: 1}
  ];

  var result = ''
  for(var i = 0; i < denominations.length; i++) {
    var letterCount = Math.floor(num / denominations[i].value);
    if (letterCount > 0) {
      result += repeat(denominations[i].letter, letterCount);
      //result += denominations[i].letter.repeat(letterCount); ES6
      num %= denominations[i].value;
    }
  }
  return result;
}
