// Type definitions for node-fibers 3.1
// Project: https://github.com/laverdet/node-fibers
// Definitions by: Carlos Ballesteros Velasco <https://github.com/soywiz>
//                 Chigozirim C. <https://github.com/smac89>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

interface FiberConstructor {
    /**
     * Instantiate a new Fiber. You may invoke this either as a function or as
     * a constructor; the behavior is the same.
     *
     * When run() is called on this fiber for the first time, `fn` will be
     * invoked as the first frame on a new stack. Execution will continue on
     * this new stack until `fn` returns, or Fiber.yield() is called.
     *
     * After the function returns the fiber is reset to original state and
     * may be restarted with another call to run().
     */
    new (fn: Function): Fiber;
    (fn: Function): Fiber;

    /**
     * `Fiber.current` will contain the currently-running Fiber. It will be
     * `undefined` if there is no fiber (i.e. the main stack of execution).
     *
     * See "Garbage Collection" for more information on responsible use of
     * `Fiber.current`.
     */
    readonly current?: Fiber;

    /**
     * `Fiber.yield()` will halt execution of the current fiber and return control
     * back to original caller of run(). If an argument is supplied to yield(),
     * run() will return that value.
     *
     * When run() is called again, yield() will return.
     *
     * Note that this function is a global to allow for correct garbage
     * collection. This results in no loss of functionality because it is only
     * valid to yield from the currently running fiber anyway.
     *
     * Note also that `yield` is a reserved word in Javascript. This is normally
     * not an issue, however some code linters may complain. Rest assured that it
     * will run fine now and in future versions of Javascript.
     */
    yield<T = any, R = any>(param?: R): T;
}

interface Fiber {
    /**
     * run() will start execution of this Fiber, or if it is currently yielding,
     * it will resume execution. If an argument is supplied, this argument will
     * be passed to the fiber, either as the first parameter to the main
     * function [if the fiber has not been started] or as the return value of
     * yield() [if the fiber is currently yielding].
     *
     * This function will return either the parameter passed to yield(), or the
     * returned value from the fiber's main function.
     */
    run<T = any, R = any>(param?: T): R;

    /**
     * reset() will terminate a running Fiber and restore it to its original
     * state, as if it had returned execution.
     *
     * This is accomplished by causing yield() to throw an exception, and any
     * futher calls to yield() will also throw an exception. This continues
     * until the fiber has completely unwound and returns.
     *
     * If the fiber returns a value it will be returned by reset().
     *
     * If the fiber is not running, reset() will have no effect.
     */
    reset<T = any>(): T;

    /**
     * throwInto() will cause a currently yielding fiber's yield() call to
     * throw instead of return gracefully. This can be useful for notifying a
     * fiber that you are no longer interested in its task, and that it should
     * give up.
     *
     * Note that if the fiber does not handle the exception it will continue to
     * bubble up and throwInto() will throw the exception right back at you.
     */
    throwInto(exception: Error): void;
}

declare const Fiber: FiberConstructor;
export = Fiber;
