// Type definitions for ffmpeg-concat 1.1
// Project: https://github.com/transitive-bullshit/ffmpeg-concat
// Definitions by: DefinitelyTyped <https://github.com/DefinitelyTyped>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface Transition {
    duration: number;
    name: string;
    params?: any;
}

interface ConcatOptions {
    audio?: string | undefined;
    cleanupFrames?: boolean | undefined;
    concurrency?: number | undefined;
    frameFormat?: 'jpg' | 'png' | 'raw' | undefined;
    log?: ((stdout: string) => void) | undefined;
    output: string;
    tempDir?: string | undefined;
    transition?: Transition | undefined;
    transitions?: ReadonlyArray<Transition> | undefined;
    videos: ReadonlyArray<string>;
}

declare function concat(concatOptions: ConcatOptions): Promise<void>;

export = concat;
