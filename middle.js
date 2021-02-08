const middle = (arr) => {
  let output = [];
  if (arr.length <= 2) {
    return output;
  }

  if (arr.length % 2 !== 0) { // odd
    const midpoint = Math.floor(arr.length / 2);
    output.push(arr[midpoint]);
  } else if (arr.length % 2 === 0) { // even
    const midpoint = arr.length / 2;
    output.push(arr[midpoint - 1]);
    output.push(arr[midpoint]);
  }
  return output;
};

module.exports = middle;