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
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);