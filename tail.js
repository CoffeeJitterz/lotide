const assertEqual = require('./assertEqual');

const tail = function(input) {
    let output = [];
    for (let i = 0; i < input.length; i++) {
        if (input[i] !== input[0]) {
            output.push(input[i]);
        }
    }
    return output;
};

console.log(tail([1, 2, 3, 4, 5]))
module.exports = tail;