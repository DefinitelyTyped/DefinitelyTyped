// Type definitions for ag-grid v2.1.2
// Project: http://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ceolter/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped
declare module ag.grid {
    class ColumnChangeEvent {
        private type;
        private column;
        private columnGroup;
        private fromIndex;
        private toIndex;
        private pinnedColumnCount;
        constructor(type: string);
        toString(): string;
        withColumn(column: Column): ColumnChangeEvent;
        withColumnGroup(columnGroup: ColumnGroup): ColumnChangeEvent;
        withFromIndex(fromIndex: number): ColumnChangeEvent;
        withPinnedColumnCount(pinnedColumnCount: number): ColumnChangeEvent;
        withToIndex(toIndex: number): ColumnChangeEvent;
        getFromIndex(): number;
        getToIndex(): number;
        getPinnedColumnCount(): number;
        getType(): string;
        getColumn(): Column;
        getColumnGroup(): ColumnGroup;
        isPivotChanged(): boolean;
        isValueChanged(): boolean;
        isIndividualColumnResized(): boolean;
    }
}
declare module ag.grid {
    class Utils {
        private static isSafari;
        private static isIE;
        static iterateObject(object: any, callback: (key: string, value: any) => void): void;
        static cloneObject(object: any): any;
        static map<TItem, TResult>(array: TItem[], callback: (item: TItem) => TResult): TResult[];
        static forEach<T>(array: T[], callback: (item: T, index: number) => void): void;
        static filter<T>(array: T[], callback: (item: T) => boolean): T[];
        static assign(object: any, source: any): void;
        static getFunctionParameters(func: any): any;
        static find(collection: any, predicate: any, value: any): any;
        static toStrings<T>(array: T[]): string[];
        static iterateArray<T>(array: T[], callback: (item: T, index: number) => void): void;
        static isNode(o: any): boolean;
        static isElement(o: any): boolean;
        static isNodeOrElement(o: any): boolean;
        static addChangeListener(element: HTMLElement, listener: EventListener): void;
        static makeNull(value: any): any;
        static removeAllChildren(node: HTMLElement): void;
        static removeElement(parent: HTMLElement, cssSelector: string): void;
        static removeFromParent(node: Element): void;
        static isVisible(element: HTMLElement): boolean;
        /**
         * loads the template and returns it as an element. makes up for no simple way in
         * the dom api to load html directly, eg we cannot do this: document.createElement(template)
         */
        static loadTemplate(template: string): Node;
        static querySelectorAll_addCssClass(eParent: any, selector: string, cssClass: string): void;
        static querySelectorAll_removeCssClass(eParent: any, selector: string, cssClass: string): void;
        static querySelectorAll_replaceCssClass(eParent: any, selector: string, cssClassToRemove: string, cssClassToAdd: string): void;
        static addOrRemoveCssClass(element: HTMLElement, className: string, addOrRemove: boolean): void;
        static addCssClass(element: HTMLElement, className: string): void;
        static offsetHeight(element: HTMLElement): number;
        static offsetWidth(element: HTMLElement): number;
        static removeCssClass(element: HTMLElement, className: string): void;
        static removeFromArray<T>(array: T[], object: T): void;
        static defaultComparator(valueA: any, valueB: any): number;
        static formatWidth(width: number | string): string;
        /**
         * Tries to use the provided renderer.
         */
        static useRenderer<TParams>(eParent: Element, eRenderer: (params: TParams) => Node | string, params: TParams): void;
        /**
         * If icon provided, use this (either a string, or a function callback).
         * if not, then use the second parameter, which is the svgFactory function
         */
        static createIcon(iconName: any, gridOptionsWrapper: any, colDefWrapper: any, svgFactoryFunc: () => Node): HTMLSpanElement;
        static addStylesToElement(eElement: any, styles: any): void;
        static getScrollbarWidth(): number;
        static isKeyPressed(event: KeyboardEvent, keyToCheck: number): boolean;
        static setVisible(element: HTMLElement, visible: boolean): void;
        static isBrowserIE(): boolean;
        static isBrowserSafari(): boolean;
    }
}
declare module ag.grid {
    class Constants {
        static STEP_EVERYTHING: number;
        static STEP_FILTER: number;
        static STEP_SORT: number;
        static STEP_MAP: number;
        static ASC: string;
        static DESC: string;
        static ROW_BUFFER_SIZE: number;
        static MIN_COL_WIDTH: number;
        static SUM: string;
        static MIN: string;
        static MAX: string;
        static KEY_TAB: number;
        static KEY_ENTER: number;
        static KEY_BACKSPACE: number;
        static KEY_DELETE: number;
        static KEY_ESCAPE: number;
        static KEY_SPACE: number;
        static KEY_DOWN: number;
        static KEY_UP: number;
        static KEY_LEFT: number;
        static KEY_RIGHT: number;
    }
}
declare module ag.grid {
    class Column {
        static colIdSequence: number;
        colDef: ColDef;
        actualWidth: any;
        visible: any;
        colId: any;
        pinned: boolean;
        index: number;
        aggFunc: string;
        pivotIndex: number;
        sort: string;
        sortedAt: number;
        constructor(colDef: ColDef, actualWidth: any);
        isGreaterThanMax(width: number): boolean;
        getMinimumWidth(): number;
        setMinimum(): void;
    }
}
declare module ag.grid {
    class ColumnGroup {
        pinned: any;
        name: any;
        allColumns: Column[];
        displayedColumns: Column[];
        expandable: boolean;
        expanded: boolean;
        actualWidth: number;
        constructor(pinned: any, name: any);
        getMinimumWidth(): number;
        addColumn(column: any): void;
        calculateExpandable(): void;
        calculateActualWidth(): void;
        calculateDisplayedColumns(): void;
        addToVisibleColumns(colsToAdd: any): void;
    }
}
declare module ag.grid {
    class GridOptionsWrapper {
        private gridOptions;
        private groupHeaders;
        private headerHeight;
        private rowHeight;
        private floatingTopRowData;
        private floatingBottomRowData;
        init(gridOptions: GridOptions, eventService: EventService): void;
        isRowSelection(): boolean;
        isRowDeselection(): boolean;
        isRowSelectionMulti(): boolean;
        getContext(): any;
        isVirtualPaging(): boolean;
        isShowToolPanel(): boolean;
        isToolPanelSuppressPivot(): boolean;
        isToolPanelSuppressValues(): boolean;
        isRowsAlreadyGrouped(): boolean;
        isGroupSelectsChildren(): boolean;
        isGroupHidePivotColumns(): boolean;
        isGroupIncludeFooter(): boolean;
        isGroupSuppressBlankHeader(): boolean;
        isSuppressRowClickSelection(): boolean;
        isSuppressCellSelection(): boolean;
        isSuppressMultiSort(): boolean;
        isGroupSuppressAutoColumn(): boolean;
        isForPrint(): boolean;
        isSuppressHorizontalScroll(): boolean;
        isUnSortIcon(): boolean;
        isSuppressMenuHide(): boolean;
        getRowStyle(): any;
        getRowClass(): any;
        getRowStyleFunc(): any;
        getRowClassFunc(): any;
        getHeaderCellRenderer(): any;
        getApi(): GridApi;
        isEnableColResize(): boolean;
        isSingleClickEdit(): boolean;
        getGroupDefaultExpanded(): any;
        getGroupKeys(): string[];
        getGroupAggFunction(): (nodes: any[]) => any;
        getGroupAggFields(): string[];
        getRowData(): any[];
        isGroupUseEntireRow(): boolean;
        getGroupColumnDef(): any;
        isGroupSuppressRow(): boolean;
        isAngularCompileRows(): boolean;
        isAngularCompileFilters(): boolean;
        isAngularCompileHeaders(): boolean;
        isDebug(): boolean;
        getColumnDefs(): any[];
        getDatasource(): any;
        getRowBuffer(): number;
        isEnableSorting(): boolean;
        isEnableCellExpressions(): boolean;
        isEnableServerSideSorting(): boolean;
        isEnableFilter(): boolean;
        isEnableServerSideFilter(): boolean;
        isSuppressScrollLag(): boolean;
        getIcons(): any;
        getIsScrollLag(): () => boolean;
        getSortingOrder(): string[];
        getSlaveGrids(): GridOptions[];
        getGroupRowRenderer(): Object | Function;
        getRowHeight(): number;
        getHeaderHeight(): number;
        setHeaderHeight(headerHeight: number): void;
        isGroupHeaders(): boolean;
        setGroupHeaders(groupHeaders: boolean): void;
        getFloatingTopRowData(): any[];
        setFloatingTopRowData(rows: any[]): void;
        getFloatingBottomRowData(): any[];
        setFloatingBottomRowData(rows: any[]): void;
        isExternalFilterPresent(): boolean;
        doesExternalFilterPass(node: RowNode): boolean;
        getGroupRowInnerRenderer(): (params: any) => void;
        getColWidth(): number;
        private checkForDeprecated();
        getPinnedColCount(): number;
        getLocaleTextFunc(): Function;
        globalEventHandler(eventName: string, event?: any): void;
        private getCallbackForEvent(eventName);
    }
}
declare module ag.grid {
    class LoggerFactory {
        private logging;
        init(gridOptionsWrapper: GridOptionsWrapper): void;
        create(name: string): Logger;
    }
    class Logger {
        private logging;
        private name;
        constructor(name: string, logging: boolean);
        log(message: string): void;
    }
}
declare module ag.grid {
    class Events {
        /** A new set of columns has been entered, everything has potentially changed. */
        static EVENT_COLUMN_EVERYTHING_CHANGED: string;
        /** A pivot column was added, removed or order changed. */
        static EVENT_COLUMN_PIVOT_CHANGE: string;
        /** A value column was added, removed or agg function was changed. */
        static EVENT_COLUMN_VALUE_CHANGE: string;
        /** A column was moved */
        static EVENT_COLUMN_MOVED: string;
        /** One or more columns was shown / hidden */
        static EVENT_COLUMN_VISIBLE: string;
        /** A column group was opened / closed */
        static EVENT_COLUMN_GROUP_OPENED: string;
        /** One or more columns was resized. If just one, the column in the event is set. */
        static EVENT_COLUMN_RESIZED: string;
        /** One or more columns was resized. If just one, the column in the event is set. */
        static EVENT_COLUMN_PINNED_COUNT_CHANGED: string;
        static EVENT_MODEL_UPDATED: string;
        static EVENT_CELL_CLICKED: string;
        static EVENT_CELL_DOUBLE_CLICKED: string;
        static EVENT_CELL_CONTEXT_MENU: string;
        static EVENT_CELL_VALUE_CHANGED: string;
        static EVENT_CELL_FOCUSED: string;
        static EVENT_ROW_SELECTED: string;
        static EVENT_SELECTION_CHANGED: string;
        static EVENT_BEFORE_FILTER_CHANGED: string;
        static EVENT_AFTER_FILTER_CHANGED: string;
        static EVENT_FILTER_MODIFIED: string;
        static EVENT_BEFORE_SORT_CHANGED: string;
        static EVENT_AFTER_SORT_CHANGED: string;
        static EVENT_VIRTUAL_ROW_REMOVED: string;
        static EVENT_ROW_CLICKED: string;
        static EVENT_READY: string;
    }
}
declare module ag.grid {
    class EventService {
        private allListeners;
        private globalListeners;
        private getListenerList(eventType);
        addEventListener(eventType: string, listener: Function): void;
        addGlobalListener(listener: Function): void;
        removeEventListener(eventType: string, listener: Function): void;
        removeGlobalListener(listener: Function): void;
        dispatchEvent(eventType: string, event?: any): void;
    }
}
declare module ag.grid {
    class MasterSlaveService {
        private gridOptionsWrapper;
        private columnController;
        private gridPanel;
        private logger;
        private eventService;
        private consuming;
        init(gridOptionsWrapper: GridOptionsWrapper, columnController: ColumnController, gridPanel: GridPanel, loggerFactory: LoggerFactory, eventService: EventService): void;
        private fireEvent(callback);
        private onEvent(callback);
        private fireColumnEvent(event);
        fireHorizontalScrollEvent(horizontalScroll: number): void;
        onScrollEvent(horizontalScroll: number): void;
        onColumnEvent(event: ColumnChangeEvent): void;
    }
}
declare module ag.grid {
    class ColumnApi {
        private _columnController;
        constructor(_columnController: ColumnController);
        sizeColumnsToFit(gridWidth: any): void;
        hideColumns(colIds: any, hide: any): void;
        columnGroupOpened(group: ColumnGroup, newValue: boolean): void;
        getColumnGroup(name: string): ColumnGroup;
        getDisplayNameForCol(column: any): string;
        getColumn(key: any): Column;
        setState(columnState: any): void;
        getState(): [any];
        isPinning(): boolean;
        getVisibleColAfter(col: Column): Column;
        getVisibleColBefore(col: Column): Column;
        setColumnVisible(column: Column, visible: boolean): void;
        getAllColumns(): Column[];
        getDisplayedColumns(): Column[];
        getPivotedColumns(): Column[];
        getValueColumns(): Column[];
        moveColumn(fromIndex: number, toIndex: number): void;
        movePivotColumn(fromIndex: number, toIndex: number): void;
        setColumnAggFunction(column: Column, aggFunc: string): void;
        setColumnWidth(column: Column, newWidth: number): void;
        removeValueColumn(column: Column): void;
        addValueColumn(column: Column): void;
        removePivotColumn(column: Column): void;
        setPinnedColumnCount(count: number): void;
        addPivotColumn(column: Column): void;
        getHeaderGroups(): ColumnGroup[];
        hideColumn(colId: any, hide: any): void;
    }
    class ColumnController {
        private gridOptionsWrapper;
        private angularGrid;
        private selectionRendererFactory;
        private expressionService;
        private masterSlaveController;
        private allColumns;
        private visibleColumns;
        private displayedColumns;
        private pivotColumns;
        private valueColumns;
        private columnGroups;
        private setupComplete;
        private valueService;
        private pinnedColumnCount;
        private eventService;
        constructor();
        init(angularGrid: Grid, selectionRendererFactory: SelectionRendererFactory, gridOptionsWrapper: GridOptionsWrapper, expressionService: ExpressionService, valueService: ValueService, masterSlaveController: MasterSlaveService, eventService: EventService): void;
        getColumnApi(): ColumnApi;
        isSetupComplete(): boolean;
        getHeaderGroups(): ColumnGroup[];
        getPinnedContainerWidth(): number;
        addPivotColumn(column: Column): void;
        setPinnedColumnCount(count: number): void;
        removePivotColumn(column: Column): void;
        addValueColumn(column: Column): void;
        removeValueColumn(column: Column): void;
        private doesColumnExistInGrid(column);
        setColumnWidth(column: Column, newWidth: number): void;
        private updateGroupWidthsAfterColumnResize(column);
        setColumnAggFunction(column: Column, aggFunc: string): void;
        movePivotColumn(fromIndex: number, toIndex: number): void;
        moveColumn(fromIndex: number, toIndex: number): void;
        getBodyContainerWidth(): number;
        getValueColumns(): Column[];
        getPivotedColumns(): Column[];
        getDisplayedColumns(): Column[];
        getAllColumns(): Column[];
        setColumnVisible(column: Column, visible: boolean): void;
        getVisibleColBefore(col: any): Column;
        getVisibleColAfter(col: Column): Column;
        isPinning(): boolean;
        getState(): [any];
        setState(columnState: any): void;
        getColumns(keys: any[]): Column[];
        getColumn(key: any): Column;
        getDisplayNameForCol(column: any): string;
        getColumnGroup(name: string): ColumnGroup;
        onColumnsChanged(): void;
        private checkForDeprecatedItems(columnDefs);
        columnGroupOpened(group: ColumnGroup, newValue: boolean): void;
        hideColumns(colIds: any, hide: any): void;
        private updateModel();
        private updateDisplayedColumns();
        sizeColumnsToFit(gridWidth: any): void;
        private buildGroups();
        private updateGroups();
        private updateVisibleColumns();
        private updatePinnedColumns();
        private createColumns(colDefs);
        private createPivotColumns();
        private createValueColumns();
        private createDummyColumn(field);
        private calculateColInitialWidth(colDef);
        private getTotalColWidth(includePinned);
    }
}
declare module ag.grid {
    interface CsvExportParams {
        skipHeader?: boolean;
        skipFooters?: boolean;
        skipGroups?: boolean;
        fileName?: string;
    }
    class CsvCreator {
        private rowController;
        private columnController;
        private grid;
        private valueService;
        constructor(rowController: InMemoryRowController, columnController: ColumnController, grid: Grid, valueService: ValueService);
        exportDataAsCsv(params?: CsvExportParams): void;
        getDataAsCsv(params?: CsvExportParams): string;
        private createValueForGroupNode(node);
        private escape(value);
    }
}
declare module ag.grid {
    class ExpressionService {
        private expressionToFunctionCache;
        private logger;
        init(loggerFactory: LoggerFactory): void;
        evaluate(expression: string, params: any): any;
        private createExpressionFunction(expression);
        private createFunctionBody(expression);
    }
}
declare module ag.grid {
    interface TextAndNumberFilterParameters {
        /** What to do when new rows are loaded. The default is to reset the filter, to keep it in line with 'set' filters. If you want to keep the selection, then set this value to 'keep'. */
        newRowsAction?: string;
    }
}
declare module ag.grid {
    class TextFilter implements Filter {
        private filterParams;
        private filterChangedCallback;
        private filterModifiedCallback;
        private localeTextFunc;
        private valueGetter;
        private filterText;
        private filterType;
        private api;
        private eGui;
        private eFilterTextField;
        private eTypeSelect;
        private applyActive;
        private eApplyButton;
        init(params: any): void;
        onNewRowsLoaded(): void;
        afterGuiAttached(): void;
        doesFilterPass(node: any): boolean;
        getGui(): any;
        isFilterActive(): boolean;
        private createTemplate();
        private createGui();
        private setupApply();
        private onTypeChanged();
        private onFilterChanged();
        private filterChanged();
        private createApi();
        private getApi();
    }
}
declare module ag.grid {
    class NumberFilter implements Filter {
        private filterParams;
        private filterChangedCallback;
        private filterModifiedCallback;
        private localeTextFunc;
        private valueGetter;
        private filterNumber;
        private filterType;
        private api;
        private eGui;
        private eFilterTextField;
        private eTypeSelect;
        private applyActive;
        private eApplyButton;
        init(params: any): void;
        onNewRowsLoaded(): void;
        afterGuiAttached(): void;
        doesFilterPass(node: any): boolean;
        getGui(): any;
        isFilterActive(): boolean;
        private createTemplate();
        private createGui();
        private setupApply();
        private onTypeChanged();
        private filterChanged();
        private onFilterChanged();
        private createApi();
        private getApi();
    }
}
declare module ag.grid {
    interface ColDef {
        /** If sorting by default, set it here. Set to 'asc' or 'desc' */
        sort?: string;
        /** If sorting more than one column by default, the milliseconds when this column was sorted, so we know what order to sort the columns in. */
        sortedAt?: number;
        /** The sort order, provide an array with any of the following in any order ['asc','desc',null] */
        sortingOrder?: string[];
        /** The name to render in the column header */
        headerName: string;
        /** The field of the row to get the cells data from */
        field: string;
        /** Expression or function to get the cells value. */
        headerValueGetter?: string | Function;
        /** The unique ID to give the column. This is optional. If missing, the ID will default to the field. If both field and colId are missing, a unique ID will be generated.
         *  This ID is used to identify the column in the API for sorting, filtering etc. */
        colId?: string;
        /** Set to true for this column to be hidden. Naturally you might think, it would make more sense to call this field 'visible' and mark it false to hide,
         *  however we want all default values to be false and we want columns to be visible by default. */
        hide?: boolean;
        /** Tooltip for the column header */
        headerTooltip?: string;
        /** Expression or function to get the cells value. */
        valueGetter?: string | Function;
        /** To provide custom rendering to the header. */
        headerCellRenderer?: Function | Object;
        /** CSS class for the header */
        headerClass?: string | string[] | ((params: any) => string | string[]);
        /** Initial width, in pixels, of the cell */
        width?: number;
        /** Min width, in pixels, of the cell */
        minWidth?: number;
        /** Max width, in pixels, of the cell */
        maxWidth?: number;
        /** Class to use for the cell. Can be string, array of strings, or function. */
        cellClass?: string | string[] | ((cellClassParams: any) => string | string[]);
        /** An object of css values. Or a function returning an object of css values. */
        cellStyle?: {} | ((params: any) => {});
        /** A function for rendering a cell. */
        cellRenderer?: Function | {};
        /** A function for rendering a floating cell. */
        floatingCellRenderer?: Function | {};
        /** Name of function to use for aggregation. One of [sum,min,max]. */
        aggFunc?: string;
        /** Comparator function for custom sorting. */
        comparator?: Function;
        /** Set to true to render a selection checkbox in the column. */
        checkboxSelection?: boolean;
        /** Set to true if no menu should be shown for this column header. */
        suppressMenu?: boolean;
        /** Set to true if no sorting should be done for this column. */
        suppressSorting?: boolean;
        /** Set to true if you want the unsorted icon to be shown when no sort is applied to this column. */
        unSortIcon?: boolean;
        /** Set to true if you want this columns width to be fixed during 'size to fit' operation. */
        suppressSizeToFit?: boolean;
        /** Set to true if you do not want this column to be resizable by dragging it's edge. */
        suppressResize?: boolean;
        /** If grouping columns, the group this column belongs to. */
        headerGroup?: string;
        /** Whether to show the column when the group is open / closed. */
        headerGroupShow?: string;
        /** Set to true if this col is editable, otherwise false. Can also be a function to have different rows editable. */
        editable?: boolean | (Function);
        /** Callbacks for editing.See editing section for further details. */
        newValueHandler?: Function;
        /** If true, this cell gets refreshed when api.softRefreshView() gets called. */
        volatile?: boolean;
        /** Cell template to use for cell. Useful for AngularJS cells. */
        template?: string;
        /** Cell template URL to load template from to use for cell. Useful for AngularJS cells. */
        templateUrl?: string;
        /** one of the built in filter names: [set, number, text], or a filter function*/
        filter?: string | Function;
        /** The filter params are specific to each filter! */
        filterParams?: SetFilterParameters | TextAndNumberFilterParameters;
        /** Rules for applying css classes */
        cellClassRules?: {
            [cssClassName: string]: (Function | string);
        };
        /** Callbacks for editing.See editing section for further details. */
        onCellValueChanged?: Function;
        /** Function callback, gets called when a cell is clicked. */
        onCellClicked?: Function;
        /** Function callback, gets called when a cell is double clicked. */
        onCellDoubleClicked?: Function;
        /** Function callback, gets called when a cell is right clicked. */
        onCellContextMenu?: Function;
    }
}
declare module ag.grid {
    class SetFilterModel {
        private colDef;
        private filterParams;
        private rowModel;
        private valueGetter;
        private allUniqueValues;
        private availableUniqueValues;
        private displayedValues;
        private miniFilter;
        private selectedValuesCount;
        private selectedValuesMap;
        private showingAvailableOnly;
        private usingProvidedSet;
        private doesRowPassOtherFilters;
        constructor(colDef: ColDef, rowModel: any, valueGetter: any, doesRowPassOtherFilters: any);
        refreshAfterNewRowsLoaded(keepSelection: any, isSelectAll: boolean): void;
        refreshAfterAnyFilterChanged(): void;
        private createAllUniqueValues();
        private createAvailableUniqueValues();
        private getUniqueValues(filterOutNotAvailable);
        setMiniFilter(newMiniFilter: any): boolean;
        getMiniFilter(): any;
        private processMiniFilter();
        getDisplayedValueCount(): any;
        getDisplayedValue(index: any): any;
        selectEverything(): void;
        isFilterActive(): boolean;
        selectNothing(): void;
        getUniqueValueCount(): any;
        getUniqueValue(index: any): any;
        unselectValue(value: any): void;
        selectValue(value: any): void;
        isValueSelected(value: any): boolean;
        isEverythingSelected(): boolean;
        isNothingSelected(): boolean;
        getModel(): any;
        setModel(model: any, isSelectAll: boolean): void;
    }
}
/** The filter parameters for set filter */
declare module ag.grid {
    interface SetFilterParameters {
        /** Same as cell renderer for grid (you can use the same one in both locations). Setting it separatly here allows for the value to be rendered differently in the filter. */
        cellRenderer?: Function;
        /** The height of the cell. */
        cellHeight?: number;
        /** The values to display in the filter. */
        values?: any;
        /**  What to do when new rows are loaded. The default is to reset the filter, as the set of values to select from can have changed. If you want to keep the selection, then set this value to 'keep'. */
        newRowsAction?: string;
        /** If true, the filter will not remove items that are no longer availabe due to other filters. */
        suppressRemoveEntries?: boolean;
    }
}
declare module ag.grid {
    class SetFilter implements Filter {
        private eGui;
        private filterParams;
        private rowHeight;
        private model;
        private filterChangedCallback;
        private filterModifiedCallback;
        private valueGetter;
        private rowsInBodyContainer;
        private colDef;
        private localeTextFunc;
        private cellRenderer;
        private eListContainer;
        private eFilterValueTemplate;
        private eSelectAll;
        private eListViewport;
        private eMiniFilter;
        private api;
        private applyActive;
        private eApplyButton;
        init(params: any): void;
        afterGuiAttached(): void;
        isFilterActive(): boolean;
        doesFilterPass(node: any): boolean;
        getGui(): any;
        onNewRowsLoaded(): void;
        onAnyFilterChanged(): void;
        private createTemplate();
        private createGui();
        private setupApply();
        private setContainerHeight();
        private drawVirtualRows();
        private ensureRowsRendered(start, finish);
        private removeVirtualRows(rowsToRemove);
        private insertRow(value, rowIndex);
        private onCheckboxClicked(eCheckbox, value);
        private filterChanged();
        private onMiniFilterChanged();
        private refreshVirtualRows();
        private clearVirtualRows();
        private onSelectAll();
        private updateAllCheckboxes(checked);
        private addScrollListener();
        getApi(): any;
        private createApi();
    }
}
declare module ag.grid {
    class PopupService {
        private ePopupParent;
        init(ePopupParent: any): void;
        positionPopup(eventSource: any, ePopup: any, minWidth: any): void;
        addAsModalPopup(eChild: any, closeOnEsc: boolean): (event: any) => void;
    }
}
declare module ag.grid {
    interface RowNode {
        /** Unique ID for the node. Can be though of as the index of the row in the original list,
         * however exceptions apply so don't depend on uniqueness. */
        id?: number;
        /** The user provided data */
        data?: any;
        /** The parent node to this node, or empty if top level */
        parent?: RowNode;
        /** How many levels this node is from the top */
        level?: number;
        /** True if this node is a group node (ie has children) */
        group?: boolean;
        /** True if this is the first child in this group */
        firstChild?: boolean;
        /** True if this is the last child in this group */
        lastChild?: boolean;
        /** The index of this node in the group */
        childIndex?: number;
        /** True if this row is a floating row */
        floating?: boolean;
        /** True if this row is a floating top row */
        floatingTop?: boolean;
        /** True if this row is a floating bottom row */
        floatingBottom?: boolean;
        /** If using quick filter, stores a string representation of the row for searching against */
        quickFilterAggregateText?: string;
        /** Groups only - True if row is a footer. Footers  have group = true and footer = true */
        footer?: boolean;
        /** Groups only - Children of this group */
        children?: RowNode[];
        /** Groups only - The field we are pivoting on eg Country*/
        field?: string;
        /** Groups only - The key for the pivot eg Ireland, UK, USA */
        key?: any;
        /** Groups only - Filtered children of this group */
        childrenAfterFilter?: RowNode[];
        /** Groups only - Sorted children of this group */
        childrenAfterSort?: RowNode[];
        /** Groups only - Number of children and grand children */
        allChildrenCount?: number;
        /** Groups only - True if group is expanded, otherwise false */
        expanded?: boolean;
        /** Groups only - If doing footers, reference to the footer node for this group */
        sibling?: RowNode;
        /** Not to be used, internal temporary map used by the grid when creating groups */
        _childrenMap?: {};
    }
}
declare module ag.grid {
    class FilterManager {
        private $compile;
        private $scope;
        private gridOptionsWrapper;
        private grid;
        private allFilters;
        private rowModel;
        private popupService;
        private valueService;
        private columnController;
        private quickFilter;
        private advancedFilterPresent;
        private externalFilterPresent;
        init(grid: Grid, gridOptionsWrapper: GridOptionsWrapper, $compile: any, $scope: any, columnController: ColumnController, popupService: PopupService, valueService: ValueService): void;
        setFilterModel(model: any): void;
        private setModelOnFilterWrapper(filter, newModel);
        getFilterModel(): any;
        setRowModel(rowModel: any): void;
        isAdvancedFilterPresent(): boolean;
        isAnyFilterPresent(): boolean;
        isFilterPresentForCol(colId: any): any;
        private doesFilterPass(node, filterToSkip?);
        setQuickFilter(newFilter: any): boolean;
        onFilterChanged(): void;
        isQuickFilterPresent(): boolean;
        doesRowPassOtherFilters(filterToSkip: any, node: any): boolean;
        doesRowPassFilter(node: any, filterToSkip?: any): boolean;
        private aggregateRowForQuickFilter(node);
        refreshDisplayedValues(): void;
        onNewRowsLoaded(): void;
        private createValueGetter(column);
        getFilterApi(column: Column): any;
        private getOrCreateFilterWrapper(column);
        private createFilterWrapper(column);
        private assertMethodHasNoParameters(theMethod);
        showFilter(column: Column, eventSource: any): void;
    }
}
declare module ag.grid {
    class TemplateService {
        templateCache: any;
        waitingCallbacks: any;
        $scope: any;
        init($scope: any): void;
        getTemplate(url: any, callback: any): any;
        handleHttpResult(httpResult: any, url: any): void;
    }
}
declare module ag.grid {
    class SelectionRendererFactory {
        private angularGrid;
        private selectionController;
        init(angularGrid: any, selectionController: any): void;
        createSelectionCheckbox(node: any, rowIndex: any): HTMLInputElement;
    }
}
declare module ag.vdom {
    class VElement {
        static idSequence: number;
        private id;
        private elementAttachedListeners;
        constructor();
        getId(): number;
        addElementAttachedListener(listener: (element: Element) => void): void;
        protected fireElementAttached(element: Element): void;
        elementAttached(element: Element): void;
        toHtmlString(): string;
    }
}
declare module ag.vdom {
    class VHtmlElement extends VElement {
        private type;
        private classes;
        private eventListeners;
        private attributes;
        private children;
        private innerHtml;
        private style;
        private bound;
        private element;
        constructor(type: string);
        getElement(): HTMLElement;
        setInnerHtml(innerHtml: string): void;
        addStyles(styles: any): void;
        private attachEventListeners(node);
        addClass(newClass: string): void;
        removeClass(oldClass: string): void;
        addClasses(classes: string[]): void;
        toHtmlString(): string;
        private toHtmlStringChildren();
        private toHtmlStringAttributes();
        private toHtmlStringClasses();
        private toHtmlStringStyles();
        appendChild(child: any): void;
        setAttribute(key: string, value: string): void;
        addEventListener(event: string, listener: EventListener): void;
        elementAttached(element: Element): void;
        fireElementAttachedToChildren(element: Element): void;
    }
}
declare module ag.vdom {
    class VWrapperElement extends VElement {
        private wrappedElement;
        constructor(wrappedElement: Element);
        toHtmlString(): string;
        elementAttached(element: Element): void;
    }
}
declare module ag.grid {
    class RenderedCell {
        private vGridCell;
        private vSpanWithValue;
        private vCellWrapper;
        private vParentOfValue;
        private checkboxOnChangeListener;
        private column;
        private data;
        private node;
        private rowIndex;
        private editingCell;
        private scope;
        private isFirstColumn;
        private gridOptionsWrapper;
        private expressionService;
        private selectionRendererFactory;
        private rowRenderer;
        private selectionController;
        private $compile;
        private templateService;
        private cellRendererMap;
        private eCheckbox;
        private columnController;
        private valueService;
        private eventService;
        private value;
        private checkboxSelection;
        constructor(isFirstColumn: any, column: any, $compile: any, rowRenderer: RowRenderer, gridOptionsWrapper: GridOptionsWrapper, expressionService: ExpressionService, selectionRendererFactory: SelectionRendererFactory, selectionController: SelectionController, templateService: TemplateService, cellRendererMap: {
            [key: string]: any;
        }, node: any, rowIndex: number, scope: any, columnController: ColumnController, valueService: ValueService, eventService: EventService);
        getColumn(): Column;
        private getValue();
        getVGridCell(): ag.vdom.VHtmlElement;
        private getDataForRow();
        private setupComponents();
        startEditing(key?: number): void;
        focusCell(forceBrowserFocus: boolean): void;
        private stopEditing(eInput, blurListener, reset?);
        createParams(): any;
        createEvent(event: any, eventSource: any): any;
        private addCellDoubleClickedHandler();
        private addCellContextMenuHandler();
        isCellEditable(): any;
        private addCellClickedHandler();
        private populateCell();
        private addStylesFromCollDef();
        private addClassesFromCollDef();
        private addClassesFromRules();
        private addCellNavigationHandler();
        private isKeycodeForStartEditing(key);
        createSelectionCheckbox(): void;
        setSelected(state: boolean): void;
        private createParentOfValue();
        isVolatile(): boolean;
        refreshCell(): void;
        private putDataIntoCell();
        private useCellRenderer(cellRenderer);
        private addClasses();
    }
}
declare module ag.grid {
    class RenderedRow {
        vPinnedRow: any;
        vBodyRow: any;
        private renderedCells;
        private scope;
        private node;
        private rowIndex;
        private cellRendererMap;
        private gridOptionsWrapper;
        private parentScope;
        private angularGrid;
        private columnController;
        private expressionService;
        private rowRenderer;
        private selectionRendererFactory;
        private $compile;
        private templateService;
        private selectionController;
        private pinning;
        private eBodyContainer;
        private ePinnedContainer;
        private valueService;
        private eventService;
        constructor(gridOptionsWrapper: GridOptionsWrapper, valueService: ValueService, parentScope: any, angularGrid: Grid, columnController: ColumnController, expressionService: ExpressionService, cellRendererMap: {
            [key: string]: any;
        }, selectionRendererFactory: SelectionRendererFactory, $compile: any, templateService: TemplateService, selectionController: SelectionController, rowRenderer: RowRenderer, eBodyContainer: HTMLElement, ePinnedContainer: HTMLElement, node: any, rowIndex: number, eventService: EventService);
        onRowSelected(selected: boolean): void;
        softRefresh(): void;
        getRenderedCellForColumn(column: Column): RenderedCell;
        getCellForCol(column: Column): any;
        destroy(): void;
        private destroyScope();
        isDataInList(rows: any[]): boolean;
        isNodeInList(nodes: RowNode[]): boolean;
        isGroup(): boolean;
        private drawNormalRow();
        private bindVirtualElement(vElement);
        private createGroupRow();
        private createGroupSpanningEntireRowCell(padding);
        setMainRowWidth(width: number): void;
        private createChildScopeOrNull(data);
        private addDynamicStyles();
        private createRowContainer();
        getRowNode(): any;
        getRowIndex(): any;
        refreshCells(colIds: string[]): void;
        private addDynamicClasses();
    }
}
declare module ag.grid {
    class SvgFactory {
        static theInstance: SvgFactory;
        static getInstance(): SvgFactory;
        createFilterSvg(): Element;
        createColumnShowingSvg(): Element;
        createColumnHiddenSvg(): Element;
        createMenuSvg(): Element;
        createArrowUpSvg(): Element;
        createArrowLeftSvg(): Element;
        createArrowDownSvg(): Element;
        createArrowRightSvg(): Element;
        createSmallArrowDownSvg(): Element;
        createArrowUpDownSvg(): Element;
    }
}
declare module ag.grid {
    function groupCellRendererFactory(gridOptionsWrapper: GridOptionsWrapper, selectionRendererFactory: SelectionRendererFactory, expressionService: ExpressionService): (params: any) => HTMLSpanElement;
}
declare module ag.grid {
    class RowRenderer {
        private columnModel;
        private gridOptionsWrapper;
        private angularGrid;
        private selectionRendererFactory;
        private gridPanel;
        private $compile;
        private $scope;
        private selectionController;
        private expressionService;
        private templateService;
        private cellRendererMap;
        private rowModel;
        private firstVirtualRenderedRow;
        private lastVirtualRenderedRow;
        private focusedCell;
        private valueService;
        private eventService;
        private renderedRows;
        private renderedTopFloatingRows;
        private renderedBottomFloatingRows;
        private eAllBodyContainers;
        private eAllPinnedContainers;
        private eBodyContainer;
        private eBodyViewport;
        private ePinnedColsContainer;
        private eFloatingTopContainer;
        private eFloatingTopPinnedContainer;
        private eFloatingBottomContainer;
        private eFloatingBottomPinnedContainer;
        private eParentsOfRows;
        init(columnModel: any, gridOptionsWrapper: GridOptionsWrapper, gridPanel: GridPanel, angularGrid: Grid, selectionRendererFactory: SelectionRendererFactory, $compile: any, $scope: any, selectionController: SelectionController, expressionService: ExpressionService, templateService: TemplateService, valueService: ValueService, eventService: EventService): void;
        setRowModel(rowModel: any): void;
        onIndividualColumnResized(column: Column): void;
        setMainRowWidths(): void;
        private findAllElements(gridPanel);
        refreshAllFloatingRows(): void;
        private refreshFloatingRows(renderedRows, rowData, pinnedContainer, bodyContainer, isTop);
        refreshView(refreshFromIndex?: any): void;
        softRefreshView(): void;
        refreshRows(rowNodes: RowNode[]): void;
        refreshCells(rowNodes: RowNode[], colIds: string[]): void;
        rowDataChanged(rows: any): void;
        private refreshAllVirtualRows(fromIndex);
        refreshGroupRows(): void;
        private removeVirtualRow(rowsToRemove, fromIndex?);
        private unbindVirtualRow(indexToRemove);
        drawVirtualRows(): void;
        getFirstVirtualRenderedRow(): number;
        getLastVirtualRenderedRow(): number;
        private ensureRowsRendered();
        private insertRow(node, rowIndex, mainRowWidth);
        getRenderedNodes(): any[];
        getIndexOfRenderedNode(node: any): number;
        navigateToNextCell(key: any, rowIndex: number, column: Column): void;
        private getNextCellToFocus(key, lastCellToFocus);
        onRowSelected(rowIndex: number, selected: boolean): void;
        focusCell(eCell: any, rowIndex: number, colIndex: number, colDef: ColDef, forceBrowserFocus: any): void;
        getFocusedCell(): any;
        setFocusedCell(rowIndex: any, colIndex: any): void;
        startEditingNextCell(rowIndex: any, column: any, shiftKey: any): void;
    }
}
declare module ag.grid {
    class SelectionController {
        private eParentsOfRows;
        private angularGrid;
        private gridOptionsWrapper;
        private $scope;
        private rowRenderer;
        private selectedRows;
        private selectedNodesById;
        private rowModel;
        private eventService;
        init(angularGrid: Grid, gridPanel: GridPanel, gridOptionsWrapper: GridOptionsWrapper, $scope: any, rowRenderer: RowRenderer, eventService: EventService): void;
        private initSelectedNodesById();
        getSelectedNodesById(): any;
        getSelectedRows(): any;
        getSelectedNodes(): any;
        getBestCostNodeSelection(): any;
        setRowModel(rowModel: any): void;
        deselectAll(): void;
        selectAll(): void;
        selectNode(node: any, tryMulti: any, suppressEvents?: any): void;
        private recursivelySelectAllChildren(node, suppressEvents?);
        private recursivelyDeselectAllChildren(node);
        private doWorkOfSelectNode(node, suppressEvents);
        private addCssClassForNode_andInformVirtualRowListener(node);
        private doWorkOfDeselectAllNodes(nodeToKeepSelected?);
        private deselectRealNode(node);
        private removeCssClassForNode(node);
        deselectIndex(rowIndex: any): void;
        deselectNode(node: any): void;
        selectIndex(index: any, tryMulti: any, suppressEvents?: any): void;
        private syncSelectedRowsAndCallListener(suppressEvents?);
        private recursivelyCheckIfSelected(node);
        isNodeSelected(node: any): boolean;
        private updateGroupParentsIfNeeded();
    }
}
declare module ag.grid {
    class RenderedHeaderElement {
        private eRoot;
        private dragStartX;
        constructor(eRoot: HTMLElement);
        getERoot(): HTMLElement;
        destroy(): void;
        refreshFilterIcon(): void;
        refreshSortIcon(): void;
        onDragStart(): void;
        onDragging(dragChange: number): void;
        onIndividualColumnResized(column: Column): void;
        addDragHandler(eDraggableElement: any): void;
        stopDragging(listenersToRemove: any): void;
    }
}
declare module ag.grid {
    class RenderedHeaderCell extends RenderedHeaderElement {
        private static DEFAULT_SORTING_ORDER;
        private eHeaderCell;
        private eSortAsc;
        private eSortDesc;
        private eSortNone;
        private eFilterIcon;
        private column;
        private gridOptionsWrapper;
        private parentScope;
        private childScope;
        private filterManager;
        private columnController;
        private $compile;
        private angularGrid;
        private parentGroup;
        private startWidth;
        constructor(column: Column, parentGroup: RenderedHeaderGroupCell, gridOptionsWrapper: GridOptionsWrapper, parentScope: any, filterManager: FilterManager, columnController: ColumnController, $compile: any, angularGrid: Grid, eRoot: HTMLElement);
        getGui(): HTMLElement;
        destroy(): void;
        private createScope();
        private addAttributes();
        private addClasses();
        private addMenu();
        private addSortIcons(headerCellLabel);
        private setupComponents();
        private useRenderer(headerNameValue, headerCellRenderer, headerCellLabel);
        refreshFilterIcon(): void;
        refreshSortIcon(): void;
        private getNextSortDirection();
        private addSortHandling(headerCellLabel);
        onDragStart(): void;
        onDragging(dragChange: number): void;
        onIndividualColumnResized(column: Column): void;
        private addHeaderClassesFromCollDef();
    }
}
declare module ag.grid {
    class RenderedHeaderGroupCell extends RenderedHeaderElement {
        private eHeaderGroup;
        private eHeaderGroupCell;
        private eHeaderCellResize;
        private columnGroup;
        private gridOptionsWrapper;
        private columnController;
        private children;
        private groupWidthStart;
        private childrenWidthStarts;
        private minWidth;
        private parentScope;
        private filterManager;
        private $compile;
        private angularGrid;
        constructor(columnGroup: ColumnGroup, gridOptionsWrapper: GridOptionsWrapper, columnController: ColumnController, eRoot: HTMLElement, angularGrid: Grid, parentScope: any, filterManager: FilterManager, $compile: any);
        getGui(): HTMLElement;
        destroy(): void;
        refreshFilterIcon(): void;
        refreshSortIcon(): void;
        onIndividualColumnResized(column: Column): void;
        private setupComponents();
        private isColumnInOurDisplayedGroup(column);
        private setWidthOfGroupHeaderCell();
        private addGroupExpandIcon(eGroupCellLabel);
        onDragStart(): void;
        onDragging(dragChange: any): void;
    }
}
declare module ag.grid {
    class HeaderRenderer {
        private gridOptionsWrapper;
        private columnController;
        private angularGrid;
        private filterManager;
        private $scope;
        private $compile;
        private ePinnedHeader;
        private eHeaderContainer;
        private eRoot;
        private headerElements;
        init(gridOptionsWrapper: GridOptionsWrapper, columnController: ColumnController, gridPanel: GridPanel, angularGrid: Grid, filterManager: FilterManager, $scope: any, $compile: any): void;
        private findAllElements(gridPanel);
        refreshHeader(): void;
        private insertHeadersWithGrouping();
        private insertHeadersWithoutGrouping();
        updateSortIcons(): void;
        updateFilterIcons(): void;
        onIndividualColumnResized(column: Column): void;
    }
}
declare module ag.grid {
    class GroupCreator {
        private valueService;
        init(valueService: ValueService): void;
        group(rowNodes: RowNode[], groupedCols: Column[], expandByDefault: any): RowNode[];
        isExpanded(expandByDefault: any, level: any): boolean;
    }
}
declare module ag.grid {
    class InMemoryRowController {
        private gridOptionsWrapper;
        private columnController;
        private angularGrid;
        private filterManager;
        private $scope;
        private allRows;
        private rowsAfterGroup;
        private rowsAfterFilter;
        private rowsAfterSort;
        private rowsAfterMap;
        private model;
        private groupCreator;
        private valueService;
        private eventService;
        constructor();
        init(gridOptionsWrapper: GridOptionsWrapper, columnController: ColumnController, angularGrid: any, filterManager: FilterManager, $scope: any, groupCreator: GroupCreator, valueService: ValueService, eventService: EventService): void;
        private createModel();
        getModel(): any;
        forEachInMemory(callback: Function): void;
        forEachNode(callback: Function): void;
        forEachNodeAfterFilter(callback: Function): void;
        forEachNodeAfterFilterAndSort(callback: Function): void;
        private recursivelyWalkNodesAndCallback(list, callback);
        updateModel(step: any): void;
        private defaultGroupAggFunctionFactory(valueColumns, valueKeys);
        doAggregate(): void;
        expandOrCollapseAll(expand: boolean, rowNodes: RowNode[]): void;
        private recursivelyClearAggData(nodes);
        private recursivelyCreateAggData(nodes, groupAggFunction, level);
        private doSort();
        private recursivelyResetSort(rowNodes);
        private sortList(nodes, sortOptions);
        private updateChildIndexes(nodes);
        onPivotChanged(): void;
        private doPivoting();
        private doFilter();
        private filterItems(rowNodes);
        private recursivelyResetFilter(nodes);
        setAllRows(rows: RowNode[], firstId?: number): void;
        private recursivelyAddIdToNodes(nodes, index);
        private recursivelyCheckUserProvidedNodes(nodes, parent, level);
        private getTotalChildCount(rowNodes);
        private doGroupMapping();
        private addToMap(mappedData, originalNodes);
        private createFooterNode(groupNode);
    }
}
declare module ag.grid {
    class VirtualPageRowController {
        rowRenderer: any;
        datasourceVersion: any;
        gridOptionsWrapper: any;
        angularGrid: any;
        datasource: any;
        virtualRowCount: any;
        foundMaxRow: any;
        pageCache: any;
        pageCacheSize: any;
        pageLoadsInProgress: any;
        pageLoadsQueued: any;
        pageAccessTimes: any;
        accessTime: any;
        maxConcurrentDatasourceRequests: any;
        maxPagesInCache: any;
        pageSize: any;
        overflowSize: any;
        init(rowRenderer: any, gridOptionsWrapper: any, angularGrid: any): void;
        setDatasource(datasource: any): void;
        reset(): void;
        createNodesFromRows(pageNumber: any, rows: any): any;
        removeFromLoading(pageNumber: any): void;
        pageLoadFailed(pageNumber: any): void;
        pageLoaded(pageNumber: any, rows: any, lastRow: any): void;
        putPageIntoCacheAndPurge(pageNumber: any, rows: any): void;
        checkMaxRowAndInformRowRenderer(pageNumber: any, lastRow: any): void;
        isPageAlreadyLoading(pageNumber: any): boolean;
        doLoadOrQueue(pageNumber: any): void;
        addToQueueAndPurgeQueue(pageNumber: any): void;
        findLeastRecentlyAccessedPage(pageIndexes: any): number;
        checkQueueForNextLoad(): void;
        loadPage(pageNumber: any): void;
        requestIsDaemon(datasourceVersionCopy: any): boolean;
        getVirtualRow(rowIndex: any): any;
        forEachNode(callback: any): void;
        getModel(): {
            getVirtualRow: (index: any) => any;
            getVirtualRowCount: () => any;
            forEachInMemory: (callback: any) => void;
            forEachNode: (callback: any) => void;
            forEachNodeAfterFilter: (callback: any) => void;
            forEachNodeAfterFilterAndSort: (callback: any) => void;
        };
    }
}
declare module ag.grid {
    class PaginationController {
        eGui: any;
        btNext: any;
        btPrevious: any;
        btFirst: any;
        btLast: any;
        lbCurrent: any;
        lbTotal: any;
        lbRecordCount: any;
        lbFirstRowOnPage: any;
        lbLastRowOnPage: any;
        ePageRowSummaryPanel: any;
        angularGrid: any;
        callVersion: any;
        gridOptionsWrapper: any;
        datasource: any;
        pageSize: any;
        rowCount: any;
        foundMaxRow: any;
        totalPages: any;
        currentPage: any;
        init(angularGrid: any, gridOptionsWrapper: any): void;
        setDatasource(datasource: any): void;
        reset(): void;
        setTotalLabels(): void;
        calculateTotalPages(): void;
        pageLoaded(rows: any, lastRowIndex: any): void;
        updateRowLabels(): void;
        loadPage(): void;
        isCallDaemon(versionCopy: any): boolean;
        onBtNext(): void;
        onBtPrevious(): void;
        onBtFirst(): void;
        onBtLast(): void;
        isZeroPagesToDisplay(): boolean;
        enableOrDisableButtons(): void;
        createTemplate(): string;
        getGui(): any;
        setupComponents(): void;
    }
}
declare module ag.grid {
    class BorderLayout {
        private eNorthWrapper;
        private eSouthWrapper;
        private eEastWrapper;
        private eWestWrapper;
        private eCenterWrapper;
        private eOverlayWrapper;
        private eCenterRow;
        private eNorthChildLayout;
        private eSouthChildLayout;
        private eEastChildLayout;
        private eWestChildLayout;
        private eCenterChildLayout;
        private isLayoutPanel;
        private fullHeight;
        private layoutActive;
        private eGui;
        private id;
        private childPanels;
        private centerHeightLastTime;
        private sizeChangeListners;
        constructor(params: any);
        addSizeChangeListener(listener: Function): void;
        fireSizeChanged(): void;
        private setupPanels(params);
        private setupPanel(content, ePanel);
        getGui(): any;
        doLayout(): boolean;
        private layoutChild(childPanel);
        private layoutHeight();
        private layoutHeightFullHeight();
        private layoutHeightNormal();
        getCentreHeight(): number;
        private layoutWidth();
        setEastVisible(visible: any): void;
        setOverlayVisible(visible: any): void;
        setSouthVisible(visible: any): void;
    }
}
declare module ag.grid {
    class GridPanel {
        private masterSlaveService;
        private gridOptionsWrapper;
        private columnModel;
        private rowRenderer;
        private rowModel;
        private layout;
        private forPrint;
        private scrollWidth;
        private scrollLagCounter;
        private eBodyViewport;
        private eRoot;
        private eBody;
        private eBodyContainer;
        private ePinnedColsContainer;
        private eHeaderContainer;
        private ePinnedHeader;
        private eHeader;
        private eParentsOfRows;
        private eBodyViewportWrapper;
        private ePinnedColsViewport;
        private eFloatingTop;
        private ePinnedFloatingTop;
        private eFloatingTopContainer;
        private eFloatingBottom;
        private ePinnedFloatingBottom;
        private eFloatingBottomContainer;
        init(gridOptionsWrapper: GridOptionsWrapper, columnModel: ColumnController, rowRenderer: RowRenderer, masterSlaveService: MasterSlaveService): void;
        getLayout(): BorderLayout;
        private setupComponents();
        getPinnedFloatingTop(): HTMLElement;
        getFloatingTopContainer(): HTMLElement;
        getPinnedFloatingBottom(): HTMLElement;
        getFloatingBottomContainer(): HTMLElement;
        private createTemplate();
        ensureIndexVisible(index: any): void;
        ensureColIndexVisible(index: any): void;
        showLoading(loading: any): void;
        getWidthForSizeColsToFit(): number;
        setRowModel(rowModel: any): void;
        getBodyContainer(): HTMLElement;
        getBodyViewport(): HTMLElement;
        getPinnedColsContainer(): HTMLElement;
        getHeaderContainer(): HTMLElement;
        getRoot(): HTMLElement;
        getPinnedHeader(): HTMLElement;
        getRowsParent(): HTMLElement[];
        private queryHtmlElement(selector);
        private findElements();
        private mouseWheelListener(event);
        setBodyContainerWidth(): void;
        setPinnedColContainerWidth(): void;
        showPinnedColContainersIfNeeded(): void;
        onBodyHeightChange(): void;
        private sizeHeaderAndBody();
        private sizeHeaderAndBodyNormal();
        private sizeHeaderAndBodyForPrint();
        setHorizontalScrollPosition(hScrollPosition: number): void;
        private addScrollListener();
        private requestDrawVirtualRows();
        private scrollHeader(bodyLeftPosition);
        private scrollPinned(bodyTopPosition);
    }
}
declare module ag.grid {
    class DragAndDropService {
        static theInstance: DragAndDropService;
        static getInstance(): DragAndDropService;
        dragItem: any;
        constructor();
        stopDragging(): void;
        setDragCssClasses(eListItem: any, dragging: any): void;
        addDragSource(eDragSource: any, dragSourceCallback: any): void;
        onMouseDownDragSource(eDragSource: any, dragSourceCallback: any): void;
        addDropTarget(eDropTarget: any, dropTargetCallback: any): void;
    }
}
declare function require(name: string): any;
declare module ag.grid {
    class AgList {
        private eGui;
        private uniqueId;
        private modelChangedListeners;
        private itemSelectedListeners;
        private beforeDropListeners;
        private itemMovedListeners;
        private dragSources;
        private emptyMessage;
        private eFilterValueTemplate;
        private eListParent;
        private model;
        private cellRenderer;
        private readOnly;
        constructor();
        setReadOnly(readOnly: boolean): void;
        setEmptyMessage(emptyMessage: any): void;
        getUniqueId(): any;
        addStyles(styles: any): void;
        addCssClass(cssClass: any): void;
        addDragSource(dragSource: any): void;
        addModelChangedListener(listener: Function): void;
        addItemSelectedListener(listener: any): void;
        addItemMovedListener(listener: any): void;
        addBeforeDropListener(listener: any): void;
        private fireItemMoved(fromIndex, toIndex);
        private fireModelChanged();
        private fireItemSelected(item);
        private fireBeforeDrop(item);
        private setupComponents();
        setModel(model: any): void;
        getModel(): any;
        setCellRenderer(cellRenderer: any): void;
        refreshView(): void;
        private insertRows();
        private insertBlankMessage();
        private setupAsDropTarget();
        private externalAcceptDrag(dragEvent);
        private externalDrop(dragEvent);
        private externalNoDrop();
        private addItemToList(newItem);
        private addDragAndDropToListItem(eListItem, item);
        private internalAcceptDrag(targetColumn, dragItem, eListItem);
        private internalDrop(targetColumn, draggedColumn);
        private internalNoDrop(eListItem);
        private dragAfterThisItem(targetColumn, draggedColumn);
        private setDropCssClasses(eListItem, state);
        getGui(): any;
    }
}
declare module ag.grid {
    class ColumnSelectionPanel {
        private gridOptionsWrapper;
        private columnController;
        private cColumnList;
        layout: any;
        private eRootPanel;
        constructor(columnController: ColumnController, gridOptionsWrapper: GridOptionsWrapper, eventService: EventService);
        private columnsChanged();
        getDragSource(): any;
        private columnCellRenderer(params);
        private setupComponents();
        private onItemMoved(fromIndex, toIndex);
        getGui(): any;
    }
}
declare module ag.grid {
    class GroupSelectionPanel {
        gridOptionsWrapper: any;
        columnController: ColumnController;
        inMemoryRowController: any;
        cColumnList: any;
        layout: any;
        constructor(columnController: ColumnController, inMemoryRowController: any, gridOptionsWrapper: GridOptionsWrapper, eventService: EventService);
        private columnsChanged();
        addDragSource(dragSource: any): void;
        private columnCellRenderer(params);
        private setupComponents();
        private onBeforeDrop(newItem);
        private onItemMoved(fromIndex, toIndex);
    }
}
declare module ag.grid {
    class AgDropdownList {
        private itemSelectedListeners;
        private eValue;
        private agList;
        private eGui;
        private hidePopupCallback;
        private selectedItem;
        private cellRenderer;
        private popupService;
        constructor(popupService: PopupService);
        setWidth(width: any): void;
        addItemSelectedListener(listener: any): void;
        fireItemSelected(item: any): void;
        setupComponents(): void;
        itemSelected(item: any): void;
        onClick(): void;
        getGui(): any;
        setSelected(item: any): void;
        setCellRenderer(cellRenderer: any): void;
        refreshView(): void;
        setModel(model: any): void;
    }
}
declare module ag.grid {
    class ValuesSelectionPanel {
        private gridOptionsWrapper;
        private columnController;
        private cColumnList;
        private layout;
        private popupService;
        constructor(columnController: ColumnController, gridOptionsWrapper: GridOptionsWrapper, popupService: PopupService, eventService: EventService);
        getLayout(): any;
        private columnsChanged();
        addDragSource(dragSource: any): void;
        private cellRenderer(params);
        private setupComponents();
        private beforeDropListener(newItem);
    }
}
declare module ag.grid {
    class VerticalStack {
        isLayoutPanel: any;
        childPanels: any;
        eGui: any;
        constructor();
        addPanel(panel: any, height: any): void;
        getGui(): any;
        doLayout(): void;
    }
}
declare module ag.grid {
    class ToolPanel {
        layout: any;
        constructor();
        init(columnController: any, inMemoryRowController: any, gridOptionsWrapper: GridOptionsWrapper, popupService: PopupService, eventService: EventService): void;
    }
}
declare module ag.grid {
    interface GridOptions {
        virtualPaging?: boolean;
        toolPanelSuppressPivot?: boolean;
        toolPanelSuppressValues?: boolean;
        rowsAlreadyGrouped?: boolean;
        suppressRowClickSelection?: boolean;
        suppressCellSelection?: boolean;
        sortingOrder?: string[];
        suppressMultiSort?: boolean;
        suppressHorizontalScroll?: boolean;
        unSortIcon?: boolean;
        rowHeight?: number;
        rowBuffer?: number;
        enableColResize?: boolean;
        enableCellExpressions?: boolean;
        enableSorting?: boolean;
        enableServerSideSorting?: boolean;
        enableFilter?: boolean;
        enableServerSideFilter?: boolean;
        colWidth?: number;
        suppressMenuHide?: boolean;
        singleClickEdit?: boolean;
        debug?: boolean;
        icons?: any;
        angularCompileRows?: boolean;
        angularCompileFilters?: boolean;
        angularCompileHeaders?: boolean;
        localeText?: any;
        localeTextFunc?: Function;
        suppressScrollLag?: boolean;
        groupSuppressAutoColumn?: boolean;
        groupSelectsChildren?: boolean;
        groupHidePivotColumns?: boolean;
        groupIncludeFooter?: boolean;
        groupUseEntireRow?: boolean;
        groupSuppressRow?: boolean;
        groupSuppressBlankHeader?: boolean;
        forPrint?: boolean;
        groupColumnDef?: any;
        context?: any;
        rowStyle?: any;
        rowClass?: any;
        groupDefaultExpanded?: any;
        slaveGrids?: GridOptions[];
        rowSelection?: string;
        rowDeselection?: boolean;
        rowData?: any[];
        floatingTopRowData?: any[];
        floatingBottomRowData?: any[];
        showToolPanel?: boolean;
        groupKeys?: string[];
        groupAggFields?: string[];
        columnDefs?: any[];
        datasource?: any;
        pinnedColumnCount?: number;
        groupHeaders?: boolean;
        headerHeight?: number;
        groupRowInnerRenderer?(params: any): void;
        groupRowRenderer?: Function | Object;
        isScrollLag?(): boolean;
        isExternalFilterPresent?(): boolean;
        doesExternalFilterPass?(node: RowNode): boolean;
        getRowStyle?: any;
        getRowClass?: any;
        headerCellRenderer?: any;
        groupAggFunction?(nodes: any[]): any;
        onReady?(api: any): void;
        onModelUpdated?(): void;
        onCellClicked?(params: any): void;
        onCellDoubleClicked?(params: any): void;
        onCellContextMenu?(params: any): void;
        onCellValueChanged?(params: any): void;
        onCellFocused?(params: any): void;
        onRowSelected?(params: any): void;
        onSelectionChanged?(): void;
        onBeforeFilterChanged?(): void;
        onAfterFilterChanged?(): void;
        onFilterModified?(): void;
        onBeforeSortChanged?(): void;
        onAfterSortChanged?(): void;
        onVirtualRowRemoved?(params: any): void;
        onRowClicked?(params: any): void;
        api?: GridApi;
        columnApi?: ColumnApi;
    }
}
declare module ag.grid {
    class GridApi {
        private grid;
        private rowRenderer;
        private headerRenderer;
        private filterManager;
        private columnController;
        private inMemoryRowController;
        private selectionController;
        private gridOptionsWrapper;
        private gridPanel;
        private valueService;
        private masterSlaveService;
        private eventService;
        private csvCreator;
        constructor(grid: Grid, rowRenderer: RowRenderer, headerRenderer: HeaderRenderer, filterManager: FilterManager, columnController: ColumnController, inMemoryRowController: InMemoryRowController, selectionController: SelectionController, gridOptionsWrapper: GridOptionsWrapper, gridPanel: GridPanel, valueService: ValueService, masterSlaveService: MasterSlaveService, eventService: EventService);
        /** Used internally by grid. Not intended to be used by the client. Interface may change between releases. */
        __getMasterSlaveService(): MasterSlaveService;
        getDataAsCsv(params?: CsvExportParams): string;
        exportDataAsCsv(params?: CsvExportParams): void;
        setDatasource(datasource: any): void;
        onNewDatasource(): void;
        setRowData(rowData: any): void;
        setRows(rows: any): void;
        onNewRows(): void;
        setFloatingTopRowData(rows: any[]): void;
        setFloatingBottomRowData(rows: any[]): void;
        onNewCols(): void;
        setColumnDefs(colDefs: ColDef[]): void;
        unselectAll(): void;
        refreshRows(rowNodes: RowNode[]): void;
        refreshCells(rowNodes: RowNode[], colIds: string[]): void;
        rowDataChanged(rows: any): void;
        refreshView(): void;
        softRefreshView(): void;
        refreshGroupRows(): void;
        refreshHeader(): void;
        isAnyFilterPresent(): boolean;
        isAdvancedFilterPresent(): boolean;
        isQuickFilterPresent(): boolean;
        getModel(): any;
        onGroupExpandedOrCollapsed(refreshFromIndex: any): void;
        expandAll(): void;
        collapseAll(): void;
        addVirtualRowListener(rowIndex: any, callback: any): void;
        setQuickFilter(newFilter: any): void;
        selectIndex(index: any, tryMulti: any, suppressEvents: any): void;
        deselectIndex(index: any): void;
        selectNode(node: any, tryMulti: any, suppressEvents: any): void;
        deselectNode(node: any): void;
        selectAll(): void;
        deselectAll(): void;
        recomputeAggregates(): void;
        sizeColumnsToFit(): void;
        showLoading(show: any): void;
        isNodeSelected(node: any): boolean;
        getSelectedNodesById(): {
            [nodeId: number]: RowNode;
        };
        getSelectedNodes(): RowNode[];
        getSelectedRows(): any[];
        getBestCostNodeSelection(): any;
        getRenderedNodes(): any[];
        ensureColIndexVisible(index: any): void;
        ensureIndexVisible(index: any): void;
        ensureNodeVisible(comparator: any): void;
        forEachInMemory(callback: Function): void;
        forEachNode(callback: Function): void;
        forEachNodeAfterFilter(callback: Function): void;
        forEachNodeAfterFilterAndSort(callback: Function): void;
        getFilterApiForColDef(colDef: any): any;
        getFilterApi(key: any): any;
        getColumnDef(key: any): ColDef;
        onFilterChanged(): void;
        setSortModel(sortModel: any): void;
        getSortModel(): any;
        setFilterModel(model: any): void;
        getFilterModel(): any;
        getFocusedCell(): any;
        setFocusedCell(rowIndex: any, colIndex: any): void;
        setHeaderHeight(headerHeight: number): void;
        setGroupHeaders(groupHeaders: boolean): void;
        showToolPanel(show: any): void;
        isToolPanelShowing(): boolean;
        hideColumn(colId: any, hide: any): void;
        hideColumns(colIds: any, hide: any): void;
        getColumnState(): [any];
        setColumnState(state: any): void;
        doLayout(): void;
        getValue(colDef: ColDef, data: any, node: any): any;
        addEventListener(eventType: string, listener: Function): void;
        addGlobalListener(listener: Function): void;
        removeEventListener(eventType: string, listener: Function): void;
        removeGlobalListener(listener: Function): void;
        refreshPivot(): void;
    }
}
declare module ag.grid {
    class ValueService {
        private gridOptionsWrapper;
        private expressionService;
        private columnController;
        init(gridOptionsWrapper: GridOptionsWrapper, expressionService: ExpressionService, columnController: ColumnController): void;
        getValue(colDef: ColDef, data: any, node: any): any;
        private executeValueGetter(valueGetter, data, colDef, node);
        private getValueCallback(data, node, field);
    }
}
declare module ag.grid {
    class Grid {
        private virtualRowCallbacks;
        private gridOptions;
        private gridOptionsWrapper;
        private inMemoryRowController;
        private doingVirtualPaging;
        private paginationController;
        private virtualPageRowController;
        private finished;
        private selectionController;
        private columnController;
        private rowRenderer;
        private headerRenderer;
        private filterManager;
        private valueService;
        private masterSlaveService;
        private eventService;
        private toolPanel;
        private gridPanel;
        private eRootPanel;
        private toolPanelShowing;
        private doingPagination;
        private usingInMemoryModel;
        private rowModel;
        constructor(eGridDiv: any, gridOptions: any, globalEventListener?: Function, $scope?: any, $compile?: any, quickFilterOnScope?: any);
        getRowModel(): any;
        private periodicallyDoLayout();
        private setupComponents($scope, $compile, eUserProvidedDiv, globalEventListener);
        private onColumnChanged(event);
        refreshPivot(): void;
        getEventService(): EventService;
        private onIndividualColumnResized(column);
        showToolPanel(show: any): void;
        isToolPanelShowing(): boolean;
        isUsingInMemoryModel(): boolean;
        setDatasource(datasource?: any): void;
        private refreshHeaderAndBody();
        setFinished(): void;
        onQuickFilterChanged(newFilter: any): void;
        onFilterModified(): void;
        onFilterChanged(): void;
        onRowClicked(event: any, rowIndex: any, node: any): void;
        showLoadingPanel(show: any): void;
        private setupColumns();
        updateModelAndRefresh(step: any, refreshFromIndex?: any): void;
        setRows(rows?: any, firstId?: any): void;
        ensureNodeVisible(comparator: any): void;
        getFilterModel(): any;
        setFocusedCell(rowIndex: any, colIndex: any): void;
        getSortModel(): any;
        setSortModel(sortModel: any): void;
        onSortingChanged(): void;
        addVirtualRowListener(rowIndex: any, callback: any): void;
        onVirtualRowSelected(rowIndex: any, selected: any): void;
        onVirtualRowRemoved(rowIndex: any): void;
        setColumnDefs(colDefs?: ColDef[]): void;
        updateBodyContainerWidthAfterColResize(): void;
        updatePinnedColContainerWidthAfterColResize(): void;
        doLayout(): void;
    }
}
declare module ag.grid {
    class ComponentUtil {
        static SIMPLE_PROPERTIES: string[];
        static SIMPLE_NUMBER_PROPERTIES: string[];
        static SIMPLE_BOOLEAN_PROPERTIES: string[];
        static WITH_IMPACT_NUMBER_PROPERTIES: string[];
        static WITH_IMPACT_BOOLEAN_PROPERTIES: string[];
        static WITH_IMPACT_OTHER_PROPERTIES: string[];
        static CALLBACKS: string[];
        static ALL_PROPERTIES: string[];
        static copyAttributesToGridOptions(gridOptions: GridOptions, component: any): GridOptions;
        static processOnChange(changes: any, gridOptions: GridOptions, component: any): void;
        static toBoolean(value: any): boolean;
        static toNumber(value: any): number;
    }
}
declare module ag.grid {
    class AgGridNg2 {
        private elementDef;
        private _agGrid;
        private _initialised;
        private gridOptions;
        private api;
        private columnApi;
        modelUpdated: any;
        cellClicked: any;
        cellDoubleClicked: any;
        cellContextMenu: any;
        cellValueChanged: any;
        cellFocused: any;
        rowSelected: any;
        selectionChanged: any;
        beforeFilterChanged: any;
        afterFilterChanged: any;
        filterModified: any;
        beforeSortChanged: any;
        afterSortChanged: any;
        virtualRowRemoved: any;
        rowClicked: any;
        ready: any;
        columnEverythingChanged: any;
        columnPivotChanged: any;
        columnValueChanged: any;
        columnMoved: any;
        columnVisible: any;
        columnGroupOpened: any;
        columnResized: any;
        columnPinnedCountChanged: any;
        virtualPaging: boolean;
        toolPanelSuppressPivot: boolean;
        toolPanelSuppressValues: boolean;
        rowsAlreadyGrouped: boolean;
        suppressRowClickSelection: boolean;
        suppressCellSelection: boolean;
        sortingOrder: string[];
        suppressMultiSort: boolean;
        suppressHorizontalScroll: boolean;
        unSortIcon: boolean;
        rowHeight: number;
        rowBuffer: number;
        enableColResize: boolean;
        enableCellExpressions: boolean;
        enableSorting: boolean;
        enableServerSideSorting: boolean;
        enableFilter: boolean;
        enableServerSideFilter: boolean;
        colWidth: number;
        suppressMenuHide: boolean;
        debug: boolean;
        icons: any;
        angularCompileRows: boolean;
        angularCompileFilters: boolean;
        angularCompileHeaders: boolean;
        localeText: any;
        localeTextFunc: Function;
        groupSuppressAutoColumn: boolean;
        groupSelectsChildren: boolean;
        groupHidePivotColumns: boolean;
        groupIncludeFooter: boolean;
        groupUseEntireRow: boolean;
        groupSuppressRow: boolean;
        groupSuppressBlankHeader: boolean;
        groupColumnDef: any;
        forPrint: boolean;
        context: any;
        rowStyle: any;
        rowClass: any;
        headerCellRenderer: any;
        groupDefaultExpanded: any;
        slaveGrids: GridOptions[];
        rowSelection: string;
        rowDeselection: boolean;
        rowData: any[];
        floatingTopRowData: any[];
        floatingBottomRowData: any[];
        showToolPanel: boolean;
        groupKeys: string[];
        groupAggFunction: (nodes: any[]) => void;
        groupAggFields: string[];
        columnDefs: any[];
        datasource: any;
        pinnedColumnCount: number;
        quickFilterText: string;
        groupHeaders: boolean;
        headerHeight: number;
        constructor(elementDef: any);
        onInit(): void;
        onChange(changes: any): void;
        private globalEventListener(eventType, event);
    }
}
declare module ag.grid {
}
declare var exports: any;
declare var module: any;
declare module ag.grid {
    interface Filter {
        getGui(): any;
        isFilterActive(): boolean;
        doesFilterPass(params: any): boolean;
        afterGuiAttached?(params?: {
            hidePopup?: Function;
        }): void;
        onNewRowsLoaded?(): void;
    }
}
