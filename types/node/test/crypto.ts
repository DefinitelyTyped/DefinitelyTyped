import * as crypto from 'crypto';
import assert = require('assert');
import { promisify } from 'util';

{
    const copied: crypto.Hash = crypto.createHash('md5').copy();
}

{
    // crypto_hash_string_test
    let hashResult: string = crypto.createHash('md5').update('world').digest('hex');
    hashResult = crypto.createHash('shake256', { outputLength: 16 }).update('world').digest('hex');
}

{
    // crypto_hash_buffer_test
    const hashResult: string = crypto.createHash('md5').update(new Buffer('world')).digest('hex');
}

{
    // crypto_hash_dataview_test
    const hashResult: string = crypto
        .createHash('md5')
        .update(new DataView(new Buffer('world').buffer))
        .digest('hex');
}

{
    // crypto_hash_int8array_test
    const hashResult: string = crypto
        .createHash('md5')
        .update(new Int8Array(new Buffer('world').buffer))
        .digest('hex');
}

{
    // crypto_hmac_string_test
    const hmacResult: string = crypto.createHmac('md5', 'hello').update('world').digest('hex');
}

{
    // crypto_hmac_buffer_test
    const hmacResult: string = crypto.createHmac('md5', 'hello').update(new Buffer('world')).digest('hex');
}

{
    // crypto_hmac_dataview_test
    const hmacResult: string = crypto
        .createHmac('md5', 'hello')
        .update(new DataView(new Buffer('world').buffer))
        .digest('hex');
}

{
    // crypto_hmac_int8array_test
    const hmacResult: string = crypto
        .createHmac('md5', 'hello')
        .update(new Int8Array(new Buffer('world').buffer))
        .digest('hex');
}

{
    let hmac: crypto.Hmac;
    (hmac = crypto.createHmac('md5', 'hello')).end('world', 'utf8', () => {
        const hash: Buffer | string = hmac.read();
    });
}

{
    // update Hmac with base64 encoded string
    const message = Buffer.from('message').toString('base64');
    crypto.createHmac('sha256', 'key').update(message, 'base64').digest();
}

{
    // crypto_cipher_decipher_string_test
    const key: Buffer = new Buffer([1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7]);
    const clearText = 'This is the clear text.';
    const cipher: crypto.Cipher = crypto.createCipher('aes-128-ecb', key);
    let cipherText: string = cipher.update(clearText, 'utf8', 'hex');
    cipherText += cipher.final('hex');

    const decipher: crypto.Decipher = crypto.createDecipher('aes-128-ecb', key);
    let clearText2: string = decipher.update(cipherText, 'hex', 'utf8');
    clearText2 += decipher.final('utf8');

    assert.equal(clearText2, clearText);
}

{
    // crypto_cipher_decipher_buffer_test
    const key: Buffer = new Buffer([1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7]);
    const clearText: Buffer = new Buffer([1, 2, 3, 4, 5, 6, 7, 8, 9, 8, 7, 6, 5, 4]);
    const cipher: crypto.Cipher = crypto.createCipher('aes-128-ecb', key);
    const cipherBuffers: Buffer[] = [];
    cipherBuffers.push(cipher.update(clearText));
    cipherBuffers.push(cipher.final());

    const cipherText: Buffer = Buffer.concat(cipherBuffers);

    const decipher: crypto.Decipher = crypto.createDecipher('aes-128-ecb', key);
    const decipherBuffers: Buffer[] = [];
    decipherBuffers.push(decipher.update(cipherText));
    decipherBuffers.push(decipher.final());

    const clearText2: Buffer = Buffer.concat(decipherBuffers);

    assert.deepEqual(clearText2, clearText);
}

{
    // crypto_cipher_decipher_dataview_test
    const key: Buffer = new Buffer([1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7]);
    const clearText: DataView = new DataView(new Buffer([1, 2, 3, 4, 5, 6, 7, 8, 9, 8, 7, 6, 5, 4]).buffer);
    const cipher: crypto.Cipher = crypto.createCipher('aes-128-ecb', key);
    const cipherBuffers: Buffer[] = [];
    cipherBuffers.push(cipher.update(clearText));
    cipherBuffers.push(cipher.final());

    const cipherText: DataView = new DataView(Buffer.concat(cipherBuffers).buffer);

    const decipher: crypto.Decipher = crypto.createDecipher('aes-128-ecb', key);
    const decipherBuffers: Buffer[] = [];
    decipherBuffers.push(decipher.update(cipherText));
    decipherBuffers.push(decipher.final());

    const clearText2: Buffer = Buffer.concat(decipherBuffers);

    assert.deepEqual(clearText2, clearText);
}

{
    // crypto_cipheriv_decipheriv_aad_ccm_test
    const key: string | null = 'keykeykeykeykeykeykeykey';
    const nonce = crypto.randomBytes(12);
    const aad = Buffer.from('0123456789', 'hex');

    const cipher = crypto.createCipheriv('aes-192-ccm', key, nonce, {
        authTagLength: 16,
    });
    const plaintext = 'Hello world';
    cipher.setAAD(aad, {
        plaintextLength: Buffer.byteLength(plaintext),
    });
    const ciphertext = cipher.update(plaintext, 'utf8');
    cipher.final();
    const tag = cipher.getAuthTag();

    const decipher = crypto.createDecipheriv('aes-192-ccm', key, nonce, {
        authTagLength: 16,
    });
    decipher.setAuthTag(tag);
    decipher.setAAD(aad, {
        plaintextLength: ciphertext.length,
    });
    const receivedPlaintext: string = decipher.update(ciphertext, undefined, 'utf8');
    decipher.final();
}

