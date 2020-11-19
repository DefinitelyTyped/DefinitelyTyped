// Type definitions for mdv 1.3
// Project: https://github.com/Mermade/mdv#readme
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

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
    source?: string;
    /**
     * enable warnings
     * @default false
     */
    warnings?: boolean;
    /**
     * save intermediary html
     * @default false
     */
    save?: boolean;
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
