// Type definitions for textdiff-patch 1.0
// Project: https://github.com/icflorescu/textdiff-patch#readme
// Definitions by: Joe Barnett <https://github.com/ensconced>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace TextDiffPatch {
    enum ChangeType {
        DELETE = -1,
        INSERT = 1,
        EQUAL = 0,
    }

    type Change = [ChangeType.INSERT, string] | [ChangeType.EQUAL, number] | [ChangeType.DELETE, number];
}
declare function TextDiffPatch(v1: string, patch: TextDiffPatch.Change[]): string;
export = TextDiffPatch;
