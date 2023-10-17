export = jspreadsheet;
export as namespace jspreadsheet;

declare const jspreadsheet: jspreadsheet.JSpreadsheet;

declare namespace jspreadsheet {
    //
    // Cell values
    // ----------------------------------------------------------------------

    type CellValue = string | number | boolean;

    type SourceValue =
        | CellValue
        | {
            id: CellValue;
            name: CellValue;
        };

    interface SourceValueElement<T extends CellValue> {
        id: T;
        name: CellValue;
    }

    //
    // Column options
    // ----------------------------------------------------------------------

    interface CalendarOptions {
        /** Date format */
        format?: string | undefined;
        /** Fullscreen (this is automatic set for screensize < 800) */
        fullscreen?: boolean | undefined;
        /**
         * Translations can be done here
         * Default: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
         */
        months?:
            | [string, string, string, string, string, string, string, string, string, string, string, string]
            | undefined;
        // tslint:disable-next-line ban-types
        onchange?: Function | undefined;
        /** Events */
        // tslint:disable-next-line ban-types
        onclose?: Function | undefined;
        /** Placeholder */
        placeholder?: CellValue | undefined;
        /** Allow keyboard date entry */
        readonly?: boolean | undefined;
        /** Show the reset button */
        resetButton?: boolean | undefined;
        /** Show timepicker */
        time?: boolean | undefined;
        /** Today is default */
        today?: boolean | undefined;
        /** Value */
        value?: CellValue | undefined;
        /**
         * Default: ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
         */
        weekdays?: [string, string, string, string, string, string, string] | undefined;
        /**
         * Default: ["S", "M", "T", "W", "T", "F", "S"]
         */
        weekdays_short?: [string, string, string, string, string, string, string] | undefined;
    }

    interface CellChange {
        col: string;
        newValue: CellValue;
        oldValue: CellValue;
        row: string;
        x: string;
        y: string;
    }

    interface ColumnEditor {
        // tslint:disable-next-line ban-types
        closeEditor?: Function | undefined;
        // tslint:disable-next-line ban-types
        getValue?: Function | undefined;
        // tslint:disable-next-line ban-types
        openEditor?: Function | undefined;
        // tslint:disable-next-line ban-types
        setValue?: Function | undefined;
    }

    interface Column {
        /**
         * Default: "center"
         */
        align?: "center" | "left" | "right" | undefined;
        autocomplete?: boolean | undefined;
        decimal?: string | undefined;
        editor?: ColumnEditor | undefined;
        mask?: string | undefined;
        multiple?: boolean | undefined;
        name?: CellValue | undefined;
        options?: CalendarOptions | undefined;
        primaryKey?: boolean | undefined;
        readOnly?: boolean | undefined;
        render?: string | undefined;
        source?: SourceValue[] | undefined;
        title?: CellValue | undefined;
        /**
         * @see https://bossanova.uk/jexcel/v4/examples/column-types
         */
        type?:
            | "autocomplete"
            | "calendar"
            | "checkbox"
            | "color"
            | "dropdown"
            | "hidden"
            | "html"
            | "image"
            | "numeric"
            | "radio"
            | "text"
            | undefined;
        url?: string | undefined;
        width?: number | undefined;
        wordWrap?: boolean | undefined;
    }

    //
    // Main options
    // ----------------------------------------------------------------------
    interface SharedMethodsInitializationOptions {
        /**
         * Search in the table, only if directive is enabled during inialization - sets search in initialization.
         * @param string - Search for word
         * myTable.search([string]);
         */
        // tslint:disable-next-line ban-types
        search?: Function | boolean | undefined;
        /**
         * Toggle table fullscreen mode or set fullscreen mode in initialization
         * @param boolean fullscreen - define fullscreen status as true or false
         * myTable.fullscreen([bool]);
         */
        // tslint:disable-next-line ban-types
        fullscreen?: Function | boolean | undefined;
    }

