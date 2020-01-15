// Type definitions for eth-lightwallet 3.0
// Project: https://github.com/ConsenSys/eth-lightwallet#readme
// Definitions by: Leonid Logvinov <https://github.com/LogvinovLeon>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

/// <reference types="node" />

export interface ECSignatureBuffer {
    v: number;
    r: Buffer;
    s: Buffer;
}
export namespace signing {
    function signTx(
        keystore: keystore,
        pwDerivedKey: Uint8Array,
        rawTx: string,
        signingAddress: string
    ): string;
    function signMsg(
        keystore: keystore,
        pwDerivedKey: Uint8Array,
        rawMsg: string,
        signingAddress: string
    ): ECSignatureBuffer;
    function signMsgHash(
        keystore: keystore,
        pwDerivedKey: Uint8Array,
        msgHash: string,
        signingAddress: string
    ): ECSignatureBuffer;
    function concatSig(signature: any): string;
}

export class keystore {
    static createVault(
        options: any,
        callback?: (error: Error, keystore: keystore) => void
    ): keystore;
    static generateRandomSeed(): string;
    static isSeedValid(seed: string): boolean;
    static deserialize(keystore: string): keystore;
    serialize(): string;
    keyFromPassword(
        password: string,
        callback?: (error: Error, pwDerivedKey: Uint8Array) => void
    ): Uint8Array;
    isDerivedKeyCorrect(pwDerivedKey: Uint8Array): boolean;
    generateNewAddress(
        pwDerivedKey: Uint8Array,
        numberOfAddresses: number
    ): void;
    getSeed(pwDerivedKey: Uint8Array): string;
    exportPrivateKey(address: string, pwDerivedKey: Uint8Array): string;
    getAddresses(): string[];
}

export interface VaultOptions {
    password: string;
    seedPhrase: string;
    salt?: string;
    hdPathString: string;
}
