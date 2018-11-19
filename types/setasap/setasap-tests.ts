import setAsap = require("setasap");

setAsap(() => void 0); // $ExpectType void
setAsap("evil()"); // $ExpectType void
