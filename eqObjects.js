const assertEqual = require('./assertEqual');



const eqObjects = function(object1, object2) {
  const keyObj1 = Object.keys(object1);
  const keyObj2 = Object.keys(object2);
  if (keyObj1.length !== keyObj2.length) {
    return false;
  } 
    for (const key of keyObj1) {
      let v1 = object1[key]
      let v2 = object2[key]
      if (Array.isArray(v1) && Array.isArray(v2)) {
        if (!eqArrays(v1, v2)) {
          return false;
        }
      } else {
        if (v1 !== v2) {
          return false;
        }
      }
    } 
  return true;
};

module.exports = eqObjects;

// Test code
// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// eqObjects(ab, ba); // => true

// const abc = { a: "1", b: "2", c: "3" };
// eqObjects(ab, abc); // => false


// assertEqual(eqObjects(ab, ba), true);
// assertEqual(eqObjects(ab, abc), false);