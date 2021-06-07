// Type definitions for diff-match-patch 1.0
// Project: https://www.npmjs.com/package/diff-match-patch
// Definitions by: Asana <https://asana.com>
//                 ZHAO Jinxiang <https://github.com/xiaoxiangmoe>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.0

declare const enum Operation {
    DELETE = -1,
    INSERT = 1,
    EQUAL = 0,
}

export type { Operation };

export const DIFF_DELETE: Operation.DELETE;
export const DIFF_INSERT: Operation.INSERT;
export const DIFF_EQUAL: Operation.EQUAL;

export type Diff = readonly [
    /**
     * Operation, one of: DIFF_DELETE, DIFF_INSERT, DIFF_EQUAL
     */
    operation: Operation,
    /**
     * Text to be deleted, inserted, or retained.
     */
    text: string
];

/**
 * Class representing one patch operation.
 */
export class patch_obj {
    diffs: Diff[];
    start1: number | null;
    start2: number | null;
    length1: number;
    length2: number;
    /**
     * Emulate GNU diff's format.
     *
     * Header: @@ -382,8 +481,9 @@
     *
     * Indices are printed as 1-based, not 0-based.
     *
     * @returns The GNU diff string.
     */
    toString(): string;
}

export class diff_match_patch {
    /**
     * Number of seconds to map a diff before giving up (0 for infinity).
     */
    Diff_Timeout: number;
    /**
     * Cost of an empty edit operation in terms of edit characters.
     */
    Diff_EditCost: number;
    /**
     * At what point is no match declared (0.0 = perfection, 1.0 = very loose).
     */
    Match_Threshold: number;
    /**
     * How far to search for a match (0 = exact location, 1000+ = broad match).
     * A match this many characters away from the expected location will add
     * 1.0 to the score (0.0 is a perfect match).
     */
    Match_Distance: number;
    /**
     * When deleting a large block of text (over ~64 characters), how close do
     * the contents have to be to match the expected contents. (0.0 = perfection,
     * 1.0 = very loose).  Note that Match_Threshold controls how closely the
     * end points of a delete need to match.
     */
    Patch_DeleteThreshold: number;
    /**
     * Chunk size for context length.
     */
    Patch_Margin: number;
    /**
     * The number of bits in an int.
     */
    Match_MaxBits: number;

    /**
     * Find the differences between two texts.  Simplifies the problem by stripping
     * any common prefix or suffix off the texts before diffing.
     * @param text1 Old string to be diffed.
     * @param text2 New string to be diffed.
     * @param opt_checklines Optional speedup flag. If present and false,
     *     then don't run a line-level diff first to identify the changed areas.
     *     Defaults to true, which does a faster, slightly less optimal diff.
     * @param opt_deadline Optional time when the diff should be complete
     *     by.  Used internally for recursive calls.  Users should set DiffTimeout
     *     instead.
     *
     * @returns Array of diff tuples.
     */
    diff_main(
        text1: string,
        text2: string,
        opt_checklines?: boolean,
        opt_deadline?: number
    ): Diff[];
    private diff_compute_;
    private diff_lineMode_;
    private diff_bisect_(
        text1: string,
        text2: string,
        deadline: number
    ): Diff[];

    private diff_bisectSplit_;
    private diff_linesToChars_(
        text1: string,
        text2: string
    ): { chars1: string; chars2: string; lineArray: string[] };

    private diff_charsToLines_(diffs: Diff[], lineArray: string[]): void;
    /**
     * Determine the common prefix of two strings.
     * @param text1 First string.
     * @param text2 Second string.
     * @returns The number of characters common to the start of each string.
     */
    diff_commonPrefix(text1: string, text2: string): number;
    /**
     * Determine the common suffix of two strings.
     * @param text1 First string.
     * @param text2 Second string.
     * @returns The number of characters common to the end of each string.
     */
    diff_commonSuffix(text1: string, text2: string): number;
    private diff_commonOverlap_(text1: string, text2: string): number;

    private diff_halfMatch_(text1: string, text2: string): string[];

