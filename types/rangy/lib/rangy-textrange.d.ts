import "./rangy-core";

declare global {
    namespace rangy {
        interface RangyWordOptions {
            includeTrailingSpace?: boolean;
            wordRegex?: RegExp;
        }

        interface RangyCharacterOptions {
            includeBlockContentTrailingSpace?: boolean;
            includeSpaceBeforeBr?: boolean;
            includePreLineTrailingSpace?: boolean;
            ignoreCharacters?: string;
        }

        interface RangyTextOptions extends RangyWordOptions, RangyCharacterOptions {}

        interface RangyFindTextOptions {
            caseSensitive?: boolean;
            withinRange?: RangyRange;
            wholeWordsOnly?: boolean;
            wrap?: boolean;
            direction?: "forward" | "backward";
            wordOptions?: RangyWordOptions;
            characterOptions?: RangyCharacterOptions;
        }

        interface RangyTextExpandOptions extends RangyTextOptions {
            trim?: boolean;
            trimStart?: boolean;
            trimEnd?: boolean;
        }

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
}

export = rangy;
