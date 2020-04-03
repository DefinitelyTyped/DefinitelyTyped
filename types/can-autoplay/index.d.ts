// Type definitions for can-autoplay 3.0
// Project: https://github.com/video-dev/can-autoplay
// Definitions by: Viacheslav Borodulin <https://github.com/vborodulin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface Options {
    inline?: boolean;
    muted?: boolean;
    timeout?: number;
}

interface CheckResponse {
    result: boolean;
    error: Error;
}

type CheckMethod = (options?: Options) => Promise<CheckResponse>;

declare const canAutoPlay: {
    audio: CheckMethod;
    video: CheckMethod;
};

export = canAutoPlay;
