// Type definitions for exit 0.1
// Project: https://github.com/cowboy/node-exit
// Definitions by: Bart van der Schoor <https://github.com/Bartvds>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

/**
 * A replacement for process.exit that ensures stdio are fully drained before exiting.
 */
declare function exit(code: number, streams?: [NodeJS.WritableStream, NodeJS.WritableStream]): void;

export = exit;
