
// Define a function named group that is given an array of objects and a string,
// key.
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


// Define a function named merge that takes in two arrays of numbers.
// We can assume that the numbers in each array are sorted.
//
// Return a new array that contains all the numbers in each array still sorted.
// Tip: Each array may contain duplicate numbers. You need to ensure that each
// number is still accounted for.
