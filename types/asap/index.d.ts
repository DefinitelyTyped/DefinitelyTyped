// Type definitions for asap 2.0
// Project: https://github.com/kriskowal/asap
// Definitions by: fpascutti <https://github.com/fpascutti>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface Task {
    call(...args: any[]): any;
}

/**
 * Executes a task as soon as possible.
 * @param task Function or any object that implements `call()`.
 */
declare function asap(task: Task): void;
export = asap;
