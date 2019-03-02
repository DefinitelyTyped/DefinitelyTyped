// Type definitions for cypress-axe 0.3
// Project: https://github.com/avanslaars/cypress-axe#readme
// Definitions by: Justin Hall <https://github.com/wKovacs64>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

declare namespace Cypress {
    interface Chainable<Subject = any> {
        injectAxe(): void;
        checkA11y(): void;
    }
}
