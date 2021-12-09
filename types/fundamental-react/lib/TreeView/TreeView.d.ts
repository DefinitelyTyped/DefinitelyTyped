import * as React from "react";

export type TreeViewProps = {
    disableStyles?: boolean | undefined;
    expandData?: { [rowId: string]: boolean } | undefined;
    isExpandAll?: boolean | undefined;
    onExpandChange?: ((expandData: { [rowId: string]: boolean }) => void) | undefined;
} & React.HTMLAttributes<HTMLDivElement>;

export type TreeColProps = {
    className?: string | undefined;
} & React.HTMLAttributes<HTMLDivElement>;

export type TreeHeadProps = {
    buttonProps?: { [x: string]: any } | undefined;
    className?: string | undefined;
    isExpanded?: boolean | undefined;
    onExpandAll?: ((...args: any[]) => any) | undefined;
} & React.HTMLAttributes<HTMLDivElement>;

export type TreeItemProps = {
    isExpanded?: boolean | undefined;
    rowId?: string | undefined;
} & React.HTMLAttributes<HTMLLIElement>;

export type TreeRowProps = {
    isExpanded?: boolean | undefined;
    isParent?: boolean | undefined;
    rowId?: string | undefined;
    onExpandClick?: ((...args: any[]) => any) | undefined;
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
