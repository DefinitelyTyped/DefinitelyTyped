// These are very definitely preliminary. Please feel free to improve.

// Changelog:
// 8/11/2015 ui-grid  v3.0.3
//   Extensive plugin support added (Plugin specific API, ColumnDef, GridOptions, GridRow, Constants).
//   Added docs for all existing interfaces.
//   Fixed a few incorrect interfaces, updated interfaces to reflect latest version.
//   Did some cleanup... Moved all plugins into their own modules
// 7/8/2015 ui-grid v3.0.0-rc.22-482dc67
//   Added primary interfaces for row, column, api, grid, columnDef, and gridOptions.  Needs more tests!

/// <reference types="jquery" />
/// <reference types="angular" />

import * as ng from "angular";

export = uiGrid;
export as namespace uiGrid;

declare namespace uiGrid {
    export interface IUiGridConstants {
        LOG_DEBUG_MESSAGES: boolean;
        LOG_WARN_MESSAGES: boolean;
        LOG_ERROR_MESSAGES: boolean;
        CUSTOM_FILTERS: RegExp;
        COL_FIELD: RegExp;
        MODEL_COL_FIELD: RegExp;
        TOOLTIP: RegExp;
        DISPLAY_CELL_TEMPLATE: RegExp;
        TEMPLATE_REGEXP: RegExp;
        FUNC_REGEXP: RegExp;
        DOT_REGEXP: RegExp;
        APOS_REGEXP: RegExp;
        BRACKET_REGEXP: RegExp;
        COL_CLASS_PREFIX: string;
        events: {
            GRID_SCROLL: string;
            COLUMN_MENU_SHOWN: string;
            ITEM_DRAGGING: string;
            COLUMN_HEADER_CLICK: string;
        };
        keymap: {
            TAB: number;
            STRG: number;
            CAPSLOCK: number;
            CTRL: number;
            CTRLRIGHT: number;
            CTRLR: number;
            SHIFT: number;
            RETURN: number;
            ENTER: number;
            BACKSPACE: number;
            BCKSP: number;
            ALT: number;
            ALTR: number;
            ALTRIGHT: number;
            SPACE: number;
            WIN: number;
            MAC: number;
            FN: number;
            PG_UP: number;
            PG_DOWN: number;
            UP: number;
            DOWN: number;
            LEFT: number;
            RIGHT: number;
            ESC: number;
            DEL: number;
            F1: number;
            F2: number;
            F3: number;
            F4: number;
            F5: number;
            F6: number;
            F7: number;
            F8: number;
            F9: number;
            F10: number;
            F11: number;
            F12: number;
        };
        ASC: string;
        DESC: string;
        filter: {
            STARTS_WITH: number;
            ENDS_WITH: number;
            EXACT: number;
            CONTAINS: number;
            GREATER_THAN: number;
            GREATER_THAN_OR_EQUAL: number;
            LESS_THAN: number;
            LESS_THAN_OR_EQUAL: number;
            NOT_EQUAL: number;
            SELECT: string;
            INPUT: string;
        };
        scrollDirection: {
            UP: string;
            DOWN: string;
            LEFT: string;
            RIGHT: string;
            NONE: string;
        };
        aggregationTypes: {
            sum: number;
            count: number;
            avg: number;
            min: number;
            max: number;
        };
        CURRENCY_SYMBOLS: Array<string>;
        dataChange: {
            ALL: string;
            EDIT: string;
            ROW: string;
            COLUMN: string;
            OPTIONS: string;
        };
        scrollbars: {
            NEVER: number;
            ALWAYS: number;
            WHEN_NEEDED: number;
        };
    }
    export type IGridInstance = IGridInstanceOf<any>;
    export interface IGridInstanceOf<TEntity> {
        /**
         * adds a row header column to the grid
         * @param colDef The column definition
         * @param order Number that indicates where the column should be placed in the grid.
         * @param stopColumnBuild Prevents the buildColumn callback from being triggered. This is useful to improve performance of the grid during initial load.
         */
        addRowHeaderColumn(colDef: IColumnDefOf<TEntity>, order?: number, stopColumnBuild?: boolean): void;
        /**
         * uses the first row of data to assign colDef.type for any types not defined.
         */
        assignTypes(): void;
        /**
         * Populates columnDefs from the provided data
         * @param rowBuilder function to be called
         */
        buildColumnDefsFromData(rowBuilder: IRowBuilder<TEntity>): void;
        /**
         * creates GridColumn objects from the columnDefinition.
         * Calls each registered columnBuilder to further process the column
         * @param options An object containing options to use when building columns
         *        * orderByColumnDefs: defaults to false.  When true, buildColumns will order existing columns
         *        according to the order within the column definitions
         * @returns A promise to load any needed column resources
         */
        buildColumns(options: IBuildColumnsOptions): ng.IPromise<any>;
        /**
         * calls each styleComputation function
         */
        buildStyles(): void;
        /**
         * Calls the callbacks based on the type of data change that has occurred.
         * Always calls the ALL callbacks, calls the ROW, EDIT, COLUMN and OPTIONS callbacks
         * if the event type is matching, or if the type is ALL.
         * @param type the type of event that occurred - one of the uiGridConstants.dataChange values
         *        (ALL, ROW, EDIT, COLUMN, OPTIONS
         */
        callDataChangeCallbacks(type: number): void;
        /**
         * Clears all filters and optionally refreshes the visible rows.
         * @param [refreshRows=true] Refresh the rows?
         * @param [clearConditions=true] Clear conditions?
         * @param [clearFlags=true] Clear flags?
         * @returns If refreshRows is true, returns a promise of the rows refreshing
         */
        clearAllFilters(refreshRows: boolean, clearConditions: boolean, clearFlags: boolean): ng.IPromise<any>;
        /**
         * refreshes the grid when a column refresh is notified, which triggers handling of the visible flag.
         * This is called on uiGridConstants.dataChange.COLUMN, and is registered as a dataChangeCallback in grid.js
         * @param name column name
         */
        columnRefreshCallback(name: string): void;
        /**
         * creates the left render container if it doesn't already exist
         */
        createLeftContainer(): void;
        /**
         * creates the right render container if it doesn't already exist
         */
        createRightContainer(): void;
        /**
         * returns the first GridRow who has an key that is equal to comparator
         * so for Example if isInEntity == false then it does this check: row[key] === comparator
         * if isInEntity == true then it does this check: row.entity[key] === comparator
         * @param isInEntity if true then key is in entity else it's directly in row
         * @param key the key to look for
         * @param comparator the value that key should have
         * @param lookInRows the rows to look in - if not provided then looks in grid.rows
         */
        findRowByKey(
            isInEntity: boolean,
            key: string | number,
            comparator: any,
            rows?: Array<IGridRowOf<TEntity>>,
        ): IGridRowOf<TEntity>;
        /**
         * sets isScrollingHorizontally to true and sets it to false in a debounced function
         */
        flagScrollingHorizontally(): void;
        /**
         * sets isScrollingVertically to true and sets it to false in a debounced function
         */
        flagScrollingVertically(): void;
        /**
         * Gets the displayed value of a cell after applying any the cellFilter
         * @param row Row to access
         * @param col Column to access
         * @returns Cell display value
         */
        getCellDisplayValue(row: IGridRowOf<TEntity>, col: IGridColumnOf<TEntity>): string;
        /**
         * Gets the displayed value of a cell
         * @param row Row to access
         * @param col Column to access
         * @returns Cell value
         */
        getCellValue(row: IGridRowOf<TEntity>, col: IGridColumnOf<TEntity>): any;
        /**
         * returns a grid colDef for the column name
         * @param name Column name
         * @returns The column definition
         */
        getColDef(name: string): IColumnDefOf<TEntity>;
        /**
         * returns a grid column by name
         * @param name Column name
         * @returns The column
         */
        getColumn(name: string): IGridColumnOf<TEntity>;
        /**
         * Return the columns that the grid is currently being sorted by
         * @returns the columns that the grid is currently being sorted by
         */
        getColumnSorting(): Array<IGridColumnOf<TEntity>>;
        /**
         * Returns the $parse-able accessor for a column within its $scope
         * @param col Column object
         * @returns $parse-able accessor for a column within its $scope
         */
        getGridQualifiedColField(col: IGridColumnOf<TEntity>): string;
        /**
         * returns all columns except for rowHeader columns
         * @returns All data columns
         */
        getOnlyDataColumns(): Array<IGridColumnOf<TEntity>>;
        /**
         * returns the GridRow that contains the rowEntity
         * @param rowEntity the gridOptionms.data array element instance
         * @param rows The rows to look in.  if not provided then it looks in grid.rows
         */
        getRow(rowEntity: TEntity, rows?: Array<IGridRowOf<TEntity>>): IGridRowOf<TEntity>;
        /**
         * returns all GridRows who have an key that is equal to comparator
         * so for Example if isInEntity == false then it does this check: row[key] === comparator
         * if isInEntity == true then it does this check: row.entity[key] === comparator
         * @param isInEntity if true then key is in entity else it's directly in row
         * @param key the key to look for
         * @param comparator the value that key should have
         * @param rows The rows to look in.  if not provided then it looks in grid.rows
         */
        getRowsByKey(
            isInEntity: boolean,
            key: string | number,
            comparator: any,
            rows?: Array<IGridRowOf<TEntity>>,
        ): IGridRowOf<TEntity>;
        /**
         * Triggered when the browser window resizes; automatically resizes the grid
         * @param $event Resize event
         */
        handleWindowResize($event: ng.IAngularEvent): void;
        /**
         * returns true if leftContainer exists
         * @returns container exists?
         */
        hasLeftContainer(): boolean;
        /**
         * returns true if rightContainer exists
         * @returns container exists?
         */
        hasRightContainer(): boolean;
        /**
         * returns true if leftContainer has columns
         * @returns container has columns
         */
        hasLeftContainerColumns(): boolean;
        /**
         * returns true if rightContainer has columns
         * @returns container has columns
         */
        hasRightContainerColumns(): boolean;
        /**
         * Is grid right to left
         * @returns true if grid is RTL
         */
        isRTL(): boolean;
        /**
         * Checks if column is a row header
         * @param column The column
         * @returns true if the column is a row header
         */
        isRowHeaderColumn(column: IGridColumnOf<TEntity>): boolean;
        /**
         * creates or removes GridRow objects from the newRawData array.  Calls each registered
         * rowBuilder to further process the row
         *
         * This method aims to achieve three things:
         * 1. the resulting rows array is in the same order as the newRawData, we'll call
         * rowsProcessors immediately after to sort the data anyway
         * 2. if we have row hashing available, we try to use the rowHash to find the row
         * 3. no memory leaks - rows that are no longer in newRawData need to be garbage collected
         *
         * The basic logic flow makes use of the newRawData, oldRows and oldHash, and creates
         * the newRows and newHash
         *
         * Rows are identified using the hashKey if configured.  If not configured, then rows
         * are identified using the gridOptions.rowEquality function
         * @param newRawData The new grid data
         * @return Promise which resolves when the rows have been created or removed
         */
        modifyRows(newRawData: Array<TEntity>): ng.IPromise<any>;
        /**
         * Notify the grid that a data or config change has occurred,
         * where that change isn't something the grid was otherwise noticing.  This
         * might be particularly relevant where you've changed values within the data
         * and you'd like cell classes to be re-evaluated, or changed config within
         * the columnDef and you'd like headerCellClasses to be re-evaluated.
         * @param type one of the uiGridConstants.dataChange values [ALL, ROW, EDIT, COLUMN], which tells
         * us which refreshes to fire
         */
        notifyDataChange(type: string): void;
        /**
         * precompiles all cell templates
         */
        precompileCellTemplates(): void;
        /**
         * processes all RowBuilders for the gridRow
         * @param gridRow reference to gridRow
         * @returns the gridRow with all additional behavior added
         */
        processRowBuilders(gridRow: IGridRowOf<TEntity>): IGridRowOf<TEntity>;
        /**
         * calls the row processors, specifically
         * intended to reset the sorting when an edit is called,
         * registered as a dataChangeCallback on uiGridConstants.dataChange.EDIT
         * @param name column name
         */
        processRowsCallback(name: string): void;
        /**
         * queues a grid refresh, a way of debouncing all the refreshes we might otherwise issue
         */
        queueGridRefresh(): void;
        /**
         * queues a grid refreshCanvas, a way of debouncing all the refreshes we might otherwise issue
         */
        queueRefresh(): void;
        /**
         * Redraw the rows and columns based on our current scroll position
         * @param [rowsAdded] Optional to indicate rows are added and the scroll percentage must be
         *        recalculated
         */
        redrawCanvas(rowsAdded?: boolean): void;
        /**
         * Refresh the rendered grid on screen.
         * The refresh method re-runs both the columnProcessors and the
         * rowProcessors, as well as calling refreshCanvas to update all
         * the grid sizing.  In general you should prefer to use queueGridRefresh
         * instead, which is basically a debounced version of refresh.
         *
         * If you only want to resize the grid, not regenerate all the rows
         * and columns, you should consider directly calling refreshCanvas instead.
         * @param rowsAltered Optional flag for refreshing when the number of rows has changed
         */
        refresh(rowsAltered?: boolean): void;
        /**
         * Builds all styles and recalculates much of the grid sizing
         * @param buildStyles optional parameter.  Use TBD
         * @returns promise that is resolved when the canvas
         *          has been refreshed
         */
        refreshCanvas(buildStyles?: boolean): ng.IPromise<any>;
        /**
         * Refresh the rendered rows on screen?  Note: not functional at present
         * @returns promise that is resolved when render completes?
         */
        refreshRows(): ng.IPromise<any>;
        /**
         * When the build creates columns from column definitions, the columnbuilders will be called to add
         * additional properties to the column.
         * @param columnBuilder function to be called
         */
        registerColumnBuilder(columnBuilder: IColumnBuilder<TEntity>): void;
        /**
         * Register a "columns processor" function. When the columns are updated,
         * the grid calls each registered "columns processor", which has a chance
         * to alter the set of columns, as long as the count is not modified.
         * @param columnProcessor column processor function, which
         *        is run in the context of the grid (i.e. this for the function will be the grid), and
         *        which must return an updated renderedColumnsToProcess which can be passed to the next processor
         *        in the chain
         * @param priority the priority of this processor.  In general we try to do them in 100s to leave room
         * for other people to inject columns processors at intermediate priorities.
         * Lower priority columnsProcessors run earlier.priority
         */
        registerColumnsProcessor(columnProcessor: IColumnProcessor<TEntity>, priority: number): void;
        /**
         * When a data change occurs, the data change callbacks of the specified type
         * will be called.  The rules are:
         *
         * - when the data watch fires, that is considered a ROW change (the data watch only notices
         *   added or removed rows)
         * - when the api is called to inform us of a change, the declared type of that change is used
         * - when a cell edit completes, the EDIT callbacks are triggered
         * - when the columnDef watch fires, the COLUMN callbacks are triggered
         * - when the options watch fires, the OPTIONS callbacks are triggered
         *
         * For a given event:
         * - ALL calls ROW, EDIT, COLUMN, OPTIONS and ALL callbacks
         * - ROW calls ROW and ALL callbacks
         * - EDIT calls EDIT and ALL callbacks
         * - COLUMN calls COLUMN and ALL callbacks
         * - OPTIONS calls OPTIONS and ALL callbacks
         *
         * @param callback function to be called
         * @param types the types of data change you want to be informed of.  Values from
         * the uiGridConstants.dataChange values ( ALL, EDIT, ROW, COLUMN, OPTIONS ).  Optional and defaults to
         * ALL
         * @returns deregister function - a function that can be called to deregister this callback
         */
        registerDataChangeCallback(callback: (grid: IGridInstanceOf<TEntity>) => void, types?: Array<string>): Function;
        /**
         * When the build creates rows from gridOptions.data, the rowBuilders will be called to add
         * additional properties to the row.
         * @param rowBuilder Function to be called
         */
        registerRowBuilder(rowBuilder: IRowBuilder<TEntity>): void;
        /**
         * Register a "rows processor" function. When the rows are updated,
         * the grid calls each registered "rows processor", which has a chance
         * to alter the set of rows (sorting, etc) as long as the count is not
         * modified.
         *
         * @param rowProcessor rows processor function, which
         * is run in the context of the grid (i.e. this for the function will be the grid), and must
         * return the updated rows list, which is passed to the next processor in the chain
         * @param priority the priority of this processor.
         *        In general we try to do them in 100s to leave room for other people to inject rows processors at
         *        intermediate priorities.  Lower priority rowsProcessors run earlier. At present all rows visible
         *        is running at 50, filter is running at 100, sort is at 200, grouping at 400, selectable rows at
         *        500, pagination at 900 (pagination will generally want to be last)
         */
        registerRowsProcessor(rowProcessor: IRowProcessor<TEntity>, priority: number): void;
        /**
         * registered a styleComputation function
         *
         * If the function returns a value it will be appended into the grid's `<style>` block
         * @param styleComputation function
         */
        registerStyleComputation(styleComputation: ($scope: ng.IScope) => string): void;
        /**
         * Remove a registered rows processor
         * @param rows processor function
         */
        removeRowsProcessor(rows: IRowProcessor<TEntity>): void;
        /**
         * Return the columns that the grid is currently being sorted by
         * @param [excludedColumn] Optional GridColumn to exclude from having its sorting reset
         */
        resetColumnSorting(excludedColumn: IGridColumnOf<TEntity>): void;
        /**
         * Scroll the grid such that the specified
         * row and column is in view
         * @param rowEntity gridOptions.data[] array element to make visible
         * @param colDef to make visible
         * @returns a promise that is resolved after any scrolling is finished
         */
        scrollTo(rowEntity?: TEntity, colDef?: IColumnDefOf<TEntity>): ng.IPromise<any>;
        /**
         * Scrolls the grid to make a certain row and column combo visible,
         * in the case that it is not completely visible on the screen already.
         * @param gridRow row to make visible
         * @param gridCol column to make visible
         * @returns a promise that is resolved when scrolling is complete
         */
        scrollToIfNecessary(gridRow: IGridRowOf<TEntity>, gridCol: IGridColumnOf<TEntity>): ng.IPromise<any>;
        /**
         * Set the sorting on a given column, optionally resetting any existing sorting on the Grid.
         * Emits the sortChanged event whenever the sort criteria are changed.
         * @param column Column to set the sorting on
         * @param [direction] Direction to sort by,
         *        either descending or ascending.  If not provided, the column will iterate through the sort
         *        directions: ascending, descending, unsorted.
         * @param [add] Add this column to the sorting. If not provided or set to `false`, the Grid will
         *        reset any existing sorting and sort by this column only
         * @returns A resolved promise that supplies the column.
         */
        sortColumn(
            column: IGridColumnOf<TEntity>,
            direction?: string,
            add?: boolean,
        ): ng.IPromise<IGridColumnOf<TEntity>>;
        /**
         * flags all render containers to update their canvas height
         */
        updateCanvasHeight(): void;
        /**
         * recalculates the footer height,
         * registered as a dataChangeCallback on uiGridConstants.dataChange.OPTIONS
         * @param name column name
         */
        updateFooterHeightCallback(name: string): void;
        /**
         * reference to the application scope (the parent scope of the ui-grid element). Assigned in ui-grid controller
         * use gridOptions.appScopeProvider to override the default assignment of $scope.$parent with any reference
         */
        appScope?: ng.IScope | undefined;
        /**
         * returns an array of columns in the grid
         */
        columns: Array<IGridColumn>;
        /**
         * returns the total column footer height
         */
        columnFooterHeight?: number | undefined;
        /**
         * returns the total footer height gridFooter + columnFooter
         */
        footerHeight?: number | undefined;
        /**
         * returns or sets grid height in pixels
         */
        gridHeight?: number | undefined;
        /**
         * set to true when Grid is scrolling horizontally. Set to false via debounced method
         */
        isScrollingHorizontally?: boolean | undefined;
        /**
         * set to true when Grid is scrolling vertically. Set to false via debounced method
         */
        isScrollingVertically?: boolean | undefined;
        /**
         * set one of the uiGridConstants.scrollDirection values (UP, DOWN, LEFT, RIGHT, NONE),
         * which tells us which direction we are scrolling. Set to NONE via debounced method
         */
        scrollDirection?: number | undefined;

