#!/usr/bin/node
const SquareDef = require('./5-square');

class Square extends SquareDef {
  charPrint (c) {
    if (c === undefined) {
      console.log(('X'.repeat(this.width) + '\n').repeat(this.height - 1) + 'X'.repeat(this.width));
    } else {
      console.log((c.repeat(this.width) + '\n').repeat(this.height - 1) + c.repeat(this.width));
    }
  }
}
module.exports = Square;