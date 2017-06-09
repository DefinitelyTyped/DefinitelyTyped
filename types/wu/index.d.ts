// Type definitions for wu.js 2.1
// Project: https://fitzgen.github.io/wu.js/
// Definitions by: phiresky <https://github.com/phiresky/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace Wu {
	type Consumer<T> = (t: T) => void;
	type Filter<T> = (t: T) => boolean;

	interface WuStatic {
		<T>(iterable: Iterable<T>): WuIterable<T>;
		// only static
		chain<T>(...iters: Array<Iterable<T>>): WuIterable<T>;
		count(start?: number, step?: number): WuIterable<number>;
		curryable<T>(fun: (...x: any[]) => T, expected?: number): any;
		entries<T>(obj: { [i: string]: T }): WuIterable<[string, T]>;
		keys<T>(obj: { [i: string]: T }): WuIterable<string>;
		values<T>(obj: { [i: string]: T }): WuIterable<T>;
		repeat<T>(obj: T, times?: number): WuIterable<T>;
		// also copied to WuInterface
		asyncEach<T>(fn: Consumer<T>, maxBlock?: number, timeout?: number): void;
		drop<T>(n: number, iter: Iterable<T>): WuIterable<T>;
		dropWhile<T>(fn: Filter<T>, iter: Iterable<T>): WuIterable<T>;
		cycle<T>(iter: Iterable<T>): Iterable<T>;
		chunk<T>(n: number, iter: Iterable<T>): WuIterable<T[]>;
		concatMap<T, U>(fn: (t: T) => Iterable<U>, iter: Iterable<T>): WuIterable<U>;
		enumerate<T>(iter: Iterable<T>): Iterable<[number, T]>;
		every<T>(fn: Filter<T>, iter: Iterable<T>): boolean;
		filter<T>(fn: Filter<T>, iter: Iterable<T>): WuIterable<T>;
		find<T>(fn: Filter<T>, iter: Iterable<T>): T;
		flatten(iter: Iterable<any>): WuIterable<any>;
		flatten(shallow: boolean, iter: Iterable<any>): WuIterable<any>;
		forEach<T>(fn: Consumer<T>, iter: Iterable<T>): void;
		has<T>(t: T, iter: Iterable<T>): boolean;
		// invoke<T, U>(name:string, ...t:T[], iter: Iterable<(t:T)=>U>): WuIterable<U>;
		invoke: any;
		map<T, U>(fn: (t: T) => U, iter: Iterable<T>): WuIterable<U>;
		// pluck<T>(attribute:string, iter: Iterable<{[attribute]: T}>): WuIterable<T>;
		pluck(attribute: string, iter: Iterable<any>): WuIterable<any>;
		reduce<T>(fn: (a: T, b: T) => T, iter: Iterable<T>): T;
		reduce<T>(fn: (a: T, b: T) => T, initial: T, iter: Iterable<T>): T;
		reduce<T, U>(fn: (a: U, b: T) => U, iter: Iterable<T>): U;
		reduce<T, U>(fn: (a: U, b: T) => U, initial: U, iter: Iterable<T>): U;
		reductions<T>(fn: (a: T, b: T) => T, iter: Iterable<T>): WuIterable<T>;
		reductions<T>(fn: (a: T, b: T) => T, initial: T, iter: Iterable<T>): WuIterable<T>;
		reductions<T, U>(fn: (a: U, b: T) => U, iter: Iterable<T>): WuIterable<U>;
		reductions<T, U>(fn: (a: U, b: T) => U, initial: U, iter: Iterable<T>): WuIterable<U>;
		reject<T>(fn: Filter<T>, iter: Iterable<T>): WuIterable<T>;
		slice<T>(iter: Iterable<T>): WuIterable<T>;
		slice<T>(start: number, iter: Iterable<T>): WuIterable<T>;
		slice<T>(start: number, stop: number, iter: Iterable<T>): WuIterable<T>;
		some<T>(fn: Filter<T>, iter: Iterable<T>): boolean;
		spreadMap<T>(fn: (...x: any[]) => T, iter: Iterable<any[]>): WuIterable<T>;
		take<T>(n: number, iter: Iterable<T>): WuIterable<T>;
		takeWhile<T>(fn: Filter<T>, iter: Iterable<T>): WuIterable<T>;
		tap<T>(fn: Consumer<T>, iter: Iterable<T>): WuIterable<T>;
		unique<T>(iter: Iterable<T>): WuIterable<T>;
		zip<T, U>(iter2: Iterable<T>, iter: Iterable<U>): WuIterable<[T, U]>;
		zipLongest<T, U>(iter2: Iterable<T>, iter: Iterable<U>): WuIterable<[T, U]>;
		zipWith: any;
		unzip: any;
		tee<T>(iter: Iterable<T>): Array<WuIterable<T>>;
		tee<T>(n: number, iter: Iterable<T>): Array<WuIterable<T>>;
	}
	interface WuIterable<T> extends IterableIterator<T> {
		// generated from section "copied to WuIterable" above via
		// sed -r 's/(, )?iter: Iterable<\w+>//' |
		// sed -r 's/^(\s+\w+)<T>/\1/' |
		// sed -r 's/^(\s+\w+)<T, /\1</'
		asyncEach<T>(fn: Consumer<T>, maxBlock?: number, timeout?: number): any;
		drop(n: number): WuIterable<T>;
		dropWhile(fn: Filter<T>): WuIterable<T>;
		cycle(): Iterable<T>;
		chunk(n: number): WuIterable<T[]>;
		concatMap<U>(fn: (t: T) => Iterable<U>): WuIterable<U>;
		enumerate(): Iterable<[number, T]>;
		every(fn: Filter<T>): boolean;
		filter(fn: Filter<T>): WuIterable<T>;
		find(fn: Filter<T>): T;
		flatten(shallow?: boolean): WuIterable<any>;
		forEach(fn: Consumer<T>): void;
		has(t: T): boolean;
		// invoke<T, U>(name:string, ...t:T[], iter: Iterable<(t:T)=>U>): WuIterable<U>;
		invoke: any;
		map<U>(fn: (t: T) => U): WuIterable<U>;
		// pluck<T>(attribute:string, iter: Iterable<{[attribute]: T}>): WuIterable<T>;
		pluck(attribute: string): WuIterable<any>;
		reduce(fn: (a: T, b: T) => T, initial?: T): T;
		reduce<U>(fn: (a: U, b: T) => U, initial?: U): U;
		reductions(fn: (a: T, b: T) => T, initial?: T): WuIterable<T>;
		reductions<U>(fn: (a: U, b: T) => U, initial?: U): WuIterable<U>;
		reject(fn: Filter<T>): WuIterable<T>;
		slice(start?: number, stop?: number): WuIterable<T>;
		some(fn: Filter<T>): boolean;
		spreadMap(fn: (...x: any[]) => T, iter: Iterable<any[]>): WuIterable<T>;
		take(n: number): WuIterable<T>;
		takeWhile(fn: Filter<T>): WuIterable<T>;
		tap(fn: Consumer<T>): WuIterable<T>;
		unique(): WuIterable<T>;
		zip<U>(iter2: Iterable<T>): WuIterable<[T, U]>;
		zipLongest<U>(iter2: Iterable<T>): WuIterable<[T, U]>;
		zipWith: any;
		unzip: any;
		tee(n?: number): Array<WuIterable<T>>;
	}
}
declare var wu: Wu.WuStatic;
