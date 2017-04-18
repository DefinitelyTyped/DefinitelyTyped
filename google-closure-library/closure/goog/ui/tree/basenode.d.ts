declare module goog {
    function require(name: 'goog.ui.tree.BaseNode'): typeof goog.ui.tree.BaseNode;
    function require(name: 'goog.ui.tree.BaseNode.EventType'): typeof goog.ui.tree.BaseNode.EventType;
}

declare module goog.ui.tree {

    /**
     * An abstract base class for a node in the tree.
     *
     * @param {string|!goog.html.SafeHtml} html The html content of the node label.
     * @param {Object=} opt_config The configuration for the tree. See
     *    {@link goog.ui.tree.BaseNode.defaultConfig}. If not specified the
     *    default config will be used.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
     * @constructor
     * @extends {goog.ui.Component}
     */
    class BaseNode extends goog.ui.Component {
        constructor(html: string|goog.html.SafeHtml, opt_config?: Object, opt_domHelper?: goog.dom.DomHelper);
        
        /**
         * Map of nodes in existence. Needed to route events to the appropriate nodes.
         * Nodes are added to the map at {@link #enterDocument} time and removed at
         * {@link #exitDocument} time.
         * @type {Object}
         * @protected
         */
        static allNodes: Object;
        
        /**
         * @deprecated Use {@link #removeChild}.
         */
        remove: any;
        
        /**
         * A default configuration for the tree.
         */
        static defaultConfig: any;
        
        /**
         * Adds roles and states.
         * @protected
         */
        initAccessibility(): void;
        
        /**
         * Adds a node as a child to the current node.
         * @param {goog.ui.tree.BaseNode} child The child to add.
         * @param {goog.ui.tree.BaseNode=} opt_before If specified, the new child is
         *    added as a child before this one. If not specified, it's appended to the
         *    end.
         * @return {!goog.ui.tree.BaseNode} The added child.
         */
        add(child: goog.ui.tree.BaseNode, opt_before?: goog.ui.tree.BaseNode): goog.ui.tree.BaseNode;
        
        /**
         * Removes a child. The caller is responsible for disposing the node.
         * @param {goog.ui.Component|string} childNode The child to remove. Must be a
         *     {@link goog.ui.tree.BaseNode}.
         * @param {boolean=} opt_unrender Unused. The child will always be unrendered.
         * @return {!goog.ui.tree.BaseNode} The child that was removed.
         * @override
         */
        removeChild(childNode: goog.ui.Component|string, opt_unrender?: boolean): goog.ui.tree.BaseNode;
        
        /**
         * Returns the tree.
         */
        getTree(): void;
        
        /**
         * Returns the depth of the node in the tree. Should not be overridden.
         * @return {number} The non-negative depth of this node (the root is zero).
         */
        getDepth(): number;
        
        /**
         * Returns true if the node is a descendant of this node
         * @param {goog.ui.tree.BaseNode} node The node to check.
         * @return {boolean} True if the node is a descendant of this node, false
         *    otherwise.
         */
        contains(node: goog.ui.tree.BaseNode): boolean;
        
        /**
         * @param {number} index 0-based index.
         * @return {goog.ui.tree.BaseNode} The child at the given index; null if none.
         */
        getChildAt(index: number): goog.ui.tree.BaseNode;
        
        /**
         * Returns the children of this node.
         * @return {!Array<!goog.ui.tree.BaseNode>} The children.
         */
        getChildren(): Array<goog.ui.tree.BaseNode>;
        
        /**
         * @return {goog.ui.tree.BaseNode} The first child of this node.
         */
        getFirstChild(): goog.ui.tree.BaseNode;
        
        /**
         * @return {goog.ui.tree.BaseNode} The last child of this node.
         */
        getLastChild(): goog.ui.tree.BaseNode;
        
        /**
         * @return {goog.ui.tree.BaseNode} The previous sibling of this node.
         */
        getPreviousSibling(): goog.ui.tree.BaseNode;
        
        /**
         * @return {goog.ui.tree.BaseNode} The next sibling of this node.
         */
        getNextSibling(): goog.ui.tree.BaseNode;
        
        /**
         * @return {boolean} Whether the node is the last sibling.
         */
        isLastSibling(): boolean;
        
        /**
         * @return {boolean} Whether the node is selected.
         */
        isSelected(): boolean;
        
        /**
         * Selects the node.
         */
        select(): void;
        
        /**
         * Originally it was intended to deselect the node but never worked.
         * @deprecated Use {@code tree.setSelectedItem(null)}.
         */
        deselect(): void;
        
