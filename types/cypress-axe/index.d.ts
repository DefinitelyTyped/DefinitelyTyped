// Type definitions for cypress-axe 0.4
// Project: https://github.com/avanslaars/cypress-axe#readme
// Definitions by: Justin Hall <https://github.com/wKovacs64>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { ElementContext, RunOptions } from 'axe-core';

declare module 'axe-core' {
    interface Node {}
}

declare global {
    namespace Cypress {
        interface Chainable<Subject = any> {
            injectAxe(): void;
            checkA11y(context?: ElementContext, options?: RunOptions): void;
            configureAxe(options?: RunOptions): void;
        }
    }
}
