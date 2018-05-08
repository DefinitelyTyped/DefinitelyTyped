// Type definitions for cwise-parser 1.0
// Project: https://github.com/scijs/cwise-parser#readme
// Definitions by: taoqf <https://github.com/taoqf>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace cwise_parser {
	interface CompiledArgument {
		name: string;
		lvalue: boolean;
		rvalue: boolean;
		count: number;
	}
	interface CompiledRoutine {
		body: string;
		args: CompiledArgument[];
		thisVars: string[];
		localVars: string[];
	}
}

declare function cwise_parser<T>(func: (a: number, ...args: T[]) => any): cwise_parser.CompiledRoutine;
export = cwise_parser;
