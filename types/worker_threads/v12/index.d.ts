// Type definitions for non-npm package Node.js 12.19
// Project: http://nodejs.org/
// Definitions by: Microsoft TypeScript <https://github.com/Microsoft>
//                 DefinitelyTyped <https://github.com/DefinitelyTyped>
//                 Alberto Schiabel <https://github.com/jkomyno>
//                 Alexander T. <https://github.com/a-tarasyuk>
//                 Alvis HT Tang <https://github.com/alvis>
//                 Andrew Makarov <https://github.com/r3nya>
//                 Benjamin Toueg <https://github.com/btoueg>
//                 Bruno Scheufler <https://github.com/brunoscheufler>
//                 Chigozirim C. <https://github.com/smac89>
//                 David Junger <https://github.com/touffy>
//                 Deividas Bakanas <https://github.com/DeividasBakanas>
//                 Eugene Y. Q. Shen <https://github.com/eyqs>
//                 Flarna <https://github.com/Flarna>
//                 Hannes Magnusson <https://github.com/Hannes-Magnusson-CK>
//                 Hoàng Văn Khải <https://github.com/KSXGitHub>
//                 Huw <https://github.com/hoo29>
//                 Kelvin Jin <https://github.com/kjin>
//                 Klaus Meinhardt <https://github.com/ajafff>
//                 Lishude <https://github.com/islishude>
//                 Mariusz Wiktorczyk <https://github.com/mwiktorczyk>
//                 Mohsen Azimi <https://github.com/mohsen1>
//                 Nicolas Even <https://github.com/n-e>
//                 Nikita Galkin <https://github.com/galkin>
//                 Parambir Singh <https://github.com/parambirs>
//                 Sebastian Silbermann <https://github.com/eps1lon>
//                 Simon Schick <https://github.com/SimonSchick>
//                 Thomas den Hollander <https://github.com/ThomasdenH>
//                 Wilco Bakker <https://github.com/WilcoBakker>
//                 wwwy3y3 <https://github.com/wwwy3y3>
//                 Zane Hannan AU <https://github.com/ZaneHannanAU>
//                 Samuel Ainsworth <https://github.com/samuela>
//                 Kyle Uehlein <https://github.com/kuehlein>
//                 Jordi Oliveras Rovira <https://github.com/j-oliveras>
//                 Thanik Bhongbhibhat <https://github.com/bhongy>
//                 Marcin Kopacz <https://github.com/chyzwar>
//                 Trivikram Kamat <https://github.com/trivikr>
//                 Minh Son Nguyen <https://github.com/nguymin4>
//                 Junxiao Shi <https://github.com/yoursunny>
//                 Ilia Baryshnikov <https://github.com/qwelias>
//                 ExE Boss <https://github.com/ExE-Boss>
//                 Jason Kwok <https://github.com/JasonHK>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import 'node/events';
import { EventEmitter } from 'events';
import { promises } from 'fs';
import { Readable, Writable } from 'stream';
import { Context } from 'vm';

export {};

export const isMainThread: boolean;
export const parentPort: null | MessagePort;
export const resourceLimits: ResourceLimits;
export const SHARE_ENV: unique symbol;
export const threadId: number;
export const workerData: any;

export class MessageChannel {
    readonly port1: MessagePort;
    readonly port2: MessagePort;
}

export type TransferListItem = ArrayBuffer | MessagePort | promises.FileHandle;

export class MessagePort extends EventEmitter {
    close(): void;
    postMessage(value: any, transferList?: ReadonlyArray<TransferListItem>): void;
    ref(): void;
    unref(): void;
    start(): void;

    addListener(event: "close", listener: () => void): this;
    addListener(event: "message", listener: (value: any) => void): this;
    addListener(event: string | symbol, listener: (...args: any[]) => void): this;

    emit(event: "close"): boolean;
    emit(event: "message", value: any): boolean;
    emit(event: string | symbol, ...args: any[]): boolean;

    on(event: "close", listener: () => void): this;
    on(event: "message", listener: (value: any) => void): this;
    on(event: string | symbol, listener: (...args: any[]) => void): this;

    once(event: "close", listener: () => void): this;
    once(event: "message", listener: (value: any) => void): this;
    once(event: string | symbol, listener: (...args: any[]) => void): this;

    prependListener(event: "close", listener: () => void): this;
    prependListener(event: "message", listener: (value: any) => void): this;
    prependListener(event: string | symbol, listener: (...args: any[]) => void): this;

    prependOnceListener(event: "close", listener: () => void): this;
    prependOnceListener(event: "message", listener: (value: any) => void): this;
    prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): this;

    removeListener(event: "close", listener: () => void): this;
    removeListener(event: "message", listener: (value: any) => void): this;
    removeListener(event: string | symbol, listener: (...args: any[]) => void): this;

    off(event: "close", listener: () => void): this;
    off(event: "message", listener: (value: any) => void): this;
    off(event: string | symbol, listener: (...args: any[]) => void): this;
}

export interface WorkerOptions {
    eval?: boolean;
    env?: { [key: string]: string | undefined } | typeof SHARE_ENV;
    workerData?: any;
    stdin?: boolean;
    stdout?: boolean;
    stderr?: boolean;
    execArgv?: string[];
    resourceLimits?: ResourceLimits;
    /**
     * Additional data to send in the first worker message.
     */
    transferList?: TransferListItem[];
    trackUnmanagedFds?: boolean;
}

