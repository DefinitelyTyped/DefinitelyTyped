// Type definitions for flat
// Project: https://github.com/hughsk/flat
// Definitions by: Ilya Mochalov <https://github.com/chrootsu>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module FlatTypes {
	interface FlattenOptions {
		delimiter?: string;
		safe?: boolean;
		maxDepth?: number;
	}

	interface Flatten {
		<TTarget, TResult>(
			target: TTarget,
			options?: FlattenOptions
		): TResult;

		flatten: Flatten;
		unflatten: Unflatten;
	}

	interface UnflattenOptions {
		delimiter?: string;
		object?: boolean;
		overwrite?: boolean;
	}

	interface Unflatten {
		<TTarget, TResult>(
			target: TTarget,
			options?: UnflattenOptions
		): TResult;
	}
}

declare module "flat" {
	var flatten: FlatTypes.Flatten;

	export = flatten;
}
