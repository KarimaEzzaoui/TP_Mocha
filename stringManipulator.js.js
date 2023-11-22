// Function 1: Reverse String
function reverseString(str) {
  return str.split('').reverse().join('');
}
// Function 2: Capitalize Words
function capitalizeWords(str) {
  return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
// Function 3: Count Vowels
function countVowels(str) {
  const vowels = str.match(/[aeiou]/);
  return vowels ? vowels.length : 0;
}

module.exports = { reverseString, capitalizeWords, countVowels };
