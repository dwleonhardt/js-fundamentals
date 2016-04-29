// ------- Build with your instructor ------------
// Define a function named sum that takes two numbers as arguments
// Return the sum of those two arguments
// Uncomment the code below by typing Command + /
function sum(a,b) {
  return a + b;
}



// Define a function named product that takes two numbers as arguments
// Return the product of those two arguments
function product(a,b) {
  return a * b;
}



// Define a function named sumAndProduct that takes three numbers as arguments
// Add the first two arguments together, then multiply that sum by the third argument
//
// Example: if you are given 1, 2, 5 you would add 1 and 2 (which is 3) and multiply by 5, returning 15
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Grouping
function sumAndProduct(x,y,z) {
  return (x + y) * z;
}



// Define a function named roundUp that takes a number (a float) as an argument
// Return that number, rounded up
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil
function roundUp(num) {
  return Math.ceil(num);
}



// Define a function named celsiusToFahrenheit that takes one argument, a number (in celcius)
// Return a float that represents that temperature in Farenheit
//
// HINT: Use Google to find the formula
function celsiusToFahrenheit(temp) {
  return temp * (9/5) + 32;
}



// Define a function named areaOfCircle that calculates the area of a circle
// It takes one argument, radius
//
// See https://www.google.com/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=area%20of%20a%20circle
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI
function areaOfCircle(radius) {
  return Math.PI * radius * radius;
}



// Define a function named areaOfDonut that takes two arguments:
//    - outerRadius
//    - innerRadius
// Returns the area of the donut
function areaOfDonut(outerRadius, innerRadius) {
  return areaOfCircle(outerRadius) - areaOfCircle(innerRadius);
}



// Define a function named greet that takes 2 arguments, firstName and lastName
// Return a string in the format "Hello, Tom Brady!"
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#Template_strings
//
function greet(firstName, lastName) {
  return `Hello, ${firstName} ${lastName}!`;
}



// Define a function named toSentence that takes 4 arguments: word1, word2, word3, oxfordComma
// If the 4th argument (oxfordComma) is true
//    Return a String in the format "word1, word2, and word3."
// If the 4th argument (oxfordComma) is false
//    Return a String in the format "word1, word2 and word3."
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Addition
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#String_operators
//
function toSentence(word1, word2, word3, oxfordComma){
  if (oxfordComma) {
    return word1 + ', ' + word2 + ', and ' + word3 + '.';
  } else {
    return word1 + ', ' + word2 + ' and ' + word3 + '.';
  }
}



// Define a function named toRomanNumeral that takes 1 arguments: a number
// If the number is between 1 and 10 (inclusive)
//    Return a String representing the roman numeral of the number
// If the number is less than 1, or greater than 10
//    Return null
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#switch_statement
//
function toRomanNumeral(number){
  switch (number) {
    case 1:
      return "I";
      break;
    case 2:
      return "II";
      break;
    case 3:
      return "III";
      break;
    case 4:
      return "IV";
      break;
    case 5:
      return "V";
      break;
    case 6:
      return "VI";
      break;
    case 7:
      return "VII";
      break;
    case 8:
      return "VIII";
      break;
    case 9:
      return "IX";
      break;
    case 10:
      return "X";
      break;
    default:
      return null;
  }
}



// Define a function toDolla that takes one number argument: amount
// Return a string representation
// Example: if you get 10, return "10.00"
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
function toDolla(num) {
  return `$${num.toFixed(2)}`;
}



// Define a method named percentOf that takes two arguments
// Returns a String in the format "10.02%" that represents the percentage of one number in another
function percentOf(numerator, denominator) {
  return (numerator / denominator * 100).toFixed(2) + '%'
}



// Define a function named isStrictlyEqual that takes two arguments
// Return true if the two arguments are both equal _and_ have the same type
// Otherwise return false
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#Strict_equality_using
// See https://dorey.github.io/JavaScript-Equality-Table/
function isStrictlyEqual(a,b) {
  return a === b;
}



// Define a function named isEqual that takes two arguments
// Return true if the two arguments are both equal regardless of type
// Otherwise return false
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#Loose_equality_using
function isLooselyEqual(a, b) {
  return a == b;
}



// Define a function named remainder that takes two arguments, both whole numbers
// Return the remainder of the first number divided by the second number
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder_()
//
function remainder(x,y) {
  return x % y;
}



// Define a function named isEven that takes one argument that is a whole number
// Return true if the number is even and false if it is not.
//
// Hint: What number will give you a remainder of 0 if it is even?
function isEven(num) {
  return num % 2 === 0;
}



// Define a function named isOdd that takes one argument that is a whole number
// Return true if the number is odd and false if it is not.
function isOdd(num) {
  return num % 2 !== 0;
}



// Define a function named isVowel that takes one argument, a letter
// Returns true if the letter is a vowel, and false if the letter is a consonant.
// (Treat 'y' as a consonant)
function isVowel(char) {
  return char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u';
}



