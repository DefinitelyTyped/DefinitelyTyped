import * as cryptoAsync from '@ronomon/crypto-async';

(() => {
  const algorithm = 'AES-256-CTR';
  const encrypt = cryptoAsync.CipherDirection.Encrypt;
  const key = Buffer.alloc(32);
  const iv = Buffer.alloc(16);
  const plaintext = Buffer.alloc(128);
  cryptoAsync.cipher(algorithm, encrypt, key, iv, plaintext,
    (error, ciphertext) => {
      if (error) throw error;
      console.log(ciphertext.toString('hex'));
      cryptoAsync.cipher(algorithm, cryptoAsync.CipherDirection.Decrypt, key, iv, ciphertext,
        (error, plaintext) => {
          if (error) throw error;
          console.log(plaintext.toString('hex'));
        }
      );
    }
  );
})();

(() => {
  const algorithm = 'AES-256-CTR';
  const encrypt = 1; // 0 = Decrypt, 1 = Encrypt
  const key = Buffer.alloc(1024);
  const keyOffset = 4;
  const keySize = 32;
  const iv = Buffer.alloc(32);
  const ivOffset = 2;
  const ivSize = 16;
  const source = Buffer.alloc(1024 * 1024);
  const sourceOffset = 512;
  const sourceSize = 32;
  const target = Buffer.alloc(1024 * 1024);
  const targetOffset = 32768;
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
      if (error) throw error;
      const slice = target.slice(targetOffset, targetOffset + targetSize);
      console.log(slice.toString('hex'));
    }
  );
})();

(() => {
  const algorithm = 'SHA256';
  const source = Buffer.alloc(1024 * 1024);
  cryptoAsync.hash(algorithm, source,
    (error, hash) => {
      if (error) throw error;
      console.log(hash.toString('hex'));
    }
  );
})();

(() => {
  const algorithm = 'SHA256';
  const source = Buffer.alloc(1024 * 1024);
  const sourceOffset = 512;
  const sourceSize = 65536;
  const target = Buffer.alloc(1024 * 1024);
  const targetOffset = 32768;
  cryptoAsync.hash(
    algorithm,
    source,
    sourceOffset,
    sourceSize,
    target,
    targetOffset,
    (error, targetSize) => {
      if (error) throw error;
      const slice = target.slice(targetOffset, targetOffset + targetSize);
      console.log(slice.toString('hex'));
    }
  );
})();

(() => {
  const algorithm = 'SHA256';
  const key = Buffer.alloc(1024);
  const source = Buffer.alloc(1024 * 1024);
  cryptoAsync.hmac(algorithm, key, source,
    (error, hmac) => {
      if (error) throw error;
      console.log(hmac.toString('hex'));
    }
  );
})();

(() => {
  const algorithm = 'SHA256';
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
      if (error) throw error;
      const slice = target.slice(targetOffset, targetOffset + targetSize);
      console.log(slice.toString('hex'));
    }
  );
})();
