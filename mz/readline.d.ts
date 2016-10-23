// Type definitions for mz
// Project: https://github.com/normalize/mz
// Definitions by: Thomas Hickman <https://github.com/ThomasHickman>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Modified from the node.js definitions https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/node/node.d.ts

/// <reference types="node" />

import * as readline from "readline";
export * from "readline";

export interface ReadLine extends readline.ReadLine {
    question(query: string, callback: (answer: string) => void): void;
    question(query: string): Promise<string>;
}

export interface Completer {
    (line: string, callback: (err: any, result: [string[], string]) => void): void;
    (line: string): Promise<[string[], string]> | [string[], string];
}

export interface ReadLineOptions {
    input: NodeJS.ReadableStream;
    output?: NodeJS.WritableStream;
    completer?: Completer;
    terminal?: boolean;
    historySize?: number;
}

export function createInterface(input: NodeJS.ReadableStream, output?: NodeJS.WritableStream, completer?: Completer, terminal?: boolean): ReadLine;
export function createInterface(options: ReadLineOptions): ReadLine;