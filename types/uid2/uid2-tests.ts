import uid2 = require('uid2');

uid2(20); // $ExpectType string

uid2(20, (error, result) => {
    error; // $ExpectType Error | null
    result; // $ExpectType string | undefined
});
