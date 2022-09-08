const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */

function getSeason(date) {

  try {
    if(!arguments.length){
      return 'Unable to determine the time of year!'
    }
    if (
        date instanceof Date === false ||
        Object.getOwnPropertyDescriptor(date, 'toString')
    ) {
      throw new Error('Invalid date!');
    }


    if (date.getMonth() == '1' || date.getMonth() == '11' || date.getMonth() == '0') {
      return 'winter'
    }
    if (date.getMonth() == '3' || date.getMonth() == '2' || date.getMonth() == '4') {
      return 'spring'
    }
    if (date.getMonth() == '5' || date.getMonth() == '6' || date.getMonth() == '7') {
      return 'summer'
    }
    if (date.getMonth() == '9' || date.getMonth() == '10' || date.getMonth() == '8') {
      return 'autumn'
    }

  }
  catch (e) {
    throw new Error('Invalid date!')
  }

}


module.exports = {
  getSeason
};
