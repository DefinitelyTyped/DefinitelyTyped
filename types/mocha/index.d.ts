// Type definitions for mocha 5.2
// Project: http://mochajs.org/
// Definitions by: Kazi Manzur Rashid <https://github.com/kazimanzurrashid>
//                 otiai10 <https://github.com/otiai10>
//                 jt000 <https://github.com/jt000>
//                 Vadim Macagon <https://github.com/enlight>
//                 Andrew Bradley <https://github.com/cspotcode>
//                 Dmitrii Sorin <https://github.com/1999>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

/**
 * Mocha is using node.js EventEmitter for its internal classes
 * But when it's executed in the browser environment it bundles a 3rd party EventEmitter in its code
 * Also node.js EventEmitter brings its globals which cannot be used in the browser environment.
 * So it's unsafe to reference node EventEmitter here, that's why we have a generic interface for EventEmitter.
 *
 * @see https://github.com/DefinitelyTyped/DefinitelyTyped/pull/25117#issuecomment-383404187
 */
declare class GenericEventEmitter {
    addListener(event: string, listener: (...args: any[]) => void): GenericEventEmitter;
    on(event: string, listener: (...args: any[]) => void): GenericEventEmitter;
    once(event: string, listener: (...args: any[]) => void): GenericEventEmitter;
    removeListener(event: string, listener: (...args: any[]) => void): GenericEventEmitter;
    removeAllListeners(event?: string): GenericEventEmitter;
    emit(event: string, ...args: any[]): boolean;
  }

  interface MochaSetupOptions {
    // milliseconds to wait before considering a test slow
    slow?: number;

    // timeout in milliseconds
    timeout?: number;

    // ui name "bdd", "tdd", "exports" etc
    ui?: Mocha.Interface;

    // array of accepted globals
    globals?: any[];

    // reporter instance (function or string), defaults to `mocha.reporters.Spec`
    reporter?: string | ReporterConstructor;

    // bail on the first test failure
    bail?: boolean;

    // ignore global leaks
    ignoreLeaks?: boolean;

    // grep string or regexp to filter tests with
    grep?: any;

    // require modules before running tests
    require?: string[];

    asyncOnly?: boolean;
    delay?: boolean;
    files?: string[];
    forbidOnly?: boolean;
    forbidPending?: boolean;
    fullStackTrace?: boolean;
    hasOnly?: boolean;
  }

  declare const mocha: Mocha;
  declare const describe: Mocha.IContextDefinition;
  declare const xdescribe: Mocha.IContextDefinition;
  // alias for `describe`
  declare const context: Mocha.IContextDefinition;
  // alias for `describe`
  declare const suite: Mocha.IContextDefinition;
  declare const it: Mocha.ITestDefinition;
  declare const xit: Mocha.ITestDefinition;
  // alias for `it`
  declare const test: Mocha.ITestDefinition;
  declare const specify: Mocha.ITestDefinition;

  // Used with the --delay flag; see https://mochajs.org/#hooks
  declare function run(): void;

  type MochaDone = (error?: any) => void;

  declare function setup(callback: (this: Mocha.IBeforeAndAfterContext, done: MochaDone) => PromiseLike<any> | void): void;
  declare function teardown(callback: (this: Mocha.IBeforeAndAfterContext, done: MochaDone) => PromiseLike<any> | void): void;
  declare function suiteSetup(callback: (this: Mocha.IHookCallbackContext, done: MochaDone) => PromiseLike<any> | void): void;
  declare function suiteTeardown(callback: (this: Mocha.IHookCallbackContext, done: MochaDone) => PromiseLike<any> | void): void;
  declare function before(callback: (this: Mocha.IHookCallbackContext, done: MochaDone) => PromiseLike<any> | void): void;
  declare function before(description: string, callback: (this: Mocha.IHookCallbackContext, done: MochaDone) => PromiseLike<any> | void): void;
  declare function after(callback: (this: Mocha.IHookCallbackContext, done: MochaDone) => PromiseLike<any> | void): void;
  declare function after(description: string, callback: (this: Mocha.IHookCallbackContext, done: MochaDone) => PromiseLike<any> | void): void;
  declare function beforeEach(callback: (this: Mocha.IBeforeAndAfterContext, done: MochaDone) => PromiseLike<any> | void): void;
  declare function beforeEach(description: string, callback: (this: Mocha.IBeforeAndAfterContext, done: MochaDone) => PromiseLike<any> | void): void;
  declare function afterEach(callback: (this: Mocha.IBeforeAndAfterContext, done: MochaDone) => PromiseLike<any> | void): void;
  declare function afterEach(description: string, callback: (this: Mocha.IBeforeAndAfterContext, done: MochaDone) => PromiseLike<any> | void): void;

  interface ReporterConstructor {
    new(runner: Mocha.IRunner, options: any): any;
  }

  declare class Mocha {
    currentTest: Mocha.ITestDefinition;
    suite: Mocha.ISuite;
    files: string[];
    options: MochaSetupOptions;

    constructor(options?: MochaSetupOptions);

    asyncOnly(): Mocha;
    asyncOnly(value: boolean): Mocha;
    delay(): Mocha;
    forbidOnly(): Mocha;
    forbidPending(): Mocha;
    fullTrace(): Mocha;
    /** Setup mocha with the given interface. */
    setup(interface: Mocha.Interface): Mocha;
    bail(value?: boolean): Mocha;
    addFile(file: string): Mocha;
    /** Sets reporter by name, defaults to "spec". */
    reporter(name: string, reporterOptions?: any): Mocha;
    /** Sets reporter constructor, defaults to mocha.reporters.Spec. */
    reporter(reporter: ReporterConstructor, reporterOptions?: any): Mocha;
    ui(value: string): Mocha;
    grep(value: string): Mocha;
    grep(value: RegExp): Mocha;
    invert(): Mocha;
    ignoreLeaks(value: boolean): Mocha;
    checkLeaks(): Mocha;
    /**
     * Function to allow assertion libraries to throw errors directly into mocha.
     * This is useful when running tests in a browser because window.onerror will
     * only receive the 'message' attribute of the Error.
     */
    throwError(error: Error): void;
    /** Enables growl support. */
    growl(): Mocha;
    globals(value: string): Mocha;
    globals(values: string[]): Mocha;
    useColors(value: boolean): Mocha;
    useInlineDiffs(value: boolean): Mocha;
    timeout(value: number): Mocha;
    slow(value: number): Mocha;
    enableTimeouts(value: boolean): Mocha;
    noHighlighting(value: boolean): Mocha;
    /** Runs tests and invokes `onComplete()` when finished. */
    run(onComplete?: (failures: number) => void): Mocha.IRunner;
    loadFiles(cb?: () => any): void;

    // internals exposed via exports.*
    Runnable: Mocha.Runnable;
    Context: Mocha.Context;
    Runner: Mocha.Runner;
    Suite: Mocha.Suite;
    Hook: Mocha.Hook;
    Test: Mocha.Test;
  }

  // merge the Mocha class declaration with a module
  declare namespace Mocha {
    /** Third-party declarations that want to add new interfaces can contribute names here */
    interface InterfaceContributions {
        bdd: any;
        tdd: any;
        qunit: any;
        exports: any;
    }

    type Interface = keyof InterfaceContributions;

    interface IContext {
        _runnable?: IRunnable;
        test?: IRunnable;

        runnable(): IRunnable | undefined;
        runnable(runnable: IRunnable): IContext;
        timeout(): number;
        timeout(timeout: number): IContext;
        enableTimeouts(enableTimeouts: boolean): IContext;
        slow(slow: number): IContext;
        skip(): IContext;
        retries(): number;
        retries(retries: number): IContext;
        inspect(): string;
    }

    interface ISuiteCallbackContext {
        timeout(ms: number | string): this;
        retries(n: number): this;
        slow(ms: number): this;
    }

    interface IHookCallbackContext {
        skip(): this;
        timeout(ms: number | string): this;
        [index: string]: any;
    }

    interface ITestCallbackContext {
        skip(): this;
        timeout(ms: number | string): this;
        retries(n: number): this;
        slow(ms: number): this;
        [index: string]: any;
    }

    /** Partial interface for Mocha's `Runnable` class. */
    interface IRunnable extends GenericEventEmitter {
        title: string;
        fn: Function;
        async: boolean;
        sync: boolean;
        timedOut: boolean;
        timeout(n: number | string): this;
        duration?: number;
    }

    /** Partial interface for Mocha's `Suite` class. */
    interface ISuite {
        ctx: IContext;
        parent: ISuite;
        root: boolean;
        title: string;
        suites: ISuite[];
        tests: ITest[];

        _beforeEach: IHook[];
        _beforeAll: IHook[];
        _afterEach: IHook[];
        _afterAll: IHook[];

        bail(): boolean;
        bail(bail: boolean): ISuite;
        fullTitle(): string;
        retries(): number;
        retries(retries: number): ISuite;
        slow(): number;
        slow(slow: number): ISuite;
        timeout(): number;
        timeout(timeout: number): ISuite;
    }

    /** Partial interface for Mocha's `Test` class. */
    interface ITest extends IRunnable {
        body?: string;
        file?: string;
        parent: ISuite;
        pending: boolean;
        state: 'failed' | 'passed' | undefined;
        type: 'test';

        fullTitle(): string;
    }

    interface IHook extends IRunnable {
        ctx?: IContext;
        parent?: ISuite;
        type: 'hook';

        error(err: Error): void;
    }

    interface IBeforeAndAfterContext extends IHookCallbackContext {
        currentTest: ITest;
    }

    interface IStats {
        suites: number;
        tests: number;
        passes: number;
        pending: number;
        failures: number;
        start?: Date;
        end?: Date;
        duration?: Date;
    }

    /** Partial interface for Mocha's `Runner` class. */
    interface IRunner extends GenericEventEmitter {
        asyncOnly?: boolean;
        stats?: IStats;
        started: boolean;
        suite: ISuite;
        total: number;
        failures: number;
        forbidOnly?: boolean;
        forbidPending?: boolean;
        fullStackTrace?: boolean;
        hasOnly?: boolean;
        ignoreLeaks?: boolean;

        grep: (re: string, invert: boolean) => this;
        grepTotal: (suite: ISuite) => number;
        globals: (arr: ReadonlyArray<string>) => this | string[];
        abort: () => this;
        run: (fn?: (failures: number) => void) => this;
    }

    interface IContextDefinition {
        (description: string, callback: (this: ISuiteCallbackContext) => void): ISuite;
        only(description: string, callback: (this: ISuiteCallbackContext) => void): ISuite;
        skip(description: string, callback: (this: ISuiteCallbackContext) => void): void;
        timeout(ms: number | string): void;
    }

    interface ITestDefinition {
        (expectation: string, callback?: (this: ITestCallbackContext, done: MochaDone) => PromiseLike<any> | void): ITest;
        only(expectation: string, callback?: (this: ITestCallbackContext, done: MochaDone) => PromiseLike<any> | void): ITest;
        skip(expectation: string, callback?: (this: ITestCallbackContext, done: MochaDone) => PromiseLike<any> | void): void;
        timeout(ms: number | string): void;
        state: "failed" | "passed";
    }

    namespace reporters {
        class Base {
            runner: IRunner;
            stats: IStats;

            constructor(runner: IRunner);
        }

        class Doc extends Base { }
        class Dot extends Base { }
        class HTML extends Base { }
        class HTMLCov extends Base { }
        class JSON extends Base { }
        class JSONCov extends Base { }
        class JSONStream extends Base { }
        class Landing extends Base { }
        class List extends Base { }
        class Markdown extends Base { }
        class Min extends Base { }
        class Nyan extends Base { }
        class Progress extends Base {
            /**
             * @param options.open String used to indicate the start of the progress bar.
             * @param options.complete String used to indicate a complete test on the progress bar.
             * @param options.incomplete String used to indicate an incomplete test on the progress bar.
             * @param options.close String used to indicate the end of the progress bar.
             */
            constructor(runner: IRunner, options?: {
                open?: string;
                complete?: string;
                incomplete?: string;
                close?: string;
            });
        }
        class Spec extends Base { }
        class TAP extends Base { }
        class XUnit extends Base {
            constructor(runner: IRunner, options?: any);
        }
    }

    /*
     * All ambient functions are also available via require('mocha') when invoked via the mocha CLI
     * See for details: https://mochajs.org/#require
     */

    /** Only available when invoked via the mocha CLI */
    const describe: IContextDefinition;
    /** Only available when invoked via the mocha CLI */
    const xdescribe: IContextDefinition;
    /**
     * alias for `describe`
     * Only available when invoked via the mocha CLI
     */
    const context: IContextDefinition;
    /**
     * alias for `describe`
     * Only available when invoked via the mocha CLI
     */
    const suite: IContextDefinition;
    /** Only available when invoked via the mocha CLI */
    const it: ITestDefinition;
    /** Only available when invoked via the mocha CLI */
    const xit: ITestDefinition;
    /**
     * alias for `it`
     * Only available when invoked via the mocha CLI
     */
    const test: ITestDefinition;
    /**
     * Alias for `it`
     * Only available when invoked via the mocha CLI
     */
    const specify: ITestDefinition;
    /** Only available when invoked via the mocha CLI */
    function setup(callback: (this: IBeforeAndAfterContext, done: MochaDone) => PromiseLike<any> | void): void;
    /** Only available when invoked via the mocha CLI */
    function teardown(callback: (this: IBeforeAndAfterContext, done: MochaDone) => PromiseLike<any> | void): void;
    /** Only available when invoked via the mocha CLI */
    function suiteSetup(callback: (this: IHookCallbackContext, done: MochaDone) => PromiseLike<any> | void): void;
    /** Only available when invoked via the mocha CLI */
    function suiteTeardown(callback: (this: IHookCallbackContext, done: MochaDone) => PromiseLike<any> | void): void;
    /** Only available when invoked via the mocha CLI */
    function before(callback: (this: IHookCallbackContext, done: MochaDone) => PromiseLike<any> | void): void;
    /** Only available when invoked via the mocha CLI */
    function before(description: string, callback: (this: IHookCallbackContext, done: MochaDone) => PromiseLike<any> | void): void;
    /** Only available when invoked via the mocha CLI */
    function after(callback: (this: IHookCallbackContext, done: MochaDone) => PromiseLike<any> | void): void;
    /** Only available when invoked via the mocha CLI */
    function after(description: string, callback: (this: IHookCallbackContext, done: MochaDone) => PromiseLike<any> | void): void;
    /** Only available when invoked via the mocha CLI */
    function beforeEach(callback: (this: IBeforeAndAfterContext, done: MochaDone) => PromiseLike<any> | void): void;
    /** Only available when invoked via the mocha CLI */
    function beforeEach(description: string, callback: (this: IBeforeAndAfterContext, done: MochaDone) => PromiseLike<any> | void): void;
    /** Only available when invoked via the mocha CLI */
    function afterEach(callback: (this: IBeforeAndAfterContext, done: MochaDone) => PromiseLike<any> | void): void;
    /** Only available when invoked via the mocha CLI */
    function afterEach(description: string, callback: (this: IBeforeAndAfterContext, done: MochaDone) => PromiseLike<any> | void): void;

    class Runnable extends GenericEventEmitter {
        new(title: string, fn: () => any): IRunnable;
    }

    class Context implements IContext {
        constructor();

        _runnable?: IRunnable;
        test?: IRunnable;

        runnable(): IRunnable | undefined;
        runnable(runnable: IRunnable): IContext;
        timeout(): number;
        timeout(timeout: number): IContext;
        enableTimeouts(enableTimeouts: boolean): IContext;
        slow(slow: number): IContext;
        skip(): IContext;
        retries(): number;
        retries(retries: number): IContext;
        inspect(): string;
    }

    class Runner extends GenericEventEmitter implements IRunner {
        constructor(suite: ISuite, delay: boolean);

        asyncOnly?: boolean;
        stats?: IStats;
        started: boolean;
        suite: ISuite;
        total: number;
        failures: number;
        forbidOnly?: boolean;
        forbidPending?: boolean;
        fullStackTrace?: boolean;
        hasOnly?: boolean;
        ignoreLeaks?: boolean;

        grep: (re: string, invert: boolean) => this;
        grepTotal: (suite: ISuite) => number;
        globals: (arr: ReadonlyArray<string>) => this | string[];
        abort: () => this;
        run: (fn?: (failures: number) => void) => this;
    }

    class Suite extends GenericEventEmitter implements ISuite {
        constructor(title: string, parentContext: IContext);

        ctx: IContext;
        parent: ISuite;
        root: boolean;
        title: string;
        suites: ISuite[];
        tests: ITest[];

        _beforeEach: IHook[];
        _beforeAll: IHook[];
        _afterEach: IHook[];
        _afterAll: IHook[];

        bail(): boolean;
        bail(bail: boolean): ISuite;
        fullTitle(): string;
        retries(): number;
        retries(retries: number): ISuite;
        slow(): number;
        slow(slow: number): ISuite;
        timeout(): number;
        timeout(timeout: number): ISuite;
    }

    class Hook extends Runnable implements IHook {
        constructor(title: string, fn: () => any);

        async: boolean;
        ctx?: IContext;
        duration?: number;
        fn: Function;
        parent?: ISuite;
        sync: boolean;
        timedOut: boolean;
        timeout(n: number | string): this;
        title: string;
        type: 'hook';

        error(err: Error): void;
    }

    class Test extends Runnable implements ITest {
        constructor(title: string, fn: () => any);

        async: boolean;
        body?: string;
        duration?: number;
        file?: string;
        fn: Function;
        parent: ISuite;
        pending: boolean;
        state: 'failed' | 'passed' | undefined;
        sync: boolean;
        timedOut: boolean;
        timeout(n: number | string): this;
        title: string;
        type: 'test';

        fullTitle(): string;
    }
  }

  declare module "mocha" {
    export = Mocha;
  }