        id: number;
    }
    export interface IBuildColumnsOptions {
        orderByColumnDefs?: boolean | undefined;
    }
    export interface IStyleComputation {
        ($scope: ng.IScope): string;
    }
    export interface IColumnBuilder<TEntity> {
        (colDef: IColumnDefOf<TEntity>, col: IGridColumnOf<TEntity>, gridOptions: IGridOptionsOf<TEntity>): void;
    }
    export interface IRowBuilder<TEntity> {
        (row: IGridRowOf<TEntity>, gridOptions: IGridOptionsOf<TEntity>): void;
    }
    export interface IRowProcessor<TEntity> {
        (
            renderedRowsToProcess: Array<IGridRowOf<TEntity>>,
            columns: Array<IGridColumnOf<TEntity>>,
        ): Array<IGridRowOf<TEntity>>;
    }
    export interface IColumnProcessor<TEntity> {
        (
            renderedColumnsToProcess: Array<IGridColumnOf<TEntity>>,
            rows: Array<IGridRowOf<TEntity>>,
        ): Array<IGridColumnOf<TEntity>>;
    }
    export type IGridOptions = IGridOptionsOf<any>;
    export interface IGridOptionsOf<TEntity>
        extends
            cellNav.IGridOptions,
            edit.IGridOptions,
            expandable.IGridOptions,
            exporter.IGridOptions<TEntity>,
            grouping.IGridOptions,
            importer.IGridOptions<TEntity>,
            infiniteScroll.IGridOptions,
            moveColumns.IGridOptions,
            pagination.IGridOptions,
            pinning.IGridOptions,
            resizeColumns.IGridOptions,
            rowEdit.IGridOptions,
            saveState.IGridOptions,
            selection.IGridOptions,
            treeBase.IGridOptions<TEntity>,
            treeView.IGridOptions
    {
        /**
         * Default time in milliseconds to throttle aggregation calcuations, defaults to 500ms
         */
        aggregationCalcThrottle?: number | undefined;
        /**
         * by default, the parent scope of the ui-grid element will be assigned to grid.appScope
         * this property allows you to assign any reference you want to grid.appScope
         */
        appScopeProvider?: ng.IScope | Object | undefined;
        /**
         * Array of columnDef objects.  Only required property is name.
         */
        columnDefs?: Array<IColumnDefOf<TEntity>> | undefined;
        /**
         * The height of the footer rows (column footer and grid footer) in pixels
         */
        columnFooterHeight?: number | undefined;
        /**
         * Turn virtualization on when number of columns goes over this number, defaults to 10
         * @default 10
         */
        columnVirtualizationThreshold?: number | undefined;
        /**
         * (mandatory) Array of data to be rendered into the grid, providing the data source or data binding for
         * the grid.
         *
         * Most commonly the data is an array of objects, where each object has a number of attributes.
         * Each attribute automatically becomes a column in your grid.  This array could, for example, be sourced from
         * an angularJS $resource query request.  The array can also contain complex objects, refer the binding tutorial
         * for examples of that.
         *
         * The most flexible usage is to set your data on $scope:
         *
         * `$scope.data = data;`
         *
         * And then direct the grid to resolve whatever is in $scope.data:
         *
         * `$scope.gridOptions.data = 'data';`
         *
         * This is the most flexible approach as it allows you to replace $scope.data whenever you feel like it without
         * getting pointer issues.
         *
         * Alternatively you can directly set the data array:
         *
         * `$scope.gridOptions.data = [ ];`
         * or
         *
         * `$http.get('/data/100.json')
         * .success(function(data) {
         *   $scope.myData = data;
         *   $scope.gridOptions.data = $scope.myData;
         *  });`
         *
         * Where you do this, you need to take care in updating the data - you can't just update `$scope.myData` to some
         * other array, you need to update $scope.gridOptions.data to point to that new array as well.
         */
        data?: Array<TEntity> | string | undefined;
        /**
         * True by default. When enabled, this setting displays a column
         * menu within each column.
         * @default true
         */
        enableColumnMenus?: boolean | undefined;
        /**
         * False by default. When enabled, this setting adds filter
         * boxes to each column header, allowing filtering within the column for the entire grid.
         * Filtering can then be disabled on individual columns using the columnDefs.
         * @default false
         */
        enableFiltering?: boolean | undefined;
        /**
         * False by default. When enabled, this adds a settings icon in the top right of the grid,
         * which floats above the column header. The menu by default gives access to show/hide columns,
         * but can be customized to show additional actions.
         * @default false
         */
        enableGridMenu?: boolean | undefined;
        /**
         * uiGridConstants.scrollbars.ALWAYS by default. This settings controls the horizontal scrollbar for the grid.
         * Supported values: uiGridConstants.scrollbars.ALWAYS, uiGridConstants.scrollbars.NEVER, uiGridConstants.scrollbars.WHEN_NEEDED
         * @default 1
         */
        enableHorizontalScrollbar?: boolean | number | undefined;
        /**
         * True by default. When enabled, a newly initialized grid will check to see if it is tall enough to display
         * at least one row of data.  If the grid is not tall enough, it will resize the DOM element to display
         * minRowsToShow number of rows.
         * @default true
         */
        enableMinHeightCheck?: boolean | undefined;
        /**
         * True by default. When enabled, this setting allows uiGrid to add
         * `$$hashKey`-type properties (similar to Angular) to elements in the `data` array. This allows
         * the grid to maintain state while vastly speeding up the process of altering `data` by
         * adding/moving/removing rows.
         *
         * Note that this DOES add properties to your data that you may not want, but they are stripped out when
         * using `angular.toJson()`. IF you do not want this at all you can disable this setting but you will take a
         * performance hit if you are using large numbers of rows
         * and are altering the data set often.
         * @default true
         */
        enableRowHashing?: boolean | undefined;
        /**
         * True by default. When enabled, this setting adds sort
         * widgets to the column headers, allowing sorting of the data for the entire grid.
         * Sorting can then be disabled on individual columns using the columnDefs.
         * @default true
         */
        enableSorting?: boolean | undefined;
        /**
         * uiGridConstants.scrollbars.ALWAYS by default. This settings controls the vertical scrollbar for the grid.
         * Supported values: uiGridConstants.scrollbars.ALWAYS, uiGridConstants.scrollbars.NEVER, uiGridConstants.scrollbars.WHEN_NEEDED
         * @default 1
         */
        enableVerticalScrollbar?: boolean | number | undefined;
        /**
         * Extra columns to to render outside of the viewport, which helps with smoothness of scrolling.
         * Defaults to 4
         * @default 4
         */
        excessColumns?: number | undefined;
        /**
         * Extra rows to to render outside of the viewport, which helps with smoothness of scrolling.
         * Defaults to 4
         * @default 4
         */
        excessRows?: number | undefined;
        /**
         * Array of property names in data to ignore when auto-generating column names.  Provides the
         * inverse of columnDefs - columnDefs is a list of columns to include, excludeProperties is a list of columns
         * to exclude.
         *
         * If columnDefs is defined, this will be ignored.
         *
         * Defaults to ['$$hashKey']
         */
        excludeProperties?: Array<string> | undefined;
        /**
         * Set to true if your columns are all related directly to fields in a flat object structure - i.e.
         * each of your columns associate directly with a propery one each of the entities in your data array.
         *
         * In that situation we can avoid all the logic associated with complex binding to functions or to properties
         * of sub-objects, which can provide a significant speed improvement with large data sets, with filtering and
         * with sorting.
         *
         * By default false
         * @default false
         */
        flatEntityAccess?: boolean | undefined;
        /**
         * (optional) ui-grid/ui-grid-footer by default.  This footer shows the per-column
         * aggregation totals.
         * When provided, this setting uses a custom footer template. Can be set to either the name of a template
         * file 'footer_template.html', inline html
         * <pre>'<div class="ui-grid-bottom-panel" style="text-align: center">I am a Custom Grid Footer</div>'</pre>,
         * or the id of a precompiled template (TBD how to use this).  Refer to the custom footer tutorial for more
         * information.
         * @default 'ui-grid/ui-grid-footer'
         */
        footerTemplate?: string | undefined;
        /**
         * (optional) ui-grid/ui-grid-grid-footer by default. This template by default shows the
         * total items at the bottom of the grid, and the selected items if selection is enabled.
         * @default 'ui-grid/ui-grid-grid-footer'
         */
        gridFooterTemplate?: string | undefined;
        /**
         * Null by default. When provided, this setting uses a custom header
         * template, rather than the default template. Can be set to either the name of a template file:
         * <pre>  $scope.gridOptions.headerTemplate = 'header_template.html';</pre>
         * inline html
         * <pre>  $scope.gridOptions.headerTemplate = '<div class="ui-grid-top-panel" style="text-align: center">
         *     I am a Custom Grid Header</div>'</pre>
         * or the id of a precompiled template (TBD how to use this).
         * </br>Refer to the custom header tutorial for more information.
         * If you want no header at all, you can set to an empty div:
         * <pre>  $scope.gridOptions.headerTemplate = '<div></div>';</pre>
         *
         * If you want to only have a static header, then you can set to static content.  If
         * you want to tailor the existing column headers, then you should look at the
         * current 'ui-grid-header.html' template in github as your starting point.
         * @default null
         */
        headerTemplate?: string | undefined;
        /**
         * Defaults to 4
         * @default 4
         */
        horizontalScrollThreshold?: number | undefined;
        /**
         * Number of rows from the end of the dataset
         * at which infinite scroll will trigger a request
         * for more data
         * @default 20
         */
        infiniteScrollRowsFromEnd?: number | undefined;
        /**
         * Inform the grid of whether there are rows
         * to load when scrolling up
         * @default false
         */
        infiniteScrollUp?: boolean | undefined;
        /**
         * Inform the grid of whether there are rows
         * to load scrolling down
         * @default true
         */
        infiniteScrollDown?: boolean | undefined;
        /**
         * Defaults to 200
         * @default 200
         */
        maxVisibleColumnCount?: number | undefined;
        /**
         * Minimum number of rows to show when the grid doesn't have a defined height. Defaults to "10".
         * @default 10
         */
        minRowsToShow?: number | undefined;
        /**
         * Columns can't be smaller than this, defaults to 10 pixels
         * @default 10
         */
        minimumColumnSize?: number | undefined;
        /**
         * A callback that returns the gridApi once the grid is instantiated, which is
         * then used to interact with the grid programatically.
         *
         * Note that the gridApi.core.renderingComplete event is identical to this
         * callback, but has the advantage that it can be called from multiple places
         * if needed
         * @param gridApi
         */
        onRegisterApi?: ((gridApi: IGridApiOf<TEntity>) => void) | undefined;
        /**
         * The height of the row in pixels, defaults to 30
         * @default 30
         */
        rowHeight?: number | undefined;
        /**
         * 'ui-grid/ui-grid-row' by default. When provided, this setting uses a
         * custom row template.  Can be set to either the name of a template file:
         * <pre> $scope.gridOptions.rowTemplate = 'row_template.html';</pre>
         * inline html
         * <pre>  $scope.gridOptions.rowTemplate =
         * '<div style="background-color: aquamarine"
         *       ng-click="grid.appScope.fnOne(row)"
         *       ng-repeat="col in colContainer.renderedColumns track by col.colDef.name"
         *       class="ui-grid-cell" ui-grid-cell></div>';</pre>
         * or the id of a precompiled template (TBD how to use this) can be provided.
         * </br>Refer to the custom row template tutorial for more information.
         * @default 'ui-grid/ui-grid-row'
         */
        rowTemplate?: string | undefined;
        /**
         * Default time in milliseconds to debounce scroll events, defaults to 300ms
         * @default 300
         */
        scrollDebounce?: number | undefined;
        /**
         * Defaults to 4
         * @default 4
         */
        scrollThreshold?: number | undefined;
        /**
         * Whether or not to show the column footer, defaults to false
         * The column footer displays column aggregates
         * @default false
         */
        showColumnFooter?: boolean | undefined;
        /**
         * Whether or not to show the footer, defaults to false
         * The footer display Total Rows and Visible Rows (filtered rows)
         * @default false
         */
        showGridFooter?: boolean | undefined;
        /**
         * True by default. When set to false, this setting will replace the
         * standard header template with '<div></div>', resulting in no header being shown.
         * @default true
         */
        showHeader?: boolean | undefined;
        /**
         * Turn virtualization on when number of data elements goes over this number, defaults to 20
         * @default 20
         */
        virtualizationThreshold?: number | undefined;
        /**
         * Disables client side filtering. When true, handle the filterChanged event and set data,
         * defaults to false
         * @default false
         */
        useExternalFiltering?: boolean | undefined;
        /**
         * Disables client side sorting. When true, handle the sortChanged event and do the sorting there
         * @default false
         */
        useExternalSorting?: boolean | undefined;
        /**
         * Default time in milliseconds to throttle scroll events to, defaults to 70ms
         * @default 70
         */
        wheelScrollThrottle?: number | undefined;
        /**
         * This function returns the identity value uniquely identifying this row,
         * if one is not present it does not set it.
         *
         * By default it returns the `$$hashKey` property but can be overridden to use any property
         * or set of properties you want.
         * @param row The row for which you want the unique id
         * @returns row uid
         */
        getRowIdentity?(row: IGridRowOf<TEntity>): any;
        /**
         * By default, rows are compared using object equality.  This option can be overridden
         * to compare on any data item property or function
         * @param entityA First Data Item to compare
         * @param entityB Second Data Item to compare
         */
        rowEquality?(entityA: TEntity, entityB: TEntity): boolean;
        /**
         * This function is used to get and, if necessary, set the value uniquely identifying this row
         * (i.e. if an identity is not present it will set one).
         *
         * By default it returns the `$$hashKey` property if it exists. If it doesn't it uses gridUtil.nextUid()
         * to generate one
         */
        rowIdentity?(row: IGridRowOf<TEntity>): any;

        fastWatch?: boolean | undefined;
    }
    export interface IGridCoreApi<TEntity> {
        // Methods
        /**
         * adds a row header column to the grid
         * @param column Column Definition
         * @param order Number that indicates where the column should be placed in the grid.
         * @param stopColumnBuild Prevents the buildColumn callback from being triggered. This is useful to improve performance of the grid during initial load.
         */
        addRowHeaderColumn(column: IColumnDefOf<TEntity>, order?: number, stopColumnBuild?: boolean): void;
        /**
         * add items to the grid menu.  Used by features
         * to add their menu items if they are enabled, can also be used by
         * end users to add menu items.  This method has the advantage of allowing
         * remove again, which can simplify management of which items are included
         * in the menu when.  (Noting that in most cases the shown and active functions
         * provide a better way to handle visibility of menu items)
         * @param grid the grid on which we are acting
         * @param items menu items in the format as described in the tutorial, with
         * the added note that if you want to use remove you must also specify an `id` field,
         * which is provided when you want to remove an item.  The id should be unique.
         */
        addToGridMenu(grid: IGridInstanceOf<TEntity>, items: Array<IMenuItem>): void;
        /**
         * Clears all filters and optionally refreshes the visible rows.
         * @param [refreshRows=true] Defaults to true.
         * @param [clearConditions=false] Defaults to false.
         * @param [clearFlags=false] Defaults to false.
         * @returns If `refreshRows` is true, returns a promise of the rows refreshing.
         */
        clearAllFilters(
            refreshRows?: boolean,
            clearConditions?: boolean,
            clearFlags?: boolean,
        ): ng.IPromise<Array<IGridRowOf<TEntity>>>;
        /**
         * Clears any override on visibility for the row so that it returns to
         * using normal filtering and other visibility calculations.
         * If the row is currently invisible then sets it to visible and calls
         * both grid refresh and emits the rowsVisibleChanged event
         * TODO: if a filter is active then we can't just set it to visible?
         * @param rowEntity gridOptions.data[] array instance
         */
        clearRowInvisible(rowEntity: TEntity): void;
        /**
         * Returns all visible rows
         * @returns an array of gridRow
         */
        getVisibleRows(): Array<IGridRowOf<TEntity>>;
        /**
         * Trigger a grid resize, normally this would be picked
         * up by a watch on window size, but in some circumstances it is necessary
         * to call this manually
         * @returns promise that is resolved when render completes?
         */
        handleWindowResize(): void;
        /**
         * Notify the grid that a data or config change has occurred,
         * where that change isn't something the grid was otherwise noticing.  This
         * might be particularly relevant where you've changed values within the data
         * and you'd like cell classes to be re-evaluated, or changed config within
         * the columnDef and you'd like headerCellClasses to be re-evaluated.
         * @param type one of the
         *        uiGridConstants.dataChange values (ALL, ROW, EDIT, COLUMN), which tells
         *        us which refreshes to fire.
         */
        notifyDataChange(type: string): void;
        /**
         * Refresh the rendered grid on screen.
         *
         * @param [rowsAltered] Optional flag for refreshing when the number of rows has changed.
         */
        refresh(rowsAltered?: boolean): ng.IPromise<any>;
        /**
         * Refresh the rendered rows on screen?  Note: not functional at present
         * @returns promise that is resolved when render completes?
         */
        refreshRows(): ng.IPromise<boolean>;
        /**
         * Register a "columns processor" function. When the columns are updated,
         * the grid calls each registered "columns processor", which has a chance
         * to alter the set of columns as long as the count is not
         * modified.
         *
         * @param processorFunction columns processor function, which
         *        is run in the context of the grid (i.e. this for the function will be the grid), and must
         *        return the updated columns list, which is passed to the next processor in the chain
         * @param priority the priority of this processor.  In general we try to do them in 100s to leave room
         *        for other people to inject columns processors at intermediate priorities.  Lower priority
         *        columnsProcessors run earlier.
         *
         * At present allRowsVisible is running at 50, filter is running at 100, sort is at 200, grouping at 400,
         * selectable rows at 500, pagination at 900 (pagination will generally want to be last)
         */
        registerColumnsProcessor(processorFunction: IColumnProcessor<TEntity>, priority: number): void;
        /**
         * Register a "rows processor" function. When the rows are updated,
         * the grid calls each registered "rows processor", which has a chance
         * to alter the set of rows (sorting, etc) as long as the count is not
         * modified.
         *
         * @param rowProcessor rows processor function, which
         *        is run in the context of the grid (i.e. this for the function will be the grid), and must
         *        return the updated rows list, which is passed to the next processor in the chain
         * @param priority the priority of this processor.  In general we try to do them in 100s to leave room
         *        for other people to inject rows processors at intermediate priorities.  Lower priority rowsProcessors
         *        run earlier.
         *
         * At present all rows visible is running at 50, filter is running at 100, sort is at 200, grouping at 400,
         * selectable rows at 500, pagination at 900 (pagination will generally want to be last)
         */
        registerRowsProcessor(rowProcessor: IRowProcessor<TEntity>, priority: number): void;
        /**
         * Scroll the grid such that the specified
         * row and column is in view
         * @param entity gridOptions.data[] array instance to make visible
         * @param colDef to make visible
         * @returns a promise that is resolved after any scrolling is finished
         */
        scrollTo(entity: TEntity, colDef: IColumnDefOf<TEntity>): void; /*A row entity can be anything?*/
        /**
         * Scrolls the grid to make a certain row and column combo visible,
         * in the case that it is not completely visible on the screen already.
         * @param gridRow row to make visible
         * @param gridCol column to make visible
         * @returns a promise that is resolved when scrolling is complete
         */
        scrollToIfNecessary(gridRow: IGridRowOf<TEntity>, gridCol: IGridColumnOf<TEntity>): void;
        /**
         * A null handling method that can be used when building custom sort
         * functions
         * @param a Sort value a
         * @param b Sort value b
         * @returns null if there were no nulls/undefineds, otherwise returns
         * a sort value that should be passed back from the sort function
         */
        sortHandleNulls(a: any, b: any): number;
        /**
         * queues a grid refresh, a way of debouncing all the refreshes we might otherwise issue
         */
        queueGridRefresh(): void;
        /**
         * queues a grid refreshCanvas, a way of debouncing all the refreshes we might otherwise issue
         */
        queueRefresh(): void;

