// Type definitions for cypress-recurse 1.8
// Project: https://github.com/bahmutov/cypress-recurse#readme
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="cypress" />

export type LogOption = string | boolean | ((any: any) => void);
export interface PostFunctionOptions {
    /**
     * The remaining number of iterations
     */
    limit: number;
}
export interface PostFunction {
    (opts: PostFunctionOptions): void | Cypress.Chainable;
}

export interface PredicateFunction {
    (any: any): boolean | void;
}

export interface RecurseOptions {
    /**
     * The max number of iterations
     */
    limit?: number | undefined;
    /**
     * In milliseconds
     */
    timeout?: number | undefined;
    /**
     * Log to Command Log, could be true|false, a message to be printed once at the end, or a custom function
     */
    log?: LogOption | undefined;
    /**
     * Between iterations, milliseconds
     */
    delay?: number | undefined;
    /**
     * Function that can run additional Cypress commands after each iteration
     */
    post?: PostFunction | undefined;
}

export type RecurseDefaultOptions = Readonly<Required<Omit<RecurseOptions, 'post'>>>;

/**
 * Recursively calls the given command until the predicate is true.
 * @param commandsFn Function running Cypress commands
 * @param checkFn Predicate that should return true to finish
 * @param options Options for maximum timeout, logging, etc
 * @returns Returns the command chain
 */
export function recurse(
    commandsFn: () => Cypress.Chainable,
    checkFn: PredicateFunction,
    options?: RecurseOptions,
): Cypress.Chainable;

/**
 * the default options for recurse
 */
export const RecurseDefaults: RecurseDefaultOptions;
