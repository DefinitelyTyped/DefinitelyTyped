declare namespace adone {
    /**
     * testing framework
     */
    namespace shani {
        namespace I {
            interface EngineOptions {
                /**
                 * Default timeout for tests and block
                 */
                defaultTimeout?: number;

                /**
                 * Default timeout for hooks
                 */
                defaultHookTimeout?: number;

                /**
                 * Options that transplirer uses when loads tests from files
                 */
                transpilerOptions?: object; // TODO: possible options to adone.js.compiler

                /**
                 * Forca calling gc function after each processed file
                 */
                callGc?: boolean;
            }

            interface DescribeOptions {
                /**
                 * Specify that this block must be skipped
                 */
                skip?: boolean | (() => void);

                /**
                 * Specify the timeout for this block
                 */
                timeout?: number | (() => void);
            }

            interface DescribeRuntimeContext {
                /**
                 * Skip this block
                 */
                skip(): void;

                /**
                 * Specify timeout for this block
                 */
                timeout(ms: number): void;

                [key: string]: any;
            }

            type DescribeCallback = (this: DescribeRuntimeContext) => void;

            interface DescribeFunction {
                (description: string, callback: DescribeCallback): void;
                (description: string, options: DescribeOptions, callback: DescribeCallback): void;
                (a: string, description: string, callback: DescribeCallback): void;
                (a: string, description: string, options: DescribeOptions, callback: DescribeCallback): void;
                (a: string, b: string, description: string, callback: DescribeCallback): void;
                (a: string, b: string, description: string, options: DescribeOptions, callback: DescribeCallback): void;
                (a: string, b: string, c: string, description: string, callback: DescribeCallback): void;
                (a: string, b: string, c: string, description: string, options: DescribeOptions, callback: DescribeCallback): void;
                (a: string, b: string, c: string, d: string, description: string, callback: DescribeCallback): void;
                (a: string, b: string, c: string, d: string, description: string, options: DescribeOptions, callback: DescribeCallback): void;
                (a: string, b: string, c: string, d: string, e: string, description: string, callback: DescribeCallback): void;
                (a: string, b: string, c: string, d: string, e: string, description: string, options: DescribeOptions, callback: DescribeCallback): void;
                (a: string, b: string, c: string, d: string, e: string, f: string, description: string, callback: DescribeCallback): void;
                (a: string, b: string, c: string, d: string, e: string, f: string, description: string, options: DescribeOptions, callback: DescribeCallback): void;
                (a: string, b: string, c: string, d: string, e: string, f: string, g: string, description: string, callback: DescribeCallback): void;
                (a: string, b: string, c: string, d: string, e: string, f: string, g: string, description: string, options: DescribeOptions, callback: DescribeCallback): void;
                (a: string, b: string, c: string, d: string, e: string, f: string, g: string, h: string, description: string, callback: DescribeCallback): void;
                (a: string, b: string, c: string, d: string, e: string, f: string, g: string, h: string, description: string, options: DescribeOptions, callback: DescribeCallback): void;
                (a: string, b: string, c: string, d: string, e: string, f: string, g: string, h: string, i: string, description: string, callback: DescribeCallback): void;
                (a: string, b: string, c: string, d: string, e: string, f: string, g: string, h: string, i: string, description: string, options: DescribeOptions, callback: DescribeCallback): void;
                (a: string, b: string, c: string, d: string, e: string, f: string, g: string, h: string, i: string, j: string, description: string, callback: DescribeCallback): void;
                (
                    a: string, b: string, c: string,
                    d: string, e: string, f: string,
                    g: string, h: string, i: string,
                    j: string, description: string, options: DescribeOptions,
                    callback: DescribeCallback
                ): void;
                (a: string, ...args: Array<string | DescribeCallback>): void;

                /**
                 * Mark this block as inclusive
                 */
                only: DescribeFunction;

                /**
                 * Mark this block as exclusive
                 */
                skip: DescribeFunction;

                /**
                 * Mark this block as todo
                 */
                todo: DescribeFunction;
            }

            interface TestOptions {
                /**
                 * Specify that this test must be skipped
                 */
                skip?: boolean | (() => void);

                /**
                 * Specify timeout for this test
                 */
                timeout?: number | (() => void);

                /**
                 * Add before hook for this test
                 */
                before?: HookCallback | [string, HookCallback];

                /**
                 * Add after hook for this test
                 */
                after?: HookCallback | [string, HookCallback];
            }

            interface TestRuntimeContext {
                /**
                 * Skip this test
                 */
                skip(): void;

                /**
                 * Specify timeout for this test
                 */
                timeout(ms: number): void;

                [key: string]: any;
            }

            type TestCallback = (this: TestRuntimeContext, done: (err?: any) => void) => void;

            interface TestFunction {
                (description: string, callback: TestCallback): void;
                (description: string, options: TestOptions, callback: TestCallback): void;
                /**
                 * Mark this test as inclusive
                 */
                only: TestFunction;

                /**
                 * Mark this test as exclusive
                 */
                skip: TestFunction;

                /**
                 * Mark this test as todo
                 */
                todo: TestFunction;
            }

            interface HookRuntimeContext {
                /**
                 * Specify timeout for this hook
                 */
                timeout(ms: number): void;

                [key: string]: any;
            }

            type HookCallback = (this: HookRuntimeContext, done: (err?: any) => void) => void;

            interface HookFunction {
                (callback: HookCallback): void;
                (description: string, callback: HookCallback): void;
            }

            type StartHookEvent = "start before hook" | "start after hook"
                | "start before each hook" | "start after each hook"
                | "start before test hook" | "start after test hook";

            type EndHookEvent = "end before hook" | "end after hook"
                | "end before each hook" | "end after each hook"
                | "end before test hook" | "end after test hook";

            interface Emitter extends event.EventEmitter {
                on(event: "enter block", listener: (event: { block: Block }) => void): this;
                on(event: "exit block", listener: (event: { block: Block }) => void): this;
                on(event: "start test", listener: (event: { block: Block, test: Test }) => void): this;
                on(event: "end test", listener: (event: { block: Block, test: Test, meta: ExecutionResult }) => void): this;
                on(event: "skip test", listener: (event: { block: Block, test: Test, runtime: boolean }) => void): this;
                on(event: StartHookEvent, listener: (event: { block: Block, test: Test, hook: Hook }) => void): this;
                on(event: EndHookEvent, listener: (event: { block: Block, test: Test, hook: Hook, meta: ExecutionResult }) => void): this;
                on(event: "error", listener: (err: any) => void): this;
                on(event: "done", listener: () => void): this;

                /**
                 * Stops testing
                 */
                stop(): void;
            }

            interface ExecutionResult {
                /**
                 * Resulting error
                 */
                err: any;

                /**
                 * Elapsed time in milliseconds
                 */
                elapsed: number;
            }

            class Hook {
                desctiption: string;

                constructor(description: string, callback: HookCallback, runtimeContext: object);

                /**
                 * Check if this hook has been run
                 */
                fired(): boolean;

                /**
                 * Check if this hook failed
                 */
                failed(): boolean;

                /**
                 * The cause of the fail
                 */
                cause(): any;

                /**
                 * Returns the timeout of the hook
                 */
                timeout(): number;

                /**
                 * Seta a timeout for this hook
                 */
                timeout(ms: number): this;

                /**
                 * Executes the hook
                 */
                run(): Promise<ExecutionResult>;
            }

            class Test {
                description: string;

                constructor(description: string, callback: TestCallback, block: Block, runtimeContext: object, options: TestOptions);

                /**
                 * Handles params from options
                 */
                prepare(): Promise<void>;

                /**
                 * Checks if this test is exclusive (has skip flag)
                 */
                isExclusive(): boolean;

                /**
                 * Checks if this test is exclusive (has only flag)
                 */
                isInclusive(): boolean;

                /**
                 * Skips this test
                 */
                skip(): this;

                /**
                 * Marks this test as inclusive
                 */
                only(): this;

                /**
                 * Marks this test as todo
                 */
                todo(): this;

                /**
                 * Returns the timeout of the test
                 */
                timeout(): number | null;

                /**
                 * Sets a timeout for this test
                 */
                timeout(ms: number): this;

                /**
                 * Returns a string of names from the root to this test
                 */
                chain(): string;

                /**
                 * Executes the test
                 */
                run(): Promise<ExecutionResult>;
            }

            class Block {
                name: string;
                hooks: {
                    before: Hook[];
                    beforeEach: Hook[];
                    afterEach: Hook[];
                    after: Hook[];
                };
                children: Array<Block | Test>;

                constructor(name: string, parent: Block, options: DescribeOptions);

                /**
                 * Handles params from options
                 */
                prepare(): Promise<void>;

                /**
                 * Adds a new child into this block
                 */
                addChild(child: Block | Test): void;

                /**
                 * Before hooks iterator
                 */
                beforeHooks(): IterableIterator<Hook>;

                /**
                 * After hooks iterator
                 */
                afterHooks(): IterableIterator<Hook>;

                /**
                 * Before each hooks iterator
                 */
                beforeEachHooks(): IterableIterator<Hook>;

                /**
                 * After each hooks iterator
                 */
                afterEachHooks(): IterableIterator<Hook>;

                /**
                 * Checks if this block is exclusive (has skip flag)
                 */
                isExclusive(): boolean;

                /**
                 * Checks if this block is inclusive (has only flag)
                 */
                isInclusive(): boolean;

                /**
                 * Checks if this block has an inclusive node
                 */
                hasInclusive(): boolean;

                /**
                 * Skips this block
                 */
                skip(): this;

                /**
                 * Marks this block as inclusive
                 */
                only(): this;

                /**
                 * Marks this block as todo
                 */
                todo(): this;

                /**
                 * Returns the timeout of the block
                 */
                timeout(): number | null;

                /**
                 * Sets a timeout for this block
                 */
                timeout(ms: number): this;

                /**
                 * Returns the block's level, the length of parent blocks chain
                 */
                level(): number;

                /**
                 * Sets the block's level
                 */
                level(level: number): this;

                /**
                 * Returns a string of names from the root to this block
                 */
                chain(): string;

                /**
                 * Returns a chain of blocks from the root to this block
                 */
                blockChain(): Block[];
            }

            interface Context {
                /**
                 * Defines a tests block
                 */
                describe: DescribeFunction;

                /**
                 * Defines a tests block
                 */
                context: DescribeFunction;

                /**
                 * Defines a test
                 */
                it: TestFunction;

                /**
                 * Defines a test
                 */
                specify: TestFunction;

                /**
                 * Defines a hook that will be called only once before the block's tests
                 */
                before: HookFunction;

                /**
                 * Defines a hook that will be called only once after the block's tests
                 */
                after: HookFunction;

                /**
                 * Defines a hook that will be called before each test
                 */
                beforeEach: HookFunction;

                /**
                 * Defines a hook that will be called after each test
                 */
                afterEach: HookFunction;

                /**
                 * Root node
                 */
                root: Block;

                /**
                 * Starts testing
                 */
                start(): Emitter;
            }
        }

        /**
         * Represents a testing engine
         */
        export class Engine {
            constructor(options?: I.EngineOptions);

            /**
             * Includes given files as test files
             */
            include(...paths: string[]): void;

            /**
             * Excludes given paths from testing
             */
            exclude(...paths: string[]): void;

            /**
             * Returns a testing context
             */
            context(): I.Context;

            /**
             * Starts testing
             */
            start(): I.Emitter;
        }

        namespace util {
            namespace I {
                // based on https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/sinon

                interface SpyCallApi {
                    /**
                     * The call's this value
                     */
                    thisValue: any;

                    /**
                     * The call's arguments
                     */
                    args: any[];

                    /**
                     * Exception throws if any
                     */
                    exception: any;

                    /**
                     * Return value
                     */
                    returnValue: any;

                    /**
                     * Whether the spy was called on obj (this value)
                     */
                    calledOn(obj: any): boolean;

                    /**
                     * Whether the arguments were args (and possibly others)
                     */
                    calledWith(...args: any[]): boolean;

                    /**
                     * Whether the arguments were exactly args (no others)
                     */
                    calledWithExactly(...args: any[]): boolean;

                    /**
                     * Whether the call received matching args (and possibly others)
                     */
                    calledWithMatch(...args: any[]): boolean;

                    /**
                     * Whether the call did not receive args
                     */
                    notCalledWith(...args: any[]): boolean;

                    /**
                     * Whether the call did not receive matching args
                     */
                    notCalledWithMatch(...args: any[]): boolean;

                    /**
                     * Whether the call returned the given value
                     */
                    returned(value: any): boolean;

                    /**
                     * Whether the call threw an exception
                     */
                    threw(): boolean;

                    /**
                     * Whether the call threw an exception of provided type
                     */
                    threw(type: string): boolean;

                    /**
                     * Whether the call threw obj
                     */
                    threw(obj: any): boolean;

                    /**
                     * Calls the argument at the given index
                     */
                    callArg(pos: number): void;

                    /**
                     * Calls the argument at the given index on the given context
                     */
                    callArgOn(pos: number, obj: any): void;

                    /**
                     * Calls the argument at the given index with arguments
                     */
                    callArgWith(pos: number, ...args: any[]): void;

                    /**
                     * Calls the argument at the given index on the given context and with the given arguments
                     */
                    callArgOnWith(pos: number, obj: any, ...args: any[]): void;

                    /**
                     * Calls a callback from the arguments with the given arguments
                     */
                    yield(...args: any[]): void;

                    /**
                     * Calls a callback from the arguments with the given arguments on the given context
                     */
                    yieldOn(obj: any, ...args: any[]): void;

                    /**
                     * Calls with the given arguments a callback that is a property of the call's argument with the given name
                     */
                    yieldTo(property: string, ...args: any[]): void;

                    /**
                     * Calls on the given context with the given arguments a callback that
                     * is a property of the call's argument with the given name
                     */
                    yieldToOn(property: string, obj: any, ...args: any[]): void;
                }

                interface SpyCall extends SpyCallApi {
                    /**
                     * Whether the call was called before the given call
                     */
                    calledBefore(call: SpyCall): boolean;

                    /**
                     * Whether the call was called after the given call
                     */
                    calledAfter(call: SpyCall): boolean;

                    /**
                     * Whether the call was called using the new operator
                     */
                    calledWithNew(call: SpyCall): boolean;
                }

                interface Spy extends SpyCallApi {
                    /**
                     * The number of recorded calls
                     */
                    callCount: number;

                    /**
                     * Whether the spy was called
                     */
                    called: boolean;

                    /**
                     * Whether the spy was not called
                     */
                    notCalled: boolean;

                    /**
                     * Whether the spy was called once
                     */
                    calledOnce: boolean;

                    /**
                     * Whether the spy was called twice
                     */
                    calledTwice: boolean;

                    /**
                     * Whether the spy was called thrice
                     */
                    calledThrice: boolean;

                    /**
                     * The first call
                     */
                    firstCall: SpyCall;

                    /**
                     * The second call
                     */
                    secondCall: SpyCall;

                    /**
                     * The third call
                     */
                    thirdCall: SpyCall;

                    /**
                     * The last call
                     */
                    lastCall: SpyCall;

                    /**
                     * Array of the calls contexts
                     */
                    thisValues: any[];

                    /**
                     * Array of the calls arguments
                     */
                    args: any[][];

                    /**
                     * Array of the calls exceptions
                     */
                    exceptions: any[];

                    /**
                     * Array of the calls return values
                     */
                    returnValues: any[];

                    (...args: any[]): any;
                    /**
                     * Whether the spy was called before another spy
                     */
                    calledBefore(anotherSpy: Spy): boolean;

                    /**
                     * Whether the spy was called after another spy
                     */
                    calledAfter(anotherSpy: Spy): boolean;

                    /**
                     * Whether the spy was called before another spy and no spies occured between them
                     */
                    calledImmediatelyBefore(anotherSpy: Spy): boolean;

                    /**
                     * Whether the spy was called after another spy and no spies occured between them
                     */
                    calledImmediatelyAfter(anotherSpy: Spy): boolean;

                    /**
                     * Whether the spy was called using the new operator
                     */
                    calledWithNew(): boolean;

                    /**
                     * Creates a spy that record calls only with the given arguments
                     */
                    withArgs(...args: any[]): Spy;

                    /**
                     * Whether the spy was called on the given context (this value)
                     */
                    alwaysCalledOn(obj: any): boolean;

                    /**
                     * Whether the spy was called with the given arguments (and possibly others)
                     */
                    alwaysCalledWith(...args: any[]): boolean;

                    /**
                     * Whether the spy was called exactly with the given arguments (no others)
                     */
                    alwaysCalledWithExactly(...args: any[]): boolean;

                    /**
                     * Whether the spy was called with the matching arguments (and possibly others)
                     */
                    alwaysCalledWithMatch(...args: any[]): boolean;

                    /**
                     * Whether the spy was never called with the given arguments
                     */
                    neverCalledWith(...args: any[]): boolean;

                    /**
                     * Whether the spy was neven called with the matching arguments
                     */
                    neverCalledWithMatch(...args: any[]): boolean;

                    /**
                     * Whether the spy always threw exceptions
                     */
                    alwaysThrew(): boolean;

                    /**
                     * Whether the spy always threw exceptions of the given types
                     */
                    alwaysThrew(type: string): boolean;

                    /**
                     * Whether the spy always threw the given object
                     */
                    alwaysThrew(obj: any): boolean;

                    /**
                     * Whether the spy always returned the given object
                     */
                    alwaysReturned(obj: any): boolean;

                    /**
                     * Invokes the callbacks passed in the arguments with the given arguments
                     */
                    invokeCallback(...args: any[]): void;

                    /**
                     * Returns the call with the given index
                     */
                    getCall(n: number): SpyCall;

                    /**
                     * Returns all the calls
                     */
                    getCalls(): SpyCall[];

                    /**
                     * Resets the state of the spy
                     */
                    reset(): void;

                    /**
                     * Returns the passed format string with the given replacements
                     */
                    printf(format: string, ...args: any[]): string;

                    /**
                     * Replaces the spy with the original method if the spy replaced an original method
                     */
                    restore(): void;

                    /**
                     * Waits for the call where the given match function returns true
                     */
                    waitFor(match: (call: SpyCall) => boolean): Promise<SpyCall>;
                    waitFor<T>(match: (call: SpyCall) => boolean, ret: (call: SpyCall) => T): Promise<T>;

                    /**
                     * Waits for a call
                     */
                    waitForCall(): Promise<SpyCall>;

                    /**
                     * Waits for n calls
                     */
                    waitForNCalls(n: number): Promise<SpyCall[]>;

                    /**
                     * Waits for the call with the given value at the given index (deep equal)
                     */
                    waitForArg(index: number, value: any): Promise<SpyCall>;

                    /**
                     * Waits for the call where the first args are deeply equal to the given, it can have more args than given
                     */
                    waitForArgs(...args: any[]): Promise<SpyCall>;
                }

                interface Stub extends Spy {
                    /**
                     * Resets the stub's behavior to the default behavior
                     */
                    resetBehavior(): void;

                    /**
                     * Resets the stub's history
                     */
                    resetHistory(): void;

                    /**
                     * Causes the stub to return promises using the given promise library
                     */
                    usingPromise(promiseLibrary: any): Stub;

                    /**
                     * Makes the stub return the given object
                     */
                    returns(obj: any): Stub;

                    /**
                     * Causes the stub to return the argument at the given index
                     */
                    returnsArg(index: number): Stub;

                    /**
                     * Causes the stub to return its this value
                     */
                    returnsThis(): Stub;

                    /**
                     * Causes the stub to return a promise that resolves to the given value
                     */
                    resolves(value?: any): Stub;

                    /*
                     * Causes the stub to throw an exception of the given type
                     */
                    throws(type?: string): Stub;

                    /**
                     * Causes the stub to throw the given object
                     */
                    throws(obj: any): Stub;

                    /**
                     * Causes the stub to throw the argument at the given index
                     */
                    throwsArg(index: number): Stub;

                    /*
                     * Causes the stub to throw an exception of the given type
                     */
                    throwsException(type?: string): Stub;

                    /**
                     * Causes the stub to throw the argument at the given index
                     */
                    throwsException(obj: any): Stub;

                    /**
                     * Causes the stub to reject
                     */
                    rejects(): Stub;

                    /**
                     * Causes the stub to reject with the given type
                     */
                    rejects(errorType: string): Stub;

                    /**
                     * Causes the stub to reject with the given value
                     */
                    rejects(value: any): Stub;

                    /**
                     * Causes the stub to call the argument at the provided index as a callback function
                     */
                    callsArg(index: number): Stub;

                    /**
                     * Causes the original method wrapped into the stub to be called when none of the conditional stubs are matched
                     */
                    callThrough(): Stub;

                    /**
                     * Causes the stub to call the argument at the provided index as a callback function on the given context
                     */
                    callsArgOn(index: number, context: any): Stub;

                    /**
                     * Causes the stub to call the argument at the provided index as a callback function with the given arguments
                     */
                    callsArgWith(index: number, ...args: any[]): Stub;

                    /**
                     * Causes the stub to call the argument at the provided index as a callback function on the given context with the given arguments
                     */
                    callsArgOnWith(index: number, context: any, ...args: any[]): Stub;

                    /**
                     * Causes the stub to asynchronously call the argument at the provided index as a callback function
                     */
                    callsArgAsync(index: number): Stub;

                    /**
                     * Causes the stub to asynchronously call the argument at the provided index as a callback function on the given context
                     */
                    callsArgOnAsync(index: number, context: any): Stub;

                    /**
                     * Causes the stub to asynchronously call the argument at the provided index as a callback function on the given context with the given arguments
                     */
                    callsArgWithAsync(index: number, ...args: any[]): Stub;

                    /**
                     * Causes the stub to asynchronously call the argument at the provided index as a callback function on the given context with the given arguments
                     */
                    callsArgOnWithAsync(index: number, context: any, ...args: any[]): Stub;

                    /**
                     * Makes the stub call the provided fake function
                     */
                    callsFake(func: (...args: any[]) => void): Stub;

                    /**
                     * Replaces a new getter with this stub
                     */
                    get(func: () => any): Stub;

                    /**
                     * Replaces a new getter with this stub
                     */
                    set(func: (v: any) => void): Stub;

                    /**
                     * Defines the behavior of the stub on the call with the given index
                     */
                    onCall(n: number): Stub;

                    /**
                     * Defines the behavior of the stub on the first call
                     */
                    onFirstCall(): Stub;

                    /**
                     * Defines the behavior of the stub on the second call
                     */
                    onSecondCall(): Stub;

                    /**
                     * Defines the behavior of the stub on the third call
                     */
                    onThirdCall(): Stub;

                    /**
                     * Defines a new value for this stub
                     */
                    value(val: any): Stub;

                    /**
                     * Causes the stub to call the first callback it receives with the provided arguments
                     */
                    yields(...args: any[]): Stub;

                    /**
                     * Causes the stub to call the first callback it receives with the provided arguments on the given context
                     */
                    yieldsOn(context: any, ...args: any[]): Stub;

                    /**
                     * Causes the stub to call the last callback it receives with the provided arguments
                     */
                    yieldsRight(...args: any[]): Stub;

                    /**
                     * Causes the stub to invoke a callback passed as a property of an object to the spy
                     */
                    yieldsTo(property: string, ...args: any[]): Stub;

                    /**
                     * Causes the stub to invoke a callback passed as a property of an object to the spy on the given context
                     */
                    yieldsToOn(property: string, context: any, ...args: any[]): Stub;

                    /**
                     * Causes the stub to asynchronously call the first callback it receives with the provided arguments
                     */
                    yieldsAsync(...args: any[]): Stub;

                    /**
                     * Causes the stub to asynchronously call the first callback it receives with the provided arguments on the given context
                     */
                    yieldsOnAsync(context: any, ...args: any[]): Stub;

                    /**
                     * Causes the stub to asynchronously invoke a callback passed as a property of an object to the spy
                     */
                    yieldsToAsync(property: string, ...args: any[]): Stub;

                    /**
                     * Causes the stub to asynchronously invoke a callback passed as a property of an object to the spy on the given context
                     */
                    yieldsToOnAsync(property: string, context: any, ...args: any[]): Stub;

                    /**
                     * Stubs the method only for the provided arguments
                     */
                    withArgs(...args: any[]): Stub;
                }

                interface Expectation extends Stub {
                    /**
                     * Specifies the minimum amount of calls expected
                     */
                    atLeast(n: number): Expectation;

                    /**
                     * Specifies the maximum amount of calls expected
                     */
                    atMost(n: number): Expectation;

                    /**
                     * Expects the method to never be called
                     */
                    never(): Expectation;

                    /**
                     * Expects the method to be called exactly once
                     */
                    once(): Expectation;

                    /**
                     * Expects the method to be called exactly twice
                     */
                    twice(): Expectation;

                    /**
                     * Expects the method to be called exactly thrice
                     */
                    thrice(): Expectation;

                    /**
                     * Expects the method to be called exactly n times
                     */
                    exactly(n: number): Expectation;

                    /**
                     * Expects the method to be called with the provided arguments and possibly others
                     */
                    withArgs(...args: any[]): Expectation;

                    /**
                     * Expects the method to be called with the provided arguments and no others
                     */
                    withExactArgs(...args: any[]): Expectation;

                    /**
                     * Expects the method to be called with obj as this
                     */
                    on(obj: any): Expectation;

                    /**
                     * Verifies the expectation and throws an exception if it’s not met
                     */
                    verify(): Expectation;

                    /**
                     * Restores all mocked methods
                     */
                    restore(): void;
                }

                interface ExpectationStatic {
                    /**
                     * Creates a new expectation
                     */
                    create(methodName?: string): Expectation;
                }

                interface Mock {
                    /**
                     * Overrides obj.method with a mock function and returns it
                     */
                    expects(method: string): Expectation;

                    /**
                     * Restores all mocked methods
                     */
                    restore(): void;

                    /**
                     * Verifies all expectations on the mock
                     */
                    verify(): void;
                }

                interface ExposeOptions {
                    /**
                     * prefix to give assertions
                     */
                    prefix?: string;

                    /**
                     * Whether to copy the fail and failException properties
                     */
                    includeFail?: boolean;
                }

                interface Assert {
                    /**
                     * Default error type thrown by .fail
                     */
                    failException: string;

                    /**
                     * Every assertion fails by calling this method
                     */
                    fail(message?: string): void;

                    /**
                     * Called every time assertion passes
                     */
                    pass(assertion: any): void;

                    /**
                     * Passes if spy was never called
                     */
                    notCalled(spy: Spy): void;

                    /**
                     * Passes if spy was called at least once
                     */
                    called(spy: Spy): void;

                    /**
                     * Passes if spy was called once and only once
                     */
                    calledOnce(spy: Spy): void;

                    /**
                     * Passes if spy was called exactly twice
                     */
                    calledTwice(spy: Spy): void;

                    /**
                     * Passes if spy was called exactly three times
                     */
                    calledThrice(spy: Spy): void;

                    /**
                     * Passes if spy was called exactly count times
                     */
                    callCount(spy: Spy, count: number): void;

                    /**
                     * Passes if provided spies were called in the specified order
                     */
                    callOrder(...spies: Spy[]): void;

                    /**
                     * Passes if spy was ever called with obj as its this value
                     */
                    calledOn(spy: Spy, obj: any): void;

                    /**
                     * Passes if spy was always called with obj as its this value
                     */
                    alwaysCalledOn(spy: Spy, obj: any): void;

                    /**
                     * Passes if spy was called with the provided arguments
                     */
                    calledWith(spy: Spy, ...args: any[]): void;

                    /**
                     * Passes if spy was always called with the provided arguments
                     */
                    alwaysCalledWith(spy: Spy, ...args: any[]): void;

                    /**
                     * Passes if spy was never called with the provided arguments
                     */
                    neverCalledWith(spy: Spy, ...args: any[]): void;

                    /**
                     * Passes if spy was called with the provided arguments and no others
                     */
                    calledWithExactly(spy: Spy, ...args: any[]): void;

                    /**
                     * Passes if spy was always called with the provided arguments and no others
                     */
                    alwaysCalledWithExactly(spy: Spy, ...args: any[]): void;

                    /**
                     * Passes if spy was called with matching arguments.
                     */
                    calledWithMatch(spy: Spy, ...args: any[]): void;

                    /**
                     * Passes if spy was always called with matching arguments
                     */
                    alwaysCalledWithMatch(spy: Spy, ...args: any[]): void;

                    /**
                     * Passes if spy was never called with matching arguments
                     */
                    neverCalledWithMatch(spy: Spy, ...args: any[]): void;

                    /**
                     * Passes if spy threw
                     */
                    threw(spy: Spy): void;

                    /**
                     * Passes if spy threw the given exception type
                     */
                    threw(spy: Spy, exception: string): void;

                    /**
                     * Passes if spy threw the given object
                     */
                    threw(spy: Spy, exception: any): void;

                    /**
                     * Passes if always spy threw
                     */
                    alwaysThrew(spy: Spy): void;

                    /**
                     * Passes if spy always threw the given exception type
                     */
                    alwaysThrew(spy: Spy, exception: string): void;

                    /**
                     * Passes if spy always threw the given object
                     */
                    alwaysThrew(spy: Spy, exception: any): void;

                    /**
                     * Exposes assertions into another object, to better integrate with the test framework
                     */
                    expose(obj: any, options?: ExposeOptions): void;
                }

                interface Matcher {
                    /**
                     * Logical and
                     */
                    and(expr: Matcher): Matcher;

                    /**
                     * Logical or
                     */
                    or(expr: Matcher): Matcher;
                }

                interface ArrayMatcher extends Matcher {
                    /**
                     * Requires an Array to be deep equal another one.
                     */
                    deepEquals(expected: any[]): Matcher;

                    /**
                     * Requires an Array to start with the same values as another one.
                     */
                    startsWith(expected: any[]): Matcher;

                    /**
                     * Requires an Array to end with the same values as another one.
                     */
                    endsWith(expected: any[]): Matcher;

                    /**
                     * Requires an Array to contain each one of the values the given array has.
                     */
                    contains(expected: any[]): Matcher;
                }

                interface MapMatcher extends Matcher {
                    /**
                     * Requires a Map to be deep equal another one.
                     */
                    deepEquals(expected: Map<any, any>): Matcher;

                    /**
                     * Requires a Map to contain each one of the items the given map has.
                     */
                    contains(expected: Map<any, any>): Matcher;
                }

                interface SetMatcher extends Matcher {
                    /**
                     *  Requires a Set to be deep equal another one.
                     */
                    deepEquals(expected: Set<any>): Matcher;

                    /**
                     * Requires a Set to contain each one of the items the given set has.
                     */
                    contains(expected: Set<any>): Matcher;
                }

                interface Match {
                    /**
                     * Requires the value to be == to the given number
                     */
                    (value: number): Matcher;

                    /**
                     * Requires the value to be a string and have the expectation as a substring
                     */
                    (value: string): Matcher;

                    /**
                     * Requires the value to be a string and match the given regular expression
                     */
                    (expr: RegExp): Matcher;

                    /**
                     * Requires the value to be not null or undefined and have at least the same properties as expectation
                     */
                    (obj: any): Matcher;

                    /**
                     * Specify a custom matcher
                     */
                    (callback: (value: any) => boolean, message?: string): Matcher;

                    /**
                     * Matches anything
                     */
                    any: Matcher;

                    /**
                     * Requires the value to be defined
                     */
                    defined: Matcher;

                    /**
                     * Requires the value to be truthy
                     */
                    truthy: Matcher;

                    /**
                     * Requires the value to be falsy
                     */
                    falsy: Matcher;

                    /**
                     * Requires the value to be a boolean
                     */
                    bool: Matcher;

                    /**
                     * Requires the value to be a number
                     */
                    number: Matcher;

                    /**
                     * Requires the value to be a string
                     */
                    string: Matcher;

                    /**
                     * Requires the value to be an object
                     */
                    object: Matcher;

                    /**
                     * Requires the value to be a function
                     */
                    func: Matcher;

                    /**
                     * Requires the value to be a map.
                     */
                    map: MapMatcher;

                    /**
                     * Requires the value to be a set.
                     */
                    set: SetMatcher;

                    /**
                     * Requires the value to be an array.
                     */
                    array: ArrayMatcher;

                    /**
                     * Requires the value to be a regular expression
                     */
                    regexp: Matcher;

                    /**
                     * Requires the value to be a date object
                     */
                    date: Matcher;

                    /**
                     * Requires the value to be a symbol
                     */
                    symbol: Matcher;

                    /**
                     * Requires the value to strictly equal obj
                     */
                    same(obj: any): Matcher;

                    /**
                     * Requires the value to be of the given type
                     */
                    typeOf(type: adone.util.I.PossibleTypes): Matcher;
                    typeOf(type: string): Matcher;

                    /**
                     * Requires the value to be an instance of the given type
                     */
                    instanceOf(type: any): Matcher;

                    /**
                     * Requires the value to define the given property
                     */
                    has(property: string, expect?: any): Matcher;

                    /**
                     * Requires the value to define the given property by itself
                     */
                    hasOwn(property: string, expect?: any): Matcher;
                }

                interface SandboxConfig {
                    /**
                     * An object to add properties to
                     */
                    injectInto?: any;

                    /**
                     * What properties to inject
                     */
                    properties?: string[];
                }

                interface Sandbox {
                    /**
                     * A convenience reference for assert
                     */
                    assert: Assert;

                    /**
                     * Works exactly like spy, only also adds the returned spy to the internal collection of fakes
                     */
                    spy: typeof spy;

                    /**
                     * Works exactly like stub, only also adds the returned spy to the internal collection of fakes
                     */
                    stub: typeof stub;

                    /**
                     * Works exactly like mock, only also adds the returned spy to the internal collection of fakes
                     */
                    mock: typeof mock;

                    /**
                     * Restores all fakes created through sandbox
                     */
                    restore(): void;

                    /**
                     * Resets the internal state of all fakes created through sandbox
                     */
                    reset(): void;

                    /**
                     * Resets the history of all stubs created through the sandbox
                     */
                    resetHistory(): void;

                    /**
                     * Resets the behaviour of all stubs created through the sandbox
                     */
                    resetBehavior(): void;

                    /**
                     * Causes all stubs created from the sandbox to return promises using a specific promise library
                     */
                    usingPromise(promiseLibrary: any): Sandbox;

                    /**
                     * Verifies all mocks created through the sandbox
                     */
                    verify(): void;

                    /**
                     * Verifies all mocks and restores all fakes created through the sandbox
                     */
                    verifyAndRestore(): void;
                }

                interface SandboxStatic {
                    /**
                     * Creates a sandbox object with spies, stubs, and mocks
                     */
                    create(config?: SandboxConfig): Sandbox;
                }
            }

            /**
             * Return a function that records arguments, return value, the value of this and exception thrown (if any) for all its calls
             */
            function spy(func?: (...args: any[]) => void): I.Spy;
            function spy<T>(object: T, method: keyof T): I.Spy;

            /**
             * Creates a function (spy) with pre-programmed behavior
             */
            function stub(obj?: any): I.Stub;
            function stub<T>(obj: T, method: keyof T): I.Stub;

            const expectation: I.ExpectationStatic;

            /**
             * Creates a fake method (like spy) with pre-programmed behavior (like stub)
             */
            function mock(): I.Expectation;
            function mock(obj: any): I.Mock;

            /**
             * Assertions for spies/stubs
             */
            export const assert: I.Assert;

            /**
             * Creates a matcher function
             */
            export const match: I.Match;

            /**
             * Removes the need to keep track of every fake created
             */
            export const sandbox: I.SandboxStatic;

            namespace I {
                interface Response extends nodestd.http.IncomingMessage {
                    body: Buffer;
                }

                interface ExpectBodyOptions {
                    decompress?: boolean;
                }

                interface AttachOptions {
                    type?: string;
                    filename?: string;
                }

                interface Request extends Promise<Response> {
                    /**
                     * Sets the request method to GET
                     */
                    get(path: string): this;

                    /**
                     * Sets the request method to HEAD
                     */
                    head(path: string): this;

                    /**
                     * Sets the request method to POST
                     */
                    post(path: string): this;

                    /**
                     * Attaches an attachment
                     */
                    attach(name: string, contents: string | Buffer, options?: AttachOptions): this;

                    /**
                     * Attaches an attachment like a field
                     */
                    field(name: string, value: string): this;

                    /**
                     * Sets the request body
                     */
                    send(value: string): this;

                    /**
                     * Sets the request method to OPTIONS
                     */
                    options(path: string): this;

                    /**
                     * Sets the request method to PUT
                     */
                    put(path: string): this;

                    /**
                     * Sets a header value
                     */
                    setHeader(key: string, value: string): this;

                    /**
                     * Sets the basic auth header
                     */
                    auth(username: string, password: string): this;

                    /**
                     * Executes a function with the response and asserts it returns true
                     */
                    expect(fn: (response: Response) => boolean | Promise<boolean>): this;

                    /**
                     * Asserts the response status
                     */
                    expectStatus(code: number, message?: string): this;

                    /**
                     * Asserts the respose status message
                     */
                    expectStatusMessage(value: string): this;

                    /**
                     * Asserts the response body
                     */
                    expectBody(body: RegExp | string | Buffer, options?: ExpectBodyOptions): this;

                    /**
                     * Asserts the response json body
                     */
                    expectBody(body: object, options?: ExpectBodyOptions): this;

                    /**
                     * Asserts that the response body is empty
                     */
                    expectEmptyBody(): this;

                    /**
                     * Asserts that the response has a header with the given key and value
                     */
                    expectHeader(key: string, value: string | RegExp): this;

                    /**
                     * Asserts that the response has a header with the given name
                     */
                    expectHeaderExists(key: string): this;

                    /**
                     * Asserts that the response does not have a header with the given name
                     */
                    expectNoHeader(key: string): this;
                }
            }

            /**
             * Assertion tool for http server responses
             */
            function request(server: any): I.Request; // TODO: sever must be adone.net.http.server.Server or standard node.js server

            namespace FS {
                // TODO: after fs
            }

            namespace nock {
                // TODO: after revision
            }
        }
    }
}
