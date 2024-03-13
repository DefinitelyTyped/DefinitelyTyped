// These are very definitely preliminary. Please feel free to improve.

// Changelog:
// 25/4/2014: Added interfaces for all classes and services

/// <reference types="angular" />

declare class ngGridReorderable {
    constructor();
}

declare var ngStyleProvider: ngGrid.IStyleProviderStatic;
declare var ngSearchProvider: ngGrid.ISearchProviderStatic;
declare var ngSelectionProvider: ngGrid.ISelectionProviderStatic;
declare var ngEventProvider: ngGrid.IEventProviderStatic;
declare var ngAggregate: ngGrid.IAggregateStatic;
declare var ngRenderedRange: ngGrid.IRenderedRangeStatic;
declare var ngDimension: ngGrid.IDimensionStatic;
declare var ngRow: ngGrid.IRowStatic;
declare var ngColumn: ngGrid.IColumnStatic;
declare var ngFooter: ngGrid.IFooterStatic;

declare namespace ngGrid {
    export interface IDomAccessProvider {
        previousColumn: IColumn;
        grid: IGridInstance;
        changeUserSelect(elm: angular.IAugmentedJQuery, value: string): void;
        focusCellElement($scope: IGridScope, index: number): void;
        selectionHandlers($scope: IGridScope, elm: angular.IAugmentedJQuery): void;
    }

    export interface IStyleProviderStatic {
        new($scope: IGridScope, grid: IGridInstance): IStyleProvider;
    }

    export interface IStyleProvider {
    }

    export interface ISearchProviderStatic {
        new($scope: IGridScope, grid: IGridInstance, $filter: angular.IFilterService): ISearchProvider;
    }

    export interface ISearchProvider {
        fieldMap: any;
        extFilter: boolean;
        evalFilter(): void;
    }

    export interface ISelectionProviderStatic {
        new(grid: IGridInstance, $scope: IGridScope, $parse: angular.IParseService): ISelectionProvider;
    }

    export interface ISelectionProvider {
        multi: boolean;
        selectedItems: any[];
        selectedIndex: number;
        lastClickedRow: any;
        ignoreSelectedItemChanges: boolean;
        pKeyParser: angular.ICompiledExpression;
        ChangeSelection(rowItem: any, event: any): void;
        getSelection(entity: any): number;
        getSelectionIndex(entity: any): number;
        setSelection(rowItem: IRow, isSelected: boolean): void;
        toggleSelectAll(checkAll: boolean, bypass: boolean, selectFiltered: boolean): void;
    }

    export interface IEventProviderStatic {
        new(
            grid: IGridInstance,
            $scope: IGridScope,
            domUtilityService: service.IDomUtilityService,
            $timeout: angular.ITimeoutService,
        ): IEventProvider;
    }

    export interface IEventProvider {
        colToMove: IColumn;
        groupToMove: any;
        assignEvents(): void;
        assignGridEventHandlers(): void;
        dragStart(event: any): void;
        dragOver(event: any): void;
        setDraggables(): void;
        onGroupMouseDown(event: any): void;
        onGroupDrop(event: any): void;
        onHeaderMouseDown(event: any): void;
        onHeaderDrop(event: any): void;
    }

    export interface IAggregateStatic {
        new(aggEntity: any, rowFactory: IRowFactory, rowHeight: number, groupInitState: boolean): IAggregate;
    }

    export interface IAggregate {
        rowIndex: number;
        offsetTop: number;
        entity: any;
        label: string;
        field: string;
        depth: number;
        parent: any;
        children: any[];
        aggChildren: any[];
        aggIndex: number;
        collapsed: boolean;
        groupInitState: boolean;
        rowFactory: IRowFactory;
        rowHeight: number;
        isAggRow: boolean;
        offsetLeft: number;
        aggLabelFilter: any;
    }

    export interface IRowConfig {
        enableCellSelection: boolean;
        enableRowSelection: boolean;
        jqueryUITheme: boolean;
        rowClasses: string[];
        rowHeight: number;
        selectWithCheckboxOnly: boolean;
        selectedItems: any[];

        afterSelectionChangeCallback(): void;
        beforeSelectionChangeCallback(): void;
    }

    export interface IRenderedRangeStatic {
        new(top: number, bottom: number): IRenderedRange;
    }

    export interface IRenderedRange {
        bottomRow: number;
        topRow: number;
    }

