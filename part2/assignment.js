// Define a function named sum that takes in one argument.
//    arr (array of numbers)
//
// Return the sum of all of the numbers in the array. For example, given
// [1, 2, 3, 4] produces 10. In the event the array is empty. Return 0.
function sum(arr) {
  var sum = 0;
  for(var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// Define a function named product that takes in one argument.
//    arr (array of numbers)
//
// Return the product of all of the numbers in the array. For example, given
// [1, 2, 3, 4] produces 24. In the event the array is empty. Return 1.
function product(arr) {
  var product = 1;
  for(var i = 0; i < arr.length; i++) {
    product *= arr[i];
  }
  return product;
}

// Define a function named concatenate that takes in one argument.
//    arr (array of strings)
//
// Return a string that combines the strings in the order of the array. For
// example, ['hello', 'my', 'name', 'is', 'ken'] produces 'hellomynameisken'
function concatenate(arr) {
  var str = '';
  for(var i = 0; i < arr.length; i++) {
    str += arr[i];
  }
  return str;
}

// Define a function named max that takes in one argument.
//    arr (array of numbers)
//
// Return a the maximum number in the array. For example, given [1, 2, -3, 4], // it produces 4.
//
// Tip: Assume that if the array is empty, we use the -Infinity in JavaScript.
// Tip: You might find Math.max handy.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
function max(arr) {
  var val = -Infinity
  for(var i = 0; i < arr.length; i++) {
    val = Math.max(val, arr[i]);
  }
  return val;
  // or ...
  // Math.max(...arr)
}

// Define a function named min that takes in one argument.
//    arr (array of numbers)
//
// Return a the minimum number in the array. For example, given [1, 2, -3, 4],
// it produces -3.
//
// Tip: Assume that if the array is empty, we use Infinity in JavaScript.
// Tip: You might find Math.min handy.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min
function min(arr) {
  var val = Infinity
  for(var i = 0; i < arr.length; i++) {
    val = Math.min(val, arr[i]);
  }
  return val;
  // or ...
  // Math.min(...arr)
}

// Define a function named mean that takes in one arguments
//    arr (array of numbers)
//
// Return the mean (i.e. average) of all of the numbers in the array. For
// example, given [1, 2], it produces 1.5.
// Return null if the array is empty.
function mean(arr) {
  if (arr.length === 0) {
    return null;
  }

  return sum(arr) / arr.length;
}

// Define a function named median that takes in one argument.
//    arr (array of numbers)
//
// Return the median of all of the numbers. Return null if the array is empty.
//
// Tip: Use google to find out how to calculate the median.
// Another tip: The array may not be sorted. There is an easy method in
// JavaScript called sort that can help you. See:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
function median(arr) {
  if (arr.length === 0) {
    return null;
  }

  var sorted = arr.sort();
  if (sorted.length % 2 === 0) {
    var lower = sorted[sorted.length / 2 - 1];
    var upper = sorted[sorted.length / 2];
    return mean([lower, upper]);
  } else {
    return sorted[Math.floor(sorted.length / 2)];
  }

}

// Define a function, distance, that takes in two arguments
//    coordinate1: object
//    coordinate2: object
// Each argument has the following format:
// {
//   x: <NUMBER>,
//   y: <NUMBER>
// }
//
// Return the distance between the two points on a graph.
// Tip: Use google to find out how to calculate the distance between two points.
function distance(coord1, coord2) {
  return Math.sqrt(Math.pow(coord1.x - coord2.x, 2) +
    Math.pow(coord1.y - coord2.y, 2));
}

// Define a function named repeat that takes in two arguments
//     str (string)
//     times (positive number)
//
// Returns a string that is the input string repeated multiple times. For
// example, given 'hi' and 4, it should produce 'hihihihi'
function repeat(str, times) {
  var result = '';
  for(var i = 0; i < times; i++) {
    result += str;
  }
  return result;
}

// Define a function named contains that is given two arguments
//     arr (array of strings)
//     str (string)
//
// Returns true if that string exists in the array, false otherwise.
function contains(arr, str) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === str) {
      return true;
    }
  }
  return false;
}

