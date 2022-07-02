import babar = require('babar');

// $ExpectType string
const graph = babar([[0, 1], [1, 5], [2, 5], [3, 1], [4, 6]]);

// $ExpectType string
const graphWithCaption = babar([[0, 1], [1, 5], [2, 5], [3, 1], [4, 6]], {caption: "Test"});

// $ExpectType string
const graphWithAllOptions = babar([[0, 1], [1, 5], [2, 5], [3, 1], [4, 6]], {
    caption: 'Test',
    color: 'green',
    grid: 'blue',
    width: 80,
    height: 15,
    xFractions: 20,
    yFractions: 10,
    minX: 0,
    maxX: 100,
    minY: 0,
    maxY: 100
});
// $ExpectType string
const asciiValidColor = babar([[0, 1], [1, 5]], {color: "ascii"});

// @ts-expect-error
const invalidPoints = babar([["0", 1], ["1", 5]]);
// @ts-expect-error
const invalidOptions = babar([[0, 1], [1, 5]], {batman: 1});
// @ts-expect-error
const invalidOptionType = babar([[0, 1], [1, 5]], {caption: 1});
// @ts-expect-error
const invalidColor = babar([[0, 1], [1, 5]], {color: "pink"});
// @ts-expect-error
const asciiNotAllowedOnGrid = babar([[0, 1], [1, 5]], {grid: "ascii"});
