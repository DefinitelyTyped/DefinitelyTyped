// Type definitions for ui-grid
// Project: http://www.ui-grid.info/
// Definitions by: Ben Tesser <https://github.com/btesser>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

// These are very definitely preliminary. Please feel free to improve.

// Changelog:
// 7/8/2015 ui-grid v3.0.0-rc.22-482dc67
//   Added primary interfaces for row, column, api, grid, columnDef, and gridOptions.  Needs more tests!

/// <reference path='../angularjs/angular.d.ts' />

declare module uiGrid {
    export interface IGridInstance {
        appScope?: ng.IScope;
        columnFooterHeight?: number;
        footerHeight?: number;
        isScrollingHorizontally?: boolean;
        isScrollingVertically?: boolean;
        scrollDirection?: number;
        addRowHeaderColumn(column: IGridColumn): void;
        assignTypes(): void;
        buildColumnDefsFromData(rowBuilder: IRowBuilder): void;
        buildColumns(options: IBuildColumnsOptions): ng.IPromise<any>;
        buildStyles(): void;
        callDataChangeCallbacks(type: number): void;
        clearAllFilters(refreshRows: boolean, clearConditions: boolean, clearFlags: boolean): void;
        columnRefreshCallback(name: string): void;
        createLeftContainer(): void;
        createRightContainer(): void;
        flagScrollingHorizontally(): void;
        flagScrollingVertically(): void;
        getCellDisplayValue(row: IGridRow, col: IGridColumn): string;
        getCellValue(row: IGridRow, col: IGridColumn): any;
        getColDef(name: string): IColumnDef;
        getColumn(name: string): IGridColumn;
        getColumnSorting(): Array<IGridColumn>;
        getGridQualifiedColField(col: IGridColumn): any;
        getOnlyDataColumns(): Array<IGridColumn>;
        getRow(rowEntity: any, rows?: Array<IGridRow>): IGridRow;
        handleWindowResize(): void;
        hasLeftContainer(): boolean;
        hasRightContainer(): boolean;
        hasLeftContainerColumns(): boolean;
        hasRightContainerColumns(): boolean;
        isRTL(): boolean;
        isRowHeaderColumn(col: IGridColumn): boolean;
        modifyRows(): void;
        notifyDataChange(type: string): void;
        precompileCellTemplates(): void;
        processRowBuilders(gridRow: IGridRow): IGridRow;
        processRowsCallback(name: string): void;
        queueGridRefresh(): void;
        queueRefresh(): void;
        redrawCanvas(rowsAdded?: boolean): void;
        refresh(rowsAltered?: boolean): void;
        refreshCanvas(buildStyles?: boolean): ng.IPromise<any>;
        refreshRows(): ng.IPromise<any>;
        registerColumnBuilder(columnBuilder: IColumnBuilder): void;
        registerColumnsProcessor(columnProcessor: IColumnProcessor, priority: number): void;
        registerDataChangeCallback(callback: (grid: IGridInstance) => void, types: Array<string>): Function;
        registerRowBuilder(rowBuilder: IRowBuilder): void;
        registerRowsProcessor(rowProcessor: IRowProcessor, priority: number): void;
        registerStyleComputation(styleComputation: ($scope: ng.IScope) => string): void;
        removeRowsProcessor(rows: IRowProcessor): void;
        resetColumnSorting(excludedColumn: IGridColumn): void;
        scrollTo(rowEntity: any, colDef: IColumnDef): ng.IPromise<any>;
        scrollToIfNecessary(gridRow: IGridRow, gridCol: IGridColumn): ng.IPromise<any>;
        sortColumn(column: IGridColumn, direction?: number, add?: boolean): ng.IPromise<IGridColumn>;
        updateCanvasHeight(): void;
        updateFooterHeightCallback(name: string): void;
    }
    export interface IBuildColumnsOptions {
        orderByColumnDefs?: boolean;
    }
    export interface IColumnBuilder {
        (colDef: IColumnDef, col: IGridColumn, gridOptions: IGridOptions): void;
    }
    export interface IRowBuilder {
        (row: IGridRow, gridOptions: IGridOptions): void;
    }
    export interface IRowProcessor {
        (renderedRowsToProcess: Array<IGridRow>, columns: Array<IGridColumn>): Array<IGridRow>;
    }
    export interface IColumnProcessor {
        (renderedColumnsToProcess: Array<IGridColumn>, rows: Array<IGridRow>): Array<IGridColumn>;
    }
    export interface IGridOptions {
        aggregationCalcThrottle?: number;
        appScopeProvider?: ng.IScope;
        columnDefs?: IColumnDef;
        columnFooterHeight?: number;
        columnVirtualizationThreshold?: number;
        data?: Array<any>;
        enableColumnMenus?: boolean;
        enableFiltering?: boolean;
        enableHorizontalScrollbar?: boolean;
        enableMinHeightCheck?: boolean;
        enableRowHashing?: boolean;
        enableRowSelection?: boolean;
        enableSorting?: boolean;
        enableVerticalScrollbar?: boolean;
        excessColumns?: number;
        excessRows?: number;
        excludeProperties?: Array<string>;
        flatEntityAccess?: boolean;
        footerTemplate?: string;
        gridFooterTemplate?: string;
        gridMenuCustomItems?: Array<IMenuItem>;
        gridMenuShowHideColumns?: boolean;
        gridMenuTitleFilter: (title: string) => ng.IPromise<string> | string;
        headerTemplate?: string;
        horizontalScrollThreshold?: number;
        infiniteScrollDown?: boolean;
        infiniteScrollRowsFromEnd?: number;
        infiniteScrollUp?: boolean;
        maxVisibleColumnCount?: number;
        minRowsToShow?: number;
        minimumColumnSize?: number;
        onRegisterApi: (gridApi: IGridApi) => void;
        rowHeight?: number;
        rowTemplate?: string;
        scrollDebounce?: number;
        scrollThreshold?: number;
        showColumnFooter?: boolean;
        showGridFooter?: boolean;
        showHeader?: boolean;
        useExternalFiltering?: boolean;
        useExternalSorting?: boolean;
        virtualizationThreshold?: number;
        wheelScrollThrottle?: number;
        getRowIdentity(): any;
        rowEquality(entityA: IGridRow, entityB: IGridRow): boolean;
        rowIdentity(): any;
    }
    export interface IGridApiConstructor {
        new(grid: IGridInstance): IGridApi;
    }
    export interface IGridApi {
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
    }
    export interface IGridRowConstructor {
        /**
         * GridRow is the viewModel for one logical row on the grid.
         * A grid Row is not necessarily a one-to-one relation to gridOptions.data.
         * @param entity the array item from GridOptions.data
         * @param index the current position of the row in the array
         * @param reference to the parent grid
         */
        new(entity: any, index: number, reference: IGridInstance): IGridRow;
    }
    export interface IGridRow {
        /** A reference to an item in gridOptions.data[] */
        entity: any;
        /** A reference back to the grid */
        grid: IGridInstance;
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
        /** enable editing on row, grouping for example might disable editing on group header rows */
        enableCellEdit: boolean;
        /**
         * Enable row selection for this row, only settable by internal code.
         *
         * The grouping feature, for example, might set group header rows to not be selectable.
         * Defaults to true
         * @default true
         */
        enableSelection: boolean;
        /**
         * Selected state of row.
         * Should be readonly.
         * Make any changes to selected state using setSelected().
         * Defaults to false
         *
         * @readonly
         * @default false
         */
        isSelected: boolean;
        /**
         * If set to false, then don't export this row,
         * notwithstanding visible or other settings
         * Defaults to true
         * @default true
         */
        exporterEnableExporting: boolean;
        /**
         * Sets the isSelected property and updates the selectedCount
         * Changes to isSelected state should only be made via this function
         * @param selected Value to set
         */
        setSelected(selected: boolean): void;
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
        clearRowInvisible(row: IGridRow): void;
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
        getEntityQualifiedColField(col: IGridColumn): string;
        /**
         * returns the qualified field name as it exists on scope ie: row.entity.fieldA
         * @param col column instance
         * @returns resulting name that can be evaluated on scope
         */
        getQualifiedColField(col: IGridColumn): string;
        /**
         * Sets an override on the row that forces it to always be invisible.
         * Emits the rowsVisibleChanged event if it changed the row visibility.
         * This method can be called from the api, passing in the gridRow we want altered.
         * It should really work by calling gridRow.setRowInvisible,
         * but that's not the way I coded it, and too late to change now.
         * Changed to just call the internal function row.setThisRowInvisible().
         * @param row the row we want to set to invisible
         */
        setRowInvisible(row: IGridRow): void;
        /**
         * Sets an override on the row that forces it to always be invisible.
         * Emits the rowsVisibleChanged event if it changed the row visibility
         * @param reason the reason (usually the module) for the row to be invisible. E.g. grouping, user, filter
         * @param fromRowsProcessor whether we were called from a rowsProcessor, passed through to evaluateRowVisibility
         */
        setThisRowInvisible(reason: string, fromRowsProcessor: boolean): void;
    }

