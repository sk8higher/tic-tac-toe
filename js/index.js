import { Gameboard } from './classes/gameboard.js';
import { Player } from './classes/player.js';
import { App } from './classes/app.js';

const cells = document.querySelectorAll('.canvas-part');
const cellContainer = document.querySelector('.canvas');

const currentPlayer = document.querySelector('.header-player-turn');

const gameboard = new Gameboard(cells);

cellContainer.addEventListener('click', function (e) {
  gameboard.setCellMarker(e.target.dataset.cellNumber, 'x');
  gameboard.changeCellMarker(cells);
});

console.log(gameboard);