{
    // crypto_cipheriv_decipheriv_aad_gcm_test
    const key = 'keykeykeykeykeykeykeykey';
    const nonce = crypto.randomBytes(12);
    const aad = Buffer.from('0123456789', 'hex');

    const cipher = crypto.createCipheriv('aes-192-gcm', key, nonce);
    const plaintext = 'Hello world';
    cipher.setAAD(aad, {
        plaintextLength: Buffer.byteLength(plaintext),
    });
    const ciphertext = cipher.update(plaintext, 'utf8');
    cipher.final();
    const tag = cipher.getAuthTag();

    const decipher = crypto.createDecipheriv('aes-192-gcm', key, nonce);
    decipher.setAuthTag(tag);
    decipher.setAAD(aad, {
        plaintextLength: ciphertext.length,
    });
    const receivedPlaintext: string = decipher.update(ciphertext, undefined, 'utf8');
    decipher.final();
}

{
    // crypto_cipheriv_decipheriv_cbc_string_encoding_test
    const key: string | null = 'keykeykeykeykeykeykeykey';
    const nonce = crypto.randomBytes(12);

    const cipher = crypto.createCipheriv('aes-192-cbc', key, nonce);
    const plaintext = 'Hello world';
     // $ExpectType string
    const ciphertext = cipher.update(plaintext, 'utf8', 'binary');
    cipher.final();

    const decipher = crypto.createDecipheriv('aes-192-cbc', key, nonce);
     // $ExpectType string
    const receivedPlaintext = decipher.update(ciphertext, 'binary', 'utf8');
    decipher.final();
}

{
    // crypto_cipheriv_decipheriv_cbc_buffer_encoding_test
    const key: string | null = 'keykeykeykeykeykeykeykey';
    const nonce = crypto.randomBytes(12);

    const cipher = crypto.createCipheriv('aes-192-cbc', key, nonce);
    const plaintext = 'Hello world';
     // $ExpectType Buffer
    const cipherBuf = cipher.update(plaintext, 'utf8');
    cipher.final();

    const decipher = crypto.createDecipheriv('aes-192-cbc', key, nonce);
     // $ExpectType string
    const receivedPlaintext = decipher.update(cipherBuf, undefined, 'utf8');
    decipher.final();
}

{
    // crypto_cipheriv_decipheriv_cbc_buffer_encoding_test
    const key: string | null = 'keykeykeykeykeykeykeykey';
    const nonce = crypto.randomBytes(12);

    const cipher = crypto.createCipheriv('aes-192-cbc', key, nonce);
    const plaintext = 'Hello world';
     // $ExpectType Buffer
    const cipherBuf = cipher.update(plaintext, 'utf8');
    cipher.final();

    const decipher = crypto.createDecipheriv('aes-192-cbc', key, nonce);
     // $ExpectType Buffer
    const receivedPlaintext = decipher.update(cipherBuf);
    decipher.final();
}

{
    // crypto_timingsafeequal_buffer_test
    const buffer1: Buffer = new Buffer([1, 2, 3, 4, 5]);
    const buffer2: Buffer = new Buffer([1, 2, 3, 4, 5]);
    const buffer3: Buffer = new Buffer([5, 4, 3, 2, 1]);

    assert(crypto.timingSafeEqual(buffer1, buffer2));
    assert(!crypto.timingSafeEqual(buffer1, buffer3));
}

{
    // crypto_timingsafeequal_uint32array_test
    const arr1: Uint32Array = Uint32Array.of(1, 2, 3, 4, 5);
    const arr2: Uint32Array = Uint32Array.of(1, 2, 3, 4, 5);
    const arr3: Uint32Array = Uint32Array.of(5, 4, 3, 2, 1);

    assert(crypto.timingSafeEqual(arr1, arr2));
    assert(!crypto.timingSafeEqual(arr1, arr3));
}

{
    // crypto_timingsafeequal_safe_typedarray_variant_test
    const arr1: Uint32Array = Uint32Array.of(1, 2, 3, 4, 5);
    const arr2: Int32Array = Int32Array.of(1, 2, 3, 4, 5);
    const arr3: Uint32Array = Uint32Array.of(5, 4, 3, 2, 1);

    assert(crypto.timingSafeEqual(arr1, arr2));
    assert(!crypto.timingSafeEqual(arr1, arr3));
}

{
    // crypto_timingsafeequal_safe_int8array_variant_test
    const arr1: Int8Array = Int8Array.of(1, 2, 3, 4, 5, ~0, ~1, ~2, ~3, ~4);
    const arr2: Uint8Array = Uint8Array.of(1, 2, 3, 4, 5, ~0, ~1, ~2, ~3, ~4);
    const arr3: Uint8ClampedArray = Uint8ClampedArray.of(1, 2, 3, 4, 5, ~0, ~1, ~2, ~3, ~4);

    assert(crypto.timingSafeEqual(arr1, arr2)); // binary same
    assert(!crypto.timingSafeEqual(arr1, arr3)); // binary differ
}

