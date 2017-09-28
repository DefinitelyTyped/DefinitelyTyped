// Type definitions for pump 1.0
// Project: https://github.com/mafintosh/pump
// Definitions by: Tomek Łaziuk <https://github.com/tlaziuk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

declare function pump(streams: pump.Stream[], callback?: pump.Callback): pump.Stream[];

// callback have to be passed as last argument
declare function pump(...streams: Array<pump.Stream | pump.Callback>): pump.Stream[];

declare namespace pump {
    type Callback = (err: Error) => any;
    type Stream = NodeJS.ReadableStream | NodeJS.WritableStream;
}

export = pump;
