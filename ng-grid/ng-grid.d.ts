// Type definitions for ng-grid 
// Project: http://angular-ui.github.io/ng-grid/
// Definitions by: Ken Smith <https://github.com/smithkl42>
// DefinitelyTyped: https://github.com/borisyankov/DefinitelyTyped

// These are very definitely preliminary. Please feel free to improve.

declare class ngGridReorderable {
    constructor();
}

declare module ngGrid {

    export interface GridOptions {

        /** Define an aggregate template to customize the rows when grouped. See github wiki for more details. */
        aggregateTemplate?: any;

        /** Callback for when you want to validate something after selection. */
        afterSelectionChange?: Function;

        /** Callback if you want to inspect something before selection,
        return false if you want to cancel the selection. return true otherwise. 
        If you need to wait for an async call to proceed with selection you can 
        use rowItem.changeSelection(event) method after returning false initially. 
        Note: when shift+ Selecting multiple items in the grid this will only get called
        once and the rowItem will be an array of items that are queued to be selected. */
        beforeSelectionChange?: Function;

        /** checkbox templates. */
        checkboxCellTemplate?: any;

        /** checkbox templates. */
        checkboxHeaderTemplate?: any;

        /** definitions of columns as an array [], if not defined columns are auto-generated. See github wiki for more details. */
        columnDefs?: ColumnDef[];

        /** Data being displayed in the grid. Each item in the array is mapped to a row being displayed. */
        data?: any[];

        /** Data updated callback, fires every time the data is modified from outside the grid. */
        dataUpdated?: Function;

        /** Enables cell editing. */
        enableCellEdit?: boolean;

        /** Enables cell selection. */
        enableCellSelection?: boolean;

        /** Enable or disable resizing of columns */
        enableColumnResize?: boolean;

        /** Enable or disable reordering of columns */
        enableColumnReordering?: boolean;

        /** Enable or disable HEAVY column virtualization. This turns off selection checkboxes and column pinning and is designed for spreadsheet-like data. */
        enableColumnHeavyVirt?: boolean;

        /** Enables the server-side paging feature */
        enablePaging?: boolean;

        /** Enable column pinning */
        enablePinning?: boolean;

        /** Enable drag and drop row reordering. Only works in HTML5 compliant browsers. */
        enableRowReordering?: boolean;

        /** To be able to have selectable rows in grid. */
        enableRowSelection?: boolean;

        /** Enables or disables sorting in grid. */
        enableSorting?: boolean;

        /**  string list of properties to exclude when auto-generating columns. */
        excludeProperties?: any;

        /** filterOptions -
        filterText: The text bound to the built-in search box. 
        useExternalFilter: Bypass internal filtering if you want to roll your own filtering mechanism but want to use builtin search box.
        */
        filterOptions?: FilterOptions;

        /** Defining the height of the footer in pixels. */
        footerRowHeight?: number;

        /** Initial fields to group data by. Array of field names, not displayName. */
        groups?: string[];

        /** The height of the header row in pixels. */
        headerRowHeight?: number;

        /** Define a header row template for further customization. See github wiki for more details. */
        headerRowTemplate?: any;

        /** Enables the use of jquery UI reaggable/droppable plugin. requires jqueryUI to work if enabled. 
        Useful if you want drag + drop but your users insist on crappy browsers. */
        jqueryUIDraggable?: boolean;

        /** Enable the use jqueryUIThemes */
        jqueryUITheme?: boolean;

        /** Prevent unselections when in single selection mode. */
        keepLastSelected?: boolean;

        /** Maintains the column widths while resizing. 
        Defaults to true when using *'s or undefined widths. Can be ovverriden by setting to false. */
        maintainColumnRatios?: any;

        /** Set this to false if you only want one item selected at a time */
        multiSelect?: boolean;

        /**  pagingOptions - */
        pagingOptions?: PagingOptions;

        /** Array of plugin functions to register in ng-grid */
        pinSelectionCheckbox?: boolean;

        /** Array of plugin functions to register in ng-grid */
        plugins?: any[];

        /** Row height of rows in grid. */
        rowHeight?: number;

        /** Define a row template to customize output. See github wiki for more details. */
        rowTemplate?: any;

        /** all of the items selected in the grid. In single select mode there will only be one item in the array. */
        selectedItems?: any[];

        /** Disable row selections by clicking on the row and only when the checkbox is clicked. */
        selectWithCheckboxOnly?: boolean;

        /** Enables menu to choose which columns to display and group by. 
        If both showColumnMenu and showFilter are false the menu button will not display.*/
        showColumnMenu?: boolean;

        /** Enables display of the filterbox in the column menu. 
        If both showColumnMenu and showFilter are false the menu button will not display.*/
        showFilter?: boolean;

        /** Show or hide the footer alltogether the footer is enabled by default */
        showFooter?: boolean;

        /** Show the dropzone for drag and drop grouping */
        showGroupPanel?: boolean;

        /** Row selection check boxes appear as the first column. */
        showSelectionCheckbox?: boolean;

        /** Define a sortInfo object to specify a default sorting state. 
        You can also observe this variable to utilize server-side sorting (see useExternalSorting).
        Syntax is sortinfo: { fields: ['fieldName1',' fieldName2'], direction: 'ASC'/'asc' || 'desc'/'DESC'}*/
        sortInfo?: any;

        /** Set the tab index of the Vieport. */
        tabIndex?: number;

        /** Prevents the internal sorting from executing. 
        The sortInfo object will be updated with the sorting information so you can handle sorting (see sortInfo)*/
        useExternalSorting?: boolean;

        /** i18n language support. choose from the installed or included languages, en, fr, sp, etc...*/
        i18n?: string;

        /** the threshold in rows to force virtualization on  */
        virtualizationThreshold?: number;

        /** Enables or disables text highlighting in grid by adding the "unselectable" class (See CSS file) */
        enableHighlighting?: boolean;
    }

    export interface ColumnDef {
    }

    export interface FilterOptions {
        filterText?: string;
        useExternalFilter?: boolean;
    }

    export interface PagingOptions {
        /**  pageSizes: list of available page sizes.  */
        pageSizes?: number[];
        /** pageSize: currently selected page size.  */
        pageSize?: number;
        /** totalServerItems: Total items are on the server.  */
        totalServerItems?: number;
        /** currentPage: the uhm... current page. */
        currentPage?: number;
    }
}
