// These are very definitely preliminary. Please feel free to improve.

/// <reference types="knockout" />
/// <reference types="jquery" />

declare namespace kg {
    interface DomUtilityService {
        UpdateGridLayout(grid: Grid<any>): void;
        BuildStyles(grid: Grid<any>): void;
    }

    interface Row<EntityType> {
        selected: KnockoutObservable<boolean>;
        entity: EntityType;
    }

    interface RowFactory<EntityType> {
        rowCache: Row<EntityType>[];
    }

    interface SelectionService<EntityType> {
        setSelection(row: Row<EntityType>, selected: boolean): void;
        multi: boolean;
        lastClickedRow: Row<EntityType>;
    }

    interface Grid<EntityType> {
        configureColumnWidths(): void;
        rowFactory: RowFactory<EntityType>;
        config: GridOptions<EntityType>;
        $$selectionPhase: boolean;
        selectionService: SelectionService<EntityType>;
    }

    interface Plugin<EntityType> {
        onGridInit(grid: Grid<EntityType>): void;
    }

    interface GridOptions<EntityType> {
        /** Callback for when you want to validate something after selection. */
        afterSelectionChange?(row: Row<EntityType>): void;

        /** Callback if you want to inspect something before selection,
      return false if you want to cancel the selection. return true otherwise.
      If you need to wait for an async call to proceed with selection you can
      use rowItem.changeSelection(event) method after returning false initially.
      Note: when shift+ Selecting multiple items in the grid this will only get called
      once and the rowItem will be an array of items that are queued to be selected. */
        beforeSelectionChange?(row: Row<EntityType>): boolean;

        /** To be able to have selectable rows in grid. */
        canSelectRows?: boolean | undefined;

        /** definitions of columns as an array [], if not defined columns are auto-generated. See github wiki for more details. */
        columnDefs?: ColumnDef[] | KnockoutObservable<ColumnDef[]> | undefined;

        /** Column width of columns in grid. */
        columnWidth?: number | undefined;

        /** Data being displayed in the grid. Each item in the array is mapped to a row being displayed. */
        data?: KnockoutObservableArray<EntityType> | undefined;

        /** Row selection check boxes appear as the first column. */
        displaySelectionCheckbox: boolean;

        /** Enable or disable resizing of columns */
        enableColumnResize?: boolean | undefined;

        /** Enables the server-side paging feature */
        enablePaging?: boolean | undefined;

        /** Enable drag and drop row reordering. Only works in HTML5 compliant browsers. */
        enableRowReordering?: boolean | undefined;

        /** Enables or disables sorting in grid. */
        enableSorting?: boolean | undefined;

        /** filterOptions -
      filterText: The text bound to the built-in search box.
      useExternalFilter: Bypass internal filtering if you want to roll your own filtering mechanism but want to use builtin search box.
      */
        filterOptions?: FilterOptions | undefined;

        /** Defining the height of the footer in pixels. */
        footerRowHeight?: number | undefined;

        /** Show or hide the footer alltogether the footer is enabled by default */
        footerVisible?: boolean | undefined;

        /** Initial fields to group data by. Array of field names, not displayName. */
        groups?: string[] | undefined;

        /** The height of the header row in pixels. */
        headerRowHeight?: number | undefined;

        /** Define a header row template for further customization. See github wiki for more details. */
        headerRowTemplate?: string | JQueryGenericPromise<string> | undefined;

        /** Enables the use of jquery UI reaggable/droppable plugin. requires jqueryUI to work if enabled.
      Useful if you want drag + drop but your users insist on crappy browsers. */
        jqueryUIDraggable?: boolean | undefined;

        /** Enable the use jqueryUIThemes */
        jqueryUITheme?: boolean | undefined;

        /** Prevent unselections when in single selection mode. */
        keepLastSelected?: boolean | undefined;

        /** Maintains the column widths while resizing.
      Defaults to true when using *'s or undefined widths. Can be ovverriden by setting to false. */
        maintainColumnRatios?: any;

        /** Set this to false if you only want one item selected at a time */
        multiSelect?: boolean | undefined;

        /**  pagingOptions - */
        pagingOptions?: PagingOptions | undefined;

        /** Array of plugin functions to register in ng-grid */
        plugins?: Plugin<EntityType>[] | undefined;

        /** Row height of rows in grid. */
        rowHeight?: number | undefined;

        /** Define a row template to customize output. See github wiki for more details. */
        rowTemplate?: string | JQueryGenericPromise<string> | undefined;

        /** Defines the binding to select all at once */
        selectAllState?: KnockoutObservable<boolean> | undefined;

        /** all of the items selected in the grid. In single select mode there will only be one item in the array. */
        selectedItems?: KnockoutObservableArray<any> | undefined;

        /** Disable row selections by clicking on the row and only when the checkbox is clicked. */
        selectWithCheckboxOnly?: boolean | undefined;

