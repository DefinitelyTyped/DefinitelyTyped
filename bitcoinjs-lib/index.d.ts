// Type definitions for bitcoinjs-lib 2.3
// Project: https://github.com/bitcoinjs/bitcoinjs-lib#readme
// Definitions by: Mohamed Hegazy <https://github.com/mhegazy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export class Block {
    constructor();
    checkMerkleRoot(): any;
    checkProofOfWork(): any;
    getHash(): any;
    getId(): any;
    getUTCDate(): any;
    toBuffer(headersOnly: any): any;
    toHex(headersOnly: any): any;
    static calculateMerkleRoot(transactions: any): any;
    static calculateTarget(bits: any): any;
    static fromBuffer(buffer: any): any;
    static fromHex(hex: any): any;
}
export class ECPair {
    constructor(d: any, Q?: any, options?: any);
    getAddress(): string;
    getNetwork(): Network;
    getPublicKeyBuffer(): any;
    sign(hash: any): any;
    toWIF(): string;
    verify(hash: any, signature: any): boolean;
    static fromPublicKeyBuffer(buffer: any, network: Network): ECPair;
    static fromWIF(string: any, network?: Network): ECPair;
    static makeRandom(options: any): ECPair;
}
export class ECSignature {
    constructor(r: any, s: any, ...args: any[]);
    toCompact(i: any, compressed: any): any;
    toDER(): any;
    toScriptSignature(hashType: any): any;
    static fromDER(buffer: any): ECSignature;
    static parseCompact(buffer: any): ECSignature;
    static parseScriptSignature(buffer: any): ECSignature;
}
export class HDNode {
    constructor(keyPair: any, chainCode: any, ...args: any[]);
    derive(index: any): any;
    deriveHardened(index: any): any;
    derivePath(path: any): any;
    getAddress(): string;
    getFingerprint(): any;
    getIdentifier(): any;
    getNetwork(): Network;
    getPublicKeyBuffer(): any;
    isNeutered(): any;
    neutered(): any;
    sign(hash: any): any;
    toBase58(__isPrivate: any): any;
    toString(__isPrivate: any): any;
    verify(hash: any, signature: any): any;
    static HIGHEST_BIT: number;
    static LENGTH: number;
    static fromBase58(string: any, networks: Network[]): HDNode;
    static fromSeedBuffer(seed: any, network: Network, ...args: any[]): HDNode;
    static fromSeedHex(hex: any, network: Network): HDNode;
}
export class Transaction {
    constructor();
    addInput(hash: any, index: any, sequence: any, scriptSig: any, ...args: any[]): any;
    addOutput(scriptPubKey: any, value: any, ...args: any[]): any;
    byteLength(): number;
    clone(): Transaction;
    getHash(): any;
    getId(): any;
    hashForSignature(inIndex: any, prevOutScript: any, hashType: any, ...args: any[]): any;
    isCoinbase(): boolean;
    setInputScript(index: any, scriptSig: any, ...args: any[]): void;
    toBuffer(buffer?: any, initialOffset?: any): Buffer;
    toHex(): string;
    static DEFAULT_SEQUENCE: number;
    static SIGHASH_ALL: number;
    static SIGHASH_ANYONECANPAY: number;
    static SIGHASH_NONE: number;
    static SIGHASH_SINGLE: number;
    static fromBuffer(buffer: any, __noStrict: any): Transaction;
    static fromHex(hex: any): Transaction;
    static isCoinbaseHash(buffer: any): Transaction;
}
export class TransactionBuilder {
    constructor(network?: Network);
    addInput(txHash: any, vout: any, sequence?: any, prevOutScript?: any): any;
    addOutput(scriptPubKey: any, value: any): any;
    build(): Transaction;
    buildIncomplete(): Transaction;
    setLockTime(locktime: number): any;
    setVersion(version: number): void;
    sign(index: any, keyPair: any, redeemScript?: any, hashType?: any): any;
    static fromTransaction(transaction: Transaction, network: Network): TransactionBuilder;
}

