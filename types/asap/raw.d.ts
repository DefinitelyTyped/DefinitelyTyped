interface Task {
    call(...args: any[]): any;
}

/**
 * Executes a task as soon as possible.
 * @param task Function or any object that implements `call()`.
 */
declare function rawAsap(task: Task): void;
declare namespace rawAsap {
    /**
     * Flushes the event queue.
     */
    function requestFlush(): void;
}
export = rawAsap;
