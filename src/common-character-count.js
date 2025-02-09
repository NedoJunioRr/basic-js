const {NotImplementedError} = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
    // throw new NotImplementedError('Not implemented');
    let s2Arr = s2.split('')
    let count = 0;
    for (let i = 0; i < s1.length; i++) {
        if(s2Arr.includes(s1[i])){
            count++
            let index = s2Arr.findIndex(el=>el===s1[i])
            s2Arr.splice(index,1)
        }
    }
    return count
}

module.exports = {
    getCommonCharacterCount
};
