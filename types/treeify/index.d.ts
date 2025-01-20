export interface TreeObject {
    [k: string]: TreeValue;
}
export type TreeValue = string | TreeObject;

export function asTree(
    treeObj: TreeObject,
    showValues: boolean,
    hideFunctions: boolean,
): string;

export function asLines(
    treeObj: TreeObject,
    showValues: boolean,
    lineCallback: (line: string) => void,
): string;
export function asLines(
    treeObj: TreeObject,
    showValues: boolean,
    hideFunctions: boolean,
    lineCallback: (line: string) => void,
): string;