    export interface IGridColumnConstructor {
        /**
         * Represents the viewModel for each column.
         * Any state or methods needed for a Grid Column are defined on this prototype
         * @param gridCol Column definition
         * @param index the current position of the column in the array
         * @param grid reference to the grid
         */
        new(gridCol: IColumnDef, index: number, grid: IGridInstance): IGridColumn;
    }

    export interface IGridColumn {
        /**
         * Column name that will be shown in the header.
         * If displayName is not provided then one is generated using the name.
         */
        displayName?: string;
        /**
         * field must be provided if you wish to bind to a property in the data source.
         * Should be an angular expression that evaluates against grid.options.data array element.
         * Can be a complex expression: employee.address.city, or can be a function: employee.getFullAddress().
         * See the angular docs on binding expressions.
         */
        field?: string;
        /** Filter on this column */
        filter?: IFilterOptions;
        /** Filters for this column. Includes 'term' property bound to filter input elements */
        filters?: Array<IFilterOptions>;
        name?: string;
        /** Algorithm to use for sorting this column. Takes 'a' and 'b' parameters like any normal sorting function. */
        sortingAlgorithm?: (a: any, b: any) => number;
        /**
         * Initializes a column
         * @param colDef the column def to associate with this column
         * @param uid The unique and immutable uid we'd like to allocate to this column
         * @param grid the grid we'd like to create this column in
         */
        GridColumn(colDef: IColumnDef, uid: number, grid: IGridInstance): void;
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
        setPropertyOrDefault(colDef: IColumnDef, propName: string, defaultValue: any): void;
        /** Makes the column visible by setting colDef.visible = true */
        showColumn(): void;
        /**
         * Moves settings from the columnDef down onto the column, and sets properties as appropriate
         * @param colDef the column def to look in for property value
         * @param isNew whether the column is being newly created, if not we're updating an existing
         *              column, and some items such as the sort shouldn't be copied down
         */
        updateColumnDef(colDef: IColumnDef, isNew: boolean): void;
    }