{
    // crypto_timingsafeequal_safe_arraybufferiew_variant_test
    /* throws as of v10.4.1 */
    // let arr1: Uint8Array = Uint8Array.of(1, 0, 2, 0, 3, 0, 4, 0);
    // let arr2: Uint16Array = Uint16Array.of(1, 2, 3, 4);
    // let arr3: Uint32Array = Uint8ClampedArray.of(131073, 262147);
    // assert(crypto.timingSafeEqual(arr1, arr2)); // binary same
    // assert(crypto.timingSafeEqual(arr1, arr3)); // binary same
}

{
    // crypto_timingsafeequal_unsafe_arraybufferiew_variant_test
    /* dumps core as of v10.4.1 */
    // let arr1: Uint8Array = Uint8Array.of(1, 2, 3, 4);
    // let arr2: Uint16Array = Uint16Array.of(1, 2, 3, 4);
    // let arr3: Uint32Array = Uint8ClampedArray.of(1, 2, 3, 4);
    // assert(!crypto.timingSafeEqual(arr1, arr2)); // dumps core
    // assert(!crypto.timingSafeEqual(arr1, arr3)); // dumps core
}

{
    // crypto_timingsafeequal_dataview_test
    const dv1B: Uint8Array = Uint8Array.of(1, 2, 3, 4, 5);
    const dv2B: Int8Array = Int8Array.of(1, 2, 3, 4, 5);
    const dv3B: Buffer = Buffer.of(5, 4, 3, 2, 1);
    const dv4B: Uint8ClampedArray = Uint8ClampedArray.of(5, 4, 3, 2, 1);
    const dv1: DataView = new DataView(dv1B.buffer, dv1B.byteOffset, dv1B.byteLength);
    const dv2: DataView = new DataView(dv2B.buffer, dv2B.byteOffset, dv2B.byteLength);
    const dv3: DataView = new DataView(dv3B.buffer, dv3B.byteOffset, dv3B.byteLength);
    const dv4: DataView = new DataView(dv4B.buffer, dv4B.byteOffset, dv4B.byteLength);

    assert(crypto.timingSafeEqual(dv1, dv2));
    assert(crypto.timingSafeEqual(dv1, dv1B));
    assert(crypto.timingSafeEqual(dv2, dv1B));
    assert(crypto.timingSafeEqual(dv3, dv4));

    assert(!crypto.timingSafeEqual(dv1, dv3));
    assert(!crypto.timingSafeEqual(dv2, dv3));
    assert(!crypto.timingSafeEqual(dv1, dv4));
    // ... I'm not going to write all those tests.
}

{
    // crypto_timingsafeequal_uint32array_test
    const ui32_1: Uint32Array = Uint32Array.of(1, 2, 3, 4, 5);
    const ui32_2: Uint32Array = Uint32Array.of(1, 2, 3, 4, 5);
    const ui32_3: Uint32Array = Uint32Array.of(5, 4, 3, 2, 1);

    assert(crypto.timingSafeEqual(ui32_1, ui32_2));
    assert(!crypto.timingSafeEqual(ui32_1, ui32_3));
}

{
    // crypto_randomfill_buffer_test
    const buffer: Buffer = new Buffer(10);
    crypto.randomFillSync(buffer);
    crypto.randomFillSync(buffer, 2);
    crypto.randomFillSync(buffer, 2, 3);

    crypto.randomFill(buffer, (err: Error | null, buf: Buffer) => void {});
    crypto.randomFill(buffer, 2, (err: Error | null, buf: Buffer) => void {});
    crypto.randomFill(buffer, 2, 3, (err: Error | null, buf: Buffer) => void {});

    // crypto_randomfill_uint8array_test
    const ui8arr: Uint8Array = new Uint8Array(10);
    crypto.randomFillSync(ui8arr);
    crypto.randomFillSync(ui8arr, 2);
    crypto.randomFillSync(ui8arr, 2, 3);

    crypto.randomFill(ui8arr, (err: Error | null, buf: Uint8Array) => void {});
    crypto.randomFill(ui8arr, 2, (err: Error | null, buf: Uint8Array) => void {});
    crypto.randomFill(ui8arr, 2, 3, (err: Error | null, buf: Uint8Array) => void {});

    // crypto_randomfill_int32array_test
    const i32arr: Int32Array = new Int32Array(10);
    crypto.randomFillSync(i32arr);
    crypto.randomFillSync(i32arr, 2);
    crypto.randomFillSync(i32arr, 2, 3);

    crypto.randomFill(i32arr, (err: Error | null, buf: Int32Array) => void {});
    crypto.randomFill(i32arr, 2, (err: Error | null, buf: Int32Array) => void {});
    crypto.randomFill(i32arr, 2, 3, (err: Error | null, buf: Int32Array) => void {});
}

