const assertEqual = require('./assertEqual');

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

module.exports = eqArrays;