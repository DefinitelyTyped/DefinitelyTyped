// Type definitions for rc-tree 1.10
// Project: https://github.com/react-component/tree
// Definitions by: John Reilly <https://github.com/johnnyreilly>, Methuselah96 <https://github.com/Methuselah96>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.7

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
    className?: string;
    /**
     * whether treeNode is disabled
     */
    disabled?: boolean;
    /**
     * whether treeNode's checkbox is disabled
     */
    disableCheckbox?: boolean;
    /**
     * tree / subTree's title
     */
    title?: string | JSX.Element;
    /**
     * whether it is a leaf node
     */
    isLeaf?: boolean;
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

export interface OnDragStartData {
    event: Event;
    node: InternalTreeNode;
}

export interface OnDragEnterData {
    event: Event;
    node: InternalTreeNode;
    expandedKeys: string[];
}

export interface OnDropData {
    event: Event;
    node: InternalTreeNode;
    dragNode: InternalTreeNode;
    dragNodesKeys: string[];
}

export interface TreeProps {
    /**
     * additional css class of root dom node
     */
    className?: string;
    /**
     * prefix class
     */
    prefixCls?: string;
    /**
     * whether show line
     */
    showLine?: boolean;
    /**
     * whether show icon
     */
    showIcon?: boolean;
    /**
     * whether can be selected
     */
    selectable?: boolean;
    /**
     * whether multiple select
     */
    multiple?: boolean;
    /**
     * whether support checked
     */
    checkable?: boolean | JSX.Element;
    /**
     * default expand all treeNodes
     */
    defaultExpandAll?: boolean;
    /**
     * default expand specific treeNodes
     */
    defaultExpandedKeys?: string[];
    /**
     * control expanding of specific treeNodes
     */
    expandedKeys?: string[];
    /**
     * whether auto expand parent treeNodes
     */
    autoExpandParent?: boolean;
    /**
     * default checked treeNodes
     */
    defaultCheckedKeys?: string[];
    /**
     * Controlled checked treeNodes (After setting, defaultCheckedKeys will not work).
     * Note: parent and children nodes are associated, if the parent node's key exists, it all children node will be checked, and vice versa.
     * When set checkable and checkStrictly, it should be an object, which contains checked array and halfChecked array.
     */
    checkedKeys?: string[] | { checked: string[]; halfChecked: string[] };
    /**
     * check node precisely, parent and children nodes are not associated
     */
    checkStrictly?: boolean;
    /**
     * default selected treeNodes
     */
    defaultSelectedKeys?: string[];
    /**
     * Controlled selected treeNodes(After setting, defaultSelectedKeys will not work)
     */
    selectedKeys?: string[];
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
     * whether can drag treeNode.
     */
    draggable?: boolean;
    /**
     * event on drag start
     */
    onDragStart?: (props: OnDragStartData) => void;
    /**
     * event on drag enter
     */
    onDragEnter?: (props: OnDragEnterData) => void;
    /**
     * event on drag drop
     */
    onDrop?: (props: OnDropData) => void;
}

export default class Tree extends Component<TreeProps> { }
