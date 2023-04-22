// Type definitions for textdiff-create 1.0
// Project: https://github.com/icflorescu/textdiff-create#readme
// Definitions by: Joe Barnett <https://github.com/ensconced>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace TextDiffCreate {
    type Change = [1, string] | [0, number] | [-1, number];
}
declare function TextDiffCreate(v1: string, v2: string): TextDiffCreate.Change[];
export = TextDiffCreate;
