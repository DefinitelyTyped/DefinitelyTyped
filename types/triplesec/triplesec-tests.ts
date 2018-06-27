import * as triplesec from 'triplesec';

triplesec.encrypt({
    data: new Buffer('data'),
    key: new Buffer('key')
}, (err, buff) => {
    if (err === null) {
        console.log(buff);
    } else {
        console.log(err);
    }
});

triplesec.decrypt({
    data: new Buffer('data'),
    key: new Buffer('key')
}, (err, buff) => {
    if (err === null) {
        console.log(buff);
    } else {
        console.log(err);
    }
});

triplesec.prng.generate(24, words => {
    console.log(words.to_hex()); // $ExpectType string
});
