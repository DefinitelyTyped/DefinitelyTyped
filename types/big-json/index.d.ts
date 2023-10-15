// Type definitions for big-json 3.2
// Project: https://github.com/DonutEspresso/big-json
// Definitions by: PCOffline <https://github.com/PCOffline>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import type { Stream } from "node:stream";

export function createParseStream(): Stream;
export function createStringifyStream(opts: { body: object }): Stream;

export function parse(opts: { body: string | Buffer }): Promise<object | ReadonlyArray<object>>;
export function parse(
    opts: { body: string | Buffer },
    callback: (result: object | ReadonlyArray<object>) => void,
): void;

export function stringify(opts: { body: object }): Promise<string>;
export function stringify(opts: { body: object }, callback: (result: string) => void): void;
