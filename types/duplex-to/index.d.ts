/// <reference types="node" />

declare const duplexTo: {
    readable: typeof import("./readable");
    writable: typeof import("./writable");
};

export = duplexTo;
