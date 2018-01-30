// Type definitions for conf 1.1
// Project: https://github.com/sindresorhus/conf
// Definitions by: Sam Verschueren <https://github.com/SamVerschueren>
//                 BendingBender <https://github.com/BendingBender>
//                 Phạm Dương Nhật Nam <https://github.com/nampdn>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

interface Options<T> {
	defaults?: {[key: string]: T};
	configName?: string;
	projectName?: string;
	cwd?: string;
}

declare class Conf<T = any> implements Iterable<[string, T]> {
	store: {[key: string]: T};
    readonly path: string;
	readonly size: number;

	constructor(options?: Options<T>);
	get(key: string, defaultValue?: T): T;
	set(key: string, val: T): void;
	set(object: {[key: string]: T}): void;
	has(key: string): boolean;
	delete(key: string): void;
	clear(): void;
	onDidChange(key: string, callback: (oldVal: any, newVal: any) => void): void;
	[Symbol.iterator](): Iterator<[string, T]>;
}

export = Conf;
