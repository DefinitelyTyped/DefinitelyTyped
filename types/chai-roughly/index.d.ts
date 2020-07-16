// Type definitions for chai-roughly 1.0
// Project: https://github.com/Turbo87/chai-roughly#readme
// Definitions by: Tomasz Nguyen <https://github.com/swist>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

/// <reference types="chai" />

declare global {
    namespace Chai {
        // For BDD APIs
        interface Roughly extends Assertion {
            (tolerance?: number): Assertion;
        }

        interface Assertion extends LanguageChains, NumericComparison, TypeComparison {
            roughly: Roughly;
        }

        // For Assert APIs
        interface Assert {
            roughly: Roughly;
        }
    }
}

declare const chaiRoughly: Chai.ChaiPlugin;
declare namespace chaiRoughly { }
export = chaiRoughly;
