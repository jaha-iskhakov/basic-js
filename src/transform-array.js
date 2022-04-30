const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform( arr ) {
  const prevCommands = ['--discard-prev', '--double-prev'];
  const nextCommands = ['--discard-next', '--double-next'];

  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    if (prevCommands.includes(element) || nextCommands.includes(element)) {
      continue;
    }

    let prevElement = arr[i - 1];
    let nextElement = arr[i + 1];

    if (nextCommands.includes(prevElement)) {
      if (prevElement == '--discard-next') {
        continue;
      } else {
        result.push(element);
      }
    }

    result.push(element);

    if (prevCommands.includes(nextElement)) {
      if (nextElement == '--discard-prev') {
        result.pop();
      } else {
        result.push(element);
      }
    }
  }

  return result;
};

module.exports = {
  transform
};
