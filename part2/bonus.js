// Define a function named bigSum that takes in an arbitrary number of
// arguments. Assume all arguments are a number.
//
// Return the sum of all of the arguments. For example, given 1, 2, 3, and 4,
// then return 10. If there are no arguments, return 0.
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments
function bigSum() {
  var sum = 0;

  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }

  return sum;
}

// Define a function named merge that takes in two arguments.
//    arr1 (array of sorted numbers)
//    arr2 (array of sorted numbers)
//
// Return a new array that contains all the numbers in each array still sorted.
// For example, given [1, 3, 5] and [2, 4], then return [1, 2, 3, 4, 5].
function merge(arr1, arr2) {
  var output = [];

  while (arr1.length > 0 && arr2.length > 0) {
    if (arr1[0] < arr2[0]) {
      output.push(arr1.shift());
    } else {
      output.push(arr2.shift());
    }
  }

  while (arr1.length > 0) {
    output.push(arr1.shift());
  }

  while (arr2.length > 0) {
    output.push(arr2.shift());
  }

  return output;
}

// Define a function named unique that takes in one argument.
//    arr (array of strings)
//
// Return a new array that contains all the elements of arr minus any
// duplicates. For example, given ['a', 'b', 'a', 'c'], then return
// ['a', 'b', 'c'].
function unique(arr) {
  var map = {};

  for (var i = 0; i < arr.length; i++) {
    map[arr[i]] = true;
  }

  return Object.keys(map);
}

// In the early days of Roman numerals, the Romans didn't bother with any of
// this new-fangled subtraction 'IX' nonsense. No sir, it was straight addition,
// biggest to littlest. So 9 was written 'VIIII' and so on.
//
// Define a function called oldSchoolRomanNumeral that takes in one argument.
//     num (number between 1 and 1000)
//
// Return a string that represents the roman numeral in the old school format.
// For example, given 9, then return 'VIIII'.
//
// TIP #1: Here's a mapping of Roman to Arabic numerals.
//
//   1000 = M
//    500 = D
//    100 = C
//     50 = L
//     10 = X
//      5 = V
//      1 = I
//
// TIP #2: The Math.floor() and remainder functions will be helpful.
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
function oldSchoolRomanNumeral(num) {
  var denominations = [
    { letter: 'M', value: 1000 },
    { letter: 'D', value: 500 },
    { letter: 'C', value: 100 },
    { letter: 'L', value: 50 },
    { letter: 'X', value: 10 },
    { letter: 'V', value: 5 },
    { letter: 'I', value: 1 }
  ];

  var result = '';
  var letterCount;

  for (var i = 0; i < denominations.length; i++) {
    letterCount = Math.floor(num / denominations[i].value);

    if (letterCount > 0) {
      result += denominations[i].letter.repeat(letterCount);
      num %= denominations[i].value;
    }
  }

  return result;
}

// Eventually, someone thought it would be terribly clever if putting a smaller
// number before a larger one meant you had to subtract the smaller one. As a
// result of this development, you must now suffer.
//
// Define a function called newSchoolRomanNumeral that takes in one argument.
//     num (number between 1 and 1000)
//
// Return a string that represents the roman numeral in the new school format.
// For example, given 9, then return 'IX'.
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
//
// TIP #2: The Math.floor() and remainder functions will be helpful.
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
function newSchoolRomanNumeral(num) {
  var denominations = [
    { letter: 'M', value: 1000 },
    { letter: 'CM', value: 900 },
    { letter: 'D', value: 500 },
    { letter: 'CD', value: 400 },
    { letter: 'C', value: 100 },
    { letter: 'XC', value: 90 },
    { letter: 'L', value: 50 },
    { letter: 'XL', value: 40 },
    { letter: 'X', value: 10 },
    { letter: 'IX', value: 9 },
    { letter: 'V', value: 5 },
    { letter: 'IV', value: 4 },
    { letter: 'I', value: 1 }
  ];

  var result = '';
  var letterCount;

  for (var i = 0; i < denominations.length; i++) {
    letterCount = Math.floor(num / denominations[i].value);

    if (letterCount > 0) {
      result += denominations[i].letter.repeat(letterCount);
      num %= denominations[i].value;
    }
  }

  return result;
}
