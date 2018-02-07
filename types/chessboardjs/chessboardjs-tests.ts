import chessboardjs = require('chessboardjs');

/**
 * Basic Usage
 */

// empty position
var board = chessboardjs.ChessBoard('board');

// Start position
var board = chessboardjs.ChessBoard('board', 'start');

// FEN string
var ruyLopez = 'r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R';
var board = chessboardjs.ChessBoard('board', ruyLopez);

// Position Object
var position: chessboardjs.BoardPositionType = {
    d6: chessboardjs.Piece.bK,
    d4: chessboardjs.Piece.wP,
    e4: chessboardjs.Piece.wK
};
var board = chessboardjs.ChessBoard('board', position);

// Multiple boards
var config1: chessboardjs.BoardConfig = {
    position: 'start',
    showNotation: false
};
var board1 = chessboardjs.ChessBoard('board1', config1);

var board2 = chessboardjs.ChessBoard('board2', {
    position: 'r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R',
    showNotation: false
});

var board3 = chessboardjs.ChessBoard('board3', {
    position: 'r1k4r/p2nb1p1/2b4p/1p1n1p2/2PP4/3Q1NB1/1P3PPP/R5K1',
    showNotation: false
});

/**
 * Methods
 */

// Get Position
var cfg: chessboardjs.BoardConfig = {
    draggable: true,
    position: 'start'
};
var board = chessboardjs.ChessBoard('board', cfg);
var pos: chessboardjs.BoardPositionType = board.position();

var posFEN: string = board.position('fen');

// Set position

// FEN
board.position('r1k4r/p2nb1p1/2b4p/1p1n1p2/2PP4/3Q1NB1/1P3PPP/R5K1');

// animated
board.position(ruyLopez, true);

// instantly
board.position(ruyLopez, false);

var position: chessboardjs.BoardPositionType = {
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
var oritentation = board.orientation();

// change orientation
board.orientation('black');

// Recalculates board and square sizes based on the parent element and redraws
// the board accordingly.
board.resize();

// Destroy
board.destroy();