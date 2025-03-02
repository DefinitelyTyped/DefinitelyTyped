declare module "rangy" {
    interface RangyStatic {
        saveSelection(win?: Window): object | null;
        restoreSelection(savedSelection: object, preserveDirection?: boolean): boolean;
        saveRange(range: Range): object;
        restoreRange(savedRange: object, normalize?: boolean): Range;
        saveRanges(ranges: Range[], direction?: Direction | boolean): object[];
        restoreRanges(savedRanges: object[]): Range[];
        removeMarkers(savedSelection: object): void;
    }
}
