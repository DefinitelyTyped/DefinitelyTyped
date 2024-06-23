import unixify = require("unixify");

unixify("\\foo\\bar\\baz\\"); // $ExpectType string
unixify("\\foo\\bar\\baz\\", false); // $ExpectType string
