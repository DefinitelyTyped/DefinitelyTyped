declare function flatry<T>(promise: Promise<T>): Promise<[unknown] | [null, T]>;
declare function flatry<T>(fn: () => T): [unknown] | [null, T];

export = flatry;
