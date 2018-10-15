// Type definitions for chai-dom
// Project: https://github.com/nathanboktae/chai-dom
// Definitions by: Matt Lewis <https://github.com/mattlewis92>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="chai" />

declare namespace Chai {

    interface Assertion {

        attr(name: string, value?: string): Assertion;

        attribute(name: string, value?: string): Assertion;

        class(className: string): Assertion;

        id(id: string): Assertion;

        html(html: string): Assertion;

        text(text: string|string[]): Assertion;

        value(text: string): Assertion;

        empty: Assertion;

        // exist, length, and contain are already defined in @types/chai and have the
        // same type or a more general type, so don't need to be re-declared even though
        // the implementation is different

        descendant(element: string|HTMLElement): Assertion;

        descendants(selector: string): Assertion;

        displayed: Assertion;

    }

    interface Include {

        text(text: string|string[]): Assertion;

        html(text: string|string[]): Assertion;

    }

    interface Match {

        (selector: string): Assertion;

    }

}

declare module "chai-dom" {

    function chaiDom(chai: any, utils: any): void;

    namespace chaiDom {
    }

    export = chaiDom;
}
