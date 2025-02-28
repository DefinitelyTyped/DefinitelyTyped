/// <reference path="index.d.ts"/>

interface RangyWordOptions {
    includeTrailingSpace?: boolean | undefined;
    wordRegex?: boolean | undefined;
}

interface RangyCharacterOptions {
    includeBlockContentTrailingSpace?: boolean | undefined;
    includeSpaceBeforeBr?: boolean | undefined;
    includePreLineTrailingSpace?: boolean | undefined;
    ignoreCharacters?: string | undefined;
}

interface RangyTextOptions extends RangyWordOptions, RangyCharacterOptions { }

interface RangyFindTextOptions {
    caseSensitive?: boolean | undefined;
    withinRange?: RangyRange | undefined;
    wholeWordsOnly?: boolean | undefined;
    wrap?: boolean | undefined;
    direction?: 'forward' | 'backward' | undefined;
    wordOptions?: RangyWordOptions | undefined;
    characterOptions?: RangyCharacterOptions | undefined;
}

interface RangyTextExpandOptions extends RangyTextOptions {
  trim?: boolean | undefined;
  trimStart?: boolean | undefined;
  trimEnd?: boolean | undefined;
}

interface RangyRange {
    moveStart(unit: string, count: number, options?: RangyTextOptions): number;
    moveEnd(unit: string, count: number, options?: RangyTextOptions): number;
    move(unit: string, count: number, options?: RangyTextOptions): number;
    expand(unit: string, options?: RangyTextExpandOptions): boolean;
    text(): string;
    selectCharacters(containerNode: Node, startIndex: number, endIndex: number): void;
    toCharacterRange(containerNode: Node, options?: RangyTextOptions): { start: number; end: number };
    findText(searchTerm: string | RegExp, options?: RangyFindTextOptions): boolean;
}