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

    }

    interface Include {

        text(text: string|string[]): Assertion;

        html(text: string|string[]): Assertion;

    }

}

declare module "chai-dom" {

    function chaiDom(chai: any, utils: any): void;

    namespace chaiDom {
    }

    export = chaiDom;
}
