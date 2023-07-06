// Type definitions for textdiff-patch 1.0
// Project: https://github.com/icflorescu/textdiff-patch#readme
// Definitions by: Joe Barnett <https://github.com/ensconced>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace TextDiffPatch {
    type Change = [1, string] | [0, number] | [-1, number];
}
declare function TextDiffPatch(v1: string, patch: TextDiffPatch.Change[]): string;
export = TextDiffPatch;