// Define a function named biggestOfThree which takes three numbers as arguments
// Return the largest number
//
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
function biggestOfThree(a,b,c) {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c){
    return b;
  } else {
    return c;
  }
  // OR....
  // return Math.max(a,b,c);
}



// Define a function named biggestOfThreeStrings which takes three strings as arguments
// Return the longest string
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
function biggestOfThreeStrings(a,b,c) {
  return Math.max(a.length, b.length, c.length);
}



// Define a function named iceCreamPosition that takes two arguments:
//    pieTemperature
//    iceCreamFlavor
//
// If iceCreamFlavor is 'cardamom'
//    return 'not at all' and ignore anything else (this trumps all else)
// Otherwise
//  If pieTemperature is 'cold'
//    return 'on top'
//  If pieTemperature is 'warm'
//    return 'on the side'
function iceCreamPosition(pieTemperature, iceCreamFlavor) {
  if (iceCreamFlavor === 'cardamom') {
    return 'not at all';
  } else if (pieTemperature === 'warm') {
    return 'on the side';
  }

  return 'on top';
}



// Define a function named isLeapYear that takes one argument, a year
// Returns true if the year is a leap year, and false if not
//
// See: https://en.wikipedia.org/wiki/Leap_year#Algorithm
function isLeapYear(year) {
  if (year % 4 !== 0) {
    return false;
  } else if (year % 100 === 0 && year % 400 === 0) {
    return false;
  } else {
    return true;
  }
}



// Define a function named shout that takes a string, and
// Return the same string but all in uppercase letters
//
// Example: if you are given "Hello There", return "HELLO THERE"
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
function shout(input) {
  return input.toUpperCase();
}



// Define a function named shout that takes a string, and
// Return the same string but all in lowercase letters, prefixed by "shhh... "
//
// Example: if you are given "Hello There", return "shhh... hello there"
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
function whisper(input) {
  return "shhh... " + input.toLowerCase();
}



// Define a function named stopAt that takes two arguments
//   - sourceString
//   - stopString
//
// Find the location of the stopString in the sourceString
// Return the sourceString up to the point where sourceString started
//
// Example: if you get "take me to the water", "to", you'd return "take me"
// Example: if you get "how now brown cow", "brown", you'd return "how now"
//
// NOTE: this will require a combination of 3 different steps
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
function stopAt(sourceString, stopString){
  return sourceString.substring(0, sourceString.indexOf(stopString)).trim();
}



// Define a function named capitalize that takes one argument, a string
// Return a string with the first letter capitalized
//
// Example: if you get "hello there" you would return "Hello there"
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring
function capitalize(input) {
  return input.substring(0,1).toUpperCase() + input.substring(1);
}



// Define a function named leftPad5 that takes one argument, a number
// If the number's length is less than 5
//    Return a 5-character string with the number, padded by zeroes
// If the string has 5 or more characters
//    Return the number as a string
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#switch_statement
//
function leftPad5(input) {
  switch (input.toString().length) {
    case 1:
      return '0000' + input.toString();
      break;
    case 2:
      return '000' + input.toString();
      break;
    case 3:
      return '00' + input.toString();
      break;
    case 4:
      return '0' + input.toString();
      break;
    default:
      return input.toString();
  }
}



// Define a method named pickyPickyString that takes one argument
//
// If you pass a string, it returns "Thanks!  Got it."
// If you anything except a string, it returns "Oh no!  I wanted a string, but got a [type]"
//
// Example: If you pass "hello", return "Thanks!  Got it."
// Example: If you pass 2, return "Oh no!  I wanted a string, but got a number"
// Example: If you pass true, return "Oh no!  I wanted a string, but got a boolean"
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
function pickyPickyString(input) {
  if (typeof input === 'string') {
    return 'Thanks!  Got it.';
  } else {
    return `Oh no!  I wanted a string, but got a ${typeof input}`;
  }
}



// Write a function named calculateTaxRate that takes two arguments:
//    - annualSalary (number from 1 to 74,900)
//    - status (a string, which is either 'single' or 'joint')
//
// IF status is anything other than 'single' or 'joint'
//    return a string that says "better call an accountant"
// IF the dollar amount is greater than 74,900
//    return a string that says "better call an accountant"
// otherwise
//    use the table from http://www.efile.com/tax-service/tax-calculator/tax-brackets/
//    to calculate the correct tax rate as a string (for example, "10%" OR "15%")
function calculateTaxRate(salary, status) {
  if (salary > 74900 || (status !== 'single' && status !== 'joint')) {
    return 'better call an accountant';
  }

  switch (status) {
    case 'single':
      if (salary >= 1 && salary <= 9225) {
        return '10%';
      } else {
        return '15%';
      }
    case 'joint':
      return salary >= 1 && salary <= 18450 ? '10%' : '15%';
  }
}
