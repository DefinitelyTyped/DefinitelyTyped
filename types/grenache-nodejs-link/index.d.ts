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
    retry?: number;
}

interface AnnounceOptions {
    interval?: number;
    retry?: number;
}

type Callback<T = unknown> = (err: Error | null, data?: T) => void;

declare class Link extends EventEmitter {
    constructor(options: LinkOptions);

    /** Start link communication */
    start(): this;

    /** Stop link and all announcements */
    stop(): this;

    /** Put arbitrary JSON data into the DHT */
    put(
        value: unknown,
        callback: Callback<string>,
    ): void;

    /** Get data from the DHT by hash */
    get(
        hash: string,
        callback: Callback<unknown>,
    ): void;

    /** Lookup peers for a service name */
    lookup(
        name: string,
        options: LookupOptions,
        callback: Callback<string[]>,
    ): void;

    lookup(
        name: string,
        callback: Callback<string[]>,
    ): void;

    /** Announce a service once */
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

    /** Start periodic service announcement */
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

    /** Stop announcing a service */
    stopAnnouncing(name?: string, port?: number): this;
}

export = Link;
