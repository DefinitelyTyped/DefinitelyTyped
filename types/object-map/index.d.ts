// Type definitions for object-map 1.0
// Project: https://github.com/xixixao/object-map
// Definitions by: Wolfgang Faust <https://github.com/wolfgang42>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function objectMap<TInput, TOutput, TThis>(
	target: {[k: string]: TInput},
	callback: (this: TThis, currentValue: TInput, key: string, object: {[k: string]: TInput}) => TOutput,
	thisArg?: TThis
): {[k: string]: TOutput};

export = objectMap;
