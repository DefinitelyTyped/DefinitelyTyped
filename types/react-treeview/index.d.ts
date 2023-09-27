// Type definitions for react-treeview 0.4
// Project: https://github.com/chenglou/react-treeview
// Definitions by: Jay Anslow <https://github.com/janslow>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

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
