declare function iterateIterator<T>(iterator: Iterator<T>): T[];
declare function iterateIterator<T>(iterator: Iterator<T>, callback: (value: T) => void): void;

export = iterateIterator;
