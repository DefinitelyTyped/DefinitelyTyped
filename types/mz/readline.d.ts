// Modified from the node.js definitions.
// https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/node/readline.d.ts

import * as readline from "readline";
export * from "readline";
export { Completer as SyncCompleter } from "readline";

export class Interface extends readline.Interface {
    question(query: string, callback: (answer: string) => void): void;
    question(query: string): Promise<string>;
}

// type forwarded for backwards compatibility
export type ReadLine = Interface;

export type AsyncCompleter =
    ((line: string, callback: (err?: null | Error, result?: readline.CompleterResult) => void) => void) |
    ((line: string) => Promise<readline.CompleterResult>);
export type Completer = AsyncCompleter | readline.Completer;

export interface ReadLineOptions extends readline.ReadLineOptions {
    completer?: Completer | undefined;
}

export function createInterface(
    input: NodeJS.ReadableStream,
    output?: NodeJS.WritableStream,
    completer?: Completer,
    terminal?: boolean
): Interface;
export function createInterface(options: ReadLineOptions): Interface;
