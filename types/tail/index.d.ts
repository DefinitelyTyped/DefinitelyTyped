export interface TailOptions {
    separator?: string | RegExp | null | undefined;
    fromBeginning?: boolean | undefined;
    fsWatchOptions?: Record<string, any> | undefined;
    follow?: boolean | undefined;
    logger?: any;
    encoding?: string | undefined;
    useWatchFile?: boolean | undefined;
    flushAtEOF?: boolean | undefined;
    nLines?: number | undefined;
}

export class Tail {
    /** Creates a new Tail object that starts watching the specified file immediately. */
    constructor(filename: string, options?: TailOptions);
    /** Callback to listen for newlines appended to file */
    on(eventType: "line", cb: (data: any) => void): void;
    /** Error callback */
    on(eventType: "error", cb: (error: any) => void): void;
    /** Stop watching file */
    unwatch(): void;
    /** Start watching file if previously stopped */
    watch(): void;
}
