export interface PatternDefinitions {
    patterns: string[];
    exceptions: string[];
}

export interface HyphenationOptions {
    debug?: boolean;
    hyphenChar?: string;
}

export type HyphenationFunctionSync = (textToHyphenate: string, options?: Readonly<HyphenationOptions>) => string;

export type HyphenationFunctionAsync = (
    textToHyphenate: string,
    options?: Readonly<HyphenationOptions>,
) => Promise<string>;
