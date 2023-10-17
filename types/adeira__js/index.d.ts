type Maybe<T> = null | undefined | T;

export function invariant(condition: boolean, format: string, ...args: ReadonlyArray<any>): asserts condition;

export function isBrowser(): boolean;

export function isNumeric(value: any): boolean;

export function isObject(value: any): boolean;

export function isObjectEmpty(value: any): boolean;

export function nullthrows<T>(x: Maybe<T>, message?: string): T extends null | undefined ? never : T;

export function sprintf(format: string, ...args: ReadonlyArray<any>): string;

export function warning(condition: boolean, format: string, ...args: ReadonlyArray<any>): void;

export function rangeMap<T>(n: number, fn: (i: number) => T): ReadonlyArray<T>;

export {};
