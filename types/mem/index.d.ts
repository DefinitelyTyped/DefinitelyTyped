// Type definitions for mem 1.1
// Project: https://github.com/sindresorhus/mem
// Definitions by: Sam Verschueren <https://github.com/SamVerschueren>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface Options {
	maxAge?: number;
	cacheKey?(...args: any[]): string;
	cache?: any;
}

declare const mem: {
	<F extends (...args: any[]) => any>(fn: F, options?: Options): F;
	clear<F extends (...args: any[]) => any>(fn: F): void;
};

export = mem;