    export interface IRowFactory {
        aggCache: any;
        dataChanged: boolean;
        groupedData: any;
        numberOfAggregates: number;
        parentCache: any[];
        parsedData: any[];
        renderedRange: IRenderedRange;
        rowConfig: IRowConfig;
        rowHeight: number;
        selectionProvider: ISelectionProvider;

        UpdateViewableRange(newRange: IRenderedRange): void;
        buildAggregateRow(aggEntity: any, rowIndex: number): IAggregate;
        buildEntityRow(entity: any, rowIndex: number): IRow;
        filteredRowsChanged(): void;
        fixRowCache(): void;
        getGrouping(groups: any): void;
        parseGroupData(groupData: any): void;
        renderedChange(): void;
        renderedChangeNoGroups(): void;
    }

    export interface IDimensionStatic {
        new(options: any): IDimension;
    }

    export interface IDimension {
        outerHeight?: number | undefined;
        outerWidth?: number | undefined;
        autoFitHeight?: boolean | undefined;
    }

    export interface IElementDimension {
        rootMaxH?: number | undefined;
        rootMaxW?: number | undefined;
        rowIndexCellW?: number | undefined;
        rowSelectedCellW?: number | undefined;
        scrollH?: number | undefined;
        scrollW?: number | undefined;
    }

    export interface IRowStatic {
        new(
            entity: any,
            config: IRowConfig,
            selectionProvider: ISelectionProvider,
            rowIndex: number,
            $utils: any,
        ): IRow;
    }

    export interface IRow {
        entity: any;
        config: IRowConfig;
        selectionProvider: ISelectionProvider;
        rowIndex: number;
        utils: any;
        selected: boolean;
        cursor: string;
        offsetTop: number;
        rowDisplayIndex: number;
        afterSelectionChange(): void;
        beforeSelectionChange(): void;
        setSelection(isSelected: boolean): void;
        continueSelection(event: any): void;
        ensureEntity(expected: any): void;
        toggleSelected(event: any): boolean;
        alternatingRowClass(): void;
        getProperty(path: string): any;
        copy(): IRow;
        setVars(fromRow: IRow): void;
    }

    export interface IColumnStatic {
        new(
            config: IGridOptions,
            $scope: IGridScope,
            grid: IGridInstance,
            domUtilityService: service.IDomUtilityService,
            $templateCache: angular.ITemplateCacheService,
            $utils: any,
        ): IColumn;
    }

    export interface IColumn {
        colDef: IColumnDef;
        width: number;
        groupIndex: number;
        isGroupedBy: boolean;
        minWidth: number;
        maxWidth: number;
        enableCellEdit: boolean;
        cellEditableCondition: any;
        headerRowHeight: number;
        displayName: string;
        index: number;
        isAggCol: boolean;
        cellClass: string;
        sortPriority: number;
        cellFilter: any;
        field: string;
        aggLabelFilter: any;
        visible: boolean;
        sortable: boolean;
        resizable: boolean;
        pinnable: boolean;
        pinned: boolean;
        originalIndex: number;
        groupable: boolean;
        sortDirection: string;
        sortingAlgorithm: Function;
        headerClass: string;
        cursor: string;
        headerCellTemplate: string;
        cellTemplate: string;
        groupedByClass(): string;
        toggleVisible(): void;
        showSortButtonUp(): boolean;
        showSortButtonDown(): boolean;
        noSortVisible(): boolean;
        sort(event: any): boolean;
        gripClick(): any;
        gripOnMouseDown(event: any): any;
        onMouseMove(event: any): void;
        gripOnMouseUp(event: any): void;
        copy(): IColumn;
        setVars(fromCol: IColumn): void;
    }

    export interface IGridScope extends angular.IScope {
        elementsNeedMeasuring: boolean;
        columns: any[];
        renderedRows: any[];
        renderedColumns: any[];
        headerRow: any;
        rowHeight: number;
        jqueryUITheme: any;
        showSelectionCheckbox: boolean;
        enableCellSelection: boolean;
        enableCellEditOnFocus: boolean;
        footer: IFooter;
        selectedItems: any[];
        multiSelect: boolean;
        showFooter: boolean;
        footerRowHeight: number;
        showColumnMenu: boolean;
        forceSyncScrolling: boolean;
        showMenu: boolean;
        configGroups: any[];
        gridId: string;
        enablePaging: boolean;
        pagingOptions: IPagingOptions;
        i18n: any;
        selectionProvider: ISelectionProvider;
        adjustScrollLeft(scrollLeft: number): void;
        adjustScrollTop(scrollTop: number, force: boolean): void;
        toggleShowMenu(): void;
        toggleSelectAll(): void;
        totalFilteredItemsLength(): number;
        showGroupPanel(): any;
        topPanelHeight(): number;
        viewportDimHeight(): number;
        groupBy(col: IColumn): void;
        removeGroup(index: number): void;
        togglePin(col: IColumn): void;
        totalRowWidth(): number;
        headerScrollerDim(): any;
    }

