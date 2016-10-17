// Type definitions for on-finished v2.2.0
// Project: https://github.com/jshttp/on-finished
// Definitions by: Honza Dvorsky <http://github.com/czechboy0>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />




declare function onFinished(msg: NodeJS.EventEmitter, listener: Function): NodeJS.EventEmitter;

declare namespace onFinished {
    export function isFinished(msg: NodeJS.EventEmitter): boolean;
}

export = onFinished;
