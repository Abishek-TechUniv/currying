let value = 0;
const longDelay = (x) => {
  if (x === undefined) {
    const answer = value;
    value = null;
    return answer;
  }
  value += x;
  return longDelay;
};

module.exports = longDelay;

