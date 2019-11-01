// Type definitions for jest-expect-message 1.0
// Project: https://github.com/mattphillips/jest-expect-message#readme
// Definitions by: Mike Davydov <https://github.com/mike-d-davydov>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.4

/// <reference types="jest"/>

declare namespace jest {
    interface Expect {
        <T = any>(actual: T, message: string): JestMatchers<T>;
    }
}
