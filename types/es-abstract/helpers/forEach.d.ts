declare function forEach<A extends ArrayLike<unknown>, THIS_TYPE = undefined>(
	array: A,
	callback: (this: THIS_TYPE, value: A extends ArrayLike<infer T> ? T : unknown, index: number, array: A) => void,
	thisArg?: THIS_TYPE,
): void;
declare function forEach<O extends object, THIS_TYPE = undefined>(
	obj: O,
	callback: (this: THIS_TYPE, value: O[keyof O], key: string, obj: O) => void,
	thisArg?: THIS_TYPE,
): void;

export = forEach;
