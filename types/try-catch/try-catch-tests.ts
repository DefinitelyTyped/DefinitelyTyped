import tryCatch = require("try-catch");

tryCatch(() => {}); // $ExpectType [error: Error, result?: any]
