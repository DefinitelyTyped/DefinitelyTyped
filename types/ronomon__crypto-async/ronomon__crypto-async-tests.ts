import * as cryptoAsync from '@ronomon/crypto-async';

// test type exports
type CipherDir = cryptoAsync.CipherDirection;
type CipherDirDec = cryptoAsync.CipherDirectionDecrypt;
type CipherDirEnc = cryptoAsync.CipherDirectionEncrypt;

cryptoAsync.CIPHER_BLOCK_MAX; // $ExpectType number
cryptoAsync.E_AAD; // $ExpectType string
cryptoAsync.E_AAD_INVALID; // $ExpectType string
cryptoAsync.E_AAD_OFFSET; // $ExpectType string
cryptoAsync.E_AAD_RANGE; // $ExpectType string
cryptoAsync.E_AAD_SIZE; // $ExpectType string
cryptoAsync.E_ALGORITHM; // $ExpectType string
cryptoAsync.E_ALGORITHM_DISABLED; // $ExpectType string
cryptoAsync.E_ALGORITHM_UNKNOWN; // $ExpectType string
cryptoAsync.E_ARGUMENTS; // $ExpectType string
cryptoAsync.E_BUFFER_LENGTH; // $ExpectType string
cryptoAsync.E_CALLBACK; // $ExpectType string
cryptoAsync.E_CANCELLED; // $ExpectType string
cryptoAsync.E_CORRUPT; // $ExpectType string
cryptoAsync.E_ENCRYPT; // $ExpectType string
cryptoAsync.E_IV; // $ExpectType string
cryptoAsync.E_IV_INVALID; // $ExpectType string
cryptoAsync.E_IV_OFFSET; // $ExpectType string
cryptoAsync.E_IV_RANGE; // $ExpectType string
cryptoAsync.E_IV_SIZE; // $ExpectType string
cryptoAsync.E_KEY; // $ExpectType string
cryptoAsync.E_KEY_INVALID; // $ExpectType string
cryptoAsync.E_KEY_OFFSET; // $ExpectType string
cryptoAsync.E_KEY_RANGE; // $ExpectType string
cryptoAsync.E_KEY_SIZE; // $ExpectType string
cryptoAsync.E_OOM; // $ExpectType string
cryptoAsync.E_SOURCE; // $ExpectType string
cryptoAsync.E_SOURCE_OFFSET; // $ExpectType string
cryptoAsync.E_SOURCE_RANGE; // $ExpectType string
cryptoAsync.E_SOURCE_SIZE; // $ExpectType string
cryptoAsync.E_TAG; // $ExpectType string
cryptoAsync.E_TAG_INVALID; // $ExpectType string
cryptoAsync.E_TAG_OFFSET; // $ExpectType string
cryptoAsync.E_TAG_RANGE; // $ExpectType string
cryptoAsync.E_TAG_SIZE; // $ExpectType string
cryptoAsync.E_TARGET; // $ExpectType string
cryptoAsync.E_TARGET_OFFSET; // $ExpectType string
cryptoAsync.E_TARGET_RANGE; // $ExpectType string

{
    const algorithm = 'aes-256-ctr';
    const encrypt = 1;
    const decrypt = 0;
    const key = Buffer.alloc(32);
    const iv = Buffer.alloc(16);
    const plaintext = Buffer.alloc(128);
    cryptoAsync.cipher(algorithm, encrypt, key, iv, plaintext, (error, ciphertext) => {
        error; // $ExpectType Error | undefined
        ciphertext; // $ExpectType Buffer
    });

    cryptoAsync.cipher(algorithm, decrypt, key, iv, plaintext, (error, plaintext) => {
        error; // $ExpectType Error | undefined
        plaintext; // $ExpectType Buffer
    });
}

{
    const algorithm = 'chacha20-poly1305';
    const encrypt = 1;
    const decrypt = 0;
    const key = Buffer.alloc(32);
    const iv = Buffer.alloc(12);
    const plaintext = Buffer.alloc(128);
    const aad = Buffer.alloc(256);
    const tag = Buffer.alloc(16);
    cryptoAsync.cipher(algorithm, encrypt, key, iv, plaintext, aad, tag, (error, ciphertext) => {
        error; // $ExpectType Error | undefined
        ciphertext; // $ExpectType Buffer
    });

    cryptoAsync.cipher(algorithm, decrypt, key, iv, plaintext, aad, tag, (error, plaintext) => {
        error; // $ExpectType Error | undefined
        plaintext; // $ExpectType Buffer
    });
}

