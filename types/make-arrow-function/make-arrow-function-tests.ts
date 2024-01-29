import makeArrowFunction = require("make-arrow-function");

const fn = makeArrowFunction(); // $ExpectType ArrowFunction | undefined
makeArrowFunction.list(); // $ExpectType readonly ArrowFunction[]