    /**
     * Definition / configuration of an individual column,
     * which would typically be one of many column definitions within the
     * gridOptions.columnDefs array
     */
    export interface IColumnDef {
        /**
         * defaults to false
         * if set to true hides the label text in the aggregation footer, so only the value is displayed.
         */
        aggregationHideLabel?: boolean;
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
        aggregationType: number | Function;
        /**
         * cellClass can be a string specifying the class to append to a cell
         * or it can be a function(row,rowRenderIndex, col, colRenderIndex)
         * that returns a class name
         */
        cellClass?: string | ICellClassGetter;
        /** cellFilter is a filter to apply to the content of each cell */
        cellFilter?: string;
        /**
         * a custom template for each cell in this column.
         * The default is ui-grid/uiGridCell.
         * If you are using the cellNav feature,
         * this template must contain a div that can receive focus.
         */
        cellTemplate?: string;
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
        cellTooltip?: boolean | string | ICellTooltipGetter;
        /**
         * Column name that will be shown in the header.
         * If displayName is not provided then one is generated using the name.
         */
        displayName?: string;
        /**
         * if column menus are enabled, controls the column menus for this specific column
         * (i.e. if gridOptions.enableColumnMenus, then you can control column menus using this option.
         * If gridOptions.enableColumnMenus === false then you get no column menus irrespective of the value of this
         * option
         * ). Defaults to true.
         * @default true
         */
        enableColumnMenu?: boolean;
        /**
         * Override for column menus everywhere - if set to false then you get no column menus.
         * Defaults to true
         * @default true
         */
        enableColumnMenus?: boolean;
        /** turn off filtering for an individual column, where you've turned on filtering for the overall grid */
        enableFiltering?: boolean;
        /**
         * When set to false, this setting prevents a user from hiding the column using the column menu or the grid
         * menu.
         * @default true
         */
        enableHiding?: boolean;
        /**
         * When enabled, this setting adds sort widgets to the column header, allowing sorting of the data in the
         * individual column.
         * @default true
         */
        enableSorting?: boolean;
        /**
         * field must be provided if you wish to bind to a property in the data source.
         * Should be an angular expression that evaluates against grid.options.data array element
         * Can be a complex expression: employee.address.city, or can be a function: employee.getFullAddress().
         * See the angular docs on binding expressions.
         */
        field?: string;
        /**
         * Specify a single filter field on this column.
         * A filter consists of a condition, a term, and a placeholder:
         */
        filter?: IFilterOptions;
        /**
         * @default false
         * When true uiGrid will apply the cellFilter before applying search filters
         */
        filterCellFiltered?: boolean;
        /**
         * a custom template for the filter input. The default is ui-grid/ui-grid-filter
         */
        filterHeaderTemplate?: string;
        /** Specify multiple filter fields */
        filters?: Array<IFilterOptions>;
        /**
         * footerCellClass can be a string specifying the class to append to a cell or it can be
         * a function(row,rowRenderIndex, col, colRenderIndex) that returns a class name
         */
        footerCellClass?: string | IHeaderFooterCellClassGetter;
        /** footerCellFilter is a filter to apply to the content of the column footer */
        footerCellFilter?: string;
        /** a custom template for the footer for this column. The default is ui-grid/uiGridFooterCell */
        footerCellTemplate?: string;
        /**
         * headerCellClass can be a string specifying the class to append to a cell or it can be
         * a function(row,rowRenderIndex, col, colRenderIndex) that returns a class name
         */
        headerCellClass?: string | IHeaderFooterCellClassGetter;
        /** headerCellFilter is a filter to apply to the content of the column header */
        headerCellFilter?: string;
        /** a custom template for the header for this column. The default is ui-grid/uiGridHeaderCell */
        headerCellTemplate?: string;
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
        headerTooltip?: boolean | string | IHeaderTooltipGetter;
        /** sets the maximum column width */
        maxWidth?: number;
        /** used to add menu items to a column. Refer to the tutorial on this functionality */
        menuItems?: Array<IMenuItem>;
        /** Sets the minimum column width */
        minWidth?: number;
        /**
         * (mandatory) each column should have a name,
         * although for backward compatibility with 2.x name can be omitted if field is present
         */
        name?: string;
        /** An object of sort information */
        sort?: ISortInfo;
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
        sortCellFiltered?: boolean;
        /** Algorithm to use for sorting this column */
        sortingAlgorithm?: (a: any, b: any) => number;
        /**
         * When enabled, this setting hides the removeSort option in the menu,
         * and prevents users from manually removing the sort
         * @default false
         */
        suppressRemoveSort?: boolean;
        /**
         * the type of the column, used in sorting. If not provided then the grid will guess the type.
         * Add this only if the grid guessing is not to your satisfaction.
         * Note that if you choose date, your dates should be in a javascript date type
         * One of:
         * 'string', 'boolean', 'number', 'date', 'object', 'numberStr'
         */
        type?: string;
        /**
         * sets whether or not the column is visible
         * @default true
         */
        visible?: boolean;
        /**
         * sets the column width.  Can be either a number or a percentage, or an * for auto.
         */
        width?: number | string;
    }

