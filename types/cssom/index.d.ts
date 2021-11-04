// Type definitions for cssom 0.4
// Project: https://github.com/NV/CSSOM#readme
// Definitions by: ExE Boss <https://github.com/ExE-Boss>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace CSSOM;

/**
 * Produces a deep copy of stylesheet — the instance variables of stylesheet are copied recursively.
 */
export function clone(stylesheet: CSSStyleSheet): CSSStyleSheet;

export function parse(token: string): CSSStyleSheet;

export abstract class StyleSheet {
    parentStyleSheet: StyleSheet | null;
}

export class CSSStyleSheet extends StyleSheet {
    cssRules: CSSRule[];

    deleteRule(index: number): void;
    insertRule(rule: string, index?: number): number;
}

export abstract class CSSRule {
    readonly cssText: string;

    parentRule: CSSRule | null;
    parentStyleSheet: StyleSheet | null;

    readonly type: number;
}

export namespace CSSRule {
    /** @deprecated Obsolete */
    const UNKNOWN_RULE = 0;
    const STYLE_RULE = 1;
    /** @deprecated Obsolete */
    const CHARSET_RULE = 2;
    const IMPORT_RULE = 3;
    const MEDIA_RULE = 4;
    const FONT_FACE_RULE = 5;
    const PAGE_RULE = 6;
    const KEYFRAMES_RULE = 7;
    const KEYFRAME_RULE = 8;
    const MARGIN_RULE = 9;
    const NAMESPACE_RULE = 10;
    const COUNTER_STYLE_RULE = 11;
    const SUPPORTS_RULE = 12;
    const DOCUMENT_RULE = 13;
    const FONT_FEATURE_VALUES_RULE = 14;
    const VIEWPORT_RULE = 15;
    const REGION_STYLE_RULE = 16;
}

export class CSSStyleRule extends CSSRule {
    cssText: string;

    selectorText: string;
    style: CSSStyleDeclaration;

    static parse(ruleText: any): any;
    readonly type: 1;
}

export class CSSImportRule extends CSSRule {
    cssText: string;

    href: string;
    media: MediaList;
    styleSheet: CSSStyleSheet;

    readonly type: 3;
}

export class CSSMediaRule extends CSSRule {
    media: MediaList;
    cssRules: CSSRule[];

    readonly type: 4;
}

export class CSSFontFaceRule extends CSSRule {
    style: CSSStyleDeclaration;

    readonly type: 5;
}

export class CSSKeyframesRule extends CSSRule {
    name: string;
    cssRules: CSSRule[];

    readonly type: 7;
}

export class CSSKeyframeRule extends CSSRule {
    keyText: string;
    style: CSSStyleDeclaration;

    readonly type: 8;
}

export class CSSSupportsRule extends CSSRule {
    conditionText: string;
    cssRules: CSSRule[];

    readonly type: 12;
}

/** @deprecated Removed from spec */
export class CSSDocumentRule extends CSSRule {
    matcher: MatcherList;
    cssRules: CSSRule[];

    readonly type: 13;
}

/**
 * @deprecated Legacy Shadow DOM v0
 * @see https://www.w3.org/TR/2013/WD-shadow-dom-20130514/#host-at-rule
 */
export class CSSHostRule extends CSSRule {
    cssRules: CSSRule[];

    readonly type: 1001;
}

export class CSSStyleDeclaration {
    cssText: string;
    length: number;
    parentRule: CSSRule | null;

    getPropertyPriority(name: string): string;
    getPropertyValue(name: string): string;
    removeProperty(name: string): string;
    setProperty(name: string, value: string | null, priority?: string | null): void;

    [index: number]: string;
}

/** @deprecated */
export class CSSValue {
    /** @unsupported The getter and setter are currently unimplemented and throw unconditionally. */
    cssText: string;
}

/** @deprecated */
export class CSSValueExpression extends CSSValue {
    constructor(token: string, idx: number);

    parse(): { error: any } | { idx: number; expression: string };
}

/** @deprecated Removed from spec */
export class MatcherList {
    length: number;
    matcherText: string;

    appendMatcher(matcher: string): void;
    deleteMatcher(matcher: string): void;

    [index: number]: string;
}

export class MediaList {
    length: number;
    mediaText: string;

    appendMedium(medium: string): void;
    deleteMedium(medium: string): void;

    [index: number]: string;
}