        // Events
        on: {
            /**
             * is raised when the canvas height has changed
             * @param scope Grid scope
             * @param handler Callback
             */
            canvasHeightChanged: (scope: ng.IScope, handler: canvasHeightChangedHandler) => void;
            /**
             * The visibility of a column has changed, the column itself is passed out as a parameter of the event
             * @param scope The scope of the controller. This is used to deregister this event when the
             *        scope is destroyed
             * @param callBack Will be called when the event is emited.
             *        The function passes back the GridCol that has changed
             */
            columnVisibilityChanged: (scope: ng.IScope, callBack: columnVisibilityChangedHandler<TEntity>) => void;
            /**
             * is raised after the filter is changed.
             * The nature of the watch expression doesn't allow notification of what changed,
             * so the receiver of this event will need to re-extract the filter conditions from the columns.
             * @param scope Grid scope
             * @param handler Callback
             */
            filterChanged: (scope: ng.IScope, handler: filterChangedHandler<TEntity>) => void;
            /**
             * is raised after the cache of visible rows is changed
             * @param scope Grid scope
             * @param handler callback
             */
            rowsRendered: (scope: ng.IScope, handler: rowsRenderedHandler<TEntity>) => void;
            /**
             * is raised after the rows that are visible change.
             * The filtering is zero-based, so it isn't possible to say which rows changed
             * (unlike in the selection feature). We can plausibly know which row was changed when setRowInvisible is
             * called, but in that situation the user already knows which row they changed.
             * When a filter runs we don't know what changed, and that is the one that would have been useful.
             * @param scope Grid scope
             * @param handler callback
             */
            rowsVisibleChanged: (scope: ng.IScope, handler: rowsVisibleChangedHandler<TEntity>) => void;
            /**
             * is raised when scroll begins. Is throttled, so won't be raised too frequently
             * @param scope Grid scope
             * @param handler callback
             */
            scrollBegin: (scope: ng.IScope, handler: scrollBeginHandler) => void;
            /**
             * is raised when scroll has finished. Is throttled, so won't be raised too frequently
             * @param scope Grid scope
             * @param handler callback
             */
            scrollEnd: (scope: ng.IScope, handler: scrollEndHandler) => void;
            /**
             * is raised after the sort criteria on one or more columns have changed
             * @param scope Grid scope
             * @param handler callback
             */
            sortChanged: (scope: ng.IScope, handler: sortChangedHandler<TEntity>) => void;
        };
    }
    export interface columnVisibilityChangedHandler<TEntity> {
        /**
         * Column visibility changed event handler
         * @param column Ui Grid column
         */
        (column: IGridColumnOf<TEntity>): void;
    }
    export interface canvasHeightChangedHandler {
        /**
         * Canvas height changed callback
         * @param oldHeight old Height
         * @param newHeight new Height
         */
        (oldHeight: number, newHeight: number): void;
    }

    export interface filterChangedHandler<TEntity> {
        /**
         * Filter changed event callback
         * @param gridApi grid api
         */
        (gridApi: IGridApiOf<TEntity>): void;
    }

    export interface rowsRenderedHandler<TEntity> {
        /**
         * Rows rendered event callback
         * @param gridApi Grid api object
         */
        (gridApi: IGridApiOf<TEntity>): void;
    }

    export interface rowsVisibleChangedHandler<TEntity> {
        /**
         * Rows visible changed event callback
         * @param gridApi grid api object
         */
        (gridApi: IGridApiOf<TEntity>): void;
    }

    export interface scrollBeginHandler {
        /**
         * Scroll begin event callback
         * @param scrollEvent Mouse scroll event
         */
        (scrollEvent: JQueryMouseEventObject): void;
    }

    export interface scrollEndHandler {
        /**
         * Scroll end event callback
         * @param scrollEvent Mouse scroll event
         */
        (scrollEvent: JQueryMouseEventObject): void;
    }

    export interface sortChangedHandler<TEntity> {
        /**
         * Sort change event callback
         * @param grid instance
         * @param array of gridColumns that have sorting on them, sorted in priority order
         */
        (grid: IGridInstanceOf<TEntity>, columns: Array<IGridColumnOf<TEntity>>): void;
    }

    export namespace cellNav {
        /**
         * Column Definitions for cellNav feature, these are available to be set using the ui-grid
         * gridOptions.columnDefs
         */
        export interface IColumnDef {
            /**
             * Enable focus on a cell within this column.
             * Defaults to true
             * @default true
             */
            allowCellFocus?: boolean | undefined;
        }

        /**
         * GridOptions for cellNav feature, these are available to be set using the ui-grid gridOptions
         */
        export interface IGridOptions {
            /**
             * Enable multiple cell selection only when using the ctrlKey or shiftKey.
             * Defaults to false
             * @default false
             */
            modifierKeysToMultiSelectCells?: boolean | undefined;
        }

        /**
         * Cell Nav related grid row
         */
        export interface IGridRow {
            /**
             * Enable focus on a cell within this row. If set to false then no cells in this row can be focused
             * Group header rows, for example, would set this to false.
             * Defaults to true
             */
            allowCellFocus?: boolean | undefined;
        }

        export interface ICellNavApi<TEntity> {
            // Methods
            /**
             * Gets the currently selected rows and columns.  array is empty if no selection has occurred
             * @returns an array containing the current selection
             */
            getCurrentSelection(): Array<IRowCol<TEntity>>;
            /**
             * Gets the current focused cell.  value is null if no selection has occurred
             * @returns the current (or last if Grid does not have focus) focused row and column
             */
            getFocusedCell(): IRowCol<TEntity>;
            /**
             * Gets the index of the passed rowCol.  Returns -1 if the RowCol isn't selected
             * @param rowCol
             * @returns the index in the order in which the RowCol was selected
             */
            rowColSelectIndex(rowCol: IRowCol<TEntity>): number;
            /**
             * Brings the specified row and column into view, and sets focus to that cell
             * @param rowEntity gridOptions.data[] array instance to make visible and set focus
             * @param colDef Column definition to make visible and set focus
             */
            scrollToFocus(rowEntity: TEntity, colDef: IColumnDef): ng.IPromise<any>;

            // Events
            on: {
                /**
                 * raised when the active cell is changed
                 * @param scope The grid scope
                 * @param handler Callback
                 */
                navigate: (scope: ng.IScope, handler: navigateHandler<TEntity>) => void;
                /**
                 * viewPortKeyDown is raised when the viewPort receives a keyDown event.
                 * Cells never get focus in uiGrid due to the difficulties of setting focus on a cell that is
                 * not visible in the viewport. Use this event whenever you need a keydown event on a cell.
                 * @param scope The grid scope
                 * @param handler Callback
                 */
                viewPortKeyDown: (scope: ng.IScope, handler: viewportKeyDownHandler<TEntity>) => void;
                /**
                 * viewPortKeyPress is raised when the viewPort receives a keyPress event.
                 * Cells never get focus in uiGrid due to the difficulties of setting focus on a cell that is
                 * not visible in the viewport. Use this event whenever you need a keypress event on a cell.
                 * @param scope The grid scope
                 * @param handler Callback
                 */
                viewPortKeyPress: (scope: ng.IScope, handler: viewportKeyPressHandler<TEntity>) => void;
            };
        }

        export interface navigateHandler<TEntity> {
            /**
             * Callback for navigate event
             * @param newRowCol New position
             * @param oldRowCol Old position
             */
            (newRowCol: IRowCol<TEntity>, oldRowCol: IRowCol<TEntity>): void;
        }

        export interface viewportKeyDownHandler<TEntity> {
            /**
             * Callback for viewport key down event
             * @param event Keydown event
             * @param rowCol Current row Col position
             */
            (event: JQueryKeyEventObject, rowCol: IRowCol<TEntity>): void;
        }

        export interface viewportKeyPressHandler<TEntity> {
            /**
             * Callback for viewport key press event
             * @param event Keypress event
             * @param rowCol Current row Col position
             */
            (event: JQueryKeyEventObject, rowCol: IRowCol<TEntity>): void;
        }

        export interface IRowColConstructor<TEntity> {
            new(row: uiGrid.IGridRowOf<TEntity>, col: IGridColumnOf<TEntity>): IRowCol<TEntity>;
        }

        /**
         * A row and column pair that represents the intersection of these two entities
         */
        export interface IRowCol<TEntity> {
            row: uiGrid.IGridRowOf<TEntity>;
            col: IGridColumnOf<TEntity>;
            /**
             * Gets the intersection of where the row and column meet
             * @returns The value from the grid data that this RowCol points to.  If the column has a cellFilter this
             *          will NOT return the filtered value.
             */
            getIntersectionValueRaw(): String | Number | Object;
            /**
             * Gets the intersection of where the row and column meet.
             * @returns The value from the grid data that this RowCol points to.  If the column has a cellFilter this
             *          will also apply the filter to it and return the value that the filter displays
             */
            getIntersectionValueFiltered(): String | Number | Object;
        }
        /**
         * constants available in cellNav
         */
        export interface IUiGridCellNavConstants {
            FEATURE_NAME: string;
            CELL_NAV_EVENT: string;
            direction: {
                LEFT: number;
                RIGHT: number;
                UP: number;
                DOWN: number;
                PG_UP: number;
                PG_DOWN: number;
            };
            EVENT_TYPE: {
                KEYDOWN: number;
                CLICK: number;
                CLEAR: number;
            };
        }
    }

    export namespace edit {
        /**
         * Edit related Column Definition
         */
        export interface IColumnDef<TEntity> {
            /**
             * If specified, either a value or function evaluated before editing cell.
             * If falsy, then editing of cell is not allowed.
             */
            cellEditableCondition?: any | { ($scope: ng.IScope): boolean } | undefined;
            /** A filter that you would like to apply to the values in the options list of the dropdown */
            editDropdownFilter?: string | undefined;
            /** the label for the "id" field in the editDropdownOptionsArray. Defaults to 'id' */
            editDropdownIdLabel?: string | undefined;
            /** an array of values in the format [ {id: xxx, value: xxx} ], which is populated into the edit dropdown */
            editDropdownOptionsArray?: Array<IEditDropdown> | undefined;
            /**
             * a path to a property on row.entity containing an array of values in the format `[{id: xxx, value:
             * xxx}]`,
             * which will be used to populate the edit dropdown.  This can be used when the dropdown values are
             * dependent on the backing row entity.  If this property is set then editDropdownOptionsArray will be
             * ignored.
             */
            editDropdownRowEntityOptionsArrayPath?: string | undefined;
            /** the label of the 'value' field in the editDropdownOptionsArray.  Defaults to 'value' */
            editDropdownValueLabel?: string | undefined;
            /**
             * A function that should be called when any files have been chosen by the user.
             * You should use this to process the files appropriately for your application.
             *
             * It passes the gridCol, the gridRow (from which you can get gridRow.entity), and the files.
             * The files are in the format as returned from the file chooser, an array of files,
             * with each having useful information such as:
             *
             * * files[0].lastModifiedDate
             * * files[0].name
             * * files[0].size (appears to be in bytes)
             * * files[0].type (MIME type)
             *
             * Typically you would do something with these files.
             * Most commonly you would use the filename or read the file itself in. This example does both:
             * @example
             editFileChooserCallBack: (gridRow, gridCol, files) => {
               // ignore all but the first file, it can only choose one anyway
               // set the filename into this column
               gridRow.entity.filename = file[0].name;

               // read the file and set it into a hidden column, which we may do stuff with later
               var setFile = function(fileContent){
                   gridRow.entity.file = fileContent.currentTarget.result;
               };
               var reader = new FileReader();
               reader.onload = setFile;
               reader.readAsText( files[0] );
           }
             */
            editFileChooserCallback?:
                | ((gridRow: uiGrid.IGridRowOf<TEntity>, gridCol: IGridColumnOf<TEntity>, files: FileList) => void)
                | undefined;
            /**
             * A bindable string value that is used when binding to edit controls instead of colDef.field
             * For example if you have a complex property on an object like:
             * ```typescript
             * state: {abbrev:'MS',name:'Mississippi'}.
             * ```
             * The grid should display `state.name` in the cell and sort/filter based on the state.name property, but
             * the editor requires the full state object. so this let's you bind to that
             * @example
             colDef.field = 'state.name';
             colDef.editModelField = 'state';
             */
            editModelField?: string | undefined;
            /**
             * Cell template to be used when editing this column. Can be Url or text template.
             * Defaults to gridOptions.editableCellTemplate
             */
            editableCellTemplate?: string | undefined;
            /** Enable editing on a column */
            enableCellEdit?: boolean | undefined;
            /** If true, then editor is invoked as soon as cell receives focus. Default false.
             * _Requires both the cellNav feature and the edit feature to be enabled_
             */
            enableCellEditOnFocus?: boolean | undefined;
        }

