'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

let playerTurn = 'X';

function printBoard() {
  console.log('   0  1  2');
  console.log('0 ' + board[0].join(' | '));
  console.log('  ---------');
  console.log('1 ' + board[1].join(' | '));
  console.log('  ---------');
  console.log('2 ' + board[2].join(' | '));
}
//should return true if player won on any row
function horizontalWin() {
for(let i = 0; i < board.length; i++) {
  if(board[i][0] != "" && board[i][0] == board[i][1] && board[i][1] == board[i][2]) {
    return true;
  }
}
}
//should return true if player won on any column
function verticalWin() {
  for(let j = 0; j < board.length; j++) {
    if(board[0][j] != "" && board[0][j] == board[1][j] && board[1][j] == board[2][j]) {
      return true;
    }
}
}
//should return true if player won on any diagonal
function diagonalWin() {
  if(board[0][0] != "" && board[0][0] == board[1][1] && board[1][1] == board[2][2]) {
      return true;
  }
  if(board[0][2] != "" && board[0][2] == board[1][1] && board[1][1] == board[2][0]) {
      return true;
  }
}
//return true if they won
//if any of top three functions return true, this should return true
function checkForWin() {
  //checking rows
  for(var i = 0; i < board.length; i++) {
    if(board[i][0] != "" && board[i][0] == board[i][1] && board[i][1] == board[i][2]) {
      return true;
    }      
  }
  //checking columns
  for(var j = 0; j < board.length; j++) {
    if(board[0][j] != "" && board[0][j] == board[1][j] && board[1][j] == board[2][j]) {
      return true;
    }
  }
  //checking across
  if(board[0][0] != "" && board[0][0] == board[1][1] && board[1][1] == board[2][2]) {
      return true;
  }
  if(board[0][2] != "" && board[0][2] == board[1][1] && board[1][1] == board[2][0]) {
      return true;
  }
  //if reached here, no winners
  return false;
}


function ticTacToe(row, column) {
  board[row][column] = playerTurn
  if (playerTurn === 'X') {
    playerTurn = 'O' 
} else {
    playerTurn = 'X' 
};
}

function getPrompt() {
  printBoard();
  console.log("It's Player " + playerTurn + "'s turn.");
  rl.question('row: ', (row) => {
    rl.question('column: ', (column) => {
      ticTacToe(row, column);
      getPrompt();
    });
  });

}



// Tests

if (typeof describe === 'function') {

  describe('#ticTacToe()', () => {
    it('should place mark on the board', () => {
      ticTacToe(1, 1);
      assert.deepEqual(board, [ [' ', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should alternate between players', () => {
      ticTacToe(0, 0);
      assert.deepEqual(board, [ ['O', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should check for vertical wins', () => {
      board = [ [' ', 'X', ' '], [' ', 'X', ' '], [' ', 'X', ' '] ];
      assert.equal(verticalWin(), true);
    });
    it('should check for horizontal wins', () => {
      board = [ ['X', 'X', 'X'], [' ', ' ', ' '], [' ', ' ', ' '] ];
      assert.equal(horizontalWin(), true);
    });
    it('should check for diagonal wins', () => {
      board = [ ['X', ' ', ' '], [' ', 'X', ' '], [' ', ' ', 'X'] ];
      assert.equal(diagonalWin(), true);
    });
    it('should detect a win', () => {
      assert.equal(checkForWin(), true);
    });
  });
} else {

  getPrompt();
}
