const capitalize = require('./capitalize');

test('capitalize only the first letter of a string', () => {
  expect(capitalize('heLLo WORlD')).toBe('Hello world');
});