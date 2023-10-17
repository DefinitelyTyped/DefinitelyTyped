import makeAsyncFunction = require("make-async-function");

makeAsyncFunction(); // $ExpectType AsyncFunction | undefined
makeAsyncFunction.list(); // $ExpectType readonly AsyncFunction[]
