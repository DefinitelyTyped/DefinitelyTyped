// Type definitions for shell-quote 1.6
// Project: https://github.com/substack/node-shell-quote
// Definitions by: Jason Cheatham <https://github.com/jason0x43>
//                 Cameron Diver <https://github.com/CameronDiver>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

export type ParseEntry =
	| string
	| { op: string }
	| { op: 'glob'; pattern: string }
	| { comment: string };

export function quote(args: string[]): string;
export function parse(
	cmd: string,
	env?: { [key: string]: string } | ((key: string) => string | object),
	opts?: { [key: string]: string }
): ParseEntry[];
