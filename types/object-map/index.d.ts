// Type definitions for object-map 1.0
// Project: https://github.com/xixixao/object-map
// Definitions by: Wolfgang Faust <https://github.com/wolfgang42>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function objectMap<I, O>(
	target: {[k: string]: I},
	callback: (currentValue: I, key: string, object: {[k: string]: I}) => O,
	thisArg?: any
): {[k: string]: O};

export = objectMap;