        export interface IEditDropdown {
            id: number | string;
            value: any;
        }

        /**
         * Options for configuring the edit feature, these are available to be set using the ui-grid gridOptions
         */
        export interface IGridOptions {
            /**
             * If specified, either a value or function to be used by all columns before editing.
             * If falsy, then editing of cell is not allowed
             */
            cellEditableCondition?: any | { ($scope: ng.IScope): boolean } | undefined;
            /**
             * If specified, cellTemplate to use as the editor for all columns.
             * defaults to 'ui-grid/cellTextEditor'
             * @default 'ui-grid/cellTextEditor'
             */
            editableCellTemplate?: string | undefined;
            /**
             * If defined, sets the default value for the editable flag on each individual colDefs if their individual
             * enableCellEdit configuration is not defined.
             * Defaults to undefined.
             * @default undefined
             */
            enableCellEdit?: boolean | undefined;
            /**
             * If true, then editor is invoked as soon as cell receives focus.
             * Default false.
             * _requires cellNav feature and the edit feature to be enabled_
             * @default false
             */
            enableCellEditOnFocus?: boolean | undefined;
        }

        /**
         * GridRow options for edit feature, these are available to be set internally only, by other features
         */
        export interface IGridRow {
            /** enable editing on row, grouping for example might disable editing on group header rows */
            enableCellEdit?: boolean | undefined;
        }

        /**
         * Public Api for edit feature
         */
        export interface IGridEditApi<TEntity> {
            on: {
                /**
                 * raised when cell editing is complete
                 * @param scope The grid scope
                 * @param handler Callback
                 */
                afterCellEdit: (scope: ng.IScope, handler: afterCellEditHandler<TEntity>) => void;
                /**
                 * raised when cell editing starts on a cell
                 * @param scope The grid scope
                 * @param handler Callback
                 */
                beginCellEdit: (scope: ng.IScope, handler: beginCellEditHandler<TEntity>) => void;
                /**
                 * raised when cell editing is cancelled on a cell
                 * @param scope The grid scope
                 * @param handler Callback
                 */
                cancelCellEdit: (scope: ng.IScope, handler: cancelCellEditHandler<TEntity>) => void;
            };
        }
        export interface afterCellEditHandler<TEntity> {
            /**
             * raised when cell editing is complete
             * @param rowEntity the options.data element that was edited
             * @param colDef The column that was edited
             * @param newValue New Value
             * @param oldValue Old Value
             */
            (rowEntity: TEntity, colDef: IColumnDefOf<TEntity>, newValue: any, oldValue: any): void;
        }

        /**
         * raised when cell editing starts on a cell
         * @param rowEntity the options.data element that was edited
         * @param colDef The column that was edited
         * @param triggerEvent the event that triggered the edit. Useful to prevent losing
         *     keystrokes on some complex editors
         */
        export interface beginCellEditHandler<TEntity> {
            (rowEntity: TEntity, colDef: IColumnDefOf<TEntity>, triggerEvent: JQueryEventObject): void;
        }

        /**
         * raised when cell editing is cancelled on a cell
         * @param rowEntity the options.data element that was edited
         * @param colDef The column that was edited
         */
        export interface cancelCellEditHandler<TEntity> {
            (rowEntity: TEntity, colDef: IColumnDefOf<TEntity>): void;
        }

        /**
         * constants available in edit module
         */
        export interface IUiGridEditConstants {
            EDITABLE_CELL_TEMPLATE: string;
            EDITABLE_CELL_DIRECTIVE: string;
            events: {
                BEGIN_CELL_EDIT: string;
                END_CELL_EDIT: string;
                CANCEL_CELL_EDIT: string;
            };
        }
    }

    export namespace expandable {
        /**
         * Options for configuring the expandable feature, these are available to be set using the ui-grid gridOptions
         */
        export interface IGridOptions {
            /**
             * Width in pixels of the expandable column. Defaults to 40
             */
            expandableRowHeaderWidth?: number | undefined;
            /**
             * Whether or not to use expandable feature.  Allows you to turn off expandable on specific grids within
             * your application, or in specific modes on this grid.
             * Defaults to true.
             */
            enableExpandable?: boolean | undefined;
            /**
             * Show a rowHeader to provide the expandable buttons. If set to false then implies you're going to use a
             * custom method for expanding and collapsing the subgrids.
             * Defaults to true.
             */
            enableExpandableRowHeader?: boolean | undefined;
            /**
             * Height in pixels of the expanded subgrid.
             * Defaults to 150
             */
            expandableRowHeight?: number | undefined;
            /**
             * reference to the parent grid scope (the parent scope of the sub-grid element)
             */
            expandableRowScope?: ng.IScope | Object | undefined;
            /**
             * Mandatory. The template for your expanded row
             */
            expandableRowTemplate?: string | undefined;
        }

        /**
         * Public Api for expandable feature
         */
        export interface IGridExpandableApi<TEntity> {
            // Methods
            /**
             * Collapse all subgrids.
             */
            collapseAllRows(): void;
            /**
             * expand all subgrids
             */
            expandAllRows(): void;
            /**
             * Toggle all subgrids
             */
            toggleAllRows(): void;
            /**
             * Toggle a specific row
             * @param rowEntity The data entity for the row you want to expand
             */
            toggleRowExpansion(rowEntity: TEntity): void;

            // Events
            on: {
                /**
                 * raised when cell editing is complete
                 * @param scope
                 * @param handler
                 */
                rowExpandedStateChanged: (scope: ng.IScope, handler: rowExpandedStateChangedHandler<TEntity>) => void;
            };
        }

        export interface rowExpandedStateChangedHandler<TEntity> {
            /**
             * Raised when cell editing is complete
             * @param row The row that was expanded
             */
            (row: IGridRowOf<TEntity>): void;
        }

        /**
         * GridRow settings for expandable
         */
        export interface IGridRow {
            /**
             * If set to true, the row is expanded and the expanded view is visible
             * Defaults to false
             * @default false
             */
            isExpanded?: boolean | undefined;
        }
    }

    export namespace exporter {
        /**
         * ColumnDef settings for exporter
         */
        export interface IColumnDef {
            /**
             * the alignment you'd like for this specific column when exported into a pdf.
             * Can be 'left', 'right', 'center' or any other valid pdfMake alignment option.
             */
            exporterPdfAlign?: string | undefined;
            /**
             * Suppresses export for this column. Used by selection and expandable.
             */
            exporterSuppressExport?: boolean | undefined;
        }

        /**
         * GridOptions for exporter feature, these are available to be set using the ui-grid gridOptions
         */
        export interface IGridOptions<TEntity> {
            /**
             * This promise is needed when exporting all rows, and the data need to be provided by server side.
             * Default is null
             * @default null
             * @returns A promise to load all data from server
             */
            exporterAllDataFn?: (() => ng.IPromise<Array<TEntity>>) | undefined;
            /**
             * @deprecated
             * DEPRECATED - exporterAllDataFn used to be called this, but it wasn't a promise,
             * it was a function that returned a promise. Deprecated, but supported for backward compatibility,
             * use exporterAllDataFn instead.
             * @returns A promise to load all data from server
             */
            exporterAllDataPromise?: (() => ng.IPromise<Array<TEntity>>) | undefined;
            /**
             * The character to use as column separator link
             * Defaults to ','
             * @default ','
             */
            exporterCsvColumnSeparator?: string | undefined;
            /**
             * The default filename to use when saving the downloaded csv. This will only work in some browsers.
             * Defaults to 'download.csv'
             * @default 'download.csv'
             */
            exporterCsvFilename?: string | undefined;
            /**
             * A function to call for each field before exporting it.
             * Allows massaging of raw data into a display format, for example if you have applied filters to convert
             * codes into decodes, or you require a specific date format in the exported content.
             * The method is called once for each field exported, and provides the grid,
             * the gridCol, and the GridRow for you to use as context in massaging the data.
             *
             * @param grid The grid
             * @param row Current row
             * @param col Current column
             * @param value The cell value
             * @returns Formatted value
             */
            exporterFieldCallback?:
                | ((
                    grid: IGridInstanceOf<TEntity>,
                    row: uiGrid.IGridRowOf<TEntity>,
                    col: IGridColumnOf<TEntity>,
                    value: any,
                ) => any)
                | undefined;
            /**
             * A function to apply to the header displayNames before exporting. Useful for internationalisation,
             * for example if you were using angular-translate you'd set this to $translate.instant.
             * Note that this call must be synchronous, it cannot be a call that returns a promise.
             *
             * Behaviour can be changed to pass in name instead of displayName through use
             * of exporterHeaderFilterUseName: true.
             * @param displayName
             * @returns The filtered header
             */
            exporterHeaderFilter?: ((displayName: string) => string) | undefined;
            /**
             * Defaults to false, which leads to displayName being passed into the headerFilter.
             * If set to true, then will pass name instead.
             * @default false
             */
            exporterHeaderFilterUseName?: boolean | undefined;
            /**
             * Add csv export menu items to the ui-grid grid menu, if it's present. Defaults to true.
             * @default true
             */
            exporterMenuCsv?: boolean | undefined;
            /**
             * Add excel export menu items to the ui-grid grid menu, if it's present. Defaults to true.
             * @default true
             */
            exporterMenuExcel?: boolean | undefined;
            /**
             * An option to determine the starting point for the menu items created by the exporter
             * @default 200
             */
            exporterMenuItemOrder?: number | undefined;
            /**
             * The text to show on the exporter menu button link
             * Defaults to 'Export'
             * @default 'Export'
             */
            exporterMenuLabel?: string | undefined;
            /**
             * Add pdf export menu items to the ui-grid grid menu, if it's present.
             * Defaults to true.
             * @default true
             */
            exporterMenuPdf?: boolean | undefined;
            /**
             * Some versions of excel don't like the utf-16 BOM on the front,
             * and it comes through as ï»¿ in the first column header.
             * Setting this option to false will suppress this,
             * at the expense of proper utf-16 handling in applications that do recognise the BOM
             * Defaults to false
             * @default false
             */
            exporterOlderExcelCompatibility?: boolean | undefined;
            /**
             * A custom callback routine that changes the pdf document,
             * adding any custom styling or content that is supported by pdfMake.
             * Takes in the complete docDefinition, and must return an updated docDefinition ready for pdfMake.
             * Example
             * In this example we add a style to the style array, so that we can use it in our footer definition.
             * @param docDefinition Document definition in pdfMake format
             */
            exporterPdfCustomFormatter?: ((docDefinition: any) => any) | undefined;
            /**
             * The default style in pdfMake format
             * @todo replace with pdfmake format
             */
            exporterPdfDefaultStyle?: any;
            /**
             * The default filename to use when saving the downloaded pdf,
             * only used in IE (other browsers open pdfs in a new window)
             * Defaults to 'download.pdf'
             * @default 'download.pdf'
             */
            exporterPdfFilename?: string | undefined;
            /**
             * The footer section for pdf exports. Can be simple text, a more complex object in pdfMake format, or it
             * can be a function, allowing page numbers and the like
             * @todo replace any with pdfmake format
             */
            exporterPdfFooter?: string | any | { (currentPage: number, pageCount: number): string } | undefined;
            /**
             * The header section for pdf exports. Can be simple text, a more complex object in pdfMake format, or it
             * can be a function, allowing page numbers and the like
             * @todo replace any with pdfmake format
             */
            exporterPdfHeader?: string | any | { (currentPage: number, pageCount: number): string } | undefined;
            /**
             * The maxium grid width - the current grid width will be scaled to match this,
             * with any fixed width columns being adjusted accordingly.
             * Defaults to 720 (for A4 landscape), use 670 for LETTER
             * @default 720
             */
            exporterPdfMaxGridWidth?: number | undefined;
            /**
             * The orientation, should be a valid pdfMake value, 'landscape' or 'portrait'
             * Defaults to landscape
             * @default 'landscape'
             */
            exporterPdfOrientation?: string | undefined;
            /**
             * The orientation, should be a valid pdfMake paper size, usually 'A4' or 'LETTER' pdfMake page sizes
             * Defaults to A4
             * @default 'A4'
             */
            exporterPdfPageSize?: string | undefined;
            /**
             * exporterPdfTableHeaderStyle
             * @todo replace any with pdfmake format
             */
            exporterPdfTableHeaderStyle?: any;
            /**
             * A tableLayout in pdfMake format, controls gridlines and the like. We use the default layout usually.
             * Defaults to null, which means no layout
             * @default null
             * @todo replace any with pdfmake format
             */
            exporterPdfTableLayout?: any;
            /**
             * The tableStyle in pdfMake format
             * Defaults to ```{ margin: [0, 5, 0, 15] }```
             * @default { margin: [0, 5, 0, 15] }
             * @todo replace any with pdfmake format
             */
            exporterPdfTableStyle?: any;
            /**
             * Columns that should not be exported.
             *
             * The selectionRowHeader is already automatically suppressed,
             * but if you had a button column or some other "system" column that shouldn't be shown in the output,
             * then add it in this list.
             *
             * You should provide an array of column names.
             * Defaults to: []
             * @default []
             */
            exporterSuppressColumns?: Array<string> | undefined;
            /**
             * Don't show the export menu button, implying the user will roll their own UI for calling the exporter
             * Defaults to false
             * @default false
             */
            exporterSuppressMenu?: boolean | undefined;
        }

        /**
         * GridRow settings for exporter
         */
        export interface IGridRow {
            /**
             * If set to false, then don't export this row, notwithstanding visible or other settings.
             * Defaults to true
             * @default true
             */
            exporterEnableExporting?: boolean | undefined;
        }

        /**
         * Public Api for exporter feature
         */
        export interface IGridExporterApi {
            /**
             * Exports rows from the grid in csv format, the data exported is selected based on the provided options
             * @param rowTypes which rows to export, valid values are uiGridExporterConstants.ALL,
             * uiGridExporterConstants.VISIBLE, uiGridExporterConstants.SELECTED
             * @param colTypes which columns to export, valid values are uiGridExporterConstants.ALL,
             * uiGridExporterConstants.VISIBLE
             */
            csvExport(rowTypes: string, colTypes: string): void;
            /**
             * Exports rows from the grid in pdf format, the data exported is selected based on the provided options
             * Note that this function has a dependency on pdfMake, all going well this has been installed for you. The
             * resulting pdf opens in a new browser window.
             * @param rowTypes which rows to export, valid values are uiGridExporterConstants.ALL,
             * uiGridExporterConstants.VISIBLE, uiGridExporterConstants.SELECTED
             * @param colTypes which columns to export, valid values are uiGridExporterConstants.ALL,
             * uiGridExporterConstants.VISIBLE
             */
            pdfExport(rowTypes: string, colTypes: string): void;
        }

        /**
         * constants available in exporter module
         */
        export interface IUiGridExporterConstants {
            featureName: string;
            /** export all data, including data not visible.  Can be set for either rowTypes or colTypes */
            ALL: string;
            /** export only visible data, including data not visible.  Can be set for either rowTypes or colTypes */
            VISIBLE: string;
            /**
             * Export all data, including data not visible.
             * Can be set only for rowTypes, selection of only some columns is not supported
             */
            SELECTED: string;
            CSV_CONTENT: string;
            BUTTON_LABEL: string;
            FILE_NAME: string;
        }
    }

    export namespace grouping {
        /**
         * ColumnDef for grouping feature, these are available to be set using the ui-grid gridOptions.columnDefs
         */
        export interface IColumnDef {
            /** Enable grouping on this column.  Defaults to true. */
            enableGrouping?: boolean | undefined;
            /**
             * Set the grouping for a column.
             * Note that aggregation used to be included in grouping, but is now separately set on the column via
             * treeAggregation setting in treeBase
             *
             * We group in the priority order given, this will also put these columns to the high order of the sort
             * irrespective of the sort priority given them.
             * If there is no sort defined then we sort ascending, if there is a sort defined then we use that sort.
             *
             * If the groupPriority is undefined or less than 0, then we expect to be aggregating,
             * and we look at the aggregation types to determine what sort of aggregation we can do.
             * Values are in the constants file, but include SUM, COUNT, MAX, MIN
             *
             * groupPriorities should generally be sequential, if they're not then the next time getGrouping is called
             * we'll renumber them to be sequential.
             * Defaults to undefined.
             */
            grouping?: {
                /**
                 * number, starts at 0, if less than 0 or undefined then we're aggregating in this column
                 */
                groupPriority: number;
            } | undefined;
            /**
             * Show the aggregation menu on this column.  Defaults to true
             * @default true
             */
            groupingShowAggregationMenu?: boolean | undefined;
            /**
             * Show the grouping (group and ungroup items) menu on this column.  Defaults to true
             * @default true
             */
            groupingShowGroupingMenu?: boolean | undefined;
        }

        /**
         * GridOptions for grouping feature, these are available to be set using the ui-grid gridOptions
         */
        export interface IGridOptions {
            /**
             * Allows group header rows to be selected.
             * Defaults to false
             * @default false
             */
            enableGrouping?: boolean | undefined;
            /**
             * Enable row grouping for entire grid.
             * Defaults to true
             * @default true
             */
            enableGroupHeaderSelection?: boolean | undefined;
            /**
             * The string to use for the grouping header row label on rows which contain
             * a null or undefined value in the grouped column.
             * Defaults to "Null"
             * @default 'Null'
             */
            groupingNullLabel?: string | undefined;
            /**
             * Shows counts on the groupHeader rows.
             * Note that if you are using a cellFilter or a sortingAlgorithm which relies on a specific format or data
             * type, showing counts may cause that to break, since the group header rows will always be a string with
             * groupingShowCounts enabled. Defaults to true except on columns of type 'date'
             * @default true
             */
            groupingShowCounts?: boolean | undefined;
        }

