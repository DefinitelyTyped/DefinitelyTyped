declare function SameValueNonNumeric<T extends Exclude<unknown, number | bigint>>(x: T, y: T): boolean;
export = SameValueNonNumeric;
