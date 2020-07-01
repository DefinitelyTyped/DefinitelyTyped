// Type definitions for @ronomon/crypto-async 2.0
// Project: https://github.com/ronomon/crypto-async
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node"/>

// tslint:disable-next-line no-single-declare-module
declare module "@ronomon/crypto-async" {
  function cipher(algorithm: string,
                  cipherDirection: CipherDirection,
                  key: Buffer,
                  iv: Buffer,
                  plaintext: Buffer,
                  cb: (error: Error | undefined, ciphertext: Buffer) => void): void;

  function cipher(algorithm: string,
                  cipherDirection: CipherDirection,
                  key: Buffer,
                  keyOffset: number,
                  keySize: number,
                  iv: Buffer,
                  ivOffset: number,
                  ivSize: number,
                  source: Buffer,
                  sourceOffset: number,
                  sourceSize: number,
                  target: Buffer,
                  targetOffset: number,
                  cb: (error: Error | undefined, targetSize: number) => void): void;

  function hash(algorithm: string,
                source: Buffer,
                cb: (error: Error | undefined, hash: Buffer) => void): void;

  function hash(algorithm: string,
                source: Buffer,
                sourceOffset: number,
                sourceSize: number,
                target: Buffer,
                targetOffset: number,
                cb: (error: Error | undefined, targetSize: number) => void): void;

  function hmac(algorithm: string,
                key: Buffer,
                source: Buffer,
                cb: (error: Error | undefined, hmac: Buffer) => void): void;

  function hmac(algorithm: string,
                key: Buffer,
                keyOffset: number,
                keySize: number,
                source: Buffer,
                sourceOffset: number,
                sourceSize: number,
                target: Buffer,
                targetOffset: number,
                cb: (error: Error | undefined, targetSize: number) => void): void;

  const enum CipherDirection {
    Decrypt,
    Encrypt
  }
}
