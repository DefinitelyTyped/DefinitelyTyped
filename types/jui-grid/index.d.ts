// Type definitions for jui-grid 2.0
// Project: https://github.com/juijs/jui-grid
// Definitions by: Jin-Ho Park <https://github.com/easylogic>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { UIEvent } from 'jui-core';

export interface GridColumn {
    (index: number | string): this;

    /** @property {HTMLElement} [element=null] TH element of a specified column */
    element: any;

    /** @property {String} [order="asc"] Column sort state */
    order: "asc" | "desc";

    /** @property {String} [name=null] Column name */
    name?: string;

    /** @property {Array} data Data from all rows belonging for a specified column */
    data: any[];

    /** @property {Array} list TD element of all rows belonging to a specified column */
    list: any[];

    /** @property {Integer} index Column index */
    index: number;

    /** @property {"show"/"hide"/"resize"} [type="show"] The current column state */
    type: "show" | "hide" | "resize";

    /** @property {Integer} [width=null] Column width */
    width?: number;

    hide(): void;
    show(): void;
}

export interface GridRow {
    /** @property {Array} data Data of a specifiedrow. */
    data: any[];

    /** @property {Integer} seq Data of a sequence. */
    seq: number;

    /** @property {Integer} [rownum=null] The unique number of a child row under the specified parent row if a parent row exists. */
    rownum?: number;

    /** @property {String/Integer} [index=null] Index of a specified row. In the case of a tree structure, a depth is given. */
    index: number | string;

    /** @property {HTMLElement} [element=null] TR element of a specified row. */
    element: any;

    /** @property {Array} list List of TD elements of a specified row. */
    list: any[];

    /** @property {Object} list List of hidden TD element. */
    hidden: {};

    /** @property {uix.table.row} parent Variable that refers to the parent row. */
    parent?: GridRow;

    /** @property {Array} children List of child rows. */
    children: any[];

    /** @property {Integer} [depth=0] The depth of the current row in the case of a tree structure. */
    depth: number;

    /** @property {"open"/"fold"} [type="fold"] State value that indicates whether a child row is shown or hidden. */
    type: "open" | "fold";

    /** @property {Function} [type="null"] State value that indicates whether a child row is shown or hidden. */
    tpl?(): void;

    setIndex(rownum: number | string): void;
    reload(columns: GridColumn[], seq: any, xssFilter: any): void;
    destroy(): void;
    isLeaf(): boolean;
    fold(): void;
    open(): void;
    appendChild(row: GridRow): void;
    insertChild(rownum: number, row: GridRow, isReload?: any): void;
    removeChild(index: number | string): void;
    lastChild(): GridRow;
    lastChildLeaf(lastRow: GridRow): GridRow | any;
    showCell(index: number): void;
    hideCell(index: number): void;
}

export interface GridBase {
    appendRow(index: number | string, data?: {}): GridRow;
    insertRow(index: number | string, data: {}): GridRow;
    updateRow(index: number | string, data: {}): GridRow;
    moveRow(index: number | string, targetIndex: number | string): void;
    removeRow(index: number | string): void;
    openRow(index: number | string): void;
    openRowAll(): void;
    foldRow(index: number | string): void;
    foldRowAll(): void;
    removeRows(): void;
    sortRows(name: string, isDesc: boolean): void;
    appendColumn(tplType: string, dataList: any[]): void;
    removeColumn(index: number | string): void;
    hideColumn(index: number | string): void;
    showColumn(index: number | string): void;
    getColumnCount(): number;
    getRowCount(): number;
    getColumn(index?: number | string): GridColumn | GridColumn[];
    getRow(index?: number | string): GridRow | GridRow[];
    getRowAll(index: number | string): GridRow[];
    getRowParent(index: number | string): GridRow;
    setColumn(index: number | string, column: GridColumn): void;
    setRow(index: number | string, row: GridRow): void;
}

