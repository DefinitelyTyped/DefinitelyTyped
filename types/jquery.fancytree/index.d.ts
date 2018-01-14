// Type definitions for jquery.fancytree 2.7.0
// Project: https://github.com/mar10/fancytree
// Definitions by: Peter Palotas <https://github.com/alphaleonis>
//                 Mahdi Abedi <https://github.com/abedi-ir>
//                 Nitecube <https://github.com/Nitecube>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3


///<reference types="jquery" />
///<reference types="jqueryui" />

declare namespace JQueryUI {
    interface UI {
        fancytree: Fancytree.FancytreeStatic;
    }
}

interface JQuery {
    fancytree(options?: Fancytree.FancytreeOptions): Fancytree.Fancytree;
    fancytree(option?: string, ...rest: any[]): any;
}

declare namespace Fancytree {
    interface Fancytree {
        $div: JQuery;
        widget: any; //JQueryUI.Widget;
        rootNode: FancytreeNode;
        $container: JQuery;
        focusNode: FancytreeNode;
        options: FancytreeOptions;

        /** Activate node with a given key and fire focus and
         * activate events. A previously activated node will be
         * deactivated. If activeVisible option is set, all parents
         * will be expanded as necessary. Pass key = false, to deactivate
         * the current node only.
         *
         * @returns {FancytreeNode} activate node (null, if not found)
         */
        activateKey(key: string | boolean): FancytreeNode;

        /** (experimental)
         *
         * @returns resolved, when all patches have been applied
         */
        applyPatch(patchList: NodePatch[]): JQueryPromise<any>;

        /** [ext-clones] Replace a refKey with a new one. */
        changeRefKey(oldRefKey: string, newRefKey: string): void;

        /** [ext-persist] Remove persistence cookies of the given type(s).
         *  Called like $("#tree").fancytree("getTree").clearCookies("active expanded focus selected"); */
        clearCookies(): void;

        /** [ext-filter] Reset the filter.  */
        clearFilter(): void;

        /** Return the number of nodes. */
        count(): number;

        /** Write to browser console if debugLevel >= 2 (prepending tree name)  */
        debug(msg: any): void;

        /** [ext-filter] Dimm or hide whole branches.
         * @returns {integer} count
         */
        filterBranches(filter: string): number;

        /** [ext-filter] Dimm or hide whole branches.
         * @returns {integer} count
         */
        filterBranches(filter: (node: FancytreeNode) => boolean): number;

        /** [ext-filter] Dimm or hide nodes.
         * @returns {integer} count
         */
        filterNodes(filter: string, leavesOnly?: boolean): number;

        /** [ext-filter] Dimm or hide nodes.
         * @returns {integer} count
         */
        filterNodes(filter: (node: FancytreeNode) => boolean, leavesOnly?: boolean): number;

        /** Find the next visible node that starts with `match`, starting at `startNode` and wrap-around at the end.
         *
         * @returns matching node or null
         */
        findNextNode(match: string, startNode?: FancytreeNode): FancytreeNode;

        /** Find the next visible node that starts with `match`, starting at `startNode` and wrap-around at the end.
         *
         * @returns matching node or null
         */
        findNextNode(match: (node: FancytreeNode) => boolean, startNode?: FancytreeNode): FancytreeNode;

        /** Find all nodes that matches condition.
         * 
         * @returns array of nodes (may be empty)
         */
        findAll(match: string|((node: FancytreeNode) => boolean|undefined)): FancytreeNode[];

        /** Generate INPUT elements that can be submitted with html forms. In selectMode 3 only the topmost selected nodes are considered. */
        generateFormElements(selected?: boolean, active?: boolean): void;

        /** Return the currently active node or null.  */
        getActiveNode(): FancytreeNode;

        /** Return the first top level node if any (not the invisible root node). */
        getFirstChild(): FancytreeNode;

        /** Return node that has keyboard focus.
         *
         * @param ifTreeHasFocus (default: false) (not yet implemented)
         */
        getFocusNode(ifTreeHasFocus?: boolean): FancytreeNode;

        /** Return node with a given key or null if not found.
         *
         * @param searchRoot (optional) only search below this node.
         */
        getNodeByKey(key: string, searchRoot?: FancytreeNode): FancytreeNode;

        /** [ext-clones] Return all nodes with a given refKey (null if not found).
         *
         * @param rootNode optionally restrict results to descendants of this node.
         */
        getNodesByRef(refKey: string, rootNode?: FancytreeNode): FancytreeNode[];

