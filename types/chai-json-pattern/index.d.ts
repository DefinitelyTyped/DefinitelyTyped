// Type definitions for chai-json-pattern 1.1
// Project: https://github.com/damian-szulc/chai-json-pattern, http://chaijs.com
// Definitions by: Christoph Herb <https://github.com/chrishrb>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

// <reference types="chai" />

declare global {
    namespace Chai {
        interface Assertion {
            matchPattern(expected: any): void;
        }
    }
}

declare namespace ChaiJsonPattern {
    interface Plugin {
        [key: string]: (target: any) => void;
    }

    interface ChaiJsonPattern extends Chai.ChaiPlugin {
        extend(plugin: Plugin): void;
    }
}

declare const chaiJsonPattern: ChaiJsonPattern.ChaiJsonPattern;
export = chaiJsonPattern;
