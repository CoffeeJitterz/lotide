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

const letterPositions = function (sentence) {
  const results = {};
  let newSentence = sentence.toLowerCase();
  for (let i = 0; i < newSentence.length; i++) {
    const newLetter = newSentence[i]
     if (newLetter !== " ") {
      if (Array.isArray(results[newSentence[i]]) === false){
      results[newLetter] = [i];
      } else {
        results[newLetter].push(i)
     } 
    }
  }
  return results;
};

// const test = "hello";
// const test2 = "hello there young dog";

// console.log(letterPositions(test));
// console.log(letterPositions(test2));
// console.log(assertArraysEqual(letterPositions(test), [1]));

module.exports = letterPositions;