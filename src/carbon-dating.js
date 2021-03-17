const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (  typeof sampleActivity !== 'string' || arguments.length == 0 || sampleActivity > 15 || sampleActivity <= 0 || isNaN (sampleActivity) ) {
    return false;
  }

  let k = 0.693 / HALF_LIFE_PERIOD;
  let t = Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / k);
  return t;
};
