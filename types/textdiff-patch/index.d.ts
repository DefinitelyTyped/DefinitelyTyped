declare namespace TextDiffPatch {
    type Change = [1, string] | [0, number] | [-1, number];
}
declare function TextDiffPatch(v1: string, patch: TextDiffPatch.Change[]): string;
export = TextDiffPatch;
