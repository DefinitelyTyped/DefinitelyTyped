import getBounds = require("array-bounds");

getBounds([0, 25, 50, 75, 100]); // $ExpectType number[]
getBounds([0, 25, 50, 75, 100], 2); // $ExpectType number[]
getBounds({ 0: 1, 1: 2, length: 2 }); // $ExpectType number[]
