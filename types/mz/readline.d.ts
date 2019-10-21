// Modified from the node.js definitions.
// https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/node/readline.d.ts

import * as readline from "readline";
export * from "readline";

export class Interface extends readline.Interface {
	question(query: string, callback: (answer: string) => void): void;
	question(query: string): Promise<string>;
}

// type forwarded for backwards compatibility
export type ReadLine = Interface;

export interface Completer {
	(line: string, callback: (err: any, result: [string[], string]) => void): void;
	(line: string): Promise<[string[], string]> | [string[], string];
}
export { Completer as AsyncCompleter };

export interface ReadLineOptions extends readline.ReadLineOptions {
	completer?: Completer;
}

export function createInterface(
	input: NodeJS.ReadableStream,
	output?: NodeJS.WritableStream,
	completer?: Completer,
	terminal?: boolean
): Interface;
export function createInterface(options: ReadLineOptions): Interface;