export interface GridTable extends UIEvent {
    (selector: any, options?: {
        tpl?: any,

        event?: any,
        /**
         * @cfg {Array} [fields=null]
         * Sets the name of columns in the order of being displayed on the table screen.
         */
        fields?: any[],

        /**
         * @cfg {Array} [csv=null]
         * Sets the column key shown when converted to a CSV string.
         */
        csv?: any[],

        /**
         * @cfg {Array} [csvNames=null]
         * Sets the name of a column shown when converting to a CSV string, which must be defined in the same order as the CSV option.
         */
        csvNames?: any[],

        /**
         * @cfg {Array} [csvNumber=null]
         * Sets the column key to be changed to a number form when converted to a CSV string.
         */
        csvNumber?: any[],

        /**
         * @cfg {Array} data
         * Sets the initial row list of a table.
         */
        data?: any[],

        /**
         * @cfg {Boolean/Array} [colshow=false]
         * Sets a column index shown when the Show/Hide Column menu is enabled.
         */
        colshow?: boolean | any[],

        /**
         * @cfg {Boolean} [scroll=false]
         * Determines whether to use a table scroll.
         */
        scroll?: boolean,

        /**
         * @cfg {Integer} [scrollHeight=200]
         * Sets the reference height of a body area when using a table scroll.
         */
        scrollHeight?: number,

        /**
         * @cfg {Integer} [width=0]
         * Sets the area of a table.
         */
        width?: number,

        /**
         * @cfg {Boolean} [expand=false]
         * Determines whether to use an extended row area.
         */
        expand?: boolean,

        /**
         * @cfg {Boolean} [expandEvent=true]
         * Sets the Show/Hide state of an extended row area when clicking on a row.
         */
        expandEvent?: boolean,

        /**
         * @cfg {Boolean|Array} [editRow=false]
         * Determines whether to use a modified row area.
         */
        editRow?: boolean | any[],

        /**
         * @cfg {Boolean} [editEvent=true]
         * Sets the Show/Hide state of an extended row area when doubleclicking on a row/cell.
         */
        editEvent?: boolean,

        /**
         * @cfg {Boolean} [resize=false]
         * Determines whether to use the column resizing function.
         */
        resize?: boolean,

        /**
         * @cfg {Boolean/Array} [sort=false]
         * Determines whether to use the table sort function.
         */
        sort?: boolean | any[],

        /**
         * @cfg {Integer} [sortIndex=null]
         * Determines whether to use the table sort function.
         */
        sortIndex?: number,

        /**
         * @cfg {String} [sortOrder="asc"]
         * Determines whether to use the table sort function.
         */
        sortOrder?: "asc" | "desc",

        /**
         * @cfg {Boolean} [sortEvent=true]
         * Determines whether to use the sort function when you click on a column.
         */
        sortEvent?: boolean,

        /**
         * @cfg {Boolean} [moveRow=false]
         * Determines whether to use the move function when you fire row draggable event.
         */
        moveRow?: boolean,
    }): this;

    root?: any;

    /**
     * @method update
     * Updates the list of rows or modifies the row at a specified index.
     *
     * @param {Array} rows
     */
    update(indexOrRows?: any, rows?: any): void;
    /**
     * @method updateTree
     * It is possible to configure a tree table using an object array with the index and data properties.
     *
     * @param {Array} rows
     */
    updateTree(rows: any[]): void;

    /**
     * @method append
     * Add a row or a child row to at a specified index.
     *
     * @param {RowObject} row
     */
    append(rowOrIndex?: number | any, row?: any): void;

    /**
     * @method insert
     * Adds a row at a specified index.
     *
     * @param {Integer} index
     * @param {RowObject} row
     */
    insert(index: number, dataList: {}): void;

    /**
     * @method select
     * Adds a selected class to a row at a specified index and gets an instance of the applicable row.
     *
     * @param {Integer} index
     * @return {RowObject} row
     */
    select(index: number): GridRow;

    /**
     * @method unselect
     * Removes a selected class from a selected row and gets an instance of the row in question.
     *
     * @return {RowObject} row
     */
    unselect(): GridRow;

    /**
     * @method check
     * Add a checked class to a row at a specified index.
     *
     * @param {Integer} index
     */
    check(index: number): void;

    /**
     * @method uncheck
     * Removes a checked class from a row at a specified index.
     *
     * @param {Integer} index
     */
    uncheck(index: number): void;

    /**
     * @method uncheckAll
     * Removes checked classes from all rows.
     */
    uncheckAll(): void;

    /**
     * @method remove
     * Remove a row at a specified index.
     *
     * @param {Integer} index
     */
    remove(index: number): void;

    /**
     * @method reset
     * Removes all rows.
     */
    reset(): void;

    /**
     * @method move
     * Moves a row iat a specified index to the target index.
     *
     * @param {Integer} index
     * @param {Integer} targetIndex
     */
    move(index: number, targetIndex: number): void;

    /**
     * @method sort
     * Moves a row iat a specified index to the target index.
     *
     * @param {Integer} index
     * @param {String} order  "asc" or "desc"
     */
    sort(index: number, order: string, e?: any): void;

