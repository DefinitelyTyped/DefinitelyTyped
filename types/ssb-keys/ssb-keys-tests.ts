import ssbKeys = require('ssb-keys');

let keys: ssbKeys.Keys = {
    curve: 'ed25519',
    public: 'abcd.ed25519',
    private: 'bcda.ed25519',
    id: '@1234.ed25519'
};

let str: string;
str = ssbKeys.hash(Buffer.from(''));
str = ssbKeys.hash(Buffer.from(''), 'utf8');

str = ssbKeys.getTag('abcd.ed25519');

keys = ssbKeys.loadOrCreateSync('/path/to/some/file');
ssbKeys.loadOrCreate('/path/to/some/file', (err, newKeys) => {
    if (err) {
        const error: Error = err;
    }
    keys = newKeys;
});

keys = ssbKeys.generate(keys.curve);
keys = ssbKeys.generate(keys.curve, Buffer.from(str));

const obj = { test: 'test' };
let signed: typeof obj & { signature: string };
signed = ssbKeys.signObj(keys, obj);
signed = ssbKeys.signObj(keys, 'hmackey', obj);

let verified: boolean;
verified = ssbKeys.verifyObj(keys, signed);
verified = ssbKeys.verifyObj(keys, 'hmackey', signed);

str = ssbKeys.box(obj, ['a', 'b']);

let something: object | string | boolean | number | undefined;
something = ssbKeys.unbox(str, keys);

let strOrNullOrUndefined: string | null | undefined;
strOrNullOrUndefined = ssbKeys.unboxKey(str, keys);

strOrNullOrUndefined = ssbKeys.unboxBody(str, 'key');

let buffer: Buffer;
buffer = ssbKeys.secretBox(obj, Buffer.from('key'));

const unboxed: object = ssbKeys.secretUnbox(buffer, Buffer.from('key'));
