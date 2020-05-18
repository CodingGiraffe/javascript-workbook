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
//this will change the state of the board
//need to pop it from one and push it to another 
function movePiece(startStack, endStack) { 


//this takes the last/top piece off of the called stack
let element = stacks[startStack].pop()

//this adds the piece to the "top" of the end stack
stacks[endStack].push(element)
}

//will check to see if a move is legal and will return if a move is legal
//startStack the stack name to move the peice from
//endStack the stack name to move the peice to
function isLegal(startStack, endStack) {
    //check to see if inputs are not null / undefined
    if(!startStack || !endStack) {
      return false
    }
  
    startStack = startStack.trim().toLowerCase()
    endStack = endStack.trim().toLowerCase()
    
    let startArray = stacks[startStack]
    let endArray = stacks[endStack]
  
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

//check to see if board is in a winning state and if so return true
function checkForWin() {
 //we are making a string of all elements in b to see if they are the winning combo

 if(stacks.b.join('') === '4321') {
   return true
 }

 //same for c
 if(stacks.c.join('') === '4321') {
  return true
}
  return false
}
//this is how you play the game
//should check if the user input is valid
//puts all the pieces together 
function towersOfHanoi(startStack, endStack) {
  startStack = startStack.trim().toLowerCase()
  endStack = endStack.trim().toLowerCase()
    
  let startArray = stacks[startStack]
  let endArray = stacks[endStack]

  if(!startArray || !endArray) {
    return
  }

  //check if the move is legal
  //if it is, make the move
  //otherwise let them know it was a bad move

  if(isLegal(startStack, endStack)) {
    movePiece(startStack, endStack)
  } else {
    console.log("The move you entered is not legal")
  }

  if(checkForWin()) {
    console.log("You won!")
  }
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
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('X', 'b'), false);
    });
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('A', 'b'), false);
    });
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 1],
        b: [3, 2],
        c: []
      };
      assert.equal(isLegal('a', 'b'), true);
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

