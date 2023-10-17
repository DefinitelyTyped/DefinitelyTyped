/// <reference types="jquery"/>

interface BootstrapTreeViewNodeData {
    text?: string | undefined;
    icon?: string | undefined;
    selectedIcon?: string | undefined;
    color?: string | undefined;
    backColor?: string | undefined;
    href?: string | undefined;
    selectable?: boolean | undefined;
    nodeId?: number | undefined;
    state?: {
        checked: boolean;
        disabled: boolean;
        expanded: boolean;
        selected: boolean;
    } | undefined;
    tags?: string[] | undefined;
    nodes?: BootstrapTreeViewNodeData[] | undefined;
}

interface BootstrapTreeViewOptions {
    data?: BootstrapTreeViewNodeData[] | undefined;
    backColor?: string | undefined;
    borderColor?: string | undefined;
    checkedIcon?: string | undefined;
    collapseIcon?: string | undefined;
    color?: string | undefined;
    emptyIcon?: string | undefined;
    enableLinks?: boolean | undefined;
    expandIcon?: string | undefined;
    highlightSearchResults?: boolean | undefined;
    highlightSelected?: boolean | undefined;
    levels?: number | undefined;
    multiSelect?: boolean | undefined;
    nodeIcon?: string | undefined;
    onhoverColor?: string | undefined;
    selectedIcon?: string | undefined;
    searchResultBackColor?: string | undefined;
    searchResultColor?: string | undefined;
    selectedBackColor?: string | undefined;
    selectedColor?: string | undefined;
    showBorder?: boolean | undefined;
    showCheckbox?: boolean | undefined;
    showIcon?: boolean | undefined;
    showTags?: boolean | undefined;
    uncheckedIcon?: boolean | undefined;

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
