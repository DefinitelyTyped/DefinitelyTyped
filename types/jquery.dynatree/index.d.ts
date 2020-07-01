// Type definitions for jquery.dynatree 1.2.5
// Project: http://code.google.com/p/dynatree/
// Definitions by: François de Campredon <https://github.com/fdecampredon>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3


/// <reference types="jquery"/>
/// <reference types="jqueryui"/>

declare namespace JQueryUI {
    interface UI {
        dynatree: DynatreeNamespace
    }
}

interface JQuery {
    dynatree(options?: DynatreeOptions): DynaTree;
    dynatree(option?: string, ...rest: any[]): any;
}

interface DynaTree {
    activateKey(key: string): DynaTreeNode;
    count(): number;
    enable(): void;
    disable(): void;
    enableUpdate(enable: boolean): void;
    getActiveNode(): DynaTreeNode;
    getNodeByKey(key: string): DynaTreeNode;
    getPersistData(): any;
    getRoot(): DynaTreeNode;
    getSelectedNodes(stopOnParents: boolean): DynaTreeNode[];
    initialize(): void;
    isInitializing(): boolean;
    isReloading(): boolean;
    isUserEvent(): boolean;
    loadKeyPath(keyPath: string, callback: (node: DynaTreeNode, status: string) =>void ): void;
    reactivate(setFocus: boolean): void;
    redraw(): void;
    reload(): void;
    renderInvisibleNodes(): void;
    selectKey(key: string, flag: string): DynaTreeNode;
    serializeArray(stopOnParents: boolean): any[];
    toDict(includeRoot?: boolean): any;
    visit(fn: (node: DynaTreeNode) =>boolean, includeRoot?: boolean): void;
}


interface DynaTreeNode {
    data: DynaTreeDataModel;
    activate(): void;
    activateSilently(): void;
    addChild(nodeData: DynaTreeDataModel, beforeNode?: DynaTreeNode): void;
    addChild(nodeData: DynaTreeDataModel[], beforeNode?: DynaTreeNode): void;
    appendAjax(ajaxOptions: JQueryAjaxSettings): void;
    countChildren(): number;
    deactivate(): void;
    expand(flag: boolean): void;
    focus(): void;
    getChildren(): DynaTreeNode[];
    getEventTargetType(event: Event): string;
    getLevel(): number;
    getNextSibling(): DynaTreeNode;
    getParent(): DynaTreeNode;
    getPrevSibling(): DynaTreeNode;
    hasChildren(): boolean;
    isActive(): boolean;
    isChildOf(otherNode: DynaTreeNode): boolean;
    isDescendantOf(otherNode: DynaTreeNode): boolean;
    isExpanded(): boolean;
    isFirstSibling(): boolean;
    isFocused(): boolean;
    isLastSibling(): boolean;
    isLazy(): boolean;
    isLoading(): boolean;
    isSelected(): boolean;
    isStatusNode(): boolean;
    isVisible(): boolean;
    makeVisible(): boolean;
    move(targetNode: DynaTreeNode, mode: string): boolean;
    reload(force: boolean): void;
    reloadChildren(callback?: (node: DynaTreeNode, isOk: boolean) => any): void;
    remove(): void;
    removeChildren(): void;
    render(useEffects: boolean, includeInvisible: boolean): void;
    resetLazy(): void;
    scheduleAction(mode: string, ms: number): void;
    select(flag: boolean): void;
    setLazyNodeStatus(status: number): void;
    setTitle(title: string): void;
    sortChildren(cmp?: (a: DynaTreeNode, b: DynaTreeNode) =>number, deep?: boolean): void;
    toDict(recursive: boolean, callback?: (node: any) =>any): any;
    toggleExpand(): void;
    toggleSelect(): void;
    visit(fn: (node: DynaTreeNode) =>boolean, includeSelf: boolean): void;
    visitParents(fn: (node: DynaTreeNode) =>boolean, includeSelf: boolean): void;
}

