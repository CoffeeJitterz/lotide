const assertEqual = function(actual, expected) {
    if (actual === expected) {
        console.log(`🟢 Assertion Passed: ${actual} === ${expected}`);
    } else {
        console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
    }
};

const tail = function(input) {
    let output = [];
    for (let i = 0; i < input.length; i++) {
        if (input[i] !== input[0]) {
            output.push(input[i]);
        }
    }
    return output;
};

const array = [1, 2, 3, 4, 5];
console.log(array);
console.log(tail(array));

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!