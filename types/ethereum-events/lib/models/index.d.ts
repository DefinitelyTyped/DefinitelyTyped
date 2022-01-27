export type EventType = 'block' | 'block.confirmed' | 'block.unconfirmed';

export interface EthereumEvent<T = any> {
    name: string;
    contract: string;
    timestamp: Date;
    blockHash: string;
    blockNumber: number;
    transactionHash: string;
    transactionIndex: number;
    from: string;
    to: string;
    logIndex: number;
    values: T;
}
