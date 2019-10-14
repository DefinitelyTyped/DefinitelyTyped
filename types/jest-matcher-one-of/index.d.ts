// Type definitions for jest-matcher-one-of 1.0
// Project: https://github.com/d4nyll/jest-matcher-one-of#readme
// Definitions by: Joe Mitchard <https://github.com/joemitchard>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="jest" />
declare module 'jest-matcher-one-of';

declare namespace jest {
    interface Matchers<R> {
        toBeOneOf(expected: any[]): R;
    }
}
