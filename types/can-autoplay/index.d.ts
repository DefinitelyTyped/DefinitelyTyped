// Type definitions for can-autoplay 3.0
// Project: https://github.com/video-dev/can-autoplay
// Definitions by: Viacheslav Borodulin <https://github.com/vborodulin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface Options {
    inline?: boolean;
    muted?: boolean;
    timeout?: number;
}

export interface CheckResponse {
    result: boolean;
    error: Error;
}

export function audio(options?: Options): Promise<CheckResponse>;
export function video(options?: Options): Promise<CheckResponse>;
