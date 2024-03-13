/// <reference types="chai" />

import * as matchPattern from "lodash-match-pattern";

declare global {
    namespace Chai {
        interface Assertion {
            matchPattern(pattern: string | object): Assertion;
        }
    }
}

declare const chaiMatchPattern: Chai.ChaiPlugin & {
    getLodashModule: typeof matchPattern.getLodashModule;
    use(lodashModule: typeof matchPattern): void;
};

export = chaiMatchPattern;
