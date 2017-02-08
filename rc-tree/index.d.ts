// Type definitions for rc-tree v1.4.3
// Project: https://github.com/react-component/tree
// Definitions by: John Reilly <https://github.com/johnnyreilly/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

import {
    Component,
    Props
} from "react";

export interface TreeNodeProps extends Props<TreeNode> {
    className?: string;
    disabled?: boolean;
    disableCheckbox?: boolean;
    title?: string | JSX.Element;
    isLeaf?: boolean;
}

export class TreeNode extends Component<TreeNodeProps, {}> { }

export interface ExpandData {
    expanded: boolean;
    node: TreeNode;
}

export interface CheckData {
    checked: boolean;
    checkedNodes: TreeNode[];
    node: TreeNode;
    event: Event;
}

export interface SelectData {
    selected: boolean;
    selectedNodes: TreeNode[];
    node: TreeNode;
    event: Event;
}


export interface TreeProps extends Props<Tree> {
    className?: string;
    prefixCls?: string;
    showLine?: boolean;
    showIcon?: boolean;
    selectable?: boolean;
    multiple?: boolean;
    checkable?: boolean | JSX.Element;
    defaultExpandAll?: boolean;
    defaultExpandedKeys?: string[];
    expandedKeys?: string[];
    autoExpandParent?: boolean;
    defaultCheckedKeys?: string[];
    checkedKeys?: string[] | { checked: string[]; halfChecked: string[] };
    checkStrictly?: boolean;
    defaultSelectedKeys?: string[];
    selectedKeys?: string[];
    onExpand?: (expandedKeys: string[], e: ExpandData) => void;
    onCheck?: (checkedKeys: string[], e: CheckData) => void;
    onSelect?: (selectedKeys: string[], e: SelectData) => void;
    filterTreeNode?: (node: TreeNode) => boolean;
    loadData?: (node: TreeNode) => Promise<any>;
    draggable?: boolean;
}

export default class Tree extends Component<TreeProps, {}> { }
