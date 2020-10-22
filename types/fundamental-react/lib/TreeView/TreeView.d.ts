import * as React from "react";

export type TreeViewProps = {
    disableStyles?: boolean;
    expandData?: { [rowId: string]: boolean };
    isExpandAll?: boolean;
    onExpandChange?: (expandData: { [rowId: string]: boolean }) => void;
} & React.HTMLAttributes<HTMLDivElement>;

export type TreeColProps = {
    className?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export type TreeHeadProps = {
    buttonProps?: { [x: string]: any };
    className?: string;
    isExpanded?: boolean;
    onExpandAll?: (...args: any[]) => any;
} & React.HTMLAttributes<HTMLDivElement>;

export type TreeItemProps = {
    isExpanded?: boolean;
    rowId?: string;
} & React.HTMLAttributes<HTMLLIElement>;

export type TreeRowProps = {
    isExpanded?: boolean;
    isParent?: boolean;
    rowId?: string;
    onExpandClick?: (...args: any[]) => any;
} & React.HTMLAttributes<HTMLDivElement>;

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
