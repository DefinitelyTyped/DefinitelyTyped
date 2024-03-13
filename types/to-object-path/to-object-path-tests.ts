import toPath = require("to-object-path");

// $ExpectType string
toPath("foo");

// $ExpectType string
toPath(["foo", "bar"]);

// $ExpectType string
toPath("a", ["b", "chrome"], "d", [[["e", "firefox"], "g"], "h"]);

// @ts-expect-error
toPath(["foo", 1]);

// @ts-expect-error
toPath(1);
