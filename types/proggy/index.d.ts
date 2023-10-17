/// <reference types="node" />
import EventEmitter = require("node:events");

/**
 * Create a new Client.
 */
export function createClient(options?: ClientOptions): Client;
/**
 * Create a new `Tracker`.
 *
 * key will default to name if not set. It must be unique.
 */
export function createTracker(name: string, key?: string, total?: number): Tracker;

export interface ClientOptions {
    normalize?: boolean;
    stopOnDone?: boolean;
}
export type ClientEvent = "bar" | "progress" | "barDone" | "done";
export type ClientData =
    & {
        /**
         * The unique key for this progress bar.
         */
        key: string;
        /**
         * The name for this progress bar.
         */
        name: string;
        /**
         * The current value of the progress. If client.normalize is true, then this will always be a number less than 100, and never reduce from one update to the next.
         */
        value: number;
        /**
         * The expected final value of the progress. If client.normalize is true, then this number will always be 100.
         */
        total: number;
        /**
         * The value originally sent by the tracker. If client.normalize is not true, then this is always equal to value.
         */
        actualValue: number;
        /**
         * The total originally sent by the tracker. If client.normalize is not true, then this is always equal to total.
         */
        actualTotal: number;
        /**
         * True if the tracker explicitly sent done: true in the data, or if value is greater than or equal to total.
         */
        done: boolean;
    }
    & {
        [K in string | number | symbol]: any;
    };
/**
 * The Client class, for consuming progress information.
 *
 * Set normalize: true in the options object to prevent backward motion and fix the total value at 100.
 * Set stopOnDone: true in the options object to tell the client to automatically stop when it emits its 'done' event.
 */
export class Client extends EventEmitter {
    constructor(options?: ClientOptions);
    on(eventName: ClientEvent, listener: (key: string, data: ClientData) => void): this;
    off(eventName: ClientEvent, listener: (key: string, data: ClientData) => void): this;
    addListener(eventName: ClientEvent, listener: (key: string, data: ClientData) => void): this;
    removeListener(eventName: ClientEvent, listener: (key: string, data: ClientData) => void): this;
    /**
     * The number of active trackers this Client is aware of
     */
    get size(): number;
    get listening(): boolean;
    /**
     * Begin listening for 'progress' events on the process object.
     *
     * Called implicitly if client.on('progress', fn) is called.
     */
    stop(): void;
    /**
     * Stop listening for 'progress' events on the process object.
     *
     * Called implicitly when the 'done' event is emitted, if options.stopOnDone is true.
     */
    start(): void;
    /**
     * Whether this Client is in normalizing mode
     */
    normalize: boolean;
}
/**
 * The Tracker class, for emitting progress information.
 *
 * total will default to 100 if not set, but will be updated whenever progress is tracked.
 */
export class Tracker extends EventEmitter {
    constructor(name: string, total?: number);
    constructor(name: string, key?: string, total?: number);
    /**
     * Alias for tracker.update(tracker.total, tracker.total, metadata)
     */
    finish(metadata?: object): void;
    /**
     * Update the tracker and emit a 'progress' event on the process object.
     */
    update(value: number, metadata?: object): void;
    update(value: number, total: number, metadata?: object): void;
    /**
     * The name set in the constructor
     */
    name: string;
    /**
     * The identifer set in the constructor
     */
    key: string;
    /**
     * true if the tracker is completed.
     */
    done: boolean;
    /**
     * The most recent values updated.
     */
    total: number;
}
