// Type definitions for undertaker 0.12.0
// Project: https://github.com/phated/undertaker
// Definitions by: Qubo <https://github.com/tkqubo>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module "undertaker" {

    export interface UndertakerStatic {
        new(registry?: Registry): Undertaker;
    }

    export interface Undertaker {
        task: TaskMethod;
        /**
         * Takes a variable amount of strings (taskName) and/or functions (fn)
         * and returns a function of the composed tasks or functions.
         * Any taskNames are retrieved from the registry using the get method.
         *
         * When the returned function is executed, the tasks or functions will be executed in series,
         * each waiting for the prior to finish. If an error occurs, execution will stop.
         * @param task
         */
        series(...tasks: (string|Task)[]): Task;
        /**
         * Takes a variable amount of strings (taskName) and/or functions (fn)
         * and returns a function of the composed tasks or functions.
         * Any taskNames are retrieved from the registry using the get method.
         *
         * When the returned function is executed, the tasks or functions will be executed in parallel,
         * all being executed at the same time. If an error occurs, all execution will complete.
         * @param tasks
         */
        parallel(...tasks: (string|Task)[]): Task;
        /**
         * Returns the current registry object.
         */
        registry(): Registry;
        /**
         * The tasks from the current registry will be transferred to it
         * and the current registry will be replaced with the new registry.
         * @param registry
         */
        registry(registry: Registry): void;
        /**
         * Optionally takes an object (options) and returns an object representing the tree of registered tasks.
         * @param options
         */
        tree(options?: { deep?: boolean }): Node[]|string[];
        /**
         * Takes a string or function (task) and returns a timestamp of the last time the task was run successfully.
         * The time will be the time the task started.  Returns undefined if the task has not been run.
         * @param task
         * @param timeResolution
         */
        lastRun(task: string, timeResolution?: number): number;
    }

    export interface Task {
        (cb?: Function): any;
    }

    export interface TaskMethod {
        /**
         * Returns the registered function.
         * @param taskName
         */
        (taskName: string): Task;
        /**
         * Register the task by the taskName.
         * @param taskName
         * @param fn
         */
        (taskName: string, fn: Task): void;
        /**
         * Register the task by the name property of the function.
         * @param fn
         */
        (fn: Task): void;
        /**
         * Register the task by the displayName property of the function.
         * @param fn
         */
        (fn: Task & { displayName: string }): void;
    }

    export interface Registry {
        /**
         * receives the undertaker instance to set pre-defined tasks using the task(taskName, fn) method.
         * @param taker
         */
        init(taker: Undertaker): void;
        /**
         * returns the task with that name or undefined if no task is registered with that name.
         * @param taskName
         */
        get(taskName: string): Task;
        /**
         * add task to the registry. If set modifies a task, it should return the new task.
         * @param taskName
         * @param fn
         */
        set(taskName: string, fn: Task): void;
        /**
         * returns an object listing all tasks in the registry.
         */
        tasks(): { [taskName: string]: Task };
    }

    export interface Node {
        label: string;
        type: string;
        nodes: Node[];
    }

    export default UndertakerStatic;
}

