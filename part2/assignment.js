// Define a function named sum that takes in one argument.
//    arr (array of numbers)
//
// Return the sum of all of the numbers in the array. For example, given
// [1, 2, 3, 4], then return 10. If the array is empty, return 0.
function sum(arr) {
  var sum = 0;

  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

// Define a function named product that takes in one argument.
//    arr (array of numbers)
//
// Return the product of all of the numbers in the array. For example, given
// [1, 2, 3, 4], then return 24. If the array is empty, return 1.
function product(arr) {
  var product = 1;

  for (var i = 0; i < arr.length; i++) {
    product *= arr[i];
  }

  return product;
}

// Define a function named concatenate that takes in one argument.
//    arr (array of strings)
//
// Return the concatenation of all the strings in the array. For example, given
// ['hello', 'my', 'name', 'is', 'ken'], then return 'hellomynameisken'. If the
// array is empty, return ''.
function concatenate(arr) {
  var str = '';

  for (var i = 0; i < arr.length; i++) {
    str += arr[i];
  }

  return str;
}

// Define a function named repeat that takes in two arguments.
//     input (string)
//     integer (number)
//
// Return a new string containing integer copies of the input string. For
// example, given 'hi' and 4, then return 'hihihihi'.
function repeat(str, times) {
  var result = '';

  for (var i = 0; i < times; i++) {
    result += str;
  }

  return result;
}

// Define a function named filterPassingGrades that takes in one argument.
//     grades (array of numbers)
//
// Return a new array with any grade less than 70 filtered out. For example,
// given [88, 67, 70, 92, 53], then return [88, 70, 92].
function filterPassingGrades(arr) {
  var result = [];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] >= 70) {
      result.push(arr[i]);
    }
  }

  return result;
}

// Define a function named replace that takes in three arguments.
//    arr (array of numbers)
//    from (number)
//    to (number)
//
// Return a new array of numbers where all from elements are replaced with to.
// For example, given [1, 3, 2, 1, 3], 1, and 4, then return [4, 3, 2, 4, 3].
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

// Define a function named flatten that takes in one argument.
//     arr (array of arrays)
//
// Return a new array that combines all of elements of each inner array. For
// example, given [[1], [2, 3], [4]], then return [1, 2, 3, 4].
//
// Tip: You only need to flatten one level deep.
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
function flatten(arr) {
  var result = [];

  for (var i = 0; i < arr.length; i++) {
    result = result.concat(arr[i]);
  }

  return result;
}

// Define a function named max that takes in one argument.
//    arr (array of numbers)
//
// Return the maximum number in the array. For example, given [1, 2, -3, 4],
// then return 4. If the array is empty, return -Infinity.
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
function max(arr) {
  var val = -Infinity

  for (var i = 0; i < arr.length; i++) {
    val = Math.max(val, arr[i]);
  }

  return val;

  // or ...
  // Math.max(...arr);
}

// Define a function named min that takes in one argument.
//    arr (array of numbers)
//
// Return the minimum number in the array. For example, given [1, 2, -3, 4],
// then return -3. If the array is empty, return Infinity.
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min
function min(arr) {
  var val = Infinity

  for (var i = 0; i < arr.length; i++) {
    val = Math.min(val, arr[i]);
  }

  return val;

  // or ...
  // Math.min(...arr);
}

// Define a function named mean that takes in one argument.
//    arr (array of numbers)
//
// Return the mean (i.e. average) of all of the numbers in the array. For
// example, given [1, 2, 6], then return 3. If the array is empty, return null.
function mean(arr) {
  if (arr.length === 0) {
    return null;
  }

  return sum(arr) / arr.length;
}

// Define a function named median that takes in one argument.
//    arr (array of numbers)
//
// Return the median of all of the numbers. For example, given [1, 2, 6], then
// return 2. Also, if given [1, 2, 6, 8], return 5. If the array is empty,
// return null.
//
// Tip: Use Google to learn more about calculating the median.
// Tip: The given array may not be sorted.
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
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

