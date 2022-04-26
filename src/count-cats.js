const CustomError = require("../extensions/custom-error");
module.exports = function countCats(matrix) {
    let result = 0;
    for ( let arrays of matrix ) {
        for ( let element of arrays) {
            if (element === "^^") {
                result = result + 1;
            }
        }
    }
    return result;
};
