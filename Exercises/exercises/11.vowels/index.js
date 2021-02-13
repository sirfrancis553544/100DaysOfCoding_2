// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0
//! solution 1
// let str = "daniel";
// function vowels(str) {
//   let count = 0;
//   const checker = ['a', 'e', 'i', 'o', 'u'];
//   for (let char of str.toLowerCase()) {
//     if (checker.includes(char)) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(vowels(str))

//! solution 2
let str = "daniel";
function vowels(str) {
  // g searches for all
  //i case insensitive 
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}
console.log(vowels(str))

module.exports = vowels;
