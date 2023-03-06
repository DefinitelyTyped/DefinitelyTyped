// Type definitions for jest-in-case 1.0
// Project: https://github.com/thinkmill/jest-in-case#readme
// Definitions by: Geovani de Souza <https://github.com/geovanisouza92>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.3

/// <reference types="jest" />
/// <reference types="node" />

interface Config {
    name?: string | undefined;
    only?: boolean | undefined;
    skip?: boolean | undefined;
    [key: string]: any;
}

type Tester<Opts> = (opts: Opts, done: jest.DoneCallback) => any;

type TestCases<Opts> = ReadonlyArray<Opts> | { [name: string]: Opts };

declare function cases<Opts extends Config>(title: string, tester: Tester<Opts>, testCases: TestCases<Opts>): void;

export = cases;
