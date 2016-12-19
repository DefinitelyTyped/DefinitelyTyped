// Type definitions for Fuse.js 2.5.0
// Project: https://github.com/krisk/Fuse
// Definitions by: Greg Smith <https://github.com/smrq/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare class Fuse {
	constructor(list: any[], options?: fuse.IFuseOptions);
	search(pattern: string): any[];
}

declare namespace fuse {
	interface IFuseOptions {
		id?: string;
		caseSensitive?: boolean;
		include?: string[];
		shouldSort?: boolean;
		searchFn?: any;
		sortFn?: (a: {score: number}, b: {score: number}) => number;
		getFn?: (obj: any, path: string) => any;
		keys?: string[] | { name:string; weight:number} [];
        	verbose?:boolean;
		tokenize?: boolean;
		tokenSeparator? : RegExp;
		matchAllTokens?: boolean;
		location?: number;
		distance?: number;
		threshold?: number;
		maxPatternLength?: number;
	}
}
