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

const middle = (arr) => {
  let newArr = [];
  if (arr.length < 3) {
    return newArr;
  }
  if (arr.length % 2 !== 0) {
    newArr.push(arr[Math.floor(arr.length - 1) / 2])
  }
  if (arr.length % 2 === 0) {
    newArr.push(arr[Math.floor((arr.length - 1) / 2)]);
    newArr.push(arr[Math.floor(arr.length / 2)]);
  }
  return newArr;
}

console.log(middle([22,33,44,55]));