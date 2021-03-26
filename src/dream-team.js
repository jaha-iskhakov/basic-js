const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
if (!Array.isArray(members)){return false}
let newArr = [];
const regex = new RegExp(/[A-Za-z]/);
for (let i=0; i<members.length; i++){
  if (typeof members[i]==='string'){
    newArr.push(regex.exec(members[i].toUpperCase()))
  }
};
return newArr.sort().join('').toUpperCase();
};

