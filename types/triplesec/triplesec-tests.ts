import * as triplesec from 'triplesec';

const progressHook = (progress: triplesec.Progress) => {
    progress.what; // $ExpectType string
    progress.i; // $ExpectType number
    progress.total; // $ExpectType number
};

triplesec.encrypt({
    data: new Buffer('data'),
    key: new Buffer('key'),
    progress_hook: progressHook,
}, (err, buff) => {
    if (err === null) {
        buff; // $ExpectType Buffer | null
    } else {
        err; // $ExpectType Error
    }
});

triplesec.decrypt({
    data: new Buffer('data'),
    key: new Buffer('key'),
    progress_hook: progressHook,
}, (err, buff) => {
    if (err === null) {
        buff; // $ExpectType Buffer | null
    } else {
        err; // $ExpectType Error
    }
});

triplesec.prng.generate(24, words => {
    words.sigBytes; // $ExpectType number
    words.words; // $ExpectType number[]
    words.to_hex(); // $ExpectType string
});
