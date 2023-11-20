type JUndefined = undefined;
type JNull = null;
type JBoolean = boolean;
type JNumber = number;
type JString = string;
type JBasic = JUndefined | JNull | JBoolean | JNumber | JString;
type JArray = Json[];
interface JObject {
    [x: string]: Json;
}
type Json = JBasic | JObject | JArray;
type SJArray = SJson[];
interface SJObject {
    [x: string]: SJson;
    _id: string;
    _rev: string;
    _root: string;
}
type SJson = JBasic | SJObject | SJArray;
type Chain = "LTC" | "BTC";
type Network = "livenet" | "testnet" | "mainnet" | "regtest";
type SelectUtxos = Partial<{
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
}>;

interface SecretOutput {
    data: string;
}
interface TransitionJSON {
    exp: string;
    env: {
        [s: string]: string;
    };
    mod: string;
}
interface Stored {
    _url: string;
}
type ProgramMetaData = Partial<
    JObject & {
        _amount: number;
        _owners: string[];
        _readers?: string[];
        _url?: string;
    }
>;
interface Location {
    _rev: string;
    _root: string;
    _id: string;
}
interface Encrypted {
    __cypher: string;
    __secrets: string[];
}
type Transition = Encrypted & {
    exp: string;
    env: {
        [s: string]: string;
    };
    mod: string;
    root: string;
};
type Data = ProgramMetaData & Transition & JObject;
type Class = new(...args: any) => any;
type Query = Partial<{
    mod: string;
    publicKey: string;
    limit: number;
    offset: number;
    order: "ASC" | "DESC";
    ids: string[];
    classHash: string;
}>;
type UserQuery<T extends Class> = Partial<{
    mod: string;
    publicKey: string;
    limit: number;
    offset: number;
    order: "ASC" | "DESC";
    ids: string[];
    contract: {
        class: T;
        args?: ConstructorParameters<T>;
    };
}>;

declare class Tx {
    tx: any;
    outData: Data[];
    constructor();
    get txId(): string;
    get inputs(): string[];
    get encoding(): {
        ioDescriptor: number[];
        dataPrefix: string;
    };
    get ioDescriptor(): number[];
    get dataPrefix(): string;
    get inputsLength(): number;
    get outputsLength(): number;
    get maxDataIndex(): number;
    get ownerInputs(): any[];
    get ownerOutputs(): any[];
    get inRevs(): string[];
    get outRevs(): string[];
    get zip(): string[][];
    isBcTx(chain: Chain, network: Network): boolean;
    getOwnerOutputs(): any;
    getDataOutputs(): any;
    getOutData(restClient: RestClient): Promise<Data[]>;
    getOwners(): string[][];
    getAmounts(): number[];
    spendFromData(inputRevs: string[], restClient: RestClient): Promise<void>;
    createDataOuts(objects: Array<Partial<ProgramMetaData>>, restClient?: RestClient): void;
    static fromTransaction(tx: any, restClient?: RestClient): Promise<Tx>;
    static fromTxHex({ hex, restClient }: { hex?: string; restClient?: RestClient }): Promise<Tx>;
    static fromTxId({ txId, restClient }: { txId?: string; restClient?: RestClient }): Promise<Tx>;
    static getUtxosFromTx(tx: any): string[];
}

declare class RestClient {
    readonly chain: Chain;
    readonly network: Network;
    readonly mnemonic: any;
    readonly path: string;
    readonly passphrase: string;
    private bcn;
    constructor({ chain, network, mnemonic, path, passphrase, url }?: ComputerOptions);
    get privateKey(): any;
    getBalance(address: string): Promise<number>;
    getTransactions(txIds: string[]): Promise<any[]>;
    getRawTxs(txIds: string[]): Promise<string[]>;
    broadcast(txJSON: any): Promise<string>;
    getUtxosByAddress(address: string): Promise<any[]>;
    query({ publicKey, classHash, limit, offset, order, ids, mod }: Partial<Query>): Promise<string[]>;
    idsToRevs(outIds: string[]): Promise<string[]>;
    rpc(method: string, params: string): Promise<any>;
    static getSecretOutput({ _url, privateKey }: { _url: string; privateKey: any }): Promise<{
        host: string;
        data: string;
    }>;
    static setSecretOutput({
        secretOutput,
        host,
        privateKey,
    }: {
        secretOutput: SecretOutput;
        host: string;
        privateKey: any;
    }): Promise<Data & (Encrypted | Stored)>;
    static deleteSecretOutput({ _url, privateKey }: { _url: string; privateKey: any }): Promise<void>;
    get url(): string;
}