{
    // scrypt
    const pwd: string | Buffer | Int32Array | DataView = Buffer.alloc(16);
    const salt: string | Buffer | Int32Array | DataView = Buffer.alloc(16);
    crypto.scrypt(pwd, salt, 64, (err: Error | null, derivedKey: Buffer): void => {});
    const opts: crypto.ScryptOptions = {
        cost: 16384,
        blockSize: 8,
        parallelization: 1,
        maxmem: 32 * 1024 * 1024,
    };
    crypto.scrypt(pwd, salt, 64, opts, (err: Error | null, derivedKey: Buffer): void => {});
    crypto.scrypt(pwd, salt, 64, { maxmem: 16 * 1024 * 1024 }, (err: Error | null, derivedKey: Buffer): void => {});
    crypto.scryptSync(pwd, salt, 64);
    crypto.scryptSync(pwd, salt, 64, opts);
    crypto.scryptSync(pwd, salt, 64, { N: 1024 });
    const optsWithAliases: crypto.ScryptOptions = {
        N: opts.cost,
        r: opts.blockSize,
        p: opts.parallelization,
        maxmem: opts.maxmem,
    };
    crypto.scrypt(pwd, salt, 64, optsWithAliases, (err: Error | null, derivedKey: Buffer): void => {});
    crypto.scryptSync(pwd, salt, 64, optsWithAliases);
}

{
    let key: string | Buffer = Buffer.from('buf');
    const curve = 'secp256k1';
    let ret: string | Buffer = crypto.ECDH.convertKey(key, curve);
    key = '0xfff';
    ret = crypto.ECDH.convertKey(key, curve);
    ret = crypto.ECDH.convertKey(key, curve, 'hex');
    ret = crypto.ECDH.convertKey(key, curve, 'hex', 'hex');
    ret = crypto.ECDH.convertKey(key, curve, 'hex', 'hex', 'uncompressed');
    ret = crypto.ECDH.convertKey(key, curve, 'hex', 'hex', 'compressed');
    ret = crypto.ECDH.convertKey(key, curve, 'hex', 'hex', 'hybrid');
}

{
    const rsaRes: {
        publicKey: Buffer;
        privateKey: string;
    } = crypto.generateKeyPairSync('rsa', {
        modulusLength: 123,
        publicKeyEncoding: {
            format: 'der',
            type: 'pkcs1',
        },
        privateKeyEncoding: {
            cipher: 'some-cipher',
            format: 'pem',
            passphrase: 'secret',
            type: 'pkcs8',
        },
    });

    const rsaResNoPassphrase: {
        publicKey: Buffer;
        privateKey: string;
    } = crypto.generateKeyPairSync('rsa', {
        modulusLength: 123,
        publicKeyEncoding: {
            format: 'der',
            type: 'pkcs1',
        },
        privateKeyEncoding: {
            format: 'pem',
            type: 'pkcs8',
        },
    });

    const dsaRes: {
        publicKey: string;
        privateKey: Buffer;
    } = crypto.generateKeyPairSync('dsa', {
        modulusLength: 123,
        divisorLength: 123,
        publicKeyEncoding: {
            format: 'pem',
            type: 'spki',
        },
        privateKeyEncoding: {
            cipher: 'some-cipher',
            format: 'der',
            passphrase: 'secret',
            type: 'pkcs8',
        },
    });

    const dsaResNoPassphrase: {
        publicKey: string;
        privateKey: Buffer;
    } = crypto.generateKeyPairSync('dsa', {
        modulusLength: 123,
        divisorLength: 123,
        publicKeyEncoding: {
            format: 'pem',
            type: 'spki',
        },
        privateKeyEncoding: {
            format: 'der',
            type: 'pkcs8',
        },
    });

    const ecRes: {
        publicKey: string;
        privateKey: string;
    } = crypto.generateKeyPairSync('ec', {
        namedCurve: 'curve',
        publicKeyEncoding: {
            format: 'pem',
            type: 'pkcs1',
        },
        privateKeyEncoding: {
            cipher: 'some-cipher',
            format: 'pem',
            passphrase: 'secret',
            type: 'pkcs8',
        },
    });

    const ecResNoPassphrase: {
        publicKey: string;
        privateKey: string;
    } = crypto.generateKeyPairSync('ec', {
        namedCurve: 'curve',
        publicKeyEncoding: {
            format: 'pem',
            type: 'pkcs1',
        },
        privateKeyEncoding: {
            format: 'pem',
            type: 'pkcs8',
        },
    });
}

