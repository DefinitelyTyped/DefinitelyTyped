// Type definitions for @jsspec/jsspec 0.0
// Project: https://github.com/JSSpec/jsspec
// Definitions by: HookyQR <https://github.com/HookyQR>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

/**
 * Declare a lazy evaluated variable
 */
declare var set: JSSpec.LazyEvaluated;
/**
 * Declare the special lazy evaluated variable `subject`
 */
declare var subject: JSSpec.Subject;
/**
 * Execute before the first Example is executed in this context.
 *
 * If no example is executed, the hook will not be executed.
 */
declare var before: JSSpec.Hook;
/**
 * Execute after the final Example is executed in this context.
 *
 * If no example is executed, the hook will not be executed.
 */
declare var after: JSSpec.Hook;
/**
 * Execute once before every Example in this context.
 *
 * If no example is executed, the hook will not be executed.
 */
declare var beforeEach: JSSpec.Hook;
/**
 * Execute once after every Example in this context.
 *
 * If no example is executed, the hook will not be executed.
 */
declare var afterEach: JSSpec.Hook;
/**
 * Create a new Context
 */
declare var describe: JSSpec.Context;
/**
 * Create a new Context
 */
declare var context: JSSpec.Context;
/**
 * Create a Context that can be included into another Context.
 *
 * Lazy evaluators will be executed as if they were defined
 * in the context where they called in with `includeContext`.
 */
declare var sharedExamples: JSSpec.SharedContext;
/**
 * Create a Context that can be executed in another Context.
 *
 * The context will be executed as though it were defined in the
 * context it is called into with `itBehavesLike`.
 */
declare var sharedContext: JSSpec.SharedContext;
/**
 * Call a `sharedContext` into this context for evaluation.
 *
 * The called in context will be executed as though it were defined at the
 * location where this method calls it in.
 */
declare var itBehavesLike: JSSpec.SharedInvocation;
/**
 * Call the `fn` of a `sharedExamples` into this context for evaluation.
 *
 * The called in context will be executed as though its content was written
 * at the location where this method calls it in.
 */
declare var includeContext: JSSpec.SharedInvocation;
/**
 * Set an entire `describe` block as pending. The `fn` will
 * not be executed.
 */
declare var xdescribe: JSSpec.PendingContext;
/**
 * Set an entire `context` block as pending. The `fn` will
 * not be executed.
 */
declare var xcontext: JSSpec.PendingContext;
/**
 * Define an Example to be executed.
 *
 * The example has access to variables set through lazyEvaluators as
 * global variables.
 */
declare var it: JSSpec.Example;
/**
 * Set an Example as pending. The `fn` will
 * not be executed.
 */
declare var xit: JSSpec.PendingExample;
/**
 * Set an Example as pending. The `fn` will
 * not be executed.
 */
declare var pend: JSSpec.PendingExample;

declare namespace JSSpec {
    interface ExampleOptions {
        /**
         * fail the test after _timeout_ milliseconds
         */
        timeout?: number;
    }

    interface ContextOptions {
        /**
         * fail the test after _timeout_ milliseconds
         */
        timeout?: number;
        /**
         * Run the contained Examples/Contexts in random order?
         * - Run in random order if `true`
         * - Run in definition order if `false`
         */
        random?: boolean;
    }

    interface Context {
        /**
         * Create a new context with the `title` and defined in `fn`.
         * Use `options` to specify settings for running Examples in this context.
         */
        (title: string, options: ContextOptions, fn: Func): void;
        /**
         * Create a new context with the `title` and defined in `fn`.
         */
        (title: string, fn: Func): void;
    }

    interface SharedContext {
        /**
         * Create a new context with the `title` and defined in `fn`.
         * Use `options` to specify settings for running Examples in this context.
         */
        (title: string, options: ContextOptions, fn: ArgFunc): void;
        /**
         * Create a new context with the `title` and defined in `fn`.
         */
        (title: string, fn: ArgFunc): void;
    }

    interface PendingContext {
        /**
         * Create a new context with the `title` and defined in `fn`.
         *
         * `fn` will not be run, but the context will be reported as pending.
         * As the `fn` is not run, `options` has no effect.
         */
        (title: string, options: ContextOptions, fn: Func): void;
        /**
         * Create a new context with the `title` and defined in `fn`.
         *
         * `fn` will not be run, but the context will be reported as pending.
         */
        (title: string, fn?: Func): void;
    }

    interface Hook {
        /**
         * Provide a named hook, executing `fn`.
         *
         * An `async` function will be awaited.
         *
         * Use `options` to specify settings for running this hook
         */
        (name: string, options: ExampleOptions, fn: AsyncFunc | Func): void;
        /**
         * Provide a named hook, executing `fn`.
         *
         * An `async` function will be awaited.
         */
        (name: string, fn: AsyncFunc | Func): void;
        /**
         * Provide a hook, executing `fn`.
         *
         * An `async` function will be awaited.
         */
        (fn: AsyncFunc | Func): void;
    }

    interface Example {
        /**
         * Provide a test case with the given `title`, executing `fn`.
         *
         * Use `options` to specify settings for running this example
         *
         * An `async` function will be awaited.
         */
        (title: string, option: ExampleOptions, fn?: AsyncFunc | Func): void;
        /**
         * Provide a test case with the given `title`, executing `fn`.
         *
         * An `async` function will be awaited.
         */
        (title: string, fn: AsyncFunc | Func): void;
    }

    interface PendingExample {
        /**
         * Provide a pending test case with the given `title`. `fn` will note be executed.
         *
         * `options` will be ignored.
         */
        (title: string, option: ExampleOptions, fn?: AsyncFunc | Func): void;
        /**
         * Provide a pending test case with the given `title`. `fn` will not be executed.
         */
        (title: string, fn: AsyncFunc | Func): void;
    }

    interface LazyEvaluated {
        /**
         * Set a variable which can be accessed inside of an Example.
         *
         * If `fnOrValue` is a function, it will be executed to evaluate the initial state of
         * `varName` when it is first accessed in an example (or supporting hook).
         */
        (varName: string, fnOrValue: any): void;
    }

    interface Subject {
        /**
         * Set a variable which can be accessed inside of an Example.
         * `subject` will refer to the same variable.
         *
         * If `fnOrValue` is a function, it will be executed to evaluate the initial state of
         * `varName` or `subject` when it is first accessed in an example (or supporting hook).
         */
        (varName: string, fnOrValue: any): void;
        /**
         * Set `subject` which can be accessed inside of an Example.
         *
         * If `fnOrValue` is a function, it will be executed to evaluate the initial state of
         * `subject` when it is first accessed in an example (or supporting hook).
         */
        (fnOrValue: any): void;
    }

    interface SharedInvocation {
        /**
         * Call the shared `contextName` into the current context.
         * The shared context will be passed `contextArguments` on execution.
         */
        (contextName: string, ...contextArguments: any[]): void;
    }
    /**
     * Sync Function - with optional arguments
     */
    type ArgFunc = (...args: any[]) => void;
    /**
     * Async Function
     */
    type AsyncFunc = () => PromiseLike<any>;
    /**
     * Sync Function
     */
    type Func = () => void;
}
