import { FullTree, TreePath, TreeItem, TreeIndex, SearchData, NodeData, TreeNode, FlatDataItem } from '..';

export type GetNodeKeyFunction = (data: TreeIndex & TreeNode) => string | number;
export type WalkAndMapFunctionParameters = FullTree & {getNodeKey: GetNodeKeyFunction, callback: Function, ignoreCollapsed?: boolean};

export function getDescendantCount(data: TreeNode & {ignoreCollapsed?: boolean}): number;
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
        expanded?: boolean,
    },
): TreeItem[];
export function changeNodeAtPath(
    data: FullTree & TreePath & {
        newNode: Function | any,
        getNodeKey: GetNodeKeyFunction,
        ignoreCollapsed?: boolean,
    },
): TreeItem[];
export function removeNodeAtPath(
    data: FullTree & TreePath & {
        getNodeKey: GetNodeKeyFunction,
        ignoreCollapsed?: boolean,
    },
): TreeItem[];
export function removeNode(
    data: FullTree & TreePath & {
        getNodeKey: GetNodeKeyFunction,
        ignoreCollapsed?: boolean,
    },
): (FullTree & TreeNode & TreeIndex) | null;
export function getNodeAtPath(
    data: FullTree & TreePath & {
        getNodeKey: GetNodeKeyFunction,
        ignoreCollapsed?: boolean,
    },
): (TreeNode & TreeIndex) | null;
export function addNodeUnderParent(
    data: FullTree & {
        newNode: TreeItem,
        parentKey?: number | string,
        getNodeKey: GetNodeKeyFunction,
        ignoreCollapsed?: boolean,
        expandParent?: boolean,
        addAsFirstChild?: boolean,
    },
): FullTree & TreeIndex;
export function insertNode(
    data: FullTree & {
        depth: number,
        newNode: TreeItem,
        minimumTreeIndex: number,
        ignoreCollapsed?: boolean,
        expandParent?: boolean,
        getNodeKey: GetNodeKeyFunction,
    },
): FullTree & TreeIndex & TreePath & {parentNode: TreeItem};
export function getFlatDataFromTree(
    data: FullTree & {
        getNodeKey: GetNodeKeyFunction,
        ignoreCollapsed?: boolean,
    },
): FlatDataItem[];
export function getTreeFromFlatData<T, K extends keyof T, P extends keyof T, I extends string | number>(
    data: {
        flatData: T[] | I extends string ? { [key: string]: T } : { [key: number]: T },
        // tslint:disable-next-line:no-unnecessary-generics
        getKey?: (item: T) => T[K],
        // tslint:disable-next-line:no-unnecessary-generics
        getParentKey?: (item: T) => T[P],
        rootKey?: I,
    },
): TreeItem[];
export function isDescendant(older: TreeItem, younger: TreeItem): boolean;
export function getDepth(node: TreeItem, depth?: number): number;
export function find(
    data: FullTree & {
        getNodeKey: GetNodeKeyFunction,
        searchQuery?: string | number,
        searchMethod: (data: SearchData) => boolean,
        searchFocusOffset?: number,
        expandAllMatchPaths?: boolean,
        expandFocusMatchPaths?: boolean,
    },
): {matches: NodeData[]} & FullTree;
