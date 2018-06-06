// Type definitions for bitcore-lib 0.15
// Project: https://github.com/bitpay/bitcore-lib
// Definitions by: Lautaro Dragan <https://github.com/lautarodragan>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// TypeScript Version: 2.2

/// <reference types="node" />

export namespace crypto {
    class BN { }
    namespace ECDSA {
        function sign(message: Buffer, key: PrivateKey): Signature;
        function verify(hashbuf: Buffer, sig: Signature, pubkey: PublicKey, endian?: 'little'): boolean;
    }
    namespace Hash {
        function sha256(buffer: Buffer): Uint8Array;
    }
    namespace Random {
       function getRandomBuffer(size: number): Buffer;
    }
    namespace Point {}
    class Signature {
        static fromDER(sig: Buffer): Signature;
        static fromString(data: string): Signature;
        SIGHASH_ALL: number;
        toString(): string;
    }
}

export class Transaction {
    inputs: Input[];
    outputs: Output[];
    readonly id: string;
    readonly hash: string;
    nid: string;

    constructor(serialized?: any);

    from(utxos: Transaction.UnspentOutput[]): Transaction;
    to(address: Address | string, amount: number): Transaction;
    change(address: Address | string): Transaction;
    sign(privateKey: PrivateKey | string): Transaction;
    applySignature(sig: crypto.Signature): Transaction;
    addData(data: Buffer): this;
    serialize(): string;
}

export namespace Transaction {
    class UnspentOutput {
        static fromObject(o: object): UnspentOutput;

        readonly address: Address;
        readonly txId: string;
        readonly outputIndex: number;
        readonly script: Script;
        readonly satoshis: number;

        constructor(data: object);

        inspect(): string;
        toObject(): this;
        toString(): string;
    }
}

export class Block {
    hash: string;
    height: number;
    transactions: Transaction[];
    header: {
        time: number;
        prevHash: string;
    };

    constructor(data: Buffer | object);
}

export class PrivateKey {
    readonly publicKey: PublicKey;

    constructor(key: string);
}

export class PublicKey {
    constructor(source: string);

    static fromPrivateKey(privateKey: PrivateKey): PublicKey;

    toBuffer(): Buffer;
    toDER(): Buffer;
}

export interface Output {
    readonly script: any;
}

export namespace Script {
    const types: {
        DATA_OUT: string;
    };
    function buildPublicKeyHashOut(address: Address): Script;
}

export class Script { }

export interface Util {
    readonly buffer: {
        reverse(a: any): any;
    };
}

export namespace Networks {
    interface Network {
        readonly name: string;
        readonly alias: string;
    }

    const livenet: Network;
    const mainnet: Network;
    const testnet: Network;

    function add(data: any): Network;
    function remove(network: Network): void;
    function get(args: string | number | Network, keys: string | string[]): Network;
}

export class Address {}

export class Input {}
