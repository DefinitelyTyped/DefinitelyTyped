// This contains sample code which tests the typings. This code does not run, but it is type-checked.
import onecolor = require("onecolor");
import pipetteur = require(".");

const pipe = pipetteur("string")[0];
pipe.index as number;
pipe.line as number;
pipe.column as number;
pipe.match as string;
pipe.color as onecolor.Color;
