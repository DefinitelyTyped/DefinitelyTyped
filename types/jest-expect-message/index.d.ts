// Type definitions for jest-expect-message 1.0
// Project: https://github.com/mattphillips/jest-expect-message#readme
// Definitions by: Mike Davydov <https://github.com/mike-d-davydov>
//                 Michael Bashurov <https://github.com/saitonakamura>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.8

/// <reference types="jest"/>

declare namespace jest {
    interface Expect {
        /**
         * The `expect` function is used every time you want to test a value.
         * You will rarely call `expect` by itself.
         *
         * @param actual The value to apply matchers against.
         * @param message Clarification message
         */
        <T = any>(actual: T, message: string): JestMatchers<T>;
    }
}
