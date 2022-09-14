const {NotImplementedError} = require('../extensions/index.js');

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

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

class VigenereCipheringMachine {
    encrypt(){
        throw new NotImplementedError('Not implemented');
    }
    decrypt(){
        throw new NotImplementedError('Not implemented');
    }
    // constructor(param) {
    //     this.param = param
    // }
    //
    // searchChar(charString, charKey) {
    //     const stringIndex = alphabet.indexOf(charString)
    //     const keyIndex = alphabet.indexOf(charKey)
    //     const indexChar = stringIndex + keyIndex >= alphabet.length ? stringIndex + keyIndex - alphabet.length : keyIndex + stringIndex
    //     return alphabet.substr(indexChar, 1)
    // }
    //
    // searchCharDecrypt(charString, charKey) {
    //     const stringIndex = alphabet.indexOf(charString)
    //     const keyIndex = alphabet.indexOf(charKey)
    //     const indexChar = stringIndex >= keyIndex ? stringIndex - keyIndex : alphabet.length - (keyIndex - stringIndex)
    //     return alphabet.substr(indexChar, 1)
    // }
    //
    // encrypt(string, key) {
    //     this.validate(string,key)
    //     // throw new NotImplementedError('Not implemented');
    //     const stringUpper = string.toUpperCase()
    //     const keyToUpper = key.toUpperCase()
    //     let word = ''
    //     let keyStr = ''
    //     for (let i = 0, j = 0; i < stringUpper.length; i++) {
    //         console.log(stringUpper[i])
    //         if (alphabet.includes(stringUpper[i])) {
    //             keyStr += keyToUpper[j]
    //             j++
    //         }
    //         if (stringUpper[i] == ' ') {
    //             keyStr += ' '
    //         }
    //         if (j === keyToUpper.length) {
    //             j = 0
    //         }
    //
    //     }
    //     for (let i = 0; i < string.length; i++) {
    //         if (!alphabet.includes(stringUpper[i])) {
    //             word += string[i]
    //         } else {
    //             word += this.searchChar(stringUpper[i], keyStr[i])
    //         }
    //     }
    //     return this.param ? word.split('').reverse().join('') : word
    // }
    //
    // decrypt(string, key) {
    //     this.validate(string,key)
    //     const stringUpper = string.toUpperCase()
    //     const keyToUpper = key.toUpperCase()
    //     let word = ''
    //     let keyStr = ''
    //     for (let i = 0, j = 0; i < stringUpper.length; i++) {
    //
    //         if (alphabet.includes(stringUpper[i])) {
    //             keyStr += keyToUpper[j]
    //             j++
    //
    //         }
    //         if (stringUpper[i] == ' ') {
    //             keyStr += ' '
    //         }
    //         if (j === keyToUpper.length) {
    //             j = 0
    //         }
    //
    //     }
    //     for (let i = 0; i < string.length; i++) {
    //         if (!alphabet.includes(stringUpper[i])) {
    //             word += string[i]
    //         } else {
    //             word += this.searchCharDecrypt(stringUpper[i], keyStr[i])
    //         }
    //     }
    //     return word
    // }
    // validate(str,key){
    //     if(!str||!key){
    //         throw new Error("Incorrect arguments!")
    //     }
    //     return
    // }
}


module.exports = {
    VigenereCipheringMachine
};


// function encrypt(string, key) {
//     const stringUpper = string.toUpperCase()
//     const keyToUpper = key.toUpperCase()
//     let keyStr = ''
//     for (let i = 0, j = 0; i < stringUpper.length; i++) {
//         console.log(stringUpper[i])
//         if (alphabet.includes(stringUpper[i])) {
//             keyStr += keyToUpper[j]
//             j++
//         }
//         if(stringUpper[i]==' '){
//             keyStr += ' '
//         }
//         if (j === keyToUpper.length) {
//             j = 0
//         }
//
//     }
//     let word = ''
//     for (let i = 0; i < string.length; i++) {
//         if (!alphabet.includes(stringUpper[i])) {
//             word += stringUpper[i]
//         }
//
//         word += searchChar(stringUpper[i], keyStr[i])
//
//     }
//     console.log(keyStr)
//
//     return word
//
// }
//
// function searchChar(charString, charKey) {
//     const stringIndex = alphabet.indexOf(charString)
//     const keyIndex = alphabet.indexOf(charKey)
//     const indexChar = stringIndex + keyIndex > alphabet.length ? stringIndex + keyIndex - alphabet.length : keyIndex + stringIndex
//     return alphabet.substr(indexChar, 1)
// }