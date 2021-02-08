
const tail = (arr) => {
  if (arr.length === 1 || arr.length === 0) {
    return undefined;
  }

  return [...arr].splice(1);
};

module.exports = tail;