    interface MethodsOptions {
        /**
         * remove column by number
         * @param integer columnNumber - Which column should be excluded starting on zero
         * @param integer numOfColumns - number of columns to be excluded from the reference column    myTable.deleteColumn([integer], [integer]);
         */
        // tslint:disable-next-line ban-types
        deleteColumn?: Function | undefined;
        /**
         * remove row by number
         * @param integer rowNumber - Which row should be excluded starting on zero
         * @param integer numOfRows - number of lines to be excluded
         * myTable.deleteRow([integer], [integer]);
         */
        // tslint:disable-next-line ban-types
        deleteRow?: Function | undefined;
        /** Destroy all merged cells    myTable.destroyMerge(); */
        // tslint:disable-next-line ban-types
        destroyMerged?: Function | undefined;
        /**
         * get the current data as a CSV file
         * @param bool - true to download parsed formulas.
         * myTable.download([bool]);
         */
        // tslint:disable-next-line ban-types
        download?: Function | undefined;
        /** get current cell DOM @param string columnName - str compatible with excel, or as object.    myTable.getCell([string]); */
        // tslint:disable-next-line ban-types
        getCell?: Function | undefined;
        /** Get the data from one column by number @param integer columnNumber - Column number    myTable.getColumnData([int]); */
        // tslint:disable-next-line ban-types
        getColumnData?: Function | undefined;
        /** get cell comments @param mixed - cell identification or null for the whole table.    myTable.getComments([string]); */
        // tslint:disable-next-line ban-types
        getComments?: Function | undefined;
        /** get table definitions    myTable.getConfig(); */
        // tslint:disable-next-line ban-types
        getConfig?: Function | undefined;
        /** Get the full or partial table data @param boolean onlyHighlighedCells - Get only highlighted cells    myTable.getData([bool]); */
        // tslint:disable-next-line ban-types
        getData?: Function | undefined;
        /** get the current header by column number @param integer columnNumber - Column number starting on zero    myTable.getHeader([integer]); */
        // tslint:disable-next-line ban-types
        getHeader?: Function | undefined;
        /** get all header titles    myTable.getHeaders(); */
        // tslint:disable-next-line ban-types
        getHeaders?: Function | undefined;
        /** get the current row height @param integer rowNumber - row number starting on zero    myTable.getHeight([integer]); */
        // tslint:disable-next-line ban-types
        getHeight?: Function | undefined;
        /** Get the full or partial table data in JSON format @param boolean onlyHighlighedCells - Get only highlighted cells    myTable.getData([bool]); */
        // tslint:disable-next-line ban-types
        getJson?: Function | undefined;
        /** get current cell DOM innerHTML @param string columnName - str compatible with excel, or as object.    myTable.getLabel([string]); */
        // tslint:disable-next-line ban-types
        getLabel?: Function | undefined;
        /** Get merged cells properties @param string columnName - Column name, such as A1.    myTable.getMerge([string]); */
        // tslint:disable-next-line ban-types
        getMerge?: Function | undefined;
        /** get the table or cell meta information @param mixed - cell identification or null for the whole table.    myTable.getMeta([string]); */
        // tslint:disable-next-line ban-types
        getMeta?: Function | undefined;
        /** Get the data from one row by number @param integer rowNumber - Row number    myTable.getRowData([int]); */
        // tslint:disable-next-line ban-types
        getRowData?: Function | undefined;
        /** Get the selected columns @param boolean asIds - Get the colNumbers or row DOM elements    myTable.getSelectedColumns([bool]); */
        // tslint:disable-next-line ban-types
        getSelectedColumns?: Function | undefined;
        /** Get the selected rows @param boolean asIds - Get the rowNumbers or row DOM elements    myTable.getSelectedRows([bool]); */
        // tslint:disable-next-line ban-types
        getSelectedRows?: Function | undefined;
        /** get table or cell style @param mixed - cell identification or null for the whole table.    myTable.getStyle([string])); */
        // tslint:disable-next-line ban-types
        getStyle?: Function | undefined;
        /** get current cell value @param mixed cellIdent - str compatible with excel, or as object.    myTable.getValue([string]); */
        // tslint:disable-next-line ban-types
        getValue?: Function | undefined;
        /** get value from coords @param integer x @param integer y myTable.getValueFromCoords([integer], [integer]); */
        // tslint:disable-next-line ban-types
        getValueFromCoords?: Function | undefined;
        /** get the current column width @param integer columnNumber - column number starting on zero    myTable.getWidth([integer]); */
        // tslint:disable-next-line ban-types
        getWidth?: Function | undefined;
        /** hide column by number    myTable.hideColumn([int]); */
        // tslint:disable-next-line ban-types
        hideColumn?: Function | undefined;
        /** hide column of index numbers    myTable.hideIndex(); */
        // tslint:disable-next-line ban-types
        hideIndex?: Function | undefined;
        /**
         * add a new column
         * @param mixed - num of columns to be added or data to be added in one single column
         * @param int columnNumber - number of columns to be created
         * @param boolean insertBefore
         * @param object properties - column properties
         * myTable.insertColumn([mixed], [integer], [boolean], [object]);
         */
        // tslint:disable-next-line ban-types
        insertColumn?: Function | undefined;
        /**
         * add a new row
         * @param mixed - number of blank lines to be insert or a single array with the data of the new row
         * @param integer rowNumber - reference row number
         * @param boolean insertBefore
         * myTable.insertRow([mixed], [integer], [boolean]);
         */
        // tslint:disable-next-line ban-types
        insertRow?: Function | undefined;
        /**
         * change the column position
         * @param integer columnPosition
         * @param integer newColumnPosition
         * myTable.moveColumn([integer], [integer]);
         */
        // tslint:disable-next-line ban-types
        moveColumn?: Function | undefined;
        /**
         * change the row position
         * @param integer rowPosition
         * @param integer newRowPosition
         * myTable.moveRow([integer], [integer]);
         */
        // tslint:disable-next-line ban-types
        moveRow?: Function | undefined;
        /**
         * reorder a column asc or desc
         * @param integer columnNumber - column number starting on zero
         * @param smallint sortType - One will order DESC, zero will order ASC, anything else will toggle the current order
         * myTable.orderBy([integer], [boolean]);
         */
        // tslint:disable-next-line ban-types
        orderBy?: Function | undefined;
        /** Go to page number- Valid only when pagination is true. @param integer - Go to page number    myTable.page([integer]); */
        // tslint:disable-next-line ban-types
        page?: Function | undefined;
        /** Redo changes    myTable.redo(); */
        // tslint:disable-next-line ban-types
        redo?: Function | undefined;
        /** Destroy merged by column name @param string columnName - Column name, such as A1.    myTable.removeMerge([string]); */
        // tslint:disable-next-line ban-types
        removeMerge?: Function | undefined;
        /** reset search table    myTable.resetSearch(); */
        // tslint:disable-next-line ban-types
        resetSearch?: Function | undefined;
        /** Reset the table selection @param boolean executeBlur - execute the blur from the table myTable.resetSelection([bool]); */
        // tslint:disable-next-line ban-types
        resetSelection?: Function | undefined;
        /** remove all style from a cell @param string columnName - Column name, example: A1, B3, etc    myTable.resetStyle([string]); */
        // tslint:disable-next-line ban-types
        resetStyle?: Function | undefined;
        /** Set the data from one column by number @param integer columnNumber - Column number @param array colData - Column data    myTable.setColumnData([int], [array]); */
        // tslint:disable-next-line ban-types
        setColumnData?: Function | undefined;
        /** set cell comments @param cell - cell identification @param text - comments    myTable.setComments([string], [string]); */
        // tslint:disable-next-line ban-types
        setComments?: Function | undefined;
        /** Set the table data @param json newData - New json data, null will reload what is in memory.    myTable.setData([json]); */
        // tslint:disable-next-line ban-types
        setData?: Function | undefined;
        /** change header by column @param integer columnNumber - column number starting on zero @param string columnTitle - New header title    myTable.setHeader([integer], [string]); */
        // tslint:disable-next-line ban-types
        setHeader?: Function | undefined;
        /** change row height @param integer rowNumber - row number starting on zero @param string newRowHeight- New row height    myTable.setHeight([integer], [integer]); */
        // tslint:disable-next-line ban-types
        setHeight?: Function | undefined;
        /**
         * Merge cells
         * @param string columnName - Column name, such as A1.
         * @param integer colspan - Number of columns
         * @param integer rowspan - Number of rows
         * myTable.setMerge([string], [int], [int]);
         */
        // tslint:disable-next-line ban-types
        setMerge?: Function | undefined;
        /** set the table or cell meta information @param mixed - json with whole table meta information.    myTable.setMeta[mixed]); */
        // tslint:disable-next-line ban-types
        setMeta?: Function | undefined;
        /**
         * Set the data from one row by number
         * @param integer rowNumber - Row number
         * @param array rowData - Row data
         * myTable.setRowData([int], [array]);
         */
        // tslint:disable-next-line ban-types
        setRowData?: Function | undefined;
        /**
         * set cell(s) CSS style
         * @param mixed - json with whole table style information or just one cell identification. Ex. A1.
         * @param k [optional]- CSS key
         * @param v [optional]- CSS value
         * myTable.setSyle([object], [string], [string]);
         */
        // tslint:disable-next-line ban-types
        setStyle?: Function | undefined;
        /**
         * change the cell value
         * @param mixed cellIdent - str compatible with excel, or as object.
         * @param string Value - new value for the cell
         * @param bool force - update readonly columns
         * myTable.setValue([string], [string], [bool]);
         */
        // tslint:disable-next-line ban-types
        setValue?: Function | undefined;
        /**
         * get value from coords
         * @param integer x
         * @param integer y
         * @param string Value - new value for the cell
         * @param bool force - update readonly columns
         * myTable.getValueFromCoords([integer], [integer], [string], [bool]);
         */
        // tslint:disable-next-line ban-types
        setValueFromCoords?: Function | undefined;
        /**
         * change column width
         * @param integer columnNumber - column number starting on zero
         * @param string newColumnWidth - New column width
         * myTable.setWidth([integer], [integer]);
         */
        // tslint:disable-next-line ban-types
        setWidth?: Function | undefined;
        /** show column by number    myTable.showIndex([int]); */
        // tslint:disable-next-line ban-types
        showColumn?: Function | undefined;
        /** show column of index numbers    myTable.showIndex(); */
        // tslint:disable-next-line ban-types
        showIndex?: Function | undefined;
        /** Undo last changes    myTable.undo(); */
        // tslint:disable-next-line ban-types
        undo?: Function | undefined;
        /**
         * select cells
         * @param object startCell - cell object
         * @param object endCell - cell object
         * @param boolean ignoreEvents - ignore onselection event
         * myTable.updateSelection([cell], [cell], true);
         */
        // tslint:disable-next-line ban-types
        updateSelection?: Function | undefined;
        /** select cells @param integer x1 @param integer y1 @param integer x2 @param integer y2    myTable.updateSelectionFromCoords([integer], [integer], [integer], [integer]); */
        // tslint:disable-next-line ban-types
        updateSelectionFromCoords?: Function | undefined;
        /** Which page showing on jExcel - Valid only when pagination is true.    myTable.whichPage(); */
        // tslint:disable-next-line ban-types
        whichPage?: Function | undefined;
    }

