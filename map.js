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

const words = ["ground", "control", "to", "major", "tom"];

const map = (arr, func) => {
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    newArr.push(func(arr[i]));
  }
  return newArr;
}

const logWords = (word) => {
  return `${word} bazinga`
}

console.log(map(words, logWords));



console.log(eqArrays(map(words, logWords), ["ground bazinga", "control bazinga", "to bazinga", "major bazinga", "tom bazinga"]));

