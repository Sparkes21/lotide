const assertEqual = require('./assertEqual');

const findKey = function(obj, callback) {
  for (const key in obj) {
    if (callback(obj[key])) {
      return key;
    }
  }
  return undefined;
};

module.exports = findKey;
// TEST CODE
// const movies = {
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// };
// const result1 = findKey(movies, (x) => x.stars === 2);
// console.log('result1', result1);
// const result2 = findKey(movies, (x) => x.stars === 3);
// console.log('result2', result2)

// assertEqual(result1, 'noma');
// assertEqual(result2, 'noma');