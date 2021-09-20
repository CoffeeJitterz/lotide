const assertEqual = function(actual, expected) {
  if (actual === expected) {
      console.log(`🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
      console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(object, callback){
 // create a variable to store an array of the object keys
  const objectKeys = Object.keys(object)
 // loop through the keys
  for (let key of objectKeys) {
 // if the callback is truthy
    if(callback(object[key])){
// return the key
      return key;
    }
  }
}

// console.log(findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 2))

// console.log(findKey({
//   1: "dog",
//   2: "cat",
//   3: "monkey",
//   4: "bird"
// }, x => x === "monkey"))

module.exports = findKey;