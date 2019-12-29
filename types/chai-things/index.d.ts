// Type definitions for chai-things
// Project: https://github.com/chaijs/chai-things
// Definitions by: David Broder-Rodgers <https://github.com/DavidBR-SW/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped
// TypeScript Version: 3.0

/// <reference types="chai" />

declare namespace Chai {
    interface ArrayAssertion {
        include: ArrayInclude;
        contain: ArrayInclude;
        not: ArrayAssertion;
        all: Assertion;
    }

    interface ArrayInclude {
        (item: any): any;
        a: Item;
        an: Item;
        one: Something;
        some: Something;
        something: Something;
        any: Anything;
    }

    interface Include {
        (item: any): any;
        a: Item;
        an: Item;
        one: Something;
        some: Something;
        something: Something;
    }

    interface Anything extends Assertion {
        (): any;
        that: Assertion;
        with: Assertion;
    }

    interface Something extends Assertion {
        (): any;
        that: Assertion;
        with: Assertion;
    }

    interface Item {
        item: Something;
        thing: Something;
    }

    interface Deep {
        equals: Equal;
    }
}

interface Array<T> {
    should: Chai.ArrayAssertion;
}

declare module "chai-things" {
    const chaiThings: Chai.ChaiPlugin;
    namespace chaiThings { }
    export = chaiThings;
}
