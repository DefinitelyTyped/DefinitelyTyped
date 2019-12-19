// Type definitions for @wordpress/priority-queue 1.2
// Project: https://github.com/WordPress/gutenberg/tree/master/packages/priority-queue/README.md
// Definitions by: Derek Sifford <https://github.com/dsifford>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.5

/**
 * Creates a context-aware queue that only executes the last task of a given context.
 *
 * @example
 * ```js
 * import { createQueue } from '@wordpress/priority-queue';
 *
 * const queue = createQueue();
 *
 * // Context objects.
 * const ctx1 = {};
 * const ctx2 = {};
 *
 * // For a given context in the queue, only the last callback is executed.
 * queue.add( ctx1, () => console.log( 'This will be printed first' ) );
 * queue.add( ctx2, () => console.log( 'This won\'t be printed' ) );
 * queue.add( ctx2, () => console.log( 'This will be printed second' ) );
 * ```
 */
export function createQueue(): {
    add(context: object, callback: () => void): void;
    flush(context: object): boolean;
};
