const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function (sentence) {
  let count = {};
  let newSentence = sentence.toLowerCase();
  console.log(newSentence);
  for (let letter of newSentence) {
    if (letter !== " ") {
      if (count[letter] >= 1) {
        count[letter] += 1;
      } else {
        count[letter] = 1;
      }
    }
  }
  return count;
};

console.log(countLetters("I really want to get this to work a lot"));
