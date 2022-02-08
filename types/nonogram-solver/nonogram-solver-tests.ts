import solve = require('nonogram-solver');

const { status, puzzle } = solve('input.json');

puzzle; // $ExpectType Puzzle
puzzle.columnHints; // $ExpectType number[][]
puzzle.isFinished; // $ExpectType boolean
puzzle.svg; // $ExpectType string

status; // $ExpectType State
