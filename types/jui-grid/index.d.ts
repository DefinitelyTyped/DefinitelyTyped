import { UIEvent } from "jui-core";
export interface GridColumn {
    (index: number | string): this;

    /**
     * TH element of a specified column
     * @default null
     */
    element: any;

    /**
     * Column sort state
     * @default "asc"
     */
    order: "asc" | "desc";

    /**
     * Column name
     * @default null
     */
    name?: string | undefined;

    /** Data from all rows belonging for a specified column */
    data: any[];

    /** TD element of all rows belonging to a specified column */
    list: any[];

    /** Column index */
    index: number;

    /**
     * The current column state
     * @default "show"
     */
    type: "show" | "hide" | "resize";

    /**
     * Column width
     * @default null
     */
    width?: number | undefined;
    hide(): void;
    show(): void;
}

export interface GridRow {
    /** Data of a specified row. */
    data: any[];

    /** Data of a sequence. */
    seq: number;

    /** The unique number of a child row under the specified parent row if a parent row exists. */
    rownum?: number | undefined;

    /** Index of a specified row. In the case of a tree structure, a depth is given. */
    index: number | string;

    /** TR element of a specified row. */
    element: any;

    /** List of TD elements of a specified row. */
    list: any[];

    /** List of hidden TD element. */
    hidden: {};

    /** Variable that refers to the parent row. */
    parent?: GridRow | undefined;

    /** List of child rows. */
    children: any[];

    /**
     * The depth of the current row in the case of a tree structure.
     * @default 0
     */
    depth: number;

    /**
     * State value that indicates whether a child row is shown or hidden.
     * @default "fold"
     */
    type: "open" | "fold";

