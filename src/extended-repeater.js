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
function repeater( str, options) {
 // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  str = String(str);
  let addition = String(options.addition);
  if (options.addition === undefined) {addition = ''};
  let additionSeparator = String(options.additionSeparator);
  if (options.additionSeparator == undefined) {additionSeparator = '|'};
  let separator = options.separator;
  if (options.separator == undefined) {separator = '+'};
  let additionFullStr =  `${addition}${(additionSeparator + addition).repeat(options.additionRepeatTimes - 1)}`;
  let basicStr = `${str}${additionFullStr}`;
  return resultStr = `${basicStr}${(separator + basicStr).repeat(options.repeatTimes - 1)}`;
}

module.exports = {
  repeater
};
