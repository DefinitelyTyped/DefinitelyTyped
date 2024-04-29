declare function semaphore(capacity?: number): semaphore.Semaphore;

declare namespace semaphore {
    interface Task {
        (): void;
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
