// Type definitions for @testing-library/jest-dom 5.14
// Project: https://github.com/testing-library/jest-dom
// Definitions by: Ernesto García <https://github.com/gnapse>
//                 John Gozde <https://github.com/jgoz>
//                 Seth Macpherson <https://github.com/smacpherson64>
//                 Andrew Leedham <https://github.com/AndrewLeedham>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.3

/// <reference types="jest" />

import { TestingLibraryMatchers } from './matchers';

declare global {
    namespace jest {
        interface Matchers<R = void, T = {}> extends TestingLibraryMatchers<typeof expect.stringContaining, R> {}
    }
}

declare module "expect" {
    interface Matchers<R = void, T = unknown> extends TestingLibraryMatchers<typeof expect.stringContaining, R> {}
}
