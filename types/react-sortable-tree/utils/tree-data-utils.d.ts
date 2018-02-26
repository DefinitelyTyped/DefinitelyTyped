import { FullTree, TreePath, TreeItem, TreeIndex, SearchData, NodeData, TreeNode } from 'react-sortable-tree';

type GetNodeKeyFunction = (data: TreeIndex & TreeNode) => string | number;
type WalkAndMapFunctionParameters = FullTree & {getNodeKey: GetNodeKeyFunction, callback: Function, ignoreCollapsed?: boolean}
type FlattenedData = (TreeNode & TreePath & {lowerSiblingsCounts: number[]})[];

export function getDescendantCount(data: TreeNode & {ignoreCollapsed?: boolean}): number;
export function getVisibleNodeCount(data: FullTree): number;
export function getVisibleNodeInfoAtIndex(data: FullTree & {targetIndex: number, getNodeKey: GetNodeKeyFunction}): TreeNode & TreePath & {lowerSiblingsCounts: number[]};
export function walk(data: WalkAndMapFunctionParameters): void;
export function map(data: WalkAndMapFunctionParameters): TreeItem[];
export function changeNodeAtPath(data: FullTree & TreePath & {newNode: Function | any, getNodeKey: GetNodeKeyFunction, ignoreCollapsed?: boolean}): TreeItem[];
export function removeNodeAtPath(data: FullTree & TreePath & {getNodeKey: GetNodeKeyFunction, ignoreCollapsed?: boolean}): TreeItem[];
export function getNodeAtPath(data: FullTree & TreePath & {getNodeKey: GetNodeKeyFunction, ignoreCollapsed?: boolean}): TreeItem | null;
export function addNodeUnderParent(data: FullTree & {newNode: TreeItem, parentKey?: number | string, getNodeKey: GetNodeKeyFunction, ignoreCollapsed?: boolean, expandParent?: boolean}): FullTree & TreeIndex;
export function insertNode(data: FullTree & {depth: number, newNode: TreeItem, minimumTreeIndex: number, ignoreCollapsed?: boolean, expandParent?: boolean, getNodeKey: GetNodeKeyFunction}): FullTree & TreeIndex & TreePath & {parentNode: TreeItem};
export function getFlatDataFromTree(data: FullTree & {getNodeKey: GetNodeKeyFunction, ignoreCollapsed?: boolean}): (TreeNode & TreePath & {lowerSiblingsCounts: number[], parentNode: TreeItem})[];
export function getTreeFromFlatData(data: {flatData: FlattenedData, getKey?: GetNodeKeyFunction, getParentKey?: GetNodeKeyFunction, rootKey?: string | number}): TreeItem[]
export function isDescendant(older: TreeItem, younger: TreeItem): boolean;
export function getDepth(node: TreeItem, depth?: number): number;
export function find(data: FullTree & {getNodeKey: GetNodeKeyFunction, searchQuery?: string | number, searchMethod: (data: SearchData) => boolean, searchFocusOffset?: number, expandAllMatchPaths?: boolean, expandFocusMatchPaths?: boolean}): {matches: NodeData[]} & FullTree;