        /**
         * Public Api for grouping feature
         */
        export interface IGridGroupingApi<TEntity> {
            // Methods
            /**
             * Sets the aggregation type on a column.
             * If the column is currently grouped then it removes the grouping first.
             * If the aggregationDef is null then will result in the aggregation being removed.
             * @param columnName The name of the column we want to aggregate
             * @param or aggregationDef one of the recognised types from uiGridGroupingConstants or
             * a custom aggregation function.
             * @param [aggregationLabel] The label to use for aggregation
             */
            aggregateColumn(columnName: string, or: string | Function, aggregationLabel?: string): void;
            /**
             * Clear any grouped columns and any aggregations.
             * Doesn't remove sorting, as we don't know whether that sorting was added by grouping or was there
             * beforehand
             */
            clearGrouping(): void;
            /**
             * Get the grouping configuration for this grid, used by the saveState feature.
             * Adds expandedState to the information provided by the internal getGrouping,
             * and removes any aggregations that have a source of grouping
             * (i.e. will be automatically reapplied when we regroup the column)
             * @param getExpanded whether or not to return the expanded state
             */
            getGrouping(getExpanded: boolean): IGridGroupingConfiguration;
            /**
             * Adds this column to the existing grouping, at the end of the priority order.
             * If the column doesn't have a sort, adds one, by default ASC.
             * This column will move to the left of any non-group columns.
             * The move is handled in a columnProcessor, so it gets called as part of refresh.
             * @param columnName the name of the column we want to group
             */
            groupColumn(columnName: string): void;
            /**
             * Set the grouping configuration for this grid, used by the saveState feature,
             * but can also be used by any user to specify a combined grouping and aggregation configuration
             * @param config The config to apply, in the format provided out by getGrouping
             */
            setGrouping(config: IGridGroupingConfiguration): void;
            /**
             * Removes the groupPriority from this column.
             * If the column was previously aggregated the aggregation will come back. The sort will remain.
             *
             * This column will move to the right of any other group columns, the move is handled in a columnProcessor,
             * so it gets called as part of refresh
             * @param columnName the name of the column to ungroup
             */
            ungroupColumn(columnName: string): void;

            // Events
            on: {
                /**
                 * raised whenever aggregation is changed, added or removed from a column
                 * @param scope Grid Scope
                 * @param handler Callback method
                 */
                aggregationChanged: (scope: ng.IScope, handler: aggregationChangedHandler<TEntity>) => void;
                /**
                 * raised whenever the grouped columns change
                 * @param scope Grid Scope
                 * @param handler Callback method
                 */
                groupingChanged: (scope: ng.IScope, handler: groupingChangedHandler<TEntity>) => void;
            };
        }
        /**
         * Grid grouping configuration for the grid.  Used by the saveState feature
         */
        export interface IGridGroupingConfiguration {
            /**
             * GroupArray.  Sorted by groupPriority
             */
            grouping: Array<IGripGroup>;
            /**
             * Array of aggregation objects
             */
            treeAggregations: Array<IGridTreeAggregations>;
            /**
             * Hash of currently expanded nodes
             */
            expandedState?: IGridExpandedHash | undefined;
        }

        export interface IGripGroup {
            field: string;
            colName: string;
            groupPriority: number;
        }

        export interface IGridTreeAggregations {
            field: string;
            colName: string;
            aggregation: string;
        }

        /**
         * Recursive hash of the currently expanded and collapsed nodes.
         */
        export interface IGridExpandedHash {
            [key: string]: IGridExpandedHash | string;
        }
        export interface aggregationChangedHandler<TEntity> {
            /**
             * raised whenever aggregation is changed, added or removed from a column
             * @param col the column which on which aggregation changed.
             *        The aggregation type is available as col.treeAggregation.type
             */
            (col: IGridColumnOf<TEntity>): void;
        }

        export interface groupingChangedHandler<TEntity> {
            /**
             * raised whenever the grouped columns changes
             * @param col the column which on which grouping changed.
             *   The new grouping is available as col.grouping
             */
            (col: IGridColumnOf<TEntity>): void;
        }

        /**
         * Constants available in grouping module including all constants declared in the treeBase module.
         * These are manually copied as there isn't an easy way to include constants in another constants file, and we
         * don't want to make users include treeBase.
         */
        interface IUiGridGroupingConstants extends ISharedTreeConstants {
            featureName: string;
        }
    }

    export namespace importer {
        /**
         * GridOptions for importer feature, these are available to be set using the ui-grid gridOptions
         */
        export interface IGridOptions<TEntity> {
            /**
             * A mandatory callback function that adds data to the source data array.
             * The grid generally doesn't add rows to the source data array,
             * it is tidier to handle this through a user callback.
             * @param grid The grid we're importing into, may be useful in some way
             * @param newObjects An array of new objects that you should add to your data
             */
            importerDataAddCallback?:
                | ((grid: IGridInstanceOf<TEntity>, newObjects: Array<TEntity>) => void)
                | undefined;
            /**
             * A callback function that provides custom error handling,
             * rather than the standard grid behaviour of an alert box and a console message.
             * You might use this to internationalise the console log messages,
             * or to write to a custom logging routine that returned errors to the server.
             * @param grid the grid we're importing into, may be useful if you're positioning messages
             * @param errorKey one of the i18n keys the importer can return -
             *        * importer.noHeaders
             *        * importer.noObjects
             *        * importer.invalidCsv
             *        * importer.invalidJson
             *        * importer.jsonNotArray
             * @param consoleMessage the English console message that importer would have written
             * @param context the context data that importer would have appended to that console message,
             *        often the file content itself or the element that is in error
             */
            importerErrorCallback?:
                | ((grid: IGridInstanceOf<TEntity>, errorKey: string, consoleMessage: string, context: any) => void)
                | undefined;
            /**
             * A callback function that will filter (usually translate) a single header.
             * Used when you want to match the passed in column names to the column displayName after the header filter.
             * Your callback routine needs to return the filtered header value.
             * @param displayName The displayName to translate
             * @returns The translated name
             */
            importerHeaderFilter?: ((displayName: string) => string) | undefined;
            /**
             * A callback that massages the data for each object.
             * For example, you might have data stored as a code value, but display the decode.
             * This callback can be used to change the decoded value back into a code.
             * Defaults to angular.identity.
             * @param grid The grid
             * @param newObject The new object as importer has created it.  Modify it and return modified
             * version
             * @returns The modified object
             * @default angular.identity
             */
            importerObjectCallback?: ((grid: IGridInstanceOf<TEntity>, newObject: TEntity) => TEntity) | undefined;
            /**
             * A callback function that will process headers using custom
             * logic.  Set this callback function if the headers that your user will provide in their
             * import file don't necessarily match the grid header or field names.  This might commonly
             * occur where your application is internationalised, and therefore the field names
             * that the user recognises are in a different language than the field names that
             * ui-grid knows about.
             *
             * Defaults to the internal `processHeaders` method, which seeks to match using both
             * displayName and column.name.  Any non-matching columns are discarded.
             *
             * Your callback routine should respond by processing the header array, and returning an array
             * of matching column names.  A null value in any given position means "don't import this column"
             * @param grid the grid we're importing into
             * @param headerArray an array of the text from the first row of the csv file,
             * which you need to match to column.names
             * @returns array of matching column names, in the same order as the headerArray
             */
            importerProcessHeaders?:
                | ((grid: IGridInstanceOf<TEntity>, headerArray: Array<string>) => Array<string>)
                | undefined;
            /**
             * Whether or not importer is enabled.  Automatically set
             * to false if the user's browser does not support the required fileApi.
             * Otherwise defaults to true.
             * @default true
             */
            enableImporter?: boolean | undefined;
            /**
             * An object on which we call `new` to create each new row before inserting it into
             * the data array.  Typically this would be a $resource entity, which means that if you're using
             * the rowEdit feature, you can directly call save on this entity when the save event is triggered.
             *
             * Defaults to a vanilla javascript object
             * @default {}
             */
            importerNewObject?: Function | undefined;
            /**
             * Whether or not to show an item in the grid menu.
             * Defaults to true.
             * @default true
             */
            importerShowMenu?: boolean | undefined;
        }

        /**
         * Public Api for importer feature
         */
        export interface IGridImporterApi {
            /**
             * Imports a file into the grid using the file object provided. Bypasses the grid menu
             * @param fileObject The file we want to import as a javascript File object
             */
            importFile(fileObject: File): void;
        }

        /**
         * constants available in importer module
         */
        export interface IUiGridImporterConstants {
            featureName: string;
        }
    }

    /**
     * This module provides infinite scroll functionality to ui-grid
     */
    export namespace infiniteScroll {
        /**
         * GridOptions for infinite scroll feature, these are available to be set using the ui-grid gridOptions
         */
        export interface IGridOptions {
            /**
             * Enable infinite scrolling for this grid
             * Defaults to true
             * @default true
             */
            enableInfiniteScroll?: boolean | undefined;
        }

        /**
         * Public API for infinite scroll feature
         */
        export interface IGridInfiniteScrollApi<TEntity> {
            // Methods
            /**
             * Call this function when you have loaded the additional data requested.
             * You should set scrollUp and scrollDown to indicate whether there are still more pages in each direction.
             *
             * If you call dataLoaded without first calling saveScrollPercentage, then we will scroll the user to the
             * start of the newly loaded data.  This usually makes scrolling smooth, but be jumpy with large
             * infiniteScrollRowsFromEnd values, and on variable speed internet connections.
             * Using saveScrollPercentage as demonstrated in the tutorial should give a smoother scrolling experience
             * for users.
             *
             * See infinite_scroll tutorial for example of usage
             * @param scrollUp if set to false flags that there are no more pages upwards, so don't fire any
             *        more infinite scroll events upward
             * @param scrollDown if set to false flags that there are no more pages downwards, so don't fire
             *        any more infinite scroll events downward
             * @returns a promise that is resolved when the grid scrolling is fully adjusted.
             *          If you're planning to remove pages, you should wait on this promise first, or you'll break the
             *          scroll positioning
             */
            dataLoaded(scrollUp: boolean, scrollDown: boolean): ng.IPromise<any>;
            /**
             * Adjusts the scroll position after you've removed data at the bottom
             * @param scrollUp flag that there are pages upwards, fire infinite scroll events upward
             * @param scrollDown flag that there are pages downwards, so fire infinite scroll events downward
             * @returns A promise that is resolved when scrolling finishes
             */
            dataRemovedBottom(scrollUp: boolean, scrollDown: boolean): ng.IPromise<any>;
            /**
             * Adjusts the scroll position after you've removed data at the bottom.
             * You should have called saveScrollPercentage before you remove the data,
             * and if you're doing this in response to a needMoreData you should wait
             * until the promise from loadData has resolved before you start removing data
             *
             * @param grid the grid we're working on
             * @param scrollUp flag that there are pages upwards, fire infinite scroll events upward
             * @param scrollDown flag that there are pages downwards, so fire infinite scroll events downward
             * @returns A promise that is resolved when scrolling finishes
             */
            dataRemovedBottom(grid: IGridInstanceOf<TEntity>, scrollUp: boolean, scrollDown: boolean): ng.IPromise<any>;
            /**
             * Adjusts the scroll position after you've removed data at the bottom
             * @param scrollUp flag that there are pages upwards, fire infinite scroll events upward
             * @param scrollDown flag that there are pages downwards, so fire infinite scroll events downward
             * @returns A promise that is resolved when scrolling finishes
             */
            dataRemovedTop(scrollUp: boolean, scrollDown: boolean): ng.IPromise<any>;
            /**
             * Adjusts the scroll position after you've removed data at the bottom.
             * You should have called saveScrollPercentage before you remove the data,
             * and if you're doing this in response to a needMoreData you should wait
             * until the promise from loadData has resolved before you start removing data
             *
             * @param grid the grid we're working on
             * @param scrollUp flag that there are pages upwards, fire infinite scroll events upward
             * @param scrollDown flag that there are pages downwards, so fire infinite scroll events downward
             * @returns A promise that is resolved when scrolling finishes
             */
            dataRemovedTop(grid: IGridInstanceOf<TEntity>, scrollUp: boolean, scrollDown: boolean): ng.IPromise<any>;
            /**
             * Call this function when you have taken some action that makes the current scroll position invalid.
             * For example, if you're using external sorting and you've resorted then you might reset the scroll,
             * or if you've otherwise substantially changed the data, perhaps you've reused an
             * existing grid for a new data set
             *
             * You must tell us whether there is data upwards or downwards after the reset
             * @param scrollUp flag that there are pages upwards, fire infinite scroll events upward
             * @param scrollDown flag that there are pages downwards, so fire infinite scroll events downward
             * @returns A promise that is resolved when scrolling finishes
             */
            resetScroll(scrollUp: boolean, scrollDown: boolean): ng.IPromise<any>;
            /**
             * Saves the scroll percentage and number of visible rows before you adjust the data,
             * used if you're subsequently going to call dataRemovedTop or dataRemovedBottom
             */
            saveScrollPercentage(): void;

            // Events
            on: {
                /**
                 * This event fires when scroll reaches bottom percentage of grid and needs to load data
                 */
                needLoadMoreData: Function;
                /**
                 * This event fires when scroll reaches top percentage of grid and needs to load data
                 */
                needLoadMoreDataTop: Function;
            };
        }
    }

    export namespace moveColumns {
        /**
         * Column Definition for move column features.
         * These are available to be set using the ui-grid `gridOptions.columnDefs`
         */
        export interface IColumnDef {
            /**
             * Enable column moving for the column
             */
            enableColumnMoving?: boolean | undefined;
        }

        /**
         * Options for configuring the move column feature, these are available to be set using the ui-grid gridOptions
         */
        export interface IGridOptions {
            /**
             * If defined, sets the default value for the colMovable flag on each individual colDefs
             * if their individual enableColumnMoving configuration is not defined.
             * Defaults to true.
             * @default true
             */
            enableColumnMoving?: boolean | undefined;
        }

        export interface IGridMoveColumnsApi {
            // Methods
            /**
             * Method can be used to change column position
             * @param originalPosition Original column position as a 0 indexed integer
             * @param newPosition New column position as a 0 indexed integer
             */
            moveColumn(originalPosition: number, newPosition: number): void;

            // Events
            on: {
                /**
                 * Raised when a column is moved
                 * @param scope Grid Scope
                 * @param handler Callback Function
                 */
                columnPositionChanged?: ((scope: ng.IScope, handler: columnPositionChangedHandler) => void) | undefined;
            };
        }
        export interface columnPositionChangedHandler {
            (colDef: IColumnDef, originalPosition: number, finalPosition: number): void;
        }
    }

    export namespace pagination {
        /**
         * Pagination related grid options
         */
        export interface IGridOptions {
            /**
             * Enables pagination, defaults to true
             * @default true
             */
            enablePagination?: boolean | undefined;
            /**
             * Enables the paginator at the bottom of the grid. Turn this off, if you want to implement your own
             * controls outside the grid
             */
            enablePaginationControls?: boolean | undefined;
            /**
             * Current page number, defaults to 1
             * @default 1
             */
            paginationCurrentPage?: number | undefined;
            /**
             * Page size, defaults to the first item in paginationPageSizes, or 0 if paginationPageSizes is empty
             */
            paginationPageSize?: number | undefined;
            /**
             * Array of page sizes, defaults to [250, 500, 1000]
             * @default [250, 500, 1000]
             */
            paginationPageSizes?: Array<number> | undefined;
            /**
             * A custom template for the pager, defaults to ui-grid/pagination
             * @default 'ui-grid/pagination'
             */
            paginationTemplate?: string | undefined;
            /**
             * Total number of items, set automatically when client side pagination,
             * needs set by user for server side pagination
             */
            totalItems?: number | undefined;
            /**
             * Disables client side pagination. When true, handle the paginationChanged event and set data and
             * totalItems, defaults to false
             * @default false
             */
            useExternalPagination?: boolean | undefined;
        }
        export interface IGridPaginationApi {
            // Methods
            /**
             * Get the current page
             * @returns the number of the current page
             */
            getPage(): number;
            /**
             * Get the total number of pages
             * @returns the total number of pages
             */
            getTotalPages(): number;
            /**
             * Moves to the next page if possible
             */
            nextPage(): void;
            /**
             * Moves to the previous page if we're not on the first page.
             */
            previousPage(): void;
            /**
             * Moves to the requested page
             * @param page The number of the page that should be displayed
             */
            seek(page: number): void;

            // Events
            on: {
                /**
                 * This event fires when the pageSize or currentPage changes
                 * @param scope The grid scope
                 * @param handler Callback
                 */
                paginationChanged: (scope: ng.IScope, handler: paginationChangedHandler) => void;
            };
        }

        /**
         * The callback for paginationChanged
         * @param newPage requested page number
         * @param pageSize requested page size
         */
        export interface paginationChangedHandler {
            (newPage: number, pageSize: number): void;
        }
    }

    export namespace pinning {
        /**
         * ColumnDef for pinning feature, these are available to be set using the ui-grid gridOptions.columnDefs
         */
        export interface IColumnDef {
            /**
             * Enable pinning for the individual column.  Defaults to true
             * @default true
             */
            enablePinning?: boolean | undefined;
            /**
             * Column is pinned left when grid is rendered.  Defaults to false
             * @default false
             */
            pinnedLeft?: boolean | undefined;
            /**
             * Column is pinned right when grid is rendered.  Defaults to false
             * @default false
             */
            pinnedRight?: boolean | undefined;
        }

