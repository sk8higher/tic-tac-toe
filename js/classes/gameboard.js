class Gameboard {
  #board;

  constructor(board) {
    this.#board = new Array(board.length);
  }

  setCellMarker(cellNumber, marker) {
    this.#board[cellNumber] = marker;
  }

  changeCellMarker(board) {
    board.forEach((el, i) => {
      el.textContent = this.#board[i];
    });
  }
}

export { Gameboard };
