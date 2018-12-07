// Type definitions for DOM Purify
// Project: https://github.com/cure53/DOMPurify
// Definitions by: Dave Taylor <http://davetayls.me>, Samira Bazuzi <https://github.com/bazuzi>, FlowCrypt <https://github.com/FlowCrypt>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace DOMPurify;

export declare let version: string;
export declare let removed: any[];
export declare let isSupported: boolean;

export declare function sanitize(source: string | Node): string;
export declare function sanitize(source: string | Node, config: Config & { RETURN_DOM_FRAGMENT?: false; RETURN_DOM?: false; }): string;
export declare function sanitize(source: string | Node, config: Config & { RETURN_DOM_FRAGMENT: true; }): DocumentFragment;
export declare function sanitize(source: string | Node, config: Config & { RETURN_DOM: true; }): HTMLElement;
export declare function sanitize(source: string | Node, config: Config): string | HTMLElement | DocumentFragment;
export declare function addHook(hook: 'uponSanitizeElement', cb: (currentNode: Element, data: SanitizeElementHookEvent, config: Config) => void): void;
export declare function addHook(hook: 'uponSanitizeAttribute', cb: (currentNode: Element, data: SanitizeAttributeHookEvent, config: Config) => void): void;
export declare function addHook(hook: HookName, cb: (currentNode: Element, data: HookEvent, config: Config) => void): void;
export declare function setConfig(cfg: Config): void;
export declare function clearConfig(): void;
export declare function isValidAttribute(tag: string, attr: string, value: string): boolean;
export declare function removeHook(entryPoint: HookName): void;
export declare function removeHooks(entryPoint: HookName): void;
export declare function removeAllHooks(): void;

interface Config {
    ADD_ATTR?: string[];
    ADD_TAGS?: string[];
    ALLOW_DATA_ATTR?: boolean;
    ALLOWED_ATTR?: string[];
    ALLOWED_TAGS?: string[];
    FORBID_ATTR?: string[];
    FORBID_TAGS?: string[];
    FORCE_BODY?: boolean;
    KEEP_CONTENT?: boolean;
    RETURN_DOM?: boolean;
    RETURN_DOM_FRAGMENT?: boolean;
    RETURN_DOM_IMPORT?: boolean;
    SAFE_FOR_JQUERY?: boolean;
    SANITIZE_DOM?: boolean;
    WHOLE_DOCUMENT?: boolean;
    ALLOWED_URI_REGEXP?: RegExp;
    SAFE_FOR_TEMPLATES?: boolean;
    ALLOW_UNKNOWN_PROTOCOLS?: boolean;
    USE_PROFILES?: false | {mathMl?: boolean, svg?: boolean, svgFilters?: boolean, html?: boolean};
    IN_PLACE?: boolean;
}

type HookName
    = 'beforeSanitizeElements'
    | 'uponSanitizeElement'
    | 'afterSanitizeElements'
    | 'beforeSanitizeAttributes'
    | 'uponSanitizeAttribute'
    | 'afterSanitizeAttributes'
    | 'beforeSanitizeShadowDOM'
    | 'uponSanitizeShadowNode'
    | 'afterSanitizeShadowDOM';

type HookEvent
    = SanitizeElementHookEvent
    | SanitizeAttributeHookEvent
    | null;

interface SanitizeElementHookEvent {
    tagName: string;
    allowedTags: string[];
}

interface SanitizeAttributeHookEvent {
    attrName: string;
    attrValue: string;
    keepAttr: boolean;
    allowedAttributes: string[];
}