    /**
     * @method scroll
     * Sets the scroll based on the height of a table.
     *
     * @param {Integer} height
     */
    scroll(height: number): void;

    /**
     * @method open
     * Shows a child row of a specified index.
     *
     * @param {Integer} index
     */
    open(index: number): void;

    /**
     * @method fold
     * Hides a child row of a specified index.
     *
     * @param {Integer} index
     */
    fold(index: number): void;

    /**
     * @method openAll
     * Shows all child rows of a specified index.
     */
    openAll(): void;

    /**
     * @method foldAll
     * Hides all child rows of a specified index.
     */
    foldAll(): void;

    /**
     * @method resize
     * Resets the inner scroll and columns of a table.
     */
    resize(): void;

    /**
     * @method resizeColumns
     * Resets the sizes of all columns of a table.
     */
    resizeColumns(): void;

    /**
     * @method size
     * Gets the size of all the rows of a table.
     *
     * @return {Integer} size
     */
    size(): number;

    /**
     * @method count
     * Gets the number of trows of a table.
     *
     * @return {Integer} count
     */
    count(): number;

    /**
     * @method list
     * Gets all the rows of a table.
     *
     * @return {Array} rows
     */
    list(): GridRow[];

    /**
     * @method listData
     * Gets the data of all the rows of a table.
     *
     * @return {Array} datas
     */
    listData(): any[];

    /**
     * @method listAll
     * Gets all the rows of a table including child rows.
     *
     * @return {Array} rows
     */
    listAll(): GridRow[];

    /**
     * @method listChecked
     * Gets all rows in a check state.
     *
     * @return {Array} rows
     */
    listChecked(): GridRow[];

    /**
     * @method listColumn
     * Gets all columns.
     *
     * @return {Array} columns
     */
    listColumn(): GridColumn;

    /**
     * @method get
     * Gets the row at the specified index.
     *
     * @param {Integer} index
     * @return {RowObject} row
     */
    get(index: number): GridRow;

    /**
     * @method getAll
     * Gets all rows of at the specified index including child rows.
     *
     * @param {Integer} index
     * @return {Array} rows
     */
    getAll(index: number): GridRow[];

    /**
     * @method getColumn
     * Gets the column at the specified index.
     *
     * @param {"Integer"/"String"} key index or column key
     * @return {ColumnObject} column
     */
    getColumn(index: number | string): GridColumn;

    /**
     * @method showColumn
     * Shows the column index (or column name).
     *
     * @param {"Integer"/"String"} key index or column name
     */
    showColumn(index: number | string, e?: any): void;

    /**
     * @method hideColumn
     * Hides the column index (or column name).
     *
     * @param {"Integer"/"String"} key index or column name
     */
    hideColumn(index: number | string, e?: any): void;

    /**
     * @method initColumns
     * It is possible to determine the index or name of the column to be shown in an array.
     *
     * @param {"Integer"/"String"} key index or column name
     */
    initColumns(keys: any): void;

    /**
     * @method showColumnMenu
     * Shows the Show/Hide Column menu at specified coordinates.
     *
     * @param {Integer} x
     * @param {Integer} y
     */
    showColumnMenu(x: number, y: number): void;

    /**
     * @method hideColumnMenu
     * Hides the Show/Hide Column menu.
     */
    hideColumnMenu(): void;

    /**
     * @method toggleColumnMenu
     * Shows or hides the Show/Hide Column menu.
     *
     * @param {Integer} x
     * @param {Integer} y
     */
    toggleColumnMenu(x: number, y: number): void;

    /**
     * @method showExpand
     * Shows the extended row area of a specified index.
     *
     * @param {Integer} index
     */
    showExpand(index: number, obj?: any, e?: any): void;

    /**
     * @method hideExpand
     * Hides the extended row area of a specified index.
     */
    hideExpand(e?: any): void;

    /**
     * @method getExpand
     * Get a row in which the extended area is currently activated.
     *
     * @return {RowObject} row
     */
    getExpand(): GridRow;

    /**
     * @method showEditRow
     * Shows the modified row area of a specified index.
     *
     * @param {Integer} index
     */
    showEditRow(index: number, e?: any): void;

    /**
     * @method hideEditRow
     * Hides the modified row area of a specified index.
     */
    hideEditRow(data?: any): void;

    /**
     * @method getEditRow
     * Get a row in which the modified area is currently activated.
     *
     * @return {RowObject} row
     */
    getEditRow(): GridRow;

