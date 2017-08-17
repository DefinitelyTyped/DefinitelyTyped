// Type definitions for DOM Purify
// Project: https://github.com/cure53/DOMPurify
// Definitions by: Dave Taylor <http://davetayls.me>, Samira Bazuzi <https://github.com/bazuzi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = DOMPurify;
export as namespace DOMPurify;

declare var DOMPurify: DOMPurify;

interface DOMPurify {
    sanitize(source: string | Node): string;
    sanitize(source: string | Node, config: DOMPurifyConfig & { RETURN_DOM: true; }): HTMLElement;
    sanitize(source: string | Node, config: DOMPurifyConfig & { RETURN_DOM_FRAGMENT: true; }): DocumentFragment;
    sanitize<T extends string | HTMLElement | DocumentFragment>(source: string | Node, config: DOMPurifyConfig): T;
    addHook(hook: 'uponSanitizeElement', cb: (currentNode: Element, data: DOMPurifySanitizeElementHookEvent, config: DOMPurifyConfig) => void): void;
    addHook(hook: 'uponSanitizeAttribute', cb: (currentNode: Element, data: DOMPurifySanitizeAttributeHookEvent, config: DOMPurifyConfig) => void): void;
    addHook(hook: DOMPurifyHookName, cb: (currentNode: Element, data: DOMPurifyHookEvent, config: DOMPurifyConfig) => void): void;
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

type DOMPurifyHookName
    = 'beforeSanitizeElements'
    | 'uponSanitizeElement'
    | 'afterSanitizeElements'
    | 'beforeSanitizeAttributes'
    | 'uponSanitizeAttribute'
    | 'afterSanitizeAttributes'
    | 'beforeSanitizeShadowDOM'
    | 'uponSanitizeShadowNode'
    | 'afterSanitizeShadowDOM';

type DOMPurifyHookEvent
    = DOMPurifySanitizeElementHookEvent
    | DOMPurifySanitizeAttributeHookEvent
    | null;

interface DOMPurifySanitizeElementHookEvent {
    tagName: string;
    allowedTags: string[];
}

interface DOMPurifySanitizeAttributeHookEvent {
    attrName: string;
    attrValue: string;
    keepAttr: boolean;
    allowedAttributes: string[];
}
