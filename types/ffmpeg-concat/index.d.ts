// Type definitions for ffmpeg-concat 1.1
// Project: https://github.com/transitive-bullshit/ffmpeg-concat
// Definitions by: Weslen Nascimento <https://github.com/weslenng>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface Transition {
    duration: number;
    name: string;
    params?: any;
}

interface ConcatOptions {
    audio?: string;
    cleanupFrames?: boolean;
    concurrency?: number;
    frameFormat?: 'jpg' | 'png' | 'raw';
    log?: (stdout: string) => void;
    output: string;
    tempDir?: string;
    transition?: Transition;
    transitions?: ReadonlyArray<Transition>;
    videos: ReadonlyArray<string>;
}

declare function concat(concatOptions: ConcatOptions): Promise<void>;

export = concat;
