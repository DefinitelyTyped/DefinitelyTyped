// Type definitions for semaphore v1.0.3
// Project: https://github.com/abrkn/semaphore.js
// Definitions by: Matt Frantz <https://github.com/mhfrantz/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped



declare function semaphore(capacity?: number): semaphore.Semaphore;

declare namespace semaphore {

    interface Task {
        (): void;
    }

    interface Semaphore {
        capacity: number;

        take(task: Task): void;
        take(n: number, task: Task): void;

        leave(n?: number): void;
    }
}
export = semaphore;
