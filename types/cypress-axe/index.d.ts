// Type definitions for cypress-axe 0.8
// Project: https://github.com/avanslaars/cypress-axe#readme
// Definitions by: Justin Hall <https://github.com/wKovacs64>
//                 Daniel Hayes <https://github.com/daniel-hayes>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { ElementContext, ImpactValue, Result, RunOptions } from 'axe-core';

export type Options = { includedImpacts?: ImpactValue[] } & RunOptions;

export type ViolationCallback = (violations: Result[]) => void;

declare module 'axe-core' {
    interface Node {}
}

declare global {
    namespace Cypress {
        interface Chainable<Subject = any> {
            injectAxe(): void;
            checkA11y(
                context?: ElementContext,
                options?: Options,
                violationCallback?: ViolationCallback,
                skipFailures?: boolean,
            ): void;
            configureAxe(options?: RunOptions): void;
        }
    }
}
