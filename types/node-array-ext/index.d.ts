/**
 * Processes each of the elements in the array and triggers a callback once every element has been processed.
 *  - note that the elements are called in order but are not guaranteed to finish in order.
 */
export declare function asyncEach<T>(
    array: Array<T>,
    each: (i: number, element: T, done: (err?: Error) => void) => void,
    finish: (err?: Error) => void,
): void;
/**
 * Processes each of the elements in the array and triggers a callback once every element has been processed.
 *  - note that the elements are called in order and are guaranteed to finish in order.
 */
export declare function awaitEach<T>(
    array: Array<T>,
    each: (i: number, element: T, done: (err?: Error) => void) => void,
    finish: (err?: Error) => void,
): void;
