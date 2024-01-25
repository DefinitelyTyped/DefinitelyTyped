/// <reference types="node" />

interface Signer {
    publicKey: Buffer;
    network?: any;
    sign(hash: Buffer, lowR?: boolean): Buffer;
    signSchnorr?(hash: Buffer): Buffer;
    getPublicKey?(): Buffer;
}

interface Output {
    script: Buffer;
    value: number;
}
interface Input {
    hash: Buffer;
    index: number;
    script: Buffer;
    sequence: number;
    witness: Buffer[];
}

declare class BTransaction {
    static readonly DEFAULT_SEQUENCE = 4294967295;
    static readonly SIGHASH_DEFAULT = 0;
    static readonly SIGHASH_ALL = 1;
    static readonly SIGHASH_NONE = 2;
    static readonly SIGHASH_SINGLE = 3;
    static readonly SIGHASH_ANYONECANPAY = 128;
    static readonly SIGHASH_OUTPUT_MASK = 3;
    static readonly SIGHASH_INPUT_MASK = 128;
    static readonly ADVANCED_TRANSACTION_MARKER = 0;
    static readonly ADVANCED_TRANSACTION_FLAG = 1;
    static fromBuffer(buffer: Buffer, _NO_STRICT?: boolean): Transaction;
    static fromHex(hex: string): Transaction;
    static isCoinbaseHash(buffer: Buffer): boolean;
    version: number;
    locktime: number;
    ins: Input[];
    outs: Output[];
    isCoinbase(): boolean;
    addInput(hash: Buffer, index: number, sequence?: number, scriptSig?: Buffer): number;
    updateInput(
        inputIndex: number,
        opts: {
            hash?: Buffer;
            txId?: string;
            index?: number;
            sequence?: number;
            scriptSig?: Buffer;
            witness?: Buffer;
        },
    ): void;
    addOutput(scriptPubKey: Buffer, value: number): number;
    updateOutput(
        outputIndex: number,
        opts: {
            scriptPubKey?: Buffer;
            value?: number;
        },
    ): void;
    hasWitnesses(): boolean;
    weight(): number;
    virtualSize(): number;
    byteLength(_ALLOW_WITNESS?: boolean): number;
    clone(): Transaction;
    sign(inIndex: number, keyPair: Signer, sighashType: number, prevOutScript: Buffer): this;
    /**
     * Hash transaction for signing a specific input.
     *
     * Bitcoin uses a different hash for each signed transaction input.
     * This method copies the transaction, makes the necessary changes based on the
     * hashType, and then hashes the result.
     * This hash can then be used to sign the provided transaction input.
     */
    hashForSignature(inIndex: number, prevOutScript: Buffer, hashType: number): Buffer;
    hashForWitnessV1(
        inIndex: number,
        prevOutScripts: Buffer[],
        values: number[],
        hashType: number,
        leafHash?: Buffer,
        annex?: Buffer,
    ): Buffer;
    hashForWitnessV0(inIndex: number, prevOutScript: Buffer, value: number, hashType: number): Buffer;
    getHash(forWitness?: boolean): Buffer;
    getId(): string;
    toBuffer(buffer?: Buffer, initialOffset?: number): Buffer;
    toHex(): string;
    setInputScript(index: number, scriptSig: Buffer): void;
    setWitness(index: number, witness: Buffer[]): void;
    private __toBuffer;
}

type Json = JBasic | JObject | JArray;
type JBasic = undefined | null | boolean | number | string | symbol | bigint;
type JArray = Json[];
interface JObject {
    [x: string]: Json;
}
type SJson = JBasic | SJObject | SJArray;
type SJArray = SJson[];
interface SJObject {
    [x: string]: SJson;
    _id: string;
    _rev: string;
    _root: string;
    _owners: string[];
    _amount: number;
    _readers?: string[];
    _url?: string;
}

declare class Mock {
    _id: string;
    _rev: string;
    _root: string;
    _amount: number;
    _owners: string[];
    constructor({
        _id,
        _rev,
        _root,
    }?: {
        _id?: string | undefined;
        _rev?: string | undefined;
        _root?: string | undefined;
    });
}

