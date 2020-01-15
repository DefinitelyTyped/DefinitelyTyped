import * as React from "react";

export type TreeViewProps = {
    customStyles?: {[x: string]: any};
    disableStyles?: boolean;
    /* Object with rowId keys and boolean values representing whether that row is expanded. This variable is handled internally, but can be overridden by the consumer through this prop. */
    expandData?: { [rowId: string]: boolean };
    /* Set to *true* for an expanded tree. This variable is handled internally, but can be overridden by the consumer through this prop */
    isExpandAll?: boolean;
    /* Callback that is called whenever the internal expand/collapse state changes. The argument is an an object with rowId keys and boolean values representing whether that row is expanded. */
    onExpandChange?: (expandData: { [rowId: string]: boolean }) => void;
} & React.HTMLAttributes<HTMLDivElement>;

export type TreeColProps = {
    className?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export type TreeHeadProps = {
    /* Additional props to be spread to the header expand/collapse `<button>` element. */
    buttonProps?: { [x: string]: any };
    className?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export type TreeItemProps = {
    /* Set to *true* for expanded tree item. This variable is handled internally, but can be overridden by the consumer through this prop. */
    isExpanded?: boolean;
    /* ID used to track the expanded/collapsed state of the row. This variable is handled internally, but can be overridden by the consumer through this prop. */
    rowId?: string;
} & React.HTMLAttributes<HTMLLIElement>;

export type TreeRowProps = {} & React.HTMLAttributes<HTMLDivElement>;

declare class TreeView extends React.Component<TreeViewProps> {
    displayName: "TreeView";
    static Tree: React.ComponentClass & {displayName: "TreeView.Tree"};
    static Branch: React.ComponentClass & {displayName: "TreeView.Branch"};
    static Col: React.ComponentClass<TreeColProps> & {displayName: "TreeView.Col"};
    static Head: React.ComponentClass<TreeHeadProps> & {displayName: "TreeView.Head"};
    static Item: React.ComponentClass<TreeItemProps> & {displayName: "TreeView.Item"};
    static Row: React.ComponentClass<TreeRowProps> & {displayName: "TreeView.Row"};
}

export default TreeView;
