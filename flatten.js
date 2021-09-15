const flatten = function (input) {
  const newArray = [];
  for (let item of input) {
    if (Array.isArray(item) === false) {
      newArray.push(item);
    } else {
      for (let more of item) {
        newArray.push(more);
      }
    }
  }
  return newArray;
};