    /**
     * @method setCsv
     * Updates a table using a CVS string.
     */
    setCsv(csvOrKey: any, key?: any): void;

    /**
     * @method setCsvFile
     * Updates a table using a CVS file.
     */
    setCsvFile(fileOrKey: any, key?: any): void;

    /**
     * @method getCsv
     * Gets the data of a table as a CSV string.
     *
     * @param {Boolean} isTree
     * @return {String} csv
     */
    getCsv(isTree: boolean): string;

    /**
     * @method getCsvBase64
     * Gets the data of a table as a CSV string encoded as base64.
     *
     * @param {Boolean} isTree
     * @return {String} base64
     */
    getCsvBase64(isTree: boolean): string;

    /**
     * @method downloadCsv
     * Downloads the data of a table as a CSV file.
     *
     * @param {String} name
     * @param {Boolean} isTree
     */
    downloadCsv(name: string, isTree: boolean): void;

    /**
     * @method activeIndex
     * Gets the index of a row that is activated in an extended/modified/selected state.
     *
     * @return {Integer} index
     */
    activeIndex(): number;
}

export interface GridXTable extends UIEvent {
    (selector: any, options?: {}): this;

    render(isTree?: boolean): void;

    /**
     * @method select
     * Adds a selected class to a row at a specified index and gets an instance of the applicable row.
     *
     * @param {Integer} index
     * @return {RowObject} row
     */
    select(index: number): GridRow;

    /**
     * @method unselect
     * Removes a selected class from a selected row and gets an instance of the row in question.
     *
     * @return {RowObject} row
     */
    unselect(): GridRow;

    /**
     * @method update
     * Updates the list of rows or modifies the row at a specified index.
     *
     * @param {Array} rows
     */
    update(dataList: any[]): void;

    /**
     * @method updateTree
     * It is possible to configure a tree table using an object array with the index and data properties.
     *
     * @param {Array} rows
     */
    updateTree(tree: any[]): void;

    /**
     * @method append
     * Add a row or a child row to at a specified index.
     *
     * @param {RowObject} row
     * @param {RowObject} row
     */
    append(index: number, data: {}): void;
    /**
     * @method open
     * Shows a child row of a specified index.
     *
     * @param {Integer} index
     */
    open(index: number | string): void;

    /**
     * @method fold
     * Hides a child row of a specified index.
     *
     * @param {Integer} index
     */
    fold(index: number | string): void;

    /**
     * @method openAll
     * Shows all child rows of a specified index.
     */
    openAll(index: number | string): void;

    /**
     * @method foldAll
     * Hides all child rows of a specified index.
     */
    foldAll(index: number | string): void;

    /**
     * @method next
     * Changes to the next page.
     */
    next(): void;

    /**
     * @method page
     * Changes to the page of at a specified index.
     *
     * @param {Integer} index
     */
    page(pNo: number): void;

    /**
     * @method sort
     * Moves a row iat a specified index to the target index.
     *
     * @param {Integer} index
     * @param {String} order  "asc" or "desc"
     */
    sort(index: number, order: "asc" | "desc", e?: any, isNotLoading?: any): void;

    /**
     * @method filter
     * Filters columns at a specified to locate rows that contain keywords in the cell value.
     *
     * @param {Function} callback
     */
    filter(callback: (data: any) => void): void;

    /**
     * @method rollback
     * Returns filtered rows to the original state.
     */
    rollback(): void;

    /**
     * @method clear
     * Remove all row elements.
     */
    clear(): void;

    /**
     * @method clear
     * Remove all data
     */
    reset(): void;

    /**
     * @method resize
     * Resets the inner scroll and columns of a table.
     */
    resize(): void;

    /**
     * @method scrollWidth
     * Sets the scroll based on the width of a table.
     *
     * @param {Integer} width
     */
    scrollWidth(scrollWidth: number, isInit?: boolean): void;

    /**
     * @method scrollHeight
     * Sets the scroll based on the height of a table.
     *
     * @param {Integer} height
     */
    scrollHeight(h: number): void;

    /**
     * @method scrollTop
     * Sets the scroll based on the height of a table.
     *
     * @param {Integer|String} index
     * @param {Integer} dist
     */
    scrollTop(index: number | string, dist: number): void;

    /**
     * @deprecated
     * @method height
     * Sets the scroll based on the height of a table.
     *
     * @param {Integer} height
     */
    height(h: number): void;

    /**
     * @method size
     * Gets the size of all the rows of a table.
     *
     * @return {Integer} size
     */
    size(): number;

