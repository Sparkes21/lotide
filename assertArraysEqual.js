const eqArrays = require('./eqArrays');

const assertArraysEqual = function(array1, array2) {
  const result = eqArrays(array1, array2);
  if (!result) {
    console.log( '😬😬😬 Assertion Failed: these arrays are not equal')
  }
  else {
    console.log('✅✅✅ Assertion Passed: these arrays are equal')
  }
};

module.exports = assertArraysEqual;

