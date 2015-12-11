// Type definitions for diff-match-patch v1.0.0
// Project: https://www.npmjs.com/package/diff-match-patch
// Definitions by: Asana <https://asana.com>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module "diff-match-patch" {
    type Diff = [number, string];

    export class diff_match_patch {
        static new (): diff_match_patch;

        Diff_Timeout: number;
        Diff_EditCost: number;
        Match_Threshold: number;
        Match_Distance: number;
        Patch_DeleteThreshold: number;
        Patch_Margin: number;
        Match_MaxBits: number;

        diff_main(text1: string, text2: string, opt_checklines?: boolean, opt_deadline?: number): Diff[];
        diff_commonPrefix(text1: string, text2: string): number;
        diff_commonSuffix(text1: string, text2: string): number;
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
    }

    export var DIFF_DELETE: number;
    export var DIFF_INSERT: number;
    export var DIFF_EQUAL: number;
}
