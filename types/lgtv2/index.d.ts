/// <reference types="node" />

import { EventEmitter } from "events";

declare namespace LGTV {
    interface SpecializedSocket {
        send(type: string, payload?: any): void;

        close(): void;
    }

    interface Config {
        url?: string | undefined;
        timeout?: number | undefined;
        reconnect?: number | undefined;
        keyFile?: string | undefined;
        clientKey?: string | undefined;
        saveKey?: ((key: string, callback: (error?: NodeJS.ErrnoException | null) => void) => void) | undefined;
    }
}

declare function LGTV(config?: LGTV.Config): LGTV;

declare class LGTV extends EventEmitter {
    constructor(config?: LGTV.Config);

    clientKey: string;

    private register(): void;

    connect(host: string): void;

    disconnect(): void;

    private send(type: string, uri: string, callback: (error: Error | null, result: any) => void): void;
    private send(type: string, uri: string, payload?: any, callback?: (error: Error | null, result: any) => void): void;

    getSocket(url: string, callback: (error: Error | null, socket: LGTV.SpecializedSocket) => void): void;

    request(uri: string, callback: (error: Error | null, result: any) => void): void;
    request(uri: string, payload?: any, callback?: (error: Error | null, result: any) => void): void;

    subscribe(uri: string, callback: (error: Error | null, result: any) => void): void;
    subscribe(uri: string, payload?: any, callback?: (error: Error | null, result: any) => void): void;

    on(event: "connecting", listener: (host: string) => void): this;
    on(event: "connect" | "prompt", listener: () => void): this;
    on(event: "error", listener: (error: Error) => void): this;
    on(event: "close", listener: (hadError: boolean) => void): this;
}

export = LGTV;
