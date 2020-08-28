// Type definitions for chai-oequal 0.0
// Project: https://github.com/wrwrwr/chai-oequal
// Definitions by: Mizunashi Mana <https://github.com/mizunashi-mana>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

/// <reference types="chai" />

declare namespace Chai {
    // For BDD APIs
    interface Assertion extends LanguageChains, NumericComparison, TypeComparison {
        oequal(result: any, method?: string): Equal;
        oeql(result: any, method?: string): Equal;
        oeq(result: any, method?: string): Equal;
    }

    // For Assert APIs
    interface Assert {
        oequal(act: any, exp: any, method?: string): Equal;
        oeql(act: any, exp: any, method?: string): Equal;
        oeq(act: any, exp: any, method?: string): Equal;
    }
}

declare module 'chai-oequal' {
    const chaiOequal: Chai.ChaiPlugin;
    namespace chaiOequal {}
    export = chaiOequal;
}
