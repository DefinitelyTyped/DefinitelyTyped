// Type definitions for big-json 3.2
// Project: https://github.com/DonutEspresso/big-json
// Definitions by: PCOffline <https://github.com/PCOffline>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import type { Stream } from 'node:stream';

export declare function createParseStream(): Stream;
export declare function createStringifyStream(opts: { body: object }): Stream;

export declare function parse(opts: { body: string | Buffer }): Promise<object | ReadonlyArray<object>>;
export declare function parse(
    opts: { body: string | Buffer },
    callback: (result: object | ReadonlyArray<object>) => void,
): void;

export declare function stringify(opts: { body: object }): Promise<string>;
export declare function stringify(opts: { body: object }, callback: (result: string) => void): void;

declare const exported: {
    createParseStream: typeof createParseStream;
    createStringifyStream: typeof createStringifyStream;
    parse: typeof parse;
    stringify: typeof stringify;
};

export default exported;
