document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var gridSize = 4;
var cellNumber = 0;
var board = {cells: []}
var mineArray = [];

// Build the game board
function buildBoard(gridSize) {
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      board.cells.push ({row: i, col: j, isMine: mineArray[cellNumber], hidden: true})
      cellNumber++;
    }
  }
}

function startGame () {
  buildBoard(gridSize);
  // Don't remove this function call: it makes the game work!
  for (let i = 0; i < board.cells.length; i++){
    board.cells [i].surroundingMines = countSurroundingMines (board.cells[i]);
  }
  lib.initBoard()
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {
  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  //   lib.displayMessage('You win!')
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell){
  var surrounding = lib.getSurroundingCells(cell.row, cell.col);
  let count = 0;
  for (let i = 0; i < surrounding.length; i++) {
    if (surrounding[i].isMine == true) {count++}
  }
  return count;
} 
// Function to reset the game

  //var cellNumber = 0;
