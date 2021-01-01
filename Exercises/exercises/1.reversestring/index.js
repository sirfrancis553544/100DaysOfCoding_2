// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//!Solution 1
function reverse(str) {
  return str.split("").reverse().join("");
}

//!solution 2
function reverse(str) {
  let reversed = "";
  for (let i of str) {
    reversed = i + reversed;
  }
  return reversed;
}

//!solution 3
function reverse(str) {
  return str.split("").reduce((rev, char) => char + rev, "");
}

module.exports = reverse;
