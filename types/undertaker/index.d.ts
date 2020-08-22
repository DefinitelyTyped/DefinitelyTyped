// Type definitions for undertaker 1.2
// Project: https://github.com/gulpjs/undertaker
// Definitions by: Qubo <https://github.com/tkqubo>
//                 Giedrius Grabauskas <https://github.com/GiedriusGrabauskas>
//                 Evan Yamanishi <https://github.com/sh0ji>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />
import * as Registry from "undertaker-registry";
import { Duplex } from "stream";
import { EventEmitter } from "events";

declare namespace Undertaker {
    interface TaskFunctionParams {
        readonly name?: string;
        displayName?: string;
        description?: string;
        flags?: TaskFlags;
    }

    interface TaskFlags {
        [arg: string]: string;
    }

    interface TaskFunctionBase {
        (done: (error?: any) => void): void | Duplex | NodeJS.Process | Promise<never> | any;
    }

    interface TaskFunction extends TaskFunctionBase, TaskFunctionParams {}

    type Task = string | TaskFunction;

    interface TaskFunctionWrapped extends TaskFunctionBase {
        displayName: string;
        unwrap(): TaskFunction;
    }

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
     * Returns the wrapped registered function.
     * @param taskName - Task name.
     */
    task(taskName: string): Undertaker.TaskFunctionWrapped;

    /**
     * Register the task by the taskName.
     * @param taskName - Task name.
     * @param fn - Task function.
     */
    task(taskName: string, fn: Undertaker.TaskFunction): void;

    /**
     * Register the task by the name property of the function.
     * @param fn - Task function.
     */
    task(fn: Undertaker.TaskFunction): void;

    /**
     * Takes a variable amount of strings (taskName) and/or functions (fn)
     * and returns a function of the composed tasks or functions.
     * Any taskNames are retrieved from the registry using the get method.
     *
     * When the returned function is executed, the tasks or functions will be executed in series,
     * each waiting for the prior to finish. If an error occurs, execution will stop.
     * @param tasks - List of tasks.
     */
    series(...tasks: Undertaker.Task[]): Undertaker.TaskFunction;

    /**
     * Takes a variable amount of strings (taskName) and/or functions (fn)
     * and returns a function of the composed tasks or functions.
     * Any taskNames are retrieved from the registry using the get method.
     *
     * When the returned function is executed, the tasks or functions will be executed in series,
     * each waiting for the prior to finish. If an error occurs, execution will stop.
     * @param tasks - List of tasks.
     */
    series(tasks: Undertaker.Task[]): Undertaker.TaskFunction;

    /**
     * Takes a variable amount of strings (taskName) and/or functions (fn)
     * and returns a function of the composed tasks or functions.
     * Any taskNames are retrieved from the registry using the get method.
     *
     * When the returned function is executed, the tasks or functions will be executed in parallel,
     * all being executed at the same time. If an error occurs, all execution will complete.
     * @param tasks - list of tasks.
     */
    parallel(...tasks: Undertaker.Task[]): Undertaker.TaskFunction;

    /**
     * Takes a variable amount of strings (taskName) and/or functions (fn)
     * and returns a function of the composed tasks or functions.
     * Any taskNames are retrieved from the registry using the get method.
     *
     * When the returned function is executed, the tasks or functions will be executed in parallel,
     * all being executed at the same time. If an error occurs, all execution will complete.
     * @param tasks - list of tasks.
     */
    parallel(tasks: Undertaker.Task[]): Undertaker.TaskFunction;

    /**
     * Returns the current registry object.
     */
    registry(): Registry;

    /**
     * The tasks from the current registry will be transferred to it
     * and the current registry will be replaced with the new registry.
     * @param registry - Instance of registry.
     */
    registry(registry: Registry): void;

    /**
     * Optionally takes an object (options) and returns an object representing the tree of registered tasks.
     * @param options - Tree options.
     */
    tree(options?: Undertaker.TreeOptions): Undertaker.TreeResult;

    /**
     * Takes a string or function (task) and returns a timestamp of the last time the task was run successfully.
     * The time will be the time the task started.  Returns undefined if the task has not been run.
     * @param task - Task.
     * @param [timeResolution] - Time resolution.
     */
    lastRun(task: Undertaker.Task, timeResolution?: number): number;
}

export = Undertaker;
