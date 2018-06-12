// Type definitions for bidirectional-map 1.0
// Project: https://github.com/educastellano/bidirectional-map
// Definitions by: Helen Anderson <https://github.com/helenanderson>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

export default class BiMap<TValue> {
	constructor(object?: { [i: string]: TValue });
	size: number;

	set(key: string, value: TValue): void;
	get(key: string): TValue;
	getKey(value: TValue): string;
	clear(): void;
	delete(key: string): void;
	deleteValue(value: TValue): void;
	entries(): IterableIterator<[string, TValue]>;
	has(key: string): boolean;
	hasValue(value: TValue): boolean;
	keys(): IterableIterator<string>;
	values(): IterableIterator<TValue>;
}