        /**
         * Called from the tree to instruct the node change its selection state.
         * @param {boolean} selected The new selection state.
         * @protected
         */
        setSelectedInternal(selected: boolean): void;
        
        /**
         * @return {boolean} Whether the node is expanded.
         */
        getExpanded(): boolean;
        
        /**
         * Sets the node to be expanded internally, without state change events.
         * @param {boolean} expanded Whether to expand or close the node.
         */
        setExpandedInternal(expanded: boolean): void;
        
        /**
         * Sets the node to be expanded.
         * @param {boolean} expanded Whether to expand or close the node.
         */
        setExpanded(expanded: boolean): void;
        
        /**
         * Toggles the expanded state of the node.
         */
        toggle(): void;
        
        /**
         * Expands the node.
         */
        expand(): void;
        
        /**
         * Collapses the node.
         */
        collapse(): void;
        
        /**
         * Collapses the children of the node.
         */
        collapseChildren(): void;
        
        /**
         * Collapses the children and the node.
         */
        collapseAll(): void;
        
        /**
         * Expands the children of the node.
         */
        expandChildren(): void;
        
        /**
         * Expands the children and the node.
         */
        expandAll(): void;
        
        /**
         * Expands the parent chain of this node so that it is visible.
         */
        reveal(): void;
        
        /**
         * Sets whether the node will allow the user to collapse it.
         * @param {boolean} isCollapsible Whether to allow node collapse.
         */
        setIsUserCollapsible(isCollapsible: boolean): void;
        
        /**
         * @return {boolean} Whether the node is collapsible by user actions.
         */
        isUserCollapsible(): boolean;
        
        /**
         * Creates HTML for the node.
         * @return {!goog.html.SafeHtml}
         * @protected
         */
        toSafeHtml(): goog.html.SafeHtml;
        
        /**
         * @return {!goog.html.SafeHtml} The html for the row.
         * @protected
         */
        getRowSafeHtml(): goog.html.SafeHtml;
        
        /**
         * @return {string} The class name for the row.
         * @protected
         */
        getRowClassName(): string;
        
        /**
         * @return {!goog.html.SafeHtml} The html for the label.
         * @protected
         */
        getLabelSafeHtml(): goog.html.SafeHtml;
        
        /**
         * Returns the html that appears after the label. This is useful if you want to
         * put extra UI on the row of the label but not inside the anchor tag.
         * @return {string} The html.
         * @final
         */
        getAfterLabelHtml(): string;
        
        /**
         * Returns the html that appears after the label. This is useful if you want to
         * put extra UI on the row of the label but not inside the anchor tag.
         * @return {!goog.html.SafeHtml} The html.
         */
        getAfterLabelSafeHtml(): goog.html.SafeHtml;
        
        /**
         * Sets the html that appears after the label. This is useful if you want to
         * put extra UI on the row of the label but not inside the anchor tag.
         * @param {string} html The html.
         */
        setAfterLabelHtml(html: string): void;
        
        /**
         * Sets the html that appears after the label. This is useful if you want to
         * put extra UI on the row of the label but not inside the anchor tag.
         * @param {!goog.html.SafeHtml} html The html.
         */
        setAfterLabelSafeHtml(html: goog.html.SafeHtml): void;
        
        /**
         * @return {!goog.html.SafeHtml} The html for the icon.
         * @protected
         */
        getIconSafeHtml(): goog.html.SafeHtml;
        
        /**
         * Gets the calculated icon class.
         * @protected
         */
        getCalculatedIconClass(): void;
        
        /**
         * @return {!goog.html.SafeHtml} The source for the icon.
         * @protected
         */
        getExpandIconSafeHtml(): goog.html.SafeHtml;
        
        /**
         * @return {string} The class names of the icon used for expanding the node.
         * @protected
         */
        getExpandIconClass(): string;
        
        /**
         * @return {!goog.html.SafeStyle} The line style.
         */
        getLineStyle(): goog.html.SafeStyle;
        
        /**
         * @return {string} The background position style value.
         */
        getBackgroundPosition(): string;
        
        /**
         * @return {Element} The element for the tree node.
         * @override
         */
        getElement(): Element;
        
        /**
         * @return {Element} The row is the div that is used to draw the node without
         *     the children.
         */
        getRowElement(): Element;
        
        /**
         * @return {Element} The expanded icon element.
         * @protected
         */
        getExpandIconElement(): Element;
        
        /**
         * @return {Element} The icon element.
         * @protected
         */
        getIconElement(): Element;
        
        /**
         * @return {Element} The label element.
         */
        getLabelElement(): Element;
        
