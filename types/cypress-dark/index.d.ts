// Type definitions for cypress-dark 1.8
// Project: https://github.com/bahmutov/cypress-dark#readme
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Dark mode for Cypress test runner from user space
 * @example
 * ```ts
 * // Import commands.js using ES2015 syntax:
 * import './commands';
 *
 * import  'cypress-dark/src/halloween';
 * import 'cypress-dark';
 * ```
 */
declare const cypressDark: any;

export = cypressDark;

declare global {
    namespace Cypress {
        interface ResolvedConfigOptions {
            theme?: 'dark' | 'halloween' | string;
        }
    }
}
