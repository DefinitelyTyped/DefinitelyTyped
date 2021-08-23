/// <reference types="Chai" />

declare namespace Chai {
    interface Assertion {
        classes(...classes: string[]): void;
        href(href: string): void;
        method(method: string): void;
        name(name: string): void;
        rels(...rels: string[]): void;
        title(title: string): void;
        type(type: string): void;
        value(value: any): void;
    }

    interface TypeComparison {
        sirenAction: Assertion;
        sirenActions: Assertion;
        sirenEntity: Assertion;
        sirenEntities: Assertion;
        sirenLink: Assertion;
        sirenLinks: Assertion;
        sirenProperty: Assertion;
        sirenProperties: Assertion;
        sirenField: Assertion;
        sirenFields: Assertion;
    }

    interface KeyFilter {
        with: Assertion;
    }
}