    interface EventsOptions {
        /** After all changes are applied in the table. */
        onafterchanges?: ((instance: HTMLElement, cellChanges: CellChange[]) => void) | undefined;
        /** Before a column value is changed. NOTE: It is possible to overwrite the original value, by return a new value on this method. v3.4.0+ */
        onbeforechange?:
            | ((
                instance: HTMLElement,
                cell: HTMLTableCellElement,
                columnIndex: number,
                rowIndex: number,
                value: CellValue,
            ) => CellValue | void)
            | undefined;
        /** Before a column is excluded. You can cancel the insert event by returning false. */
        onbeforedeletecolumn?: ((instance: HTMLElement, startColumnIndex: number, count: number) => void) | undefined;
        /** Before a row is deleted. You can cancel the delete event by returning false. */
        onbeforedeleterow?: ((instance: HTMLElement, startRowIndex: number, count: number) => void) | undefined;
        /** Before a new column is inserted. You can cancel the insert event by returning false. */
        onbeforeinsertcolumn?:
            | ((instance: HTMLElement, startColumnIndex: number, count: number, isBefore: boolean) => void)
            | undefined;
        /** Before a new row is inserted. You can cancel the insert event by returning false. */
        onbeforeinsertrow?:
            | ((instance: HTMLElement, startColumnIndex: number, count: number, isBefore: boolean) => void)
            | undefined;
        /** Before the paste action is performed. Used to parse any input data, should return the data. */
        // tslint:disable-next-line ban-types
        onbeforepaste?: Function | undefined;
        /** On table blur */
        onblur?: ((instance: HTMLElement) => void) | undefined;
        /** After a column value is changed. */
        onchange?:
            | ((
                instance: HTMLElement,
                cell: HTMLTableCellElement,
                /** (e.g.) "0", "1" ... */
                columnIndex: string,
                /** (e.g.) "0", "1" ... */
                rowIndex: string,
                value: CellValue,
            ) => void)
            | undefined;
        /** On header change */
        // tslint:disable-next-line ban-types
        onchangeheader?: Function | undefined;
        /** When a setMeta is called. */
        // tslint:disable-next-line ban-types
        onchangemeta?: Function | undefined;
        /** When the page is changed. */
        // tslint:disable-next-line ban-types
        onchangepage?: Function | undefined;
        /** When a setStyle is called. */
        // tslint:disable-next-line ban-types
        onchangestyle?: Function | undefined;
        /** After a column is excluded. */
        ondeletecolumn?:
            | ((
                instance: HTMLElement,
                startColumnIndex: number,
                count: number,
                cells: HTMLTableCellElement[][],
            ) => void)
            | undefined;
        /** After a row is excluded. */
        ondeleterow?:
            | ((instance: HTMLElement, startRowIndex: number, count: number, cells: HTMLTableCellElement[][]) => void)
            | undefined;
        /** When a closeEditor is called. */
        oneditionend?:
            | ((
                instance: HTMLElement,
                cell: HTMLTableCellElement,
                columnIndex: string,
                rowIndex: string,
                value: CellValue,
            ) => void)
            | undefined;
        /** When a openEditor is called. */
        oneditionstart?:
            | ((instance: HTMLElement, cell: HTMLTableCellElement, columnIndex: string, rowIndex: string) => void)
            | undefined;
        /** On table focus */
        onfocus?: ((instance: HTMLElement) => void) | undefined;
        /** After a new column is inserted. */
        oninsertcolumn?:
            | ((
                instance: HTMLElement,
                startColumnIndex: number,
                count: number,
                cells: HTMLTableCellElement[][],
            ) => void)
            | undefined;
        /** After a new row is inserted. */
        oninsertrow?:
            | ((instance: HTMLElement, startRowIndex: number, count: number, cells: HTMLTableCellElement[][]) => void)
            | undefined;
        /** This method is called when the method setData */
        onload?: ((instance: HTMLElement) => void) | undefined;
        /** On column merge */
        // tslint:disable-next-line ban-types
        onmerge?: Function | undefined;
        /** After a column is moved to a new position. */
        // tslint:disable-next-line ban-types
        onmovecolumn?: Function | undefined;
        /** After a row is moved to a new position. */
        // tslint:disable-next-line ban-types
        onmoverow?: Function | undefined;
        /** After a paste action is performed in the javascript table. */
        onpaste?: ((instance: HTMLElement, data: CellValue[][]) => void) | undefined;
        /** On redo is applied */
        // tslint:disable-next-line ban-types
        onredo?: Function | undefined;
        /** After a change in column width. */
        // tslint:disable-next-line ban-types
        onresizecolumn?: Function | undefined;
        /** After a change in row height. */
        // tslint:disable-next-line ban-types
        onresizerow?: Function | undefined;
        /** On the selection is changed. */
        onselection?:
            | ((
                instance: HTMLElement,
                startColumnIndex: number,
                startRowIndex: number,
                endColumnIndex: number,
                endRowIndex: number,
            ) => void)
            | undefined;
        /** After a colum is sorted. */
        // tslint:disable-next-line ban-types
        onsort?: Function | undefined;
        /** On undo is applied */
        // tslint:disable-next-line ban-types
        onundo?: Function | undefined;
    }

