// Type definitions for inline-style-prefixer 3.0
// Project: https://github.com/rofrischmann/inline-style-prefixer
// Definitions by: Andrej Hazucha <https://github.com/ahz>
//                 dpetrezselyova <https://github.com/dpetrezselyova>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

type CSSStyleDeclaration = any;

declare namespace InlineStylePrefixer {
    interface Configuration {
        userAgent?: string;
        keepUnprefixed?: boolean;
    }
}

declare class InlineStylePrefixer {
    constructor(cfg?: InlineStylePrefixer.Configuration);

    prefix(style: CSSStyleDeclaration): CSSStyleDeclaration;

    // support for React.CSSProperties
    prefix<T>(style: T): T;

    static prefixAll(style: CSSStyleDeclaration): CSSStyleDeclaration;

    // support for React.CSSProperties
    static prefixAll<T>(style: T): T;
}

export = InlineStylePrefixer;
