const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
let res = 0;
let next = 0;
class DepthCalculator {

    calculateDepth(arr) {
        let cols = 1

        for (let el of arr){
            if (Array.isArray(el)) {
                cols = Math.max(cols, this.calculateDepth(el)+1);
            }
        }

        return cols
    }
}

module.exports = {
  DepthCalculator
};
