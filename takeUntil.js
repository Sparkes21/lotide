const eqArrays = require('./eqArrays');

const assertArraysEqual = require ('./assertArraysEqual');


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


// TEST CODE
// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);

// console.log('---');

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);


// Expected Output
// [ 1, 2, 5, 7, 2 ]
// --
// [ 'I\'ve', 'been', 'to', 'Hollywood' ]
