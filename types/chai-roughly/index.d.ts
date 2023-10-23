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
declare namespace chaiRoughly {}
export = chaiRoughly;
