const delay = require('./delay');

test('add1 should return a function with 1 arg and adds 1 to it', () => {
  const add1 = delay(1);
  expect(add1(2)).toBe(3);
});

test('add1 should return a function with 1 arg and adds 1 to it', () => {
  const addA = delay('a');
  expect(addA('b')).toBe('ab');
});
