import randomBytes = require('randombytes');

// $ExpectType Buffer
randomBytes(16);
// $ExpectType void
randomBytes(16, (err, resp) => {
    // $ExpectType Error | null
    err;
    // $ExpectType Buffer
    resp;
});
