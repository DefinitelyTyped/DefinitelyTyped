// Type definitions for semaphore v1.1.0
// Project: https://github.com/abrkn/semaphore.js
// Definitions by: Matt Frantz <https://github.com/mhfrantz>
//                 Arturas Molcanovas <https://github.com/Alorel>
//                 Tanguy Antoine <https://github.com/tanguyantoine>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

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
