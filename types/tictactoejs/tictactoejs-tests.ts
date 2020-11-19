import { TicTacToe } from "tictactoejs";

const game = new TicTacToe(3);

game.reset(3);
game.getSize();
game.turn();
game.ascii();
game.ascii2();
game.move(1, 1);
game.exists(1, 1);
game.get(1, 1);
game.moveArray(0, 0);
game.status();
game.gameOver();
game.isDraw();
game.legalMoves();
game.randomMove();
