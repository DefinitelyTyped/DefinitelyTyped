/// <reference types="chai" />

declare namespace Chai {
    interface Assertion {
        attr(name: string, value?: string): Assertion;

        attribute(name: string, value?: string): Assertion;

        class(className: string | RegExp): Assertion;

        id(id: string): Assertion;

        html(html: string): Assertion;

        text(text: string | string[]): Assertion;

        value(text: string): Assertion;

        style(property: string, value: string): Assertion;

        empty: Assertion;

        // exist, length, and contain are already defined in @types/chai and have the
        // same type or a more general type, so don't need to be re-declared even though
        // the implementation is different

        descendant(element: string | HTMLElement): Assertion;

        descendants(selector: string): Assertion;

        displayed: Assertion;

        trimmed: Assertion;

        rendered: Assertion;

        visible: Assertion;

        tagName(name: string): Assertion;

        focus: Assertion;

        checked: Assertion;
    }

    interface Include {
        text(text: string | string[]): Assertion;

        html(text: string | string[]): Assertion;
    }

    interface Match {
        (selector: string): Assertion;
    }
}

declare module "chai-dom" {
    const chaiDom: Chai.ChaiPlugin;
    export = chaiDom;
}
