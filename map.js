const eqArrays = require('./eqArrays');

const assertArraysEqual = require('./assertArraysEqual');


const map = (array, callback) => {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;


// TEST CODE
// const words = ["ground", "control", "to", "major", "tom"];
// const results1 = map(words, word => word[0]);
// console.log(results1);

// const animals = ['giraffe', 'lion', 'lemur'];
// const results2 = map(animals, animal => animals[1]);
// console.log(results2);

// assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);

// assertArraysEqual (results2, ['lion', 'lion', 'lion']);
