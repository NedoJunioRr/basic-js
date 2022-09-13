const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */


function repeater(str, options) {

  const {
    repeatTimes,
    separator = undefined,
    addition = undefined,
    additionRepeatTimes = undefined,
    additionSeparator = undefined
  } = options
  if (separator == undefined && addition == undefined && additionRepeatTimes == undefined && additionSeparator == undefined) {
    return str.concat("+").repeat(repeatTimes).slice(0, -1)
  }
  if (addition == undefined && additionRepeatTimes == undefined && additionSeparator == undefined) {
    let stringa = str.split('')
    stringa.push(separator)
    return stringa.join('').repeat(repeatTimes).slice(0, -separator.length)
    // concat().repeat(repeatTimes).slice(0,-1)
  }

  if(Object.getPrototypeOf({str}) === Object.prototype && typeof addition=="object" && additionRepeatTimes==undefined && additionSeparator==undefined ) {
   return `${str}`.concat(`${addition}`).concat('+').repeat(repeatTimes).slice(0,-1)
  }
  if(separator==undefined && additionSeparator == undefined){
    let addSep = addition.concat('|').repeat(additionRepeatTimes).slice(0,-1)
    return str.concat(addSep,'+').repeat(repeatTimes).slice(0,-1)
  }

  if(additionSeparator==undefined){
    let addSep = addition.concat('|').repeat(additionRepeatTimes).slice(0,-1)
    return str.concat(addSep,separator).repeat(repeatTimes).slice(0,-separator.length)
  }
  if(separator==undefined){
    let addSep = addition.concat(additionSeparator).repeat(additionRepeatTimes).slice(0,-additionSeparator.length)
    return str.concat(addSep,'+').repeat(repeatTimes).slice(0,-1)
  }
  if(additionSeparator == undefined && typeof str !== "object"){
    const additionTime = addition.repeat(additionRepeatTimes)
    return str.concat(additionTime,separator).repeat(repeatTimes).slice(0,-separator.length)
  }
  if(additionRepeatTimes==undefined && repeatTimes==undefined){
    return str+addition
  }
  if(additionSeparator==undefined){
    let addSep = addition.concat('|').repeat(additionRepeatTimes).slice(0,-1)
    return str.concat(additionTime,separator).repeat(repeatTimes).slice(0,-separator.length)
  }

  if(separator==undefined && additionSeparator == undefined){
    addition.concat('|').repeat(additionRepeatTimes).slice(0,-1)
  }


  let addSep = addition===null?(String(addition).toString().concat(additionSeparator)).repeat(additionRepeatTimes).slice(0,-additionSeparator.length):(addition.toString().concat(additionSeparator)).repeat(additionRepeatTimes).slice(0,-additionSeparator.length)
  return str===null?String(str).toString().concat(addSep,separator).repeat(repeatTimes).slice(0,-separator.length):str.toString().concat(addSep,separator).repeat(repeatTimes).slice(0,-separator.length)
}

// '-222[object Map]&&[object Map]&&[object Map]||-222[object Map]&&[object Map]&&[object Map]||-222[object Map]&&[object Map]&&[object Map]||-222[object Map]&&[object Map]&&[object Map]');
module.exports = {
  repeater
};