{
    crypto.generateKeyPair(
        'rsa',
        {
            modulusLength: 123,
            publicKeyEncoding: {
                format: 'der',
                type: 'pkcs1',
            },
            privateKeyEncoding: {
                cipher: 'some-cipher',
                format: 'pem',
                passphrase: 'secret',
                type: 'pkcs8',
            },
        },
        (err: NodeJS.ErrnoException | null, publicKey: Buffer, privateKey: string) => {},
    );

    crypto.generateKeyPair(
        'dsa',
        {
            modulusLength: 123,
            divisorLength: 123,
            publicKeyEncoding: {
                format: 'pem',
                type: 'spki',
            },
            privateKeyEncoding: {
                cipher: 'some-cipher',
                format: 'der',
                passphrase: 'secret',
                type: 'pkcs8',
            },
        },
        (err: NodeJS.ErrnoException | null, publicKey: string, privateKey: Buffer) => {},
    );

    crypto.generateKeyPair(
        'ec',
        {
            namedCurve: 'curve',
            publicKeyEncoding: {
                format: 'pem',
                type: 'pkcs1',
            },
            privateKeyEncoding: {
                cipher: 'some-cipher',
                format: 'pem',
                passphrase: 'secret',
                type: 'pkcs8',
            },
        },
        (err: NodeJS.ErrnoException | null, publicKey: string, privateKey: string) => {},
    );

    crypto.generateKeyPair(
        'ed25519',
        {
            publicKeyEncoding: {
                format: 'pem',
                type: 'spki',
            },
            privateKeyEncoding: {
                format: 'pem',
                type: 'pkcs8',
            },
        },
        (err: NodeJS.ErrnoException | null, publicKey: string, privateKey: string) => {},
    );

    crypto.generateKeyPair(
        'x25519',
        {
            publicKeyEncoding: {
                format: 'pem',
                type: 'spki',
            },
            privateKeyEncoding: {
                format: 'pem',
                type: 'pkcs8',
            },
        },
        (err: NodeJS.ErrnoException | null, publicKey: string, privateKey: string) => {},
    );
}

{
    const generateKeyPairPromisified = promisify(crypto.generateKeyPair);

    const rsaRes: Promise<{
        publicKey: Buffer;
        privateKey: string;
    }> = generateKeyPairPromisified('rsa', {
        modulusLength: 123,
        publicKeyEncoding: {
            format: 'der',
            type: 'pkcs1',
        },
        privateKeyEncoding: {
            cipher: 'some-cipher',
            format: 'pem',
            passphrase: 'secret',
            type: 'pkcs8',
        },
    });

    const dsaRes: Promise<{
        publicKey: string;
        privateKey: Buffer;
    }> = generateKeyPairPromisified('dsa', {
        modulusLength: 123,
        divisorLength: 123,
        publicKeyEncoding: {
            format: 'pem',
            type: 'spki',
        },
        privateKeyEncoding: {
            cipher: 'some-cipher',
            format: 'der',
            passphrase: 'secret',
            type: 'pkcs8',
        },
    });

    const ecRes: Promise<{
        publicKey: string;
        privateKey: string;
    }> = generateKeyPairPromisified('ec', {
        namedCurve: 'curve',
        publicKeyEncoding: {
            format: 'pem',
            type: 'pkcs1',
        },
        privateKeyEncoding: {
            cipher: 'some-cipher',
            format: 'pem',
            passphrase: 'secret',
            type: 'pkcs8',
        },
    });

    const ed25519Res: Promise<{
        publicKey: string;
        privateKey: string;
    }> = generateKeyPairPromisified('ed25519', {
        publicKeyEncoding: {
            format: 'pem',
            type: 'spki',
        },
        privateKeyEncoding: {
            format: 'pem',
            type: 'pkcs8',
        },
    });

    const x25519Res: Promise<{
        publicKey: string;
        privateKey: string;
    }> = generateKeyPairPromisified('x25519', {
        publicKeyEncoding: {
            format: 'pem',
            type: 'spki',
        },
        privateKeyEncoding: {
            format: 'pem',
            type: 'pkcs8',
        },
    });
}

{
    const fips: 0 | 1 = crypto.getFips();
}

{
    crypto.createPrivateKey(Buffer.from('asdf'));
    crypto.createPrivateKey({
        key: 'asd',
        format: 'der',
    });
}

{
    const keyObject = crypto.createSecretKey(Buffer.from('asdf')); // $ExpectType KeyObject
    keyObject instanceof crypto.KeyObject;
    assert.equal(keyObject.symmetricKeySize, 4);
    assert.equal(keyObject.type, 'secret');
}

{
    const { privateKey, publicKey } = crypto.generateKeyPairSync('ec', {
        namedCurve: 'sect239k1',
    });

    const sign: crypto.Signer = crypto.createSign('SHA256');
    sign.write('some data to sign');
    sign.end();
    const signature: string = sign.sign(privateKey, 'hex');

    const verify: crypto.Verify = crypto.createVerify('SHA256');
    verify.write('some data to sign');
    verify.end();
    verify.verify(publicKey, signature); // $ExpectType boolean

    // ensure that instanceof works
    verify instanceof crypto.Verify;
    sign instanceof crypto.Signer;
}

{
    const { privateKey, publicKey } = crypto.generateKeyPairSync('rsa', {
        modulusLength: 2048,
    });

    const sign: crypto.Signer = crypto.createSign('SHA256');
    sign.update('some data to sign');
    sign.end();
    const signature: Buffer = sign.sign(privateKey);

    const verify: crypto.Verify = crypto.createVerify('SHA256');
    verify.update('some data to sign');
    verify.end();
    verify.verify(publicKey, signature); // $ExpectType boolean
}

