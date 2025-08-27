/// <reference types="node" />

/**
 * A replacement for process.exit that ensures stdio are fully drained before exiting.
 */
declare function exit(code: number, streams?: [NodeJS.WritableStream, NodeJS.WritableStream]): void;

export = exit;