    /**
     * @method count
     * Gets the number of trows of a table.
     *
     * @return {Integer} count
     */
    count(): number;

    /**
     * @method list
     * Gets all the rows of a table.
     *
     * @return {Array} rows
     */
    list(): GridRow[];

    /**
     * @method listColumn
     * Gets all columns.
     *
     * @return {Array} columns
     */
    listColumn(): GridColumn[];

    /**
     * @method listData
     * Gets the data of all the rows of a table.
     *
     * @return {Array} datas
     */
    listData(): any[];

    /**
     * @method get
     * Gets the row at the specified index.
     *
     * @param {Integer|String} index
     * @return {RowObject} row
     */
    get(index: number): GridRow;

    getAll(index: number, _result?: any): GridRow[];

    /**
     * @method getColumn
     * Gets the column at the specified index.
     *
     * @param {"Integer"/"String"} key index or column key
     * @return {ColumnObject} column
     */
    getColumn(index: number | string): GridColumn;

    /**
     * @method getData
     * Gets the data at the specified index.
     *
     * @param {"Integer"/"String"} key index
     * @return {ColumnObject} data
     */
    getData(index: number | string): any;

    /**
     * @method showColumn
     * Shows the column index (or column name).
     *
     * @param {"Integer"/"String"} key index or column name
     */
    showColumn(index: number | string): void;

    /**
     * @method hideColumn
     * Hides the column index (or column name).
     *
     * @param {"Integer"/"String"} key index or column name
     */
    hideColumn(index: number | string): void;

    /**
     * @method initColumns
     * It is possible to determine the index or name of the column to be shown in an array.
     *
     * @param {"Integer"/"String"} key index or column name
     */
    initColumns(keys: number | string): void;

    /**
     * @method showColumnMenu
     * Shows the Show/Hide Column menu at specified coordinates.
     *
     * @param {Integer} x
     * @param {Integer} y
     */
    showColumnMenu(x: number, y: number): void;

    /**
     * @method hideColumnMenu
     * Hides the Show/Hide Column menu.
     */
    hideColumnMenu(): void;

    /**
     * @method toggleColumnMenu
     * Shows or hides the Show/Hide Column menu.
     *
     * @param {Integer} x
     * @param {Integer} y
     */
    toggleColumnMenu(x: number, y: number): void;

    /**
     * @method showExpand
     * Shows the extended row area of a specified index.
     *
     * @param {Integer} index
     */
    showExpand(index: number, obj: any): void;

    /**
     * @method hideExpand
     * Hides the extended row area of a specified index.
     */
    hideExpand(index: number): void;

    /**
     * @method getExpand
     * Get a row in which the extended area is currently activated.
     *
     * @return {RowObject} row
     */
    getExpand(): GridRow;

    /**
     * @method showLoading
     * Shows the loading screen for the specified delay time.
     *
     * @param {Integer} delay
     */
    showLoading(delay: number): void;

    /**
     * @method hideLoading
     * Hides the loading screen.
     */
    hideLoading(): void;

    /**
     * @method setCsv
     * Updates a table using a CVS string.
     */
    setCsv(csv: string): void;

    /**
     * @method setCsvFile
     * Updates a table using a CVS file.
     */
    setCsvFile(file: any): void;

    /**
     * @method getCsv
     * Gets the data of a table as a CSV string.
     *
     * @param {Boolean} isTree
     * @return {String} csv
     */
    getCsv(): string;

    /**
     * @method getCsvBase64
     * Gets the data of a table as a CSV string encoded as base64.
     *
     * @param {Boolean} isTree
     * @return {String} base64
     */
    getCsvBase64(): string;

    /**
     * @method downloadCsv
     * Downloads the data of a table as a CSV file.
     *
     * @param {String} name
     * @param {Boolean} isTree
     */
    downloadCsv(name: string): void;

    /**
     * @method rowFunc
     * Ir is possible to use a function for all row data applicable to the column (or column name) of a specified column (or column name). Currently only SUM and AVG are supported.
     *
     * @param {"sum"/"svg"} funcType
     * @param {Integer} columnIndex
     * @param {Function} callback
     */
    rowFunc(type: "sum" | "avg", index: number, callback: (data: any) => void): any;

    /**
     * @method getPage
     * Gets the current page of a table.
     *
     * @return {Integer} page
     */
    getPage(): number;

    /**
     * @method activeIndex
     * Gets the index of a row that is activated in an extended/modified/selected state.
     *
     * @return {Integer} index
     */
    activeIndex(): number;
}