    interface InitializationOptions {
        /** Allow comments over the cells: bool */
        allowComments?: boolean | undefined;
        /** Allow delete a column: bool */
        allowDeleteColumn?: boolean | undefined;
        /** Allow delete a row: bool */
        allowDeleteRow?: boolean | undefined;
        /** Allow table export: bool */
        allowExport?: boolean | undefined;
        /** Allow insert a new column: bool */
        allowInsertColumn?: boolean | undefined;
        /** Allow insert a new row: bool */
        allowInsertRow?: boolean | undefined;
        /** Allow user to create a new column: bool */
        allowManualInsertColumn?: boolean | undefined;
        /** Allow user to insert a new row: bool */
        allowManualInsertRow?: boolean | undefined;
        /** Allow rename a column: bool */
        allowRenameColumn?: boolean | undefined;
        /** Auto increment actions when using the dragging corner */
        autoIncrement?: any;
        /** Allow column dragging: bool */
        columnDrag?: boolean | undefined;
        /** Allow column resizing: bool */
        columnResize?: boolean | undefined;
        /** Allow column sorting: bool */
        columnSorting?: boolean | undefined;
        /** Column type, title, width, align, dropdown options, text wrapping, mask, etc.: object */
        columns?: Column[] | undefined;
        /** Context menu content: function() { return customMenu } */
        // tslint:disable-next-line ban-types
        contextMenu?: Function | undefined;
        /** When is true copy and export will bring formula results, if false will bring formulas: boolean */
        copyCompatibility?: boolean | undefined;
        /** Load a external CSV file from this URL: string */
        csv?: string | undefined;
        /** Default delimiter for the CSV file: string */
        csvDelimiter?: string | undefined;
        /** Default filename for a download method: string */
        csvFileName?: string | undefined;
        /** Load header titles from the CSV file: bool */
        csvHeaders?: boolean | undefined;
        /** Load this data into the javascript table: array */
        data?: CellValue[][] | Array<{ [title in string | number]: CellValue }> | undefined;
        /** Default align for a new column: [center, left, right] */
        defaultColAlign?: "center" | "left" | "right" | undefined;
        /** Default width for a new column: integer */
        defaultColWidth?: number | undefined;
        /** Allow table edition: bool */
        editable?: boolean | undefined;
        /** Allow freezing columns: number */
        freezeColumns?: number | undefined;
        /** Include header titles on download: bool */
        includeHeadersOnDownload?: boolean | undefined;
        /** Activate the table lazyloading */
        lazyLoading?: boolean | undefined;
        /** Activate the loading spin */
        loadingSpin?: boolean | undefined;
        /** Cells to be merged in the table initialization: object */
        mergeCells?: Record<string, any> | undefined;
        /** Meta information: object */
        meta?: Record<string, any> | undefined;
        /** Minimum table dimensions: [cols, rows] */
        minDimensions?: [number] | [undefined, number] | [number, number] | undefined;
        /** Minimum number of spare cols: [integer] */
        minSpareCols?: number[] | undefined;
        /** Minimum number of spare rows: [integer] */
        minSpareRows?: number[] | undefined;
        /** Define the nested headers, including title, colspan, etc: object */
        nestedHeaders?:
            | Array<
                Array<{
                    colspan?: number | undefined;
                    title?: CellValue | undefined;
                }>
            >
            | undefined;
        /** Break the table by pages */
        pagination?: number | undefined;
        /** Number of records per page: 25,50,75,100 for example. */
        paginationOptions?: number[] | undefined;
        /** Enable execution of formulas inside the table */
        parseFormulas?: any;
        /** Allow row dragging: bool */
        rowDrag?: boolean | undefined;
        /** Allow row resizing: bool */
        rowResize?: boolean | undefined;
        /** Row properties: height.: object */
        rows?: Record<string, any> | undefined;
        /** Allow selection copy: bool */
        selectionCopy?: boolean | undefined;
        /**
         * Cells style in the table initialization: object
         * key: cellIndex. (e.g.) "A1", "C20"
         * value: css value. (e.g.) "background-color: orange;"
         */
        style?: { [cellIndex: string]: string } | undefined;
        /** Force the max height of the table: CSS String */
        tableHeight?: string | undefined;
        /** Allow table overflow: bool */
        tableOverflow?: boolean | undefined;
        /** Force the max width of the table: CSS String */
        tableWidth?: string | undefined;
        /** All messages to be customized */
        text?: Record<string, any> | undefined;
        /** Add custom toolbars: object */
        toolbar?: Array<Record<string, any>> | undefined;
        /** Method to config custom script execution. NOTE: This does not work with lazyLoading, Pagination or Search options. */
        updateTable?:
            | ((instance: any, cell: any, col: any, row: any, val: any, label: any, cellName: any) => void)
            | undefined;
        /** Load a external json file from this URL: string */
        url?: string | undefined;
        /** Global text wrapping: bool */
        wordWrap?: boolean | undefined;
    }

