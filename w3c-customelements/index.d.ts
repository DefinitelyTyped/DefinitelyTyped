// Type definitions for Custom Elements 1.0
// Project: https://w3c.github.io/webcomponents/spec/custom/
// Definitions by: vvakame <https://github.com/vvakame>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface HasAttributes {
    observedAttributes: string[];
}

export interface OnConnectedCallback {
    connectedCallback(): void;
}

export interface OnDisconnectedCallback {
    disconnectedCallback(): void;
}

export interface OnAdoptedCallback {
    adoptedCallback(oldDocument: any, newDocument: any): void;
}

export interface OnAttributeChangedCallback {
    attributeChangedCallback(name: string, oldValue: any, newValue: any): void;
}

declare global {
    interface CustomElementRegistry {
        // tslint:disable-next-line:forbidden-types
        define(name: string, constructor: Function, options?: ElementDefinitionOptions): void;
        get(name: string): any;
        whenDefined(name: string): Promise<void>;
    }

    interface ElementDefinitionOptions {
        extends: string;
    }

    interface ElementCreationOptions {
        is: string;
    }

    interface Window {
        customElements: CustomElementRegistry;
    }

    interface Document {
        createElement(name: string, options: ElementCreationOptions): HTMLElement;
    }

    var customElements: CustomElementRegistry;
}
