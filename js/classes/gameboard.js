class Gameboard {
  _board;

  constructor(board) {
    this._board = new Array(board.length);
  }

  setCellMarker(cellNumber, marker) {
    this._board[cellNumber] = marker;
  }

  changeCellMarker(board) {
    board.forEach((el, i) => {
      el.textContent = this._board[i];
    });
  }
}

export { Gameboard };
