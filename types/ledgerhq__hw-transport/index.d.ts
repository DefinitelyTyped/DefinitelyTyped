/// <reference types="node" />

declare class Transport<TDescriptor extends Descriptor = string> {
    constructor();
    static isSupported(): Promise<boolean>;
    static list(): Promise<ReadonlyArray<Descriptor>>;
    static listen(observer: Observer<DescriptorEvent<Descriptor>>): Subscription;
    static open(descriptor: Descriptor, timeout?: number): Promise<Transport<typeof descriptor>>;
    static create(openTimeout?: number, listenTimeout?: number): Promise<Transport<Descriptor>>;
    exchange(apdu: Buffer): Promise<Buffer>;
    setScrambleKey(key: string): void;
    close(): Promise<void>;
    on(eventName: string, cb: any): void;
    off(eventName: string, cb: any): void;
    setDebugMode(debug: boolean | ((log: string) => void)): void;
    setExchangeTimeout(exchangeTimeout: number): void;
    /**
     * A wrapper around exchange to simplify work of the implementation.
     * @param data The data to be sent. Defaults to a zero-length Buffer.
     * @param statusList A list of accepted status code (shorts). [0x9000] by default.
     * @return A Promise of the response Buffer
     */
    send(
        cla: number,
        ins: number,
        p1: number,
        p2: number,
        data?: Buffer,
        statusList?: ReadonlyArray<number>,
    ): Promise<Buffer>;
    decorateAppAPIMethods(self: any, methods: string[], scrambleKey: string): void;
}

export type Device = any;
export type Descriptor = string; // ?
export interface DescriptorEvent<Descriptor> {
    type: "add" | "remove";
    descriptor: Descriptor;
    device?: Device | undefined;
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
export const StatusCodes: { [k in string]: number };

export default Transport;
