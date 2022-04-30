const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  arr: [],
  getLength() {
    return this.arr.length;
  },

  addLink(value) {
    this.arr.push(value === undefined ? '' : String(value));
    return this;
  },

  removeLink(position) {
        if (typeof position != 'number') {
      this.arr = [];
      throw new Error("You can't remove incorrect link!");
    }
    if (position >= this.arr.length || position <= 0) {
      this.arr = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.arr.splice(position - 1, 1);
    return this;
  },
    
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    let chain = this.arr.map(x => '( ' + x + ' )').join('~~');
    this.arr = [];
    return chain;
   },
};

module.exports = {
  chainMaker
};
