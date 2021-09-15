const eqArrays = function (input1, input2) {
  //checking if lengths match, if they don't it must be false
    if (input1.length === input2.length) {
      for (let i = 0; i < input1.length; i++) {
        if (input1[i] !== input2[i]) {
          return false;
        }
      }
    } else {
      return false;
    }
    return true;
  };

  const assertArraysEqual = function (array1, array2){
    if (eqArrays(array1, array2) === true) {
      console.log(`🟢 Assertion Passed: ${array1} === ${array2}`);
  } else {
      console.log(`🔴 Assertion Failed: ${array1} !== ${array2}`);
  }
  }

  const middle = function (array){
    let output = [];
    if(array.length < 3){
      return []
    } else if (array.length % 2 === 1){
      output = [array[(Math.ceil((array.length/2))) - 1]]
    } else if (array.length % 2 === 0){
      output = [array[(Math.ceil((array.length/2))) - 1], array[(Math.ceil((array.length/2)))]]
    }
    return output
  }

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