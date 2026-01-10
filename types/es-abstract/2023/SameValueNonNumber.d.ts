declare function SameValueNonNumber<T extends Exclude<unknown, number>>(x: T, y: T): boolean;
export = SameValueNonNumber;
