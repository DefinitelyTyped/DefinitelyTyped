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
    delay: number,
): flushable.FlushableOperation;
