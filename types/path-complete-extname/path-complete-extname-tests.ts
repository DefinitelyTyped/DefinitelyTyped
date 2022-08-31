import pathCompleteExtname = require("path-complete-extname");

pathCompleteExtname(""); // $ExpectType string
pathCompleteExtname.posix(""); // $ExpectType string
pathCompleteExtname.win32(""); // $ExpectType string
