'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

function movePiece(startStack, endStack) { 

  //check to see if inputs are not null / undefined
  if(!startStack || !endStack) {
    return false
  }

  startStack = startStack.trim().toLowerCase()
  endStack = endStack.trim().toLowerCase()
  
  let startArray = stacks[startStack]
  let endArray = stacks[endstack]

  if(!startArray) {
    return false
  }

  if(!endArray) {
    return false
  }

  if(startArray.length === 0) {
    return false
  }

  if(endArray.length === 0) {
    return true
  }

  //get the last element from start stack and end stack
  //check to see if last element in start stack is greater than end stack

  let lastStart = startArray[startArray.length-1]
  let lastEnd = endArray[endArray.length-1]

  if (lastStart < lastEnd) {
    return true
  }

  return false

}

function isLegal(startStack, endStack) {
  
  //set inputs
  let fromStack = [stacks[startStack].length-1]
  let toStack = stacks[endStack]

  //compare last/top number from start stack to last/top number on end stack
  if (fromStack > 0 && toStack.length == 0) {
    movePiece(startStack, endStack)
    console.log("Legal Move!")
    return true
  } else {
    console.log("Illegal Move!")
    return false
  }
}

function checkForWin() {
  if(stacks.b.length == 4 || stacks.c == 4) {
    console.log("You're a winner!!")
    return true
  } else {
    console.log("Keep Trying")
    return false
  }
}
 

function towersOfHanoi(startStack, endStack) {
  isLegal(startStack, endStack);
  checkForWin()
}

function getPrompt() {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}
// Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });

} else {

  getPrompt();

}
