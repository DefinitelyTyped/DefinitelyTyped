/**
 * @author robp94 / https://github.com/robp94
 */

import { Node } from "yuka";

export class TTTNode extends Node {
    board: number[];
    value: number;
    win: boolean;
    finished: boolean;
    winPlayer: number;
    weight: number;

    constructor(index: number = -1, board: number[] = [9, 9, 9, 9, 9, 9, 9, 9, 9]) {
        super(index);

        // the board is represented as a flat array
        // 1 = cell marked by player 1
        // 2 = cell marked by player 2
        // 9 = cell is empty

        this.board = board;

        this.value = parseInt(this.board.join(""), 10); // number representation of the board array for faster comparision
        this.win = false; // whether this node represents a won game
        this.finished = false; // whether this node represents a finished game (win or draw)
        this.winPlayer = -1; // represents the player who wins with the current board, - 1 if there is no winner
        this.weight = 0; // used for min/max algorithm

        this.evaluate();
    }

    evaluate() {
        // check for win

        // horizontal

        if ([this.board[0], this.board[1], this.board[2]].every(condition)) {
            this.finished = true;
            this.winPlayer = this.board[0];
        }

        if ([this.board[3], this.board[4], this.board[5]].every(condition)) {
            this.finished = true;
            this.winPlayer = this.board[3];
        }

        if ([this.board[6], this.board[7], this.board[8]].every(condition)) {
            this.finished = true;
            this.winPlayer = this.board[6];
        }

        // vertical

        if ([this.board[0], this.board[3], this.board[6]].every(condition)) {
            this.finished = true;
            this.winPlayer = this.board[0];
        }

        if ([this.board[1], this.board[4], this.board[7]].every(condition)) {
            this.finished = true;
            this.winPlayer = this.board[1];
        }

        if ([this.board[2], this.board[5], this.board[8]].every(condition)) {
            this.finished = true;
            this.winPlayer = this.board[2];
        }

        // diagonal

        if ([this.board[0], this.board[4], this.board[8]].every(condition)) {
            this.finished = true;
            this.winPlayer = this.board[0];
        }

        if ([this.board[6], this.board[4], this.board[2]].every(condition)) {
            this.finished = true;
            this.winPlayer = this.board[6];
        }
        if (this.winPlayer !== -1) this.win = true;

        // check for draw

        let count = 0;
        for (let i = 0; i < 9; i++) {
            if (this.board[i] !== 9) {
                count++;
            }
        }

        if (count === 9) {
            this.finished = true;
        }
    }
}

function condition(v: number, i: number, a: number[]) {
    return (a[i] === a[0] && a[i] !== 9);
}
