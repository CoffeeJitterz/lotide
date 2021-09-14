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
  console.log(assertArraysEqual([1, 2, 3], [1, 2, 3]))
  console.log(assertArraysEqual([1, 2, 3], [1, 2, "dog"]))