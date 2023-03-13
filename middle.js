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

module.exports = middle;