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
// assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
// assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);
// assertArraysEqual([1, 2, 3], [1, 2, 3]);
// assertArraysEqual([1, 2, 3], [3, 2, 1]);




// Our map function will take in two arguments:
  // 1. An array to map
  // 2. A callback function
// The map function will return a new array based on the results of the callback function.

const map = (array, callback) => {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;



const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
console.log(results1);

const animals = ['giraffe', 'lion', 'lemur'];
const results2 = map(animals, animal => animals[1]);
console.log(results2);

assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);

assertArraysEqual (results2, ['lion', 'lion', 'lion']);