        /**
         * @return {Element} The element after the label.
         */
        getAfterLabelElement(): Element;
        
        /**
         * @return {Element} The div containing the children.
         * @protected
         */
        getChildrenElement(): Element;
        
        /**
         * Sets the icon class for the node.
         * @param {string} s The icon class.
         */
        setIconClass(s: string): void;
        
        /**
         * Gets the icon class for the node.
         * @return {string} s The icon source.
         */
        getIconClass(): string;
        
        /**
         * Sets the icon class for when the node is expanded.
         * @param {string} s The expanded icon class.
         */
        setExpandedIconClass(s: string): void;
        
        /**
         * Gets the icon class for when the node is expanded.
         * @return {string} The class.
         */
        getExpandedIconClass(): string;
        
        /**
         * Sets the text of the label.
         * @param {string} s The plain text of the label.
         */
        setText(s: string): void;
        
        /**
         * Returns the text of the label. If the text was originally set as HTML, the
         * return value is unspecified.
         * @return {string} The plain text of the label.
         */
        getText(): string;
        
        /**
         * Sets the html of the label.
         * @param {string} s The html string for the label.
         */
        setHtml(s: string): void;
        
        /**
         * Sets the HTML of the label.
         * @param {!goog.html.SafeHtml} html The HTML object for the label.
         */
        setSafeHtml(html: goog.html.SafeHtml): void;
        
        /**
         * Returns the html of the label.
         * @return {string} The html string of the label.
         * @final
         */
        getHtml(): string;
        
        /**
         * Returns the html of the label.
         * @return {!goog.html.SafeHtml} The html string of the label.
         */
        getSafeHtml(): goog.html.SafeHtml;
        
        /**
         * Sets the text of the tooltip.
         * @param {string} s The tooltip text to set.
         */
        setToolTip(s: string): void;
        
        /**
         * Returns the text of the tooltip.
         * @return {?string} The tooltip text.
         */
        getToolTip(): string;
        
        /**
         * Updates the row styles.
         */
        updateRow(): void;
        
        /**
         * Updates the expand icon of the node.
         */
        updateExpandIcon(): void;
        
        /**
         * Handles mouse down event.
         * @param {!goog.events.BrowserEvent} e The browser event.
         * @protected
         */
        onMouseDown(e: goog.events.BrowserEvent): void;
        
        /**
         * Handles a click event.
         * @param {!goog.events.BrowserEvent} e The browser event.
         * @protected
         * @suppress {underscore|visibility}
         */
        onClick_(e: goog.events.BrowserEvent): void;
        
        /**
         * Handles a double click event.
         * @param {!goog.events.BrowserEvent} e The browser event.
         * @protected
         * @suppress {underscore|visibility}
         */
        onDoubleClick_(e: goog.events.BrowserEvent): void;
        
        /**
         * Handles a key down event.
         * @param {!goog.events.BrowserEvent} e The browser event.
         * @return {boolean} The handled value.
         * @protected
         */
        onKeyDown(e: goog.events.BrowserEvent): boolean;
        
        /**
         * @return {goog.ui.tree.BaseNode} The last shown descendant.
         */
        getLastShownDescendant(): goog.ui.tree.BaseNode;
        
        /**
         * @return {goog.ui.tree.BaseNode} The next node to show or null if there isn't
         *     a next node to show.
         */
        getNextShownNode(): goog.ui.tree.BaseNode;
        
        /**
         * @return {goog.ui.tree.BaseNode} The previous node to show.
         */
        getPreviousShownNode(): goog.ui.tree.BaseNode;
        
        /**
         * @return {*} Data set by the client.
         * @deprecated Use {@link #getModel} instead.
         */
        getClientData(): any;
        
        /**
         * Sets client data to associate with the node.
         * @param {*} data The client data to associate with the node.
         * @deprecated Use {@link #setModel} instead.
         */
        setClientData(data: any): void;
        
        /**
         * @return {Object} The configuration for the tree.
         */
        getConfig(): Object;
        
        /**
         * Internal method that is used to set the tree control on the node.
         * @param {goog.ui.tree.TreeControl} tree The tree control.
         */
        setTreeInternal(tree: goog.ui.tree.TreeControl): void;
    }
}

declare module goog.ui.tree.BaseNode {

    /**
     * The event types dispatched by this class.
     * @enum {string}
     */
    type EventType = string;
    var EventType: {
        [index: string]: EventType;
        // BEFORE_EXPAND: EventType;
        // EXPAND: EventType;
        // BEFORE_COLLAPSE: EventType;
        // COLLAPSE: EventType;
    };
}
