const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function (input1, input2) {
  if (input1.length === input2.length) {
    for (let i = 0; i < input1.length; i++) {
      if (input1[i] !== input2[i]) {
        console.log("They Are Not The Same", false);
        return false;
      }
    }
  } else {
    return false;
  }
  return true;
};

const eqObjects = function (object1, object2) {
//converts objects into iteratable array of keys  
  let object1Keys = Object.keys(object1);
  let object2Keys = Object.keys(object2);

//checks if both arrays are the same length
  if (object1Keys.length === object2Keys.length) {

//loops through each object
    for (let key of object1Keys) {

//checks if both values are arrays
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {

//utilizes eqArrays to compare arrays
        if(eqArrays(object1[key], object2[key]) === false){
          return false;
        }
        
//if the values are not arrays, checks if the primitive values are identical
      } else if (object1[key] !== object2[key]) {
        return false;
      }
    }
//if they were not the same length in the first place returns false
  } else {
    return false;
  }
//returns true of all tests were passed
  return true;
};

//primative tests
console.log("basic tests");
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba);
assertEqual(eqObjects(ab, ba), true); // => true
const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false

//array tests
console.log("array tests");
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true
const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false
