const capitalize = require('./capitalize');
const reverse = require('./reverse-string');
const createCalculator = require('./calculator');
const caesarCipher = require('./caesar-cipher');
const analyzeArr = require('./analyze-array');

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

test('encrypt a string using Caesar Cipher', () => {
  expect(caesarCipher('Hello world! This is an encrypted message', 13)).toBe('Uryyb jbeyq! Guvf vf na rapelcgrq zrffntr');
});

test('return object with correct properties & values', () => {
  expect(analyzeArr([32, 2, 15, 66, 13, 22, 1]).average).toBe(32.5);
  expect(analyzeArr([32, 2, 15, 66, 13, 22, 1]).min).toBe(1);
  expect(analyzeArr([32, 2, 15, 66, 13, 22, 1]).max).toBe(66);
  expect(analyzeArr([32, 2, 15, 66, 13, 22, 1]).length).toBe(7);
});