import niceTry = require("nice-try");

niceTry(() => true); // $ExpectType boolean | void
niceTry(() => (1).toString(999)); // $ExpectType string | void
niceTry(); // $ExpectType void
niceTry(true); // $ExpectType void
