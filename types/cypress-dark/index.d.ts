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
            theme?: "dark" | "halloween" | string;
        }
    }
}
