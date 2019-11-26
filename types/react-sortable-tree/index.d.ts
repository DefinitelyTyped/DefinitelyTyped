// Type definitions for react-sortable-tree 0.3
// Project: https://frontend-collective.github.io/react-sortable-tree
// Definitions by: Wouter Hardeman <https://github.com/wouterhardeman>
//                 Jovica Zoric <https://github.com/jzoric>
//                 Kevin Perrine <https://github.com/kevinsperrine>
//                 Alex Maclean <https://github.com/acemac>
//                 Jan Dolezel <https://github.com/dolezel>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';
import { ListProps, Index } from 'react-virtualized';
import {
    ConnectDragSource,
    ConnectDragPreview,
    ConnectDropTarget,
    DragSourceMonitor
} from 'react-dnd';

export * from './utils/tree-data-utils';
export * from './utils/default-handlers';

export interface GetTreeItemChildren {
    done: (children: TreeItem[]) => void;
    node: TreeItem;
    path: NumberOrStringArray;
    lowerSiblingCounts: number[];
    treeIndex: number;
}

export type GetTreeItemChildrenFn = (data: GetTreeItemChildren) => void;

export interface TreeItem {
    title?: React.ReactNode;
    subtitle?: React.ReactNode;
    expanded?: boolean;
    children?: TreeItem[] | GetTreeItemChildrenFn;
    [x: string]: any;
}

export interface TreeNode {
    node: TreeItem;
}

export interface TreePath {
    path: NumberOrStringArray;
}

export interface TreeIndex {
    treeIndex: number;
}

export interface FullTree {
    treeData: TreeItem[];
}

export interface NodeData extends TreeNode, TreePath, TreeIndex { }

export interface FlatDataItem extends TreeNode, TreePath {
    lowerSiblingCounts: number[];
    parentNode: TreeItem;
}

export interface SearchData extends NodeData {
    searchQuery: any;
}

export interface ExtendedNodeData extends NodeData {
    parentNode: TreeItem;
    lowerSiblingCounts: number[];
    isSearchMatch: boolean;
    isSearchFocus: boolean;
}

export interface OnVisibilityToggleData extends FullTree, TreeNode {
    expanded: boolean;
}

export interface OnDragStateChangedData {
    isDragging: boolean;
    draggedNode: TreeItem;
}

interface PreviousAndNextLocation {
    prevTreeIndex: number;
    prevPath: NumberOrStringArray;
    nextTreeIndex: number;
    nextPath: NumberOrStringArray;
}

export interface OnDragPreviousAndNextLocation extends PreviousAndNextLocation {
    prevParent: TreeItem | null;
    nextParent: TreeItem | null;
}

export interface ShouldCopyData {
    node: TreeNode;
    prevPath: NumberOrStringArray;
    prevTreeIndex: number;
}

export interface OnMovePreviousAndNextLocation extends PreviousAndNextLocation {
    nextParentNode: TreeItem | null;
}

export type NodeRenderer = React.ComponentType<NodeRendererProps>;

export interface NodeRendererProps {
    node: TreeItem;
    path: NumberOrStringArray;
    treeIndex: number;
    isSearchMatch: boolean;
    isSearchFocus: boolean;
    canDrag: boolean;
    scaffoldBlockPxWidth: number;
    toggleChildrenVisibility?(data: NodeData): void;
    buttons?: JSX.Element[];
    className?: string;
    style?: React.CSSProperties;
    title?: (data: NodeData) => JSX.Element | JSX.Element;
    subtitle?: (data: NodeData) => JSX.Element | JSX.Element;
    icons?: JSX.Element[];
    lowerSiblingCounts: number[];
    swapDepth?: number;
    swapFrom?: number;
    swapLength?: number;
    listIndex: number;
    treeId: string;
    rowDirection?: "ltr" | "rtl";

    connectDragPreview: ConnectDragPreview;
    connectDragSource: ConnectDragSource;
    parentNode?: TreeItem;
    startDrag: any;
    endDrag: any;
    isDragging: boolean;
    didDrop: boolean;
    draggedNode?: TreeItem;
    isOver: boolean;
    canDrop?: boolean;
}

export type PlaceholderRenderer = React.ComponentType<PlaceholderRendererProps>;

export interface PlaceholderRendererProps {
    isOver: boolean;
    canDrop: boolean;
    draggedNode: TreeItem;
}

type NumberOrStringArray = Array<string | number>;

export type TreeRenderer = React.ComponentType<TreeRendererProps>;

export interface TreeRendererProps {
    treeIndex: number;
    treeId: string;
    swapFrom?: number;
    swapDepth?: number;
    swapLength?: number;
    scaffoldBlockPxWidth: number;
    lowerSiblingCounts: number[];
    rowDirection?: 'ltr' | 'rtl';

    listIndex: number;
    children: JSX.Element[];
    style?: React.CSSProperties;

    // Drop target
    connectDropTarget: ConnectDropTarget;
    isOver: boolean;
    canDrop?: boolean;
    draggedNode?: TreeItem;

    // used in dndManager
    getPrevRow: () => FlatDataItem | null;
    node: TreeItem;
    path: NumberOrStringArray;
}

interface ThemeTreeProps {
    style?: React.CSSProperties;
    innerStyle?: React.CSSProperties;
    reactVirtualizedListProps?: Partial<ListProps>;
    scaffoldBlockPxWidth?: number;
    slideRegionSize?: number;
    rowHeight?: ((info: Index) => number) | number;
    nodeContentRenderer?: NodeRenderer;
    placeholderRenderer?: PlaceholderRenderer;
}

export interface ThemeProps extends ThemeTreeProps {
    treeNodeRenderer?: TreeRenderer;
}

export interface ReactSortableTreeProps extends ThemeTreeProps {
    treeData: TreeItem[];
    onChange(treeData: TreeItem[]): void;
    getNodeKey?(data: TreeNode & TreeIndex): string | number;
    generateNodeProps?(data: ExtendedNodeData): { [index: string]: any };
    onMoveNode?(data: NodeData & FullTree & OnMovePreviousAndNextLocation): void;
    onVisibilityToggle?(data: OnVisibilityToggleData): void;
    onDragStateChanged?(data: OnDragStateChangedData): void;
    maxDepth?: number;
    rowDirection?: 'ltr' | 'rtl';
    canDrag?: ((data: ExtendedNodeData) => boolean) | boolean;
    canDrop?(data: OnDragPreviousAndNextLocation & NodeData): boolean;
    canNodeHaveChildren?(node: TreeItem): boolean;
    theme?: ThemeProps;
    searchMethod?(data: SearchData): boolean;
    searchQuery?: string | any;
    searchFocusOffset?: number;
    onlyExpandSearchedNodes?: boolean;
    searchFinishCallback?(matches: NodeData[]): void;
    dndType?: string;
    shouldCopyOnOutsideDrop?: boolean | ((data: ShouldCopyData) => boolean);
    className?: string;
    isVirtualized?: boolean;
}

declare const SortableTree: React.ComponentType<ReactSortableTreeProps>;

export const SortableTreeWithoutDndContext: React.ComponentType<ReactSortableTreeProps>;

export default SortableTree;
