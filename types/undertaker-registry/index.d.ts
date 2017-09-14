// Type definitions for undertaker-registry 1.0
// Project: https://github.com/gulpjs/undertaker-registry
// Definitions by: Giedrius Grabauskas <https://github.com/GiedriusGrabauskas>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare class UndertakerRegistry {
    /**
     * Returns the task with that name or undefined if no task is registered with that name.
     * Useful for custom task storage.
     * Custom registries can override this method when inheriting from this default registry.
     * @param taskName {string} - Name of task.
     */
    get<TTaskFunction>(taskName: string): TTaskFunction;

    /**
     * No-op method that receives the undertaker instance.
     * Useful to set pre-defined tasks using the undertaker.task(taskName, fn) method.
     * Custom registries can override this method when inheriting from this default registry.
     * @param taker {any} - Instance of undertaker.
     */
    init(taker: any): void;

    /**
     * Adds a task to the registry.
     * If set modifies a task, it should return the new task so Undertaker can properly maintain metadata for the task.
     * Useful for adding custom behavior to every task as it is registered in the system.
     * Custom registries can override this method when inheriting from this default registry.
     * @param taskName {string} - Name of task.
     * @param fn {UndertakerRegistry.TaskFunction} - Task function.
     */
    set<TTaskFunction>(taskName: string, fn: TTaskFunction): TTaskFunction;

    /**
     * Returns an object listing all tasks in the registry.
     * Necessary to override if the get method is overridden for custom task storage.
     * Custom registries can override this when when inheriting from this default registry.
     */
    tasks(): { [taskName: string]: (...args: any[]) => any };
}

declare namespace UndertakerRegistry { }

export = UndertakerRegistry;
