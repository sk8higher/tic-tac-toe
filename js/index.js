import { Gameboard } from './classes/gameboard.js';

const cells = document.querySelectorAll('.canvas-part');
const cellContainer = document.querySelector('.canvas');

const gameboard = new Gameboard(cells);

cellContainer.addEventListener('click', function (e) {
  gameboard.setCellMarker(e.target.dataset.cellNumber, 'x');
  gameboard.changeCellMarker(cells);
});

console.log(gameboard);
