// Type definitions for ffmpeg.js 3.1
// Project: https://github.com/Kagami/ffmpeg.js
// Definitions by: Vladimir Grenaderov <https://github.com/VladimirGrenaderov>,
//                 Max Boguslavskiy <https://github.com/maxbogus>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

export interface Options {
    arguments: string[];
    MEMFS?: Video[];
    print?(data: any): void;
    printErr?(data: any): void;
    onExit?(code: unknown): void;
    stdin?(data: any): void;
    mounts?: Mount[];
    TOTAL_MEMORY?: number;
}

export interface Opts {
    root: string;
}

export interface Mount {
    type: string;
    opts: Opts;
    mountpoint: string;
}

export interface Result {
    MEMFS: Video[];
}

export interface Video {
    data: Uint8Array;
    name: string;
}

export namespace Worker {
    interface Data {
        type: string;
        data: string;
    }

    interface PostMessageOptions {
        type: string;
        arguments: string[];
    }

    interface OnMessageOptions {
        data: Data;
    }
}

export function ffmpeg(opts: Options): Result;

export class Worker {
    constructor(someParam?: string);

    onmessage(opts: Worker.OnMessageOptions): void;
    postMessage(opts: Worker.PostMessageOptions): void;
    terminate(): void;
}