        /** [ext-persist] Return persistence information from cookies Called like $("#tree").fancytree("getTree").getPersistData(); */
        getPersistData(): void;

        /** Return the invisible system root node.  */
        getRootNode(): FancytreeNode;

        /** Return an array of selected nodes.
         *
         * @param stopOnParents only return the topmost selected node (useful with selectMode 3)
         */
        getSelectedNodes(stopOnParents?: boolean): FancytreeNode[];

        /** Return true if the tree control has keyboard focus */
        hasFocus(): boolean;

        /** Write to browser console if debugLevel >= 1 (prepending tree name)  */
        info(msg: any): void;

        /**  [ext-edit] Check if any node in this tree in edit mode. */
        isEditing(): FancytreeNode;

        /** Make sure that a node with a given ID is loaded, by traversing - and loading - its parents. This method is ment for lazy hierarchies. A callback is executed for every node as we go.
         *
         * @param keyPathList one or more key paths  (e.g. '/3/2_1/7')
         * @param callback callback(node, status) is called for every visited node ('loading', 'loaded', 'ok', 'error')
         */
        loadKeyPath(keyPathList: string[], callback: (node: FancytreeNode, status: string) => void): JQueryPromise<any>;

        /** Make sure that a node with a given ID is loaded, by traversing - and loading - its parents. This method is ment for lazy hierarchies. A callback is executed for every node as we go.
         *
         * @param keyPath a key path (e.g. '/3/2_1/7')
         * @param callback callback(node, status) is called for every visited node ('loading', 'loaded', 'ok', 'error')
         */
        loadKeyPath(keyPath: string, callback: (node: FancytreeNode, status: string) => void): JQueryPromise<any>;

        /** Re-fire beforeActivate and activate events. */
        reactivate(): void;

        /** Reload tree from source and return a promise.
         *
         * @param source optional new source (defaults to initial source data)
         */
        reload(source?: any): JQueryPromise<any>;

        /** Render tree (i.e. create DOM elements for all top-level nodes).
         *
         * @param force create DOM elements, even is parent is collapsed (default = false)
         * @param deep (default = false)
         */
        render(force?: boolean, deep?: boolean): void;

        /** @param flag (default = true) */
        setFocus(flag?: boolean): void;

        /** Return all nodes as nested list of NodeData.
         *
         * @param callback Called for every node
         * @param includeRoot Returns the hidden system root node (and its children) (default = false)
         */
        toDict(includeRoot?: boolean, callback?: (node: FancytreeNode) => void): any;

        /** Call fn(node) for all nodes.
         *
         * @param fn the callback function. Return false to stop iteration, return "skip" to skip this node and children only.
         * @returns false, if the iterator was stopped.
         */
        visit(fn: (node: FancytreeNode) => any): boolean;

        /** Write warning to browser console (prepending tree info) */
        warn(msg: any): void;

        /** Temporarily suppress rendering to improve performance on bulk-updates.
        *
        * @param {boolean} flag
        * @returns {boolean} previous status
        * @since 2.19 */
        enableUpdate(enabled: boolean): void;
    }

    /** A FancytreeNode represents the hierarchical data model and operations. */
    interface FancytreeNode {
        //#region Properties
        /** The tree instance */
        tree: Fancytree;
        /** The parent node */
        parent: FancytreeNode;
        /** Node id (must be unique inside the tree) */
        key: string;
        /** Display name (may contain HTML) */
        title: string;
        /** Contains all extra data that was passed on node creation */
        data: any;
        /** Array of child nodes. For lazy nodes, null or undefined means 'not yet loaded'. Use an empty array to define a node that has no children. */
        children: FancytreeNode[];
        /** Use isExpanded(), setExpanded() to access this property. */
        expanded: boolean;
        /** Addtional CSS classes, added to the node's `<span>`. */
        extraClasses: string;
        /** Folder nodes have different default icons and click behavior. Note: Also non-folders may have children. */
        folder: boolean;
        /** null or type of temporarily generated system node like 'loading', or 'error'. */
        statusNodeType: string;
        /** True if this node is loaded on demand, i.e. on first expansion. */
        lazy: boolean;
        /** Alternative description used as hover banner */
        tooltip: string;
        /** Outer element of single nodes */
        span: HTMLElement;
        /** Outer element of single nodes for table extension */
        tr: HTMLElement;
        //#endregion