    export interface ICellClassGetter {
        (gridRow?: IGridRow, gridCol?: IGridColumn, colRenderIndex?: number): string;
    }

    export interface ICellTooltipGetter {
        (gridRow: IGridRow, gridCol: IGridColumn): string;
    }
    export interface IHeaderTooltipGetter {
        (gridCol: IGridColumn): string;
    }
    export interface IHeaderFooterCellClassGetter {
        (gridRow: IGridRow, rowRenderIndex: number, gridCol: IGridColumn, colRenderIndex: number): string;
    }
    export interface IMenuItem {
        /** controls the title that is displayed in the menu */
        title?: string;
        /** the icon shown alongside that title */
        icon?: string;
        /** the method to call when the menu is clicked */
        action?: ($event: ng.IAngularEvent) => void;
        /** a function to evaluate to determine whether or not to show the item */
        shown?: () => boolean;
        /** a function to evaluate to determine whether or not the item is currently selected */
        active?: () => boolean;
        /** context to pass to the action function, available in this.context in your handler */
        context?: any;
        /** if set to true, the menu should stay open after the action, defaults to false */
        leaveOpen?: boolean;
    }
    export interface ISortInfo {
        direction?: number;
        ignoreSort?: boolean;
        priority?: number;
    }

    export interface IFilterOptions {
        /**
         * condition defines how rows are chosen as matching the filter term.
         * This can be set to one of the constants in uiGridConstants.filter,
         * or you can supply a custom filter function that gets passed the
         * following arguments: [searchTerm, cellValue, row, column].
         */
        condition?: number;
        /**
         * If set, the filter field will be pre-populated with this value
         */
        term?: string;
        /** String that will be set to the <input>.placeholder attribute */
        placeholder?: string;
        /**
         * set this to true if you have defined a custom function in condition,
         * and your custom function doesn't require a term
         * (so it can run even when the term is null)
         */
        noTerm?: boolean;
        /**
         * only flag currently available is caseSensitive, set to false if you don't want case sensitive matching
         */
        flags?: IFilterFlags;
        /**
         * defaults to uiGridConstants.filter.INPUT, which gives a text box. If set to uiGridConstants.filter.SELECT
         * then a select box will be shown with options selectOptions
         */
        type?: number;
        /**
         * options in the format [{ value: 1, label: 'male' }]. No i18n filter is provided, you need to perform the i18n
         * on the values before you provide them
         */
        selectOptions?: Array<ISelectOption>;
        /**
         * If set to true then the 'x' button that cancels/clears the filter will not be shown.
         * @default false
         */
        disableCancelButton?: boolean;
    }
    export interface ISelectOption {
        value: number;
        label: string;
    }

    export interface IFilterFlags {
        caseSensitive?: boolean;
    }
}
