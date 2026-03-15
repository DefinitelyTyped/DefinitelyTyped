/**
 * Asynchronous forEach function that processes items in parallel and collects results.
 *
 * @param items - Array of items to process
 * @param next - Iterator function called with each item and a done callback
 * @param callback - Called when all items are processed or on first error
 */
declare function each<T, U>(
    items: T[],
    next: (item: T, callback: (error?: Error | null, result?: U) => void) => void,
    callback?: (error: Error | undefined, results?: U[]) => void,
): void;

export = each;
