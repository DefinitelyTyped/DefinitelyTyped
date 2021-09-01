// Type definitions for @wordpress/jest-console 3.0
// Project: https://github.com/WordPress/gutenberg/blob/master/packages/jest-console/README.md
// Definitions by: Damien Sorel <https://github.com/mistic100>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.8

/// <reference types="jest" />

declare namespace jest {
    interface Matchers<R, T> {
        /**
         * Ensure that `console.error` function was called.
         */
        toHaveErrored(): R;

        /**
         * Ensure that `console.error` function was called with specific arguments.
         */
        toHaveErroredWith(...args: any[]): R;

        /**
         * Ensure that `console.info` function was called.
         */
        toHaveInformed(): R;

        /**
         * Ensure that `console.info` function was called with specific arguments.
         */
        toHaveInformedWith(...args: any[]): R;

        /**
         * Ensure that `console.log` function was called.
         */
        toHaveLogged(): R;

        /**
         * Ensure that `console.log` function was called with specific arguments.
         */
        toHaveLoggedWith(...args: any[]): R;

        /**
         * Ensure that `console.warn` function was called.
         */
        toHaveWarned(): R;

        /**
         * Ensure that `console.warn` function was called with specific arguments.
         */
        toHaveWarnedWith(...args: any[]): R;
    }
}
