import leftPad = require("left-pad");

// Tests based on examples in https://github.com/stevemao/left-pad#usage

leftPad("foo", 5);
// => "  foo"

leftPad("foobar", 6);
// => "foobar"'

leftPad(1, 2, "0");
// => "01"

leftPad(17, 5, 0);
// => "00017"
