const { caller, applier } = require('./call_and_apply');

test('caller should change the object', () => {
  const person = { name: 'Abishek', age: 20, tShirtSize: 'M' };
  const update = function update(name, age, tShirtSize) {
    this.name = name;
    this.age = age;
    this.tShirtSize = tShirtSize;
  };
  caller(person, update, 'changedName', 24, 'L');
  expect(person).toEqual({ name: 'changedName', age: 24, tShirtSize: 'L' });
});

test('applier should change the object', () => {
  const person = { name: 'Abishek', age: 20, tShirtSize: 'M' };
  const update = function update(name, age, tShirtSize) {
    this.name = name;
    this.age = age;
    this.tShirtSize = tShirtSize;
  };
  applier(person, update, ['changedName', 24, 'L']);
  expect(person).toEqual({ name: 'changedName', age: 24, tShirtSize: 'L' });
});
