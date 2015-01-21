// Type definitions for webcomponentsjs 0.5.3
// Project: https://github.com/webcomponents/webcomponentsjs
// Definitions by: Adi Dahiya <https://github.com/adidahiya>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

///<reference path="html-imports.d.ts" />

declare module webcomponents {

    export interface CustomElement {
        prototype: Node;
        extends?: HTMLElement;
    }

}

declare module 'webcomponents' {
    export = webcomponents;
}

interface Document {
    registerElement(name: string, prototype: webcomponents.CustomElement): void;
}