declare class Wallet {
    readonly restClient: RestClient;
    constructor(params?: ComputerOptions);
    derive(subpath?: string): Wallet;
    getBalance(): Promise<number>;
    getUtxos(): Promise<any[]>;
    getUtxosByEffectiveValue(amount: number, { include, exclude }?: Partial<SelectUtxos>): Promise<any[]>;
    fundTx(tx: any, selectUtxos?: Partial<SelectUtxos>): Promise<void>;
    /**
     * Given a transaction with inputs and outputs containing data, this function
     * adds extra inputs to fund the transaction and possibly an change output.
     * The included and excluded utxos are used to select the inputs.
     */
    fund(transaction: Tx, selectUtxos?: Partial<SelectUtxos>): Promise<void>;
    signTx(tx: any): void;
    sign(transaction: Tx): void;
    broadcast(transaction: Tx): Promise<string>;
    send(amount: number, address: string): Promise<string>;
    get hdPrivateKey(): any;
    get privateKey(): any;
    get publicKey(): any;
    get passphrase(): string;
    get path(): string;
    get chain(): Chain;
    get network(): Network;
    get url(): string;
    get mnemonic(): any;
    get address(): any;
}

declare class Computer {
    wallet: Wallet;
    constructor(params?: ComputerOptions);
    static getExp(constructor: Class, argString?: string): string;
    new<T extends Class>(
        constructor: T,
        args?: ConstructorParameters<T>,
        mod?: string,
    ): Promise<InstanceType<T> & Location>;
    decode(transaction: any): Promise<TransitionJSON>;
    encode({ exp, env, mod }: Partial<TransitionJSON>): Promise<any>;
    encodeNew<T extends Class>({
        constructor,
        args,
        mod,
    }: {
        constructor: T;
        args?: ConstructorParameters<T>;
        mod?: string;
        root?: string;
    }): Promise<any>;
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
    }): Promise<any>;
    query<T extends Class>(q: Partial<UserQuery<T>>): Promise<string[]>;
    export(module: string): Promise<string>;
    import(rev: string): Promise<any>;
    getChain(): string;
    getNetwork(): string;
    getMnemonic(): string;
    getPrivateKey(): string;
    getPassphrase(): string;
    getPublicKey(): string;
    getAddress(): string;
    getBalance(): Promise<number>;
    getUtxos(tx?: any): Promise<string[]>;
    sign(tx: any): void;
    fund(tx: any, selectUtxos?: Partial<SelectUtxos>): Promise<void>;
    broadcast(tx: any): Promise<string>;
    sync(rev: string): Promise<unknown>;
    send(amount: number, address: string): Promise<string>;
    rpcCall(method: string, params: string): Promise<any>;
    txFromHex({ hex }: { hex?: string }): Promise<Tx>;
    txFromJSON({ json }: { json?: string }): Promise<Tx>;
    queryRevs(q: Query): Promise<string[]>;
    getOwnedRevs(publicKey?: any): Promise<string[]>;
    getRevs(publicKey?: any): Promise<string[]>;
    getLatestRevs(ids: string[]): Promise<string[]>;
    getLatestRev(id: string): Promise<string>;
    idsToRevs(ids: string[]): Promise<string[]>;
    read(rev: string): Promise<unknown>;
    write(exp: string, env: Record<string, string>, mod: string): Promise<unknown>;
}

declare class Contract {
    _id: string;
    _rev: string;
    _root: string;
    constructor(opts?: {});
}
export { Computer, Contract };
