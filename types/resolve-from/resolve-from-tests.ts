import resolveFrom = require("resolve-from");

// $ExpectType string
resolveFrom('foo', './bar');
// $ExpectType string | null
resolveFrom.silent('foo', './baz');