        //#region Methods
        /**
         * Append (or insert) a list of child nodes.
         *
         * @param children array of child node definitions (also single child accepted)
         * @param insertBefore child node to insert nodes before. If omitted, the new children is appended.
         * @returns The first child added.
         */
        addChildren(children: Fancytree.NodeData[], insertBefore?: FancytreeNode): FancytreeNode;
        /**
         * Append (or insert) a list of child nodes.
         *
         * @param children array of child node definitions (also single child accepted)
         * @param insertBefore key of the child node to insert nodes before. If omitted, the new children is appended.
         * @returns The first child added.
         */
        addChildren(children: Fancytree.NodeData[], insertBefore?: string): FancytreeNode;
        /**
         * Append (or insert) a list of child nodes.
         *
         * @param children array of child node definitions (also single child accepted)
         * @param insertBefore index of the child node to insert nodes before. If omitted, the new children is appended.
         * @returns The first child added.
         */
        addChildren(children: Fancytree.NodeData[], insertBefore?: number): FancytreeNode;
        /**
         * Append (or insert) a single child node.
         *
         * @param child node to add
         * @param insertBefore child node to insert this node before. If omitted, the new child is appended.
         * @returns The child added.
         */
        addChildren(child: Fancytree.NodeData, insertBefore?: FancytreeNode): FancytreeNode;
        /**
         * Append (or insert) a single child node.
         *
         * @param child node to add
         * @param insertBefore key of the child node to insert this node before. If omitted, the new child is appended.
         * @returns The child added.
         */
        addChildren(child: Fancytree.NodeData, insertBefore?: string): FancytreeNode;
        /**
         * Append (or insert) a single child node.
         *
         * @param child node to add
         * @param insertBefore index of the child node to insert this node before. If omitted, the new child is appended.
         * @returns The child added.
         */
        addChildren(child: Fancytree.NodeData, insertBefore?: number): FancytreeNode;


        /** Add class to node's span tag and to .extraClasses.
         * @param className class name
         */
        addClass(className: string): void;

        /** Append or prepend a node, or append a child node. This a convenience function that calls addChildren()
         *
         * @param mode 'before', 'after', 'firstChild', or 'child' ('over' is a synonym for 'child') (default='child')
         * @returns new node.
         */
        addNode(node: NodeData, mode?: string): FancytreeNode;

        /** Modify existing child nodes. */
        applyPatch(patch: NodePatch): JQueryPromise<any>;

        /** Collapse all sibling nodes. */
        collapseSiblings(): JQueryPromise<any>;

        /** Copy this node as sibling or child of `node`.
         *
         * @param node source node
         * @param mode 'before' | 'after' | 'child' (default='child')
         * @param map callback function(NodeData) that could modify the new node
         * @returns new node.
         */
        copyTo(node: FancytreeNode, mode?: string, map?: (node: NodeData) => void) : FancytreeNode;

        /** Count direct and indirect children.
         *
         * @param deep pass 'false' to only count direct children. (default=true)
         */
        countChildren(deep?: boolean): number;

        /** Write to browser console if debugLevel >= 2 (prepending node info) */
        debug(msg: any): void;

        /** [ext-edit] Create a new child or sibling node and start edit mode.
         *
         * @param mode 'before', 'after', or 'child' (default='child')
         * @param init NodeData (or simple title string)
         */
        editCreateNode(mode?: string, init?: Object): void;

        /** [ext-edit] Stop inline editing.
         *
         * @param applyChanges false: cancel edit, true: save (if modified)
         */
        editEnd(applyChanges: boolean): void;

        /** [ext-edit] Start inline editing of current node title.  */
        editStart(): void;

        /** Find all nodes that contain `match` in the title.
         *
         * @param match string to search for
         */
        findAll(match: string): FancytreeNode[];

        /** Find all nodes that contain `match` in the title.
          *
          * @param match a function that returns `true` if a node is matched.
          */
        findAll(match: (node: FancytreeNode) => boolean): FancytreeNode[];

        /** Find first node that contains `match` in the title (not including self).
         *
         * @param match string to search for
         */
        findFirst(match: string): FancytreeNode;

        /** Find first node that contains `match` in the title (not including self).
          *
          * @param match a function that returns `true` if a node is matched.
          */
        findFirst(match: (node: FancytreeNode) => boolean): FancytreeNode;

        /** Fix selection status, after this node was (de)selected in multi-hier mode. This includes (de)selecting all children. */
        fixSelection3AfterClick(): void;

        /** Fix selection status for multi-hier mode. Only end-nodes are considered to update the descendants branch and parents. Should be called after this node has loaded new children or after children have been modified using the API. */
        fixSelection3FromEndNodes(): void;

