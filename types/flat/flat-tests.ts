

import { flatten, unflatten } from "flat";

namespace TestFlatten {
	let options: {
		delimiter?: string;
		safe?: boolean;
		maxDepth?: number;
	};

	type Target = {
		a: {
			b: number;
		},
		c: boolean[][];
	};

	let target: Target;

	type Result = {
		'a.b': number;
		'c.0.0': boolean;
	};

	let result: Result;

	result = flatten<Target, Result>(target);
	result = flatten<Target, Result>(target, options);
}

namespace TestUnflatten {
	let options: {
		delimiter?: string;
		object?: boolean;
		overwrite?: boolean;
	};

	type Target = {
		'a.b': number;
		'c.0.0': boolean;
	};

	let target: Target;

	type Result = {
		a: {
			b: number;
		},
		c: boolean[][];
	};

	let result: Result;

	result = unflatten<Target, Result>(target);
	result = unflatten<Target, Result>(target, options);
}
