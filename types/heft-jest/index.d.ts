// Type definitions for heft-jest 1.0
// Project: https://github.com/octogonz/heft-jest
// Definitions by: Pete Gonzalez <https://github.com/octogonz>
//                 Ian Clanton-Thuon <https://github.com/iclanton>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.5

/// <reference types="jest" />

declare namespace mocked {
    // Todo - fill out this definition in the next release.
    type Mocked<T> = any;
}

/**
 * This is a global equivalent of the mocked() API from ts-jest:
 * https://kulshekhar.github.io/ts-jest/user/test-helpers
 */
declare function mocked<T>(item: T, deep?: false): mocked.Mocked<T>;
declare function mocked<T>(item: T, deep: true): mocked.Mocked<T>;
