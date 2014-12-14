// Type definitions for mocha 2.0.1
// Project: http://visionmedia.github.io/mocha/
// Definitions by: Kazi Manzur Rashid <https://github.com/kazimanzurrashid/>, otiai10 <https://github.com/otiai10>, jt000 <https://github.com/jt000>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

interface Mocha {
    // Setup mocha with the given setting options.
    setup(options: MochaSetupOptions): Mocha;

    //Run tests and invoke `fn()` when complete.
    run(callback?: () => void): void;

    // Set reporter as function
    reporter(reporter: () => void): Mocha;

    // Set reporter, defaults to "dot"
    reporter(reporter: string): Mocha;

    // Enable growl support.
    growl(): Mocha
}

interface MochaSetupOptions {
    //milliseconds to wait before considering a test slow
    slow?: number;

    // timeout in milliseconds
    timeout?: number;

    // ui name "bdd", "tdd", "exports" etc
    ui?: string;

    //array of accepted globals
    globals?: any[];

    // reporter instance (function or string), defaults to `mocha.reporters.Dot`
    reporter?: any;

    // bail on the first test failure
    bail?: Boolean;

    // ignore global leaks
    ignoreLeaks?: Boolean;

    // grep string or regexp to filter tests with
    grep?: any;
}

interface MochaDone {
    (error?: Error): void;
}

declare var mocha: Mocha;

declare var describe : {
    (description: string, spec: () => void): void;
    only(description: string, spec: () => void): void;
    skip(description: string, spec: () => void): void;
    timeout(ms: number): void;
}

// alias for `describe`
declare var context : {
    (contextTitle: string, spec: () => void): void;
    only(contextTitle: string, spec: () => void): void;
    skip(contextTitle: string, spec: () => void): void;
    timeout(ms: number): void;
}

declare var it: {
    (expectation: string, assertion?: () => void): void;
    (expectation: string, assertion?: (done: MochaDone) => void): void;
    only(expectation: string, assertion?: () => void): void;
    only(expectation: string, assertion?: (done: MochaDone) => void): void;
    skip(expectation: string, assertion?: () => void): void;
    skip(expectation: string, assertion?: (done: MochaDone) => void): void;
    timeout(ms: number): void;
};

declare function before(action: () => void): void;

declare function before(action: (done: MochaDone) => void): void;

declare function setup(action: () => void): void;

declare function setup(action: (done: MochaDone) => void): void;

declare function after(action: () => void): void;

declare function after(action: (done: MochaDone) => void): void;

declare function teardown(action: () => void): void;

declare function teardown(action: (done: MochaDone) => void): void;

declare function beforeEach(action: () => void): void;

declare function beforeEach(action: (done: MochaDone) => void): void;

declare function suiteSetup(action: () => void): void;

declare function suiteSetup(action: (done: MochaDone) => void): void;

declare function afterEach(action: () => void): void;

declare function afterEach(action: (done: MochaDone) => void): void;

declare function suiteTeardown(action: () => void): void;

declare function suiteTeardown(action: (done: MochaDone) => void): void;

declare module "mocha" {

    class MochaInstance {
        constructor(options?: {
            grep?: RegExp;
            ui?: string;
            reporter?: string;
            timeout?: number;
            bail?: boolean;
        });

        bail(value?: boolean): MochaInstance;
        addFile(file: string): MochaInstance;
        reporter(value: string): MochaInstance;
        ui(value: string): MochaInstance;
        grep(value: string): MochaInstance;
        grep(value: RegExp): MochaInstance;
        invert(): MochaInstance;
        ignoreLeaks(value: boolean): MochaInstance;
        checkLeaks(): MochaInstance;
        growl(): MochaInstance;
        globals(value: string): MochaInstance;
        globals(values: string[]): MochaInstance;
        useColors(value: boolean): MochaInstance;
        useInlineDiffs(value: boolean): MochaInstance;
        timeout(value: number): MochaInstance;
        slow(value: number): MochaInstance;
        enableTimeouts(value: boolean): MochaInstance;
        asyncOnly(value: boolean): MochaInstance;
        noHighlighting(value: boolean): MochaInstance;

        run(onComplete?: (failures: number) => void): void;
    }

    export = MochaInstance;
}
