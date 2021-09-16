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

const map = function(array, callback){
  const results = [];
  for(let item of array){
    results.push(callback(item));
  }
  return results;
}

//test case 1
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
console.log(results1);

//test case 2
const results2 = map(words, word => word += " Bowie Rocks")
console.log(assertArraysEqual(results2, ["ground Bowie Rocks", "control Bowie Rocks", "to Bowie Rocks", "major Bowie Rocks", "tom Bowie Rocks"]))

//test case 3
const results3 = map(words, word => word = "station to station")
console.log(assertArraysEqual(results3, ["station to station", "station to station", "station to station", "station to station", "station to station"]))

//test case 4
const results4 = map(words, word => word = word + word)
console.log(assertArraysEqual(results4, ["groundground", "controlcontrol", "toto", "majormajor", "tomtom"]))