import CipherState = require("./cipher");
import * as curve from "./dh";

export = SymmetricState;

declare class SymmetricState extends CipherState {
    readonly DH_ALG: string;
    curve: SymmetricState.Curve | null;
    digest: Buffer | Uint8Array | null;
    chainingKey: Buffer | Uint8Array | null;
    offset: number | null;

    constructor(options?: SymmetricState.Options);

    mixHash(data: Buffer | Uint8Array): void;
    mixKey(remoteKey: Buffer | Uint8Array, localKey: curve.KeyPair): void;
    encryptAndHash(plaintext: string | Buffer | Uint8Array): Buffer | Uint8Array;
    decryptAndHash(ciphertext: string | Buffer | Uint8Array): Buffer | Uint8Array;
    getHandshakeHash(out?: Buffer | Uint8Array): Buffer | Uint8Array;
    split(): [Buffer, Buffer] | [Uint8Array, Uint8Array];
    _clear(): void;

    static readonly alg: string;
}

declare namespace SymmetricState {
    interface Options {
        /**
         * A `curve` module for performing Noise over other curves.
         */
        curve?: Curve;
    }

    interface Curve {
        DHLEN: number;
        PKLEN: number;
        SKLEN: number;
        ALG: string;

        generateKeyPair(privateKey?: Buffer | Uint8Array): curve.KeyPair;
        dh(publicKey: Buffer | Uint8Array, keyPair: curve.KeyPair): Buffer | Uint8Array;
    }
}
