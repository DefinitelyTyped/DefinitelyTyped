// Type definitions for conf 0.11
// Project: https://github.com/sindresorhus/conf
// Definitions by: Sam Verschueren <https://github.com/SamVerschueren>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface Options {
	defaults?: any;
	configName?: string;
	projectName?: string;
	cwd?: string;
}

declare class Conf implements Iterable<[string, string | number | boolean | symbol | {}]> {
	path: string;
	store: any;

	readonly size: number;

	constructor(options?: Options);
	get(key: string): any;
	set(key: string, val: string | number | boolean | symbol | {}): void;
	set(object: {}): void;
	has(key: string): boolean;
	delete(key: string): void;
	clear(): void;
	[Symbol.iterator](): Iterator<[string, string | number | boolean | symbol | {}]>;
}

export = Conf;
