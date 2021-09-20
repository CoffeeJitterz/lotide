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

const assertArraysEqual = function (array1, array2) {
  if (eqArrays(array1, array2) === true) {
    console.log(`🟢 Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🔴 Assertion Failed: ${array1} !== ${array2}`);
  }
};

const without = function (source, itemsToRemove) {
  let output = [];
  for (let i = 0; i < source.length; i++) {
    if (itemsToRemove.includes(source[i]) !== true) {
      output.push(source[i]);
    }
  }
  return output;
};

// console.log(without([1, 2, 3, "dog", "cat", "monkeys"], ["dog", "cat"]));

// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);

module.exports = without;