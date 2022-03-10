
// const assertArraysEqual = function(array1, array2) {
//   const result = eqArrays(array1, array2);
//   if (!result) {
//     console.log( '😬😬😬 Assertion Failed: these arrays are not equal')
//   }
//   else {
//     console.log('✅✅✅ Assertion Passed: these arrays are equal')
//   }
// };


// const eqArrays = function(array1, array2) {
//   if (array1.length !== array2.length) {
//     return false
//   } 
//   for (let i = 0; i < array1.length; i++) {
//     if (array1[i] !== array2[i]) {
//       return false;
//     }
//   } 
//   return true;
// };




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
console.log(letterPositions("lighthouse in the house"));


// console.log(assertArraysEqual(letterPositions("hello").e, [1]));
// console.log(assertArraysEqual(letterPositions("lighthouse in the house").i, [1, 0]));
