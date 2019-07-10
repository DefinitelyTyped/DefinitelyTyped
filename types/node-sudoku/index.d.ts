// Type definitions for node-sudoku 1.0
// Project: https://github.com/jesusgn90/node-sudoku#readme
// Definitions by: Florian Keller <https://github.com/ffflorian>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export default class Sudoku {
    constructor(board: string);

    board: number[][];
    emptyPositions: number[][];

    draw(board: number[][]): void;
    solveSudoku(): number[][];
}
