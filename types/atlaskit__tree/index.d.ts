// Type definitions for @atlaskit/tree 4.1
// Project: https://bitbucket.org/atlassian/atlaskit-mk-2/
// Definitions by: Ben James <https://github.com/benhjames>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

import { Component, ReactNode } from "react";

import {
    DraggingStyle,
    DraggableProvidedDragHandleProps,
    DraggableStateSnapshot,
    NotDraggingStyle
} from "react-beautiful-dnd";

export type ItemId = any;

export type Path = number[];

export interface TreeData {
    rootId: ItemId;
    items: { [key: string]: TreeItem; [key: number]: TreeItem };
}

export type TreeItemData = any;

export interface TreeItem {
    id: ItemId;
    children: ItemId[];
    hasChildren?: boolean;
    isExpanded?: boolean;
    isChildrenLoading?: boolean;
    data?: TreeItemData;
}

export interface TreeSourcePosition {
    parentId: ItemId;
    index: number;
}

export interface TreeDestinationPosition {
    parentId: ItemId;
    index?: number;
}

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

interface TreeDraggingStyle extends Omit<DraggingStyle, "transition"> {
    paddingLeft: number;
    transition: "none" | string;
}

type TreeDraggableStyle = NotDraggingStyle | TreeDraggingStyle;

interface TreeDraggableProps {
    // Props that can be spread onto the element directly
    // inline style
    style?: TreeDraggableStyle;
    // used for shared global styles
    "data-react-beautiful-dnd-draggable": string;
}

interface TreeDraggableProvided {
    draggableProps: TreeDraggableProps;
    // will be null if the draggable is disabled
    dragHandleProps?: DraggableProvidedDragHandleProps;
    // The following props will be removed once we move to react 16
    innerRef: (element?: HTMLElement | null) => void;
}

export interface RenderItemParams {
    item: TreeItem;
    depth: number;
    onExpand: (itemId: ItemId) => void;
    onCollapse: (itemId: ItemId) => void;
    provided: TreeDraggableProvided;
    snapshot: DraggableStateSnapshot;
}

interface TreeItemMutation {
    id?: ItemId;
    children?: ItemId[];
    hasChildren?: boolean;
    isExpanded?: boolean;
    isChildrenLoading?: boolean;
    data?: TreeItemData;
}

export function mutateTree(
    tree: TreeData,
    itemId: ItemId,
    mutation: TreeItemMutation
): TreeData;

export function moveItemOnTree(
    tree: TreeData,
    from: TreeSourcePosition,
    to: TreeDestinationPosition
): TreeData;

interface TreeProps {
    /** The tree data structure. */
    tree: TreeData;
    /** Function that will be called when a parent item needs to be expanded. */
    onExpand: (itemId: ItemId, path: Path) => void;
    /** Function that will be called when a parent item needs to be collapsed. */
    onCollapse: (itemId: ItemId, path: Path) => void;
    /** Function that will be called when the user starts dragging. */
    onDragStart: (itemId: ItemId) => void;
    /** Function that will be called when the user finishes dragging. */
    onDragEnd: (
        sourcePosition: TreeSourcePosition,
        destinationPosition: TreeDestinationPosition | undefined
    ) => void;
    /** Function that will be called to render a single item. */
    renderItem: (itemProps: RenderItemParams) => ReactNode;
    /** Number of pixel is used to scaffold the tree by the consumer. */
    offsetPerLevel: number;
    /** Boolean to turn on drag&drop re-ordering on the tree */
    isDragEnabled: boolean;
    /** Boolean to turn on hovering while dragging */
    isNestingEnabled: boolean;
}

interface FlattenedItem {
    item: TreeItem;
    path: Path;
}

type FlattenedTree = FlattenedItem[];

interface TreeState {
    /** The flattened tree data structure transformed from props.tree */
    flattenedTree: FlattenedTree;
    // Id of the currently dragged item
    draggedItemId: ItemId;
}

declare class Tree extends Component<TreeProps, TreeState> {
    static defaultProps: {
        tree: { children: [] };
        onExpand: () => void;
        onCollapse: () => void;
        onDragStart: () => void;
        onDragEnd: () => void;
        renderItem: () => void;
        offsetPerLevel: 35;
        isDragEnabled: false;
        isNestingEnabled: false;
    };
}

export default Tree;
