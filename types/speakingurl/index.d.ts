interface Dictionary<T> {
    [x: string]: T;
}

interface SpeakingURLOptions {
    separator?: string | undefined;
    lang?: string | boolean | undefined;
    symbols?: boolean | undefined;
    maintainCase?: boolean | undefined;
    titleCase?: string[] | boolean | undefined;
    truncate?: number | undefined;
    uric?: boolean | undefined;
    uricNoSlash?: boolean | undefined;
    mark?: boolean | undefined;
    custom?: string[] | Dictionary<string> | undefined;
}

declare function getSlug(input: string, options?: SpeakingURLOptions | string): string;

declare namespace getSlug {
    function createSlug(options: SpeakingURLOptions): (input: string) => string;
}

export = getSlug;
