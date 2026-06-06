import "./rangy-core";

declare global {
    namespace rangy {
        function saveSelection(win?: Window): object | null;
        function restoreSelection(savedSelection: object, preserveDirection?: boolean): boolean;
        function saveRange(range: Range): object;
        function restoreRange(savedRange: object, normalize?: boolean): Range;
        function saveRanges(ranges: Range[], direction?: Direction | boolean): object[];
        function restoreRanges(savedRanges: object[]): Range[];
        function removeMarkers(savedSelection: object): void;
    }
}

export = rangy;
