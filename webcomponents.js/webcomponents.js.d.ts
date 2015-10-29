// Type definitions for webcomponents.js 0.6.0
// Project: https://github.com/webcomponents/webcomponentsjs
// Definitions by: Adi Dahiya <https://github.com/adidahiya>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module webcomponents {

    export interface CustomElementInit {
        prototype: HTMLElement;
        extends?: string;
    }

    export interface CustomElementConstructor {
        new(): HTMLElement;
    }

    export interface CustomElementsPolyfill {
        hasNative: boolean;
        flags: any;
        ready: boolean;
        useNative: boolean;
    }

    export interface HTMLImportsPolyfill {
        IMPORT_LINK_TYPE: string;
        isIE: boolean;
        flags: any;
        ready: boolean;
        rootDocument: Document;
        useNative: boolean;
        whenReady(callback: () => void): void;
    }

    export interface Polyfill {
        flags: any;
    }

}

declare module "webcomponents.js" {
    export = webcomponents;
}

interface Document {
    registerElement(name: string, prototype: webcomponents.CustomElementInit): webcomponents.CustomElementConstructor;
}

interface Window {
    CustomElements: webcomponents.CustomElementsPolyfill;
    HTMLImports: webcomponents.HTMLImportsPolyfill;
    WebComponents: webcomponents.Polyfill;
}
