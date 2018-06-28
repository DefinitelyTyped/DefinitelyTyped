import * as triplesec from 'triplesec';

triplesec.encrypt({
    data: new Buffer('data'),
    key: new Buffer('key')
}, (err, buff) => {
    if (err === null) {
        buff; // $ExpectType Buffer | null
    } else {
        err; // $ExpectType Error
    }
});

triplesec.decrypt({
    data: new Buffer('data'),
    key: new Buffer('key')
}, (err, buff) => {
    if (err === null) {
        buff; // $ExpectType Buffer | null
    } else {
        err; // $ExpectType Error
    }
});

triplesec.prng.generate(24, words => {
    words.to_hex(); // $ExpectType string
});
