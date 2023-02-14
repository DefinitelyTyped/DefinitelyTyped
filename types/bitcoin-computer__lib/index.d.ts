// Type definitions for @bitcoin-computer/lib 0.10
// Project: https://github.com/bitcoin-computer/monorepo
// Definitions by: jonty007 <https://github.com/jonty007>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

type Class = new (...args: any) => any;

declare class Computer {
    db: any;
    constructor(params?: any);
    new<T extends Class>(
        constructorOrExport: T | string,
        args?: ConstructorParameters<T>,
        moduleSpecifier?: string,
    ): Promise<InstanceType<T>>;
    sync(outId: string): Promise<InstanceType<any>>;
    query({ publicKey, contract }: any): Promise<string[]>;
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
    queryRevs(q: any): Promise<string[]>;
    getOwnedRevs(publicKey?: any): Promise<string[]>;
    getRevs(publicKey?: any): Promise<string[]>;
    getLatestRevs(ids: string[]): Promise<string[]>;
    getLatestRev(id: string): Promise<string>;
    rpcCall(method: string, params: string): Promise<any>;
}

export { Computer };
