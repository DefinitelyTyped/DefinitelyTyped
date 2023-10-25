/**
 * A tiny markdown validator
 */
export function validate(
    s: string,
    options: Options & {
        warnings: true;
    },
): ValidateResults & Warnings;
export function validate(s: string, options?: Options): ValidateResults;

export interface Options {
    /**
     * markdown document path
     */
    source?: string | undefined;
    /**
     * enable warnings
     * @default false
     */
    warnings?: boolean | undefined;
    /**
     * save intermediary html
     * @default false
     */
    save?: boolean | undefined;
}

export interface Anchor {
    name: string;
    defined: number;
    emptyText: number;
    localRefNoHash: boolean;
    seen: number;
}

export interface NonParsedEntry {
    extension: string;
    lineEnd: number;
    lineStart: number;
    message: string;
}

export interface ValidateResults {
    anchorsWithEmptyText: Anchor[];
    anchorsWithHash: Anchor[];
    duplicatedAnchors: Anchor[];
    imagesWithMissingAlt: number;
    localRefNoHash: Anchor[];
    missingAnchors: Anchor[];
    nonParsingExamples: NonParsedEntry[];
    source: string;
}

export interface Warnings {
    anchorsWithNoLinks: Anchor[];
    codeBlocksWithNoLanguage: number;
}
