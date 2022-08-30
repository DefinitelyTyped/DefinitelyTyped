// Type definitions for jest-expect-message 1.0
// Project: https://github.com/mattphillips/jest-expect-message#readme
// Definitions by: Mike Davydov <https://github.com/mike-d-davydov>
//                 Michael Bashurov <https://github.com/saitonakamura>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.3

import { Matchers } from 'expect';

// tslint:disable-next-line: no-single-declare-module
declare module 'expect' {
    interface BaseExpect {
        /**
         * The `expect` function is used every time you want to test a value.
         * You will rarely call `expect` by itself.
         *
         * @param actual The value to apply matchers against.
         * @param message Clarification message
         */
        (actual: any, message: string): Matchers<void>;
    }
}
