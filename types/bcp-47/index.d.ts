// Type definitions for bcp-47 1.0
// Project: https://github.com/wooorm/bcp-47#readme
// Definitions by: Chris Barth <https://github.com/cjbarth>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export function parse(tag: string, options?: ParseOptions): Schema;
export function stringify(schema: Schema): string;

export interface ParseOptions {
    warning?: (errorMessage: string, errorCode: ErrorCodes, offset: number) => void;
    forgiving?: boolean;
    normalize?: boolean;
}

export interface Schema {
    language?: string;
    extendedLanguageSubtags?: string[];
    script?: string;
    region?: string;
    variants?: string[];
    extensions?: LocaleExtension[];
    privateuse?: string[];
    regular?: string;
    irregular?: string;
}

export interface LocaleExtension {
    singleton: string;
    extensions: string[];
}

export enum ErrorCodes {
    errVariantTooLong = 1,
    errExtensionTooLong = 2,
    errTooManySubtags = 3,
    errEmptyExtension = 4,
    errPrivateUseTooLong = 5,
    errExtraContent = 6,
}