    /**
     * State value that indicates whether a child row is shown or hidden.
     */
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
        tpl?: any;
        event?: any;
        /**
         * @cfg {Array} [fields=null]
         * Sets the name of columns in the order of being displayed on the table screen.
         */
        fields?: any[] | undefined;
        /**
         * @cfg {Array} [csv=null]
         * Sets the column key shown when converted to a CSV string.
         */
        csv?: any[] | undefined;
        /**
         * @cfg {Array} [csvNames=null]
         * Sets the name of a column shown when converting to a CSV string, which must be defined in the same order as the CSV option.
         */
        csvNames?: any[] | undefined;
        /**
         * @cfg {Array} [csvNumber=null]
         * Sets the column key to be changed to a number form when converted to a CSV string.
         */
        csvNumber?: any[] | undefined;
        /**
         * @cfg {Array} data
         * Sets the initial row list of a table.
         */
        data?: any[] | undefined;
        /**
         * @cfg {Boolean/Array} [colshow=false]
         * Sets a column index shown when the Show/Hide Column menu is enabled.
         */
        colshow?: boolean | any[] | undefined;
        /**
         * @cfg {Boolean} [scroll=false]
         * Determines whether to use a table scroll.
         */
        scroll?: boolean | undefined;
        /**
         * @cfg {Integer} [scrollHeight=200]
         * Sets the reference height of a body area when using a table scroll.
         */
        scrollHeight?: number | undefined;
        /**
         * @cfg {Integer} [width=0]
         * Sets the area of a table.
         */
        width?: number | undefined;
        /**
         * @cfg {Boolean} [expand=false]
         * Determines whether to use an extended row area.
         */
        expand?: boolean | undefined;
        /**
         * @cfg {Boolean} [expandEvent=true]
         * Sets the Show/Hide state of an extended row area when clicking on a row.
         */
        expandEvent?: boolean | undefined;
        /**
         * @cfg {Boolean|Array} [editRow=false]
         * Determines whether to use a modified row area.
         */
        editRow?: boolean | any[] | undefined;
        /**
         * @cfg {Boolean} [editEvent=true]
         * Sets the Show/Hide state of an extended row area when doubleclicking on a row/cell.
         */
        editEvent?: boolean | undefined;
        /**
         * @cfg {Boolean} [resize=false]
         * Determines whether to use the column resizing function.
         */
        resize?: boolean | undefined;
        /**
         * @cfg {Boolean/Array} [sort=false]
         * Determines whether to use the table sort function.
         */
        sort?: boolean | any[] | undefined;
        /**
         * @cfg {Integer} [sortIndex=null]
         * Determines whether to use the table sort function.
         */
        sortIndex?: number | undefined;
        /**
         * @cfg {String} [sortOrder="asc"]
         * Determines whether to use the table sort function.
         */
        sortOrder?: "asc" | "desc" | undefined;
        /**
         * @cfg {Boolean} [sortEvent=true]
         * Determines whether to use the sort function when you click on a column.
         */
        sortEvent?: boolean | undefined;
        /**
         * @cfg {Boolean} [moveRow=false]
         * Determines whether to use the move function when you fire row draggable event.
         */
        moveRow?: boolean | undefined;
    }): this;
    root?: any;
    /**
     * Updates the list of rows or modifies the row at a specified index.
     */
    update(indexOrRows?: any, rows?: any): void;
    /**
     * It is possible to configure a tree table using an object array with the index and data properties.
     */
    updateTree(rows: any[]): void;
    /**
     * Add a row or a child row to at a specified index.
     */
    append(rowOrIndex?: number | any, row?: any): void;
    /**
     * Adds a row at a specified index.
     */
    insert(index: number, dataList: {}): void;
    /**
     * Adds a selected class to a row at a specified index and gets an instance of the applicable row.
     *
     * @return row
     */
    select(index: number): GridRow;
    /**
     * Removes a selected class from a selected row and gets an instance of the row in question.
     *
     * @return row
     */
    unselect(): GridRow;
    /**
     * Add a checked class to a row at a specified index.
     */
    check(index: number): void;
    /**
     * Removes a checked class from a row at a specified index.
     */
    uncheck(index: number): void;

    uncheckAll(): void;
    /**
     * Remove a row at a specified index.
     */
    remove(index: number): void;

    reset(): void;
    /**
     * Moves a row iat a specified index to the target index.
     */
    move(index: number, targetIndex: number): void;
    /**
     * Moves a row iat a specified index to the target index.
     *
     * @param order  "asc" or "desc"
     */
    sort(index: number, order: string, e?: any): void;
    /**
     * Sets the scroll based on the height of a table.
     */
    scroll(height: number): void;
    /**
     * Shows a child row of a specified index.
     */
    open(index: number): void;
    /**
     * Hides a child row of a specified index.
     */
    fold(index: number): void;

    openAll(): void;

    foldAll(): void;

    resize(): void;

    resizeColumns(): void;
    /**
     * Gets the size of all the rows of a table.
     *
     * @return size
     */
    size(): number;
    /**
     * Gets the number of trows of a table.
     *
     * @return count
     */
    count(): number;
    /**
     * Gets all the rows of a table.
     *
     * @return rows
     */
    list(): GridRow[];
    /**
     * Gets the data of all the rows of a table.
     *
     * @return datas
     */
    listData(): any[];
    /**
     * Gets all the rows of a table including child rows.
     *
     * @return rows
     */
    listAll(): GridRow[];
    /**
     * Gets all rows in a check state.
     *
     * @return rows
     */
    listChecked(): GridRow[];
    /**
     * Gets all columns.
     *
     * @return columns
     */
    listColumn(): GridColumn;
    /**
     * Gets the row at the specified index.
     *
     * @return row
     */
    get(index: number): GridRow;
    /**
     * Gets all rows of at the specified index including child rows.
     *
     * @return rows
     */
    getAll(index: number): GridRow[];
    /**
     * Gets the column at the specified index.
     *
     * @param key index or column key
     * @return column
     */
    getColumn(index: number | string): GridColumn;
    /**
     * Shows the column index (or column name).
     *
     * @param key index or column name
     */
    showColumn(index: number | string, e?: any): void;
    /**
     * Hides the column index (or column name).
     *
     * @param key index or column name
     */
    hideColumn(index: number | string, e?: any): void;
    /**
     * It is possible to determine the index or name of the column to be shown in an array.
     *
     * @param key index or column name
     */
    initColumns(keys: any): void;
    /**
     * Shows the Show/Hide Column menu at specified coordinates.
     */
    showColumnMenu(x: number, y: number): void;

    hideColumnMenu(): void;
    /**
     * Shows or hides the Show/Hide Column menu.
     */
    toggleColumnMenu(x: number, y: number): void;
    /**
     * Shows the extended row area of a specified index.
     */
    showExpand(index: number, obj?: any, e?: any): void;

    hideExpand(e?: any): void;
    /**
     * Get a row in which the extended area is currently activated.
     *
     * @return row
     */
    getExpand(): GridRow;
    /**
     * Shows the modified row area of a specified index.
     */
    showEditRow(index: number, e?: any): void;

    hideEditRow(data?: any): void;
    /**
     * Get a row in which the modified area is currently activated.
     *
     * @return row
     */
    getEditRow(): GridRow;

    setCsv(csvOrKey: any, key?: any): void;

    setCsvFile(fileOrKey: any, key?: any): void;
    /**
     * Gets the data of a table as a CSV string.
     *
     * @return csv
     */
    getCsv(isTree: boolean): string;
    /**
     * Gets the data of a table as a CSV string encoded as base64.
     *
     * @return base64
     */
    getCsvBase64(isTree: boolean): string;
    /**
     * Downloads the data of a table as a CSV file.
     */
    downloadCsv(name: string, isTree: boolean): void;
    /**
     * Gets the index of a row that is activated in an extended/modified/selected state.
     *
     * @return index
     */
    activeIndex(): number;
}

