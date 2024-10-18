import RegexEscape = require("regex-escape");

// @ts-expect-error No argument
RegexEscape();
RegexEscape("$foo");

// @ts-expect-error Does not exist yet
RegExp.escape();
// @ts-expect-error Does not exist yet
RegExp.escape("foo");

RegexEscape.proto();
RegexEscape.proto(RegExp);

// @ts-expect-error No argument
RegExp.escape();
RegExp.escape("foo");
