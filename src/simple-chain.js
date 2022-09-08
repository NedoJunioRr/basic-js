const {NotImplementedError} = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
    arr:[],
    getLength() {
        // throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
        return this.arr.length
    },
    addLink(value) {
        // if(value==function () { }){
        //     arr.push(`(${value})`)
        // }
        if (value === null) this.arr.push("( null )");
        // if (!arguments.length) {
        //     this.arr.push('( )')
        // }
        else{this.arr.push(`( ${value} )`)}
        return this
        // throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
    },
    removeLink(position) {
        if (!Number.isInteger(position) || position-1 < 0 || this.arr.length <= position - 1){
            this.arr = [];
            throw new Error ('You can\'t remove incorrect link!')
        }
        this.arr.splice(position - 1, 1)
        return this
        // throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
    },
    reverseChain() {
        this.arr.reverse()
        return this
    },
    finishChain() {
        try {
            return this.arr.join('~~')
        }
        finally {
            this.arr=[]
        }
    },
};

module.exports = {
    chainMaker
};