declare class Transaction {
    tx: BTransaction;
    outData: Data[];
    constructor(tx?: any);
    get txId(): string;
    get inputs(): string[];
    get encoding(): {
        ioDescriptor: number[];
        dataPrefix: string;
        ioMap: number[];
    };
    get ioDescriptor(): number[];
    get ioMap(): number[];
    get dataPrefix(): string;
    get inputsLength(): number;
    get outputsLength(): number;
    get maxDataIndex(): number;
    get ownerInputs(): Input[];
    get ownerOutputs(): Output[];
    get inRevs(): string[];
    get outRevs(): string[];
    get zip(): string[][];
    isBcTx(chain: Chain, network: Network): boolean;
    getOwnerOutputs(): any;
    getDataOutputs(): any;
    getOutData(restClient: RestClient): Promise<Data[]>;
    getOwners(): string[][];
    getAmounts(): number[];
    spendFromData(inputRevs: string[]): void;
    inputIndexesToRevs(env: { [s: string]: number }): {
        [s: string]: string;
    };
    revsToInputIndexes(env: { [s: string]: string }): {
        [s: string]: number;
    };
    createDataOuts(objects: Array<Partial<ProgramMetaData>>, wallet: Wallet, ioMap?: number[]): void;
    static fromTransaction(tx: BTransaction, restClient?: RestClient): Promise<Transaction>;
    static fromTxHex({
        hex,
        restClient,
    }: {
        hex?: string | undefined;
        restClient?: RestClient | undefined;
    }): Promise<Transaction>;
    static fromTxId({
        txId,
        restClient,
    }: {
        txId?: string | undefined;
        restClient?: RestClient | undefined;
    }): Promise<Transaction>;
    static getUtxosFromTx(tx: BTransaction): string[];
}

declare class Wallet {
    readonly restClient: RestClient;
    constructor(params?: ComputerOptions);
    derive(subpath?: string): Wallet;
    getBalance(): Promise<number>;
    getUtxos(): Promise<_Unspent[]>;
    getDustThreshold(isWitnessProgram: boolean, script?: Buffer): number;
    getAmountThreshold(isWitnessProgram: boolean, script: Buffer): number;
    getUtxosWithOpts({ include, exclude }?: FundOptions): Promise<_Unspent[]>;
    fetchUtxo: (utxo: _Unspent) => Promise<Utxo>;
    checkFee(fee: number, size: number): void;
    getSigOpCount(script: Buffer): number;
    getLegacySigOpCount(tx: BTransaction): Promise<number>;
    getTransactionSigOpCost(tx: BTransaction): Promise<number>;
    getTxSize(txSize: any, nSigOpCost: any, bytesPerSigOp: any): number;
    estimatePsbtSize(tx: any): number;
    fundPsbt(tx: any, opts?: FundOptions): Promise<void>;
    getOutputSpent: (input: Input) => Promise<Output>;
    getInputAmount: (tx: BTransaction) => Promise<number>;
    getOutputAmount: (tx: BTransaction) => number;
    estimateSize(tx: any): Promise<number>;
    estimateFee(tx: any): Promise<number>;
    fund(tx: BTransaction, opts?: FundOptions): Promise<void>;
    sign(transaction: BTransaction, { inputIndex, sighashType, inputScript }?: SigOptions): Promise<void>;
    broadcast(tx: BTransaction): Promise<string>;
    send(satoshis: number, address: string): Promise<string>;
    get hdPrivateKey(): any;
    get privateKey(): Buffer;
    get publicKey(): Buffer;
    get passphrase(): string;
    get path(): string;
    get chain(): Chain;
    get network(): Network;
    get url(): string;
    get mnemonic(): string;
    get address(): string;
}

declare class UrlFetch {
    baseUrl: string;
    privateKey?: Buffer;
    keyPair: any;
    constructor(baseUrl?: string, keyPair?: any);
    _get<T>(route: string): Promise<T>;
    _post<T1, T2>(route: string, data: T1): Promise<T2>;
    _delete<T>(route: string): Promise<T>;
    retry: (error: any) => boolean;
    get<T>(route: string): Promise<T>;
    post<T1, T2>(route: string, datum: T1): Promise<T2>;
    delete<T>(route: string): Promise<T>;
}

