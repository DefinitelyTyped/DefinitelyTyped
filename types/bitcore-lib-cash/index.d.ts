// TypeScript Version: 2.2

/// <reference types="node" />

export namespace crypto {
    class BN {
        constructor(n: number);
        static fromNumber(n: number): BN;
        toNumber(): number;
    }

    namespace ECDSA {
        function sign(message: Buffer, key: PrivateKey): Signature;
        function verify(hashbuf: Buffer, sig: Signature, pubkey: PublicKey, endian?: "little"): boolean;
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
        static SIGHASH_ALL: number;
        static SIGHASH_FORKID: number;
        toString(): string;
    }

    class TransactionSignature extends Signature {
        constructor(arg: object | string | TransactionSignature);

        toObject(): object;
        static fromObject(obj: object): TransactionSignature;
    }
}

export namespace encoding {
    class BufferReader {
        constructor(buf: Buffer);

        set(obj: object): this;
        eof(): boolean;
        finished(): boolean;
        read(len: number): Buffer;
        readAll(): Buffer;
        readUInt8(): number;
        readUInt16BE(): number;
        readUInt16LE(): number;
        readUInt32BE(): number;
        readUInt32LE(): number;
        readUInt64BEBN(): crypto.BN;
        readUInt64LEBN(): crypto.BN;
        readVarintNum(): number | crypto.BN;
        readVarLengthBuffer(): Buffer;
        readVarintBuf(): Buffer;
        readVarintBN(): crypto.BN;
        reverse(): this;
        readReverse(len: number): Buffer;
    }

    class BufferWriter {
        constructor(obj: object);

        set(obj: object): this;
        toBuffer(): Buffer;
        concat(): Buffer;
        write(buf: Buffer): this;
        writeReverse(buf: Buffer): this;
        writeUInt8(n: number): this;
        writeUInt16BE(n: number): this;
        writeUInt16LE(n: number): this;
        writeUInt32BE(n: number): this;
        writeUInt32LE(n: number): this;
        writeUInt64BEBN(bn: crypto.BN): this;
        writeUInt64LEBN(bn: crypto.BN): this;
        writeVarintNum(bn: crypto.BN): this;
        writeVarintBN(bn: crypto.BN): this;
        varintBufNum(n: number): Buffer;
        varintBufBN(bn: crypto.BN): Buffer;
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

    namespace Input {
        class Multisig extends Input {
            constructor(
                input: Input,
                pubkeys?: PublicKey[],
                threshold?: number,
                signatures?: crypto.Signature[],
                opts?: object,
            );

            toObject(): object;
            getSignatures(
                transaction: Transaction,
                privateKey: PrivateKey,
                index: number,
                sigtype?: number,
                hashData?: any,
                signingMethod?: string,
            ): crypto.TransactionSignature[];
            addSignature(transaction: Transaction, signature: crypto.Signature, signingMethod?: string): this;
            clearSignatures(): this;
            isFullySigned(): boolean;
            countMissingSignatures(): number;
            countSignatures(): number;
            publicKeysWithoutSignature(): number;
            isValidSignature(transaction: Transaction, signature: crypto.Signature, signingMethod?: string): boolean;
            normalizeSignatures(
                transaction: Transaction,
                input: Input,
                inputIndex: number,
                signatures: Buffer[],
                publicKeys: PublicKey[],
                signingMethod?: string,
            ): crypto.TransactionSignature[];
        }

        class MultisigScriptHash extends Input {
            constructor(
                input: Input,
                pubkeys?: PublicKey[],
                threshold?: number,
                signatures?: crypto.Signature[],
                opts?: object,
            );

            toObject(): object;
            getSignatures(
                transaction: Transaction,
                privateKey: PrivateKey,
                index: number,
                sigtype?: number,
                hashData?: any,
                signingMethod?: string,
            ): crypto.TransactionSignature[];
            addSignature(transaction: Transaction, signature: crypto.Signature, signingMethod?: string): this;
            clearSignatures(): this;
            isFullySigned(): boolean;
            countMissingSignatures(): number;
            countSignatures(): number;
            publicKeysWithoutSignature(): number;
            isValidSignature(transaction: Transaction, signature: crypto.Signature, signingMethod?: string): boolean;
            normalizeSignatures(
                transaction: Transaction,
                input: Input,
                inputIndex: number,
                signatures: Buffer[],
                publicKeys: PublicKey[],
                signingMethod?: string,
            ): crypto.TransactionSignature[];
        }

        class PublicKey extends Input {
            getSignatures(
                transaction: Transaction,
                privateKey: PrivateKey,
                index: number,
                sigtype?: number,
                hashData?: any,
                signingMethod?: string,
            ): crypto.TransactionSignature[];
            addSignature(transaction: Transaction, signature: crypto.Signature, signingMethod?: string): this;
            clearSignatures(): this;
            isFullySigned(): boolean;
        }

