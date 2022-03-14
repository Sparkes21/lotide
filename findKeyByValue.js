const assertEqual = require('./assertEqual');

const findKeyByValue = function(object, value) {
  const results = Object.keys(object)
  for (const key of results) {
    if (object[key] === value) {
      return key;
    }
  }
};

module.exports = findKeyByValue;

//TEST CODE
// const bestTVShowsByGenre = { 
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };

// console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");







// Test assertions
// const bestTVShowsByGenre = { 
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual (findKeyByValue(bestTVShowsByGenre, "The Office"), "comedy");
assertEqual (findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