    interface TranslationsOptions {
        /** About */
        about?: any;
        /** Add comments */
        addComments?: any;
        /** Are you sure to delete the selected columns? */
        areYouSureToDeleteTheSelectedColumns?: any;
        /** Are you sure to delete the selected rows? */
        areYouSureToDeleteTheSelectedRows?: any;
        /** Cell already merged */
        cellAlreadyMerged?: any;
        /** Clear comments */
        clearComments?: any;
        /** Comments */
        comments?: any;
        /** Copy... */
        copy?: any;
        /** Delete selected columns */
        deleteSelectedColumns?: any;
        /** Delete selected rows */
        deleteSelectedRows?: any;
        /** Edit comments */
        editComments?: any;
        /** entries */
        entries?: any;
        /** Insert a new column after */
        insertANewColumnAfter?: any;
        /** Insert a new column before */
        insertANewColumnBefore?: any;
        /** Insert a new row after */
        insertANewRowAfter?: any;
        /** Insert a new row before */
        insertANewRowBefore?: any;
        /** Invalid merged properties */
        invalidMergeProperties?: any;
        /** No cells selected */
        noCellsSelected?: any;
        /** No records found */
        noRecordsFound?: any;
        /** Order ascending */
        orderAscending?: any;
        /** Order descending */
        orderDescending?: any;
        /** Paste... */
        paste?: any;
        /** Rename this column */
        renameThisColumn?: any;
        /** Save as... */
        saveAs?: any;
        /** Show */
        show?: any;
        /** Showing page {0} of {1} entries */
        showingPage?: any;
        /** There is a conflict with another merged cell */
        thereIsAConflictWithAnotherMergedCell?: any;
        /** This action will clear your search results. Are you sure? */
        thisActionWillClearYourSearchResultsAreYouSure?: any;
        /** This action will destroy any existing merged cells. Are you sure? */
        thisActionWillDestroyAnyExistingMergedCellsAreYouSure?: any;
    }