export interface Network {
    bitcoin: {
        private: number;
        public: number;
    };
    dustThreshold: number;
    messagePrefix: string;
    pubKeyHash: number;
    scriptHash: number;
    wif: number;
}

export const networks: {
    bitcoin: Network;
    dogecoin: Network;
    litecoin: Network;
    testnet: Network;
};

export const opcodes: {
    OP_0: number;
    OP_0NOTEQUAL: number;
    OP_1: number;
    OP_10: number;
    OP_11: number;
    OP_12: number;
    OP_13: number;
    OP_14: number;
    OP_15: number;
    OP_16: number;
    OP_1ADD: number;
    OP_1NEGATE: number;
    OP_1SUB: number;
    OP_2: number;
    OP_2DIV: number;
    OP_2DROP: number;
    OP_2DUP: number;
    OP_2MUL: number;
    OP_2OVER: number;
    OP_2ROT: number;
    OP_2SWAP: number;
    OP_3: number;
    OP_3DUP: number;
    OP_4: number;
    OP_5: number;
    OP_6: number;
    OP_7: number;
    OP_8: number;
    OP_9: number;
    OP_ABS: number;
    OP_ADD: number;
    OP_AND: number;
    OP_BOOLAND: number;
    OP_BOOLOR: number;
    OP_CAT: number;
    OP_CHECKLOCKTIMEVERIFY: number;
    OP_CHECKMULTISIG: number;
    OP_CHECKMULTISIGVERIFY: number;
    OP_CHECKSIG: number;
    OP_CHECKSIGVERIFY: number;
    OP_CODESEPARATOR: number;
    OP_DEPTH: number;
    OP_DIV: number;
    OP_DROP: number;
    OP_DUP: number;
    OP_ELSE: number;
    OP_ENDIF: number;
    OP_EQUAL: number;
    OP_EQUALVERIFY: number;
    OP_FALSE: number;
    OP_FROMALTSTACK: number;
    OP_GREATERTHAN: number;
    OP_GREATERTHANOREQUAL: number;
    OP_HASH160: number;
    OP_HASH256: number;
    OP_IF: number;
    OP_IFDUP: number;
    OP_INVALIDOPCODE: number;
    OP_INVERT: number;
    OP_LEFT: number;
    OP_LESSTHAN: number;
    OP_LESSTHANOREQUAL: number;
    OP_LSHIFT: number;
    OP_MAX: number;
    OP_MIN: number;
    OP_MOD: number;
    OP_MUL: number;
    OP_NEGATE: number;
    OP_NIP: number;
    OP_NOP: number;
    OP_NOP1: number;
    OP_NOP10: number;
    OP_NOP2: number;
    OP_NOP3: number;
    OP_NOP4: number;
    OP_NOP5: number;
    OP_NOP6: number;
    OP_NOP7: number;
    OP_NOP8: number;
    OP_NOP9: number;
    OP_NOT: number;
    OP_NOTIF: number;
    OP_NUMEQUAL: number;
    OP_NUMEQUALVERIFY: number;
    OP_NUMNOTEQUAL: number;
    OP_OR: number;
    OP_OVER: number;
    OP_PICK: number;
    OP_PUBKEY: number;
    OP_PUBKEYHASH: number;
    OP_PUSHDATA1: number;
    OP_PUSHDATA2: number;
    OP_PUSHDATA4: number;
    OP_RESERVED: number;
    OP_RESERVED1: number;
    OP_RESERVED2: number;
    OP_RETURN: number;
    OP_RIGHT: number;
    OP_RIPEMD160: number;
    OP_ROLL: number;
    OP_ROT: number;
    OP_RSHIFT: number;
    OP_SHA1: number;
    OP_SHA256: number;
    OP_SIZE: number;
    OP_SUB: number;
    OP_SUBSTR: number;
    OP_SWAP: number;
    OP_TOALTSTACK: number;
    OP_TRUE: number;
    OP_TUCK: number;
    OP_VER: number;
    OP_VERIF: number;
    OP_VERIFY: number;
    OP_VERNOTIF: number;
    OP_WITHIN: number;
    OP_XOR: number;
};
export namespace HDNode {
    namespace MASTER_SECRET {
        const BYTES_PER_ELEMENT: number;
        const byteLength: number;
        const byteOffset: number;
        const length: number;
        const offset: number;
        function asciiSlice(): any;
        function asciiWrite(): any;
        function base64Slice(): any;
        function base64Write(): any;
        function compare(target: any, start: any, end: any, thisStart: any, thisEnd: any): any;
        function copy(): any;
        function copyWithin(p0: any, p1: any): any;
        function entries(): any;
        function equals(b: any): any;
        function every(p0: any): any;
        function fill(val: any, start: any, end: any, encoding: any): any;
        function filter(p0: any): any;
        function find(p0: any): any;
        function findIndex(p0: any): any;
        function forEach(p0: any): any;
        function hexSlice(): any;
        function hexWrite(): any;
        function includes(val: any, byteOffset: any, encoding: any): any;
        function indexOf(val: any, byteOffset: any, encoding: any): any;
        function inspect(): any;
        function join(p0: any): any;
        function keys(): any;
        function lastIndexOf(val: any, byteOffset: any, encoding: any): any;
        function latin1Slice(): any;
        function latin1Write(): any;
        function map(p0: any): any;
        function readDoubleBE(offset: any, noAssert: any): any;
        function readDoubleLE(offset: any, noAssert: any): any;
        function readFloatBE(offset: any, noAssert: any): any;
        function readFloatLE(offset: any, noAssert: any): any;
        function readInt16BE(offset: any, noAssert: any): any;
        function readInt16LE(offset: any, noAssert: any): any;
        function readInt32BE(offset: any, noAssert: any): any;
        function readInt32LE(offset: any, noAssert: any): any;
        function readInt8(offset: any, noAssert: any): any;
        function readIntBE(offset: any, byteLength: any, noAssert: any): any;
        function readIntLE(offset: any, byteLength: any, noAssert: any): any;
        function readUInt16BE(offset: any, noAssert: any): any;
        function readUInt16LE(offset: any, noAssert: any): any;
        function readUInt32BE(offset: any, noAssert: any): any;
        function readUInt32LE(offset: any, noAssert: any): any;
        function readUInt8(offset: any, noAssert: any): any;
        function readUIntBE(offset: any, byteLength: any, noAssert: any): any;
        function readUIntLE(offset: any, byteLength: any, noAssert: any): any;
        function reduce(p0: any): any;
        function reduceRight(p0: any): any;
        function reverse(): any;
        function set(p0: any): any;
        function slice(start: any, end: any): any;
        function some(p0: any): any;
        function sort(p0: any): any;
        function subarray(p0: any, p1: any): any;
        function swap16(): any;
        function swap32(): any;
        function swap64(): any;
        function toJSON(): any;
        function toLocaleString(): any;
        function toString(...args: any[]): any;
        function ucs2Slice(): any;
        function ucs2Write(): any;
        function undefined(): any;
        function utf8Slice(): any;
        function utf8Write(): any;
        function values(): any;
        function write(string: any, offset: any, length: any, encoding: any): any;
        function writeDoubleBE(val: any, offset: any, noAssert: any): any;
        function writeDoubleLE(val: any, offset: any, noAssert: any): any;
        function writeFloatBE(val: any, offset: any, noAssert: any): any;
        function writeFloatLE(val: any, offset: any, noAssert: any): any;
        function writeInt16BE(value: any, offset: any, noAssert: any): any;
        function writeInt16LE(value: any, offset: any, noAssert: any): any;
        function writeInt32BE(value: any, offset: any, noAssert: any): any;
        function writeInt32LE(value: any, offset: any, noAssert: any): any;
        function writeInt8(value: any, offset: any, noAssert: any): any;
        function writeIntBE(value: any, offset: any, byteLength: any, noAssert: any): any;
        function writeIntLE(value: any, offset: any, byteLength: any, noAssert: any): any;
        function writeUInt16BE(value: any, offset: any, noAssert: any): any;
        function writeUInt16LE(value: any, offset: any, noAssert: any): any;
        function writeUInt32BE(value: any, offset: any, noAssert: any): any;
        function writeUInt32LE(value: any, offset: any, noAssert: any): any;
        function writeUInt8(value: any, offset: any, noAssert: any): any;
        function writeUIntBE(value: any, offset: any, byteLength: any, noAssert: any): any;
        function writeUIntLE(value: any, offset: any, byteLength: any, noAssert: any): any;
        namespace buffer {
            const byteLength: number;
            function slice(p0: any, p1: any): any;
        }
        namespace parent {
            const byteLength: number;
            function slice(p0: any, p1: any): any;
        }
    }
}
export namespace address {
    function fromBase58Check(address: any): any;
    function fromOutputScript(scriptPubKey: any, network?: Network): any;
    function toBase58Check(hash: any, version: any, ...args: any[]): any;
    function toOutputScript(address: any, network?: Network): any;
}
export namespace bufferutils {
    function equal(a: any, b: any): any;
    function pushDataSize(i: any): any;
    function readPushDataInt(buffer: any, offset: any): any;
    function readUInt64LE(buffer: any, offset: any): any;
    function readVarInt(buffer: any, offset: any): any;
    function reverse(src: any): any;
    function varIntBuffer(i: any): any;
    function varIntSize(i: any): any;
    function writePushDataInt(buffer: any, number: any, offset: any): any;
    function writeUInt64LE(buffer: any, value: any, offset: any): void;
    function writeVarInt(buffer: any, number: any, offset: any): any;
}
export namespace crypto {
    function hash160(buffer: any): any;
    function hash256(buffer: any): any;
    function ripemd160(buffer: any): any;
    function sha1(buffer: any): any;
    function sha256(buffer: any): any;
}
export namespace message {
    function magicHash(message: any, network: any): any;
    function sign(keyPair: any, message: any, network: any): any;
    function verify(address: any, signature: any, message: any, network: any): any;
}
export namespace script {
    function classifyInput(script: any, allowIncomplete: any): any;
    function classifyOutput(script: any): any;
    function compile(chunks: any): any;
    function decompile(buffer: any): any;
    function fromASM(asm: any): any;
    function isCanonicalPubKey(buffer: any): any;
    function isCanonicalSignature(buffer: any): any;
    function isDefinedHashType(hashType: any): any;
    function isMultisigInput(script: any, allowIncomplete: any): any;
    function isMultisigOutput(script: any): any;
    function isNullDataOutput(script: any): any;
    function isPubKeyHashInput(script: any): any;
    function isPubKeyHashOutput(script: any): any;
    function isPubKeyInput(script: any): any;
    function isPubKeyOutput(script: any): any;
    function isScriptHashInput(script: any, allowIncomplete: any): any;
    function isScriptHashOutput(script: any): any;
    function isWitnessPubKeyHashOutput(script: any): any;
    function isWitnessScriptHashOutput(script: any): any;
    function multisigInput(signatures: any, scriptPubKey: any): any;
    function multisigOutput(m: any, pubKeys: any, ...args: any[]): any;
    function nullDataOutput(data: any): any;
    function pubKeyHashInput(signature: any, pubKey: any, ...args: any[]): any;
    function pubKeyHashOutput(pubKeyHash: any): any;
    function pubKeyInput(signature: any): any;
    function pubKeyOutput(pubKey: any): any;
    function scriptHashInput(scriptSig: any, scriptPubKey: any): any;
    function scriptHashOutput(scriptHash: any): any;
    function toASM(chunks: any): any;
    function witnessPubKeyHashOutput(pubKeyHash: any): any;
    function witnessScriptHashInput(scriptSig: any, scriptPubKey: any): any;
    function witnessScriptHashOutput(scriptHash: any): any;
    namespace number {
        function decode(buffer: any, maxLength: any, minimal: any): any;
        function encode(number: any): any;
    }
}
