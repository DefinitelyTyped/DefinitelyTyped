import niceTry = require("nice-try");

niceTry(() => true); // $ExpectType boolean | void
niceTry(() => { throw new Error("Hello World!"); }); // $ExpectType void
