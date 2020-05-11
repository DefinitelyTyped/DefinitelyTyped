import * as scrypt from 'scrypt';

/***** params *****/
try {
    scrypt.paramsSync(0.1); // $ExpectType Params
    scrypt.paramsSync(0.1, 5); // $ExpectType Params
    scrypt.paramsSync(0.1, 5, 4); // $ExpectType Params
} catch (err) {
    // handle error
}

scrypt.params(0.1, (err, params) => {
    err; // $ExpectType Error | null
    params; // $ExpectType Params
    console.log(params);
});
scrypt.params(0.1, 5, (err, params) => {
    err; // $ExpectType Error | null
    params; // $ExpectType Params
    console.log(params);
});
scrypt.params(0.1, 5, 4, (err, params) => {
    err; // $ExpectType Error | null
    params; // $ExpectType Params
    console.log(params);
});

scrypt.params(0.1); // $ExpectType Promise<Params>
scrypt.params(0.1, 5); // $ExpectType Promise<Params>
scrypt.params(0.1, 5, 4); // $ExpectType Promise<Params>

/***** kdf *****/
const params = scrypt.paramsSync(0.1);
try {
    scrypt.kdfSync('some string', params); // $ExpectType Buffer
    scrypt.kdfSync(new Buffer('some string'), params); // $ExpectType Buffer
} catch (err) {
    // handle error
}

scrypt.kdf('some string', params, (err, buff) => {
    err; // $ExpectType Error | null
    buff; // $ExpectType Buffer
});
scrypt.kdf(new Buffer('some string'), params, (err, buff) => {
    err; // $ExpectType Error | null
    buff; // $ExpectType Buffer
});

scrypt.kdf('some string', params); // $ExpectType Promise<Buffer>
scrypt.kdf(new Buffer('some string'), params); // $ExpectType Promise<Buffer>

/***** verifyKdf *****/
const kdf = scrypt.kdfSync('some string', params);
try {
    scrypt.verifyKdfSync(kdf, 'some string'); // $ExpectType boolean
    scrypt.verifyKdfSync(kdf, new Buffer('some string')); // $ExpectType boolean
} catch (err) {
    // handle error
}

scrypt.verifyKdf(kdf, 'some string', (err, valid) => {
    err; // $ExpectType Error | null
    valid; // $ExpectType boolean
});
scrypt.verifyKdf(kdf, new Buffer('some string'), (err, valid) => {
    err; // $ExpectType Error | null
    valid; // $ExpectType boolean
});

scrypt.verifyKdf(kdf, 'some string'); // $ExpectType Promise<boolean>
scrypt.verifyKdf(kdf, new Buffer('some string')); // $ExpectType Promise<boolean>

/***** hash *****/
try {
    scrypt.hashSync('some string', params, 255, 'some salt'); // $ExpectType Buffer
    scrypt.hashSync('some string', params, 255, new Buffer('some salt')); // $ExpectType Buffer
    scrypt.hashSync(new Buffer('some string'), params, 255, 'some salt'); // $ExpectType Buffer
    scrypt.hashSync(new Buffer('some string'), params, 255, new Buffer('some salt')); // $ExpectType Buffer
} catch (err) {
    // handle error
}

scrypt.hash('some string', params, 255, 'some salt', (err, buff) => {
    err; // $ExpectType Error | null
    buff; // $ExpectType Buffer
});
scrypt.hash('some string', params, 255, new Buffer('some salt'), (err, buff) => {
    err; // $ExpectType Error | null
    buff; // $ExpectType Buffer
});
scrypt.hash(new Buffer('some string'), params, 255, 'some salt', (err, buff) => {
    err; // $ExpectType Error | null
    buff; // $ExpectType Buffer
});
scrypt.hash(new Buffer('some string'), params, 255, new Buffer('some salt'), (err, buff) => {
    err; // $ExpectType Error | null
    buff; // $ExpectType Buffer
});

scrypt.hash('some string', params, 255, 'some salt'); // $ExpectType Promise<Buffer>
scrypt.hash('some string', params, 255, new Buffer('some salt')); // $ExpectType Promise<Buffer>
scrypt.hash(new Buffer('some string'), params, 255, 'some salt'); // $ExpectType Promise<Buffer>
scrypt.hash(new Buffer('some string'), params, 255, new Buffer('some salt')); // $ExpectType Promise<Buffer>
