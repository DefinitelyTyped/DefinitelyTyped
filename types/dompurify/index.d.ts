// Type definitions for DOM Purify
// Project: https://github.com/cure53/DOMPurify
// Definitions by: Dave Taylor <http://davetayls.me>, Samira Bazuzi <https://github.com/bazuzi>, FlowCrypt <https://github.com/FlowCrypt>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
export as namespace DOMPurify;
export = DOMPurify;

declare const DOMPurify: createDOMPurifyI

interface createDOMPurifyI extends DOMPurifyI {
    (window?: Window): DOMPurifyI
}

interface DOMPurifyI {
    sanitize(source: string | Node): string
    sanitize(source: string | Node, config: Config & { RETURN_DOM_FRAGMENT?: false, RETURN_DOM?: false, }): string
    sanitize(source: string | Node, config: Config & { RETURN_DOM_FRAGMENT: true, }): DocumentFragment
    sanitize(source: string | Node, config: Config & { RETURN_DOM: true, }): HTMLElement
    sanitize(source: string | Node, config: Config): string | HTMLElement | DocumentFragment

    addHook(hook: 'uponSanitizeElement', cb: (currentNode: Element, data: SanitizeElementHookEvent, config: Config) => void): void
    addHook(hook: 'uponSanitizeAttribute', cb: (currentNode: Element, data: SanitizeAttributeHookEvent, config: Config) => void): void
    addHook(hook: HookName, cb: (currentNode: Element, data: HookEvent, config: Config) => void): void

    setConfig(cfg: Config): void
    clearConfig(): void
    isValidAttribute(tag: string, attr: string, value: string): boolean

    removeHook(entryPoint: HookName): void
    removeHooks(entryPoint: HookName): void
    removeAllHooks(): void

    version: string
    removed: any[]
    isSupported: boolean
}

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
