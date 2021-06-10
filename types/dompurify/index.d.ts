// Type definitions for DOM Purify 2.2
// Project: https://github.com/cure53/DOMPurify
// Definitions by: Dave Taylor https://github.com/davetayls
//                 Samira Bazuzi <https://github.com/bazuzi>
//                 FlowCrypt <https://github.com/FlowCrypt>
//                 Exigerr <https://github.com/Exigerr>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
//                 Nicholas Ellul <https://github.com/NicholasEllul>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/// <reference types="trusted-types"/>

export as namespace DOMPurify;
export = DOMPurify;

declare const DOMPurify: createDOMPurifyI;

interface createDOMPurifyI extends DOMPurify.DOMPurifyI {
    (window?: Window): DOMPurify.DOMPurifyI;
}

declare namespace DOMPurify {
    interface DOMPurifyI {
        sanitize(source: string | Node): string;
        sanitize(source: string | Node, config: Config & { RETURN_TRUSTED_TYPE: true }): TrustedHTML;
        sanitize(source: string | Node, config: Config & { RETURN_DOM_FRAGMENT?: false; RETURN_DOM?: false }): string;
        sanitize(source: string | Node, config: Config & { RETURN_DOM_FRAGMENT: true }): DocumentFragment;
        sanitize(source: string | Node, config: Config & { RETURN_DOM: true }): HTMLElement;
        sanitize(source: string | Node, config: Config): string | HTMLElement | DocumentFragment;

        addHook(hook: 'uponSanitizeElement', cb: (currentNode: Element, data: SanitizeElementHookEvent, config: Config) => void): void;
        addHook(hook: 'uponSanitizeAttribute', cb: (currentNode: Element, data: SanitizeAttributeHookEvent, config: Config) => void): void;
        addHook(hook: HookName, cb: (currentNode: Element, data: HookEvent, config: Config) => void): void;

        setConfig(cfg: Config): void;
        clearConfig(): void;
        isValidAttribute(tag: string, attr: string, value: string): boolean;

        removeHook(entryPoint: HookName): void;
        removeHooks(entryPoint: HookName): void;
        removeAllHooks(): void;

        version: string;
        removed: any[];
        isSupported: boolean;
    }

    interface Config {
        ADD_ATTR?: string[];
        ADD_DATA_URI_TAGS?: string[];
        ADD_TAGS?: string[];
        ALLOW_DATA_ATTR?: boolean;
        ALLOWED_ATTR?: string[];
        ALLOWED_TAGS?: string[];
        FORBID_ATTR?: string[];
        FORBID_TAGS?: string[];
        FORCE_BODY?: boolean;
        KEEP_CONTENT?: boolean;
        /**
         * change the default namespace from HTML to something different
         */
        NAMESPACE?: string;
        RETURN_DOM?: boolean;
        RETURN_DOM_FRAGMENT?: boolean;
        /**
         * This defaults to `true` starting DOMPurify 2.2.0. Note that setting it to `false`
         * might cause XSS from attacks hidden in closed shadowroots in case the browser
         * supports Declarative Shadow: DOM https://web.dev/declarative-shadow-dom/
         */
        RETURN_DOM_IMPORT?: boolean;
        RETURN_TRUSTED_TYPE?: boolean;
        SANITIZE_DOM?: boolean;
        WHOLE_DOCUMENT?: boolean;
        ALLOWED_URI_REGEXP?: RegExp;
        SAFE_FOR_TEMPLATES?: boolean;
        ALLOW_UNKNOWN_PROTOCOLS?: boolean;
        USE_PROFILES?: false | { mathMl?: boolean; svg?: boolean; svgFilters?: boolean; html?: boolean };
        IN_PLACE?: boolean;
    }

    type HookName =
        | 'beforeSanitizeElements'
        | 'uponSanitizeElement'
        | 'afterSanitizeElements'
        | 'beforeSanitizeAttributes'
        | 'uponSanitizeAttribute'
        | 'afterSanitizeAttributes'
        | 'beforeSanitizeShadowDOM'
        | 'uponSanitizeShadowNode'
        | 'afterSanitizeShadowDOM';

    type HookEvent = SanitizeElementHookEvent | SanitizeAttributeHookEvent | null;

    interface SanitizeElementHookEvent {
        tagName: string;
        allowedTags: { [key: string]: boolean };
    }

    interface SanitizeAttributeHookEvent {
        attrName: string;
        attrValue: string;
        keepAttr: boolean;
        allowedAttributes: { [key: string]: boolean };
        forceKeepAttr?: boolean;
    }
}
