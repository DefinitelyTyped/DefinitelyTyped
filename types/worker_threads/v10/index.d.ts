// Type definitions for Node.js 10.17
// Project: http://nodejs.org/
// Definitions by: Microsoft TypeScript <https://github.com/Microsoft>
//                 DefinitelyTyped <https://github.com/DefinitelyTyped>
//                 Alberto Schiabel <https://github.com/jkomyno>
//                 Alexander T. <https://github.com/a-tarasyuk>
//                 Alvis HT Tang <https://github.com/alvis>
//                 Andrew Makarov <https://github.com/r3nya>
//                 Bruno Scheufler <https://github.com/brunoscheufler>
//                 Chigozirim C. <https://github.com/smac89>
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
//                 Jeremie Rodriguez <https://github.com/jeremiergz>
//                 Samuel Ainsworth <https://github.com/samuela>
//                 Kyle Uehlein <https://github.com/kuehlein>
//                 Jordi Oliveras Rovira <https://github.com/j-oliveras>
//                 Thanik Bhongbhibhat <https://github.com/bhongy>
//                 Minh Son Nguyen <https://github.com/nguymin4>
//                 ExE Boss <https://github.com/ExE-Boss>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import 'node/events';
import { EventEmitter } from 'events';
import { Readable, Writable } from 'stream';

export {};

export const isMainThread: boolean;
export const parentPort: null | MessagePort;
export const threadId: number;
export const workerData: any;

export class MessageChannel {
    readonly port1: MessagePort;
    readonly port2: MessagePort;
}

export class MessagePort extends EventEmitter {
    close(): void;
    postMessage(value: any, transferList?: ReadonlyArray<ArrayBuffer | MessagePort>): void;
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
    workerData?: any;
    stdin?: boolean;
    stdout?: boolean;
    stderr?: boolean;
}

export class Worker extends EventEmitter {
    readonly stdin: Writable | null;
    readonly stdout: Readable;
    readonly stderr: Readable;
    readonly threadId: number;

    constructor(filename: string, options?: WorkerOptions);

    postMessage(value: any, transferList?: ReadonlyArray<ArrayBuffer | MessagePort>): void;
    ref(): void;
    unref(): void;
    terminate(callback?: (err: any, exitCode: number) => void): void;

    addListener(event: "error", listener: (err: any) => void): this;
    addListener(event: "exit", listener: (exitCode: number) => void): this;
    addListener(event: "message", listener: (value: any) => void): this;
    addListener(event: "online", listener: () => void): this;
    addListener(event: string | symbol, listener: (...args: any[]) => void): this;

    emit(event: "error", err: any): boolean;
    emit(event: "exit", exitCode: number): boolean;
    emit(event: "message", value: any): boolean;
    emit(event: "online"): boolean;
    emit(event: string | symbol, ...args: any[]): boolean;

    on(event: "error", listener: (err: any) => void): this;
    on(event: "exit", listener: (exitCode: number) => void): this;
    on(event: "message", listener: (value: any) => void): this;
    on(event: "online", listener: () => void): this;
    on(event: string | symbol, listener: (...args: any[]) => void): this;

    once(event: "error", listener: (err: any) => void): this;
    once(event: "exit", listener: (exitCode: number) => void): this;
    once(event: "message", listener: (value: any) => void): this;
    once(event: "online", listener: () => void): this;
    once(event: string | symbol, listener: (...args: any[]) => void): this;

    prependListener(event: "error", listener: (err: any) => void): this;
    prependListener(event: "exit", listener: (exitCode: number) => void): this;
    prependListener(event: "message", listener: (value: any) => void): this;
    prependListener(event: "online", listener: () => void): this;
    prependListener(event: string | symbol, listener: (...args: any[]) => void): this;

    prependOnceListener(event: "error", listener: (err: any) => void): this;
    prependOnceListener(event: "exit", listener: (exitCode: number) => void): this;
    prependOnceListener(event: "message", listener: (value: any) => void): this;
    prependOnceListener(event: "online", listener: () => void): this;
    prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): this;

    removeListener(event: "error", listener: (err: any) => void): this;
    removeListener(event: "exit", listener: (exitCode: number) => void): this;
    removeListener(event: "message", listener: (value: any) => void): this;
    removeListener(event: "online", listener: () => void): this;
    removeListener(event: string | symbol, listener: (...args: any[]) => void): this;

    off(event: "error", listener: (err: any) => void): this;
    off(event: "exit", listener: (exitCode: number) => void): this;
    off(event: "message", listener: (value: any) => void): this;
    off(event: "online", listener: () => void): this;
    off(event: string | symbol, listener: (...args: any[]) => void): this;
}
