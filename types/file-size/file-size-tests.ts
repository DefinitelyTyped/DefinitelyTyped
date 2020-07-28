import fileSize = require("file-size");

const fz = fileSize(14235235);

fz.fixed; // $ExpectType number
fz.spacer; // $ExpectType string

fz.human(); // $ExpectType string
fz.calculate(); // $ExpectType Calculated
fz.to("KB"); // $ExpectType string
