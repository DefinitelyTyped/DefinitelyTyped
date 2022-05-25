// Type definitions for bitcoin-computer-bitcore 0.1
// Project: https://github.com/bitcoin-computer/bitcoin-computer-bitcore
// Definitions by: Vivek Singh <https://github.com/jonty007>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// TypeScript Version: 2.2

/// <reference types="node" />

export namespace Bitcoin {
  namespace crypto {
    class BN {
      constructor(...args: any[]);
      toScriptNumBuffer(): Buffer;
      toString(encoding?: 'hex' | number): string;
      static fromBuffer(buf: Buffer, opts?: any): BN;
    }

    namespace ECDSA {
      function sign(message: Buffer, key: PrivateKey, endian?: 'big'): Signature;
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

    class Point {
      constructor(x: BN | string, y: BN | string, isRed: boolean)
      static fromX(odd: boolean, x: BN | string): Point;

      getX(): BN;
    }

    class Signature {
      static fromDER(sig: Buffer): Signature;
      static fromString(data: string): Signature;
      SIGHASH_ALL: number;
      toString(encoding?: string): string;
    }
  }

  namespace Transaction {
    class UnspentOutput {
      static fromObject(o: object): UnspentOutput;

      readonly address?: Address;
      readonly txId: string;
      readonly outputIndex?: number;
      readonly script: Script;
      readonly vout?: number;
      readonly inputIndex?: number;
      readonly amount: number;
      readonly satoshis: number;
      readonly scriptPubKey?: string | Script;
      readonly label?: string;
      readonly confirmations?: number;
      readonly spendable?: boolean;
      readonly solvable?: boolean;
      readonly safe?: boolean;

      constructor(data: object);

      inspect(): string;
      toObject(): this;
      toString(): string;
    }

    class Output {
      readonly script: Script;
      readonly satoshis: number;
      readonly _scriptBuffer: Buffer;

      constructor(data: object);

      setScript(script: Script | string | Buffer): this;
      inspect(): string;
      toObject(): object;
    }

    namespace Input {
      class MultiSigScriptHash {
        constructor(input: object, pubkeys: string[], threshold: number, signatures: any[] | null, redeemScript: Script);
        toObject(): object;
      }
    }

    class Input {
      constructor(data: object);
      readonly prevTxId: Buffer;
      readonly outputIndex: number;
      readonly sequenceNumber: number;
      readonly script: Script;
      readonly output?: Output | undefined;
    }
  }

  class Transaction {
    inputs: Transaction.Input[];
    outputs: Transaction.Output[];
    readonly id: string;
    readonly hash: string;
    readonly version: number;
    readonly nLockTime: number;
    nid: string;

    constructor(serialized?: any);

    from(utxos: Transaction.UnspentOutput | Transaction.UnspentOutput[], pubkeys?: string[], threshold?: number): this;
    to(address: Address[] | Address | string, amount: number): this;
    toJSON(): this;
    change(address: Address | string): this;
    fee(amount: number): this;
    feePerKb(amount: number): this;
    sign(privateKey: PrivateKey | string, sigtype?: number): this;
    getSignatures(privateKey: PrivateKey, sigtype?: number): any[];
    applySignature(sig: crypto.Signature): this;
    addInput(input: Transaction.Input): this;
    addInput(input: Transaction.Input.MultiSigScriptHash, outputScript?: any, satoshis?: any): Transaction;
    addOutput(output: Transaction.Output): this;
    addData(value: Buffer | string): this;
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

    uncheckedAddInput(input: Transaction.Input): Transaction;
    fromString(str: string): Transaction;
    _getInputAmount(): number;
    _getOutputAmount(): number;
    _estimateFee(): number;
  }

  class Block {
    hash: string;
    height: number;
    transactions: Transaction[];
    header: {
      time: number;
      prevHash: string;
    };

    constructor(data: Buffer | object);
  }

  class PrivateKey {
    readonly publicKey: PublicKey;
    readonly network: Networks.Network;
    readonly point: crypto.Point;

    static fromRandom(network?: string): PrivateKey;

