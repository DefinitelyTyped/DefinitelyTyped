// Type definitions for get-stdin 5.0
// Project: https://github.com/sindresorhus/get-stdin
// Definitions by: Daniel Rosenwasser <https://github.com/DanielRosenwasser>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

declare function getStdin(): Promise<string>;
declare namespace getStdin {
    function buffer(): Promise<Buffer>;
}

export = getStdin;
