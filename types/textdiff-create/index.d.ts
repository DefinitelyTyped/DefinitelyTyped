declare namespace TextDiffCreate {
    type Change = [1, string] | [0, number] | [-1, number];
}
declare function TextDiffCreate(v1: string, v2: string): TextDiffCreate.Change[];
export = TextDiffCreate;
