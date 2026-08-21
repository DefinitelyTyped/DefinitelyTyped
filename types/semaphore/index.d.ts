declare function semaphore(capacity?: number): semaphore.Semaphore;

declare namespace semaphore {
    /**
     * Releases `n` (default `1`) units of capacity back to the semaphore.
     */
    type Leave = (n?: number) => void;

    interface Task {
        /**
         * @param leave Releases the capacity held by this task. `take` passes it to every
         * task it runs, so a task can release the semaphore without closing over it.
         */
        (leave: Leave): void;
    }

    interface Semaphore {
        capacity: number;
        current: number;

        available(n: number): boolean;

        take(task: Task): void;
        take(n: number, task: Task): void;

        leave(n?: number): void;
    }
}
export = semaphore;
