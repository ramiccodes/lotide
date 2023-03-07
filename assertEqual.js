const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`😁😁😁 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😡😡😡 Assertion Failed: ${actual} !== ${expected}`);
  }
}

assertEqual("Bootcamp", "Bootcamp");
assertEqual("Hello", "World")
assertEqual(1, 1);
assertEqual(4, 1);