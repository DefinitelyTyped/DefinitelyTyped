declare function scan(input: string, options?: scan.Options): scan.State;

declare namespace scan {
    interface Options {
        /**
         * When `true`, the returned object will include an array of strings representing each path "segment"
         * in the scanned glob pattern. This is automatically enabled when `options.tokens` is true
         */
        parts?: boolean;
        scanToEnd?: boolean;
        noext?: boolean;
        nonegate?: boolean;
        noparen?: boolean;
        unescape?: boolean;
        /**
         * When `true`, the returned object will include an array of tokens (objects),
         * representing each path "segment" in the scanned glob pattern
         */
        tokens?: boolean;
    }

    interface Token {
        value: string;
        depth: number;
        isGlob: boolean;
        backslashes?: boolean;
        isBrace?: boolean;
        isExtglob?: boolean;
        isGlobstar?: boolean;
        negated?: boolean;
    }

    interface State {
        prefix: string;
        input: string;
        start: number;
        base: string;
        glob: string;
        isBrace: boolean;
        isBracket: boolean;
        isGlob: boolean;
        isExtglob: boolean;
        isGlobstar: boolean;
        negated: boolean;
        maxDepth?: number;
        tokens?: Token[];
        slashes?: number[];
        parts?: string[];
    }
}

export = scan;
