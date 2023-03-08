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

eqArrays([1,2,3],[1,2,3]);
eqArrays([1,2,3],[1,2,"3"]);

assertArraysEqual([1,2,3],[3,2,1]);

