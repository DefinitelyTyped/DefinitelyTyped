import randomBytes = require("randombytes");

// $ExpectType Buffer || Buffer<ArrayBufferLike>
randomBytes(16);
// $ExpectType void
randomBytes(16, (err, resp) => {
    // $ExpectType Error | null
    err;
    // $ExpectType Buffer || Buffer<ArrayBufferLike>
    resp;
});
