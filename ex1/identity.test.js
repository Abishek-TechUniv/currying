const identity = require('./identity');

test('should return agrument when passed 1 argument', () => {
  expect(identity('str')).toBe('str');
});

test('should return undefined when nothing is passed', () => {
  expect(identity()).toBe(undefined);
});


test('should return first argument when two args are passed', () => {
  expect(identity(1, 2)).toBe(1);
});
