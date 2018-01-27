// Type definitions for cross-spawn 6.0
// Project: https://github.com/moxystudio/node-cross-spawn
// Definitions by: Alorel <https://github.com/Alorel>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import {
    ChildProcess,
    SpawnOptions,
    SpawnSyncOptions,
    SpawnSyncReturns,
    SpawnSyncOptionsWithStringEncoding,
    SpawnSyncOptionsWithBufferEncoding
} from 'child_process';

declare function spawn(command: string, args?: string[], options?: SpawnOptions): ChildProcess;

// Disable unified-signatures to have sync methods act as a 1:1 mirror to child_process.sync types
declare namespace spawn {
    function sync(command: string): SpawnSyncReturns<Buffer>;
    function sync(command: string, options?: SpawnSyncOptionsWithStringEncoding): SpawnSyncReturns<string>;
    // tslint:disable-next-line:unified-signatures
    function sync(command: string, options?: SpawnSyncOptionsWithBufferEncoding): SpawnSyncReturns<Buffer>;
    // tslint:disable-next-line:unified-signatures
    function sync(command: string, options?: SpawnSyncOptions): SpawnSyncReturns<Buffer>;
    function sync(command: string, args?: string[], options?: SpawnSyncOptionsWithStringEncoding): SpawnSyncReturns<string>;
    // tslint:disable-next-line:unified-signatures
    function sync(command: string, args?: string[], options?: SpawnSyncOptionsWithBufferEncoding): SpawnSyncReturns<Buffer>;
    // tslint:disable-next-line:unified-signatures
    function sync(command: string, args?: string[], options?: SpawnSyncOptions): SpawnSyncReturns<Buffer>;
}

export = spawn;