interface DynatreeOptions {
    title?: string; // Tree's name (only used for debug outpu)
    minExpandLevel?: number; // 1: root node is not collapsible
    imagePath?: string; // Path to a folder containing icons. Defaults to 'skin/' subdirectory.
    children?: DynaTreeDataModel[]; // Init tree structure from this object array.
    initId?: string; // Init tree structure from a <ul> element with this ID.
    initAjax?: JQueryAjaxSettings; // Ajax options used to initialize the tree strucuture.
    autoFocus?: boolean; // Set focus to first child, when expanding or lazy-loading.
    keyboard?: boolean; // Support keyboard navigation.
    persist?: boolean; // Persist expand-status to a cookie
    autoCollapse?: boolean; // Automatically collapse all siblings, when a node is expanded.
    clickFolderMode?: number; // 1:activate, 2:expand, 3:activate and expand
    activeVisible?: boolean; // Make sure, active nodes are visible (expanded).
    checkbox?: boolean; // Show checkboxes.
    selectMode?: number; // 1:single, 2:multi, 3:multi-hier
    fx?: any; // Animations, e.g. null or { height: "toggle", duration: 200 }
    noLink?: boolean; // Use <span> instead of <a> tags for all nodes
    debugLevel?: number; // 0:quiet, 1:normal, 2:debug
    generateIds?: boolean; // Generate id attributes like <span id='dynatree-id-KEY'>
    idPrefix?: string; // Used to generate node id's like <span id="dynatree-id-<key>">.
    keyPathSeparator?: string; // Used by node.getKeyPath() and tree.loadKeyPath().
    cookieId?: string; // Choose a more unique name, to allow multiple trees.

    dnd?: DynaTreeDNDOptions;  // Drag'n'drop support
    ajaxDefaults?: DynaTreeAjaxOptions;// Used by initAjax option
    strings?: DynaTreeStringsOptions;
    cookie?: DynaTreeCookieOptions;
    // Class names used, when rendering the HTML markup.
    // Note: if only single entries are passed for options.classNames, all other
    // values are still set to default.
    classNames?: DynatreeClassNamesOptions;


    // Low level event handlers: onEvent(dtnode, event): return false, to stop default processing
    onClick?: (dtnode: DynaTreeNode, event: Event) =>boolean; // null: generate focus, expand, activate, select events.
    onDblClick?: (dtnode: DynaTreeNode, event: Event) =>boolean; // (No default actions.)
    onKeydown?: (dtnode: DynaTreeNode, event: Event) =>boolean; // null: generate keyboard navigation (focus, expand, activate).
    onKeypress?: (dtnode: DynaTreeNode, event: Event) =>boolean; // (No default actions.)
    onFocus?: (dtnode: DynaTreeNode, event: Event) =>boolean; // null: set focus to node.
    onBlur?: (dtnode: DynaTreeNode, event: Event) =>boolean; // null: remove focus from node.

    // Pre-event handlers onQueryEvent(flag, dtnode): return false, to stop processing
    onQueryActivate?: (flag: string, dtnode: DynaTreeNode) =>void; // Callback(flag, dtnode) before a node is (de)activated.
    onQuerySelect?: (flag: string, dtnode: DynaTreeNode) =>void;// Callback(flag, dtnode) before a node is (de)selected.
    onQueryExpand?: (flag: string, dtnode: DynaTreeNode) =>void;// Callback(flag, dtnode) before a node is expanded/collpsed.

    // High level event handlers
    onPostInit?: (isReloading: boolean, isError: boolean) =>void;// Callback(isReloading, isError) when tree was (re)loaded.
    onActivate?: (dtnode: DynaTreeNode) =>void; // Callback(dtnode) when a node is activated.
    onDeactivate?: (dtnode: DynaTreeNode) =>void; // Callback(dtnode) when a node is deactivated.
    onSelect?: (flag: string, dtnode: DynaTreeNode) =>void; // Callback(flag, dtnode) when a node is (de)selected.
    onExpand?: (flag: string, dtnode: DynaTreeNode) =>void; // Callback(flag, dtnode) when a node is expanded/collapsed.
    onLazyRead?: (dtnode: DynaTreeNode) =>void; // Callback(dtnode) when a lazy node is expanded for the first time.
    onCustomRender?: (dtnode: DynaTreeNode) =>void; // Callback(dtnode) before a node is rendered. Return a HTML string to override.
    onCreate?: (dtnode: DynaTreeNode, nodeSpan: any) =>void; // Callback(dtnode, nodeSpan) after a node was rendered for the first time.
    onRender?: (dtnode: DynaTreeNode, nodeSpan: any) =>void; // Callback(dtnode, nodeSpan) after a node was rendered.
    postProcess?: (data: any, dataType: any) =>void; // Callback(data, dataType) before an Ajax result is passed to dynatree.
}