        class PublicKeyHash extends Input {
            getSignatures(
                transaction: Transaction,
                privateKey: PrivateKey,
                index: number,
                sigtype?: number,
                hashData?: any,
                signingMethod?: string,
            ): crypto.TransactionSignature[];
            addSignature(transaction: Transaction, signature: crypto.Signature, signingMethod?: string): this;
            clearSignatures(): this;
            isFullySigned(): boolean;
        }
    }

    class Input {
        readonly prevTxId: Buffer;
        readonly outputIndex: number;
        readonly sequenceNumber: number;
        readonly script: Script;
        readonly output?: Output | undefined;

        constructor(params: object);

        static fromObject(obj: object): Input;
        static fromBufferReader(br: encoding.BufferReader): Input;

        toObject(): object;
        toBufferWriter(writer: encoding.BufferWriter): encoding.BufferWriter;

        setScript(script: Script): this;
        getSignatures(
            transaction: Transaction,
            privateKey: PrivateKey,
            index: number,
            sigtype?: number,
            hashData?: any,
            signingMethod?: string,
        ): crypto.TransactionSignature[];
        isFullySigned(): boolean;
        isFinal(): boolean;
        addSignature(transaction: Transaction, signature: crypto.Signature, signingMethod?: string): this;
        clearSignatures(): this;
        isValidSignature(transaction: Transaction, signature: crypto.Signature, signingMethod?: string): boolean;
        isNull(): boolean;
        lockForSeconds(seconds: number): this;
        lockUntilBlockHeight(heightDiff: number): this;
        getLockTime(): Date | number;
    }

    namespace sighash {
        function sign(
            transaction: Transaction,
            privateKey: PrivateKey,
            sighashType: number,
            inputIndex: number,
            subscript: Script,
            inputSatoshis: crypto.BN,
            flags: number,
            signingMethod: "ecdsa" | "schnorr",
        ): crypto.Signature;
    }
}

export class Transaction {
    inputs: Transaction.Input[];
    outputs: Transaction.Output[];
    readonly id: string;
    readonly hash: string;
    nid: string;

    constructor(serialized?: any);

    shallowCopy(transaction: Transaction): Transaction;
    serialize(unsafe?: object | boolean): string;
    uncheckedSerialize(): string;
    checkedSerialize(opts: object): string;
    invalidSatoshis(): boolean;
    getSerializationError(opts: object): Error;

    toBuffer(): Buffer;
    toBufferWriter(): encoding.BufferWriter;
    toObject(): object;
    toJSON(): object;

    static fromBuffer(buffer: Buffer): Transaction;
    static fromBufferReader(reader: encoding.BufferReader): Transaction;
    static fromObject(arg: object): Transaction;
    static fromString(str: string): Transaction;

    from(utxos: Transaction.UnspentOutput[], pubkeys?: PublicKey[], threshold?: number, opts?: object): this;
    to(address: Address[] | Address | string, amount: number): this;
    change(address: Address | string): this;
    fee(amount: number): this;
    feePerKb(amount: number): this;
    feePerByte(amount: number): this;
    sign(
        privateKey: Array<PrivateKey | string> | PrivateKey | string,
        sigtype?: number | null,
        signingMethod?: string,
    ): this;
    getSignatures(
        privKey: PrivateKey | string,
        sigtype?: number,
        signingMethod?: string,
    ): crypto.TransactionSignature[];
    applySignature(sig: crypto.Signature, signingMethod?: string): this;
    isFullySigned(): boolean;
    isValidSignature(sig: crypto.TransactionSignature): boolean;
    verifySignature(
        sig: crypto.Signature,
        pubkey: PublicKey,
        nin: number,
        subscript: Script,
        satoshisBN: crypto.BN,
        flags?: number,
        signingMethod?: string,
    ): boolean;
    addInput(input: Transaction.Input, outputScript?: string | Script, satoshis?: number): this;
    uncheckedAddInput(input: Transaction.Input): this;
    hasAllUtxoInfo(): boolean;
    lockUntilDate(time: Date | number): this;
    lockUntilBlockHeight(height: number): this;

    addOutput(output: Transaction.Output): this;
    addData(value: Buffer | string): this;
    clearOutputs(): this;
    removeOutput(index: number): void;
    sort(): this;
    shuffleOutputs(): this;
    sortOutputs(sortingFunction: (outputs: Transaction.Output[]) => Transaction.Output[]): this;
    sortInputs(sortingFunction: (inputs: Transaction.Input[]) => Transaction.Input[]): this;
    removeInput(index: number): void;
    setVersion(version: number): this;

    getFee(): number;
    getChangeOutput(): Transaction.Output | null;
    getLockTime(): Date | number;

    verify(): string | boolean;
    isCoinbase(): boolean;

    inspect(): string;
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

    toAddress(network?: string | Networks.Network): Address;
    toPublicKey(): PublicKey;
    toString(): string;
    toObject(): object;
    toJSON(): object;
    toWIF(): string;

    static fromString(str: string): PrivateKey;
    static fromWIF(str: string): PrivateKey;
    static fromObject(obj: object): PrivateKey;
    static fromRandom(network?: string | Networks.Network): PrivateKey;

