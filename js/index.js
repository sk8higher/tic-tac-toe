import { Gameboard } from './classes/gameboard.js';
import { Player } from './classes/player.js';

// Game canvas elements
const cells = document.querySelectorAll('.canvas-part');
const cellContainer = document.querySelector('.canvas');

// Restart game
const restartButton = document.querySelector('.restart-btn');

// Current player header text
const currentPlayerText = document.querySelector('.header-player-turn');

// Gameboard object
const gameboard = new Gameboard(cells);

// Player objects
const playerX = new Player('X', 0);
const playerO = new Player('O', 1);

/*
 * isWon = false, if game is not completed
 * isWon = true, if game is completed
 */
let _isWon = false;
let _currentPlayer = playerX;

function _init() {
  // Restoring defaults
  _isWon = false;
  _currentPlayer = playerX;
  cells.forEach((el) => (el.textContent = ''));

  currentPlayerText.innerHTML = "It's X player turn";
  gameboard.clearBoard();

  // Attaching event listener back to canvas
  cellContainer.addEventListener('click', operateCells);
}

function markArrayFromCells(cellsArr) {
  return Array.from(cellsArr).map((el) => el.textContent);
}

function disableCanvas(e) {
  e.target.closest('.canvas').removeEventListener('click', operateCells);
}

// Checking game state
function checkForWin() {
  const cellMarkers = markArrayFromCells(cells);

  return (
    gameboard.checkForLines(cellMarkers) ||
    gameboard.checkForRows(cellMarkers) ||
    gameboard.checkForDiagonals(cellMarkers)
  );
}

function operateCells(e) {
  // Guard clause to add markers only on empty cells
  if (cells.item(+e.target.dataset.cellNumber).textContent) return;

  // Adding current player marker on canvas
  gameboard.setCellMarker(e.target.dataset.cellNumber, _currentPlayer._mark);
  gameboard.changeCellMarker(cells);

  // Removing listener on cell to prevent clicking
  e.target.removeEventListener('click', this);

  // Checking if game is a tie
  if (gameboard.checkForTie(markArrayFromCells(cells))) {
    currentPlayerText.innerHTML = "It's a tie!";
    disableCanvas(e);
    return;
  }

  // Checking if the game is won
  _isWon = checkForWin();

  if (_isWon) {
    // Changing header text
    currentPlayerText.innerHTML = `${_currentPlayer._mark} won!`;
    // Selecting canvas element and removing listener to prevent clicks
    // e.target.closest('.canvas').removeEventListener('click', operateCells);
    disableCanvas(e);
    return;
  }

  // Changing current player
  _currentPlayer = _currentPlayer._playerNumber === 0 ? playerO : playerX;

  // Changing header player text
  currentPlayerText.innerHTML = `It's ${_currentPlayer._mark} player turn`;
}

cellContainer.addEventListener('click', operateCells);
restartButton.addEventListener('click', _init);
