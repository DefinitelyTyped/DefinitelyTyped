// Type definitions for textdiff-create 1.0
// Project: https://github.com/icflorescu/textdiff-create#readme
// Definitions by: Joe Barnett <https://github.com/ensconced>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace TextDiffCreate {
    enum ChangeType {
        DELETE = -1,
        INSERT = 1,
        EQUAL = 0,
    }

    type Change = [ChangeType.INSERT, string] | [ChangeType.EQUAL, number] | [ChangeType.DELETE, number];
}
declare function TextDiffCreate(v1: string, v2: string): TextDiffCreate.Change[];
export = TextDiffCreate;
