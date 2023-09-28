// Type definitions for mocha-prepare 0.1
// Project: https://github.com/enobufs/mocha-prepare#readme
// Definitions by: Sorin Sandru <https://github.com/idono87>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

/// <reference types="mocha"/>

declare function prepare(onPrepare: (fn: Mocha.Done) => void, onUnprepare?: (fn: Mocha.Done) => void): void;
export = prepare;
