declare function escape(str: string): string;

declare var bound: typeof escape & {
    getPolyfill: () => typeof escape;
    implementation: typeof escape;
    /**
     * @deprecated use .implementation instead
     */
    method: typeof escape;
    shim: () => typeof escape;
};

export = bound;
