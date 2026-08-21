declare function iterateValue<T>(iterator: Iterable<T>): T[];
declare function iterateValue<T>(iterator: Iterable<T>, callback: (value: T) => void): void;

export = iterateValue;
