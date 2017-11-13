// Type definitions for react-sortable-tree 0.1
// Project: https://fritz-c.github.io/react-sortable-tree
// Definitions by: Wouter Hardeman <https://github.com/wouterhardeman>
//                 Jovica Zoric <https://github.com/jzoric>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as React from 'react';
import { ListProps, Index } from 'react-virtualized';
import { ConnectDragSource, ConnectDragPreview, DragSourceMonitor } from 'react-dnd';

export * from './utils/tree-data-utils';
export * from './utils/default-handlers';

export interface TreeItem {
    title?: string;
    subtitle?: string;
    expanded?: boolean;
    children?: TreeItem[];
    [x: string]: any;
}

export interface TreeNode {
    node: TreeItem;
}

export interface TreePath {
    path: NumberArrayOrStringArray;
}

export interface TreeIndex {
    treeIndex: number;
}

export interface FullTree {
    treeData: TreeItem[];
}

export interface NodeData extends TreeNode, TreePath, TreeIndex {}

export interface SearchData extends NodeData {
    searchQuery: any;
}

export interface ExtendedNodeData extends NodeData {
    lowerSiblingsCounts: number[];
    isSearchMatch: boolean;
    isSearchFocus: boolean;
}

export interface OnVisibilityToggleData extends FullTree, TreeNode {
    expanded: boolean;
}
export interface PreviousAnNextLocation {
    prevPath: number[];
    prevParent: TreeItem;
    prevTreeIndex: number;
    nextPath: number[];
    nextParent: TreeItem;
    nextTreeIndex: number;
}

export type NodeRenderer = React.ComponentClass<NodeRendererProps>;

export interface NodeRendererProps {
    node: TreeItem;
    path: NumberArrayOrStringArray;
    treeIndex: number;
    isSearchMatch: boolean;
    isSearchFocus: boolean;
    canDrag: boolean;
    scaffoldBlockPxWidth: number;
    toggleChildrenVisibility?(data: NodeData): void;
    buttons?: any[];
    className?: string;
    style?: {[index: string]: any};

    connectDragPreview: ConnectDragPreview;
    connectDragSource: ConnectDragSource;
    parentNode?: {[index: string]: any};
    startDrag: any;
    endDrag: any;
    isDragging: boolean;
    didDrop: boolean;
    draggedNode?: {[index: string]: any};
    isOver: boolean;
    canDrop?: boolean;
}

type NumberArrayOrStringArray = string[] | number[];

export interface ReactSortableTreeProps {
    treeData: TreeItem[];
    onChange(treeData: TreeItem[]): void;
    style?: {[index: string]: any; };
    className?: string;
    innerStyle?: {[index: string]: any; };
    maxDepth?: number;
    searchMethod?(data: SearchData): boolean;
    searchQuery?: string | any;
    searchFocusOffset?: number;
    searchFinishCallback?(matches: NodeData[]): void;
    generateNodeProps?(data: ExtendedNodeData): {[index: string]: any};
    getNodeKey?(data: TreeNode & TreeIndex): string | number;
    onMoveNode?(data: NodeData & FullTree): void;
    onVisibilityToggle?(data: OnVisibilityToggleData): void;
    canDrag?: ((data: ExtendedNodeData) => boolean) | boolean;
    canDrop?(data: PreviousAnNextLocation & NodeData): boolean;
    reactVirtualizedListProps?: ListProps;
    rowHeight?: ((info: Index) => number) | number;
    slideRegionSize?: number;
    scaffoldBlockPxWidth?: number;
    isVirtualized?: boolean;
    nodeContentRenderer?: NodeRenderer;
    dndType?: string;
}

declare const SortableTree: React.ComponentClass<ReactSortableTreeProps>;

export const SortableTreeWithoutDndContext: React.ComponentClass<ReactSortableTreeProps>;

export default SortableTree;
