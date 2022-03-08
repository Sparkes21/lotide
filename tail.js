const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`😬😬😬 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(array) {
  return array.slice(1);
};
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]);
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");

const words = ["Yo, Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);

const one = [5];
let newArray2 = tail(one);
assertEqual(newArray2.length, 0);

const nothing = [];
let newArray3 = tail(nothing);
assertEqual(newArray3.length, 0);
