/**
 * This declaration specifies that the function is the exported object from the file
 */
export = asyncPool;

/**
 * Runs multiple promise-returning & async functions in a limited concurrency pool.
 * It rejects immediately as soon as one of the promises rejects.
 * It resolves when all the promises completes.
 * It calls the iterator function as soon as possible (under concurrency limit).
 *
 * @param poolLimit The pool limit number (>= 1).
 * @param array Input array.
 * @param iteratorFn Iterator function that takes two arguments (array item and the array itself).
 *                   The iterator function should either return a promise or be an async function.
 *
 * @template IN Type of the input array
 * @template OUT Type of the resolves of the promises
 */
declare function asyncPool<IN, OUT>(
    poolLimit: number,
    array: ReadonlyArray<IN>,
    iteratorFn: (generator: IN) => Promise<OUT>,
): AsyncIterableIterator<OUT>;