        /**
         * Pinning related grid options
         */
        export interface IGridOptions {
            /**
             * Enable pinning for the entire grid.
             * Defaults to true
             * @default true
             */
            enablePinning?: boolean | undefined;
        }

        export interface IGridPinningApi<TEntity> {
            // Methods
            /**
             * Pin column left, right, or none
             * @param col The column being pinned
             * @param container One of the recognized container types from uiGridPinningConstants
             */
            pinColumn(col: IGridColumnOf<TEntity>, container: string): void;

            // Events
            /**
             * raised when column pin state has changed
             * @param scope The grid scope
             * @param handler Callback
             */
            columnPin: (scope: ng.IScope, handler: columnPinHandler) => void;
        }

        export interface columnPinHandler {
            /**
             * Callback to columnPin event
             * @param colDef The column that was changed
             * @param container The render container the column is in.  Options:
             *        * uiGridPinningConstants.container.LEFT
             *        * uiGridPinningConstants.container.RIGHT,
             *        * uiGridPinningConstants.container.NONE
             */
            (colDef: IColumnDef, container: string): void;
        }

        export interface IUiGridPinningConstants {
            container: {
                LEFT: string;
                RIGHT: string;
                NONE: string;
            };
        }
    }

    export namespace resizeColumns {
        /**
         * ColumnDef for resizeColumns feature, these are available to be set using the ui-grid gridOptions.columnDefs
         */
        export interface IColumnDef {
            /**
             * Enable column resizing on an individual column
             * Defaults to GridOptions.enableColumnResizing
             */
            enableColumnResizing?: boolean | undefined;
        }
        /**
         * Column Resizing Grid Options
         */
        export interface IGridOptions {
            /**
             * Enable column resizing on the entire grid
             * Defaults to true
             * @default true
             */
            enableColumnResizing?: boolean | undefined;
        }

        /**
         * Public Api for column resize feature
         */
        export interface IGridResizeColumnsApi {
            // Events
            on: {
                /**
                 * Raised when column is resized
                 * @param scope Grid Scope
                 * @param handler Callback
                 */
                columnSizeChanged: (scope: ng.IScope, handler: columnSizeChangedHandler) => void;
            };
        }

        export interface columnSizeChangedHandler {
            /**
             * Callback when column size is changed
             * @param colDef The column that was resized
             * @param delta The change in the size of the column
             */
            (colDef: IColumnDef, delta: number): void;
        }
    }

    export namespace rowEdit {
        /**
         * Row Edit Grid Options
         */
        export interface IGridOptions {
            /**
             * How long the grid should wait for another change on this row before triggering a save (in milliseconds).
             * If set to -1, then saves are never triggered by timer
             * (implying that the user will call flushDirtyRows() manually)
             */
            rowEditWaitInterval?: number | undefined;
        }

        export interface IGridRowEditApi<TEntity> {
            // Methods
            /**
             * Triggers a save event for all currently dirty rows.
             * Could be used where user presses a save button or navigates away from the page
             * @param grid The grid
             * @returns a promise that represents the aggregate of all of the individual save
             *          promises.  i.e. it will be resolved when all the individual save promises have been resolved.
             */
            flushDirtyRows(grid?: IGridInstanceOf<TEntity>): ng.IPromise<Array<any>>;
            /**
             * Returns all currently dirty rows
             * @param grid The target grid
             * @returns An array of gridRows that are currently dirty
             */
            getDirtyRows(grid?: IGridInstanceOf<TEntity>): Array<IGridRowOf<TEntity>>;
            /**
             * Returns all currently errored rows
             * @param grid The target grid
             * @returns An array of gridRows that are currently in error
             */
            getErrorRows(grid?: IGridInstanceOf<TEntity>): Array<IGridRowOf<TEntity>>;
            /**
             * Sets each of the rows passed in dataRows to be clean,
             * removing them from the dirty cache and the error cache,
             * and clearing the error flag and the dirty flag
             * @param dataRows the data entities for which the gridRows should be set clean
             */
            setRowsClean(dataRows: Array<TEntity>): void;
            /**
             * Sets each of the rows passed in dataRows to be dirty,
             * Note that if you have only just inserted the rows into your data,
             * you will need to wait for a $digest cycle before the gridRows are present.  As a result, this is often
             * wrapped with $interval or $timeout.
             * @param dataRows the data entities for which the gridRows should be set dirty
             */
            setRowsDirty(dataRows: Array<TEntity>): void;
            /**
             * Sets the promise associated with the row save, mandatory that the saveRow event handler calls this method
             * somewhere before returning
             * @param rowEntity A data row from the grid for which a save has been initiated
             * @param savePromise A promise that will be resolved when the save is successful, or
             *        rejected if the save fails
             */
            setSavePromise(rowEntity: Object, savePromise: ng.IPromise<any>): void;

            // Events
            on: {
                /**
                 * Raised when a row is ready for saving.
                 * Once your row has saved you may need to use angular.extend to update the data entity
                 * with any changed data from your save.
                 * i.e. lock version information, or last update time/user information
                 *
                 * Your method should call setSavePromise somewhere in the body before returning control.
                 * The feature will then wait, with the gridRow greyed out whilst this promise is being resolved.
                 * @param scope The grid scope
                 * @param handler Callback
                 */
                saveRow: (scope: ng.IScope, handler: saveRowHandler<TEntity>) => void;
            };
        }

        export interface saveRowHandler<TEntity> {
            /**
             * Callback method for save row
             * @param rowEntity The options.data element that was edited
             */
            (rowEntity: TEntity): void;
        }
    }

    export namespace saveState {
        /**
         * Save State Grid Options
         */
        export interface IGridOptions {
            /**
             * Save the current filter state for each column
             * Defaults to true
             * @default true
             */
            saveFilter?: boolean | undefined;
            /**
             * Save the current focused cell. On returning to this focused cell we'll also scroll.
             * This option is preferred to the saveScroll option, so is set to true by default.
             * If saveScroll is set to true then this option will be disabled.
             *
             * By default this option saves the current row number and column number, and returns to that row and
             * column. However, if you define a saveRowIdentity function, then it will return you to the currently
             * selected column within that row (in a business sense - so if some rows have been deleted, it will still
             * find the same data, presuming it still exists in the list. If it isn't in the list then it will instead
             * return to the same row number - i.e. scroll percentage)
             *
             * Note that this option will do nothing if the cellNav feature is not enabled.
             *
             * Defaults to true (unless saveScroll is true)
             * @default true
             */
            saveFocus?: boolean | undefined;
            /**
             * Save the grouping configuration. If set to true and the grouping feature is not enabled then does
             * nothing. Defaults to true
             * @default true
             */
            saveGrouping?: boolean | undefined;
            /**
             * Save the grouping row expanded states.
             * If set to true and the grouping feature is not enabled then does nothing.
             *
             * This can be quite a bit of data, in many cases you wouldn't want to save this information.
             *
             * Defaults to false
             * @default false
             */
            saveGroupingExpandedStates?: boolean | undefined;
            /**
             * Restore the current column order.
             * Note that unless you've provided the user with some way to reorder their columns
             * (for example the move columns feature), this makes little sense.
             * Defaults to true
             * @default true
             */
            saveOrder?: boolean | undefined;
            /**
             * Save pinning state for columns.
             * Defaults to true
             * @default true
             */
            savePinning?: boolean | undefined;
            /**
             * A function that can be called, passing in a rowEntity, and that will return a unique id for that row.
             * This might simply return the id field from that row (if you have one),
             * or it might concatenate some fields within the row to make a unique value.
             *
             * This value will be used to find the same row again and set the focus to it, if it exists when we return.
             *
             * Defaults to undefined
             * @default undefined
             */
            saveRowIdentity?: boolean | undefined;
            /**
             * Save the current scroll position.
             * Note that this is saved as the percentage of the grid scrolled -
             * so if your user returns to a grid with a significantly different number of rows
             * (perhaps some data has been deleted) then the scroll won't actually show the same rows as before.
             * If you want to scroll to a specific row then you should instead use the saveFocus option,
             * which is the default.
             *
             * Note that this element will only be saved if the cellNav feature is enabled
             *
             * Defaults to false
             * @default false
             */
            saveScroll?: boolean | undefined;
            /**
             * Save the currently selected rows.
             * If the saveRowIdentity callback is defined, then it will save the id of the row and select that.
             * If not, then it will attempt to select the rows by row number,
             * which will give the wrong results if the data set has changed in the mean-time.
             *
             * Note that this option only does anything if the selection feature is enabled.
             *
             * Defaults to true
             * @default true
             */
            saveSelection?: boolean | undefined;
            /**
             * Save the current sort state for each column
             * Defaults to true
             *
             * @default true
             */
            saveSort?: boolean | undefined;
            /**
             * Save the treeView configuration. If set to true and the treeView feature is not enabled then does
             * nothing.
             *
             * @default true;
             */
            saveTreeView?: boolean | undefined;
            /**
             * Save whether or not columns are visible
             * Defaults to true
             * @default true
             */
            saveVisible?: boolean | undefined;
            /**
             * Save the current column widths.
             * Note that unless you've provided the user with some way to resize their columns
             * (say the resize columns feature), then this makes little sense.
             * Defaults to true
             * @default true
             */
            saveWidths?: boolean | undefined;
        }

        export interface IGridSaveStateApi {
            // Methods
            /**
             * Restores the provided state into the grid
             * @param $scope A scope we can broadcast on
             * @param state The state that should ve restored into the grid
             */
            restore($scope: ng.IScope, state: IGridSavedState): void;
            /**
             * Packages the current state of the grid into an object, and provides it to the user for saving
             * @returns Current grid state as a POJO
             */
            save(): IGridSavedState;
        }

        export interface IGridSavedState {
            columns?: Array<ISavedColumn> | undefined;
            scrollFocus?: ISavedScrollFocus | undefined;
            selection: Array<IRowVal>;
            grouping: grouping.IGridGroupingConfiguration;
            treeView: treeBase.ITreeState;
        }

        interface ISavedColumn {
            name: string;
            visible?: boolean | undefined;
            width?: number | undefined;
            sort?: ISortInfo | undefined;
            filters?: Array<IFilterOptions> | undefined;
            pinned?: string | undefined;
        }

        interface ISavedScrollFocus {
            focus?: boolean | undefined;
            colName?: string | undefined;
            rowVal?: IRowVal | undefined;
        }

        interface IRowVal {
            identity: boolean;
            row: number | any;
        }
    }

    export namespace selection {
        /**
         * GridOptions for selection feature, these are available to be set using the ui-grid gridOptions
         */
        export interface IGridOptions {
            /**
             * Shows the total number of selected items in footer if true.
             * Defaults to true.
             * GridOptions.showGridFooter must also be set to true.
             * @default true
             */
            enableFooterTotalSelected?: boolean | undefined;
            /**
             * Enable selection by clicking anywhere on the row.
             * Defaults to false if enableRowHeaderSelection is true, otherwise defaults to false.
             */
            enableFullRowSelection?: boolean | undefined;
            /**
             * Enable a row header to be used for selection
             * Defaults to true
             * @default true
             */
            enableRowHeaderSelection?: boolean | undefined;
            /**
             * Enable row selection for entire grid.
             * Defaults to true
             */
            enableRowSelection?: boolean | undefined;
            /**
             * Enable the select all checkbox at the top of the selectionRowHeader
             * Defaults to true
             * @default true
             */
            enableSelectAll?: boolean | undefined;
            /**
             * If selected rows are changed in bulk, either via the API or via the selectAll checkbox,
             * then a separate event is fired.
             * Setting this option to false will cause the rowSelectionChanged event to be called multiple times instead
             * Defaults to true
             * @default true
             */
            enableSelectionBatchEvent?: boolean | undefined;
            /**
             * Makes it possible to specify a method that evaluates for each row and sets its "enableSelection"
             * property.
             */
            isRowSelectable?: ((row: IGridRow) => boolean) | undefined;
            /**
             * Enable multiple row selection only when using the ctrlKey or shiftKey. Requires multiSelect to be true.
             * Defaults to false
             * @default false
             */
            modifierKeysToMultiSelect?: boolean | undefined;
            /**
             * Enable multiple row selection for entire grid
             * Defaults to true
             * @default true
             */
            multiSelect?: boolean | undefined;
            /**
             * Prevent a row from being unselected.
             * Works in conjunction with multiselect = false and gridApi.selection.selectRow() to allow you to
             * create a single selection only grid -
             * a row is always selected, you can only select different rows, you can't unselect the row.
             * Defaults to false
             * @default false
             */
            noUnselect?: boolean | undefined;
            /**
             * can be used to set a custom width for the row header selection column
             * Defaults to 30px
             * @default 30
             */
            selectionRowHeaderWidth?: number | undefined;
        }
        /**
         * Selection related grid row
         */
        export interface IGridRow {
            /**
             * Enable row selection for this row, only settable by internal code.
             *
             * The grouping feature, for example, might set group header rows to not be selectable.
             * Defaults to true
             * @default true
             */
            enableSelection?: boolean | undefined;
            /**
             * Selected state of row.
             * Should be readonly.
             * Make any changes to selected state using setSelected().
             * Defaults to false
             *
             * @default false
             */
            isSelected?: boolean | undefined;
            /**
             * Sets the isSelected property and updates the selectedCount
             * Changes to isSelected state should only be made via this function
             * @param selected Value to set
             */
            setSelected(selected: boolean): void;
        }
        /**
         * Public Api for selection feature
         */
        export interface IGridSelectionApi<TEntity> {
            // Methods
            /**
             * Unselects All Rows
             * @param event object if raised from event
             */
            clearSelectedRows(event?: ng.IAngularEvent): void;
            /**
             * Returns whether or not the selectAll checkbox is currently ticked.
             * The grid doesn't automatically select rows when you add extra data -
             * so when you add data you need to explicitly check whether the selectAll is set,
             * and then call setVisible rows if it is
             * @returns Whether or not selectAll checkbox is ticked
             */
            getSelectAllState(): boolean;
            /**
             * returns all selected rows as gridRows
             * @returns The selected rows
             */
            getSelectedGridRows(): Array<uiGrid.IGridRowOf<TEntity>>;
            /**
             * Gets selected rows as entities
             * @returns Selected row entities
             */
            getSelectedRows(): Array<TEntity>;
            /**
             * Selects all rows.  Does nothing if multiselect = false
             * @param event object if raised from event
             */
            selectAllRows(event?: ng.IAngularEvent): void;
            /**
             * Selects all visible rows.  Does nothing if multiselect = false
             * @param event object if raised from event
             */
            selectAllVisibleRows(event?: ng.IAngularEvent): void;
            /**
             * Select row by data
             * @param rowEntity gridOptions.data[] array value
             * @param event object if raised from event
             */
            selectRow(rowEntity: TEntity, event?: ng.IAngularEvent): void;
            /**
             * selects all GridRows who have an key that is equal to comparator
             * so for Example if isInEntity == false then it does this check: row[key] === comparator
             * if isInEntity == true then it does this check: row.entity[key] === comparator
             * @param isInEntity if true then key is in entity else it's directly in row
             * @param key the key to look for
             * @param comparator the value that key should have
             * @param evt object if raised from an event
             * @param lookInRows the rows to look in - if not provided then looks in grid.rows
             */
            selectRowByKey(
                isInEntity: boolean,
                key: string | number,
                comparator: any,
                evt?: ng.IAngularEvent,
                lookInRows?: Array<uiGrid.IGridRowOf<TEntity>>,
            ): void;
            /**
             * Select the specified row by visible index
             * (i.e. if you specify row 0 you'll get the first visible row selected).
             *
             * In this context visible means of those rows that are theoretically visible (i.e. not filtered),
             * rather than rows currently rendered on the screen.
             *
             * @param index Index within rowsVisible array
             * @param event object if raised from event
             */
            selectRowByVisibleIndex(index: number, event?: ng.IAngularEvent): void;
            /**
             * Sets the current gridOption.modifierKeysToMultiSelect to true or false
             * @param multiSelect true to only allow multiple rows when using ctrlKey or shiftKey is used
             */
            setModifierKeysToMultiSelect(multiSelect: boolean): void;
            /**
             * Sets the current gridOption.multiSelect to true or false
             * @param multiSelect true to allow multiple rows
             */
            setMultiSelect(multiSelect: boolean): void;
            /**
             * Toggles data row as selected or unselected
             * @param rowEntity gridOptions.data[] array value
             * @param event object if raised from event
             */
            toggleRowSelection(rowEntity: TEntity, event?: ng.IAngularEvent): void;
            /**
             * UnSelect the data row
             * @param rowEntity gridOptions.data[] array value
             * @param event object if raised from event
             */
            unSelectRow(rowEntity: TEntity, event?: ng.IAngularEvent): void;
            /**
             * Unselect the specified row by visible index (i.e. if you specify row 0 you'll get the first visible row unselected).
             * In this context visible means of those rows that are theoretically visible (i.e. not filtered), rather than rows currently rendered on the screen.
             * @param rowEntity index within the rowsVisible array
             * @param event object if raised from event
             */
            unSelectRowByVisibleIndex(rowNum: number, event?: ng.IAngularEvent): void;
            /**
             * unselects the GridRows who have an key that is equal to comparator
             * so for Example if isInEntity == false then it does this check: row[key] === comparator
             * if isInEntity == true then it does this check: row.entity[key] === comparator
             * @param isInEntity if true then key is in entity else it's directly in row
             * @param key the key to look for
             * @param comparator the value that key should have
             * @param evt object if raised from an event
             * @param lookInRows the rows to look in - if not provided then looks in grid.rows
             */
            unSelectRowByKey(
                isInEntity: boolean,
                key: string | number,
                comparator: any,
                evt?: ng.IAngularEvent,
                lookInRows?: Array<uiGrid.IGridRowOf<TEntity>>,
            ): void;

