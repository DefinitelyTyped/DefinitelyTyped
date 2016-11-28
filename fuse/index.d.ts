// Type definitions for Fuse.js 2.5.0
// Definitions by: Alan Agius <https://github.com/alan-agius4/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'fuse.js' {
	namespace fuse.js {
		class Fuse {
			constructor(list: any[], options?: FuseOptions);
			search(pattern: string): any[];
			search<T>(pattern: string): T[];
		}

		interface FuseOptions {
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
	export = fuse.js;
}

declare const Fuse;
