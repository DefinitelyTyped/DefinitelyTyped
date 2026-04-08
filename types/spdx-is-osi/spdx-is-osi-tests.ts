import spdxIsOsi = require("spdx-is-osi");

// $ExpectType boolean
spdxIsOsi("MIT");

// $ExpectType boolean
spdxIsOsi("(MIT OR Apache-2.0)");
