const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');
const assert = require('chai').assert;

describe('#middle', () => {
  it('returns [33,44] when [22,33,44,55]', () => {
    assert.deepEqual(middle([22,33,44,55]), [33,44]);
  });

  it ('returns [33] when [22,33,44]', () => {
    assert.deepEqual(middle([22,33,44]), [33]);
  })

  it ('returns [] when [22,33]', () => {
    assert.deepEqual(middle([22,33]), []);
  })
})

