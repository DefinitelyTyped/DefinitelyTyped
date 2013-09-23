// Type definitions for mocha 1.9.0
// Project: http://visionmedia.github.io/mocha/
// Definitions by: Kazi Manzur Rashid <https://github.com/kazimanzurrashid/>
// DefinitelyTyped: https://github.com/borisyankov/DefinitelyTyped

interface Mocha {
    setup(options: MochaSetupOptions): void;
    run(callback: () => void): void;
}

interface MochaSetupOptions {
    slow: number;
    timeout: number;
    ui: string;
}

declare var describe : {
    (description: string, spec: () => void): void;
    only(description: string, spec: () => void): void;
    skip(description: string, spec: () => void): void;
    timeout(ms: number): void;
}

declare var it: {
    (expectation: string, assertion?: () => void): void;
    (expectation: string, assertion?: (done: (error?: Error) => void) => void): void;
    only(expectation: string, assertion?: () => void): void;
    only(expectation: string, assertion?: (done: (error?: Error) => void) => void): void;
    skip(expectation: string, assertion?: () => void): void;
    skip(expectation: string, assertion?: (done: (error?: Error) => void) => void): void;
    timeout(ms: number): void;
};

declare function before(action: () => void): void;

declare function before(action: (done: (error?: Error) => void) => void): void;

declare function after(action: () => void): void;

declare function after(action: (done: (error?: Error) => void) => void): void;

declare function beforeEach(action: () => void): void;

declare function beforeEach(action: (done: (error?: Error) => void) => void): void;

declare function afterEach(action: () => void): void;

declare function afterEach(action: (done: (error?: Error) => void) => void): void;

