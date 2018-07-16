// Type definitions for chai-roughly 1.0
// Project: https://github.com/Turbo87/chai-roughly#readme
// Definitions by: Tomasz Nguyen <https://github.com/swist>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/// <reference types="chai" />
declare namespace Chai {
    // For BDD APIs
    interface Roughly extends Assertion {
        (tolerance?: number): Assertion
    }

    interface Assertion extends LanguageChains, NumericComparison, TypeComparison {
        roughly: Roughly;
    }

    // For Assert APIs
    interface Assert {
        roughly: Roughly;
    }
}

declare module 'chai-roughly' {
    function chaiRoughly(chai: any, utils: any): void;
    namespace chaiRoughly { }
    export = chaiRoughly;
}
