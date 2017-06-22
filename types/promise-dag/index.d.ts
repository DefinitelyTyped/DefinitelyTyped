// Type definitions for promise-dag 1.0
// Project: https://github.com/vvvvalvalval/promise-dag#readme
// Definitions by: Sjoerd Diepen <https://github.com/OSjoerdWie>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export type Step = string | ((...args: any[]) => PromiseLike<any>);

export interface Run {
	(steps: { [name: string]: Step[]; }, required?: string[]): { [name: string]: Promise<any>; };
}

export interface PromiseImplementation {
	resolve<T>(value: T): PromiseLike<T>;
	reject<T>(value: T): PromiseLike<T>;
	all<T>(values: (T | PromiseLike<T>)[]): PromiseLike<T[]>;
}

export const run: Run;

export function implement(implementation: PromiseImplementation): Run;
