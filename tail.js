const assertEqual = require('./assertEqual');

const tail = (arr) => {
  if (arr.length === 1 || arr.length === 0) {
    return "";
  }
  let end = arr.slice(-1);
  return end[0];
}

module.exports = tail;