        /** Enables menu to choose which columns to display and group by.
      If both showColumnMenu and showFilter are false the menu button will not display.*/
        showColumnMenu?: boolean | undefined;

        /** Enables display of the filterbox in the column menu.
      If both showColumnMenu and showFilter are false the menu button will not display.*/
        showFilter?: boolean | undefined;

        /** Show the dropzone for drag and drop grouping */
        showGroupPanel?: boolean | undefined;

        /** Define a sortInfo object to specify a default sorting state.
      You can also observe this variable to utilize server-side sorting (see useExternalSorting).
      Syntax is sortinfo: { fields: ['fieldName1',' fieldName2'], direction: 'ASC'/'asc' || 'desc'/'DESC'}*/
        sortInfo?: SortInfo | KnockoutObservable<SortInfo> | undefined;

        /** Set the tab index of the Vieport. */
        tabIndex?: number | undefined;

        /** Prevents the internal sorting from executing.
      The sortInfo object will be updated with the sorting information so you can handle sorting (see sortInfo)*/
        useExternalSorting?: boolean | undefined;
    }

    type Direction = "asc" | "desc";

    interface SortInfo {
        /** Which column to sort */
        column: SortColumn;

        /** Which direction to sort */
        direction: Direction;
    }

    interface SortColumn {
        /** The string name of the property in your data model you want that column to represent. Can also be a property path on your data model. 'foo.bar.myField', 'Name.First', etc.. */
        field: string;

        /** Sets the sort function for the column. Useful when you have data that is formatted in an unusal way or if you want to sort on an underlying data type. Example: function(a,b){return a > b} */
        sortingAlgorithm?: ((a: any, b: any) => number) | undefined;
    }

    interface ColumnDef {
        /** Appends a css class for the column cells */
        cellClass?: string | undefined;

        /**
         * A function which takes the value of the cell and returns the display value. Useful when your data model has an underlying value which you need to convert to a human readable format.
         * @param val
         * @returns the display value
         * @example function(unixTimeTicks) { return new Date(unixTimeTicks); }
         */
        cellFormatter?(val: any): string;

        /**Sets the cell template for the column. See github wiki for more details.*/
        cellTemplate?: string | JQueryGenericPromise<string> | undefined;

        /** Sets the pretty display name of the column. default is the field given */
        displayName?: string | undefined;

        /** The string name of the property in your data model you want that column to represent. Can also be a property path on your data model. 'foo.bar.myField', 'Name.First', etc.. */
        field: string;

        /** Sets the template for the column header cell. See github wiki for more details. */
        headerCellTemplate?: string | JQueryGenericPromise<string> | undefined;

        /** Appends a css class for the column header. */
        headerClass?: string | undefined;

        /**Sets the maximum width of the column.*/
        maxWidth?: number | undefined;

        /**Whether or not column is resizable. */
        resizable?: boolean | undefined;

        /**Whether or not column is sortable. */
        sortable?: boolean | undefined;

        /** Sets the sort function for the column. Useful when you have data that is formatted in an unusal way or if you want to sort on an underlying data type. Example: function(a,b){return a > b} */
        sortFn?: ((a: any, b: any) => number) | undefined;

        /** Sets the width of the column. Can be a fixed width in pixels as an int (42), string px('42px'), percentage string ('42%'), weighted asterisks (width divided by total number of *'s is all column definition widths) See github wiki for more details. */
        width?: string | undefined;
    }

    interface FilterOptions {
        /** Variable to contain the current search filter */
        filterText?: KnockoutObservable<string> | undefined;

        /** Is the filtering internal or does it require a server visit. You should subscribe to filterText to refresh */
        useExternalFilter?: boolean | undefined;

        /** Number of seconds to throttle before reapplying search */
        filterThrottle?: number | undefined;
    }

    interface PagingOptions {
        /**  pageSizes: list of available page sizes.  */
        pageSizes?: KnockoutObservableArray<number> | undefined;

        /** pageSize: currently selected page size.  */
        pageSize?: KnockoutObservable<number> | undefined;

        /** totalServerItems: Total items are on the server.  */
        totalServerItems?: KnockoutObservable<number> | undefined;

        /** currentPage: the uhm... current page. */
        currentPage?: KnockoutObservable<number> | undefined;
    }
}

interface IKg {
    domUtilityService: kg.DomUtilityService;

    /** Default grid template */
    defaultGridTemplate(): string;

    /** Default row template. Can be overriden in GridOptions.rowTemplate */
    defaultRowTemplate(): string;

    /** Default cell template. Can be overriden in GridOptions.cellTemplate */
    defaultCellTemplate(): string;

    /** Default aggregate template */
    aggregateTemplate(): string;

    /** Default headerrow template. Can be overriden in GridOptions.headerRowTemplate */
    defaultHeaderRowTemplate(): string;

    /** Default headercell template. Can be overriden in GridOptions.headerCellTemplate */
    defaultHeaderCellTemplate(): string;
}

declare var kg: IKg;

declare module "kg" {
    export = kg;
}
