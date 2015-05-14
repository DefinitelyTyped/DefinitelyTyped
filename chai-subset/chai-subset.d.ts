// Type definitions for chai-subset 1.0.0
// Project: https://github.com/e-conomic/chai-subset
// Definitions by: Sam Noedel <https://github.com/delta62/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../chai/chai.d.ts" />

declare module Chai {
    interface Assertion {
        containSubset(obj: Object): Assertion;
    }
}

interface Object {
    should: Chai.Assertion;
}

declare module "chai-subset" {
    function chaiSubset(chai: any, utils: any): void;
    export = chaiSubset;
}
