declare function escape(str: string): string;
declare namespace escape {
    const implementation: typeof import("./implementation");
    const getPolyfill: typeof import("./polyfill");
    const shim: typeof import("./shim");
}

export = escape;
