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

const eqObjects = (obj1, obj2) => {
  if (obj1 === null || obj2 === null) {
    return false;
  } else if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }

  for (const key in obj1) {
    if (Array.isArray(obj1[key]) && (Array.isArray(obj2[key]))) {
      return eqArrays(obj1[key], obj2[key]);
    } else if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
}
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };

const assertObjectsEqual = (obj1, obj2) => {
  const inspect = require('util').inspect;
  eqObjects(obj1, obj2) === false ? console.log(`😡😡😡 Assertion Failed ${inspect(obj1)} !== ${inspect(obj2)}`) : console.log(`😁😁😁 Assertion Passed ${inspect(obj1)} === ${inspect(obj2)}`)
}

console.log(assertObjectsEqual({a: '1', b: 2}, {b: 2, a: '1'}));
console.log(assertObjectsEqual(multiColorShirtObject, anotherMultiColorShirtObject));