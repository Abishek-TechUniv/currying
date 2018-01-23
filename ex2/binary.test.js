const binary = require('./binary');

test('should return sum of two numbers', () => {
  expect(binary(1, 5)).toBe(6);
});

test('should return concatenation of two strings', () => {
  expect(binary('a', 'b')).toBe('ab');
});

