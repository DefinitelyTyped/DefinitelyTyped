import { PropertyKey as ESPropertyKey } from '../index';

declare function getIteratorMethod<T>(
	ES: {
		GetMethod(O: unknown, P: ESPropertyKey): (...args: unknown[]) => unknown | undefined;
		IsArray?(O: unknown): boolean;
		Type?(O: unknown): string | undefined;
	},
	iterable: T,
): T extends Iterable<unknown> ? () => Iterator<T extends Iterable<infer U> ? U : unknown> : undefined;

export = getIteratorMethod;