        /** Update node data. If dict contains 'children', then also replace the hole sub tree.  */
        fromDict(dict: NodeData): void;

        /** Return the list of child nodes (undefined for unexpanded lazy nodes). */
        getChildren(): FancytreeNode[];

        /** [ext-clones] Return a list of clone-nodes or null. */
        getCloneList(includeSelf?: boolean): FancytreeNode[];

        /** Return the first child node or null. */
        getFirstChild(): FancytreeNode;

        /** Return the 0-based child index. */
        getIndex(): number;

        /** Return the hierarchical child index (1-based, e.g. '3.2.4').  */
        getIndexHier(): string;

        /** Return the parent keys separated by options.keyPathSeparator, e.g. "id_1/id_17/id_32". */
        getKeyPath(excludeSelf: boolean): string;

        /** Return the last child of this node or null. */
        getLastChild(): FancytreeNode;

        /** Return node depth. 0: System root node, 1: visible top-level node, 2: first sub-level, ... . */
        getLevel(): number;

        /** Return the successor node (under the same parent) or null. */
        getNextSibling(): FancytreeNode;

        /** Return the parent node (null for the system root node).  */
        getParent(): FancytreeNode;

        /**Return an array of all parent nodes (top-down).
         *
         * @param includeRoot Include the invisible system root node. (default=false)
         * @param includeSelf Include the node itself (default=false).
          */
        getParentList(includeRoot: boolean, includeSelf: boolean): FancytreeNode[];

        /** Return the predecessor node (under the same parent) or null. */
        getPrevSibling(): FancytreeNode;

        /** Return true if node has children. Return undefined if not sure, i.e. the node is lazy and not yet loaded). */
        hasChildren(): boolean;

        /** Return true if node has keyboard focus. */
        hasFocus(): boolean;

        /** Write to browser console if debugLevel >= 1 (prepending node info)  */
        info(msg: string): void;

        /** Return true if node is active (see also FancytreeNode.isSelected). */
        isActive(): boolean;

        /** Return true if node is a direct child of otherNode. */
        isChildOf(otherNode: FancytreeNode): boolean;

        /** [ext-clones] Return true if this node has at least another clone with same refKey. */
        isClone(): boolean;

        /** Return true, if node is a direct or indirect sub node of otherNode. */
        isDescendantOf(otherNode: FancytreeNode): boolean;

        /** [ext-edit] Check if this node is in edit mode. */
        isEditing(): boolean;

        /** Return true if node is expanded.  */
        isExpanded(): boolean;

        /** Return true if node is the first node of its parent's children.  */
        isFirstSibling(): boolean;

        /** Return true if node is a folder, i.e. has the node.folder attribute set. */
        isFolder(): boolean;

        /** Return true if node is the last node of its parent's children.  */
        isLastSibling(): boolean;

        /** Return true if node is lazy (even if data was already loaded)  */
        isLazy(): boolean;

        /** Return true if node is lazy and loaded. For non-lazy nodes always return true.  */
        isLoaded(): boolean;

        /**Return true if children are currently beeing loaded, i.e. a Ajax request is pending.  */
        isLoading(): boolean;

        /** Return true if this is the (invisible) system root node. */
        isRootNode(): boolean;

        /** Return true if node is selected, i.e. has a checkmark set (see also FancytreeNode#isActive). */
        isSelected(): boolean;

        /** Return true if this node is a temporarily generated system node like 'loading', or 'error' (node.statusNodeType contains the type). */
        isStatusNode(): boolean;

        /** Return true if this a top level node, i.e. a direct child of the (invisible) system root node. */
        isTopLevel(): boolean;

        /** Return true if node is lazy and not yet loaded. For non-lazy nodes always return false. */
        isUndefined(): boolean;

        /** Return true if all parent nodes are expanded. Note: this does not check whether the node is scrolled into the visible part of the screen. */
        isVisible(): boolean;

        /** Load all children of a lazy node if neccessary. The *expanded* state is maintained.
         *
         * @param forceReload Pass true to discard any existing nodes before.
         */
        load(forceReload?: boolean): JQueryPromise<any>;

        /** Expand all parents and optionally scroll into visible area as neccessary. Promise is resolved, when lazy loading and animations are done.
         *
         * @param opts passed to `setExpanded()`. Defaults to {noAnimation: false, noEvents: false, scrollIntoView: true}
         */
        makeVisible(opts?: Object): JQueryPromise<any>;