{
    // crypto.diffieHellman_test
    const x25519Keys1 = crypto.generateKeyPairSync('x25519', {
        publicKeyEncoding: {
            type: 'spki',
            format: 'pem',
        },
        privateKeyEncoding: {
            type: 'pkcs8',
            format: 'pem',
        },
    });
    const privateKeyObject1 = crypto.createPrivateKey({ key: x25519Keys1.privateKey });
    const publicKeyObject1 = crypto.createPublicKey({ key: x25519Keys1.publicKey });

    const x25519Keys2 = crypto.generateKeyPairSync('x25519', {
        publicKeyEncoding: {
            type: 'spki',
            format: 'pem',
        },
        privateKeyEncoding: {
            type: 'pkcs8',
            format: 'pem',
        },
    });
    const privateKeyObject2 = crypto.createPrivateKey({ key: x25519Keys2.privateKey });
    const publicKeyObject2 = crypto.createPublicKey({ key: x25519Keys2.publicKey });

    const sharedSecret1 = crypto.diffieHellman({ privateKey: privateKeyObject1, publicKey: publicKeyObject2 });
    const sharedSecret2 = crypto.diffieHellman({ privateKey: privateKeyObject2, publicKey: publicKeyObject1 });
    assert.equal(sharedSecret1, sharedSecret2);
}

{
    // crypto_constants_test
    let num: number;
    let str: string;

    num = crypto.constants.OPENSSL_VERSION_NUMBER;
    num = crypto.constants.SSL_OP_ALL;
    num = crypto.constants.SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION;
    num = crypto.constants.SSL_OP_CIPHER_SERVER_PREFERENCE;
    num = crypto.constants.SSL_OP_CISCO_ANYCONNECT;
    num = crypto.constants.SSL_OP_COOKIE_EXCHANGE;
    num = crypto.constants.SSL_OP_CRYPTOPRO_TLSEXT_BUG;
    num = crypto.constants.SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS;
    num = crypto.constants.SSL_OP_EPHEMERAL_RSA;
    num = crypto.constants.SSL_OP_LEGACY_SERVER_CONNECT;
    num = crypto.constants.SSL_OP_MICROSOFT_BIG_SSLV3_BUFFER;
    num = crypto.constants.SSL_OP_MICROSOFT_SESS_ID_BUG;
    num = crypto.constants.SSL_OP_MSIE_SSLV2_RSA_PADDING;
    num = crypto.constants.SSL_OP_NETSCAPE_CA_DN_BUG;
    num = crypto.constants.SSL_OP_NETSCAPE_CHALLENGE_BUG;
    num = crypto.constants.SSL_OP_NETSCAPE_DEMO_CIPHER_CHANGE_BUG;
    num = crypto.constants.SSL_OP_NETSCAPE_REUSE_CIPHER_CHANGE_BUG;
    num = crypto.constants.SSL_OP_NO_COMPRESSION;
    num = crypto.constants.SSL_OP_NO_QUERY_MTU;
    num = crypto.constants.SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION;
    num = crypto.constants.SSL_OP_NO_SSLv2;
    num = crypto.constants.SSL_OP_NO_SSLv3;
    num = crypto.constants.SSL_OP_NO_TICKET;
    num = crypto.constants.SSL_OP_NO_TLSv1;
    num = crypto.constants.SSL_OP_NO_TLSv1_1;
    num = crypto.constants.SSL_OP_NO_TLSv1_2;
    num = crypto.constants.SSL_OP_PKCS1_CHECK_1;
    num = crypto.constants.SSL_OP_PKCS1_CHECK_2;
    num = crypto.constants.SSL_OP_SINGLE_DH_USE;
    num = crypto.constants.SSL_OP_SINGLE_ECDH_USE;
    num = crypto.constants.SSL_OP_SSLEAY_080_CLIENT_DH_BUG;
    num = crypto.constants.SSL_OP_SSLREF2_REUSE_CERT_TYPE_BUG;
    num = crypto.constants.SSL_OP_TLS_BLOCK_PADDING_BUG;
    num = crypto.constants.SSL_OP_TLS_D5_BUG;
    num = crypto.constants.SSL_OP_TLS_ROLLBACK_BUG;
    num = crypto.constants.ENGINE_METHOD_RSA;
    num = crypto.constants.ENGINE_METHOD_DSA;
    num = crypto.constants.ENGINE_METHOD_DH;
    num = crypto.constants.ENGINE_METHOD_RAND;
    num = crypto.constants.ENGINE_METHOD_EC;
    num = crypto.constants.ENGINE_METHOD_CIPHERS;
    num = crypto.constants.ENGINE_METHOD_DIGESTS;
    num = crypto.constants.ENGINE_METHOD_PKEY_METHS;
    num = crypto.constants.ENGINE_METHOD_PKEY_ASN1_METHS;
    num = crypto.constants.ENGINE_METHOD_ALL;
    num = crypto.constants.ENGINE_METHOD_NONE;
    num = crypto.constants.DH_CHECK_P_NOT_SAFE_PRIME;
    num = crypto.constants.DH_CHECK_P_NOT_PRIME;
    num = crypto.constants.DH_UNABLE_TO_CHECK_GENERATOR;
    num = crypto.constants.DH_NOT_SUITABLE_GENERATOR;
    num = crypto.constants.ALPN_ENABLED;
    num = crypto.constants.RSA_PKCS1_PADDING;
    num = crypto.constants.RSA_SSLV23_PADDING;
    num = crypto.constants.RSA_NO_PADDING;
    num = crypto.constants.RSA_PKCS1_OAEP_PADDING;
    num = crypto.constants.RSA_X931_PADDING;
    num = crypto.constants.RSA_PKCS1_PSS_PADDING;
    num = crypto.constants.RSA_PSS_SALTLEN_DIGEST;
    num = crypto.constants.RSA_PSS_SALTLEN_MAX_SIGN;
    num = crypto.constants.RSA_PSS_SALTLEN_AUTO;
    num = crypto.constants.POINT_CONVERSION_COMPRESSED;
    num = crypto.constants.POINT_CONVERSION_UNCOMPRESSED;
    num = crypto.constants.POINT_CONVERSION_HYBRID;

    str = crypto.constants.defaultCoreCipherList;
    str = crypto.constants.defaultCipherList;
}

