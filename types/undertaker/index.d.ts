// Type definitions for undertaker 1.1
// Project: https://github.com/phated/undertaker
// Definitions by: Qubo <https://github.com/tkqubo>, Giedrius Grabauskas <https://github.com/GiedriusGrabauskas>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as Registry from "undertaker-registry";
import { Duplex } from "stream";
import { EventEmitter } from "events";

declare namespace Undertaker {
    interface TaskFunctionParams {
        name?: string;
        displayName?: string;
        description?: string;
    }

    interface TaskFunction extends TaskFunctionParams {
        (done: (error?: any) => void): void | Duplex | NodeJS.Process | Promise<never> | any;
    }

    type Task = string | TaskFunction;

    interface TreeOptions {
        /**
         * Whether or not the whole tree should be returned.
         * Default: false
         */
        deep?: boolean;
    }

    interface TreeResult {
        label: "Tasks";
        nodes: Node[];
    }

    interface Node {
        label: string;
        nodes: Node[];
        type?: string;
        branch?: boolean;
    }
}

declare class Undertaker extends EventEmitter {
    constructor(registry?: Registry);

    /**
     * Returns the registered function.
     * @param {string} taskName - Task name.
     */
    task(taskName: string): Undertaker.TaskFunction;

    /**
     * Register the task by the taskName.
     * @param {string} taskName - Task name.
     * @param {TaskFunction} fn - Task function.
     */
    task(taskName: string, fn: Undertaker.TaskFunction): void;

    /**
     * Register the task by the name property of the function.
     * @param {TaskFunction} fn - Task function.
     */
    task(fn: Undertaker.TaskFunction): void;

    /**
     * Takes a variable amount of strings (taskName) and/or functions (fn)
     * and returns a function of the composed tasks or functions.
     * Any taskNames are retrieved from the registry using the get method.
     *
     * When the returned function is executed, the tasks or functions will be executed in series,
     * each waiting for the prior to finish. If an error occurs, execution will stop.
     * @param {...Undertaker.Task[]} tasks - List of tasks.
     */
    series(...tasks: Undertaker.Task[]): Undertaker.TaskFunction;

    /**
     * Takes a variable amount of strings (taskName) and/or functions (fn)
     * and returns a function of the composed tasks or functions.
     * Any taskNames are retrieved from the registry using the get method.
     *
     * When the returned function is executed, the tasks or functions will be executed in series,
     * each waiting for the prior to finish. If an error occurs, execution will stop.
     * @param {Undertaker.Task[]} tasks - List of tasks.
     */
    series(tasks: Undertaker.Task[]): Undertaker.TaskFunction;

    /**
     * Takes a variable amount of strings (taskName) and/or functions (fn)
     * and returns a function of the composed tasks or functions.
     * Any taskNames are retrieved from the registry using the get method.
     *
     * When the returned function is executed, the tasks or functions will be executed in parallel,
     * all being executed at the same time. If an error occurs, all execution will complete.
     * @param {...Undertaker.Task[]} tasks - list of tasks.
     */
    parallel(...tasks: Undertaker.Task[]): Undertaker.TaskFunction;

    /**
     * Takes a variable amount of strings (taskName) and/or functions (fn)
     * and returns a function of the composed tasks or functions.
     * Any taskNames are retrieved from the registry using the get method.
     *
     * When the returned function is executed, the tasks or functions will be executed in parallel,
     * all being executed at the same time. If an error occurs, all execution will complete.
     * @param {Undertaker.Task[]} tasks - list of tasks.
     */
    parallel(tasks: Undertaker.Task[]): Undertaker.TaskFunction;

    /**
     * Returns the current registry object.
     */
    registry(): Registry;

    /**
     * The tasks from the current registry will be transferred to it
     * and the current registry will be replaced with the new registry.
     * @param {Registry} registry - Instance of registry.
     */
    registry(registry: Registry): void;

    /**
     * Optionally takes an object (options) and returns an object representing the tree of registered tasks.
     * @param {Undertaker.TreeOptions} options - Tree options.
     */
    tree(options?: Undertaker.TreeOptions): Undertaker.TreeResult;

    /**
     * Takes a string or function (task) and returns a timestamp of the last time the task was run successfully.
     * The time will be the time the task started.  Returns undefined if the task has not been run.
     * @param {Undertaker.Task} task - Task.
     * @param {number} [timeResolution] - Time resolution.
     */
    lastRun(task: Undertaker.Task, timeResolution?: number): number;
}

export = Undertaker;
