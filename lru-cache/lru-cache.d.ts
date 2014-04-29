// Type definitions for lru-cache v2.5.0
// Project: https://github.com/isaacs/node-lru-cache
// Definitions by: Bart van der Schoor <https://github.com/Bartvds>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module 'lru-cache' {
	function LRU<T>(opts: LRU.Options<T>): LRU.Cache<T>;
	function LRU<T>(max: number): LRU.Cache<T>;

	module LRU {
		interface Options<T> {
			max?: number;
			maxAge?: number;
			length?: (value: T) => number;
			dispose?: (key: string, value: T) => void;
			stale?: boolean;
		}

		interface Cache<T> {
			set(key: string, value: T): void;
			get(key: string): T;
			peek(key: string): T;
			has(key: string): boolean
			del(key: string): void;
			reset(): void;
			forEach(iter: (value: T, key: string, cache: Cache<T>) => void, thisp?: any): void;

			keys(): string[];
			values(): T[];
		}
	}

	export = LRU;
}
