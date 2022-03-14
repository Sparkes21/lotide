
const assertArraysEqual = require('./assertArraysEqual');


const eqArrays = require('./eqArrays');




const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== ' ') { //1. Checking for not including the space
      //2. Checking for the letter presence in the result Object
      if (!results[sentence[i]]) {
        results[sentence[i]] = [ i ];
      } else {
        //It means the character is already there as a key in the Result Object
        results[sentence[i]].push(i);
      }
    }
  }
  return results;
};

module.exports = letterPositions;

console.log(letterPositions("lighthouse in the house"));


// console.log(assertArraysEqual(letterPositions("hello").e, [1]));
// console.log(assertArraysEqual(letterPositions("lighthouse in the house").i, [1, 0]));