        /** Move this node to targetNode.
         *
         * @param mode 'child': append this node as last child of targetNode.
         *                       This is the default. To be compatble with the D'n'd
         *                       hitMode, we also accept 'over'.
         *              'before': add this node as sibling before targetNode.
         *              'after': add this node as sibling after targetNode.
         *
         * @param map optional callback(FancytreeNode) to allow modifcations
         */
        moveTo(targetNode: FancytreeNode, mode: string, map?: (node: FancytreeNode) => void): void;

        /** Set focus relative to this node and optionally activate.
         *
         * @param where The keyCode that would normally trigger this move, e.g. `$.ui.keyCode.LEFT` would collapse the node if it is expanded or move to the parent oterwise.
         * @param activate (default=true)
         */
        navigate(where: number, activate?: boolean): JQueryPromise<any>;

        /** Remove this node (not allowed for system root).  */
        remove(): void;

        /** Remove childNode from list of direct children. */
        removeChild(childNode: FancytreeNode): void;

        /** Remove all child nodes and descendents. This converts the node into a leaf.
         * If this was a lazy node, it is still considered 'loaded'; call node.resetLazy() in order to trigger lazyLoad on next expand.
         */
        removeChildren(): void;

        /** Remove class from node's span tag and .extraClasses.
         * @param className class name
         */
        removeClass(className: string): void;

        /** This method renders and updates all HTML markup that is required to display this node in its current state.
         *
         * @param force re-render, even if html markup was already created
         * @param deep  also render all descendants, even if parent is collapsed
         */
        render(force?: boolean, deep?: boolean): void;

        /** Update element's CSS classes according to node state. */
        renderStatus(): void;

        /** Create HTML markup for the node's outer (expander, checkbox, icon, and title).  */
        renderTitle(): void;

        /** [ext-clones] Update key and/or refKey for an existing node. */
        reRegister(key: string, refKey: string): boolean;

        /** Remove all children, collapse, and set the lazy-flag, so that the lazyLoad event is triggered on next expand. */
        resetLazy(): void;

        /** Schedule activity for delayed execution (cancel any pending request). scheduleAction('cancel') will only cancel a pending request (if any). */
        scheduleAction(mode: string, ms: number) : void;

        /**
         * @param effects animation options.
         * @param options {topNode: null, effects: ..., parent: ...} this node will remain visible in any case, even if `this` is outside the scroll pane.
         */
        scrollIntoView(effects?: boolean, options?: Object): JQueryPromise<any>;

        /**
         * @param effects animation options.
         * @param options {topNode: null, effects: ..., parent: ...} this node will remain visible in any case, even if `this` is outside the scroll pane.
         */
        scrollIntoView(effects?: Object, options?: Object): JQueryPromise<any>;

        /**
         * @param flag pass false to deactivate
         * @param opts additional options. Defaults to {noEvents: false}
         */
        setActive(flag?: boolean, opts?: Object): JQueryPromise<any>;

        /**
         * @param flag pass false to collapse.
         * @param opts additional options. Defaults to {noAnimation:false, noEvents:false}
         */
        setExpanded(flag?: boolean, opts?: Object): JQueryPromise<any>;

        /**
         * Set keyboard focus to this node.
         *
         * @param flag pass false to blur.
         */
        setFocus(flag?: boolean): void;

        /**
         * Select this node, i.e. check the checkbox.
         *
         * @param flag pass false to deselect.
         */
        setSelected(flag?: boolean): void;

        /**
         * Mark a lazy node as 'error', 'loading', or 'ok'.
         *
         * @param status 'error', 'ok'
         */
        setStatus(status: string, message?: string, details?: string): void;

        /** Rename this node. */
        setTitle(title: string): void;

        /**
         * Sort child list by title.
         *
         * @param cmp custom compare function(a, b) that returns -1, 0, or 1 (defaults to sort by title).
         * @param deep pass true to sort all descendant nodes
         */
        sortChildren(cmp?: (a: FancytreeNode, b: FancytreeNode) => number, deep?: boolean): void;

        /**
         * Convert node (or whole branch) into a plain object. The result is compatible with node.addChildren().
         *
         * @param recursive include child nodes.
         * @param callback callback(dict) is called for every node, in order to allow modifications
         */
        toDict(recursive?: boolean, callback?: (dict: NodeData) => void): NodeData;

        /** Set, clear, or toggle class of node's span tag and .extraClasses.
         * @param {string} className class name (separate multiple classes by space)
         * @param {boolean} [flag] true/false to add/remove class. If omitted, class is toggled.
         * @return true if a class was added
         */
        toggleClass(className: string, flag?: boolean): boolean;

