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
        function sha1(buffer: Buffer): Buffer;
        function sha256(buffer: Buffer): Buffer;
        function sha256sha256(buffer: Buffer): Buffer;
        function sha256ripemd160(buffer: Buffer): Buffer;
        function sha512(buffer: Buffer): Buffer;
        function ripemd160(buffer: Buffer): Buffer;

        function sha256hmac(data: Buffer, key: Buffer): Buffer;
        function sha512hmac(data: Buffer, key: Buffer): Buffer;
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

    class Output {
        readonly script: Script;
        readonly satoshis: number;

        constructor(data: object);

        setScript(script: Script | string | Buffer): this;
        inspect(): string;
        toObject(): object;
    }

    class Input {
        readonly prevTxId: Buffer;
        readonly outputIndex: number;
        readonly sequenceNumber: number;
        readonly script: Script;
        readonly output?: Output;
    }
}

export class Transaction {
    inputs: Transaction.Input[];
    outputs: Transaction.Output[];
    readonly id: string;
    readonly hash: string;
    nid: string;

    constructor(serialized?: any);

    from(utxos: Transaction.UnspentOutput[]): this;
    to(address: Address[] | Address | string, amount: number): this;
    change(address: Address | string): this;
    fee(amount: number): this;
    feePerKb(amount: number): this;
    sign(privateKey: PrivateKey | string): this;
    applySignature(sig: crypto.Signature): this;
    addInput(input: Transaction.Input): this;
    addOutput(output: Transaction.Output): this;
    addData(value: Buffer): this;
    lockUntilDate(time: Date | number): this;
    lockUntilBlockHeight(height: number): this;

    hasWitnesses(): boolean;
    getFee(): number;
    getChangeOutput(): Transaction.Output | null;
    getLockTime(): Date | number;

    verify(): string | boolean;
    isCoinbase(): boolean;

    enableRBF(): this;
    isRBF(): boolean;

    inspect(): string;
    serialize(): string;
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
    readonly network: Networks.Network;

    toAddress(): Address;
    toPublicKey(): PublicKey;
    toString(): string;
    toObject(): object;
    toJSON(): object;
    toWIF(): string;

    constructor(key?: string, network?: Networks.Network);
}

export class PublicKey {
    constructor(source: string);

    static fromPrivateKey(privateKey: PrivateKey): PublicKey;

    toBuffer(): Buffer;
    toDER(): Buffer;
}

export class HDPrivateKey {
    readonly hdPublicKey: HDPublicKey;

    constructor(data?: string | Buffer | object);

    derive(arg: string | number, hardened?: boolean): HDPrivateKey;
    deriveChild(arg: string | number, hardened?: boolean): HDPrivateKey;
    deriveNonCompliantChild(arg: string | number, hardened?: boolean): HDPrivateKey;

    toString(): string;
    toObject(): object;
    toJSON(): object;
}

export class HDPublicKey {
    readonly xpubkey: Buffer;
    readonly network: Networks.Network;
    readonly depth: number;
    readonly publicKey: PublicKey;
    readonly fingerPrint: Buffer;

    constructor(arg: string | Buffer | object);

    derive(arg: string | number, hardened?: boolean): HDPublicKey;
    deriveChild(arg: string | number, hardened?: boolean): HDPublicKey;

    toString(): string;
}

export namespace Script {
    const types: {
        DATA_OUT: string;
    };
    function buildMultisigOut(publicKeys: PublicKey[], threshold: number, opts: object): Script;
    function buildWitnessMultisigOutFromScript(script: Script): Script;
    function buildMultisigIn(pubkeys: PublicKey[], threshold: number, signatures: Buffer[], opts: object): Script;
    function buildP2SHMultisigIn(pubkeys: PublicKey[], threshold: number, signatures: Buffer[], opts: object): Script;
    function buildPublicKeyHashOut(address: Address): Script;
    function buildPublicKeyOut(pubkey: PublicKey): Script;
    function buildDataOut(data: string | Buffer, encoding?: string): Script;
    function buildScriptHashOut(script: Script): Script;
    function buildPublicKeyIn(signature: crypto.Signature | Buffer, sigtype: number): Script;
    function buildPublicKeyHashIn(publicKey: PublicKey, signature: crypto.Signature | Buffer, sigtype: number): Script;

    function fromAddress(address: string | Address): Script;

    function empty(): Script;
}

export class Script {
    constructor(data: string | object);

    set(obj: object): this;

    toBuffer(): Buffer;
    toASM(): string;
    toString(): string;
    toHex(): string;

    isPublicKeyHashOut(): boolean;
    isPublicKeyHashIn(): boolean;

    getPublicKey(): Buffer;
    getPublicKeyHash(): Buffer;

    isPublicKeyOut(): boolean;
    isPublicKeyIn(): boolean;

    isScriptHashOut(): boolean;
    isWitnessScriptHashOut(): boolean;
    isWitnessPublicKeyHashOut(): boolean;
    isWitnessProgram(): boolean;
    isScriptHashIn(): boolean;
    isMultisigOut(): boolean;
    isMultisigIn(): boolean;
    isDataOut(): boolean;

    getData(): Buffer;
    isPushOnly(): boolean;

    classify(): string;
    classifyInput(): string;
    classifyOutput(): string;

    isStandard(): boolean;

    prepend(obj: any): this;
    add(obj: any): this;

    hasCodeseparators(): boolean;
    removeCodeseparators(): this;

    equals(script: Script): boolean;

    getAddressInfo(): Address | boolean;
    findAndDelete(script: Script): this;
    checkMinimalPush(i: number): boolean;
    getSignatureOperationsCount(accurate: boolean): number;

    toAddress(): Address;
}

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

export class Address {
    readonly hashBuffer: Buffer;
    readonly network: Networks.Network;
    readonly type: string;

    constructor(data: Buffer | Uint8Array | string | object, network?: Networks.Network, type?: string);
}

export class Unit {
    static fromBTC(amount: number): Unit;
    static fromMilis(amount: number): Unit;
    static fromBits(amount: number): Unit;
    static fromSatoshis(amount: number): Unit;

    constructor(amount: number, unitPreference: string);

    toBTC(): number;
    toMilis(): number;
    toBits(): number;
    toSatoshis(): number;
}
