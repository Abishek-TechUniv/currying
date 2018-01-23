const curry = require('./curry');

describe('When creating a function with 3 arguments', () => {
  const sumOfThree = (a, b, c) => a + b + c;
  const curriedSum = curry(sumOfThree);

  test('should return correct value when all three arguments passed at once', () => {
    expect(curriedSum(1, 2, 3)).toBe(6);
  });

  test('should return correct value when all three arguments passed one by one', () => {
    expect(curriedSum(1)(2)(3)).toBe(6);
  });

  test('should return correct value when two arguments passed at once and then the third', () => {
    expect(curriedSum(1, 2)(3)).toBe(6);
  });

  test('should return correct value when 1 argument passed then two passed at once', () => {
    expect(curriedSum(1)(2, 3)).toBe(6);
  });
});