        /** Flip expanded status. */
        toggleExpanded(): void;

        /** Flip selection status. */
        toggleSelected(): void;

        /**
         * Call fn(node) for all child nodes.
         * Stop iteration, if fn() returns false. Skip current branch,
         * if fn() returns "skip". Return false if iteration was stopped.
         *
         * @param fn the callback function. Return false to stop iteration, return "skip" to skip this node and its children only.
         * @param includeSelf (default=false)
         */
        visit(fn: (node: FancytreeNode) => any, includeSelf?: boolean): boolean;

        /**
         * Call fn(node) for all child nodes and recursively load lazy children.
         * Note: If you need this method, you probably should consider to review your architecture! Recursivley loading nodes is
         * a perfect way for lazy programmers to flood the server with requests ;-)
         *
         * @param fn the callback function. Return false to stop iteration, return "skip" to skip this node and its children only.
         * @param includeSelf (default=false)
         */
        visitAndLoad(fn: (node: FancytreeNode) => any, includeSelf?: boolean): JQueryPromise<any>;

        /**
         * Call fn(node) for all parent nodes, bottom-up, including invisible system root.
         * Stop iteration, if fn() returns false.
         * Return false if iteration was stopped.
         *
         * @param fn the callback function. Return false to stop iteration, return "skip" to skip this node and its children only.
         * @param includeSelf (default=false)
         */
        visitParents(fn: (node: FancytreeNode) => any, includeSelf?: boolean): boolean;

        /**
         * Write warning to browser console (prepending node info)
         */
        warn(msg: any): void;
        //#endregion
    }

    enum FancytreeClickFolderMode {
        activate = 1,
        expand = 2,
        activate_and_expand = 3,
        activate_dblclick_expands = 4
    }

    enum FancytreeSelectMode {
        single = 1,
        multi = 2,
        mutlti_hier = 3
    }

    /** Context object passed to events and hook functions. */
    interface EventData {
        /** The tree instance */
        tree: Fancytree;
        /** The jQuery UI tree widget */
        widget: any;    // JQueryUI.Widget;
        /** Shortcut to tree.options */
        options: FancytreeOptions;
        /** The jQuery Event that initially triggered this call */
        originalEvent: JQueryEventObject;
        /** The node that this call applies to (`null` for tree events) */
        node: FancytreeNode;
        /** (output parameter) Event handlers can return values back to the
          * caller. Used by `lazyLoad`, `postProcess`, ... */
        result: any;
        /** (only for click and dblclick events) 'title' | 'prefix' | 'expander' | 'checkbox' | 'icon' */
        targetType: string;
        /** (only for postProcess event) Original ajax response */
        response: any;
    }

