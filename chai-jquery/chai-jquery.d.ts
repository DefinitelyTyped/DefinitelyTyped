// Type definitions for chai-jquery 1.1.1
// Project: https://github.com/chaijs/chai-jquery
// Definitions by: Kazi Manzur Rashid <https://github.com/kazimanzurrashid/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../chai/chai.d.ts" />

declare module chai {
    interface NameValueRegexMatcher {
        match(value: RegExp): boolean;
    }

    interface NameValueMatcher {
        (name: string, value?: string): boolean;
    }

    interface Have {
        attr: NameValueMatcher;
        css: NameValueMatcher;
        data: NameValueMatcher;
        class(className: string): boolean;
        id(id: string): boolean;
        html(html: string): boolean;
        text(text: string): boolean;
        value(text: string): boolean;
        (selector: string): boolean;
    }

    interface Be {
        visible: boolean;
        hidden: boolean;
        selected: boolean;
        checked: boolean;
        disabled: boolean;
        (selector: string): boolean;
    }
}
