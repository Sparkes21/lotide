const assertEqual = require('./assertEqual');

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
};

module.exports = countLetters;
// TEST CODE
// countLetters("lighthouse");
// console.log(countLetters("lighthouse"));
// console.log(countLetters("josh wrote this code"));


