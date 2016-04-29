/*

The purpose of this challenge is to be able to encrypt and decrypt a string, using a simple Caesar Cipher.

Read more here: https://en.wikipedia.org/wiki/Caesar_cipher

Each letter has what's called an ASCII Code - a numeric representation.  You can see them here http://www.asciitable.com/

You'll just be working with lowercase letters (codes 97-122).

You can convert characters to ASCII codes, and ASCII codes to characters via these methods:

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode

The cipher works like so:

- If you get a string, such as "a", convert it to a number: 97
- Add 13 to that number: 110
- Figure out what character that number represents: 110 => "n"
- So the final result is that "a" becomes "n"

If, when you add 13 to the ASCII code, it's greater than 122 ("z"), you wrap around.  See the test for more context.

You'll solve this cipher in a few steps.  Have fun!
*/


// Define a function named caesarAdd13 that takes one argument, a number
// If the number is less than 97
//    Throw an error with the message "Doh!  Too low.": https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw
// If the number is greater than 122
//    Throw an error with the message "Doh!  Too high.": https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw
// If that number+13 would be greater than 122 (the ASCII code for "z")
//    Return a number that is "wrapped" around
// Otherwise
//  Return the number plus 13
//
// Example: caesarAdd13(97) => 110
// Example: caesarAdd13(110) => 98
function caesarAdd13(number){
  var lowestCharCode = 97;
  var highestCharCode = 122;
  var offset = 13;

  if (number < lowestCharCode) {
    throw "Doh!  Too low."
  }

  if (number > highestCharCode) {
    throw "Doh!  Too high."
  }

  var result = number + offset;
  if (result > highestCharCode) {
    result = lowestCharCode + (result - highestCharCode - 1);
  }
  return result;
}

// Define a function named caesarSubtract13 that takes one argument, a number
// If the number is less than 97
//    Throw an error with the message "Doh!  Too low.": https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw
// If the number is greater than 122
//    Throw an error with the message "Doh!  Too high.": https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw
// If that number-13 would be less than than 97 (the ASCII code for "a")
//    Return a number that is "wrapped" around
// Otherwise
//  Return the number minus 13
//
// Example: caesarSubtract13(97) => 110
// Example: caesarSubtract13(110) => 98
function caesarSubtract13(number){
  var lowestCharCode = 97;
  var highestCharCode = 122;
  var offset = 13;

  if (number < lowestCharCode) {
    throw "Doh!  Too low."
  }

  if (number > highestCharCode) {
    throw "Doh!  Too high."
  }

  var result = number - offset;
  if (result < lowestCharCode) {
    result = highestCharCode - (lowestCharCode - result - 1);
  }
  return result;
}

// Define a function named encodeChar that takes a single argument: a 1-character string
// Return the encoded version of that string
//
// HINT: which of your functions would you use to encode the character?
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
function encodeChar(string) {
  return String.fromCharCode(caesarSubtract13(string.toLowerCase().charCodeAt(0)));
}

// Define a function named encodeMessage that takes a single argument: a string
// Return the encoded version of that entire string, according to these rules:
//   - if the character is not a letter, just keep it as is.
//
// Example: "Hello, there!" => "uryyb, gurer!"
//
// HINT: you'll need a loop for this
//
function encodeMessage(string) {
  var result = "";
  for (var i = 0; i < string.length; i++) {
    var charCode = string.toLowerCase().charCodeAt(i);
    if (charCode >= 97 && charCode <= 122) {
      result += encodeChar(string[i]);
    } else {
      result += string[i]
    }
  }
  return result;
}

// Define a function named decodeMessage that takes a single argument: a string
// Return the decoded version of that entire string, according to these rules:
//   - if the character is not a letter, just keep it as is.
//
// Example: "uryyb, gurer!" => "Hello, there!"
function decodeMessage(string) {
  return encodeMessage(string);
}

// SUPER BONUS
// Figure out how to maintain the case of the letters, so that "Hello, there!" becomes "Uryyb, gurer!" and vice-versa
// Change the tests in order to make this happen
