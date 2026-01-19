/// <reference types="node" />

import { EventEmitter } from "events";

declare namespace GrenacheNodejsLink {
    interface LinkOptions {
        grape: string | string[];
        monitorTimeout?: number;
        requestTimeout?: number;
        lruMaxSizeLookup?: number;
        lruMaxAgeLookup?: number;
    }

    interface LookupOptions {
        retry?: number;
    }

    interface AnnounceOptions {
        interval?: number;
        retry?: number;
    }

    type Callback<T = unknown> = (err: Error | null, data?: T) => void;
}

declare class Link extends EventEmitter {
    constructor(options: GrenacheNodejsLink.LinkOptions);

    /** Start link communication */
    start(): this;

    /** Stop link and all announcements */
    stop(): this;

    /** Put arbitrary JSON data into the DHT */
    put(
        value: unknown,
        callback: GrenacheNodejsLink.Callback<string>,
    ): void;

    /** Get data from the DHT by hash */
    get(
        hash: string,
        callback: GrenacheNodejsLink.Callback<unknown>,
    ): void;

    /** Lookup peers for a service name */
    lookup(
        name: string,
        options: GrenacheNodejsLink.LookupOptions,
        callback: GrenacheNodejsLink.Callback<string[]>,
    ): void;

    lookup(
        name: string,
        callback: GrenacheNodejsLink.Callback<string[]>,
    ): void;

    /** Announce a service once */
    announce(
        name: string,
        port: number,
        options: GrenacheNodejsLink.AnnounceOptions,
        callback?: GrenacheNodejsLink.Callback<void>,
    ): void;

    announce(
        name: string,
        port: number,
        callback?: GrenacheNodejsLink.Callback<void>,
    ): void;

    /** Start periodic service announcement */
    startAnnouncing(
        name: string,
        port: number,
        options: GrenacheNodejsLink.AnnounceOptions,
        callback?: GrenacheNodejsLink.Callback<void>,
    ): void;

    startAnnouncing(
        name: string,
        port: number,
        callback?: GrenacheNodejsLink.Callback<void>,
    ): void;

    /** Stop announcing a service */
    stopAnnouncing(name?: string, port?: number): this;
}

export = Link;
