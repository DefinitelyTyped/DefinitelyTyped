// Type definitions for structured-source 3.0
// Project: https://github.com/Constellation/structured-source
// Definitions by: azu <https://github.com/azu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace StructuredSource {
    interface SourcePosition {
        // Line number starts with 1.
        line: number;
        // Column number starts with 0.
        column: number;
    }
    interface SourceLocation {
        start: SourcePosition;
        end: SourcePosition;
    }
}

declare class StructuredSource {
    /**
     * @param source - source code text.
     */
    constructor(source: string);
    locationToRange(loc: StructuredSource.SourceLocation): [number, number];
    rangeToLocation(range: [number, number]): StructuredSource.SourceLocation;
    positionToIndex(pos: StructuredSource.SourcePosition): number;
    indexToPosition(index: number): StructuredSource.SourcePosition;
}
export = StructuredSource;