    export interface IGridInstance {
        $canvas: angular.IAugmentedJQuery;
        $viewport: angular.IAugmentedJQuery;
        $groupPanel: angular.IAugmentedJQuery;
        $footerPanel: angular.IAugmentedJQuery;
        $headerScroller: angular.IAugmentedJQuery;
        $headerContainer: angular.IAugmentedJQuery;
        $headers: angular.IAugmentedJQuery;
        $topPanel: angular.IAugmentedJQuery;
        $root: angular.IAugmentedJQuery;
        config: IGridOptions;
        data: any;
        elementDims: IElementDimension;
        eventProvider: IEventProvider;
        filteredRows: IRow[];
        footerController: any;
        gridId: string;
        lastSortedColumns: IColumn[];
        lateBindColumns: boolean;
        maxCanvasHt: number;
        prevScrollIndex: number;
        prevScrollTop: number;
        rootDim: IDimension;
        rowCache: IRow[];
        rowFactory: IRowFactory;
        rowMap: IRow[];
        searchProvider: ISearchProvider;
        styleProvider: IStyleProvider;

        buildColumnDefsFromData(): void;
        buildColumns(): void;
        calcMaxCanvasHeight(): void;
        clearSortingData(): void;
        configureColumnWidths(): void;
        fixColumnIndexes(): void;
        fixGroupIndexes(): void;
        getTemplate(key: string): angular.IPromise<any>;
        init(): angular.IPromise<any>;
        initTemplates(): angular.IPromise<any>;
        minRowsToRender(): void;
        refreshDomSizes(): void;
        resizeOnData(col: IColumn): void;
        setRenderedRows(newRows: IRow[]): void;
        sortActual(): void;
        sortColumnsInit(): void;
        sortData(col: IColumn, event: any): void;
    }

    export interface IFooterStatic {
        new($scope: IGridScope, grid: IGridInstance): IFooter;
    }

    export interface IFooter {
    }

    export interface IGridOptions {
        /** Define an aggregate template to customize the rows when grouped. See github wiki for more details. */
        aggregateTemplate?: string | undefined;

        /** Callback for when you want to validate something after selection. */
        afterSelectionChange?: ((rowItem?: IRow, event?: any) => void) | undefined;

        /** Callback if you want to inspect something before selection,
        return false if you want to cancel the selection. return true otherwise.
        If you need to wait for an async call to proceed with selection you can
        use rowItem.changeSelection(event) method after returning false initially.
        Note: when shift+ Selecting multiple items in the grid this will only get called
        once and the rowItem will be an array of items that are queued to be selected. */
        beforeSelectionChange?: ((rowItem?: IRow, event?: any) => boolean) | undefined;

        /** checkbox templates. */
        checkboxCellTemplate?: string | undefined;

        /** checkbox templates. */
        checkboxHeaderTemplate?: string | undefined;

        /** definitions of columns as an array [], if not defined columns are auto-generated. See github wiki for more details. */
        columnDefs?: IColumnDef[] | undefined;

        /** Data being displayed in the grid. This can be either a string of object ID or object reference.
            Using string is preferred, as this turns on change tracking in ng-grid
        */
        data?: any;

        /** Data updated callback, fires every time the data is modified from outside the grid. */
        dataUpdated?: Function | undefined;

        /** Enables cell editing. */
        enableCellEdit?: boolean | undefined;

        /** Enables cell selection. */
        enableCellSelection?: boolean | undefined;

        /** Enable or disable resizing of columns */
        enableColumnResize?: boolean | undefined;

        /** Enable or disable reordering of columns */
        enableColumnReordering?: boolean | undefined;

        /** Enable or disable HEAVY column virtualization. This turns off selection checkboxes and column pinning and is designed for spreadsheet-like data. */
        enableColumnHeavyVirt?: boolean | undefined;

        /** Enables the server-side paging feature */
        enablePaging?: boolean | undefined;

        /** Enable column pinning */
        enablePinning?: boolean | undefined;

        /** Enable drag and drop row reordering. Only works in HTML5 compliant browsers. */
        enableRowReordering?: boolean | undefined;

