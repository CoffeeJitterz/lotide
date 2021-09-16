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

const takeUntil = function (array, callback) {
  //Variable to store the new array
  const newArray = [];
  //loop through the array index
  for (let item of array) {
    console.log(item);
    //if callback is false push the array[1] to variable
    if (!callback(item)) {
      newArray.push(item);
      // //else if callback is true, return the variable
    } else if (callback(item)) {
      return newArray;
    }
  }
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, (x) => x < 0);
console.log(assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]));

console.log("---");

const data2 = [
  "I've",
  "been",
  "to",
  "Hollywood",
  ",",
  "I've",
  "been",
  "to",
  "Redwood",
];
const results2 = takeUntil(data2, (x) => x === ",");
console.log(assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]));
