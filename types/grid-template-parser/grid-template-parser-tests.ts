import {
    grid,
    template,
    area,
    rect,
    minColumnStart,
    maxColumnStart,
    minColumnEnd,
    maxColumnEnd,
    minRowStart,
    maxRowStart,
    minRowEnd,
    maxRowEnd,
} from 'grid-template-parser';

const testGrid = grid(`
  "a a a b b"
  "a a a b b"
  ". . c c c"
  "d d d d d"
`);

template({
    width: 5,
    height: 4,
    areas: {
        a: {
            column: { start: 1, end: 4, span: 3 },
            row: { start: 1, end: 3, span: 2 },
        },
        b: {
            column: { start: 3, end: 6, span: 3 },
            row: { start: 3, end: 5, span: 2 },
        },
    },
});

const a = area({
    x: 0,
    y: 0,
    width: 3,
    height: 2,
});

const b = area({
    x: 2,
    y: 2,
    width: 3,
    height: 2,
});

template({
    width: 5,
    height: 4,
    areas: { a, b },
});

rect({
    column: { start: 1, end: 4, span: 3 },
    row: { start: 1, end: 3, span: 2 },
});

minColumnStart(testGrid);
maxColumnStart(testGrid);
minColumnEnd(testGrid);
maxColumnEnd(testGrid);
minRowStart(testGrid);
maxRowStart(testGrid);
minRowEnd(testGrid);
maxRowEnd(testGrid);