        /** To be able to have selectable rows in grid. */
        enableRowSelection?: boolean | undefined;

        /** Enables or disables sorting in grid. */
        enableSorting?: boolean | undefined;

        /**  string list of properties to exclude when auto-generating columns. */
        excludeProperties?: any;

        /** filterOptions -
        filterText: The text bound to the built-in search box.
        useExternalFilter: Bypass internal filtering if you want to roll your own filtering mechanism but want to use builtin search box.
        */
        filterOptions?: IFilterOptions | undefined;

        /** Defining the height of the footer in pixels. */
        footerRowHeight?: number | undefined;

        /** Initial fields to group data by. Array of field names, not displayName. */
        groups?: string[] | undefined;

        /** The height of the header row in pixels. */
        headerRowHeight?: number | undefined;

        /** Define a header row template for further customization. See github wiki for more details. */
        headerRowTemplate?: string | undefined;

        /** Enables the use of jquery UI reaggable/droppable plugin. requires jqueryUI to work if enabled.
        Useful if you want drag + drop but your users insist on crappy browsers. */
        jqueryUIDraggable?: boolean | undefined;

        /** Enable the use jqueryUIThemes */
        jqueryUITheme?: boolean | undefined;

        /** Prevent unselections when in single selection mode. */
        keepLastSelected?: boolean | undefined;

        /** Maintains the column widths while resizing.
        Defaults to true when using *'s or undefined widths. Can be ovverriden by setting to false. */
        maintainColumnRatios?: boolean | undefined;

        /** Set this to false if you only want one item selected at a time */
        multiSelect?: boolean | undefined;

        /**  pagingOptions - */
        pagingOptions?: IPagingOptions | undefined;

        /** Array of plugin functions to register in ng-grid */
        pinSelectionCheckbox?: boolean | undefined;

        /** Array of plugin functions to register in ng-grid */
        plugins?: any[] | undefined;

        /** Row height of rows in grid. */
        rowHeight?: number | undefined;

        /** Define a row template to customize output. See github wiki for more details. */
        rowTemplate?: string | undefined;

        /** all of the items selected in the grid. In single select mode there will only be one item in the array. */
        selectedItems?: any[] | undefined;

        /** Select deselect an item by index. */
        selectItem?: ((idx: number, state: boolean) => any) | undefined;

        /** Disable row selections by clicking on the row and only when the checkbox is clicked. */
        selectWithCheckboxOnly?: boolean | undefined;

        /** Enables menu to choose which columns to display and group by.
        If both showColumnMenu and showFilter are false the menu button will not display.*/
        showColumnMenu?: boolean | undefined;

        /** Enables display of the filterbox in the column menu.
        If both showColumnMenu and showFilter are false the menu button will not display.*/
        showFilter?: boolean | undefined;

        /** Show or hide the footer alltogether the footer is enabled by default */
        showFooter?: boolean | undefined;

        /** Show the dropzone for drag and drop grouping */
        showGroupPanel?: boolean | undefined;

        /** Row selection check boxes appear as the first column. */
        showSelectionCheckbox?: boolean | undefined;

        /** Define a sortInfo object to specify a default sorting state.
        You can also observe this variable to utilize server-side sorting (see useExternalSorting).
        Syntax is sortinfo: { fields: ['fieldName1',' fieldName2'], direction: 'ASC'/'asc' || 'desc'/'DESC'}*/
        sortInfo?: any;

        /** Set the tab index of the Vieport. */
        tabIndex?: number | undefined;

        /** Prevents the internal sorting from executing.
        The sortInfo object will be updated with the sorting information so you can handle sorting (see sortInfo)*/
        useExternalSorting?: boolean | undefined;

        /** i18n language support. choose from the installed or included languages, en, fr, sp, etc...*/
        i18n?: string | undefined;

        /** the threshold in rows to force virtualization on  */
        virtualizationThreshold?: number | undefined;

        /** Enables or disables text highlighting in grid by adding the "unselectable" class (See CSS file) */
        enableHighlighting?: boolean | undefined;
    }

    export interface IColumnDef {
        /**
         * This can be an absolute numberor it can also be defined in percentages (20%, 30%),
         * in weighted *s, or "auto" (which sizes the column based on data length)
         * (much like WPF/Silverlight)/ note: "auto" only works in single page apps currently because the re-size
         * happens on "document.ready
         */
        width?: any;

