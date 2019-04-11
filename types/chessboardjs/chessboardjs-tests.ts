import chessboardjs = require('chessboardjs');

/**
 * Basic Usage
 */

// empty position
let board = chessboardjs.ChessBoard('board');

// Start position
board = chessboardjs.ChessBoard('board', 'start');

// FEN string
const ruyLopez = 'r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R';
board = chessboardjs.ChessBoard('board', ruyLopez);

// Position Object
let position: chessboardjs.BoardPositionType = {
    d6: chessboardjs.Piece.bK,
    d4: chessboardjs.Piece.wP,
    e4: chessboardjs.Piece.wK
};
board = chessboardjs.ChessBoard('board', position);

// Multiple boards
const config1: chessboardjs.BoardConfig = {
    position: 'start',
    showNotation: false
};
const board1 = chessboardjs.ChessBoard('board1', config1);

const board2 = chessboardjs.ChessBoard('board2', {
    position: 'r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R',
    showNotation: false
});

const board3 = chessboardjs.ChessBoard('board3', {
    position: 'r1k4r/p2nb1p1/2b4p/1p1n1p2/2PP4/3Q1NB1/1P3PPP/R5K1',
    showNotation: false
});

/**
 * Methods
 */

// Get Position
const cfg: chessboardjs.BoardConfig = {
    draggable: true,
    position: 'start'
};
board = chessboardjs.ChessBoard('board', cfg);
const pos: chessboardjs.BoardPositionType = board.position();

const posFEN: string = board.position('fen');

// Set position

// FEN
board.position('r1k4r/p2nb1p1/2b4p/1p1n1p2/2PP4/3Q1NB1/1P3PPP/R5K1');

// animated
board.position(ruyLopez, true);

// instantly
board.position(ruyLopez, false);

position = {
    a4: chessboardjs.Piece.bK,
    c4: chessboardjs.Piece.wK,
    a7: chessboardjs.Piece.wR
};
board.position(position);

// Clear
board.clear(false);

// Move
board.start();
board.move('e2-e4');

// Orientation
const oritentation = board.orientation();

// change orientation
board.orientation('black');

// Recalculates board and square sizes based on the parent element and redraws
// the board accordingly.
board.resize();

// Destroy
board.destroy();
