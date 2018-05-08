// Type definitions for speakingurl 13.0
// Project: http://pid.github.io/speakingurl/
// Definitions by: Zlatko Andonovski <https://github.com/Goldsmith42>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface Dictionary<T> {
    [x: string]: T;
}

interface SpeakingURLOptions {
    separator?: string;
    lang?: string|boolean;
    symbols?: boolean;
    maintainCase?: boolean;
    titleCase?: string[]|boolean;
    truncate?: number;
    uric?: boolean;
    uricNoSlash?: boolean;
    mark?: boolean;
    custom?: string[]|Dictionary<string>;
}

declare function getSlug(input: string, options?: SpeakingURLOptions|string): string;

declare namespace getSlug {
    function createSlug(options: SpeakingURLOptions): (input: string) => string;
}

export = getSlug;
