// Define a function named sum that takes in one argument.
//    arr (array of numbers)
//
// Return the sum of all of the numbers in the array. For example, given
// [1, 2, 3, 4], then return 10. If the array is empty, return 0.
function sum(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
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
  let product = 1;

  for (let i = 0; i < arr.length; i++) {
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
  let str = '';

  for (let i = 0; i < arr.length; i++) {
    str += arr[i];
  }

  return str;

  // or...
  // return arr.join('');
}

// Define a function named repeat that takes in two arguments.
//     str (string)
//     times (number)
//
// Return a new string containing times copies of the input str. For example,
// given 'hi' and 4, then return 'hihihihi'.
function repeat(str, times) {
  let result = '';

  for (let i = 0; i < times; i++) {
    result += str;
  }

  return result;

  // or...
  // return str.repeat(times);
}

// Define a function named filterPassingGrades that takes in one argument.
//     grades (array of numbers)
//
// Return a new array with any grade less than 70 filtered out. For example,
// given [88, 67, 70, 92, 53], then return [88, 70, 92].
function filterPassingGrades(grades) {
  let result = [];

  for (let i = 0; i < grades.length; i++) {
    if (grades[i] >= 70) {
      result.push(grades[i]);
    }
  }

  return result;

  // or...
  // var result = [];
  //
  // for (var grade of grades) {
  //   if (grade >= 70) {
  //     result.push(grade);
  //   }
  // }
  //
  // return result;

}

// Define a function named replace that takes in three arguments.
//    arr (array of numbers)
//    from (number)
//    to (number)
//
// Return a new array of numbers where all from elements are replaced with to.
// For example, given [1, 3, 2, 1, 3], 1, and 4, then return [4, 3, 2, 4, 3].
function replace(arr, from, to) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === from) {
      result.push(to);
    } else {
      result.push(arr[i]);
    }

    // or...
    // result.push(arr[i] === from ? to : arr[i]);
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
  let result = [];

  for (let element of arr) {
    result = result.concat(element);
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
  let val = -Infinity

  for (let i = 0; i < arr.length; i++) {
    val = Math.max(val, arr[i]);
  }

  return val;

  // or...
  // return Math.max.apply(null, arr);

  // or...
  // return Math.max(...arr);
}

// Define a function named min that takes in one argument.
//    arr (array of numbers)
//
// Return the minimum number in the array. For example, given [1, 2, -3, 4],
// then return -3. If the array is empty, return Infinity.
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min
function min(arr) {
  let val = Infinity

  for (let i = 0; i < arr.length; i++) {
    val = Math.min(val, arr[i]);
  }

  return val;

  // or...
  // return Math.min.apply(null, arr);

  // or...
  // return Math.min(...arr);
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
// return 2. Also, if given [1, 2, 6, 8], return 4. If the array is empty,
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

  const sorted = arr.sort();

  if (sorted.length % 2 === 0) {
    const lowerIndex = sorted.length / 2 - 1;
    const lower = sorted[lowerIndex];

    const upper = sorted[sorted.length / 2];

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
  for (let element of arr) {
    if (element === str) {
      return true;
    }
  }

  return false;

  // or...
  // return arr.indexOf(str) !== -1;

  // or...
  // return arr.includes(str);
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
  const xSquared = Math.pow(point1.x - point2.x, 2);
  const ySquared = Math.pow(point1.y - point2.y, 2);

  return Math.sqrt(xSquared + ySquared);
}

// Define a function named combine that takes in two arguments.
//    obj1 (object)
//    obj2 (object)
//
// Return a new object that has the key-value pairs of both objects. For
// example, given { a: 1 } and { b: 2 }, then return { a: 1, b: 2 }.
function combine(obj1, obj2) {
  let result = {};

  for (let key in obj1) {
    result[key] = obj1[key];
  }

  for (let key in obj2) {
    result[key] = obj2[key];
  }

  return result;

  // or...
  // return Object.assign({}, obj1, obj2);
}

// Define a function called invert that takes in one argument.
//    obj (object)
//
// Return a new object where the keys and values of the argument are inverted.
// For example, given { a: 1, b: 2 }, then return { '1': 'a', '2': 'b' }.
function invert(obj) {
  let result = {};
  let value;

  for (let key in obj) {
    value = obj[key];
    result[value] = key;
  }

  return result;
}

// Define a function named values that takes in one argument.
//    obj (object)
//
// Return an array of the values of the object. For example, given
// { a: 1, b: 2, c: 3 }, then return [1, 2, 3].
function values(obj) {
  let result = [];

  for (let key in obj) {
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
  let result = [];
  let pair;

  for (var key in obj) {
    pair = [key, obj[key]];
    result.push(pair);
  }

  return result;
}

// Define a function called fromPairs that takes in one argument.
//    arr (array)
//
// Return a new object where each key-value pair is from an element in the
// argument. For example, given [['a', 1], ['b', 2]], then return
// { a: 1, b: 2 }.
function fromPairs(arr) {
  let result = {};

  for (let pair of arr) {
    result[pair[0]] = pair[1];
  }

  return result;
}
