const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`😬😬😬 Assertion Failed: ${actual} !== ${expected}`);
  }
};



// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  // return array of objects properties and their values
  const keyObj1 = Object.keys(object1);
  const keyObj2 = Object.keys(object2);
// compare lengths to see if they are going to match
  if (keyObj1.length !== keyObj2.length) {
    return false;
  } 
    // loop through keys returned by Object.keys and compare the value of both objects for that key
    for (const key of keyObj1) {
      let v1 = object1[key]
      let v2 = object2[key]
      console.log(key, "keys")
      console.log("some string", object1[key])
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
}


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false

assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, abc), false);