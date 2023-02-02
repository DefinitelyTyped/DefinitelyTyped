import compare = require('double-hmac');

// $ExpectType void
compare(Buffer.alloc(0), Buffer.alloc(0), (err, equal) => {
    err; // $ExpectType Error | null
    equal; // $ExpectType boolean
});