    getValidationError(data: any, network?: string | Networks.Network): null | Error;
    isValid(data: any, network?: string | Networks.Network): boolean;

    inspect(): string;

    constructor(key?: string, network?: string | Networks.Network);
}

export class PublicKey {
    constructor(source: string);

    static fromPrivateKey(privateKey: PrivateKey): PublicKey;

    toBuffer(): Buffer;
    toDER(): Buffer;
}

export class HDPrivateKey {
    readonly hdPublicKey: HDPublicKey;
    readonly privateKey: PrivateKey;

    constructor(data?: string | Buffer | object);

    isValidPath(arg: string | number, hardened?: boolean): boolean;
    isValidSerialized(data: string | Buffer, network?: string | Networks.Network): boolean;
    getSerializedError(data: string | Buffer, network?: string | Networks.Network): null | Error;

    derive(arg: string | number, hardened?: boolean): HDPrivateKey;
    deriveChild(arg: string | number, hardened?: boolean): HDPrivateKey;
    deriveNonCompliantChild(arg: string | number, hardened?: boolean): HDPrivateKey;

    toString(): string;
    toObject(): object;
    toJSON(): object;
    toBuffer(): Buffer;

    static fromString(arg: string): HDPrivateKey;
    static fromObject(obj: object): HDPrivateKey;
    static fromSeed(hexa: string | Buffer, network?: string | Networks.Network): HDPrivateKey;

    inspect(): string;
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
    function buildMultisigIn(pubkeys: PublicKey[], threshold: number, signatures: Buffer[], opts: object): Script;
    function buildP2SHMultisigIn(pubkeys: PublicKey[], threshold: number, signatures: Buffer[], opts: object): Script;
    function buildPublicKeyHashOut(address: Address): Script;
    function buildPublicKeyOut(pubkey: PublicKey): Script;
    function buildDataOut(data: string | Buffer, encoding?: string): Script;
    function buildScriptHashOut(script: Script): Script;
    function buildPublicKeyIn(signature: crypto.Signature | Buffer, sigtype: number): Script;
    function buildPublicKeyHashIn(publicKey: PublicKey, signature: crypto.Signature | Buffer, sigtype: number): Script;

    function empty(): Script;
}

export class Script {
    constructor(data: string | object | Buffer | Script);

    set(obj: object): this;

    toBuffer(): Buffer;
    toASM(): string;
    toString(): string;
    toHex(): string;
    toAddress(network?: string | Networks.Network): Address;

    static fromBuffer(str: Buffer): Script;
    static fromASM(str: string): Script;
    static fromHex(str: string): Script;
    static fromString(str: string): Script;
    static fromAddress(address: Address): Script;

    isPublicKeyHashOut(): boolean;
    isPublicKeyHashIn(): boolean;

    getPublicKey(): Buffer;
    getPublicKeyHash(): Buffer;

    isPublicKeyOut(): boolean;
    isPublicKeyIn(): boolean;

    isScriptHashOut(): boolean;
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
}

export class Message {
    constructor(message: string);

    magicHash(): Buffer;
    sign(privateKey: PrivateKey): string;
    verify(bitcoinAddress: Address | string, signatureString: string): boolean;
    fromString(str: string): Message;
    fromJSON(json: string): Message;
    toObject(): { message: string };
    toJSON(): string;
    toString(): string;
    inspect(): string;
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

export interface CashAddressDecoding {
    readonly hashBuffer: Buffer;
    readonly network: Networks.Network;
    readonly type: string;
}

export class Address {
    readonly hashBuffer: Buffer;
    readonly network: Networks.Network;
    readonly type: string;

    constructor(data: Buffer | Uint8Array | string | object, network?: string | Networks.Network, type?: string);

    static createMultisig(publicKeys: PublicKey[], threshold: number, network: string | Networks.Network): Address;
    static payingTo(script: Script, network: string | Networks.Network): Address;

    static decodeCashAddress(address: string): CashAddressDecoding;

    static fromPublicKey(data: PublicKey, network: string | Networks.Network): Address;
    static fromPublicKeyHash(hash: Buffer, network: string | Networks.Network): Address;
    static fromScriptHash(hash: Buffer, network: string | Networks.Network): Address;
    static fromScript(script: Script, network: string | Networks.Network): Address;
    static fromBuffer(buffer: Buffer, network?: string | Networks.Network, type?: string): Address;
    static fromString(str: string, network?: string | Networks.Network, type?: string): Address;
    static fromObject(obj: object): Address;

    toBuffer(): Buffer;
    toCashBuffer(): Buffer;
    toObject(): object;
    toLegacyAddress(): string;
    toCashAddress(): string;
    toString(): string;

    getValidationError(data: string, network?: string | Networks.Network, type?: string): null | Error;

    isValid(data: string, network?: string | Networks.Network, type?: string): boolean;
    isPayToPublicKeyHash(): boolean;
    isPayToScriptHash(): boolean;

    inspect(): string;
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
