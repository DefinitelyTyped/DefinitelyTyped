declare module goog {
    function require(name: 'goog.ui.TableSorter'): typeof goog.ui.TableSorter;
    function require(name: 'goog.ui.TableSorter.EventType'): typeof goog.ui.TableSorter.EventType;
}

declare module goog.ui {

    /**
     * A table sorter allows for sorting of a table by column.  This component can
     * be used to decorate an already existing TABLE element with sorting
     * features.
     *
     * The TABLE should use a THEAD containing TH elements for the table column
     * headers.
     *
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper, used for
     *     document interaction.
     * @constructor
     * @extends {goog.ui.Component}
     */
    class TableSorter extends goog.ui.Component {
        constructor(opt_domHelper?: goog.dom.DomHelper);
        
        /**
         * Sets the row index (in <thead>) to be used for sorting.
         * By default, the first row (index 0) is used.
         * Must be called before decorate() is called.
         * @param {number} index The row index.
         */
        setSortableHeaderRowIndex(index: number): void;
        
        /**
         * @return {number} The current sort column of the table, or -1 if none.
         */
        getSortColumn(): number;
        
        /**
         * @return {boolean} Whether the last sort was in reverse.
         */
        isSortReversed(): boolean;
        
        /**
         * @return {function(*, *) : number} The default sort function to be used by
         *     all columns.
         */
        getDefaultSortFunction(): (arg0: any, arg1: any) => number;
        
        /**
         * Sets the default sort function to be used by all columns.  If not set
         * explicitly, this defaults to numeric sorting.
         * @param {function(*, *) : number} sortFunction The new default sort function.
         */
        setDefaultSortFunction(sortFunction: (arg0: any, arg1: any) => number): void;
        
        /**
         * Gets the sort function to be used by the given column.  Returns the default
         * sort function if no sort function is explicitly set for this column.
         * @param {number} column The column index.
         * @return {function(*, *) : number} The sort function used by the column.
         */
        getSortFunction(column: number): (arg0: any, arg1: any) => number;
        
        /**
         * Set the sort function for the given column, overriding the default sort
         * function.
         * @param {number} column The column index.
         * @param {function(*, *) : number} sortFunction The new sort function.
         */
        setSortFunction(column: number, sortFunction: (arg0: any, arg1: any) => number): void;
        
        /**
         * Sort the table contents by the values in the given column.
         * @param {number} column The column to sort by.
         * @param {boolean=} opt_reverse Whether to sort in reverse.
         * @return {boolean} Whether the sort was executed.
         */
        sort(column: number, opt_reverse?: boolean): boolean;
        
        /**
         * Disables sorting on the specified column
         * @param {*} a First sort value.
         * @param {*} b Second sort value.
         * @return {number} Negative if a < b, 0 if a = b, and positive if a > b.
         */
        static noSort(a: any, b: any): number;
        
        /**
         * A numeric sort function.  NaN values (or values that do not parse as float
         * numbers) compare equal to each other and greater to any other number.
         * @param {*} a First sort value.
         * @param {*} b Second sort value.
         * @return {number} Negative if a < b, 0 if a = b, and positive if a > b.
         */
        static numericSort(a: any, b: any): number;
        
        /**
         * Alphabetic sort function.
         * @param {*} a First sort value.
         * @param {*} b Second sort value.
         * @return {number} Negative if a < b, 0 if a = b, and positive if a > b.
         */
        static alphaSort(a: any, b: any): number;
        
        /**
         * Returns a function that is the given sort function in reverse.
         * @param {function(*, *) : number} sortFunction The original sort function.
         * @return {function(*, *) : number} A new sort function that reverses the
         *     given sort function.
         */
        static createReverseSort(sortFunction: (arg0: any, arg1: any) => number): (arg0: any, arg1: any) => number;
    }
}

declare module goog.ui.TableSorter {

    /**
     * Table sorter events.
     * @enum {string}
     */
    type EventType = string;
    var EventType: {
        [index: string]: EventType;
        // BEFORESORT: EventType;
        // SORT: EventType;
    };
}
