const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual(middle([22,33,44,55]), [33,44]);
assertArraysEqual(middle([22,33,44,55]), [33,55]);
assertArraysEqual(middle([22,33,44]), [33]);
assertArraysEqual(middle([22,33]), []);