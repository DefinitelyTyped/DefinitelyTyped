// Type definitions for rc-tree 1.11
// Project: http://github.com/react-component/tree
// Definitions by: John Reilly <https://github.com/johnnyreilly>, Methuselah96 <https://github.com/Methuselah96>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { Component } from "react";

export interface InternalTreeNodeProps extends TreeNodeProps {
    eventKey: string;
    expanded: boolean;
    selected: boolean;
    checked: boolean;
    halfChecked: boolean;
    pos: string;
    dragOver: boolean;
    dragOverGapTop: boolean;
    dragOverGapBottom: boolean;
}

export interface InternalTreeNode extends Component<InternalTreeNodeProps> { }

export interface TreeNodeProps {
    /**
     * additional css class for treeNode
     */
    className?: string | undefined;
    /**
     * whether treeNode is disabled
     */
    disabled?: boolean | undefined;
    /**
     * whether treeNode's checkbox is disabled
     */
    disableCheckbox?: boolean | undefined;
    /**
     * tree / subTree's title
     */
    title?: string | JSX.Element | undefined;
    /**
     * whether it is a leaf node
     */
    isLeaf?: boolean | undefined;
    /**
     * customize icon. When you pass component, whose render will receive full TreeNode props as component props
     */
    icon?: JSX.Element | ((props: InternalTreeNodeProps) => JSX.Element) | undefined;
}

export class TreeNode extends Component<TreeNodeProps> { }

export interface ExpandData {
    expanded: boolean;
    node: InternalTreeNode;
}

export interface CheckData {
    checked: boolean;
    checkedNodes: InternalTreeNode[];
    halfCheckedKeys: string[];
    node: InternalTreeNode;
    event: "check";
}

export interface SelectData {
    selected: boolean;
    selectedNodes: InternalTreeNode[];
    node: InternalTreeNode;
    event: "select";
}

export interface OnRightClickData {
    event: Event;
    node: InternalTreeNode;
}

export interface OnMouseEnterData {
    event: Event;
    node: InternalTreeNode;
}

export interface OnMouseLeaveData {
    event: Event;
    node: InternalTreeNode;
}

export interface OnDragStartData {
    event: Event;
    node: InternalTreeNode;
}

export interface OnDragEnterData {
    event: Event;
    node: InternalTreeNode;
    expandedKeys: string[];
}

export interface OnDragOverData {
    event: Event;
    node: InternalTreeNode;
}

export interface OnDragLeaveData {
    event: Event;
    node: InternalTreeNode;
}

export interface OnDropData {
    event: Event;
    node: InternalTreeNode;
    dragNode: InternalTreeNode;
    dragNodesKeys: string[];
    dropPosition: number;
    dropToGap?: boolean | undefined;
}

export interface OnDragEndData {
    event: Event;
    node: InternalTreeNode;
}

export interface TreeProps {
    /**
     * additional css class of root dom node
     */
    className?: string | undefined;
    /**
     * prefix class
     */
    prefixCls?: string | undefined;
    /**
     * whether disabled the tree
     */
    disabled?: boolean | undefined;
    /**
     * whether show line
     */
    showLine?: boolean | undefined;
    /**
     * whether show icon
     */
    showIcon?: boolean | undefined;
    /**
     * whether can be selected
     */
    selectable?: boolean | undefined;
    /**
     * whether multiple select
     */
    multiple?: boolean | undefined;
    /**
     * whether support checked
     */
    checkable?: boolean | JSX.Element | undefined;
    /**
     * default expand all treeNodes
     */
    defaultExpandAll?: boolean | undefined;
    /**
     * default expand specific treeNodes
     */
    defaultExpandedKeys?: string[] | undefined;
    /**
     * control expanding of specific treeNodes
     */
    expandedKeys?: string[] | undefined;
    /**
     * auto expand parent treeNodes when init
     */
    defaultExpandParent?: boolean | undefined;
    /**
     * whether auto expand parent treeNodes
     */
    autoExpandParent?: boolean | undefined;
    /**
     * default checked treeNodes
     */
    defaultCheckedKeys?: string[] | undefined;
    /**
     * Controlled checked treeNodes (After setting, defaultCheckedKeys will not work).
     * Note: parent and children nodes are associated, if the parent node's key exists, it all children node will be checked, and vice versa.
     * When set checkable and checkStrictly, it should be an object, which contains checked array and halfChecked array.
     */
    checkedKeys?: string[] | { checked: string[]; halfChecked: string[] } | undefined;
    /**
     * check node precisely, parent and children nodes are not associated
     */
    checkStrictly?: boolean | undefined;
    /**
     * default selected treeNodes
     */
    defaultSelectedKeys?: string[] | undefined;
    /**
     * customize icon. When you pass component, whose render will receive full TreeNode props as component props
     */
    icon?: JSX.Element | ((props: InternalTreeNodeProps) => JSX.Element) | undefined;
    /**
     * Controlled selected treeNodes(After setting, defaultSelectedKeys will not work)
     */
    selectedKeys?: string[] | undefined;
    /**
     * fire on treeNode expand or not
     */
    onExpand?(expandedKeys: string[], e: ExpandData): void;
    /**
     * click the treeNode/checkbox to fire
     */
    onCheck?(checkedKeys: string[], e: CheckData): void;
    /**
     * click the treeNode to fire
     */
    onSelect?(selectedKeys: string[], e: SelectData): void;
    /**
     * filter some treeNodes as you need.
     */
    filterTreeNode?(node: InternalTreeNode): boolean;
    /**
     * load data asynchronously
     */
    loadData?(node: InternalTreeNode): Promise<any>;
    /**
     * select current treeNode and show customized contextmenu
     */
    onRightClick?: ((props: OnRightClickData) => void) | undefined;
    /**
     * call when mouse enter a treeNode
     */
    onMouseEnter?: ((props: OnMouseEnterData) => void) | undefined;
    /**
     * call when mouse leave a treeNode
     */
    onMouseLeave?: ((props: OnMouseLeaveData) => void) | undefined;
    /**
     * whether can drag treeNode.
     */
    draggable?: boolean | undefined;
    /**
     * event on drag start
     */
    onDragStart?: ((props: OnDragStartData) => void) | undefined;
    /**
     * event on drag enter
     */
    onDragEnter?: ((props: OnDragEnterData) => void) | undefined;
    /**
     * it execs when fire the tree's dragover event
     */
    onDragOver?: ((props: OnDragOverData) => void) | undefined;
    /**
     * it execs when fire the tree's dragleave event
     */
    onDragLeave?: ((props: OnDragLeaveData) => void) | undefined;
    /**
     * event on drag drop
     */
    onDrop?: ((props: OnDropData) => void) | undefined;
    /**
     * it execs when fire the tree's dragend event
     */
    onDragEnd?: ((props: OnDragEndData) => void) | undefined;
}

export default class Tree extends Component<TreeProps> { }
