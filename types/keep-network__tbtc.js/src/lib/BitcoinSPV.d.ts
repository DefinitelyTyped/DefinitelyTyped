export class BitcoinSPV {
    constructor(electrumClient: any);
    client: any;
    getTransactionProof(txHash: string, confirmations: number): Proof;
    verifyMerkleProof(proofHex: string, txHash: string, index: number, blockHeight: number): boolean;
}

export interface Proof {
    tx: string;
    merkleProof: string;
    txInBlockIndex: string;
    chainHeaders: string;
}
