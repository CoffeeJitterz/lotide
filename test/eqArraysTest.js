const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays')

console.log(eqArrays(["1", "2", "3"], ["1", "2", 3]));
console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"]));
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true); // => false

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true) // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true) // => false