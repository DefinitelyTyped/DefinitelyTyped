/**
 * Promisifies all the selected functions in an object.
 *
 * @param source - The source object containing async functions
 * @param destination - The destination object to set promisified methods on
 * @param methods - An array of method names to promisify
 * @returns The destination object with promisified methods
 */
declare function thenifyAll<T extends object>(source: T, destination?: object, methods?: string[]): T;
declare function thenifyAll<T extends object>(source: T, methods?: string[]): T;

declare namespace thenifyAll {
    /**
     * Promisifies all the selected functions in an object while maintaining backward
     * compatibility with callbacks.
     */
    function withCallback<T extends object>(source: T, destination?: object, methods?: string[]): T;
    function withCallback<T extends object>(source: T, methods?: string[]): T;
}

export = thenifyAll;
