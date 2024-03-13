declare namespace diff_match_patch {
    type Diff = [number, string];

    interface patch_obj {
        diffs: Diff[];
        start1: number | null;
        start2: number | null;
        length1: number;
        length2: number;
    }
}

declare class diff_match_patch {
    Diff_Timeout: number;
    Diff_EditCost: number;
    Match_Threshold: number;
    Match_Distance: number;
    Patch_DeleteThreshold: number;
    Patch_Margin: number;
    Match_MaxBits: number;

    diff_main(text1: string, text2: string, opt_checklines?: boolean, opt_deadline?: number): diff_match_patch.Diff[];

    diff_bisect_(text1: string, text2: string, deadline: number): diff_match_patch.Diff[];

    diff_linesToChars_(text1: string, text2: string): { chars1: string; chars2: string; lineArray: string[] };

    diff_charsToLines_(diffs: diff_match_patch.Diff[], lineArray: string[]): void;

    diff_commonPrefix(text1: string, text2: string): number;

    diff_commonSuffix(text1: string, text2: string): number;

    diff_commonOverlap_(text1: string, text2: string): number;

    diff_halfMatch_(text1: string, text2: string): string[];

    diff_cleanupSemantic(diffs: diff_match_patch.Diff[]): void;

    diff_cleanupSemanticLossless(diffs: diff_match_patch.Diff[]): void;

    diff_cleanupEfficiency(diffs: diff_match_patch.Diff[]): void;

    diff_cleanupMerge(diffs: diff_match_patch.Diff[]): void;

    diff_xIndex(diffs: diff_match_patch.Diff[], loc: number): number;

    diff_prettyHtml(diffs: diff_match_patch.Diff[]): string;

    diff_text1(diffs: diff_match_patch.Diff[]): string;

    diff_text2(diffs: diff_match_patch.Diff[]): string;

    diff_levenshtein(diffs: diff_match_patch.Diff[]): number;

    diff_toDelta(diffs: diff_match_patch.Diff[]): string;

    diff_fromDelta(text1: string, delta: string): diff_match_patch.Diff[];

    match_main(text: string, pattern: string, loc: number): number;

    match_bitap_(text: string, pattern: string, loc: number): number;

    match_alphabet_(pattern: string): { [char: string]: number };

    patch_addContext_(patch: typeof diff_match_patch.patch_obj, text: string): void;

    patch_make(a: string, opt_b: string | diff_match_patch.Diff[]): Array<typeof diff_match_patch.patch_obj>;
    patch_make(a: diff_match_patch.Diff[]): Array<typeof diff_match_patch.patch_obj>;
    patch_make(a: string, opt_b: string, opt_c: diff_match_patch.Diff[]): Array<typeof diff_match_patch.patch_obj>;

    patch_deepCopy(patches: Array<typeof diff_match_patch.patch_obj>): Array<typeof diff_match_patch.patch_obj>;

    patch_apply(patches: Array<typeof diff_match_patch.patch_obj>, text: string): [string, boolean[]];

    patch_addPadding(patches: Array<typeof diff_match_patch.patch_obj>): string;

    patch_splitMax(patches: Array<typeof diff_match_patch.patch_obj>): void;

    patch_fromText(text: string): Array<typeof diff_match_patch.patch_obj>;

    patch_toText(patches: Array<typeof diff_match_patch.patch_obj>): string;

    static patch_obj: {
        new(): diff_match_patch.patch_obj;
    };

    static diff_match_patch: typeof diff_match_patch;
    static DIFF_DELETE: -1;
    static DIFF_INSERT: 1;
    static DIFF_EQUAL: 0;
}

export = diff_match_patch;
