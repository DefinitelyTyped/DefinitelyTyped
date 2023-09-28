import importLocal = require("import-local");

// $ExpectType boolean
importLocal("...");

// @ts-expect-error
importLocal(new Symbol(5));
