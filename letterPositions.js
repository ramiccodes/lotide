const eqArrays = (arr1, arr2) => {
  if (arr1 == null || arr2 == null) {
    return false;
  } else if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; ++i) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

const assertArraysEqual = (arr1, arr2) => {
  eqArrays(arr1, arr2) === false ? console.log(`😡😡😡 Assertion Failed ${arr1} !== ${arr2}`) : console.log(`😁😁😁 Assertion Passed ${arr1} === ${arr2}`)
}

const letterPositions = (string) => {
  const results = {};
  
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== " ") {
      results[string[i]] ? results[string[i]].push(i) : results[string[i]] = [i];
    }
  }
  return results
};

console.log(letterPositions('lighthouse in the house'));

module.exports = letterPositions;