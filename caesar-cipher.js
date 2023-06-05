function caesarCipher(input, change) {
  const factor = change;
  const string = input;
  const regExLower = /[a-z]/;
  const regExUpper = /[A-Z]/;
  let encrypted = '';

  for (let i = 0; i < string.length; i += 1) {
    if (regExLower.test(string.charAt(i))) {
      encrypted += String.fromCharCode((string.charCodeAt(i) - 97 + factor)%26 + 97);
    } else if (regExUpper.test(string.charAt(i))) {
      encrypted += String.fromCharCode((string.charCodeAt(i) - 65 + factor)%26 + 65);
    } else {
      encrypted += string.charAt(i);
    }
  }
  return encrypted;
}

module.exports = caesarCipher;