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
 * gameState = 0, if game hasn't ended;
 * gameState = 1, if X wins
 * gameState = -1, if O wins
 */
let _gameState = 0;
let _currentPlayer = playerX;

// function _init(board) {
//   _gameState = 0;
//   _currentPlayer = 'X';
//   board.forEach((el) => (el.textContent = ''));
// }

// Checking game state
function checkForWin() {
  const cellMarkers = Array.from(cells).map((el) => el.textContent);

  console.log(cellMarkers);
}

function operateCells(e) {
  // Adding current player marker on canvas

  // Guard clause to add markers only on empty cells
  if (cells.item(+e.target.dataset.cellNumber).textContent) return;

  gameboard.setCellMarker(e.target.dataset.cellNumber, _currentPlayer._mark);
  gameboard.changeCellMarker(cells);
  e.target.removeEventListener('click', this);

  checkForWin();

  // Changing current player
  _currentPlayer = _currentPlayer._playerNumber === 0 ? playerO : playerX;

  console.log(_currentPlayer);
  // Changing header player text
  currentPlayerText.innerHTML = `It's ${_currentPlayer._mark} player turn`;
}

cellContainer.addEventListener('click', operateCells);

console.log(gameboard);
