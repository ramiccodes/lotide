const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`😁😁😁 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😡😡😡 Assertion Failed: ${actual} !== ${expected}`);
  }
}

// Input: string
// Output: Object with keys and values letter and how many time it appeared
const countLetters = (string) => {
  let count = {};

  for (const char of string) {
    if (char === ' ') {
      continue;
    }
    count[char] = count[char] ? (count[char] + 1) : 1;
  }
  return count
}


console.log(countLetters('lighthouse in the house'));

module.exports = countLetters;