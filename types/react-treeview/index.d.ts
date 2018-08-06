// Type definitions for react-treeview 0.4
// Project: https://github.com/chenglou/react-treeview
// Definitions by: Jay Anslow <https://github.com/janslow>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { Component, HTMLAttributes } from 'react';

declare namespace TreeView {
  interface TreeProps extends HTMLAttributes<HTMLDivElement> {
    collapsed?: boolean;
    defaultCollapsed?: boolean;
    nodeLabel: React.ReactNode;
    itemClassName?: string;
    treeViewClassName?: string;
    childrenClassName?: string;
  }
}

declare class TreeView extends Component<TreeView.TreeProps, any> {
}

export = TreeView;
