/// <reference types="node" />

import type { Stream, Transform } from "node:stream";

export function createParseStream(): Transform;
export function createStringifyStream(opts: { body: object }): Stream;

export function parse(opts: { body: string | Buffer }): Promise<object | readonly object[]>;
export function parse(
    opts: { body: string | Buffer },
    callback: (result: object | readonly object[]) => void,
): void;

export function stringify(opts: { body: object }): Promise<string>;
export function stringify(opts: { body: object }, callback: (result: string) => void): void;