            // Events
            on: {
                /**
                 * is raised after the row.isSelected state is changed
                 * @param scope grid scope
                 * @param handler callback
                 */
                rowSelectionChanged: (scope: ng.IScope, handler: rowSelectionChangedHandler<TEntity>) => void;
                /**
                 * is raised after the row.isSelected state is changed in bulk,
                 * if the enableSelectionBatchEvent option is set to true (which it is by default).
                 * This allows more efficient processing of bulk events.
                 * @param scope grid scope
                 * @param handler callback
                 */
                rowSelectionChangedBatch: (scope: ng.IScope, handler: rowSelectionChangedBatchHandler<TEntity>) => void;
            };
        }
        export interface rowSelectionChangedHandler<TEntity> {
            /**
             * Callback for row selection changed
             * @param row The selected rows
             * @param event object if raised from event
             */
            (row: uiGrid.IGridRowOf<TEntity>, event?: ng.IAngularEvent): void;
        }

        export interface rowSelectionChangedBatchHandler<TEntity> {
            /**
             * Callback for row selection changed batch
             * @param row The selected rows
             * @param event object if raised from event
             */
            (row: Array<uiGrid.IGridRowOf<TEntity>>, event?: ng.IAngularEvent): void;
        }
    }

    export namespace treeBase {
        /**
         * ColumnDef for tree feature, these are available to be set using the ui-grid gridOptions.columnDefs
         */
        export interface IColumnDef<TEntity> {
            /**
             * A custom function that populates aggregation.rendered.
             * This is called when a particular aggregation has been fully calculated, and we want to render the value.
             *
             * With the native aggregation options we just concatenate aggregation.label and aggregation.value,
             * but if you wanted to apply a filter or otherwise manipulate the label or the value,
             * you can do so with this function.
             *
             * This function will be called after the the default finalizerFn.  Defaults to undefined
             * @default undefined
             * @param aggregation Aggregation object
             */
            customTreeAggregationFinalizerFn?: ((aggregation: IGridTreeBaseAggregationObject) => void) | undefined;
            /**
             * A custom function that aggregates rows into some form of total.
             * Aggregations run row-by-row, the function needs to be capable of creating a running total.
             *
             * The function will be provided the aggregation item (in which you can store running totals),
             * the row value that is to be aggregated,
             * and that same row value converted to a number (most aggregations work on numbers)
             * @param aggregation
             * @param fieldValue Value of the field
             * @param numValue Numeric value of the field
             * @param row Row objet
             */
            customTreeAggregationFn?:
                | ((
                    aggregation: IGridTreeBaseAggregationObject,
                    fieldValue: any,
                    numValue: number,
                    row: IGridRowOf<TEntity>,
                ) => void)
                | undefined;
            /**
             * A custom label to use for this aggregation.  If providedm, we don't use native i18n
             */
            treeAggregationLabel?: string | undefined;
            /**
             * Use one of the native or grid-level aggregation methods for calculating aggregations on this column.
             * Native method are in the constants file and include: SUM, COUNT, MIN, MAX, AVG.
             * This may also be the name of an aggregation function defined with treeCustomAggregations.
             *
             * If you are using aggregations you should either:
             * * also use grouping, in which case the aggregations are displayed in the group header, OR
             * * use treeView, in which case you can set `treeAggregationUpdateEntity: true` in the colDef, and
             * treeBase
             *   will store the aggregation information in the entity, or you can set `treeAggregationUpdateEntity:
             * false` in the colDef, and you need to manual retrieve the calculated aggregations from the
             * row.treeNode.aggregations
             *
             * Takes precedence over a treeAggregationFn, the two options should not be used together.
             * Defaults to undefined.
             * @default undefined
             */
            treeAggregationType?: string | undefined;
            /**
             * Store calculated aggregations into the entity,
             * allowing them to be displayed in the grid using a standard cellTemplate.
             * This defaults to true.
             * If you are using grouping then you shouldn't set it to false, as then the aggregations won't display.
             *
             * If you are using treeView in most cases you'll want to set this to true.
             * This will result in getCellValue returning the aggregation rather than whatever was stored in the cell
             * attribute on the entity.
             *
             * If you want to render the underlying entity value (and do something else with the aggregation),
             * then you could use a custom cellTemplate to display row.entity.myAttribute, rather than using
             * getCellValue.
             *
             * Defaults to true
             * @default true
             */
            treeAggregationUpdateEntity?: boolean | undefined;
        }

        /**
         * Tree Base Grid Options
         */
        export interface IGridOptions<TEntity> {
            /**
             * If set to true, show the expand/collapse button even if there are no children of a node.
             * You'd use this if you're planning to dynamically load the children
             * Defaults to true, grouping overrides to false
             * @default true
             */
            showTreeExpandNoChildren?: boolean | undefined;
            /**
             * If set to false, don't create the row header. Youll need to programatically control the expand states
             * Defaults to true
             * @default true
             */
            showTreeRowHeader?: boolean | undefined;
            /**
             * Define custom aggregation functions.
             * The properties of this object will be aggregation types available for use on columnDef
             * with treeAggregationType or through the column menu.
             *
             * If a function defined here uses the same name as one of the native aggregations,
             * this one will take precedence
             *
             * The finalizerFn may be used to manipulate the value before rendering, or to apply a custom rendered
             * value. If aggregation.rendered is left undefined, the value will be rendered. Note that the native
             * aggregation functions use an finalizerFn to concatenate the label and the value.
             *
             * Defaults to {}
             * @default {}
             */
            treeCustomAggregations?: { [index: string]: IGridTreeBaseCustomAggregation<TEntity> } | undefined;
            /**
             * Number of pixels of indent for the icon at each tree level, wider indents are visually more pleasing,
             * but will make the tree row header wider
             * Defaults to 10
             *
             * @default 10
             */
            treeIndent?: number | undefined;
            /**
             * If set to true, row header even if there are no tree nodes
             */
            treeRowHeaderAlwaysVisible?: boolean | undefined;
            /**
             * Base width of the tree header, provides for a single level of tree.
             * This is incremented by treeIndent for each extra level
             * Defaults to 30
             *
             * @default 30
             */
            treeRowHeaderBaseWidth?: number | undefined;
        }

        export interface IGridTreeBaseCustomAggregation<TEntity> {
            label: string;
            aggregationFn: (
                aggregation: IGridTreeBaseAggregationObject,
                fieldValue: any,
                numValue: number,
                row?: IGridRowOf<TEntity>,
            ) => void;
            finalizerFn?: ((aggregation: IGridTreeBaseAggregationObject) => void) | undefined;
        }
        export interface IGridTreeBaseAggregationObject {
            count: number;
            sum: number;
            value: number;
            rendered?: string | undefined;
        }

        export interface IGridTreeBaseApi<TEntity> {
            // Methods
            /**
             * Collapse all tree rows
             */
            collapseAllRows(): void;
            /**
             * collapse the specified row. When you expand the row again, all grandchildren will retain their state
             * @param row The row to collapse
             */
            collapseRow(row: IGridRowOf<TEntity>): void;
            /**
             * collapse all children of the specified row. When you expand the row again, all grandchildren will be
             * collapsed
             * @param row The row to collapse children of
             */
            collapseRowChildren(row: IGridRowOf<TEntity>): void;
            /**
             * Expands all tree rows
             */
            expandAllRows(): void;
            /**
             * Expand the immediate children of the specified row
             * @param row The row to expand
             * @param recursive true if you wish to expand the row's ancients
             */
            expandRow(row: IGridRowOf<TEntity>, recursive: boolean): void;
            /**
             * Get the children of the specified row
             * @param row The row you want the children of
             * @returns Array<IGridRow> Array of children rows
             */
            getRowChildren(row: IGridRowOf<TEntity>): Array<IGridRowOf<TEntity>>;
            /**
             * Get the tree state for this grid, used by the saveState feature Returned treeState as an object
             * ```{ expandedState: { uid: 'expanded', uid: 'collapsed' } }```
             * where expandedState is a hash of row uid and the current expanded state
             * @returns tree state
             * NOTE this is an incomplete feature in uiGrid
             */
            getTreeState(): ITreeState;
            /**
             * Set the expanded states of the tree
             * @param config The config you want to apply, in the format provided by getTreeState
             */
            setTreeState(config: ITreeState): void;
            /**
             * call expand if row is collapsed, and collapse if it is expanded
             * @param row The row to toggle
             */
            toggleRowTreeState(row: IGridRowOf<TEntity>): void;

            // Events
            on: {
                /**
                 * Raised when a row is collapsed.  Doesn't really have a purpose at the moment.  Included for symmetry
                 * @param scope Grid scope
                 * @param handler Callback
                 */
                rowCollapsed: (scope: ng.IScope, handler: rowCollapsedHandler<TEntity>) => void;
                /**
                 * Raised whenever a row is expanded.
                 *
                 * If you are dynamically rendering your tree,
                 * in your callback you can retrieve the children of this row and load them into the grid data.
                 *
                 * When the data is loaded, the grid will automatically refresh to show these new rows.
                 * @param scope Grid Scope
                 * @param handler Callback
                 */
                rowExpanded: (scope: ng.IScope, handler: rowExpandedHandler<TEntity>) => void;
            };
        }

        export interface ITreeState {
            expandedState: {
                [index: string]: string;
            };
        }

        export interface rowCollapsedHandler<TEntity> {
            /**
             * Row Collapsed callback
             * @param row The row that was collapsed.  You can also retrieve the grid from this row with
             * row.grid
             */
            (row: IGridRowOf<TEntity>): void;
        }

        export interface rowExpandedHandler<TEntity> {
            /**
             * Row Expanded callback
             * @param row The row that was expanded.  You can also retrieve the grid from this row with
             * row.grid
             */
            (row: IGridRowOf<TEntity>): void;
        }

        /**
         * Constants available in treeBase module.
         *
         * These constants are manually copied into grouping and treeView,
         * as I haven't found a way to simply include them,
         * and it's not worth investing time in for something that changes very infrequently.
         */
        export interface IUiGridTreeBaseConstants extends ISharedTreeConstants {
            featureName: string;
        }
    }

    export namespace treeView {
        /**
         * GridOptions for treeView feature, these are available to be set using the ui-grid gridOptions
         *
         * Many tree options are set on treeBase, make sure to look at that feature in conjunction with these options
         */
        export interface IGridOptions {
            /**
             * Enable row tree view for entire grid.
             * Defaults to true
             * @default true
             */
            enableTreeView?: boolean | undefined;
        }

        export interface IUiGridTreeViewConstants extends ISharedTreeConstants {
            featureName: string;
        }
    }

    export interface ISharedTreeConstants {
        rowHeaderColName: string;
        EXPANDED: string;
        COLLAPSED: string;
        aggregation: {
            COUNT: string;
            SUM: string;
            MAX: string;
            MIN: string;
            AVG: string;
        };
    }

    // Tree View

    export interface IGridApiConstructor<TEntity> {
        new(grid: IGridInstanceOf<TEntity>): IGridApiOf<TEntity>;
    }
    export type IGridApi = IGridApiOf<any>;
    export interface IGridApiOf<TEntity> {
        /**
         * Registers a new event for the given feature. The event will get a .raise and .on prepended to it
         *
         * .raise.eventName() - takes no arguments
         *
         * .on.eventName(scope, callBackFn, _this)
         * scope - a scope reference to add a deregister call to the scopes .$on('destroy').
         * Scope is optional and can be a null value, but in this case you must deregister it yourself via the returned
         * deregister function
         * callBackFn - The function to call
         * _this - optional this context variable for callbackFn. If omitted, grid.api will be used for the context
         *
         * .on.eventName returns a dereg function that will remove the listener. It's not necessary to use it as the
         * listener will be removed when the scope is destroyed.
         * @param featureName name of the feature that raises the event
         * @param eventName name of the event
         */
        registerEvent(featureName: string, eventName: string): void;
        /**
         * Registers features and events from a simple objectMap.
         * eventObjectMap must be in this format (multiple features allowed)
         * @param eventObjectMap map of feature/event names
         */
        registerEventsFromObject(eventObjectMap: any): void;
        /**
         * Registers a new event for the given feature
         * @param featureName name of the feature
         * @param methodName name of the method
         * @param callBackFn function to execute
         * @param _this binds to callBackFn. Defaults to gridApi.grid
         */
        registerMethod(featureName: string, methodName: string, callBackFn: Function, _this: any): void;
        /**
         * Registers features and methods from a simple objectMap.
         * eventObjectMap must be in this format (multiple features allowed)
         * {featureName: { methodNameOne:function(args){}, methodNameTwo:function(args){} }
         * @param eventObjectMap map of feature/event names
         * @param _this binds this to _this for all functions. Defaults to gridApi.grid
         */
        registerMethodsFromObject(eventObjectMap: any, _this: any): void;
        /**
         * Used to execute a function while disabling the specified event listeners.
         * Disables the listenerFunctions, executes the callbackFn, and then enables the listenerFunctions again
         * @param listenerFuncs listenerFunc or array of listenerFuncs to suppress.
         *                      These must be the same functions that were used in the .on.eventName method
         * @param callBackFn function to execute
         */
        suppressEvents(listenerFuncs: Function | Array<Function>, callBackFn: Function): void;

        /**
         * Core Api
         */
        core: IGridCoreApi<TEntity>;

        /**
         * Cell Nav Api
         */
        cellNav: cellNav.ICellNavApi<TEntity>;

        /**
         * Move Columns Api
         */
        colMovable: moveColumns.IGridMoveColumnsApi;

        /**
         * Grid row resizable Api
         */
        colResizable: resizeColumns.IGridResizeColumnsApi;

        /**
         * Edit Api
         */
        edit: edit.IGridEditApi<TEntity>;

        /**
         * Expandable Api
         */
        expandable: expandable.IGridExpandableApi<TEntity>;

        /**
         * Exporter Api
         */
        exporter: exporter.IGridExporterApi;

        /**
         * Grouping Api
         */
        grouping: grouping.IGridGroupingApi<TEntity>;

        /**
         * Importer Api
         */
        importer: importer.IGridImporterApi;

        /**
         * Infinite Scroll Api
         */
        infiniteScroll: infiniteScroll.IGridInfiniteScrollApi<TEntity>;

        /**
         * Pagination Api
         */
        pagination: pagination.IGridPaginationApi;

        /**
         * Pinning Api
         */
        pinning: pinning.IGridPinningApi<TEntity>;

        /**
         * Grid Row Edit Api
         */
        rowEdit: rowEdit.IGridRowEditApi<TEntity>;

        /**
         * Grid Save State Api
         */
        saveState: saveState.IGridSaveStateApi;
        /**
         * Selection Api
         */
        selection: selection.IGridSelectionApi<TEntity>;

        /**
         * Tree Base Api
         */
        treeBase: treeBase.IGridTreeBaseApi<TEntity>;

        /**
         * A grid instance is made available in the gridApi.
         */
        grid: IGridInstanceOf<TEntity>;
    }
    export interface IGridRowConstructor<TEntity> {
        /**
         * GridRow is the viewModel for one logical row on the grid.
         * A grid Row is not necessarily a one-to-one relation to gridOptions.data.
         * @param entity the array item from GridOptions.data
         * @param index the current position of the row in the array
         * @param reference to the parent grid
         */
        new(entity: TEntity, index: number, reference: IGridInstanceOf<TEntity>): IGridRowOf<TEntity>;
    }
    export type IGridRow = IGridRowOf<any>;
    export interface IGridRowOf<TEntity>
        extends cellNav.IGridRow, edit.IGridRow, exporter.IGridRow, selection.IGridRow, expandable.IGridRow
    {
        /** A reference to an item in gridOptions.data[] */
        entity: TEntity;
        /** A reference back to the grid */
        grid: IGridInstanceOf<TEntity>;
        /**
         * height of each individual row. changing the height will flag all
         * row renderContainers to recalculate their canvas height
         */
        height: number;
        /** uniqueId of row */
        uid: string;
        /** if true, row will be rendered */
        visible: boolean;
        // Additional features enabled by other modules
        /**
         * If set to false, then don't export this row,
         * notwithstanding visible or other settings
         * Defaults to true
         * @default true
         */
        exporterEnableExporting: boolean;
        /**
         * Clears an override on the row that forces it to always be invisible.
         * Emits the rowsVisibleChanged event if it changed the row visibility.
         *
         * This method can be called from the api, passing in the gridRow we want altered.
         * It should really work by calling gridRow.clearRowInvisible,
         * but that's not the way I coded it, and too late to change now.
         * Changed to just call the internal function row.clearThisRowInvisible().
         * @param row the row we want to clear the invisible flag
         */
        clearRowInvisible(row: IGridRowOf<TEntity>): void;
        /**
         * Clears any override on the row visibility, returning it to normal visibility calculations.
         * Emits the rowsVisibleChanged event
         * @param reason the reason (usually the module) for the row to be invisible. E.g. grouping, user, filter
         * @param fromRowsProcessor whether we were called from a rowsProcessor, passed through to evaluateRowVisibility
         */
        clearRowInvisible(reason: string, fromRowsProcessor: boolean): void;
        /**
         * Determines whether the row should be visible based on invisibleReason,
         * and if it changes the row visibility, then emits the rowsVisibleChanged event.
         * Queues a grid refresh, but doesn't call it directly to avoid hitting lots of
         * grid refreshes.
         */
        evaluateRowVisibility(fromRowProcessor: boolean): void;
        /**
         * returns the qualified field name minus the row path ie: entity.fieldA
         * @param col column instance
         * @returns resulting name that can be evaluated against a row
         */
        getEntityQualifiedColField(col: IGridColumnOf<TEntity>): string;
        /**
         * returns the qualified field name as it exists on scope ie: row.entity.fieldA
         * @param col column instance
         * @returns resulting name that can be evaluated on scope
         */
        getQualifiedColField(col: IGridColumnOf<TEntity>): string;
        /**
         * Sets an override on the row that forces it to always be invisible.
         * Emits the rowsVisibleChanged event if it changed the row visibility.
         * This method can be called from the api, passing in the gridRow we want altered.
         * It should really work by calling gridRow.setRowInvisible,
         * but that's not the way I coded it, and too late to change now.
         * Changed to just call the internal function row.setThisRowInvisible().
         * @param row the row we want to set to invisible
         */
        setRowInvisible(row: IGridRowOf<TEntity>): void;
        /**
         * Sets an override on the row that forces it to always be invisible.
         * Emits the rowsVisibleChanged event if it changed the row visibility
         * @param reason the reason (usually the module) for the row to be invisible. E.g. grouping, user, filter
         * @param fromRowsProcessor whether we were called from a rowsProcessor, passed through to evaluateRowVisibility
         */
        setThisRowInvisible(reason: string, fromRowsProcessor: boolean): void;
    }

