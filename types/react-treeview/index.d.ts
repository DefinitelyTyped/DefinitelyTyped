import { Component, HTMLAttributes } from "react";

declare namespace TreeView {
    interface TreeProps extends HTMLAttributes<HTMLDivElement> {
        collapsed?: boolean | undefined;
        defaultCollapsed?: boolean | undefined;
        nodeLabel: React.ReactNode;
        itemClassName?: string | undefined;
        treeViewClassName?: string | undefined;
        childrenClassName?: string | undefined;
    }
}

declare class TreeView extends Component<TreeView.TreeProps, any> {
}

export = TreeView;