declare class RestClient {
    readonly chain: Chain;
    readonly network: Network;
    readonly networkObj: any;
    readonly mnemonic: string;
    readonly path: string;
    readonly passphrase: string;
    readonly bcn: UrlFetch;
    readonly dustRelayTxFee: number;
    readonly _keyPair: any;
    satPerByte: number;
    private randomAddress;
    constructor({ chain, network, mnemonic, path, passphrase, url, satPerByte, dustRelayFee }?: ComputerOptions);
    get privateKey(): Buffer;
    get keyPair(): any;
    getBalance(address: string): Promise<number>;
    getTransactions(txIds: string[]): Promise<_Transaction[]>;
    getRawTxs(txIds: string[]): Promise<string[]>;
    get RANDOM_ADDRESS(): string;
    getUtxosByAddress(address: string): Promise<_Unspent[]>;
    query({ publicKey, hash, limit, offset, order, ids, mod }: Partial<Query>): Promise<string[]>;
    idsToRevs(outIds: string[]): Promise<string[]>;
    revToId(rev: string): Promise<string>;
    rpc(method: string, params: string): Promise<any>;
    static getSecretOutput({ _url, keyPair }: { _url: string; keyPair: any }): Promise<{
        host: string;
        data: string;
    }>;
    static setSecretOutput({
        secretOutput,
        host,
        keyPair,
    }: {
        secretOutput: SecretOutput;
        host: string;
        keyPair: any;
    }): Promise<Data & (Encrypted | Stored)>;
    static deleteSecretOutput({ _url, keyPair }: { _url: string; keyPair: any }): Promise<void>;
    get url(): string;
    broadcast(txHex: string): Promise<string>;
    fetch(txId: string): Promise<_Transaction>;
    fetchAll(txIds: string[]): Promise<_Transaction[]>;
    unspents(address: string): Promise<_Unspent[]>;
    faucet(address: string, value: number): Promise<_Unspent>;
    faucetComplex(output: Buffer, value: number): Promise<_Unspent>;
    verify(txo: _Unspent): Promise<void>;
    mine(count: number): Promise<void>;
    height(): Promise<number>;
    listTxs(address: string): Promise<_Transaction>;
}

type Chain = 'LTC' | 'BTC';
type Network = 'testnet' | 'mainnet' | 'regtest';
type Fee = Partial<{
    fee: number;
}>;
type ProgramMetaData = JObject &
    Partial<{
        _amount: number;
        _owners: string[];
        _readers?: string[];
        _url?: string;
    }>;

interface FundOptions {
    fund?: boolean;
    include?: string[];
    exclude?: string[];
}
interface SigOptions {
    sign?: boolean;
    inputIndex?: number;
    sighashType?: number;
    inputScript?: Buffer;
}
interface MockOptions {
    mocks?: {
        [s: string]: Mock;
    };
}
type InscriptionOptions = Partial<{
    commitAmount: number;
    commitFee: number;
    revealAmount: number;
    revealFee: number;
    include: string[];
    exclude: string[];
}>;
type ComputerOptions = Partial<{
    chain: Chain;
    mnemonic: string;
    network: Network;
    passphrase: string;
    path: string;
    seed: string;
    url: string;
    satPerByte: number;
    dustRelayFee: number;
}>;

interface SecretOutput {
    data: string;
}
interface TransitionJSON  {
    exp: string;
    env: {
        [s: string]: string;
    };
    mod: string;
}
interface Stored {
    _url: string;
}
interface Location {
    _rev: string;
    _root: string;
    _id: string;
    _owners: string[];
    _amount: number;
    _readers?: string[];
    _url?: string;
}
interface Encrypted {
    __cypher: string;
    __secrets: string[];
}

