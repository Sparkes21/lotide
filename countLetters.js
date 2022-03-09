const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`😬😬😬 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  const output = {};
  for (const letters of string) {
   if (letters !== ' ') { 
     if(output[letters]) {
      output[letters] += 1;
     } else {
       output[letters] = 1;
     }
   }
  } 
  return output;
}
countLetters("lighthouse");
console.log(countLetters("lighthouse"));
console.log(countLetters("josh wrote this code"));


