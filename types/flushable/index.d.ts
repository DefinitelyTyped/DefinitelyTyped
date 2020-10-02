// Type definitions for flushable 1.0
// Project: https://github.com/petegleeson/flushable#readme
// Definitions by: Parth Mehta <https://github.com/pash90>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace flushable {
    type FlushableOnCompleteHandler = (flushed: boolean) => any;

    interface FlushableOperation {
        /** Returns whether or not the callback has been executed */
        pending: () => boolean;
        /** Stops the callback from being executed */
        cancel: () => void;
        /** Immediately executes the callback */
        flush: () => void;
    }
}

export = flushable;
declare function flushable(
    onComplete: flushable.FlushableOnCompleteHandler,
    delay: number
): flushable.FlushableOperation;
