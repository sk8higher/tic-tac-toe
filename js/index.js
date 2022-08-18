import { Gameboard } from './classes/gameboard.js';
import { Player } from './classes/player.js';

// Game canvas elements
const cells = document.querySelectorAll('.canvas-part');
const cellContainer = document.querySelector('.canvas');

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

// function _init(board) {
//   _gameState = 0;
//   _currentPlayer = 'X';
//   board.forEach((el) => (el.textContent = ''));
// }

// Checking game state
function checkForWin() {
  const cellMarkers = Array.from(cells).map((el) => el.textContent);

  return (
    gameboard.checkForLines(cellMarkers) ||
    gameboard.checkForRows(cellMarkers) ||
    gameboard.checkForDiagonals(cellMarkers)
  );
}

function operateCells(e) {
  // Adding current player marker on canvas
  // Guard clause to add markers only on empty cells
  if (cells.item(+e.target.dataset.cellNumber).textContent) return;

  gameboard.setCellMarker(e.target.dataset.cellNumber, _currentPlayer._mark);
  gameboard.changeCellMarker(cells);
  e.target.removeEventListener('click', this);

  _isWon = checkForWin();
  console.log(_isWon);

  if (_isWon) {
    currentPlayerText.innerHTML = `${_currentPlayer.mark} won!`;
  }

  // Changing current player
  _currentPlayer = _currentPlayer._playerNumber === 0 ? playerO : playerX;

  console.log(_currentPlayer);
  // Changing header player text
  currentPlayerText.innerHTML = `It's ${_currentPlayer._mark} player turn`;
}

cellContainer.addEventListener('click', operateCells);

console.log(gameboard);