    /**
     * Reduce the number of edits by eliminating semantically trivial equalities.
     * @param diffs Array of diff tuples.
     */
    diff_cleanupSemantic(diffs: Diff[]): void;
    /**
     * Look for single edits surrounded on both sides by equalities
     * which can be shifted sideways to align the edit to a word boundary.
     *
     * e.g: `The c<ins>at c</ins>ame.` -> `The <ins>cat </ins>came.`
     *
     * @param diffs Array of diff tuples.
     */
    diff_cleanupSemanticLossless(diffs: Diff[]): void;
    /**
     * Reduce the number of edits by eliminating operationally trivial equalities.
     * @param diffs Array of diff tuples.
     */
    diff_cleanupEfficiency(diffs: Diff[]): void;
    /**
     * Reorder and merge like edit sections.  Merge equalities.
     * Any edit section can move as long as it doesn't cross an equality.
     * @param diffs Array of diff tuples.
     */
    diff_cleanupMerge(diffs: Diff[]): void;
    /**
     * loc is a location in text1, compute and return the equivalent location in
     * text2.
     * e.g. 'The cat' vs 'The big cat', 1->1, 5->8
     * @param diffs Array of diff tuples.
     * @param loc Location within text1.
     * @returns Location within text2.
     */
    diff_xIndex(diffs: Diff[], loc: number): number;
    /**
     * Convert a diff array into a pretty HTML report.
     * @param diffs Array of diff tuples.
     * @returns HTML representation.
     */
    diff_prettyHtml(diffs: Diff[]): string;
    /**
     * Compute and return the source text (all equalities and deletions).
     * @param diffs Array of diff tuples.
     * @returns Source text.
     */
    diff_text1(diffs: Diff[]): string;
    /**
     * Compute and return the destination text (all equalities and insertions).
     * @param diffs Array of diff tuples.
     * @returns Destination text.
     */
    diff_text2(diffs: Diff[]): string;
    /**
     * Compute the Levenshtein distance; the number of inserted, deleted or
     * substituted characters.
     * @param diffs Array of diff tuples.
     * @return Number of changes.
     */
    diff_levenshtein(diffs: Diff[]): number;
    /**
     * Crush the diff into an encoded string which describes the operations
     * required to transform text1 into text2.
     *
     * E.g. =3\t-2\t+ing  -> Keep 3 chars, delete 2 chars, insert 'ing'.
     *
     * Operations are tab-separated.  Inserted text is escaped using %xx notation.
     *
     * @param diffs Array of diff tuples.
     * @returns Delta text.
     */
    diff_toDelta(diffs: Diff[]): string;
    /**
     * Given the original text1, and an encoded string which describes the
     * operations required to transform text1 into text2, compute the full diff.
     * @param text1 Source string for the diff.
     * @param delta Delta text.
     * @returns Array of diff tuples.
     * @throws If invalid input.
     */
    diff_fromDelta(text1: string, delta: string): Diff[];

    //  MATCH FUNCTIONS
    /**
     * Locate the best instance of 'pattern' in 'text' near 'loc'.
     * @param text The text to search.
     * @param pattern The pattern to search for.
     * @param loc The location to search around.
     * @returns Best match index or -1.
     */
    match_main(text: string, pattern: string, loc: number): number;
    private match_bitap_(text: string, pattern: string, loc: number): number;
    private match_alphabet_(pattern: string): { [char: string]: number };

    //  PATCH FUNCTIONS
    private patch_addContext_(patch: patch_obj, text: string): void;
    patch_make(text1: string, text2: string): patch_obj[];
    patch_make(diffs: Diff[]): patch_obj[];
    patch_make(text1: string, diffs: Diff[]): patch_obj[];
    patch_make(text1: string, text2: string, diffs: Diff[]): patch_obj[];
    /**
     * Given an array of patches, return another array that is identical.
     * @param patches Array of Patch objects.
     * @returns Array of Patch objects.
     */
    patch_deepCopy(patches: patch_obj[]): patch_obj[];
    /**
     * Merge a set of patches onto the text.  Return a patched text, as well
     * as a list of true/false values indicating which patches were applied.
     * @param patches Array of Patch objects.
     * @param text Old text.
     * @returns Two element Array, containing the
     *      new text and an array of boolean values.
     */
    patch_apply(
        patches: patch_obj[],
        text: string
    ): readonly [new_text: string, patch_applied: readonly boolean[]];
    /**
     * Add some padding on text start and end so that edges can match something.
     *
     * Intended to be called only from within patch_apply.
     *
     * @param patches Array of Patch objects.
     * @returns The padding string added to each side.
     */
    patch_addPadding(patches: patch_obj[]): string;
    /**
     * Look through the patches and break up any which are longer than the maximum
     * limit of the match algorithm.
     *
     * Intended to be called only from within patch_apply.
     *
     * @param patches Array of Patch objects.
     */
    patch_splitMax(patches: patch_obj[]): void;
    /**
     * Take a list of patches and return a textual representation.
     * @param patches Array of Patch objects.
     * @returns Text representation of patches.
     */
    patch_toText(patches: patch_obj[]): string;
    /**
     * Parse a textual representation of patches and return a list of Patch objects.
     * @param textline Text representation of patches.
     * @returns Array of Patch objects.
     * @throws If invalid input.
     */
    patch_fromText(text: string): patch_obj[];
}
