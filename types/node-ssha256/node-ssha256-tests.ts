import ssha256 = require("node-ssha256");

const message = "barfoo";
// $ExpectType string
const hash = ssha256.create(message);
// $ExpectType boolean
ssha256.check(hash, "foobar");
