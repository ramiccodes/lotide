const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`😁😁😁 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😡😡😡 Assertion Failed: ${actual} !== ${expected}`);
  }
}

const countOnly = (arr, obj) => {
  const newObj = {}
  for (const key in obj) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === key && obj[key] === true) {
        if (!newObj[key]) {
          newObj[key] = 1
        } else {
          newObj[key] += 1;
        }
      }
    }
  }
  return newObj; 
} 

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

console.log(result1);

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);

