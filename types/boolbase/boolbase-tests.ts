import boolbase = require("boolbase");

boolbase.trueFunc(); // $ExpectType true

boolbase.falseFunc(); // $ExpectType false

boolbase.trueFunc; // $ExpectType () => true

boolbase.falseFunc; // $ExpectType () => false
