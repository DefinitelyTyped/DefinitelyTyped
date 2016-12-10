// Type definitions for Fuse.js 2.5.0
// Project: https://github.com/krisk/Fuse
// Definitions by: Greg Smith <https://github.com/smrq/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'fuse' {
	export class Fuse {
		constructor(list: any[], options?: FuseOptions);
		search(pattern: string): any[];
		search<T>(pattern: string): T[];
	}

	export interface FuseOptions {
		id?: string;
		caseSensitive?: boolean;
		include?: string[];
		shouldSort?: boolean;
		searchFn?: any;
		sortFn?: (a: { score: number }, b: { score: number }) => number;
		getFn?: (obj: any, path: string) => any;
		keys?: string[] | { name: string; weight: number }[];
		verbose?: boolean;
		tokenize?: boolean;
		tokenSeparator?: RegExp;
		matchAllTokens?: boolean;
		location?: number;
		distance?: number;
		threshold?: number;
		maxPatternLength?: number;
	}
}