export interface ResourceLimits {
    /**
     * The maximum size of a heap space for recently created objects.
     */
    maxYoungGenerationSizeMb?: number;
    /**
     * The maximum size of the main heap in MB.
     */
    maxOldGenerationSizeMb?: number;
    /**
     * The size of a pre-allocated memory range used for generated code.
     */
    codeRangeSizeMb?: number;
    /**
     * The default maximum stack size for the thread. Small values may lead to unusable Worker instances.
     * @default 4
     */
    stackSizeMb?: number;
}

export class Worker extends EventEmitter {
    readonly stdin: Writable | null;
    readonly stdout: Readable;
    readonly stderr: Readable;
    readonly threadId: number;
    readonly resourceLimits?: ResourceLimits;

    constructor(filename: string, options?: WorkerOptions);

    postMessage(value: any, transferList?: ReadonlyArray<TransferListItem>): void;
    ref(): void;
    unref(): void;
    /**
     * Stop all JavaScript execution in the worker thread as soon as possible.
     * Returns a Promise for the exit code that is fulfilled when the `exit` event is emitted.
     */
    terminate(): Promise<number>;

    addListener(event: "error", listener: (err: Error) => void): this;
    addListener(event: "exit", listener: (exitCode: number) => void): this;
    addListener(event: "message", listener: (value: any) => void): this;
    addListener(event: "messageerror", listener: (error: Error) => void): this;
    addListener(event: "online", listener: () => void): this;
    addListener(event: string | symbol, listener: (...args: any[]) => void): this;

    emit(event: "error", err: Error): boolean;
    emit(event: "exit", exitCode: number): boolean;
    emit(event: "message", value: any): boolean;
    emit(event: "messageerror", error: Error): boolean;
    emit(event: "online"): boolean;
    emit(event: string | symbol, ...args: any[]): boolean;

    on(event: "error", listener: (err: Error) => void): this;
    on(event: "exit", listener: (exitCode: number) => void): this;
    on(event: "message", listener: (value: any) => void): this;
    on(event: "messageerror", listener: (error: Error) => void): this;
    on(event: "online", listener: () => void): this;
    on(event: string | symbol, listener: (...args: any[]) => void): this;

    once(event: "error", listener: (err: Error) => void): this;
    once(event: "exit", listener: (exitCode: number) => void): this;
    once(event: "message", listener: (value: any) => void): this;
    once(event: "messageerror", listener: (error: Error) => void): this;
    once(event: "online", listener: () => void): this;
    once(event: string | symbol, listener: (...args: any[]) => void): this;

    prependListener(event: "error", listener: (err: Error) => void): this;
    prependListener(event: "exit", listener: (exitCode: number) => void): this;
    prependListener(event: "message", listener: (value: any) => void): this;
    prependListener(event: "messageerror", listener: (error: Error) => void): this;
    prependListener(event: "online", listener: () => void): this;
    prependListener(event: string | symbol, listener: (...args: any[]) => void): this;

    prependOnceListener(event: "error", listener: (err: Error) => void): this;
    prependOnceListener(event: "exit", listener: (exitCode: number) => void): this;
    prependOnceListener(event: "message", listener: (value: any) => void): this;
    prependOnceListener(event: "messageerror", listener: (error: Error) => void): this;
    prependOnceListener(event: "online", listener: () => void): this;
    prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): this;

    removeListener(event: "error", listener: (err: Error) => void): this;
    removeListener(event: "exit", listener: (exitCode: number) => void): this;
    removeListener(event: "message", listener: (value: any) => void): this;
    removeListener(event: "messageerror", listener: (error: Error) => void): this;
    removeListener(event: "online", listener: () => void): this;
    removeListener(event: string | symbol, listener: (...args: any[]) => void): this;

    off(event: "error", listener: (err: Error) => void): this;
    off(event: "exit", listener: (exitCode: number) => void): this;
    off(event: "message", listener: (value: any) => void): this;
    off(event: "messageerror", listener: (error: Error) => void): this;
    off(event: "online", listener: () => void): this;
    off(event: string | symbol, listener: (...args: any[]) => void): this;
}

/**
 * Mark an object as not transferable.
 * If `object` occurs in the transfer list of a `port.postMessage()` call, it will be ignored.
 *
 * In particular, this makes sense for objects that can be cloned, rather than transferred,
 * and which are used by other objects on the sending side. For example, Node.js marks
 * the `ArrayBuffer`s it uses for its Buffer pool with this.
 *
 * This operation cannot be undone.
 */
export function markAsUntransferable(object: object): void;

/**
 * Transfer a `MessagePort` to a different `vm` Context. The original `port`
 * object will be rendered unusable, and the returned `MessagePort` instance will
 * take its place.
 *
 * The returned `MessagePort` will be an object in the target context, and will
 * inherit from its global `Object` class. Objects passed to the
 * `port.onmessage()` listener will also be created in the target context
 * and inherit from its global `Object` class.
 *
 * However, the created `MessagePort` will no longer inherit from
 * `EventEmitter`, and only `port.onmessage()` can be used to receive
 * events using it.
 */
export function moveMessagePortToContext(port: MessagePort, context: Context): MessagePort;

/**
 * Receive a single message from a given `MessagePort`. If no message is available,
 * `undefined` is returned, otherwise an object with a single `message` property
 * that contains the message payload, corresponding to the oldest message in the
 * `MessagePort`’s queue.
 */
export function receiveMessageOnPort(port: MessagePort): { message: any } | undefined;
