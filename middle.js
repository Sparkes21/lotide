const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false
  } 
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  } 
  return true;
};

const assertArraysEqual = function(array1, array2) {
  const result = eqArrays(array1, array2);
  if (!result) {
    console.log( 'Assertion Failed: these arrays are not equal')
  }
  else {
    console.log('Assertion Passed: these arrays are equal')
  }
};


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

// test code
// console.log(middle([1])); // => []
// console.log(middle([1, 2])); // => []
// console.log(middle([1, 2, 3])); // => [2]
// console.log(middle([1, 2, 3, 4, 5])); // => [3]
// console.log(middle([1, 2, 3, 4])); // => [2, 3]
// console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]


// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);

