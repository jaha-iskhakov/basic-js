const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let result = 1;
    for (let i of arr){
      let depth = 1;
      if (Array.isArray(i)){
        depth = depth + this.calculateDepth(i);
        if (depth > result) {
          result = depth;
        }        
      }
    }
    return result;
  }
};