// Define a function named contains that takes in two arguments.
//     arr (array of strings)
//     str (string)
//
// Return true if that string exists in the array, otherwise false.
function contains(arr, str) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === str) {
      return true;
    }
  }

  return false;
}

// Define a function named distance that takes in two arguments.
//    point1 (object)
//    point2 (object)
//
// Assume each point argument has the following format.
//    { x: NUMBER, y: NUMBER }
//
// Return the distance between the two points on a Cartesian coordinate system.
// For example, given { x: 3, y: 2 } and { x: 9, y: 7 }, then return
// approximately 7.810249675906654.
//
// Tip: Use Google to learn more about calculating the distance.
function distance(point1, point2) {
  var xSquared = Math.pow(point1.x - point2.x, 2);
  var ySquared = Math.pow(point1.y - point2.y, 2);

  return Math.sqrt(xSquared + ySquared);
}

// Define a function named combine that takes in two arguments.
//    obj1 (object)
//    obj2 (object)
//
// Return a new object that has the key-value pairs of both objects. For
// example, given { a: 1 } and { b: 2 }, then return { a: 1, b: 2 }.
function combine(obj1, obj2) {
  var object = {};

  for (var key in obj1) {
    object[key] = obj1[key];
  }

  for (var key in obj2) {
    object[key] = obj2[key];
  }

  return object;
}

// Define a function called invert that takes in one argument.
//    obj (object)
//
// Return a new object where the keys and values of the argument are inverted.
// For example, given { a: 1, b: 2 }, then return { '1': 'a', '2': 'b' }.
function invert(obj) {
  var object = {};
  var value;

  for (var key in obj) {
    value = obj[key];
    object[value] = key;
  }

  return object;
}

// Define a function named values that takes in one argument.
//    obj (object)
//
// Return an array of the values of the object. For example, given
// { a: 1, b: 2, c: 3 }, then return [1, 2, 3].
function values(obj) {
  var result = [];

  for (var key in obj) {
    result.push(obj[key]);
  }

  return result;
}

// Define a function called toPairs that takes in one argument.
//    obj (object)
//
// Return a new array where each element is key-value pair array of the
// argument. For example, given { a: 1, b: 2 }, then return
// [['a', 1], ['b', 2]].
function toPairs(obj) {
  var array = [];
  var pair;

  for (key in obj) {
    pair = [key, obj[key]];
    array.push(pair);
  }

  return array;
}

// Define a function called fromPairs that takes in one argument.
//    arr (array)
//
// Return a new object where each key-value pair is a from an element in the
// argument. For example, given [['a', 1], ['b', 2]], then return
// { a: 1, b: 2 }.
function fromPairs(arr) {
  var object = {};

  for (var i = 0; i < arr.length; i++) {
    object[arr[i][0]] = arr[i][1];
  }

  return object;
}

// Define a function named pluck that takes in two arguments.
//     arr (array of objects)
//     key (string)
//
// Return a new array where each element is the keyed value of each object.
//
// For example, given the array:
//    [
//      { name: 'moe', age: 40 },
//      { name: 'larry', age: 50 },
//      { name: 'curly', age: 60 }
//    ]
//
// and the key 'name', then return ['moe', 'larry', 'curly'].
function pluck(arr, key) {
  var result = [];

  for (var i = 0; i < arr.length; i++) {
    result.push(arr[i][key])
  }

  return result;
}

// Define a function named pick that takes in two arguments.
//    obj (object)
//    keys (array of strings)
//
// Return a new object that contains only the specified keys. For example, given
// { name: 'moe', age: 50, id: 1 } and ['name', 'age'], then return
// { name: 'moe', age: 50 }.
function pick(obj, keys) {
  var result = {};
  var pick;

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    result[key] = obj[key];
  }

  return result;
}
