// Type definitions for webcomponentsjs 0.5.3
// Project: https://github.com/webcomponents/webcomponentsjs
// Definitions by: Adi Dahiya <https://github.com/adidahiya>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module webcomponents {

    export interface HTMLImportsStatic {
        IMPORT_LINK_TYPE: string;
        isIE: boolean;
        ready: boolean;
        rootDocument: Document;
        useNative: boolean;
        whenReady(callback: (doc: Document) => void, doc: Document): void;
    }

    export interface Import {
        href?: string;
        ownerNode: Node;
        content: Document;
    }

}

declare var HTMLImports: webcomponents.HTMLImportsStatic;

interface HTMLLinkElement {
    import?: webcomponents.Import;
}

