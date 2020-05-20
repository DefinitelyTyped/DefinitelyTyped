import niceTry = require("nice-try");

niceTry(() => true); // $ExpectType boolean | undefined
niceTry(() => (1).toString(999)); // $ExpectType string | undefined
niceTry(); // $ExpectType undefined
niceTry(true); // $ExpectType undefined
