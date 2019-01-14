// Type definitions for @ledgerhq/hw-transport 4.21
// Project: https://github.com/LedgerHQ/ledgerjs/tree/master/packages/hw-transport
// Definitions by: Daniel Byrne <https://github.com/danwbyrne>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="node" />

declare class Transport<TDescriptor extends Descriptor = string> {
    constructor();
    static isSupported(): Promise<boolean>;
    static list(): Promise<ReadonlyArray<Descriptor>>;
    static listen(
        observer: Observer<DescriptorEvent<Descriptor>>
    ): Subscription;
    static open(
        descriptor: Descriptor,
        timeout?: number
    ): Promise<Transport<typeof descriptor>>;
    static create(
        openTimeout?: number,
        listenTimeout?: number
    ): Promise<Transport<Descriptor>>;
    exchange(apdu: Buffer): Promise<Buffer>;
    setScrambleKey(key: string): void;
    close(): Promise<void>;
    on(eventName: string, cb: any): void;
    off(eventName: string, cb: any): void;
    setDebugMode(debug: boolean | ((log: string) => void)): void;
    setExchangeTimeout(exchangeTimeout: number): void;
    send(cla: number, ins: number, p1: number, p2: number, data: Buffer, statusList: ReadonlyArray<number>): Promise<Buffer>;
}

export type Device = any;
export type Descriptor = string; // ?
export interface DescriptorEvent<Descriptor> {
    type: "add" | "remove";
    descriptor: Descriptor;
    device?: Device;
}
export interface Observer<Ev> {
    readonly next: (event: Ev) => any;
    readonly error: (e: any) => any;
    readonly complete: () => any;
}
export interface Subscription {
    readonly unsubscribe: () => void;
}
export function getAltStatusMessage(code: number): string;
export const StatusCodes: {[k in string]: number};

export default Transport;
