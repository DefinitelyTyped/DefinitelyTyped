export default class Client {
    constructor(config: Config);
    electrumClient: any;
    connect(): Promise<void>;
    close(): Promise<void>;
    latestBlockHeight(): number;
    getTransaction(txHash: string): any;
    broadcastTransaction(rawTX: string): string;
    getUnspentToScript(script: string): any;
    getBalanceOfScript(script: string): any;
    onTransactionToScript(script: string, callback: (state: any) => void): any;
    onNewBlock(callback: (block: any) => void): any;
    getMerkleRoot(blockHeight: number): string;
    getHeadersChain(blockHeight: number, confirmations: number): string;
    getMerkleProof(txHash: string, blockHeight: number): string;
    findOutputForAddress(txHash: string, address: string): number;
    getTransactionsForScript(script: string): any;
}

export interface Config {
    server: string;
    port: number;
    protocol: "ssl" | "tls" | "ws" | "wss";
    options?: any;
}