{
    const sig: Buffer = crypto.sign('md5', Buffer.from(''), 'mykey');

    crypto.sign('md5', Buffer.from(''), 'mykey', (error: Error | null, data: Buffer) => { });

    const correct: boolean = crypto.verify('md5', sig, 'mykey', sig);
    crypto.verify('md5', sig, 'mykey', sig, (error: Error | null, result: boolean) => { });
}

{
    const key = {
        key: 'test',
        oaepHash: 'sha1',
        oaepLabel: Buffer.from('asd'),
    };
    const buf: Buffer = crypto.publicEncrypt(key, Buffer.from([]));
    const dec: Buffer = crypto.publicDecrypt(key, buf);

    const bufP: Buffer = crypto.privateEncrypt(key, Buffer.from([]));
    const decp: Buffer = crypto.privateDecrypt(key, bufP);
}

// crypto.randomInt
{
    const callback = (error: Error | null, value: number): void => {};

    const a: number = crypto.randomInt(10);
    const b: number = crypto.randomInt(1, 10);
    crypto.randomInt(10, callback);
    crypto.randomInt(1, 10, callback);
}

{
    const key = crypto.createPrivateKey('pkey');
    crypto.sign('sha256', Buffer.from('asd'), {
        key: Buffer.from('keylike'),
        dsaEncoding: 'der',
    });
    crypto
        .createSign('sha256')
        .update(Buffer.from('asd'))
        .sign({
            key: Buffer.from('keylike'),
            dsaEncoding: 'der',
        });
    crypto.sign('sha256', Buffer.from('asd'), {
        key,
        dsaEncoding: 'der',
    });
    crypto.createSign('sha256').update(Buffer.from('asd')).sign({
        key,
        dsaEncoding: 'der',
    });
}

{
    const key = crypto.createPublicKey('pkey');
    crypto.verify(
        'sha256',
        Buffer.from('asd'),
        {
            key: Buffer.from('keylike'),
            dsaEncoding: 'der',
        },
        Buffer.from('sig'),
    );
    crypto
        .createVerify('sha256')
        .update(Buffer.from('asd'))
        .verify(
            {
                key: Buffer.from('keylike'),
                dsaEncoding: 'der',
            },
            Buffer.from('sig'),
        );
    crypto.verify(
        'sha256',
        Buffer.from('asd'),
        {
            key,
            dsaEncoding: 'der',
        },
        Buffer.from('sig'),
    );
    crypto.createVerify('sha256').update(Buffer.from('asd')).verify(
        {
            key,
            dsaEncoding: 'der',
        },
        Buffer.from('sig'),
    );
}

{
    const cipher = crypto.createCipheriv('aes-256-gcm', Buffer.from('key'), Buffer.from('iv'), { authTagLength: 16 });
    cipher.setAAD(Buffer.from('iv'));
    cipher.setAAD(new Uint8Array());
}

{
    crypto.generateKeyPairSync('x25519').privateKey; // $ExpectType KeyObject
    crypto.generateKeyPairSync('x448').privateKey; // $ExpectType KeyObject
    crypto.generateKeyPairSync('ed25519').privateKey; // $ExpectType KeyObject
    crypto.generateKeyPairSync('ed448').privateKey; // $ExpectType KeyObject

    [undefined, {}].forEach(opts => {
        crypto.generateKeyPair('x25519', opts, (err, publicKey, privateKey) => {
            privateKey; // $ExpectType KeyObject
            publicKey; // $ExpectType KeyObject
        });
        crypto.generateKeyPair('x448', opts, (err, publicKey, privateKey) => {
            privateKey; // $ExpectType KeyObject
            publicKey; // $ExpectType KeyObject
        });
        crypto.generateKeyPair('ed25519', opts, (err, publicKey, privateKey) => {
            privateKey; // $ExpectType KeyObject
            publicKey; // $ExpectType KeyObject
        });
        crypto.generateKeyPair('ed448', opts, (err, publicKey, privateKey) => {
            privateKey; // $ExpectType KeyObject
            publicKey; // $ExpectType KeyObject
        });
    });

    const pGenerateKeyPair = promisify(crypto.generateKeyPair);
    [undefined, {}].forEach(async opts => {
        (await pGenerateKeyPair('x25519', opts)).privateKey; // $ExpectType KeyObject
        (await pGenerateKeyPair('x448', opts)).privateKey; // $ExpectType KeyObject
        (await pGenerateKeyPair('ed25519', opts)).privateKey; // $ExpectType KeyObject
        (await pGenerateKeyPair('ed448', opts)).privateKey; // $ExpectType KeyObject
    });
}

