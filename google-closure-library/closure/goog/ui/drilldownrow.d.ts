declare module goog {
    function require(name: 'goog.ui.DrilldownRow'): typeof goog.ui.DrilldownRow;
}

declare module goog.ui {

    /**
     * Builds a DrilldownRow component, which can overlay a tree
     * structure onto sections of an HTML table.
     *
     * @param {Object=} opt_properties This parameter can contain:
     *   contents:  if present, user data identifying
     *     the information loaded into the row and its children.
     *   loaded: initializes the isLoaded property, defaults to true.
     *   expanded: DrilldownRow expanded or not, default is true.
     *   html: String of HTML, relevant and required for DrilldownRows to be
     *     added as children.  Ignored when decorating an existing table row.
     *   decorator: Function that accepts one DrilldownRow argument, and
     *     should customize and style the row.  The default is to call
     *     goog.ui.DrilldownRow.decorator.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
     * @constructor
     * @extends {goog.ui.Component}
     * @final
     */
    class DrilldownRow extends goog.ui.Component {
        constructor(opt_properties?: Object, opt_domHelper?: goog.dom.DomHelper);
        
        /**
         * Example object with properties of the form accepted by the class
         * constructor.  These are educational and show the compiler that
         * these properties can be set so it doesn't emit warnings.
         */
        static sampleProperties: any;
        
        /**
         * A top-level DrilldownRow decorates a TR element.
         *
         * @param {Element} node The element to test for decorability.
         * @return {boolean} true iff the node is a TR.
         * @override
         */
        canDecorate(node: Element): boolean;
        
        /**
         * Child drilldowns are rendered when needed.
         *
         * @param {goog.ui.Component} child New DrilldownRow child to be added.
         * @param {number} index position to be occupied by the child.
         * @param {boolean=} opt_render true to force immediate rendering.
         * @override
         */
        addChildAt(child: goog.ui.Component, index: number, opt_render?: boolean): void;
        
        /**
         * Finds the numeric index of this child within its parent Component.
         * Throws an exception if it has no parent.
         *
         * @return {number} index of this within the children of the parent Component.
         */
        findIndex(): number;
        
        /**
         * Returns the expanded state of the DrilldownRow.
         *
         * @return {boolean} true iff this is expanded.
         */
        isExpanded(): boolean;
        
        /**
         * Sets the expanded state of this DrilldownRow: makes all children
         * displayable or not displayable corresponding to the expanded state.
         *
         * @param {boolean} expanded whether this should be expanded or not.
         */
        setExpanded(expanded: boolean): void;
        
        /**
         * Returns this DrilldownRow's level in the tree.  Top level is 1.
         *
         * @return {number} depth of this DrilldownRow in its tree of drilldowns.
         */
        getDepth(): number;
        
        /**
         * This static function is a default decorator that adds HTML at the
         * beginning of the first cell to display indentation and an expander
         * image; sets up a click handler on the toggler; initializes a class
         * for the row: either goog-drilldown-expanded or
         * goog-drilldown-collapsed, depending on the initial state of the
         * DrilldownRow; and sets up a click event handler on the toggler
         * element.
         *
         * This creates a DIV with class=toggle.  Your application can set up
         * CSS style rules something like this:
         *
         * tr.goog-drilldown-expanded .toggle {
         *   background-image: url('minus.png');
         * }
         *
         * tr.goog-drilldown-collapsed .toggle {
         *   background-image: url('plus.png');
         * }
         *
         * These background images show whether the DrilldownRow is expanded.
         *
         * @param {goog.ui.DrilldownRow} selfObj DrilldownRow to be decorated.
         */
        static decorate(selfObj: goog.ui.DrilldownRow): void;
    }
}