        /** The minum width the column is allowed to be. See width for the different options */
        minWidth?: any;

        /** Set the default visiblity of the column */
        visible?: boolean | undefined;

        /** Can also be a property path on your data model. "foo.bar.myField", "Name.First", etc..*/
        field?: string | undefined;

        /** What to display in the column header */
        displayName?: string | undefined;

        /** Restrict or allow the column to be sorted */
        sortable?: boolean | undefined;

        /** Restrict or allow the column to be resized */
        resizable?: boolean | undefined;

        /** Allows the column to be grouped with drag and drop, but has no effect on gridOptions.groups */
        groupable?: boolean | undefined;

        /** Allows the column to be pinned when enablePinning is set to true */
        pinnable?: boolean | undefined;

        /** The template to use while editing */
        editableCellTemplate?: string | undefined;

        /** Allows the cell to use an edit template when focused (grid option enableCellSelection must be enabled)*/
        enableCellEdit?: boolean | undefined;

        /** Controls when to use the edit template on per-row basis using an angular expression (enableCellEdit must also be true for editing)*/
        cellEditableCondition?: string | undefined;

        /** The funtion to use when filtering values in this column */
        sortFn?: ((a: any, b: any) => number) | undefined;

        /** Html template used to render the cell */
        cellTemplate?: string | undefined;

        /** User defined CSS class name */
        cellClass?: string | undefined;

        /** User defined CSS class name for the header cell */
        headerClass?: string | undefined;

        /** Html template used to render the header cell */
        headerCellTemplate?: string | undefined;

        /** string name for filter to use on the cell ('currency', 'date', etc..) */
        cellFilter?: string | undefined;

        /** String name for filter to use on the aggregate label ('currency', 'date', etc..) defaults to cellFilter if not set. */
        aggLabelFilter?: string | undefined;

        pinned?: boolean | undefined;
    }

    export interface IFilterOptions {
        filterText?: string | undefined;
        useExternalFilter?: boolean | undefined;
    }

    export interface IPagingOptions {
        /**  pageSizes: list of available page sizes.  */
        pageSizes?: number[] | undefined;
        /** pageSize: currently selected page size.  */
        pageSize?: number | undefined;
        /** totalServerItems: Total items are on the server.  */
        totalServerItems?: number | undefined;
        /** currentPage: the uhm... current page. */
        currentPage?: number | undefined;
    }

    export interface IPlugin {
        init(childScope: IGridScope, gridInstance: IGridInstance, services: any): void;
    }

    export namespace service {
        export interface IDomUtilityService {
            eventStorage: any;
            numberOfGrids: number;
            immediate: number;
            AssignGridContainers($scope: IGridScope, rootel: angular.IAugmentedJQuery, grid: IGridInstance): void;
            getRealWidth(obj: IDimension): number;
            UpdateGridLayout($scope: IGridScope, grid: IGridInstance): void;
            setStyleText(grid: IGridInstance, css: string): void;
            BuildStyles($scope: IGridScope, grid: IGridInstance, digest: boolean): void;
            setColLeft(col: IColumn, colLeft: number, grid: IGridInstance): void;
            RebuildGrid($scope: IGridScope, grid: IGridInstance): void;
            digest($scope: IGridScope): void;
            ScrollH: number;
            ScrollW: number;
            LetterW: number;
        }

        export interface ISortInfo {
            fields: string[];
        }

        export interface ISortService {
            colSortFnCache: any;
            isCustomSort: boolean;
            isSorting: boolean;
            guessSortFn(item: any): (a: any, b: any) => number;
            basicSort(a: any, b: any): number;
            sortNumber(a: number, b: number): number;
            sortNumberStr(a: string, b: string): number;
            sortAlpha(a: string, b: string): number;
            sortDate(a: Date, b: Date): number;
            sortBool(a: boolean, b: boolean): number;
            sortData(sortInfo: ISortInfo, data: any): void;
            Sort(sortInfo: ISortInfo, data: any): void;
            getSortFn(col: IColumn, data: any): (a: any, b: any) => number;
        }

        export interface IUtilityService {
            visualLength(node: any): number;
            forIn(obj: any, action: (value: any, property: string) => {}): void;
            evalProperty(entity: any, path: string): any;
            endsWith(str: string, suffix: string): boolean;
            isNullOrUndefined(obj: any): boolean;
            getElementsByClassName(cl: string): any[];
            newId(): string;
            seti18n($scope: IGridScope, language: string): void;
            getInstanceType(o: any): string;
        }
    }
}