    interface UnDocumentOptions {
        footers?: CellValue[][] | Array<{ [title in string | number]: CellValue }> | undefined;
    }

    /**
     * @see https://bossanova.uk/jspreadsheet/v4/docs/quick-reference
     */
    type Options =
        & SharedMethodsInitializationOptions
        & MethodsOptions
        & EventsOptions
        & InitializationOptions
        & TranslationsOptions
        & UnDocumentOptions;

    type TabOptions = Options & { sheetName: string };

    interface ActionHistory {
        action: string;
        insertBefore: boolean;
        numOfRows: number;
        rowData: CellValue[];
        rowNode: HTMLTableRowElement[];
        rowNumber: number;
        rowRecords: HTMLTableDataCellElement[];
    }

    interface JSpreadsheetElement {
        ads: HTMLDivElement;
        closeEditor: (cell: object, save: boolean) => any;
        col: (cell: object) => any;
        colgroup: HTMLTableColElement[];
        colgroupContainer: any;
        /**
         * Move coords to A1 in case ovelaps with an excluded cell
         */
        conditionalSelectionUpdate: (type: 0 | 1, o: number, d: number) => void;
        content: HTMLDivElement;
        contextMenu: HTMLDivElement;
        /**
         * Copy method
         *
         * @param bool highlighted - Get only highlighted cells
         * @param delimiter - \t default to keep compatibility with excel
         * @return string value
         */
        copy: (highlighted?: boolean, delimiter?: string, returnData?: boolean) => string;
        /**
         * Helper function to copy data using the corner icon
         */
        copyData: (o: object, d: object) => any;
        corner: any;
        createCell: (i: number, j: number, value: CellValue) => any;
        createCellHeader: (colNumber: number) => any;
        createNestedHeader: (nestedInformation: object[]) => any;
        createRow: (j: number, data?: any) => any;
        createTable: () => void;
        createToolbar: (toolbar: object[]) => void;
        cursor: any;
        data: any;
        deleteColumn: (columnNumber: any, numOfColumns: any) => any;
        deleteRow: (rowNumber: any, numOfRows: any) => any;
        destroy: () => any;
        destroyMerged: (keepOptions: any) => any;
        down: (shiftKey: any, ctrlKey: any) => any;
        download: (includeHeaders: any) => any;
        dragging: any;
        edition: any;
        el: HTMLDivElement;
        executeFormula: (expression: any, x: any, y: any) => any;
        filter: HTMLDivElement;
        first: (shiftKey: any, ctrlKey: any) => any;
        formula: any[];
        fullscreen: (activate: any) => any;
        getCell: (cell: any) => any;
        getCellFromCoords: (x: number, y: number) => any;
        getColumnData: (columnNumber: number) => CellValue[];
        getComments: (cell: any, withAuthor: any) => any;
        getConfig: () => any;
        getData: (highlighted?: boolean, dataOnly?: boolean) => CellValue[][];
        getDropDownValue: (column: any, key: any) => any;
        getHeader: (column: any) => any;
        getHeaders: (asArray: any) => any;
        getHeight: (row: any) => any;
        getHighlighted: () => any;
        getJson: (highlighted?: boolean) => any;
        getLabel: (cell: any) => any;
        getLabelFromCoords: (x: number, y: number) => any;
        getMerge: (cellName: any) => any;
        getMeta: (cell: any, key: any) => any;
        getRowData: (rowNumber: number) => any;
        getSelectedColumns: () => any;
        getSelectedRows: (asIds?: boolean) => any;
        getStyle: (cell: any, key: any) => any;
        getValue: (cell: any, processedValue: any) => any;
        getValueFromCoords: (x: number, y: number, processedValue: any) => any;
        getWidth: (column: any) => any;
        hash: (str: any) => any;
        hashString: any;
        headerContainer: HTMLTableRowElement;
        headers: any;
        hideColumn: (colNumber: number) => any;
        hideIndex: () => any;
        highlighted: any[];
        history: ActionHistory;
        historyIndex: number;
        historyProcessColumn: (type: any, historyRecord: any) => any;
        historyProcessRow: (type: any, historyRecord: any) => any;
        ignoreEvents: boolean;
        ignoreHistory: boolean;
        init: () => any;
        /**
         * Insert a new column
         *
         * @param mixed - num of columns to be added or data to be added in one single column
         * @param int columnNumber - number of columns to be created
         * @param bool insertBefore
         * @param object properties - column properties
         * @return void
         */
        insertColumn: (mixed: any, columnNumber?: number, insertBefore?: boolean, properties?: object) => any;
        insertRow: (mixed?: any, rowNumber?: number, insertBefore?: boolean) => any;
        isColMerged: (x: number, insertBefore?: boolean) => any;
        isRowMerged: (y: number, insertBefore?: boolean) => any;
        last: (shiftKey: any, ctrlKey: any) => any;
        left: (shiftKey: any, ctrlKey: any) => any;
        loadDown: () => any;
        loadPage: (pageNumber: number) => any;
        loadUp: () => any;
        loadValidation: () => any;
        moveColumn: (o: any, d: any) => any;
        moveRow: (o: any, d: any, ignoreDom: any) => any;
        onafterchanges: (el: any, records: any) => any;
        openEditor: (cell: any, empty: any, e: any) => any;
        options: any;
        orderBy: (column: number, order?: 0 | 1) => any;
        page: (pageNumber: number) => any;
        pageNumber: any;
        pagination: HTMLDivElement;
        parseCSV: (str: string, delimiter?: string) => any;
        parseNumber: (value: number, columnNumber?: number) => number | null;
        paste: (x?: number, y?: number, data?: CellValue) => any;
        prepareTable: () => any;
        records: any;
        redo: () => any;
        refresh: () => any;
        refreshSelection: () => any;
        removeCopySelection: () => any;
        removeMerge: (cellName: any, data: any, keepOptions: any) => any;
        resetSearch: () => any;
        resetSelection: (blur: any) => any;
        resetStyle: (o: any, ignoreHistoryAndEvents: any) => any;
        resizing: any;
        results: any;
        right: (shiftKey: any, ctrlKey: any) => any;
        row: (cell: any) => any;
        rows: HTMLTableRowElement[];
        scrollControls: (e: any) => any;
        search: (query: any) => any;
        searchInput: HTMLInputElement;
        selectAll: () => any;
        selectedCell: any;
        selectedContainer: any;
        selection: any[];
        setCheckRadioValue: () => any;
        setColumnData: (colNumber: number, data?: any) => any;
        setComments: (cellId: any, comments: any, author: any) => any;
        setData: (data: any) => any;
        setHeader: (column: any, newValue: any) => any;
        setHeight: (row: any, height: any, oldHeight: any) => any;
        setHistory: (changes: any) => any;
        setMerge: (cellName: any, colspan: any, rowspan: any, ignoreHistoryAndEvents?: any) => any;
        setMeta: (o: any, k: any, v: any) => any;
        setRowData: (rowNumber: number, data: any) => any;
        setStyle: (o: any, k: any, v: any, force?: any, ignoreHistoryAndEvents?: any) => any;
        setValue: (cell: any, value: any, force: any) => any;
        setValueFromCoords: (x: number, y: number, value: any, force: any) => any;
        setWidth: (column: any, width: any, oldWidth: any) => any;
        showColumn: (colNumber: number) => any;
        showIndex: () => any;
        style: any[];
        table: HTMLTableElement;
        tbody: HTMLTableSectionElement;
        textarea: HTMLTextAreaElement;
        thead: HTMLTableHeaderCellElement;
        toolbar: HTMLDivElement;
        undo: () => any;
        up: (shiftKey: any, ctrlKey: any) => any;
        updateCell: (x: number, y: number, value?: CellValue, force?: any) => any;
        updateCopySelection: (x3: any, y3: any) => any;
        updateCornerPosition: () => any;
        updateFormula: (formula: any, referencesToUpdate: any) => any;
        updateFormulaChain: (x: any, y: any, records: any) => any;
        updateFormulas: (referencesToUpdate: any) => any;
        updateMeta: (affectedCells: any) => any;
        updateOrder: (rows: any) => any;
        updateOrderArrow: (column: any, order: any) => any;
        updatePagination: () => any;
        updateScroll: (direction: any) => any;
        updateSelection: (el1: any, el2: any, origin: any) => any;
        updateSelectionFromCoords: (x1: number, y1: number, x2: number, y2: number, origin: any) => any;
        updateTable: () => any;
        updateTableReferences: () => any;
        whichPage: (cell: any) => any;
    }

