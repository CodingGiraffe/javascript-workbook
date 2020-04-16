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

function movePiece(startStack, endStack) { //need to pop it from one and push it to another  

let movingPiece = stacks[startStack].pop(stacks[startStack].length -1);
stacks[endStack].push(movingPiece);
}

function isLegal(startStack, endStack) {
  
  //set inputs
  let fromStack = stacks[startStack]
  let toStack = stacks[endStack]

  //get last number from stack
  let lastNumberFromStack = fromStack[fromStack.length-1]
  let lastNumberToStack = toStack[toStack.length-1]

  //compare last/top number from start stack to last/top number on end stack
  if (fromStack.length > 0 && (lastNumberFromStack < lastNumberToStack || lastNumberFromStack == undefined)) {
    movePiece(startStack,endStack);
    return true
  } else {
    return false
  }
}

function checkForWin() {
  if(stacks.b.length == 4 || stacks.c == 4) {
    return true
  } else {
    return false
  }
}
 
                      //move from    //move to       
function towersOfHanoi(startStack, endStack) {
  isLegal(startStack, endStack);
  checkForWin();
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
