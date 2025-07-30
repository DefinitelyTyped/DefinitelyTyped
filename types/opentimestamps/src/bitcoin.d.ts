export class BlockHeader {
    constructor(merkleroot: string, hash: string, time: number);
    getMerkleroot(): string;
    getHash(): string;
    getTime(): number;
}

export interface BitcoinConf {
    rpcuser: string;
    rpcpassword: string;
    rpcconnect?: string;
    rpcport?: string;
    testnet?: boolean;
}

export class BitcoinNode {
    constructor(bitcoinConf: BitcoinConf);
    static readBitcoinConf(): Promise<BitcoinConf>;
    getInfo(): Promise<any>;
    getBlockHeader(height: number): Promise<BlockHeader>;
    callRPC(params: any): Promise<any>;
}
