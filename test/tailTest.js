const assert = require('chai').assert;
const tail = require('../tail');
const assertEqual = require('../assertEqual');

describe("#tail", () => {
  it("should return  a [2, 3, 4, 5] for [1, 2, 3, 4, 5]", () => {
    const input = [1, 2, 3, 4, 5];
    const expectedOutput = [2, 3, 4, 5];
    assert.deepEqual(tail(input), expectedOutput);
  });
});


// const array = [1, 2, 3, 4, 5];
// console.log(array);
// console.log(tail(array));

// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!