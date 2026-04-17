import spdxRanges = require("spdx-ranges");

// $ExpectType (string | string[])[][]
spdxRanges;

const range = spdxRanges[0];

// $ExpectType (string | string[])[]
range;
