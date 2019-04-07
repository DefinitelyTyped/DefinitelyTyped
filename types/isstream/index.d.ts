// Type definitions for isstream 0.1
// Project: https://github.com/rvagg/isstream
// Definitions by: Claas Ahlrichs <https://github.com/claasahl>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export = isstream;

declare function isstream(obj: any): boolean;

declare namespace isstream {
    function isDuplex(obj: any): boolean;

    function isReadable(obj: any): boolean;

    function isWritable(obj: any): boolean;
}

