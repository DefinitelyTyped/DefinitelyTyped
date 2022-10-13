// Type definitions for @bitcoin-computer/lib 0.9
// Project: https://github.com/bitcoin-computer/monorepo (Does not have to be to GitHub, but prefer linking to a source code repository rather than to a project website.)
// Definitions by: jonty007 <https://github.com/jonty007>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module '@bitcoin-computer/node';
declare module '@bitcoin-computer/lib' {
    type Class = new (...args: any) => any;

    class Computer {
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
}
