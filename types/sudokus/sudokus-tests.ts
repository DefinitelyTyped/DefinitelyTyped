import { solve, ProgressFn, Cell } from 'sudokus';

const onProgress: ProgressFn = (cell: Cell[][]) => {
    cell[0][0].fixed;
    cell[0][0].value;
};

solve(
    [
        [0, 0, 0, 2, 9, 0, 1, 0, 0],
        [6, 0, 0, 5, 0, 1, 0, 7, 0],
        [0, 0, 0, 0, 0, 0, 0, 3, 4],
        [0, 0, 0, 0, 0, 0, 9, 4, 0],
        [4, 5, 0, 3, 0, 0, 0, 6, 2],
        [2, 0, 9, 0, 0, 4, 3, 1, 0],
        [0, 2, 0, 0, 0, 0, 4, 9, 0],
        [0, 0, 6, 0, 0, 8, 0, 0, 0],
        [0, 4, 3, 0, 2, 0, 0, 8, 7],
    ],
    { onProgress }
);
