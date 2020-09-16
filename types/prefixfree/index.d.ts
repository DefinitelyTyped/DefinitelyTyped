// Type definitions for prefixfree 1.0
// Project: https://github.com/LeaVerou/prefixfree
// Definitions by: ExE Boss <https://github.com/ExE-Boss>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

declare namespace StyleFix {
    type StyleFixer = (css: string, raw: boolean, element: Element) => string;
}

interface StyleFix {
    fix: StyleFix.StyleFixer;
    fixers?: StyleFix.StyleFixer[];
    optIn: boolean;
    camelCase(str: string): string;
    deCamelCase(str: string): string;
    link(link: HTMLLinkElement): void;
    process(): void;
    register(fixer: StyleFix.StyleFixer, index?: number): void;
    styleAttribute(element: ElementCSSInlineStyle): void;
    styleElement(style: HTMLStyleElement): void;
}

declare const StyleFix: StyleFix;

// PrefixFree
declare namespace PrefixFree {
    /** The known prefixes used for CSS properties. */
    type KnownPrefixCSS = "-moz-" | "-ms-" | "-o-" | "-webkit-";

    /** The known prefixes used for CSS properties in `CSSStyleDeclaration`. */
    type KnownPrefixJS = "Moz" | "Ms" | "O" | "Webkit";
}

interface PrefixFree {
    /**
     * The prefix used for CSS properties.
     *
     * Eg.: `-moz-`, `-ms-`, `-o-` or `-webkit-`.
     */
    prefix: PrefixFree.KnownPrefixCSS | string;

    /**
     * The prefix used for CSS properties in `CSSStyleDeclaration`.
     *
     * Eg.: `Moz`, `Ms`, `O` or `Webkit`.
     */
    Prefix: PrefixFree.KnownPrefixJS | string;

    atrules: string[];
    functions: string[];
    keywords: string[];
    properties: string[];
    selectorMap: {
        [selector: string]: string;
    };
    selectors: string[];
    valueProperties: string[];

    prefixCSS: StyleFix.StyleFixer;
    prefixProperty(property: string, camelCase?: boolean): string;
    prefixSelector(selector: string): string;
    property(property: string): string;
    value(value: string, property?: string): string;
}

declare const PrefixFree: PrefixFree;

interface Window {
    StyleFix: StyleFix;
    PrefixFree: PrefixFree;
}
