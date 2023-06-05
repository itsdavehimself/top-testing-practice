function reverseString(string) {
  const stringArr = string.split('');
  const reversedArr = stringArr.reverse();
  const reversedString = reversedArr.join('');
  return reversedString;
};

module.exports = reverseString;