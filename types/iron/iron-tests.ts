import * as Iron from "iron";

const options: Iron.SealOptions = {
    encryption: {
        saltBits: 256,
        algorithm: 'aes-256-cbc',
        iterations: 1,
        minPasswordlength: 32
    },
    integrity: {
        saltBits: 256,
        algorithm: 'sha256',
        iterations: 1,
        minPasswordlength: 32
    },
    ttl: 0,
    timestampSkewSec: 60,
    localtimeOffsetMsec: 0
};

const algorithms: Iron.Algorithms = {
    'aes-128-ctr': { keyBits: 128, ivBits: 128 },
    'aes-256-cbc': { keyBits: 256, ivBits: 128 },
    sha256: { keyBits: 256 }
};

const optionsGenerateKey: Iron.GenerateKeyOptions = {
    saltBits: 256,
    salt: '4d8nr9q384nr9q384nr93q8nruq9348run',
    algorithm: 'aes-128-ctr',
    iterations: 10000,
    iv: 'sdfsdfsdfsdfscdrgercgesrcgsercg',
    minPasswordlength: 32
};

const obj: object = {
    a: 1,
    b: 2,
    c: [3, 4, 5],
    d: {
        e: 'f'
    }
};

Iron.seal(obj, 'password', options)
    .then((sealed: string) => {
        console.log(sealed);
    });

Iron.unseal('data', 'password', Iron.defaults)
    .then((unsealed: object) => {
        console.log(unsealed);
    });

Iron.generateKey('password', options.encryption)
    .then((value: Iron.Key) => {
        console.log(value);
    });

Iron.generateKey('password', optionsGenerateKey)
    .then((value: Iron.Key) => {
        console.log(value);
    });

Iron.encrypt('password', Iron.defaults.encryption, 'data')
    .then((obj: { data: Buffer, key: Iron.Key }) => {
        console.log(obj);
    });

Iron.decrypt('password', Iron.defaults.encryption, 'data')
    .then((buffer: Buffer) => {
        console.log(buffer);
    });

Iron.hmacWithPassword('password', Iron.defaults.integrity, 'data')
    .then((value: Iron.HMacResult) => {
        console.log(value);
    });
