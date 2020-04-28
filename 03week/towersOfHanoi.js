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
  
//need to pop it from one and push it to another  

//this takes the last/top piece off of the called stack
let playingPiece = stacks[startStack].pop();

//this adds the piece to the "top" of the end stack
stacks[endStack].push(playingPiece);
}

function isLegal(startStack, endStack) {
  
  //set inputs

  //this is the last piece from the start stack
  let fromStack = [stacks[startStack].length-1]

  //this is the the stack the piece is moving to
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
  //if either stack b or stack c have four pieces then the game is over and user has won
  if(stacks.b.length == 4 || stacks.c == 4) {
    console.log("You're a winner!!")
    return true
  } else {
    //the stack requirements have not been met and user must continue 
    console.log("Keep Trying")
    return false
  }
}
 
//this is how you play the game
function towersOfHanoi(startStack, endStack) {
  //this takes the users inputs and checks to see if they are legal
  isLegal(startStack, endStack);
  //this checks to see if the user has won the game
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
