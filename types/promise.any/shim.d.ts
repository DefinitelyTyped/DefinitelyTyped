import implementation = require("./implementation");

declare function shimAny(): typeof implementation;

export = shimAny;
