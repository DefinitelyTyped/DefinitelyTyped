// Type definitions for chai-match-pattern 1.3
// Project: https://github.com/mjhm/chai-match-pattern#readme
// Definitions by: Daniel Kneip <https://github.com/daedal-knickerbockers>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="chai" />

import * as matchPattern from 'lodash-match-pattern';

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
