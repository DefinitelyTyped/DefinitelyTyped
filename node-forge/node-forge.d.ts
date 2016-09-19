// Type definitions for node-forge 0.6.42
// Project: https://github.com/digitalbazaar/forge
// Definitions by: Seth Westphal <https://github.com/westy92>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "node-forge" {

  export namespace pki {

    export type PEM = string;
    export type Key = any;

    export interface KeyPair {
      publicKey: Key;
      privateKey: Key;
    }

    export function privateKeyToPem(key: Key, maxline?: number): PEM;
    export function publicKeyToPem(key: Key, maxline?: number): PEM;

    export namespace rsa {

      export interface GenerateKeyPairOptions {
        bits?: number;
        e?: number;
        workerScript?: string;
        workers?: number;
        workLoad?: number;
        prng?: any;
        algorithm?: string;
      }

      export function generateKeyPair(bits?: number, e?: number, callback?: (err: Error, keypair: KeyPair) => void): KeyPair;
      export function generateKeyPair(options?: GenerateKeyPairOptions, callback?: (err: Error, keypair: KeyPair) => void): KeyPair;

    }

  }

}
