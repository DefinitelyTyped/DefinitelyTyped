import { Replacement, SourceAndMapMixin } from ".";
import Source = require("./Source");

/**
 * Decorates a Source with replacements and insertions of source code.
 */
declare class ReplaceSource extends Source implements SourceAndMapMixin {
    replacements: Replacement[];

    /**
     * The ReplaceSource supports "identity" mappings for child source.
     * When original source matches generated source for a mapping it's assumed to be mapped char by char allowing to split mappings at replacements/insertions.
     */
    constructor(source: Source, name?: string);

    /**
     * Replaces chars from start (0-indexed, inclusive) to end (0-indexed, inclusive) with replacement.
     */
    replace(start: number, end: number, newValue: string, name?: string): void;

    /**
     * Inserts the insertion before char pos (0-indexed).
     */
    insert(pos: number, newValue: string, name?: string): void;

    /**
     * Get decorated Source.
     */
    original(): Source;

    source(): string;
}

export = ReplaceSource;
