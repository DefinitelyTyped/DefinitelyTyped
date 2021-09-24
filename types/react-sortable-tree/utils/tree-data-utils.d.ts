import { FullTree, TreePath, TreeItem, TreeIndex, SearchData, NodeData, TreeNode, FlatDataItem } from '..';

export type GetNodeKeyFunction = (data: TreeIndex & TreeNode) => string | number;
export type WalkAndMapFunctionParameters = FullTree & {getNodeKey: GetNodeKeyFunction, callback: Function, ignoreCollapsed?: boolean | undefined};

export function getDescendantCount(data: TreeNode & {ignoreCollapsed?: boolean | undefined}): number;
export function getVisibleNodeCount(data: FullTree): number;
export function getVisibleNodeInfoAtIndex(
    data: FullTree & {
        index: number,
        getNodeKey: GetNodeKeyFunction,
    }): TreeNode & TreePath & {lowerSiblingsCounts: number[]} | null;
export function walk(data: WalkAndMapFunctionParameters): void;
export function map(data: WalkAndMapFunctionParameters): TreeItem[];
export function toggleExpandedForAll(
    data: FullTree & {
        expanded?: boolean | undefined,
    },
): TreeItem[];
export function changeNodeAtPath(
    data: FullTree & TreePath & {
        newNode: Function | any,
        getNodeKey: GetNodeKeyFunction,
        ignoreCollapsed?: boolean | undefined,
    },
): TreeItem[];
export function removeNodeAtPath(
    data: FullTree & TreePath & {
        getNodeKey: GetNodeKeyFunction,
        ignoreCollapsed?: boolean | undefined,
    },
): TreeItem[];
export function removeNode(
    data: FullTree & TreePath & {
        getNodeKey: GetNodeKeyFunction,
        ignoreCollapsed?: boolean | undefined,
    },
): (FullTree & TreeNode & TreeIndex) | null;
export function getNodeAtPath(
    data: FullTree & TreePath & {
        getNodeKey: GetNodeKeyFunction,
        ignoreCollapsed?: boolean | undefined,
    },
): (TreeNode & TreeIndex) | null;
export function addNodeUnderParent(
    data: FullTree & {
        newNode: TreeItem,
        parentKey?: number | string | undefined,
        getNodeKey: GetNodeKeyFunction,
        ignoreCollapsed?: boolean | undefined,
        expandParent?: boolean | undefined,
        addAsFirstChild?: boolean | undefined,
    },
): FullTree & TreeIndex;
export function insertNode(
    data: FullTree & {
        depth: number,
        newNode: TreeItem,
        minimumTreeIndex: number,
        ignoreCollapsed?: boolean | undefined,
        expandParent?: boolean | undefined,
        getNodeKey: GetNodeKeyFunction,
    },
): FullTree & TreeIndex & TreePath & {parentNode: TreeItem};
export function getFlatDataFromTree(
    data: FullTree & {
        getNodeKey: GetNodeKeyFunction,
        ignoreCollapsed?: boolean | undefined,
    },
): FlatDataItem[];
export function getTreeFromFlatData<T, K extends keyof T, P extends keyof T, I extends string | number>(
    data: {
        flatData: T[] | I extends string ? { [key: string]: T } : { [key: number]: T },
        // tslint:disable-next-line:no-unnecessary-generics
        getKey?: ((item: T) => T[K]) | undefined,
        // tslint:disable-next-line:no-unnecessary-generics
        getParentKey?: ((item: T) => T[P]) | undefined,
        rootKey?: I | undefined,
    },
): TreeItem[];
export function isDescendant(older: TreeItem, younger: TreeItem): boolean;
export function getDepth(node: TreeItem, depth?: number): number;
export function find(
    data: FullTree & {
        getNodeKey: GetNodeKeyFunction,
        searchQuery?: string | number | undefined,
        searchMethod: (data: SearchData) => boolean,
        searchFocusOffset?: number | undefined,
        expandAllMatchPaths?: boolean | undefined,
        expandFocusMatchPaths?: boolean | undefined,
    },
): {matches: NodeData[]} & FullTree;
