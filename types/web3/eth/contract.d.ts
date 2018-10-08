import { Callback, EventLog, EventEmitter } from "../types";
import { TransactionObject, BlockType, EventFilters, PastEventFilters } from "./types";
import { ABIDefinition } from "./abi";
import { Provider } from "../providers";

interface CustomOptions {
    address?: string;
    jsonInterface?: ABIDefinition[];
    data?: string;
    from?: string;
    gasPrice?: string;
    gas?: number;
}

interface contractOptions {
    address: string;
    jsonInterface: ABIDefinition[];
    data: string;
    from: string;
    gasPrice: string;
    gas: number;
}

export default class Contract {
    constructor(
        jsonInterface: any[],
        address?: string,
        options?: CustomOptions
    );
    options: contractOptions;
    methods: {
        [fnName: string]: (...args: any[]) => TransactionObject<any>;
    };
    deploy(options: {
        data: string;
        arguments: any[];
    }): TransactionObject<Contract>;
    events: {
        [eventName: string]: (
            options?: EventFilters,
            cb?: Callback<EventLog>
        ) => EventEmitter;
        allEvents: (
            options?: EventFilters,
            cb?: Callback<EventLog>
        ) => EventEmitter;
    };
    getPastEvents(
        event: string,
        options?: PastEventFilters,
        cb?: Callback<EventLog[]>
    ): Promise<EventLog[]>;
    setProvider(provider: Provider): void;
}
