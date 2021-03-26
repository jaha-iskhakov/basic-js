const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(direction) {
    this.isReverse = direction === false;
    this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  encrypt(str, key) {
    str = str.toUpperCase();
    key = key.toUpperCase();
    let res = "";
    let keyInd = 0;
    for (let i = 0; i < str.length; i++) {
      const letter = str[i];
      if (!letter.match("[A-Z]")) {
        res += letter;
        continue;
      }

      if (keyInd > key.length - 1) {
        keyInd = 0;
      }

      const cipherLetter = key[keyInd];
      const cipherInd = this.alphabet.indexOf(cipherLetter);
      const cipherString = this.alphabet.slice(cipherInd) + this.alphabet.slice(0, cipherInd);

      const letterOriginInd = this.alphabet.indexOf(letter);
      const encryptedLetter = cipherString[letterOriginInd];

      res += encryptedLetter;

      keyInd++;
    }

    return this.isReverse ? res.split('').reverse().join('') : res;
  }

  decrypt(str, key) {
    str = str.toUpperCase();
    key = key.toUpperCase();
    let res = "";
    let keyInd = 0;
    for (let i = 0; i < str.length; i++) {
      const letter = str[i];
      if (!letter.match("[A-Z]")) {
        res += letter;
        continue;
      }

      if (keyInd > key.length - 1) {
        keyInd = 0;
      }

      const cipherLetter = key[keyInd];
      const cipherInd = this.alphabet.indexOf(cipherLetter);
      const cipherString = this.alphabet.slice(cipherInd) + this.alphabet.slice(0, cipherInd);

      const letterOriginInd = cipherString.indexOf(letter);
      const decryptedLetter = this.alphabet[letterOriginInd];

      res += decryptedLetter;

      keyInd++;
    }

    return this.isReverse ? res.split('').reverse().join('') : res;
  }
}

module.exports = VigenereCipheringMachine;