interface DynaTreeDataModel {
    title: string; // (required) Displayed name of the node (html is allowed here)
    key?: string; // May be used with activate(), select(), find(), ...
    isFolder?: boolean; // Use a folder icon. Also the node is expandable but not selectable.
    isLazy?: boolean; // Call onLazyRead(), when the node is expanded for the first time to allow for delayed creation of children.
    tooltip?: string; // Show this popup text.
    href?: string; // Added to the generated <a> tag.
    icon?: string; // Use a custom image (filename relative to tree.options.imagePath). 'null' for default icon, 'false' for no icon.
    addClass?: string; // Class name added to the node's span tag.
    noLink?: boolean; // Use <span> instead of <a> tag for this node
    activate?: boolean; // Initial active status.
    focus?: boolean; // Initial focused status.
    expand?: boolean; // Initial expanded status.
    select?: boolean; // Initial selected status.
    hideCheckbox?: boolean; // Suppress checkbox display for this node.
    unselectable?: boolean; // Prevent selection.
    // The following attributes are only valid if passed to some functions:
    children?: DynaTreeDataModel[]; // Array of child nodes.
    // NOTE: we can also add custom attributes here.
    // This may then also be used in the onActivate(), onSelect() or onLazyTree() callbacks.
}

interface DynaTreeDNDOptions {
    autoExpandMS?: number; // Expand nodes after n milliseconds of hovering.
    preventVoidMoves?: boolean; // Prevent dropping nodes 'before self', etc.
    revert: boolean; // true: slide helper back to source if drop is rejected

    // Make tree nodes draggable:
    onDragStart?: (sourceNode: any) =>void; // Callback(sourceNode), return true, to enable dnd
    onDragStop?: (sourceNode: any) =>void; // Callback(sourceNode)
    // Make tree nodes accept draggables

    onDragEnter?: (targetNode: any, sourceNode: any) =>void; // Callback(targetNode, sourceNode)
    onDragOver?: (targetNode: any, sourceNode: any, hitMode: string) =>void;  // Callback(targetNode, sourceNode, hitMode)
    onDrop?: (targetNode: any, sourceNode: any, hitMode: string) =>void; // Callback(targetNode, sourceNode, hitMode)
    onDragLeave?: (targetNode: any, sourceNode: any) =>void; // Callback(targetNode, sourceNode)
}

interface DynaTreeCookieOptions {
    expires: any;
}

interface DynaTreeStringsOptions {
    loading?: string;
    loadError?: string;
}

interface DynaTreeAjaxOptions {

    cache?: boolean; // false: Append random '_' argument to the request url to prevent caching.
    timeout?: number; // >0: Make sure we get an ajax error for invalid URLs
    dataType?: string; // Expect json format and pass json object to callbacks.
}

interface DynatreeClassNamesOptions {
    container?: string;
    node?: string;
    folder?: string;

    empty?: string;
    vline?: string;
    expander?: string;
    connector?: string;
    checkbox?: string;
    nodeIcon?: string;
    title?: string;
    noConnector?: string;

    nodeError?: string;
    nodeWait?: string;
    hidden?: string;
    combinedExpanderPrefix?: string;
    combinedIconPrefix?: string;
    hasChildren?: string;
    active?: string;
    selected?: string;
    expanded?: string;
    lazy?: string;
    focused?: string;
    partsel?: string;
    lastsib?: string;
}

interface DynatreeNamespace {
    getNode(element: HTMLElement): DynaTreeNode;
    getPersistData(cookieId: string, cookieOpts: DynaTreeCookieOptions): any;
    version: number;
}
