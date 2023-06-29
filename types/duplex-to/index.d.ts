// Type definitions for duplex-to 1.0
// Project: https://github.com/bergos/duplex-to
// Definitions by: Tomasz Pluskiewicz <https://github.com/tpluscode>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.9

/// <reference types="node" />

declare const duplexTo: {
    readable: typeof import('./readable'),
    writable: typeof import('./writable')
};

export = duplexTo;
