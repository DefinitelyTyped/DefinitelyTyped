// Type definitions for xsalsa20 1.1
// Project: https://github.com/mafintosh/xsalsa20
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export = XSalsa20;

declare const XSalsa20: XSalsa20.XSalsa20;

declare namespace XSalsa20 {
    interface XSalsa20 {
        /**
         * Bytes required for the nonce buffer.
         */
        readonly NONCEBYTES: number;

        /**
         * Bytes required for the key buffer.
         */
        readonly KEYBYTES: number;

        /**
         * Create a new xor instance.
         *
         * @param nonce Should be 24 bytes.
         * @param key Should be 32 bytes.
         */
        (nonce: Uint8Array | Buffer, key: Uint8Array | Buffer): Xor;

        /**
         * Create a new xor instance.
         *
         * @param nonce Should be 24 bytes.
         * @param key Should be 32 bytes.
         */
        new (nonce: Uint8Array | Buffer, key: Uint8Array | Buffer): Xor;
    }

    interface Xor {
        /**
         * Update the xor instance with a new input buffer. Optionally you can pass in an output buffer.
         *
         * @example
         * import * as crypto from 'crypto';
         * import xsalsa20 = require('xsalsa20');
         *
         * const key = crypto.randomBytes(xsalsa20.KEYBYTES);
         * const nonce = crypto.randomBytes(xsalsa20.NONCEBYTES);
         *
         * const xor = xsalsa20(nonce, key);
         *
         * console.log(xor.update(Buffer.from('hello')));
         * console.log(xor.update(Buffer.from('world')));
         *
         * xor.finalize();
         */
        update<TOut extends Uint8Array | Buffer = Uint8Array>(input: Uint8Array | Buffer, output?: TOut): TOut;

        /**
         * Clears internal state. Call this method last.
         */
        finalize(): void;
    }
}
