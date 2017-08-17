// Type definitions for DOM Purify
// Project: https://github.com/cure53/DOMPurify
// Definitions by: Dave Taylor <http://davetayls.me>, Samira Bazuzi <https://github.com/bazuzi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'dompurify' {
    export = DOMPurify;
}

declare var DOMPurify: DOMPurify;

interface DOMPurify {
    sanitize(s: string): string;
    sanitize(s: string, config: DOMPurifyConfig & { RETURN_DOM: true; }): HTMLElement;
    sanitize(s: string, config: DOMPurifyConfig & { RETURN_DOM_FRAGMENT: true; }): DocumentFragment;
    sanitize<T extends string | HTMLElement | DocumentFragment>(s: string, config: DOMPurifyConfig): T;
    addHook<K extends keyof DOMPurifyHooks>(hook: K, cb: (currentNode: Element, data: DOMPurifyHooks[K], config: DOMPurifyConfig) => Element): void;
}

interface DOMPurifyConfig {
    ADD_ATTR?: string[];
    ADD_TAGS?: string[];
    ALLOW_DATA_ATTR?: boolean;
    ALLOWED_ATTR?: string[];
    ALLOWED_TAGS?: string[];
    FORBID_ATTR?: string[];
    FORBID_TAGS?: string[];
    KEEP_CONTENT?: boolean;
    RETURN_DOM?: boolean;
    RETURN_DOM_FRAGMENT?: boolean;
    RETURN_DOM_IMPORT?: boolean;
    SAFE_FOR_JQUERY?: boolean;
    SANITIZE_DOM?: boolean;
    WHOLE_DOCUMENT?: boolean;
}

interface DOMPurifyHooks {
    beforeSanitizeElements: null;
    uponSanitizeElement: {
        tagName: string; allowedTags: string[];
    };
    afterSanitizeElements: null;
    beforeSanitizeAttributes: null;
    uponSanitizeAttribute: {
        attrName: string;
        attrValue: string;
        keepAttr: boolean;
        allowedAttributes: string[];
    };
    afterSanitizeAttributes: null;
    beforeSanitizeShadowDOM: null;
    uponSanitizeShadowNode: null;
    afterSanitizeShadowDOM: null;
}
