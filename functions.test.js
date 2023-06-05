const capitalize = require('./capitalize');
const reverse = require('./reverse-string')

test('capitalize only the first letter of a string', () => {
  expect(capitalize('heLLo WORlD')).toBe('Hello world');
});

test('reverse a string', () => {
  expect(reverse('Hello world')).toBe('dlrow olleH');
});
