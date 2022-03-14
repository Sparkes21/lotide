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
    console.log( '😬😬😬 Assertion Failed: these arrays are not equal')
  }
  else {
    console.log('✅✅✅ Assertion Passed: these arrays are equal')
  }
};


// takeUntil.
// It will take in two parameters as well:
// 1. The array to work with
// 2. The callback (which Lodash calls "predicate")

const takeUntil = (array, callback) => {
  array.forEach((item, index) => {
    if (callback(item)) {
      array = array.slice(0, index);
    } return {

    }
  }); 
  return array;
};

module.exports = takeUntil;



const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);


// Expected Output
// [ 1, 2, 5, 7, 2 ]
// --
// [ 'I\'ve', 'been', 'to', 'Hollywood' ]
