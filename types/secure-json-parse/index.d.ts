// Type definitions for secure-json-parse 1.0
// Project: https://github.com/fastify/secure-json-parse#readme
// Definitions by: Sjoerd Diepen <https://github.com/OSjoerdWie>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export type Reviver = (this: any, key: string, value: any) => any;

export interface ParseOptions {
	protoAction: "error" | "remove" | "ignore";
}

export function parse(input: string, reviver?: Reviver, options?: ParseOptions): any;
export function safeParse(input: string, reviver?: Reviver): any;
export function scan(input: any, options?: ParseOptions): void;
