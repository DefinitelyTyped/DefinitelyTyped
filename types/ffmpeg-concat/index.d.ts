interface Transition {
    duration: number;
    name: string;
    params?: any;
}

interface ConcatOptions {
    audio?: string | undefined;
    cleanupFrames?: boolean | undefined;
    concurrency?: number | undefined;
    frameFormat?: "jpg" | "png" | "raw" | undefined;
    log?: ((stdout: string) => void) | undefined;
    output: string;
    tempDir?: string | undefined;
    transition?: Transition | undefined;
    transitions?: readonly Transition[] | undefined;
    videos: readonly string[];
}

declare function concat(concatOptions: ConcatOptions): Promise<void>;

export = concat;
