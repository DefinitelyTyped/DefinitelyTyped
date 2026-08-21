import stdout = require("stdout-stream");

stdout.write("hello");
stdout.end();

// $ExpectType true
stdout._isStdio;

// $ExpectType boolean
stdout.isTTY;
