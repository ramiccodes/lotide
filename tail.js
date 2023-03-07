const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`😁😁😁 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😡😡😡 Assertion Failed: ${actual} !== ${expected}`);
  }
}

const tail = (arr) => {
  if (arr.length === 1 || arr === '') {
    return [];
  }
  return arr.slice(-1);
}

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);

console.log(tail([]))