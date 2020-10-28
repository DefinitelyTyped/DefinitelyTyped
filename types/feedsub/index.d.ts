// Type definitions for feedsub 0.7
// Project: https://github.com/fent/node-feedsub#readme
// Definitions by: Jesse Chan <https://github.com/jesec>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.5

/// <reference types="node" />

import http = require('http');

/**
 * This is similar to Parameters but will work with a type which is
 * a function or with a tuple specifying arguments, which are both
 * common ways to define eventemitter events
 */
type EventArguments<T> = [T] extends [(...args: infer U) => any] ? U : [T] extends [undefined] ? [] : [T];

/**
 * Type-safe event emitter from https://github.com/andywer/typed-emitter.
 *
 * Use it like this:
 *
 * interface MyEvents {
 *   error: (error: Error) => void
 *   message: (from: string, content: string) => void
 * }
 *
 * const myEmitter = new EventEmitter() as TypedEmitter<MyEvents>
 *
 * myEmitter.on("message", (from, content) => {
 *   // ...
 * })
 *
 * myEmitter.emit("error", "x")  // <- Will catch this type error
 */
declare class TypedEventEmitter<Events> {
    addListener<E extends keyof Events>(event: E, listener: Events[E]): this;
    on<E extends keyof Events>(event: E, listener: Events[E]): this;
    once<E extends keyof Events>(event: E, listener: Events[E]): this;
    prependListener<E extends keyof Events>(event: E, listener: Events[E]): this;
    prependOnceListener<E extends keyof Events>(event: E, listener: Events[E]): this;

    off<E extends keyof Events>(event: E, listener: Events[E]): this;
    removeAllListeners<E extends keyof Events>(event?: E): this; // tslint:disable-line no-unnecessary-generics
    removeListener<E extends keyof Events>(event: E, listener: Events[E]): this;

    emit<E extends keyof Events>(event: E, ...args: EventArguments<Events[E]>): boolean;
    eventNames(): Array<keyof Events>;
    rawListeners<E extends keyof Events>(event: E): Function[]; // tslint:disable-line:ban-types no-unnecessary-generics
    listeners<E extends keyof Events>(event: E): Function[]; // tslint:disable-line:ban-types no-unnecessary-generics
    listenerCount<E extends keyof Events>(event: E): number; // tslint:disable-line no-unnecessary-generics

    getMaxListeners(): number;
    setMaxListeners(maxListeners: number): this;
}

declare namespace FeedSub {
    type FeedItem = Record<string, unknown>;

    interface FeedSubOptions {
        // Number of minutes to wait between checking the feed for new items. [default: 10]
        interval?: number;

        // Some feeds contain a `ttl` tag that specify the
        // number of minutes to cache the feed.
        // Setting this to true will ignore that. [default: false]
        forceInterval?: boolean;

        // If true, calls `reader.start()` when initialized. [default: false]
        autoStart?: boolean;

        // Emits items on the very first request.
        // After which, it should consider those items read. [default: false]
        emitOnStart?: boolean;

        // Keeps track of last date of the feed. [default: null]
        lastDate?: number;

        // Maximum size of `history` array. [default: 10]
        maxHistory?: number;

        // Some feeds have a `skipHours` tag with a list of
        // hours in which the feed should not be read.
        // if this is set to true and the feed has that tag, it obeys that rule [default: false]
        skipHours?: boolean;

        // If you'd like to specify exactly what hours to skip. [default: []]
        hoursToSkip?: number[];

        // Same as `skipHours`, but with days. [default: false]
        skipDays?: boolean;

        // Specify exactly what days to skip, ex: ['Saturday', 'Sunday']. [default: []]
        daysToSkip?: string[];

        // Options object passed to [miniget](https://github.com/fent/node-miniget). [default: {}]
        requestOpts?: http.RequestOptions;
    }

    interface FeedSubEvents {
        // Emitted whenever there is a new item.
        item: (item: FeedItem) => void;

        // Emits all new items from one request in one array.
        items: (items: FeedItem[]) => void;

        // Emitted when there is an error downloading or parsing the feed.
        // Not emitted if callback is given for read or readInterval.
        error: (error: Error) => void;
    }
}

declare class FeedSub extends TypedEventEmitter<FeedSub.FeedSubEvents> {
    /**
     * Options that were passed to the constructor along with any defaults are kept here.
     */
    options: FeedSub.FeedSubOptions;

    /**
     * Creates a new instance of FeedSub.
     * @param feed URL of feed to subscribe
     * @param options Optional options
     */
    constructor(feed: string, options?: FeedSub.FeedSubOptions);

    /**
     * Reads the feed. Calls callback with possible error or new items discovered if provided.
     * Causes reader to emit new item events.
     * @param callback The function to call.
     */
    read(callback?: (err: Error | null, items?: FeedSub.FeedItem[]) => void): void;

    /**
     * Starts checking the feed for any new items.
     * It checks right away, and then, every options.interval minutes.
     */
    start(): void;

    /**
     * Stops the reader from automatically reading the feed.
     */
    stop(): void;
}

export = FeedSub;