{
    crypto.createSecretKey(new Uint8Array([0])); // $ExpectType KeyObject
}

{
    crypto.hkdf("sha256", Buffer.alloc(32, 0xFF), Buffer.alloc(16, 0x00), "SomeInfo", 42, (err, derivedKey) => {});
}

{
    const derivedKey = crypto.hkdfSync("sha256", Buffer.alloc(32, 0xFF), Buffer.alloc(16, 0x00), "SomeInfo", 42);
}

{
    const usage: crypto.SecureHeapUsage = crypto.secureHeapUsed();
}

{
    crypto.randomUUID({});
    crypto.randomUUID({ disableEntropyCache: true });
    crypto.randomUUID({ disableEntropyCache: false });
    crypto.randomUUID();
}

{
    const cert = new crypto.X509Certificate('dummy');
    cert.ca; // $ExpectType boolean
    cert.fingerprint; // $ExpectType string
    cert.fingerprint256; // $ExpectType string
    cert.infoAccess; // $ExpectType string
    cert.issuer; // $ExpectType string
    cert.issuerCertificate; // $ExpectType X509Certificate | undefined
    cert.keyUsage; // $ExpectType string[]
    cert.publicKey; // $ExpectType KeyObject
    cert.raw; // $ExpectType Buffer
    cert.serialNumber; // $ExpectType string
    cert.subject; // $ExpectType string
    cert.subjectAltName; // $ExpectType string
    cert.validFrom; // $ExpectType string
    cert.validTo; // $ExpectType string

    const checkOpts: crypto.X509CheckOptions = {
        multiLabelWildcards: true,
        partialWildcards: true,
        singleLabelSubdomains: true,
        subject: 'always',
        wildcards: true,
    };

    cert.checkEmail('test@test.com'); // $ExpectType string | undefined
    cert.checkEmail('test@test.com', checkOpts); // $ExpectType string | undefined
    cert.checkHost('test.com'); // $ExpectType string | undefined
    cert.checkHost('test.com', checkOpts); // $ExpectType string | undefined
    cert.checkIP('1.1.1.1'); // $ExpectType string | undefined
    cert.checkIP('1.1.1.1', checkOpts); // $ExpectType string | undefined
    cert.checkIssued(new crypto.X509Certificate('dummycert')); // $ExpectType boolean
    cert.checkPrivateKey(crypto.createPrivateKey('dummy')); // $ExpectType boolean
    cert.toLegacyObject(); // $ExpectType PeerCertificate
    cert.toJSON(); // $ExpectType string
    cert.toString(); // $ExpectType string
}

{
    crypto.generatePrime(123, (err: Error | null, prime: ArrayBuffer) => {});
    crypto.generatePrime(123, { rem: 123n, add: 123n }, (err: Error | null, prime: ArrayBuffer) => {});
    crypto.generatePrime(123, { bigint: true }, (err: Error | null, prime: bigint) => {});
    crypto.generatePrime(123, { bigint: Math.random() > 0 }, (err: Error | null, prime: ArrayBuffer | bigint) => {});

    crypto.generatePrimeSync(123); // $ExpectType ArrayBuffer
    crypto.generatePrimeSync(123, { rem: 123n, add: 123n }); // $ExpectType ArrayBuffer
    crypto.generatePrimeSync(123, { bigint: true }); // $ExpectType bigint
    crypto.generatePrimeSync(123, { bigint: Math.random() > 0 }); // $ExpectType bigint | ArrayBuffer

    crypto.checkPrime(123n, (err: Error | null, result: boolean) => {});
    crypto.checkPrime(123n, { checks: 123 }, (err: Error | null, result: boolean) => {});

    crypto.checkPrimeSync(123n); // $ExpectType boolean
    crypto.checkPrimeSync(123n, { checks: 123 }); // $ExpectType boolean
}

{
    crypto.generateKeyPair('ec', { namedCurve: 'P-256' }, (err, publicKey, privateKey) => {
        for (const keyObject of [publicKey, privateKey]) {
            if (keyObject.asymmetricKeyDetails) {
                if (keyObject.asymmetricKeyDetails.modulusLength) {
                    const modulusLength: number = keyObject.asymmetricKeyDetails.modulusLength;
                }
                if (keyObject.asymmetricKeyDetails.publicExponent) {
                    const publicExponent: bigint = keyObject.asymmetricKeyDetails.publicExponent;
                }
                if (keyObject.asymmetricKeyDetails.divisorLength) {
                    const divisorLength: number = keyObject.asymmetricKeyDetails.divisorLength;
                }
                if (keyObject.asymmetricKeyDetails.namedCurve) {
                    const namedCurve: string = keyObject.asymmetricKeyDetails.namedCurve;
                }
            }
        }
    });
}
