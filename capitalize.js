function capitalize(string) {
  const lowerString = string.toLowerCase();
  const firstLetterUpper = lowerString.charAt(0).toUpperCase();
  const newString = firstLetterUpper + lowerString.slice(1);
  return newString;
}

module.exports = capitalize;