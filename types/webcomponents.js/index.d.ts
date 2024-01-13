export interface CustomElementInit {
    prototype: HTMLElement;
    extends?: string | undefined;
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

declare global {
    // This contains duplicates of some types in lib.dom.d.ts in order to support typescript 2.0
    interface ElementDefinitionOptions {
        extends?: string | undefined;
    }

    interface ShadowRoot extends DocumentFragment {
        innerHTML: string;
        readonly host: Element;
    }

    interface CustomElementRegistry {
        define(name: string, constructor: Function, options?: ElementDefinitionOptions): void;
        get(name: string): any;
        whenDefined(name: string): PromiseLike<void>;
    }

    interface Element {
        createShadowRoot(): ShadowRoot;
        readonly shadowRoot: ShadowRoot | null;
    }

    interface Document {
        registerElement(name: string, prototype: CustomElementInit): CustomElementConstructor;
    }

    interface Window {
        CustomElements: CustomElementsPolyfill;
        HTMLImports: HTMLImportsPolyfill;
        WebComponents: Polyfill;

        readonly customElements: CustomElementRegistry;
    }
}
