/// <reference types="node" />

import { EventEmitter } from "events";

interface LinkOptions {
    grape: string | string[];
    monitorTimeout?: number | undefined;
    requestTimeout?: number | undefined;
    lruMaxSizeLookup?: number | undefined;
    lruMaxAgeLookup?: number | undefined;
}

interface LookupOptions {
    retry?: number | undefined;
}

interface AnnounceOptions {
    interval?: number | undefined;
    retry?: number | undefined;
}

type Callback<T = unknown> = (err: Error | null, data?: T) => void;

declare class Link extends EventEmitter {
    constructor(options: LinkOptions);

    start(): this;
    stop(): this;

    put(value: unknown, callback: Callback<string>): void;
    get(hash: string, callback: Callback<unknown>): void;

    lookup(
        name: string,
        options: LookupOptions,
        callback: Callback<string[]>,
    ): void;

    lookup(
        name: string,
        callback: Callback<string[]>,
    ): void;

    announce(
        name: string,
        port: number,
        options: AnnounceOptions,
        callback?: Callback<void>,
    ): void;

    announce(
        name: string,
        port: number,
        callback?: Callback<void>,
    ): void;

    startAnnouncing(
        name: string,
        port: number,
        options: AnnounceOptions,
        callback?: Callback<void>,
    ): void;

    startAnnouncing(
        name: string,
        port: number,
        callback?: Callback<void>,
    ): void;

    stopAnnouncing(name?: string, port?: number): this;
}

export = Link;
