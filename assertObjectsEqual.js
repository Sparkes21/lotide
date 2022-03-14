const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (actual !== expected) {
    console.log( `😬😬😬 Assertion Failed: ${inspect(ab)} !== ${inspect(ba)}`)
  } else {
    console.log(`✅✅✅ Assertion Passed: ${inspect(ab)} === ${inspect(ba)}`)
  }
};

module.exports = assertObjectsEqual;

// TEST  CODE
// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };

// eqObjects(ab,ba); // => true
// const result = eqObjects(ab,ba)

// assertObjectsEqual(result, true)

