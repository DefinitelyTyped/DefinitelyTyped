// Type definitions for can-autoplay 3.0
// Project: https://github.com/video-dev/can-autoplay
// Definitions by: Viacheslav Borodulin <https://github.com/vborodulin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.6

export interface Options {
    inline?: boolean | undefined;
    muted?: boolean | undefined;
    timeout?: number | undefined;
}

export interface CheckResponseTrue {
    result: true;
    error: null;
}

export interface CheckResponseFalse {
    result: false;
    error: Error;
}

export type CheckResponse = CheckResponseTrue | CheckResponseFalse;

export function audio(options?: Options): Promise<CheckResponse>;
export function video(options?: Options): Promise<CheckResponse>;
