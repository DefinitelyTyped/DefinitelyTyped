// Type definitions for Fuse.js 1.1.5
// Project: https://github.com/krisk/Fuse
// Definitions by: Greg Smith <https://github.com/smrq/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare class Fuse {
	constructor(list: any[], options?: fuse.IFuseOptions);
	search(pattern: string): any[];
}

declare module fuse {
	interface IFuseOptions extends ISearchOptions {
		caseSensitive?: boolean;
		includeScore?: boolean;
		shouldSort?: boolean;
		searchFn?: any;
		sortFn?: (a: {score: number}, b: {score: number}) => number;
		getFn?: (obj: any, path: string) => any;
		keys?: string[];
	}

	interface ISearchOptions {
		location?: number;
		distance?: number;
		threshold?: number;
		maxPatternLength?: number;
	}
}
