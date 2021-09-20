const assertArraysEqual = require('../assertArraysEqual')
const middle = require('../middle')

console.log(middle([1, 2, 3])) // => [2]
console.log(middle([1, 2, 3, 4, 5])) // => [3]
console.log(middle([1, 2, 3, 4, 5, 6, 7]))
console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]

const test = [1, 2, 3, 4, 5, 6, 7]
const test2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 , 11, 12]
assertArraysEqual(middle(test), middle([1, 2, 3, 4, 5, 6, 7]));
assertArraysEqual(middle(test), middle([1, 2, 3, 4, 5, 6, 7, 8]))
assertArraysEqual(middle(test2), middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10 , 11, 12]))
assertArraysEqual(middle(test2), middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10 , 11]))