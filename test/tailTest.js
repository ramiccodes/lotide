const tail = require('../tail');
const assert = require('chai').assert;

describe('#tail', () => {
  it('returns Labs for ["Yo Yo", "Lighthouse", "Labs"]', () => {
    assert.strictEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), 'Labs')
  });

  it('returns "" for ["Yo Yo"]', () => {
    assert.strictEqual(tail(["Yo Yo"]), '')
  });

  it('returns "" for []', () => {
    assert.strictEqual(tail([]), '')
  });
})