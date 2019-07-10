import Sudoku from 'node-sudoku';

const board = '090000006\n000960485\n000581000\n004000000\n517200900\n602000370\n100804020\n706000810\n300090000';

const solver = new Sudoku(board);

solver.emptyPositions;

solver.draw(solver.board);

const solved = solver.solveSudoku();

solver.draw(solved);
