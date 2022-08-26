import tinyDifference = require("@ngard/tiny-difference");

const { difference } = tinyDifference;

const diffNumbers: number[] = difference([1, 2, 3, 4], [1, 2]);
const diffMixed: number[] = difference([1, 2, 3, 4], [1, 2]);
const diffSpread: any[] = difference([1, 2, 3, 4], [1, "a"], [2, "b"]);
