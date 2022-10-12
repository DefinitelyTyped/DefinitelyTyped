// Type definitions for @bitcoin-computer/lib 0.9
// Project: https://github.com/bitcoin-computer/monorepo (Does not have to be to GitHub, but prefer linking to a source code repository rather than to a project website.)
// Definitions by: jonty007 <https://github.com/jonty007>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/// <reference types="node" />

declare module '@bitcoin-computer/node';
declare module '@bitcoin-computer/lib' {
    type Chain = 'LTC' | 'BTC' | string;
    type Network = 'livenet' | 'testnet' | string;
    interface MetaData<T> {
        __cls?: T | string;
        __args?: any[];
        __func?: string;
        __expt?: T | string;
        __mdl?: string;
    }
    type SmartObj<T> = MetaData<T> & {
        __index?: Record<string, number>;
        __vouts?: number[];
        __cypher?: string;
        __secrets?: string[];
        _id?: string;
        _rev?: string;
        _root?: string;
        _owners?: string[];
        _amount?: number;
        _readers?: string[];
        _url?: string;
        __vins?: number[];
        [name: string]: unknown;
    };
    type Basic = string | number | bigint | boolean | symbol | null | undefined;
    interface Rev {
        _rev: string;
    }
    interface Id {
        _id: string;
    }
    interface Root {
        _root: string;
    }
    type Location = Id & Rev & Root;
    interface AccessMetaData {
        _readers?: string[];
        _owners: string[];
        _amount: number;
        _url?: string;
    }
    interface Index {
        __index: Record<string, number>;
    }
    type Meta = AccessMetaData & MetaData<unknown> & Index;
    type Output = Meta & Location;
    interface OwnersObjectAndAmount {
        _owners: string[];
        _amount: number;
    }
    interface OpReturn {
        enc: number[];
    }
    type Smart<T, U> = T extends Basic
        ? T
        : T extends Array<infer V>
        ? Array<Smart<V, U>>
        : T extends Record<string, unknown>
        ? U & {
              [K in keyof T]: Smart<T[K], U>;
          }
        : T;
    type Txo = any;
    interface BCTxo {
        address?: string;
        rev: string;
        scriptPubKey: string;
        amount?: number;
        satoshis: number;
    }
    interface Constructable {
        new (...args: unknown[]): Record<string, unknown>;
    }
    interface DbMetaData {
        _amount?: number;
        _owners?: string[];
        _readers?: string[];
        _url?: string;
        [name: string]: unknown;
    }
    type Data = DbMetaData;
    type Encrypted = {
        __cypher: string;
        __secrets: string[];
    } & DbMetaData;
    type Stored = {
        _url: string;
    } & DbMetaData;
    function isStored(obj: Stored | Data | Encrypted): obj is Stored;
    function isEncrypted(obj: Stored | Data | Encrypted): obj is Encrypted;
    function staticImplements(constructor: any): any;
    type Class = new (...args: any) => any;
    type Query = Partial<{
        publicKey: string;
        classHash: string;
    }>;
    type UserQuery = Partial<{
        publicKey: any;
        contract: string | Class;
    }>;
    interface ComputerOptions {
        chain?: string;
        network?: string;
        url?: string;
        mnemonic?: string;
        path?: string;
        passphrase?: string;
        seed?: string;
    }
    interface ConstructorFromModule<T extends Class> {
        exportName: string;
        args: ConstructorParameters<T>;
        moduleSpecifier: string;
    }
    interface ConstructorFromClass<T extends Class> {
        constructorFunction: T;
        args: ConstructorParameters<T>;
    }
    interface Method<T extends Class, K extends keyof InstanceType<T>> {
        target: InstanceType<T>;
        property: K;
        args: Parameters<InstanceType<T>[K]>;
    }
    type Args<T extends Class, K extends keyof InstanceType<T>> =
        | (ConstructorParameters<T> & Parameters<InstanceType<T>[K]>)
        | any[];
    type Instance<T extends Class> = InstanceType<T>;
    interface ParsedRev {
        txId: string;
        outputIndex: number;
    }
    interface SecretOutput {
        data: string;
    }