type Data = ProgramMetaData;
type Class = new (...args: any) => any;
type Query = Partial<{
    mod: string;
    publicKey: string;
    limit: number;
    offset: number;
    order: 'ASC' | 'DESC';
    ids: string[];
    hash: string;
}>;
type UserQuery<T extends Class> = Partial<{
    mod: string;
    publicKey: string;
    limit: number;
    offset: number;
    order: 'ASC' | 'DESC';
    ids: string[];
    contract: {
        class: T;
        args?: ConstructorParameters<T>;
    };
}>;

interface _Unspent {
    txId: string;
    vout: number;
    satoshis: number;
    rev?: string;
    scriptPubKey?: string;
    amount?: number;
    address?: string;
    height?: number;
}

interface _Input {
    txId: string;
    vout: number;
    script: string;
    sequence: string;
    witness: string[];
}
interface _Output {
    value: number;
    script: string;
    address?: string;
}

interface _Transaction {
    txId: string;
    txHex: string;
    vsize: number;
    version: number;
    locktime: number;
    ins: _Input[];
    outs: _Output[];
}
interface Utxo {
    hash: any;
    index: any;
    nonWitnessUtxo: Buffer;
}
interface Effect {
    res: Json;
    env: JObject;
}

declare class Computer {
    wallet: Wallet;
    constructor(params?: ComputerOptions);
    new<T extends Class>(
        constructor: T,
        args?: ConstructorParameters<T>,
        mod?: string,
    ): Promise<InstanceType<T> & Location>;
    lockdown(opts?: any): void;
    delete(inRevs: string[]): Promise<string>;
    decode(transaction: BTransaction): Promise<TransitionJSON>;
    encode(json: Partial<TransitionJSON & FundOptions & SigOptions & MockOptions>): Promise<{
        tx: BTransaction;
        effect: Effect;
    }>;
    encodeNew<T extends Class>({
        constructor,
        args,
        mod,
    }: {
        constructor: T;
        args: ConstructorParameters<T>;
        mod?: string;
        root?: string;
    }): Promise<{
        tx: BTransaction;
        effect: Effect;
    }>;
    getUtxos(address?: string): Promise<string[]>;
    encodeCall<T extends Class, K extends keyof InstanceType<T>>({
        target,
        property,
        args,
        mod,
    }: {
        target: InstanceType<T> & Location;
        property: string;
        args: Parameters<InstanceType<T>[K]>;
        mod?: string;
    }): Promise<{
        tx: BTransaction;
        effect: Effect;
    }>;
    query<T extends Class>(q: UserQuery<T>): Promise<string[]>;
    deploy(module: string, opts?: Partial<InscriptionOptions>): Promise<string>;
    load(rev: string): Promise<any>;
    getChain(): Chain;
    getNetwork(): Network;
    getMnemonic(): string;
    getPrivateKey(): string;
    getPassphrase(): string;
    getPath(): string;
    getUrl(): string;
    getPublicKey(): string;
    getAddress(): string;
    setFee(fee: number): void;
    getFee(): number;
    getBalance(): Promise<number>;
    sign(transaction: BTransaction, opts?: SigOptions): Promise<void>;
    fund(tx: BTransaction, opts?: Fee & FundOptions): Promise<void>;
    broadcast(tx: BTransaction): Promise<string>;
    sync(rev: string): Promise<unknown>;
    send(satoshis: number, address: string): Promise<string>;
    rpcCall(method: string, params: string): Promise<any>;
    txFromHex({ hex }: { hex?: string | undefined }): Promise<Transaction>;
    getInscription(
        rawTx: string,
        index: number,
    ): {
        contentType: string;
        body: string;
    };
    listTxs(address?: string): Promise<_Transaction>;
    export(module: string, opts?: Partial<InscriptionOptions>): Promise<string>;
    import(rev: string): Promise<any>;
    queryRevs(q: Query): Promise<string[]>;
    getOwnedRevs(publicKey?: Buffer): Promise<string[]>;
    getRevs(publicKey?: Buffer): Promise<string[]>;
    getLatestRevs(ids: string[]): Promise<string[]>;
    getLatestRev(id: string): Promise<string>;
    idsToRevs(ids: string[]): Promise<string[]>;
    faucet(amount: number, address?: string): Promise<_Unspent>;
    toScriptPubKey(publicKeys: string[]): Buffer;
}

export { Computer };
