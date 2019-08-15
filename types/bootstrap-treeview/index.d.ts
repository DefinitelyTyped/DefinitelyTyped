// Type definitions for bootstrap-treeview.js 1.20
// Project: https://github.com/jonmiles/bootstrap-treeview
// Definitions by: Jan Böhmer <https://github.com/jbtronics>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery"/>

interface BootstrapTreeViewNodeData {
    text?: string;
    icon?: string;
    selectedIcon?: string;
    color?: string;
    backColor?: string;
    href?: string;
    selectable?: boolean;
    nodeId?: number;
    state?: {
        checked: boolean;
        disabled: boolean;
        expanded: boolean;
        selected: boolean;
    };
    tags?: string[];
    nodes?: BootstrapTreeViewNodeData[];
}

interface BootstrapTreeViewOptions {
    data?: BootstrapTreeViewNodeData[];
    backColor?: string;
    borderColor?: string;
    checkedIcon?: string;
    collapseIcon?: string;
    color?: string;
    emptyIcon?: string;
    enableLinks?: boolean;
    expandIcon?: string;
    highlightSearchResults?: boolean;
    highlightSelected?: boolean;
    levels?: number;
    multiSelect?: boolean;
    nodeIcon?: string;
    onhoverColor?: string;
    selectedIcon?: string;
    searchResultBackColor?: string;
    searchResultColor?: string;
    selectedBackColor?: string;
    selectedColor?: string;
    showBorder?: boolean;
    showCheckbox?: boolean;
    showIcon?: boolean;
    showTags?: boolean;
    uncheckedIcon?: boolean;

    onNodeSelected?(event: any, node: BootstrapTreeViewNodeData): void;
    onNodeChecked?(event: any, node: BootstrapTreeViewNodeData): void;
    onNodeCollapsed?(event: any, node: BootstrapTreeViewNodeData): void;
    onNodeDisabled?(event: any, node: BootstrapTreeViewNodeData): void;
    onNodeEnabled?(event: any, node: BootstrapTreeViewNodeData): void;
    onNodeExpanded?(event: any, node: BootstrapTreeViewNodeData): void;
    onNodeUnchecked?(event: any, node: BootstrapTreeViewNodeData): void;
    onNodeUnselected?(event: any, node: BootstrapTreeViewNodeData): void;
    onSearchComplete?(event: any, node: BootstrapTreeViewNodeData): void;
    onSearchCleared?(event: any, node: BootstrapTreeViewNodeData): void;
}

interface JQuery {
    treeview(options: BootstrapTreeViewOptions): JQuery;
    treeview(method: string, ...args: any[]): JQuery;
}
