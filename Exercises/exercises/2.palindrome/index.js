// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  const reversed = str.split("").reverse().join("");
  return str === reversed;
}

//!solution 2
function palindrome(str) {
  return str.split("").every((char, i) => {
    // -1 is to get the element on the opposite end of the array
    return char === str[str.length - i - 1];
  });
}

module.exports = palindrome;
