// https://github.com/substack/node-optimist
// sourced from https://github.com/soywiz/typescript-node-definitions/blob/master/optimist.d.ts
// rehacked by @Bartvds

declare module Optimist {
	export interface Argv {
		_: string[];
	}
	export interface Optimist {
		default(name: string, value: any): Optimist;
		default(args: any): Optimist;

		boolean(name: string): Optimist;
		boolean(names: string[]): Optimist;

		string(name: string): Optimist;
		string(names: string[]): Optimist;

		wrap(columns): Optimist;

		help(): Optimist;
		showHelp(fn?: Function): Optimist;

		usage(message: string): Optimist;

		demand(key: string): Optimist;
		demand(key: number): Optimist;
		demand(key: string[]): Optimist;

		alias(key: string, alias: string): Optimist;

		describe(key: string, desc: string): Optimist;

		options(key: string, opt: any): Optimist;

		check(fn: Function);

		parse(args: string[]): Optimist;

		argv: Argv;
	}
}
interface Optimist extends Optimist.Optimist {
	(args: string[]): Optimist.Optimist;
}
declare module 'optimist' {
	export = Optimist;
}
