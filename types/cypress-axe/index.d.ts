// Type definitions for cypress-axe 0.4
// Project: https://github.com/avanslaars/cypress-axe#readme
// Definitions by: Justin Hall <https://github.com/wKovacs64>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.1

/// <reference lib="dom" />

declare namespace Cypress {
    interface Chainable<Subject = any> {
        injectAxe(): void;
        checkA11y(
            context?: import('axe-core').ElementContext,
            options?: import('axe-core').RunOptions,
        ): void;
        configureAxe(options?: import('axe-core').RunOptions): void;
    }
}
