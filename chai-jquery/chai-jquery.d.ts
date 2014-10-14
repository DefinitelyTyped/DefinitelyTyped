// Type definitions for chai-jquery 1.1.1
// Project: https://github.com/chaijs/chai-jquery
// Definitions by: Kazi Manzur Rashid <https://github.com/kazimanzurrashid/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../chai/chai.d.ts" />

declare module chai {
    interface Expect {
        attr(name: string, value?: string): Expect;
        prop(name: string, value?: any): Expect;
        css(name: string, value?: string): Expect;
        data(name: string, value?: any): Expect;
        class(className: string): Expect;
        id(id:string): Expect;
        html(html: string): Expect;
        text(text: string): Expect;
        value(value: string): Expect;
        visible: Expect;
        hidden: Expect;
        select: Expect;
        checked: Expect;
        enabled: Expect;
        disabled: Expect;
        empty: Expect;
        exist: Expect;
        match(selector: string): Expect;
        contain(text: string): Expect;
        descendants(selector: string): Expect;
    }
}
