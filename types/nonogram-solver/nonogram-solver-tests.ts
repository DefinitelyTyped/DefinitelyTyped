import solve = require('nonogram-solver');

const { status, puzzle } = solve('input.json');

puzzle; // $ExpectType Puzzle
puzzle.columnHints; // $ExpectType number[][]
puzzle.isFinished; // $expectType boolean
puzzle.svg; // $expectType string

status; // $ExpectType State
