import { PropertyKey as ESPropertyKey } from '../index';

declare function getIteratorMethod<T extends Iterable<unknown>>(
	ES: {
		GetMethod(O: unknown, P: ESPropertyKey): (...args: unknown[]) => unknown | undefined;
		IsArray?(O: unknown): boolean;
		Type?(O: unknown): string | undefined;
	},
	iterable: T,
): () => Iterator<T extends Iterable<infer U> ? U : unknown>;

export = getIteratorMethod;
