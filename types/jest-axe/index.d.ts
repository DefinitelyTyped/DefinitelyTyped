// Type definitions for jest-axe 3.5
// Project: https://github.com/nickcolley/jest-axe
// Definitions by: Josh Goldberg <https://github.com/JoshuaKGoldberg>
//                 erbridge <https://github.com/erbridge>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.8

/// <reference types="jest" />

import { AxeResults, Result, RunOptions, Spec } from 'axe-core';

export interface JestAxeConfigureOptions extends RunOptions {
    globalOptions?: Spec;
}

/**
 * Version of the aXe verifier with defaults set.
 *
 * @remarks You can still pass additional options to this new instance;
 *          they will be merged with the defaults.
 */
export const axe: JestAxe;

/**
 * Runs aXe on HTML.
 *
 * @param html   Raw HTML string to verify with aXe.
 * @param options   Options to run aXe.
 * @returns Promise for the results of running aXe.
 */
export type JestAxe = (html: Element | string, options?: RunOptions) => Promise<AxeResults>;

/**
 * Creates a new aXe verifier function.
 *
 * @param options   Options to run aXe.
 * @returns New aXe verifier function.
 */
export function configureAxe(options?: JestAxeConfigureOptions): JestAxe;

/**
 * Results from asserting whether aXe verification passed.
 */
export interface AssertionsResult {
    /**
     * Actual checked aXe verification results.
     */
    actual: Result[];

    /**
     * @returns Message from the Jest assertion.
     */
    message(): string;

    /**
     * Whether the assertion passed.
     */
    pass: boolean;
}

/**
 * Asserts an aXe-verified result has no violations.
 *
 * @param results   aXe verification result, if not running via expect().
 * @returns Jest expectations for the aXe result.
 */
export type IToHaveNoViolations = (results?: Partial<AxeResults>) => AssertionsResult;

export const toHaveNoViolations: {
    toHaveNoViolations: IToHaveNoViolations;
};

declare global {
    namespace jest {
        interface Matchers<R, T> {
            toHaveNoViolations(): R;
        }
    }

    // axe-core depends on a global Node
    interface Node {}
}
