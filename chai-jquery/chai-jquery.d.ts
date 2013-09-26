// Type definitions for chai-jquery 1.1.1
// Project: https://github.com/chaijs/chai-jquery
// Definitions by: Kazi Manzur Rashid <https://github.com/kazimanzurrashid/>
// DefinitelyTyped: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../chai/chai.d.ts" />

declare module "chai" {
    interface NameValueMatcher {
        (name: string, value?: string): Expect;
    }

    interface ValueMatcher {
        (value: string): Expect;
    }

    interface Expect {
        attr: NameValueMatcher;
        css: NameValueMatcher;
        data: NameValueMatcher;
        class: ValueMatcher;
        id: ValueMatcher;
        html: ValueMatcher;
        text: ValueMatcher;
        value: ValueMatcher;
        visible: Expect;
        hidden: Expect;
        selected: Expect;
        checked: Expect;
        disabled: Expect;
        // already provided by core chai definitions:
        //empty: Expect;
        //exist: Expect;
        //match: ValueMatcher;
        //be: ValueMatcher;
        //contain: ValueMatcher;
        //have: ValueMatcher;
    }
}
