import { Disposable } from '../index';

/** Run a node script in a separate process. */
export class Task {
    // NOTE: this is actually the best we can do here with the REST parameter for
    // this appearing in the middle of the parameter list, which isn't aligned with
    // the ES6 spec. Maybe when they rewrite it in JavaScript this will change.
    /** A helper method to easily launch and run a task once. */
    // tslint:disable-next-line:no-any
    static once(taskPath: string, ...args: any[]): Task;

    /** Creates a task. You should probably use .once */
    constructor(taskPath: string);

    // NOTE: this is actually the best we can do here with the REST parameter
    // for this appearing in the beginning of the parameter list, which isn't
    // aligned with the ES6 spec.
    /**
     *  Starts the task.
     *  Throws an error if this task has already been terminated or if sending a
     *  message to the child process fails.
     */
    // tslint:disable-next-line:no-any
    start(...args: any[]): void;

    /**
     *  Send message to the task.
     *  Throws an error if this task has already been terminated or if sending a
     *  message to the child process fails.
     */
    // tslint:disable-next-line:no-any
    send(message: string | number | boolean | object | null | any[]): void;

    /** Call a function when an event is emitted by the child process. */
    // tslint:disable-next-line:no-any
    on(eventName: string, callback: (param: any) => void): Disposable;

    /**
     *  Forcefully stop the running task.
     *  No more events are emitted once this method is called.
     */
    terminate(): void;

    /** Cancel the running task and emit an event if it was canceled. */
    cancel(): boolean;
}
