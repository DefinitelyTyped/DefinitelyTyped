export interface PatternDefinitions {
    patterns: string[];
    exceptions: string[];
}

interface HyphenationOptions {
    debug?: boolean;
    hyphenChar?: string;
}

export type HyphenationFunctionSync = (textToHyphenate: string, options?: HyphenationOptions) => string;

export type HyphenationFunctionAsync = (textToHyphenate: string, options?: HyphenationOptions) => Promise<string>;
