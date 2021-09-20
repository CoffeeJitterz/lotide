  const middle = function (array){
    let output = [];
    if(array.length < 3){
      return []
    } else if (array.length % 2 === 1){
      output = [array[(Math.ceil((array.length/2))) - 1]]
    } else if (array.length % 2 === 0){
      output = [array[(Math.ceil((array.length/2))) - 1], array[(Math.ceil((array.length/2)))]]
    }
    return output
  }

  module.exports = middle;