{
    const algorithm = 'aes-256-ctr';
    const encrypt = 1; // Encrypt
    const key = Buffer.alloc(1024);
    const keyOffset = 4;
    const keySize = 32;
    const iv = Buffer.alloc(32);
    const ivOffset = 2;
    const ivSize = 16;
    const source = Buffer.alloc(1024 * 1024);
    const sourceOffset = 512;
    const sourceSize = 32;
    const target = Buffer.alloc(sourceSize + cryptoAsync.CIPHER_BLOCK_MAX);
    const targetOffset = 0;
    cryptoAsync.cipher(
        algorithm,
        encrypt,
        key,
        keyOffset,
        keySize,
        iv,
        ivOffset,
        ivSize,
        source,
        sourceOffset,
        sourceSize,
        target,
        targetOffset,
        (error, targetSize) => {
            error; // $ExpectType Error | undefined
            targetSize; // $ExpectType number
        },
    );
}

{
    const algorithm = 'chacha20-poly1305';
    const encrypt = 1;
    const key = Buffer.alloc(1024);
    const keyOffset = 4;
    const keySize = 32;
    const iv = Buffer.alloc(32);
    const ivOffset = 2;
    const ivSize = 12;
    const source = Buffer.alloc(1024 * 1024);
    const sourceOffset = 512;
    const sourceSize = 32;
    const target = Buffer.alloc(sourceSize + cryptoAsync.CIPHER_BLOCK_MAX);
    const targetOffset = 0;
    const aad = Buffer.alloc(1024);
    const aadOffset = 0;
    const aadSize = 10;
    const tag = Buffer.alloc(16);
    const tagOffset = 0;
    const tagSize = 16;
    cryptoAsync.cipher(
        algorithm,
        encrypt,
        key,
        keyOffset,
        keySize,
        iv,
        ivOffset,
        ivSize,
        source,
        sourceOffset,
        sourceSize,
        target,
        targetOffset,
        aad,
        aadOffset,
        aadSize,
        tag,
        tagOffset,
        tagSize,
        (error, targetSize) => {
            error; // $ExpectType Error | undefined
            targetSize; // $ExpectType number
        },
    );
}

{
    const algorithm = 'sha256';
    const source = Buffer.alloc(1024 * 1024);
    cryptoAsync.hash(algorithm, source, (error, hash) => {
        error; // $ExpectType Error | undefined
        hash; // $ExpectType Buffer
    });
}

{
    const algorithm = 'sha256';
    const source = Buffer.alloc(1024 * 1024);
    const sourceOffset = 512;
    const sourceSize = 65536;
    const target = Buffer.alloc(1024 * 1024);
    const targetOffset = 32768;
    cryptoAsync.hash(algorithm, source, sourceOffset, sourceSize, target, targetOffset, (error, targetSize) => {
        error; // $ExpectType Error | undefined
        targetSize; // $ExpectType number
    });
}

{
    const algorithm = 'sha256';
    const key = Buffer.alloc(1024);
    const source = Buffer.alloc(1024 * 1024);
    cryptoAsync.hmac(algorithm, key, source, (error, hmac) => {
        error; // $ExpectType Error | undefined
        hmac; // $ExpectType Buffer
    });
}

{
    const algorithm = 'sha256';
    const key = Buffer.alloc(1024);
    const keyOffset = 4;
    const keySize = 8;
    const source = Buffer.alloc(1024 * 1024);
    const sourceOffset = 512;
    const sourceSize = 65536;
    const target = Buffer.alloc(1024 * 1024);
    const targetOffset = 32768;
    cryptoAsync.hmac(
        algorithm,
        key,
        keyOffset,
        keySize,
        source,
        sourceOffset,
        sourceSize,
        target,
        targetOffset,
        (error, targetSize) => {
            error; // $ExpectType Error | undefined
            targetSize; // $ExpectType number
        },
    );
}
