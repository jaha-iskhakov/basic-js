const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
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

module.exports = {
  VigenereCipheringMachine
};
