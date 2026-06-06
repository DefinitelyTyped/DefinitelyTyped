/**
 * Base class for representing tasks. A task is an isolated unit of work that is
 * processed in an asynchronous way. Tasks are managed within a {@link TaskQueue task queue}.
 */
export class Task {
    /**
     * This method represents the actual unit of work.
     * Must be implemented by all concrete tasks.
     */
    execute(): void;
}
