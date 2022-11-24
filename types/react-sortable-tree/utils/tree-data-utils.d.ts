import { FullTree, TreePath, TreeItem, TreeIndex, SearchData, NodeData, TreeNode, FlatDataItem } from '..';

export type GetNodeKeyFunction<T = {}> = (data: TreeIndex & TreeNode<T>) => string | number;
export type WalkAndMapFunctionParameters<T = {}> = FullTree<T> & {getNodeKey: GetNodeKeyFunction<T>, callback: Function, ignoreCollapsed?: boolean | undefined};

// tslint:disable-next-line:no-unnecessary-generics
export function getDescendantCount<T = {}>(data: TreeNode<T> & {ignoreCollapsed?: boolean | undefined}): number;
// tslint:disable-next-line:no-unnecessary-generics
export function getVisibleNodeCount<T = {}>(data: FullTree<T>): number;
export function getVisibleNodeInfoAtIndex<T = {}>(
    data: FullTree<T> & {
        index: number,
        getNodeKey: GetNodeKeyFunction<T>,
    }): TreeNode<T> & TreePath & {lowerSiblingsCounts: number[]} | null;
// tslint:disable-next-line:no-unnecessary-generics
export function walk<T = {}>(data: WalkAndMapFunctionParameters<T>): void;
export function map<T = {}>(data: WalkAndMapFunctionParameters<T>): Array<TreeItem<T>>;
export function toggleExpandedForAll<T = {}>(
    data: FullTree<T> & {
        expanded?: boolean | undefined,
    },
): Array<TreeItem<T>>;
export function changeNodeAtPath<T = {}>(
    data: FullTree<T> & TreePath & {
        newNode: Function | any,
        getNodeKey: GetNodeKeyFunction<T>,
        ignoreCollapsed?: boolean | undefined,
    },
): Array<TreeItem<T>>;
export function removeNodeAtPath<T = {}>(
    data: FullTree<T> & TreePath & {
        getNodeKey: GetNodeKeyFunction<T>,
        ignoreCollapsed?: boolean | undefined,
    },
): Array<TreeItem<T>>;
export function removeNode<T = {}>(
    data: FullTree<T> & TreePath & {
        getNodeKey: GetNodeKeyFunction<T>,
        ignoreCollapsed?: boolean | undefined,
    },
): (FullTree<T> & TreeNode<T> & TreeIndex) | null;
export function getNodeAtPath<T = {}>(
    data: FullTree<T> & TreePath & {
        getNodeKey: GetNodeKeyFunction<T>,
        ignoreCollapsed?: boolean | undefined,
    },
): (TreeNode<T> & TreeIndex) | null;
export function addNodeUnderParent<T = {}>(
    data: FullTree<T> & {
        newNode: TreeItem<T>,
        parentKey?: number | string | undefined,
        getNodeKey: GetNodeKeyFunction<T>,
        ignoreCollapsed?: boolean | undefined,
        expandParent?: boolean | undefined,
        addAsFirstChild?: boolean | undefined,
    },
): FullTree<T> & TreeIndex;
export function insertNode<T = {}>(
    data: FullTree<T> & {
        depth: number,
        newNode: TreeItem<T>,
        minimumTreeIndex: number,
        ignoreCollapsed?: boolean | undefined,
        expandParent?: boolean | undefined,
        getNodeKey: GetNodeKeyFunction<T>,
    },
): FullTree<T> & TreeIndex & TreePath & {parentNode: TreeItem<T>};
export function getFlatDataFromTree<T = {}>(
    data: FullTree<T> & {
        getNodeKey: GetNodeKeyFunction<T>,
        ignoreCollapsed?: boolean | undefined,
    },
): Array<FlatDataItem<T>>;
export function getTreeFromFlatData<T = {}>(
    data: {
        flatData: Array<Omit<TreeItem<T>, 'children'>>,
        getKey?: ((item: TreeItem<T>) => string | number) | undefined,
        getParentKey?: ((item: TreeItem<T>) => string | number | null) | undefined,
        rootKey?: string | number | undefined,
    },
): Array<TreeItem<T>>;
export function isDescendant<T = {}>(older: TreeItem<T>, younger: TreeItem<T>): boolean;
// tslint:disable-next-line:no-unnecessary-generics
export function getDepth<T = {}>(node: TreeItem<T>, depth?: number): number;
export function find<T = {}>(
    data: FullTree<T> & {
        getNodeKey: GetNodeKeyFunction<T>,
        searchQuery?: string | number | undefined,
        searchMethod: (data: SearchData<T>) => boolean,
        searchFocusOffset?: number | undefined,
        expandAllMatchPaths?: boolean | undefined,
        expandFocusMatchPaths?: boolean | undefined,
    },
): {matches: Array<NodeData<T>>} & FullTree<T>;
