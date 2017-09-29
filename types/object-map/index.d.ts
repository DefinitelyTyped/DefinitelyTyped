// Type definitions for object-map 1.0
// Project: https://github.com/xixixao/object-map
// Definitions by: Wolfgang Faust <https://github.com/wolfgang42>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function objectMap<TInput, TOutput>(
	target: {[k: string]: TInput},
	callback: (currentValue: TInput, key: string, object: {[k: string]: TInput}) => TOutput,
	thisArg?: any
): {[k: string]: TOutput};

export = objectMap;
