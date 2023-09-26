// Internal types to define function parameters.
type DoneCallback = () => void;
type BaseHookFunction = (done: DoneCallback) => void;
type ExceptionHookFunction = (error: Error, done: DoneCallback) => void;
type EventFilterFunction = (...args: any[]) => boolean;

/**
 * Adds a basic hook which gets called on all exits.
 *
 * @param hook Function which will be called on exit.
 * If a `done` function is present as a parameter, the program will not exit until
 * the `done` function gets called, allowing asynchronous actions to take place.
 */
declare function AsyncExitHook(hook: BaseHookFunction): void;

declare namespace AsyncExitHook {
    /**
     * Adds a hook which gets called specifically on uncaught exceptions.
     *
     * @param hook Function which will be called on exit
     * optionally containing the uncaught exception error.
     * If a `done` function is present as a parameter, the program will not exit until
     * the `done` function gets called, allowing asynchronous actions to take place.
     */
    function uncaughtExceptionHandler(hook: ExceptionHookFunction): void;

    /**
     * Adds a hook which gets called specifically on unhandled promise rejections.
     *
     * @param hook Function which will be called on exit
     * optionally containing the unhandled promise rejection error.
     * If a `done` function is present as a parameter, the program will not exit until
     * the `done` function gets called, allowing asynchronous actions to take place.
     */
    function unhandledRejectionHandler(hook: ExceptionHookFunction): void;

    /**
     * Lists all hooked event names.
     */
    function hookedEvents(): string[];

    /**
     * Unhooks an event and its filters.
     *
     * @param event The name of the event to unhook.
     */
    function unhookEvent(event: string | symbol): void;

    /**
     * Adds a event/code/function filter for the basic exit hook.
     *
     * @param event The event name emitted to listen to (`process.emit(event)`).
     * @param code The exit code emitted to listen to (`process.emit(event, code)`).
     * @param filter A custom filter function which takes all parameters passed to `process.emit` excluding the event name (`process.emit(event, *parameters*)`).
     */
    function hookEvent(event: string | symbol, code: number, filter?: EventFilterFunction): void;

    /**
     * Overwrites the internal asynchronous hook method timeout time.
     *
     * @param time New timeout time in `ms`.
     */
    function forceExitTimeout(time: number): void;
}

export = AsyncExitHook;