    /** The `this` context of any event function is set to tree's the HTMLDivElement  */
    interface FancytreeEvents {
        /** 'data.node' was deactivated. */
        activate?(event: JQueryEventObject, data: EventData): void;
        /** Return false to prevent default processing */
        beforeActivate?(event: JQueryEventObject, data: EventData): boolean;
        /** Return `false` to prevent default processing */
        beforeExpand?(event: JQueryEventObject, data: EventData): boolean;
        /** Return `false` to prevent default processing */
        beforeSelect?(event: JQueryEventObject, data: EventData): boolean;
        /** `data.node` lost keyboard focus */
        blur?(event: JQueryEventObject, data: EventData): void;
        /** `data.tree` lost keyboard focus */
        blurTree?(event: JQueryEventObject, data: EventData): void;
        /** `data.node` was clicked. `data.targetType` contains the region ("title", "expander", ...). Return `false` to prevent default processing, i.e. activating, etc. */
        click?(event: JQueryEventObject, data: EventData): boolean;
        /** `data.node` was collapsed */
        collapse?(event: JQueryEventObject, data: EventData): void;
        /** Widget was created (called only once, even if re-initialized). */
        create?(event: JQueryEventObject, data: EventData): void;
        /** Allow tweaking and binding, after node was created for the first time (NOTE: this event is only available as callback, but not for bind()) */
        createNode?(event: JQueryEventObject, data: EventData): void;
        /** `data.node` was double-clicked. `data.targetType` contains the region ("title", "expander", ...). Return `false` to prevent default processing, i.e. expanding, etc. */
        dblclick?(event: JQueryEventObject, data: EventData): boolean;
        /** `data.node` was deactivated */
        deactivate?(event: JQueryEventObject, data: EventData): void;
        /** `data.node` was expanded */
        expand?(event: JQueryEventObject, data: EventData): void;
        /** `data.node` received keyboard focus */
        focus?(event: JQueryEventObject, data: EventData): void;
        /**`data.tree` received keyboard focus */
        focusTree?(event: JQueryEventObject, data: EventData): void;
        /** Widget was (re-)initialized. */
        init?(event: JQueryEventObject, data: EventData): void;
        /** `data.node` received key. `event.which` contains the key. Return `false` to prevent default processing, i.e. navigation. Call `data.result = "preventNav";` to prevent navigation but still allow default handling inside embedded input controls. */
        keydown?(event: JQueryEventObject, data: EventData): boolean;
        /** (currently unused) */
        keypress?(event: JQueryEventObject, data: EventData): void;
        /** `data.node` is a lazy node that is expanded for the first time. The new child data must be returned in the `data.result` property (see `source` option for available formats). */
        lazyLoad?(event: JQueryEventObject, data: EventData): void;
        /** Node data was loaded, i.e. `node.nodeLoadChildren()` finished */
        loadChildren?(event: JQueryEventObject, data: EventData): void;
        /** A load error occured. Return `false` to prevent default processing. */
        loadError?(event: JQueryEventObject, data: EventData): boolean;
        /** Allows to modify the ajax response. */
        postProcess?(event: JQueryEventObject, data: EventData): void;
        /** `data.node` was removed (NOTE: this event is only available as callback, but not for bind()) */
        removeNode?(event: JQueryEventObject, data: EventData): void;
        /** (used by table extension) */
        renderColumns?(event: JQueryEventObject, data: EventData): void;
        /** Allow tweaking after node state was rendered (NOTE: this event is only available as callback, but not for bind()) */
        renderNode?(event: JQueryEventObject, data: EventData): void;
        /** Allow replacing the `<span class='fancytree-title'>` markup (NOTE: this event is only available as callback, but not for bind()) */
        renderTitle?(event: JQueryEventObject, data: EventData): void;
        /** ext-persist has expanded, selected, and activated the previous state */
        restore?(event: JQueryEventObject, data: EventData): void;
        /** `data.node` was selected */
        select?(event: JQueryEventObject, data: EventData): void;
        /** Enable RTL version, default is false */
        rtl?: boolean;
    }

    interface FancytreeOptions extends FancytreeEvents {
        /** Make sure that the active node is always visible, i.e. its parents are expanded (default: true). */
        activeVisible?: boolean;
        /** Default options for ajax requests. */
        ajax?: Object;
        /** (default: false) Add WAI-ARIA attributes to markup */
        aria?: boolean;
        /** Activate a node when focused with the keyboard (default: true) */
        autoActivate?: boolean;
        /** Automatically collapse all siblings, when a node is expanded (default: false). */
        autoCollapse?: boolean;
        /** Scroll node into visible area, when focused by keyboard (default: false). */
        autoScroll?: boolean;
        /** Display checkboxes to allow selection (default: false) */
        checkbox?: boolean|string|((event: JQueryEventObject, data: EventData) => boolean);
        /** Defines what happens, when the user click a folder node. (default: activate_dblclick_expands) */
        clickFolderMode?: FancytreeClickFolderMode;
        /** 0..2 (null: use global setting $.ui.fancytree.debugInfo) */
        debugLevel?: number;
        /** callback(node) is called for new nodes without a key. Must return a new unique key. (default null: generates default keys like that: "_" + counter) */
        defaultKey?: (node: FancytreeNode) => string;
        /** Accept passing ajax data in a property named `d` (default: true). */
        enableAspx?: boolean;
        /** List of active extensions (default: []) */
        extensions?: string[];
        /** Set focus when node is checked by a mouse click (default: false) */
        focusOnSelect?: boolean;
        /** Add `id="..."` to node markup (default: true). */
        generateIds?: boolean;
        /** Display node icons (default: true) */
        icons?: boolean;
        /** (default: "ft_") */
        idPrefix?: string;
        /** Path to a folder containing icons (default: null, using 'skin/' subdirectory). */
        imagePath?: string;
        /** Support keyboard navigation (default: true). */
        keyboard?: boolean;
        /** (default: "/") */
        keyPathSeparator?: string;
        /** 2: top-level nodes are not collapsible (default: 1) */
        minExpandLevel?: number;
        /** navigate to next node by typing the first letters (default: false) */
        quicksearch?: boolean;
        /** optional margins for node.scrollIntoView() (default: {top: 0, bottom: 0}) */
        scrollOfs?: Object;
        /** scrollable container for node.scrollIntoView() (default: $container) */
        scrollParent?: JQuery;
        /** default: multi_hier */
        selectMode?: FancytreeSelectMode;
        /** Used to Initialize the tree. */
        source?: any;
        /** Translation table */
        strings?: Object;
        /** Add tabindex='0' to container, so tree can be reached using TAB */
        tabbable?: boolean;
        /** Add tabindex='0' to node title span, so it can receive keyboard focus */
        titlesTabbable?: boolean;
        /** Animation options, false:off (default: { effect: "blind", options: {direction: "vertical", scale: "box"}, duration: 200 }) */
        toggleEffect?: JQueryUI.EffectOptions;

