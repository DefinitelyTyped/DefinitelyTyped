import isNaturalNumber = require("is-natural-number");

isNaturalNumber(5);
isNaturalNumber("5");
isNaturalNumber(0, {includeZero: true});
isNaturalNumber("0", {includeZero: true});
