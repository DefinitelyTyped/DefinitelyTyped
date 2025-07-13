import escape = require("./implementation");

declare function shimRegExpEscape(): typeof escape;
export = shimRegExpEscape;
