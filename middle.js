const middle = function(array) {
  let middleValue = [];
  if (array.length <= 2 && array.length > 0) {
    middleValue = [];

  } else if (array.length % 2 === 0) {
    middleValue = [array[(array.length/2)-1], array[(array.length/2)]];

  } else if (array.length % 2 !== 0) {
    middleValue = [array[Math.floor(array.length/2)]];
  }
  return middleValue;
};

module.exports = middle;

