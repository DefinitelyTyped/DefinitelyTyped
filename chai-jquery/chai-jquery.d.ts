// Type definitions for chai-jquery 1.1.1
// Project: https://github.com/chaijs/chai-jquery
// Definitions by: Kazi Manzur Rashid <https://github.com/kazimanzurrashid/>
// DefinitelyTyped: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../chai/chai.d.ts" />

declare module chai {
    interface NameValueRegexMatcher {
        match(value: RegExp): bool;
    }

    interface NameValueMatcher {
        (name: string, value?: string): bool;
    }

    interface Have {
        attr: NameValueMatcher;
        css: NameValueMatcher;
        data: NameValueMatcher;
        class(className: string): bool;
        id(id: string): bool;
        html(html: string): bool;
        text(text: string): bool;
        value(text: string): bool;
        (selector: string): bool;
    }

    interface Be {
        visible: bool;
        hidden: bool;
        selected: bool;
        checked: bool;
        disabled: bool;
        (selector: string): bool;
    }
}