export interface GridXTable extends UIEvent {
    (selector: any, options?: {}): this;
    render(isTree?: boolean): void;
    /**
     * Adds a selected class to a row at a specified index and gets an instance of the applicable row.
     *
     * @return row
     */
    select(index: number): GridRow;
    /**
     * Removes a selected class from a selected row and gets an instance of the row in question.
     *
     * @return row
     */
    unselect(): GridRow;
    /**
     * Updates the list of rows or modifies the row at a specified index.
     */
    update(dataList: any[]): void;
    /**
     * It is possible to configure a tree table using an object array with the index and data properties.
     */
    updateTree(tree: any[]): void;
    /**
     * Add a row or a child row to at a specified index.
     */
    append(index: number, data: {}): void;
    /**
     * Shows a child row of a specified index.
     */
    open(index: number | string): void;
    /**
     * Hides a child row of a specified index.
     */
    fold(index: number | string): void;

    openAll(index: number | string): void;

    foldAll(index: number | string): void;

    next(): void;
    /**
     * Changes to the page of at a specified index.
     */
    page(pNo: number): void;
    /**
     * Moves a row iat a specified index to the target index.
     *
     * @param order  "asc" or "desc"
     */
    sort(index: number, order: "asc" | "desc", e?: any, isNotLoading?: any): void;
    /**
     * Filters columns at a specified to locate rows that contain keywords in the cell value.
     */
    filter(callback: (data: any) => void): void;

    rollback(): void;

    clear(): void;

    reset(): void;

    resize(): void;
    /**
     * Sets the scroll based on the width of a table.
     */
    scrollWidth(scrollWidth: number, isInit?: boolean): void;
    /**
     * Sets the scroll based on the height of a table.
     */
    scrollHeight(h: number): void;
    /**
     * Sets the scroll based on the height of a table.
     */
    scrollTop(index: number | string, dist: number): void;
    /**
     * @deprecated
     * Sets the scroll based on the height of a table.
     */
    height(h: number): void;
    /**
     * Gets the size of all the rows of a table.
     *
     * @return size
     */
    size(): number;
    /**
     * Gets the number of trows of a table.
     *
     * @return count
     */
    count(): number;
    /**
     * Gets all the rows of a table.
     *
     * @return rows
     */
    list(): GridRow[];
    /**
     * Gets all columns.
     *
     * @return columns
     */
    listColumn(): GridColumn[];
    /**
     * Gets the data of all the rows of a table.
     *
     * @return datas
     */
    listData(): any[];
    /**
     * Gets the row at the specified index.
     *
     * @return row
     */
    get(index: number): GridRow;
    getAll(index: number, _result?: any): GridRow[];
    /**
     * Gets the column at the specified index.
     *
     * @param key index or column key
     * @return column
     */
    getColumn(index: number | string): GridColumn;
    /**
     * Gets the data at the specified index.
     *
     * @param key index
     * @return data
     */
    getData(index: number | string): any;
    /**
     * Shows the column index (or column name).
     *
     * @param key index or column name
     */
    showColumn(index: number | string): void;
    /**
     * Hides the column index (or column name).
     *
     * @param key index or column name
     */
    hideColumn(index: number | string): void;
    /**
     * It is possible to determine the index or name of the column to be shown in an array.
     *
     * @param key index or column name
     */
    initColumns(keys: number | string): void;
    /**
     * Shows the Show/Hide Column menu at specified coordinates.
     */
    showColumnMenu(x: number, y: number): void;

    hideColumnMenu(): void;
    /**
     * Shows or hides the Show/Hide Column menu.
     */
    toggleColumnMenu(x: number, y: number): void;
    /**
     * Shows the extended row area of a specified index.
     */
    showExpand(index: number, obj: any): void;

    hideExpand(index: number): void;
    /**
     * Get a row in which the extended area is currently activated.
     *
     * @return row
     */
    getExpand(): GridRow;
    /**
     * Shows the loading screen for the specified delay time.
     */
    showLoading(delay: number): void;

    hideLoading(): void;

    setCsv(csv: string): void;

    setCsvFile(file: any): void;
    /**
     * Gets the data of a table as a CSV string.
     *
     * @return csv
     */
    getCsv(): string;
    /**
     * Gets the data of a table as a CSV string encoded as base64.
     *
     * @return base64
     */
    getCsvBase64(): string;
    /**
     * Downloads the data of a table as a CSV file.
     */
    downloadCsv(name: string): void;
    /**
     * Ir is possible to use a function for all row data applicable to the column (or column name) of a specified column (or column name). Currently only SUM and AVG are supported.
     */
    rowFunc(type: "sum" | "avg", index: number, callback: (data: any) => void): any;
    /**
     * Gets the current page of a table.
     *
     * @return page
     */
    getPage(): number;
    /**
     * Gets the index of a row that is activated in an extended/modified/selected state.
     *
     * @return index
     */
    activeIndex(): number;
}
