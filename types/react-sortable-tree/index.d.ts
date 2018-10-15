// Type definitions for react-sortable-tree 0.3
// Project: https://fritz-c.github.io/react-sortable-tree
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

export interface TreeItem {
    title?: React.ReactNode;
    subtitle?: React.ReactNode;
    expanded?: boolean;
    children?: TreeItem[];
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

export interface SearchData extends NodeData {
    searchQuery: any;
}

export interface ExtendedNodeData extends NodeData {
    parentNode: TreeItem;
    lowerSiblingsCounts: number[];
    isSearchMatch: boolean;
    isSearchFocus: boolean;
}

export interface OnVisibilityToggleData extends FullTree, TreeNode {
    expanded: boolean;
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

export type NodeRenderer = React.ComponentClass<NodeRendererProps>;

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
    style?: { [index: string]: any };
    title?: (data: NodeData) => JSX.Element | JSX.Element;
    subtitle?: (data: NodeData) => JSX.Element | JSX.Element;
    icons?: JSX.Element[];
    lowerSiblingCounts: number[];
    swapDepth?: number;
    swapFrom?: number;
    swapLength?: number;
    listIndex: number;
    treeId: string;

    connectDragPreview: ConnectDragPreview;
    connectDragSource: ConnectDragSource;
    parentNode?: { [index: string]: any };
    startDrag: any;
    endDrag: any;
    isDragging: boolean;
    didDrop: boolean;
    draggedNode?: { [index: string]: any };
    isOver: boolean;
    canDrop?: boolean;
}

export type PlaceholderRenderer = React.ComponentClass<PlaceholderRendererProps>;

export interface PlaceholderRendererProps {
    isOver: boolean;
    canDrop: boolean;
    draggedNode: { [index: string]: any };
}

type NumberOrStringArray = Array<string | number>;

export type TreeRenderer = React.ComponentClass<TreeRendererProps>;

export interface TreeRendererProps {
    treeIndex: number;
    treeId: string;
    swapFrom?: number;
    swapDepth?: number;
    swapLength?: number;
    scaffoldBlockPxWidth: number;
    lowerSiblingCounts: number[];

    listIndex: number;
    children: JSX.Element[];

    // Drop target
    connectDropTarget: ConnectDropTarget;
    isOver: boolean;
    canDrop?: boolean;
    draggedNode?: { [index: string]: any };

    // used in dndManager
    getPrevRow: any; // @TODO what is this method?
    node: TreeItem;
    path: NumberOrStringArray;
}

export interface ThemeProps {
    style?: { [index: string]: any };
    innerStyle?: { [index: string]: any };
    reactVirtualizedListProps?: ListProps;
    scaffoldBlockPxWidth?: number;
    slideRegionSize?: number;
    rowHeight?: ((info: Index) => number) | number;
    treeNodeRenderer?: TreeRenderer;
    nodeContentRenderer?: NodeRenderer;
    placeholderRenderer?: PlaceholderRenderer;
}

export interface ReactSortableTreeProps {
    treeData: TreeItem[];
    onChange(treeData: TreeItem[]): void;
    style?: { [index: string]: any };
    className?: string;
    innerStyle?: { [index: string]: any };
    maxDepth?: number;
    searchMethod?(data: SearchData): boolean;
    searchQuery?: string | any;
    searchFocusOffset?: number;
    searchFinishCallback?(matches: NodeData[]): void;
    generateNodeProps?(data: ExtendedNodeData): { [index: string]: any };
    getNodeKey?(data: TreeNode & TreeIndex): string | number;
    onMoveNode?(data: NodeData & FullTree & OnMovePreviousAndNextLocation): void;
    onVisibilityToggle?(data: OnVisibilityToggleData): void;
    canDrag?: ((data: ExtendedNodeData) => boolean) | boolean;
    canDrop?(data: OnDragPreviousAndNextLocation & NodeData): boolean;
    reactVirtualizedListProps?: ListProps;
    rowHeight?: ((info: Index) => number) | number;
    slideRegionSize?: number;
    scaffoldBlockPxWidth?: number;
    isVirtualized?: boolean;
    nodeContentRenderer?: NodeRenderer;
    dndType?: string;
    placeholderRenderer?: PlaceholderRenderer;
    theme?: ThemeProps;
    shouldCopyOnOutsideDrop?: boolean | ((data: ShouldCopyData) => boolean);
    onlyExpandSearchedNodes?: boolean;
}

declare const SortableTree: React.ComponentClass<ReactSortableTreeProps>;

export const SortableTreeWithoutDndContext: React.ComponentClass<ReactSortableTreeProps>;

export default SortableTree;
