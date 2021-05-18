import { Task } from "./Task";

/**
 * This class is used for task management. Tasks are processed in an asynchronous
 * way when there is idle time within a single simulation step or after a defined amount
 * of time (deadline). The class is a wrapper around {@link https://w3.org/TR/requestidlecallback|requestidlecallback()},
 * a JavaScript API for cooperative scheduling of background tasks.
 */
export class TaskQueue {
    /**
     * A list of pending tasks.
     */
    readonly tasks: Task[];

    /**
     * Used to control the asynchronous processing.
     * - timeout: After this amount of time (in ms), a scheduled task is executed even if
     * doing so risks causing a negative performance impact (e.g. bad frame time).
     */
    readonly options: {
        timeout: number;
    };

    /**
     * Constructs a new task queue.
     */
    constructor();

    /**
     * Adds the given task to the task queue.
     *
     * @param task - The task to add.
     */
    enqueue(task: Task): this;

    /**
     * Updates the internal state of the task queue. Should be called
     * per simulation step.
     */
    update(): this;
}
