const longDelay = require('./long_delay');

test('should be able to run once to return 0', () => {
  const once = longDelay();
  expect(once).toBe(0);
});

test('shoulbe be able to run three times with args to return summation', () => {
  const once = longDelay(4);
  const twice = once(3);
  const thrice = twice(2);
  expect(thrice()).toBe(9);
});

test('should be able to run once with argument to return 1', () => {
  const once = longDelay(1);
  expect(once()).toBe(1);
});
