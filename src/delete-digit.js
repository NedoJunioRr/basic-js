const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit( n ) {
  // throw new NotImplementedError('Not implemented');
  const arr = []

  for(let i = 0; i < String(n).length; i++){
    const maxNum = String(n).split('');
    maxNum.splice(i,1);
    arr.push(maxNum.join(''))
  }


  return Math.max(...arr.flat())
}


module.exports = {
  deleteDigit
};