        /** (dynamic Option)Prevent (de-)selection using mouse or keyboard. */
        unselectable?: boolean|((event: JQueryEventObject, data: Fancytree.EventData) => boolean|undefined);
        /** (dynamic Option)Ignore this node when calculating the partsel status of parent nodes in selectMode 3 propagation. */
        unselectableIgnore?: boolean|((event: JQueryEventObject, data: Fancytree.EventData) => boolean|undefined);
        /** (dynamic Option)Use this as constant selected value (overriding selectMode 3 propagation). */
        unselectableStatus?: boolean|((event: JQueryEventObject, data: Fancytree.EventData) => boolean|undefined);
    }

    /** Data object passed to FancytreeNode() constructor. Note: typically these attributes are accessed by meber methods, e.g. `node.isExpanded()` and `node.setSelected(false)`.  */
    interface NodeData {
        /** node text (may contain HTML tags) */
        title: string;
        icon?: boolean|string;
        /** unique key for this node (auto-generated if omitted) */
        key?: string;
        /** (reserved) */
        refKey?: string;
        expanded?: boolean;
        /** (initialization only, but will not be stored with the node). */
        active?: boolean;
        /** (initialization only, but will not be stored with the node). */
        focus?: boolean;
        folder?: boolean;
        hideCheckbox?: boolean;
        lazy?: boolean;
        selected?: boolean;
        unselectable?: boolean;
        /** optional array of child nodes */
        children?: NodeData[];
        tooltip?: string;
        /** class names added to the node markup (separate with space) */
        extraClasses?: string;
        /** all properties from will be copied to `node.data` */
        data?: Object;

        /** Will be added as title attribute of the node's icon span,thus enabling a tooltip. */
        iconTooltip?: string;

        /** If set, make this node a status node. Values: 'error', 'loading', 'nodata', 'paging'. */
        statusNodeType?: string;

        /** Made available as node.type. */
        type?: string;

        /** Ignore this node when calculating the partsel status of parent nodes in selectMode 3 propagation. */
        unselectableIgnore?: boolean;

        /** Use this as constant selected value(overriding selectMode 3 propagation). */
        unselectableStatus?: boolean;
    }

    /** Data object similar to NodeData, but with additional options.
      * May be passed to FancytreeNode#applyPatch (Every property that is omitted (or set to undefined) will be ignored)  */
    interface NodePatch {
        /** (not yet implemented) */
        appendChildren?: NodeData;
        /** (not yet implemented) */
        replaceChildren?: NodeData;
        /** (not yet implemented) */
        insertChildren?: NodeData;
    }

    /** May be passed to Fancytree#applyPatch. */
    interface TreePatch {
        [key: string]: NodePatch;
    }

    interface FancytreeStatic {
        buildType: string;
        debugLevel: number;
        version: string;

        /** Throw an error if condition fails (debug method).  */
        assert(cond: boolean, msg: string): void;

        /** Return a function that executes *fn* at most every *timeout* ms. */
        debounce<T extends (...args: any[]) => void>(timeout: number, fn: T, invokeAsap?: boolean, ctx?: any): T;

        debug(msg: string): void;

        error(msg: string): void;

        escapeHtml(s: string): string;

        getEventTarget(event: Event): Object;

        getEventTargetType(event: Event): string;

        getNode(el: JQuery): FancytreeNode;
        getNode(el: Event): FancytreeNode;
        getNode(el: Element): FancytreeNode;

        info(msg: string): void;

        /** Convert a keydown event to a string like 'ctrl+a', 'ctrl+shift+f2'.  */
        keyEventToString(event: Event): string;

        /** Parse tree data from HTML markup */
        parseHtml($ul: JQuery): NodeData[];

        /** Add Fancytree extension definition to the list of globally available extensions. */
        registerExtension(definition: Object): void;

        unescapeHtml(s: string): string;

        warn(msg: string): void;
    }
}