    export interface IGridColumnConstructor<TEntity> {
        /**
         * Represents the viewModel for each column.
         * Any state or methods needed for a Grid Column are defined on this prototype
         * @param gridCol Column definition
         * @param index the current position of the column in the array
         * @param grid reference to the grid
         */
        new(gridCol: IColumnDefOf<TEntity>, index: number, grid: IGridInstanceOf<TEntity>): IGridColumnOf<TEntity>;
    }

    export type IGridColumn = IGridColumnOf<any>;
    export interface IGridColumnOf<TEntity> {
        /** Column definition */
        colDef: uiGrid.IColumnDefOf<TEntity>;
        /** Default sort on this column */
        defaultSort?: ISortInfo | undefined;
        /**
         * Column name that will be shown in the header.
         * If displayName is not provided then one is generated using the name.
         */
        displayName?: string | undefined;
        /**
         * field must be provided if you wish to bind to a property in the data source.
         * Should be an angular expression that evaluates against grid.options.data array element.
         * Can be a complex expression: employee.address.city, or can be a function: employee.getFullAddress().
         * See the angular docs on binding expressions.
         */
        field?: string | undefined;
        /** Filter on this column */
        filter?: IFilterOptions | undefined;
        /** Filters for this column. Includes 'term' property bound to filter input elements */
        filters?: Array<IFilterOptions> | undefined;
        /** Reference to grid containing the column */
        grid: IGridInstanceOf<TEntity>;
        name?: string | undefined;
        /** Sort on this column */
        sort?: ISortInfo | undefined;
        /**
         * Algorithm to use for sorting this column. Takes 'a' and 'b' parameters
         * like any normal sorting function with additional 'rowA', 'rowB', and 'direction'
         * parameters that are the row objects and the current direction of the sort
         * respectively.
         */
        sortingAlgorithm?:
            | ((a: any, b: any, rowA: IGridRowOf<TEntity>, rowB: IGridRowOf<TEntity>, direction: string) => number)
            | undefined;
        /** Column width */
        width: number;
        /**
         * Initializes a column
         * @param colDef the column def to associate with this column
         * @param uid The unique and immutable uid we'd like to allocate to this column
         * @param grid the grid we'd like to create this column in
         */
        GridColumn(colDef: IColumnDefOf<TEntity>, uid: number, grid: IGridInstanceOf<TEntity>): void;
        /**
         * Gets the aggregation label from colDef.aggregationLabel if specified or by using i18n,
         * including deciding whether or not to display based on colDef.aggregationHideLabel.
         * @param label the i18n lookup value to use for the column label
         */
        getAggregationText(label: string): void;
        /**
         * gets the aggregation value based on the aggregation type for this column.
         * Debounced using scrollDebounce option setting
         */
        getAggregationValue(): string;
        /**
         * Returns the class name for the column
         * @param prefixDot if true, will return .className instead of className
         */
        getColClass(prefixDot: boolean): string;
        /** Returns the class definition for th column */
        getColClassDefinition(): string;
        /**
         * Returns the render container object that this column belongs to.
         * Columns will be default be in the body render container
         * if they aren't allocated to one specifically.
         */
        getRenderContainer(): any; // @todo replace with interface for render container
        /** Hides the column by setting colDef.visible = false */
        hideColumn(): void;
        /** Returns true if column is in the left render container */
        isPinnedLeft(): boolean;
        /** Returns true if column is in the right render container */
        isPinnedRight(): boolean;
        /**
         * Sets a property on the column using the passed in columnDef,
         * and setting the defaultValue if the value cannot be found on the colDef
         * @param colDef the column def to look in for the property value
         * @param propName the property name we'd like to set
         * @param defaultValue the value to use if the colDef doesn't provide the setting
         */
        setPropertyOrDefault(colDef: IColumnDefOf<TEntity>, propName: string, defaultValue: any): void;
        /** Makes the column visible by setting colDef.visible = true */
        showColumn(): void;
        /**
         * Moves settings from the columnDef down onto the column, and sets properties as appropriate
         * @param colDef the column def to look in for property value
         * @param isNew whether the column is being newly created, if not we're updating an existing
         *              column, and some items such as the sort shouldn't be copied down
         */
        updateColumnDef(colDef: IColumnDefOf<TEntity>, isNew: boolean): void;
    }

    /**
     * Definition / configuration of an individual column,
     * which would typically be one of many column definitions within the
     * gridOptions.columnDefs array
     */
    export type IColumnDef = IColumnDefOf<any>;
    export interface IColumnDefOf<TEntity>
        extends
            cellNav.IColumnDef,
            edit.IColumnDef<TEntity>,
            exporter.IColumnDef,
            grouping.IColumnDef,
            moveColumns.IColumnDef,
            pinning.IColumnDef,
            resizeColumns.IColumnDef,
            treeBase.IColumnDef<TEntity>
    {
        /**
         * defaults to false
         * if set to true hides the label text in the aggregation footer, so only the value is displayed.
         */
        aggregationHideLabel?: boolean | undefined;
        /**
         * The aggregation that you'd like to show in the columnFooter for this column.
         * Valid values are in uiGridConstants, and currently include:
         * uiGridConstants.aggregationTypes.count, uiGridConstants.aggregationTypes.sum,
         * uiGridConstants.aggregationTypes.avg, uiGridConstants.aggregationTypes.min,
         * uiGridConstants.aggregationTypes.max.
         *
         * You can also provide a function as the aggregation type,
         * in this case your function needs to accept the full set of visible rows,
         * and return a value that should be shown
         */
        aggregationType?: number | Function | undefined;
        /**
         * Allows float number in column width calculation
         */
        allowFloatWidth?: boolean | undefined;
        /**
         * cellClass can be a string specifying the class to append to a cell
         * or it can be a function(row,rowRenderIndex, col, colRenderIndex)
         * that returns a class name
         */
        cellClass?: string | ICellClassGetter<TEntity> | undefined;
        /** cellFilter is a filter to apply to the content of each cell */
        cellFilter?: string | undefined;
        /**
         * a custom template for each cell in this column.
         * The default is ui-grid/uiGridCell.
         * If you are using the cellNav feature,
         * this template must contain a div that can receive focus.
         */
        cellTemplate?: string | undefined;
        /**
         * Whether or not to show a tooltip when a user hovers over the cell.
         * If set to false, no tooltip.
         * If true, the cell value is shown in the tooltip (useful if you have long values in your cells),
         * if a function then that function is called passing in the row and the col cellTooltip(row, col)
         * and the return value is shown in the tooltip,
         * if it is a static string then displays that static string.
         * Defaults to false
         * @default false
         */
        cellTooltip?: boolean | string | ICellTooltipGetter<TEntity> | undefined;
        /** Default object of sort information */
        defaultSort?: ISortInfo | undefined;
        /**
         * Column name that will be shown in the header.
         * If displayName is not provided then one is generated using the name.
         */
        displayName?: string | undefined;
        /**
         * if column menus are enabled, controls the column menus for this specific column
         * (i.e. if gridOptions.enableColumnMenus, then you can control column menus using this option.
         * If gridOptions.enableColumnMenus === false then you get no column menus irrespective of the value of this
         * option
         * ). Defaults to true.
         * @default true
         */
        enableColumnMenu?: boolean | undefined;
        /**
         * Override for column menus everywhere - if set to false then you get no column menus.
         * Defaults to true
         * @default true
         */
        enableColumnMenus?: boolean | undefined;
        /** turn off filtering for an individual column, where you've turned on filtering for the overall grid */
        enableFiltering?: boolean | undefined;
        /**
         * When set to false, this setting prevents a user from hiding the column using the column menu or the grid
         * menu.
         * @default true
         */
        enableHiding?: boolean | undefined;
        /**
         * When enabled, this setting adds sort widgets to the column header, allowing sorting of the data in the
         * individual column.
         * @default true
         */
        enableSorting?: boolean | undefined;
        /**
         * field must be provided if you wish to bind to a property in the data source.
         * Should be an angular expression that evaluates against grid.options.data array element
         * Can be a complex expression: employee.address.city, or can be a function: employee.getFullAddress().
         * See the angular docs on binding expressions.
         */
        field?: string | undefined;
        /**
         * Specify a single filter field on this column.
         * A filter consists of a condition, a term, and a placeholder:
         */
        filter?: IFilterOptions | undefined;
        /**
         * @default false
         * When true uiGrid will apply the cellFilter before applying search filters
         */
        filterCellFiltered?: boolean | undefined;
        /**
         * a custom template for the filter input. The default is ui-grid/ui-grid-filter
         */
        filterHeaderTemplate?: string | undefined;
        /** Specify multiple filter fields */
        filters?: Array<IFilterOptions> | undefined;
        /**
         * footerCellClass can be a string specifying the class to append to a cell or it can be
         * a function(row,rowRenderIndex, col, colRenderIndex) that returns a class name
         */
        footerCellClass?: string | IHeaderFooterCellClassGetter<TEntity> | undefined;
        /** footerCellFilter is a filter to apply to the content of the column footer */
        footerCellFilter?: string | undefined;
        /** a custom template for the footer for this column. The default is ui-grid/uiGridFooterCell */
        footerCellTemplate?: string | undefined;
        /**
         * headerCellClass can be a string specifying the class to append to a cell or it can be
         * a function(row,rowRenderIndex, col, colRenderIndex) that returns a class name
         */
        headerCellClass?: string | IHeaderFooterCellClassGetter<TEntity> | undefined;
        /** headerCellFilter is a filter to apply to the content of the column header */
        headerCellFilter?: string | undefined;
        /** a custom template for the header for this column. The default is ui-grid/uiGridHeaderCell */
        headerCellTemplate?: string | undefined;
        /**
         * Whether or not to show a tooltip when a user hovers over the header cell.
         * If set to false, no tooltip.
         * If true, the displayName is shown in the tooltip
         * (useful if you have long values in your headers),
         * if a function then that function is called passing in the row and the col
         * headerTooltip( col ), and the return value is shown in the tooltip,
         * if a static string then shows that static string.
         * @default false
         */
        headerTooltip?: boolean | string | IHeaderTooltipGetter<TEntity> | undefined;
        /** sets the maximum column width */
        maxWidth?: number | undefined;
        /** used to add menu items to a column. Refer to the tutorial on this functionality */
        menuItems?: Array<IMenuItem> | undefined;
        /** Sets the minimum column width */
        minWidth?: number | undefined;
        /**
         * (mandatory) each column should have a name,
         * although for backward compatibility with 2.x name can be omitted if field is present
         */
        name?: string | undefined;
        /** An object of sort information */
        sort?: ISortInfo | undefined;
        /**
         * @default false
         * When true uiGrid will apply the cellFilter before sorting the data
         * Note that when using this option uiGrid will assume that the displayed value is a string,
         * and use the sortAlpha sortFn.
         * It is possible to return a non-string value from an angularjs filter,
         * in which case you should define a sortingAlgorithm for the column
         * which handles the returned type.
         * You may specify one of the sortingAlgorithms found in the rowSorter service.
         */
        sortCellFiltered?: boolean | undefined;
        /**
         * (optional) An array of sort directions, specifying the order that they should cycle through as
         * the user repeatedly clicks on the column heading. The default is [null, uiGridConstants.ASC, uiGridConstants.DESC].
         * Null refers to the unsorted state. This does not affect the initial sort direction; use the sort property for that.
         * If suppressRemoveSort is also set, the unsorted state will be skipped even if it is listed here. Each direction may
         * not appear in the list more than once (e.g. [ASC, DESC, DESC] is not allowed), and the list may not be empty.*
         */
        sortDirectionCycle?: Array<null | string> | undefined;
        /**
         * Algorithm to use for sorting this column. Takes 'a' and 'b' parameters
         * like any normal sorting function with additional 'rowA', 'rowB', and 'direction'
         * parameters that are the row objects and the current direction of the sort
         * respectively.
         */
        sortingAlgorithm?:
            | ((a: any, b: any, rowA: IGridRowOf<TEntity>, rowB: IGridRowOf<TEntity>, direction: string) => number)
            | undefined;
        /**
         * When enabled, this setting hides the removeSort option in the menu,
         * and prevents users from manually removing the sort
         * @default false
         */
        suppressRemoveSort?: boolean | undefined;
        /**
         * the type of the column, used in sorting. If not provided then the grid will guess the type.
         * Add this only if the grid guessing is not to your satisfaction.
         * Note that if you choose date, your dates should be in a javascript date type
         * One of:
         * 'string', 'boolean', 'number', 'date', 'object', 'numberStr'
         */
        type?: string | undefined;
        /**
         * sets whether or not the column is visible
         * @default true
         */
        visible?: boolean | undefined;
        /**
         * sets the column width.  Can be either a number or a percentage, or an * for auto.
         */
        width?: number | string | undefined;
    }

    export interface ICellClassGetter<TEntity> {
        (
            grid?: IGridInstanceOf<TEntity>,
            gridRow?: IGridRowOf<TEntity>,
            gridCol?: IGridColumnOf<TEntity>,
            rowRenderIndex?: number,
            colRenderIndex?: number,
        ): string;
    }

    export interface ICellTooltipGetter<TEntity> {
        (gridRow: IGridRowOf<TEntity>, gridCol: IGridColumnOf<TEntity>): string;
    }
    export interface IHeaderTooltipGetter<TEntity> {
        (gridCol: IGridColumnOf<TEntity>): string;
    }
    export interface IHeaderFooterCellClassGetter<TEntity> {
        (
            grid: IGridInstanceOf<TEntity>,
            gridRow: IGridRowOf<TEntity>,
            gridCol: IGridColumnOf<TEntity>,
            rowRenderIndex: number,
            colRenderIndex: number,
        ): string;
    }
    export interface IMenuItem {
        /** controls the title that is displayed in the menu */
        title?: string | undefined;
        /** the icon shown alongside that title */
        icon?: string | undefined;
        /** the method to call when the menu is clicked */
        action?: (($event: ng.IAngularEvent) => void) | undefined;
        /** a function to evaluate to determine whether or not to show the item */
        shown?: (() => boolean) | undefined;
        /** a function to evaluate to determine whether or not the item is currently selected */
        active?: (() => boolean) | undefined;
        /** context to pass to the action function, available in this.context in your handler */
        context?: any;
        /** if set to true, the menu should stay open after the action, defaults to false */
        leaveOpen?: boolean | undefined;
    }
    export interface ISortInfo {
        direction?: string | undefined;
        ignoreSort?: boolean | undefined;
        priority?: number | undefined;
    }

    export interface IFilterOptions {
        /**
         * condition defines how rows are chosen as matching the filter term.
         * This can be set to one of the constants in uiGridConstants.filter,
         * or you can supply a custom filter function that gets passed the
         * following arguments: [searchTerm, cellValue, row, column].
         */
        condition?:
            | number
            | ((searchTerm: string, cellValue: any, row: IGridRow, column: IGridColumn) => boolean)
            | undefined;
        /**
         * If set, the filter field will be pre-populated with this value
         */
        term?: string | undefined;
        /** String that will be set to the <input>.placeholder attribute */
        placeholder?: string | undefined;
        /**
         * String that will be set to the <input>.ariaLabel attribute. This is what is read as a label to screen reader users.
         */
        ariaLabel?: string | undefined;
        /**
         * set this to true if you have defined a custom function in condition,
         * and your custom function doesn't require a term
         * (so it can run even when the term is null)
         */
        noTerm?: boolean | undefined;
        /**
         * only flag currently available is caseSensitive, set to false if you don't want case sensitive matching
         */
        flags?: IFilterFlags | undefined;
        /**
         * defaults to uiGridConstants.filter.INPUT, which gives a text box. If set to uiGridConstants.filter.SELECT
         * then a select box will be shown with options selectOptions
         */
        type?: number | string | undefined;
        /**
         * options in the format [{ value: 1, label: 'male' }]. No i18n filter is provided, you need to perform the i18n
         * on the values before you provide them
         */
        selectOptions?: Array<ISelectOption> | undefined;
        /**
         * If set to true then the 'x' button that cancels/clears the filter will not be shown.
         * @default false
         */
        disableCancelFilterButton?: boolean | undefined;
    }
    export interface ISelectOption {
        value: number | string;
        label: string;
    }

    export interface IFilterFlags {
        caseSensitive?: boolean | undefined;
    }
}