    toAddress(): Address;
    toPublicKey(): PublicKey;
    toString(): string;
    toObject(): object;
    toJSON(): object;
    toWIF(): string;
    toBuffer(): Buffer;

    constructor(key?: string, network?: Networks.Network);
  }

  class PublicKey {
    readonly point: crypto.Point;
    constructor(source: string | Buffer | crypto.Point);

    static fromBuffer(buffer: Buffer, strict?: boolean): PublicKey;
    static fromPrivateKey(privateKey: PrivateKey): PublicKey;
    static fromString(str: string, encoding?: string): PublicKey;
    static fromX(odd: boolean, bn: crypto.BN | Buffer): PublicKey;

    toBuffer(): Buffer;
    toDER(): Buffer;
    toAddress(): Address;
  }

  class HDPrivateKey {
    readonly hdPublicKey: HDPublicKey;

    constructor(data?: string | Buffer | object);

    derive(arg: string | number, hardened?: boolean): HDPrivateKey;
    deriveChild(arg: string | number, hardened?: boolean): HDPrivateKey;
    deriveNonCompliantChild(arg: string | number, hardened?: boolean): HDPrivateKey;

    toString(): string;
    toObject(): object;
    toJSON(): object;

    readonly privateKey: PrivateKey;
    readonly publicKey: PublicKey;

    static fromString(s: string, _?: any): HDPrivateKey;
  }

  class HDPublicKey {
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

  namespace Script {
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
    function buildPublicKeyHashIn(publicKey: PublicKey, signature: crypto.Signature | Buffer, sigtype?: number): Script;

    function fromAddress(address: string | Address): Script;

    function empty(): Script;

    class Interpreter {
      static SCRIPT_VERIFY_P2SH: number;
      static SCRIPT_VERIFY_STRICTENC: number;

      constructor(data?: string | object);

      verify(scriptSig: any, scriptPubkey: any, tx: Transaction, nin: number, flags: number): boolean;
    }
  }

  class Script {
    constructor(data?: string | object);

    chunks: Array<{ buf?: Buffer, len?: number, opcodenum?: number }>;
    length: number;

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
    inspect(): string;
    static fromBuffer(origBuffer: Buffer): Script;
    static fromString(string: string): Script;
  }

  class Message {
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

  interface Util {
    readonly buffer: {
      reverse(a: any): any;
    };
  }

  namespace Networks {
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

  class Address {
    readonly hashBuffer: Buffer;
    readonly network: Networks.Network | string;
    readonly type: string;

    static fromString(str: string, network?: any, type?: any, format?: any): Address;
    static createMultisig(publicKeys: PublicKey[], threshold: number, network: string, nestedWitness: boolean): Address;
    static fromScript(script: Script, network: string): Address;
    static fromPublicKey(hash: PublicKey): Address;
    static fromPublicKeyHash(hash: Buffer): Address;

    constructor(data: Buffer | Uint8Array | string | object, network?: Networks.Network | string, type?: string);

    toString(encoding?: string): string;
  }

  class Unit {
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

  function versionGuard(version: any): void;

  class Networks {
    static defaultNetwork: Networks;
    getNetworks(): Networks;
  }

  namespace encoding {
    class BufferReader {
      constructor(...args: any[]);

      readReverse(len?: any): any;
    }

    class BufferWriter {
      constructor(...args: any[]);
      write(buf: Buffer): Buffer;
      writeUInt8(n: number): Buffer;
      concat(): Buffer;
    }
  }

  class Mnemonic {
    constructor(...args: any[]);

    toHDPrivateKey(passphrase: any, network: any): any;
    toSeed(passphrase?: string): Buffer;
  }

  class OutData {
    constructor(...args: any[]);
    toObject(): object;
  }

  class Opcode {
    constructor(...args: any[]);
    static OP_0: number;
    static OP_1: number;
    static OP_CHECKMULTISIG: number;
    static OP_DROP: number;
    static OP_HASH160: number;
    static OP_EQUAL: number;
    toObject(): object;
  }
}
