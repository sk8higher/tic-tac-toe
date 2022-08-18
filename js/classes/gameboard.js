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

  checkEveryElement(arr) {
    return (
      arr.every((cell) => cell === 'X') || arr.every((cell) => cell === 'O')
    );
  }

  /**
   * Checks if there is a won line
   * @param cellMarkers
   * @returns {boolean}
   */
  checkForLines(cellMarkers) {
    const firstLine = [cellMarkers[0], cellMarkers[1], cellMarkers[2]];
    const secondLine = [cellMarkers[3], cellMarkers[4], cellMarkers[5]];
    const thirdLine = [cellMarkers[6], cellMarkers[7], cellMarkers[8]];

    return (
      this.checkEveryElement(firstLine) ||
      this.checkEveryElement(secondLine) ||
      this.checkEveryElement(thirdLine)
    );
  }

  /**
   * Checks if there is a won row
   * @param cellMarkers
   * @returns {boolean}
   */
  checkForRows(cellMarkers) {
    const firstRow = [cellMarkers[0], cellMarkers[3], cellMarkers[6]];
    const secondRow = [cellMarkers[1], cellMarkers[4], cellMarkers[7]];
    const thirdRow = [cellMarkers[2], cellMarkers[5], cellMarkers[8]];

    return (
      this.checkEveryElement(firstRow) ||
      this.checkEveryElement(secondRow) ||
      this.checkEveryElement(thirdRow)
    );
  }

  /**
   * Checks if there is a won diagonal
   * @param cellMarkers
   * @returns {boolean}
   */
  checkForDiagonals(cellMarkers) {
    const firstDiagonal = [cellMarkers[0], cellMarkers[4], cellMarkers[8]];
    const secondDiagonal = [cellMarkers[2], cellMarkers[4], cellMarkers[6]];

    return (
      this.checkEveryElement(firstDiagonal) ||
      this.checkEveryElement(secondDiagonal)
    );
  }

  checkForTie(cellMarkers) {
    return cellMarkers.every((el) => el === 'X' || el === 'O');
  }

  clearBoard() {
    this._board.fill('');
  }
}

export { Gameboard };
