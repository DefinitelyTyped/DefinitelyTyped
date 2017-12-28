// Type definitions for chai-oequal 0.0
// Project: https://github.com/wrwrwr/chai-oequal
// Definitions by: Mizunashi Mana <https://github.com/mizunashi-mana>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function chaiOequal(chai: any, utils: any): void;
declare namespace chaiOequal {}
export = chaiOequal;

declare module "chai" {
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
