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

  const assertObjectsEqual = function(object1, object2){
    if (eqObjects(object1, object2)) {
      console.log(`🟢 Assertion Passed: ${object1} === ${object2}`);
  } else {
      console.log(`🔴 Assertion Failed: ${object1} !== ${object2}`);
  }
  }

  assertObjectsEqual({
    1: "Dog",
    2: "cat",
    3: "fish",
    4: "Bird",
    5: "monkey"
  },{
    1: "Dog",
    2: "cat",
    3: "fish",
    4: "Bird",
    5: "monkey"
  })
  
  assertObjectsEqual({
    1: "Dog",
    2: "cat",
    3: "fish",
    4: "Bird",
    5: "monkey"
  },{
    1: "Dog",
    2: "cat",
    3: "fish",
    4: "Bird",
    5: "monkeys"
  })

  