// Type definitions for ng-grid 
// Project: http://angular-ui.github.io/ng-grid/
// Definitions by: Ken Smith <https://github.com/smithkl42> and Kent Cooper <https://github.com/kentcooper>
// DefinitelyTyped: https://github.com/borisyankov/DefinitelyTyped

// These are very definitely preliminary. Please feel free to improve.

declare class ngGridReorderable {
    constructor();
}

declare module ngGrid {

    export interface IGridOptions {

        /** Define an aggregate template to customize the rows when grouped. See github wiki for more details. */
        aggregateTemplate?: string;

        /** Callback for when you want to validate something after selection. */
        afterSelectionChange?: (rowItem?: any, event?: any) => void;

        /** Callback if you want to inspect something before selection,
        return false if you want to cancel the selection. return true otherwise. 
        If you need to wait for an async call to proceed with selection you can 
        use rowItem.changeSelection(event) method after returning false initially. 
        Note: when shift+ Selecting multiple items in the grid this will only get called
        once and the rowItem will be an array of items that are queued to be selected. */
        beforeSelectionChange?: (rowItem?: any, event?: any) => boolean;

        /** checkbox templates. */
        checkboxCellTemplate?: string;

        /** checkbox templates. */
        checkboxHeaderTemplate?: string;

        /** definitions of columns as an array [], if not defined columns are auto-generated. See github wiki for more details. */
        columnDefs?: IColumnDef[];

        /** Data being displayed in the grid. This can be either a string of object ID or object reference.
            Using string is preferred, as this turns on change tracking in ng-grid
        */
        data?: any;

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
        filterOptions?: IFilterOptions;

        /** Defining the height of the footer in pixels. */
        footerRowHeight?: number;

        /** Initial fields to group data by. Array of field names, not displayName. */
        groups?: string[];

        /** The height of the header row in pixels. */
        headerRowHeight?: number;

        /** Define a header row template for further customization. See github wiki for more details. */
        headerRowTemplate?: string;

        /** Enables the use of jquery UI reaggable/droppable plugin. requires jqueryUI to work if enabled. 
        Useful if you want drag + drop but your users insist on crappy browsers. */
        jqueryUIDraggable?: boolean;

        /** Enable the use jqueryUIThemes */
        jqueryUITheme?: boolean;

        /** Prevent unselections when in single selection mode. */
        keepLastSelected?: boolean;

        /** Maintains the column widths while resizing. 
        Defaults to true when using *'s or undefined widths. Can be ovverriden by setting to false. */
        maintainColumnRatios?: boolean;

        /** Set this to false if you only want one item selected at a time */
        multiSelect?: boolean;

        /**  pagingOptions - */
        pagingOptions?: IPagingOptions;

        /** Array of plugin functions to register in ng-grid */
        pinSelectionCheckbox?: boolean;

        /** Array of plugin functions to register in ng-grid */
        plugins?: any[];

        /** Row height of rows in grid. */
        rowHeight?: number;

        /** Define a row template to customize output. See github wiki for more details. */
        rowTemplate?: string;

        /** all of the items selected in the grid. In single select mode there will only be one item in the array. */
        selectedItems?: any[];

        /** Select deselect an item by index. */
        selectItem?: (idx: number, state: boolean) => any;

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
        visible?: boolean;

        /** Can also be a property path on your data model. "foo.bar.myField", "Name.First", etc..*/
        field?: string;

        /** What to display in the column header */
        displayName?: string;

        /** Restrict or allow the column to be sorted */
        sortable?: boolean;

        /** Restrict or allow the column to be resized */
        resizable?: boolean;

        /** Allows the column to be grouped with drag and drop, but has no effect on gridOptions.groups */
        groupable?: boolean;

        /** Allows the column to be pinned when enablePinning is set to true */
        pinnable?: boolean;

        /** The template to use while editing */
        editableCellTemplate?: string;
    
        /** Allows the cell to use an edit template when focused (grid option enableCellSelection must be enabled)*/
        enableCellEdit?: boolean;
        
        /** Controls when to use the edit template on per-row basis using an angular expression (enableCellEdit must also be true for editing)*/
        cellEditableCondition?: string;

        /** The funtion to use when filtering values in this column */
        sortFn?: (a: any, b: any) => number;

        /** Html template used to render the cell */
        cellTemplate?: string;

        /** User defined CSS class name */
        cellClass?: string;

        /** User defined CSS class name for the header cell */
        headerClass?: string;

        /** Html template used to render the header cell */
        headerCellTemplate?: string;

        /** string name for filter to use on the cell ('currency', 'date', etc..) */
        cellFilter?: string;
        
        /** String name for filter to use on the aggregate label ('currency', 'date', etc..) defaults to cellFilter if not set. */
        aggLabelFilter?: string;

        pinned?: boolean;
    }

    export interface IFilterOptions {
        filterText?: string;
        useExternalFilter?: boolean;
    }

    export interface IPagingOptions {
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
