const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (!Array.isArray(members)){return false}
  let newArr = [];
  const regex = new RegExp(/[A-Za-z]/);
  for (let i=0; i<members.length; i++){
    if (typeof members[i]==='string'){
      newArr.push(regex.exec(members[i].toUpperCase()))
    }
  };
  return newArr.sort().join('').toUpperCase();
}

module.exports = {
  createDreamTeam
};
