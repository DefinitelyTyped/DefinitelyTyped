import implementation = require("./implementation");

declare function shimObjectEntries(): typeof implementation;
export = shimObjectEntries;
