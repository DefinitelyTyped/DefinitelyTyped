export type Callback<T> = (error: Error, result: T) => void;

export interface EventEmitter {
    on(type: "data", handler: (event: EventLog) => void): EventEmitter;
    on(type: "changed", handler: (receipt: EventLog) => void): EventEmitter;
    on(type: "error", handler: (error: Error) => void): EventEmitter;
    on(
        type: "error" | "data" | "changed",
        handler: (error: Error | TransactionReceipt | string) => void
    ): EventEmitter;
}

export interface EventLog {
    event: string;
    address: string;
    returnValues: any;
    logIndex: number;
    transactionIndex: number;
    transactionHash: string;
    blockHash: string;
    blockNumber: number;
    raw?: { data: string; topics: string[] };
}

export interface TransactionReceipt {
    transactionHash: string;
    transactionIndex: number;
    blockHash: string;
    blockNumber: number;
    from: string;
    to: string;
    contractAddress: string;
    cumulativeGasUsed: number;
    gasUsed: number;
    logs?: Log[];
    events?: {
        [eventName: string]: EventLog;
    };
    status: boolean;
}

export interface EncodedTransaction {
    raw: string;
    tx: {
        nonce: string;
        gasPrice: string;
        gas: string;
        to: string;
        value: string;
        input: string;
        v: string;
        r: string;
        s: string;
        hash: string;
    };
}

export interface Logs {
    fromBlock?: number;
    address?: string;
    topics?: Array<string | string[]>;
}
export interface Log {
    address: string;
    data: string;
    topics: string[];
    logIndex: number;
    transactionHash: string;
    transactionIndex: number;
    blockHash: string;
    blockNumber: number;
}
export interface Subscribe<T> {
    subscription: {
        id: string;
        subscribe(callback?: Callback<Subscribe<T>>): Subscribe<T>;
        unsubscribe(callback?: Callback<boolean>): void | boolean;
        arguments: object;
    };
    on(type: "data" | "changed", handler: (data: T) => void): void;
    on(type: "error", handler: (data: Error) => void): void;
}

export interface Shh {
    generateSymKeyFromPassword(password: string): Promise<string>;
    generateSymKeyFromPassword(
        password: string,
        callback: Callback<string>
    ): void;
    // TODO: type every method
}
export class Bzz {} // TODO: Type
