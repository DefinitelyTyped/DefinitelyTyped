import tryCatch from "try-catch";

tryCatch(() => {}); // $ExpectType [error: Error, result?: any]