    class RestClient {
        readonly chain: string;
        readonly network: string;
        readonly mnemonic: any;
        readonly path: string;
        readonly passphrase: string;
        private bcn;
        constructor({ chain, network, mnemonic, path, passphrase, url }?: ComputerOptions);
        get privateKey(): any;
        getBalance(address: string): Promise<number>;
        getTransactions(txIds: string[]): Promise<any[]>;
        getRawTxs(txIds: string[]): Promise<string[]>;
        sendTransaction(rawTx: string): Promise<string>;
        getUtxosByAddress(address: string): Promise<Txo[]>;
        query({ publicKey, classHash }: Query): Promise<string[]>;
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
        }): Promise<{
            _url: string;
        }>;
        static deleteSecretOutput({ _url, privateKey }: { _url: string; privateKey: any }): Promise<void>;
        get url(): string;
    }

    class Tx {
        tx: any;
        outData: Array<SmartObj<any>>;
        restClient: RestClient;
        constructor({ restClient }?: { restClient?: RestClient });
        get txId(): string;
        get chain(): Chain;
        get network(): Network;
        get inputs(): string[];
        get inRevs(): string[];
        get outRevs(): string[];
        get opReturns(): string;
        get enc(): number[];
        get dataPrefix(): string;
        isBcdbTx(): boolean;
        isFullyFunded(): boolean;
        getOwnerOutputs(): any;
        getDataOutputs(): any;
        getOutData(): Promise<Array<SmartObj<unknown>> | Array<null>>;
        getOwners(): string[][];
        getAmounts(): number[];
        spendFromData(inputRevs: string[]): Promise<void>;
        createDataOuts(objects: any[]): void;
        static getBcTx({ hex, restClient }: { hex?: string; restClient?: RestClient }): Tx;
        static fromTxHex({ hex, restClient }: { hex?: string; restClient?: RestClient }): Promise<Tx>;
        static fromTxId({ txId, restClient }: { txId?: string; restClient?: RestClient }): Promise<Tx>;
    }

    class Db {
        wallet: any;
        constructor(params?: ComputerOptions);
        fromTxHex(hex: string): Promise<Tx>;
        fromTxId(txId: string): Promise<Tx>;
        get(inputRevs: string[]): Promise<Array<SmartObj<unknown>>>;
        put(objects: Array<SmartObj<unknown>>): Promise<string[]>;
        getBcTx(hex: string): Tx;
        createTx(inputRevs: string[], objects: Array<SmartObj<unknown>>): Promise<Tx>;
        update(inputRevs: string[], objects: Array<SmartObj<unknown>>): Promise<string[]>;
    }
    class Computer {
        db: Db;
        constructor(params?: ComputerOptions);
        new<T extends Class>(
            constructorOrExport: T | string,
            args?: ConstructorParameters<T>,
            moduleSpecifier?: string,
        ): Promise<InstanceType<T>>;
        sync(outId: string): Promise<InstanceType<any>>;
        query({ publicKey, contract }: UserQuery): Promise<string[]>;
        idsToRevs(ids: string[]): Promise<string[]>;
        deploy(module: string): Promise<string>;
        import(name: string, rev: string): Promise<Class>;
        getChain(): string;
        getNetwork(): string;
        getMnemonic(): string;
        getPrivateKey(): string;
        getPublicKey(): string;
        getAddress(): string;
        getBalance(): Promise<number>;
        getUtxos(): Promise<any[]>;
        broadcast(txHex: string): Promise<string>;
        queryRevs(q: Query): Promise<string[]>;
        getOwnedRevs(publicKey?: any): Promise<string[]>;
        getRevs(publicKey?: any): Promise<string[]>;
        getLatestRevs(ids: string[]): Promise<string[]>;
        getLatestRev(id: string): Promise<string>;
        rpcCall(method: string, params: string): Promise<any>;
    }

    export { Computer };
}