// Define a function named replace that takes in three arguments
//    arr (array of numbers)
//    from (number)
//    to (number)
//
// Returns an array of numbers where all elements of from are replaced with to
// Example:
// replace([1, 3, 2, 1, 3], 1, 4) -> [4, 3, 2, 4, 3]
function replace(arr, from, to) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === from) {
      result.push(to);
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}

// Define a function named filterPassingGrades that takes in one argument:
//     grades (array of numbers)
//
// Return the array with only numbers greater than or equl to 70 (ie the passing
// scores).
function filterPassingGrades(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] >= 70) {
      result.push(arr[i]);
    }
  }
  return result;
}

// Define a function named pluck that takes in two arguments:
//     arr (array of objects)
//     key (string)
//
// Returns an array of elements where each element is the value in each object.
//
// Example:
// var stooges = [
//   {name: 'moe', age: 40},
//   {name: 'larry', age: 50},
//   {name: 'curly', age: 60}
// ];
// pluck(stooges, 'name') -> ['moe', 'larry', 'curly']
function pluck(arr, key) {
  var result = [];
  for(var i = 0; i < arr.length; i++) {
    result.push(arr[i][key])
  }
  return result;
}

// Define a function named flatten given one argument:
//     arr (array of arrays)
//
// Returns an array that combines all of the elements in the original arrays.
//
// Examples:
//   flatten([[1], [2], [3], [4]]) -> [1, 2, 3, 4]
//   flatten([[1], [2, 3], [4]]) -> [1, 2, 3, 4]
// Tip: In the second example, we only need to flatten one level deep.
//   flatten([[1], [2, [3]], [4]]) -> [1, 2, [3], 4]
function flatten(arr) {
  var result = [];
  for(var i = 0; i < arr.length; i++) {
    result = result.concat(arr[i]);
  }
  return result;
}

// Define a function named values that takes in one argument:
//    obj (object)
//
// Returns an array of the values of the object. For example, given
// {a: 1, b: 2, c: 3}, it produces [1, 2, 3]
function values(obj) {
  var result = [];
  for(var key in obj) {
    result.push(obj[key]);
  }
  return result;
}

// Define a function named pick that takes in two arguments:
//    obj (object)
//    keys (array of strings)
//
// Returns an object that only contains the keys specified.
//
// Example:
// pick({name: 'moe', age: 50, userid: 'moe1'}, ['name', 'age'])
//   -> {name: 'moe', age: 50}
function pick(obj, keys) {
  var result = {};
  for(var i = 0; i < keys.length; i++) {
    result[keys[i]] = obj[keys[i]];
  }
  return result;
}

// Define a function named unique that takes in one argument:
//    arr (array of strings)
//
// Return an array that contains each of the elements in the array but
// removes any duplicate elements.
//
// Example:
//   unique(['a', 'b', 'a', 'c']) -> ['a', 'b', 'c']

function unique(arr) {
  var map = {};
  for(var i = 0; i < arr.length; i++) {
    map[arr[i]] = true;
  }
  return Object.keys(map);
}

// In the early days of Roman numerals, the Romans didn't bother with any of
// this new-fangled subtraction 'IX' nonsense. No sir, it was straight addition,
// biggest to littlest - so 9 was written 'VIIII' and so on.
//
// Define a method that takes in one argument
//     num (number between 1 and 1000)
//
// Return a string that represents the roman numeral in the old school format.
//
// Example:
//   oldSchoolRomanNumeral(9) === 'VIIII'
//
// TIP #1: Here's a mapping of Roman to Arabic numerals:
//
//   1000 = M
//    500 = D
//    100 = C
//     50 = L
//     10 = X
//      5 = V
//      1 = I
//
// TIP #2: Use the Math.floor and modulus methods will be helpful
// TIP #3: You may like to use the repeat function that you defined above.
function oldSchoolRomanNumeral(num) {
  var denominations = [
    {letter: 'M', value: 1000},
    {letter: 'D', value: 500},
    {letter: 'C', value: 100},
    {letter: 'L', value: 50},
    {letter: 'X', value: 10},
    {letter: 'V', value: 5},
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
