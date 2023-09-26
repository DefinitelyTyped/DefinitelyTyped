import { EventEmitter } from "events";

declare namespace TarantoolConnection {
    interface TarantoolOptions {
        host?: string | undefined;
        port?: number | undefined;
        username?: string | undefined;
        password?: string | undefined;
        reserveHosts?: string[] | undefined;
        beforeReserve?: number | undefined;
        timeout?: number | undefined;
        retryStrategy?: ((times: number) => number) | undefined;
        lazyConnect?: boolean | undefined;
    }
}

declare class TarantoolConnection extends EventEmitter {
    constructor(options: TarantoolConnection.TarantoolOptions);

    /* Connection */

    connect(): Promise<void>;

    flushQueue(cb: (err: Error) => void): void;

    destroy(): void;

    disconnect(reconnect?: boolean): void;

    /* Commands */

    select(
        spaceId: number | string,
        indexId: number | string,
        limit: number,
        offset: number,
        iterator: string,
        key: any[],
    ): Promise<any>;

    delete(spaceId: number | string, indexId: number | string, key: any[]): Promise<any>;

    update(spaceId: number | string, indexId: number | string, key: any[], ops: any[]): Promise<any>;

    upsert(spaceId: number | string, ops: any[], tuple: any[]): Promise<any>;

    eval(expression: string, ...args: any[]): Promise<any>;

    call(functionName: string, ...args: any[]): Promise<any>;

    insert(spaceId: number | string, tuple: any[]): Promise<any>;

    replace(spaceId: number | string, tuple: any[]): Promise<any>;
}

export = TarantoolConnection;
