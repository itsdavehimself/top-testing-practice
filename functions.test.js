const capitalize = require('./capitalize');
const reverse = require('./reverse-string');
const calculator = require('./calculator');
const createCalculator = require('./calculator');

test('capitalize only the first letter of a string', () => {
  expect(capitalize('heLLo WORlD')).toBe('Hello world');
});

test('reverse a string', () => {
  expect(reverse('Hello world')).toBe('dlrow olleH');
});

test('take numbers and perform correct operation', () => {
  expect(createCalculator().add(2,1)).toBe(3);
  expect(createCalculator().subtract(7,4)).toBe(3);
  expect(createCalculator().multiply(3,6)).toBe(18);
  expect(createCalculator().divide(14,7)).toBe(2);
});