    interface JSpreadsheet {
        (element: HTMLDivElement, options?: Options): JSpreadsheetElement;

        //
        // Other helpers
        // ----------------------------------------------------------------------
        build: any;
        // tslint:disable-next-line ban-types
        contextMenuControls: Function;
        // tslint:disable-next-line ban-types
        copyControls: Function;
        createTabs: (element: HTMLDivElement, result: any[]) => void;
        current: any;
        // tslint:disable-next-line ban-types
        cutControls: Function;
        // tslint:disable-next-line ban-types
        destroy: Function;
        // tslint:disable-next-line ban-types
        doubleClickControls: Function;
        // tslint:disable-next-line ban-types
        doubleDigitFormat: Function;
        fromSpreadsheet: (result: any[]) => void;
        // tslint:disable-next-line ban-types
        getColumnName: Function;
        // tslint:disable-next-line ban-types
        getColumnNameFromId: Function;
        // tslint:disable-next-line ban-types
        getElement: Function;
        // tslint:disable-next-line ban-types
        getIdFromColumnName: Function;
        // tslint:disable-next-line ban-types
        injectArray: Function;
        isMouseAction: boolean;
        // tslint:disable-next-line ban-types
        keyDownControls: Function;
        methods: object;
        // tslint:disable-next-line ban-types
        mouseDownControls: Function;
        // tslint:disable-next-line ban-types
        mouseMoveControls: Function;
        // tslint:disable-next-line ban-types
        mouseOverControls: Function;
        // tslint:disable-next-line ban-types
        mouseUpControls: Function;
        // tslint:disable-next-line ban-types
        pasteControls: Function;
        tabs: (element: HTMLDivElement, options?: TabOptions[]) => number[];
        timeControl: any;
        timeControlLoading: any;
        // tslint:disable-next-line ban-types
        touchEndControls: Function;
        // tslint:disable-next-line ban-types
        touchStartControls: Function;
        // tslint:disable-next-line ban-types
        validLetter: Function;
    }
}
