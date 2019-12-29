// Type definitions for diff-match-patch 1.0
// Project: https://www.npmjs.com/package/diff-match-patch
// Definitions by: Asana <https://asana.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export type Diff = [number, string];

export class patch_obj {
    diffs: Diff[];
    start1: number | null;
    start2: number | null;
    length1: number;
    length2: number;
}

export class diff_match_patch {
    Diff_Timeout: number;
    Diff_EditCost: number;
    Match_Threshold: number;
    Match_Distance: number;
    Patch_DeleteThreshold: number;
    Patch_Margin: number;
    Match_MaxBits: number;

    diff_main(text1: string, text2: string, opt_checklines?: boolean, opt_deadline?: number): Diff[];
    diff_bisect_(text1: string, text2: string, deadline: number): Diff[];
    diff_linesToChars_(text1: string, text2: string): { chars1: string; chars2: string; lineArray: string[]; };
    diff_charsToLines_(diffs: Diff[], lineArray: string[]): void;
    diff_commonPrefix(text1: string, text2: string): number;
    diff_commonSuffix(text1: string, text2: string): number;
    diff_commonOverlap_(text1: string, text2: string): number;
    diff_halfMatch_(text1: string, text2: string): string[];
    diff_cleanupSemantic(diffs: Diff[]): void;
    diff_cleanupSemanticLossless(diffs: Diff[]): void;
    diff_cleanupEfficiency(diffs: Diff[]): void;
    diff_cleanupMerge(diffs: Diff[]): void;
    diff_xIndex(diffs: Diff[], loc: number): number;
    diff_prettyHtml(diffs: Diff[]): string;
    diff_text1(diffs: Diff[]): string;
    diff_text2(diffs: Diff[]): string;
    diff_levenshtein(diffs: Diff[]): number;
    diff_toDelta(diffs: Diff[]): string;
    diff_fromDelta(text1: string, delta: string): Diff[];

    match_main(text: string, pattern: string, loc: number): number;
    match_bitap_(text: string, pattern: string, loc: number): number;
    match_alphabet_(pattern: string): {[char: string]: number};

    patch_addContext_(patch: patch_obj, text: string): void;
    patch_make(a: string, opt_b: string | Diff[]): patch_obj[];
    patch_make(a: Diff[]): patch_obj[];
    patch_make(a: string, opt_b: string, opt_c: Diff[]): patch_obj[];
    patch_deepCopy(patches: patch_obj[]): patch_obj[];
    patch_apply(patches: patch_obj[], text: string): [string, boolean[]];
    patch_addPadding(patches: patch_obj[]): string;
    patch_splitMax(patches: patch_obj[]): void;
    patch_fromText(text: string): patch_obj[];
    patch_toText(patches: patch_obj[]): string;
}

export const DIFF_DELETE: number;
export const DIFF_INSERT: number;
export const DIFF_EQUAL: number;
