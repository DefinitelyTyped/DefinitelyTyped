import * as React from "react";

export type TreeViewProps = {
    /* Object with rowId keys and boolean values representing whether that row is expanded. This variable is handled internally, but can be overridden by the consumer through this prop. */
    expandData?: { [rowId: string]: boolean };
    /* Set to *true* for an expanded tree. This variable is handled internally, but can be overridden by the consumer through this prop */
    isExpandAll?: boolean;
    /* Callback that is called whenever the internal expand/collapse state changes. The argument is an an object with rowId keys and boolean values representing whether that row is expanded. */
    onExpandChange?: (expandData: { [rowId: string]: boolean }) => void;
} & { [x: string]: any };

export type TreeProps = {
    /* _INTERNAL USE ONLY._ */
    expandData?: { [rowId: string]: boolean };
    /* _INTERNAL USE ONLY._ */
    isExpanded?: boolean;
    /* _INTERNAL USE ONLY._ */
    onExpandClick?: (...args: any[]) => void;
} & { [x: string]: any };

export type TreeBranchProps = {
    /* _INTERNAL USE ONLY._ */
    expandData?: { [rowId: string]: boolean };
    /* _INTERNAL USE ONLY._ */
    isExpanded?: boolean;
    /* _INTERNAL USE ONLY._ */
    level?: number;
    /* _INTERNAL USE ONLY._ */
    onExpandClick?: (...args: any[]) => void;
} & { [x: string]: any };

export type TreeColProps = {
    className?: string;
} & { [x: string]: any };

export type TreeHeadProps = {
    /* Additional props to be spread to the header expand/collapse `<button>` element. */
    buttonProps?: { [x: string]: any };
    className?: string;
    /* _INTERNAL USE ONLY._ */
    isExpanded?: boolean;
    /* _INTERNAL USE ONLY._ */
    onExpandAll?: (...args: any[]) => void;
} & { [x: string]: any };

export type TreeItemProps = {
    /* _INTERNAL USE ONLY._ */
    expandData?: { [rowId: string]: boolean };
    /* Set to *true* for expanded tree item. This variable is handled internally, but can be overridden by the consumer through this prop. */
    isExpanded?: boolean;
    /* _INTERNAL USE ONLY._ */
    level?: number;
    /* ID used to track the expanded/collapsed state of the row. This variable is handled internally, but can be overridden by the consumer through this prop. */
    rowId?: string;
    /* _INTERNAL USE ONLY._ */
    onExpandClick?: (...args: any[]) => void;
} & { [x: string]: any };

export type TreeRowProps = {
    /* _INTERNAL USE ONLY._ */
    isExpanded?: boolean;
    /* _INTERNAL USE ONLY._ */
    isParent?: boolean;
    /* _INTERNAL USE ONLY._ */
    rowId?: string;
    /* _INTERNAL USE ONLY._ */
    onExpandClick?: (...args: any[]) => void;
} & { [x: string]: any };

declare class TreeView extends React.Component<TreeViewProps> {
    static Tree: React.ComponentClass<TreeProps>;
    static Branch: React.ComponentClass<TreeBranchProps>;
    static Col: React.ComponentClass<TreeColProps>;
    static Head: React.ComponentClass<TreeHeadProps>;
    static Item: React.ComponentClass<TreeItemProps>;
    static Row: React.ComponentClass<TreeRowProps>;
}

export default TreeView;
