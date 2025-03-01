import { RangyRange } from "./rangy-core";

export interface RangyWordOptions {
    includeTrailingSpace?: boolean;
    wordRegex?: RegExp;
}

export interface RangyCharacterOptions {
    includeBlockContentTrailingSpace?: boolean;
    includeSpaceBeforeBr?: boolean;
    includePreLineTrailingSpace?: boolean;
    ignoreCharacters?: string;
}

export interface RangyTextOptions extends RangyWordOptions, RangyCharacterOptions {}

export interface RangyFindTextOptions {
    caseSensitive?: boolean;
    withinRange?: RangyRange;
    wholeWordsOnly?: boolean;
    wrap?: boolean;
    direction?: "forward" | "backward";
    wordOptions?: RangyWordOptions;
    characterOptions?: RangyCharacterOptions;
}

export interface RangyTextExpandOptions extends RangyTextOptions {
    trim?: boolean;
    trimStart?: boolean;
    trimEnd?: boolean;
}

declare module "./rangy-core" {
    interface RangyTextRange {
        moveStart(unit: string, count: number, options?: RangyTextOptions): number;
        moveEnd(unit: string, count: number, options?: RangyTextOptions): number;
        move(unit: string, count: number, options?: RangyTextOptions): number;
        expand(unit: string, options?: RangyTextExpandOptions): boolean;
        text(): string;
        selectCharacters(containerNode: Node, startIndex: number, endIndex: number): void;
        toCharacterRange(containerNode: Node, options?: RangyTextOptions): { start: number; end: number };
        findText(searchTerm: string | RegExp, options?: RangyFindTextOptions): boolean;
    }
}
