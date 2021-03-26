const CustomError = require('../extensions/custom-error');

module.exports = function transform(arr) {
  const prevCommands = ['--discard-prev', '--double-prev'];
  const nextCommands = ['--discard-next', '--double-next'];

  if (!Array.isArray(arr)) {
    throw new Error();
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