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

module.exports = countLetters;
