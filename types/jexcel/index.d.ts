export = jexcel;
export as namespace jexcel;

declare const jexcel: jexcel.JExcel;

declare namespace jexcel {
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
        // eslint-disable-next-line @typescript-eslint/ban-types
        onchange?: Function | undefined;
        /** Events */
        // eslint-disable-next-line @typescript-eslint/ban-types
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

    interface ColumnEditor {
        // eslint-disable-next-line @typescript-eslint/ban-types
        closeEditor?: Function | undefined;
        // eslint-disable-next-line @typescript-eslint/ban-types
        getValue?: Function | undefined;
        // eslint-disable-next-line @typescript-eslint/ban-types
        openEditor?: Function | undefined;
        // eslint-disable-next-line @typescript-eslint/ban-types
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
        // eslint-disable-next-line @typescript-eslint/ban-types
        search?: Function | boolean | undefined;
        /**
         * Toggle table fullscreen mode or set fullscreen mode in initialization
         * @param boolean fullscreen - define fullscreen status as true or false
         * myTable.fullscreen([bool]);
         */
        // eslint-disable-next-line @typescript-eslint/ban-types
        fullscreen?: Function | boolean | undefined;
    }

    interface MethodsOptions {
        /**
         * remove column by number
         * @param integer columnNumber - Which column should be excluded starting on zero
         * @param integer numOfColumns - number of columns to be excluded from the reference column    myTable.deleteColumn([integer], [integer]);
         */
        // eslint-disable-next-line @typescript-eslint/ban-types
        deleteColumn?: Function | undefined;
        /**
         * remove row by number
         * @param integer rowNumber - Which row should be excluded starting on zero
         * @param integer numOfRows - number of lines to be excluded
         * myTable.deleteRow([integer], [integer]);
         */
        // eslint-disable-next-line @typescript-eslint/ban-types
        deleteRow?: Function | undefined;
        /** Destroy all merged cells    myTable.destroyMerge(); */
        // eslint-disable-next-line @typescript-eslint/ban-types
        destroyMerged?: Function | undefined;
        /**
         * get the current data as a CSV file
         * @param bool - true to download parsed formulas.
         * myTable.download([bool]);
         */
        // eslint-disable-next-line @typescript-eslint/ban-types
        download?: Function | undefined;
        /** get current cell DOM @param string columnName - str compatible with excel, or as object.    myTable.getCell([string]); */
        // eslint-disable-next-line @typescript-eslint/ban-types
        getCell?: Function | undefined;
        /** Get the data from one column by number @param integer columnNumber - Column number    myTable.getColumnData([int]); */
        // eslint-disable-next-line @typescript-eslint/ban-types
        getColumnData?: Function | undefined;
        /** get cell comments @param mixed - cell identification or null for the whole table.    myTable.getComments([string]); */
        // eslint-disable-next-line @typescript-eslint/ban-types
        getComments?: Function | undefined;
        /** get table definitions    myTable.getConfig(); */
        // eslint-disable-next-line @typescript-eslint/ban-types
        getConfig?: Function | undefined;
        /** Get the full or partial table data @param boolean onlyHighlighedCells - Get only highlighted cells    myTable.getData([bool]); */
        // eslint-disable-next-line @typescript-eslint/ban-types
        getData?: Function | undefined;
        /** get the current header by column number @param integer columnNumber - Column number starting on zero    myTable.getHeader([integer]); */
        // eslint-disable-next-line @typescript-eslint/ban-types
        getHeader?: Function | undefined;
        /** get all header titles    myTable.getHeaders(); */
        // eslint-disable-next-line @typescript-eslint/ban-types
        getHeaders?: Function | undefined;
        /** get the current row height @param integer rowNumber - row number starting on zero    myTable.getHeight([integer]); */
        // eslint-disable-next-line @typescript-eslint/ban-types
        getHeight?: Function | undefined;
        /** Get the full or partial table data in JSON format @param boolean onlyHighlighedCells - Get only highlighted cells    myTable.getData([bool]); */
        // eslint-disable-next-line @typescript-eslint/ban-types
        getJson?: Function | undefined;
        /** get current cell DOM innerHTML @param string columnName - str compatible with excel, or as object.    myTable.getLabel([string]); */
        // eslint-disable-next-line @typescript-eslint/ban-types
        getLabel?: Function | undefined;
        /** Get merged cells properties @param string columnName - Column name, such as A1.    myTable.getMerge([string]); */
        // eslint-disable-next-line @typescript-eslint/ban-types
        getMerge?: Function | undefined;
        /** get the table or cell meta information @param mixed - cell identification or null for the whole table.    myTable.getMeta([string]); */
        // eslint-disable-next-line @typescript-eslint/ban-types
        getMeta?: Function | undefined;
        /** Get the data from one row by number @param integer rowNumber - Row number    myTable.getRowData([int]); */
        // eslint-disable-next-line @typescript-eslint/ban-types
        getRowData?: Function | undefined;
        /** Get the selected columns @param boolean asIds - Get the colNumbers or row DOM elements    myTable.getSelectedColumns([bool]); */
        // eslint-disable-next-line @typescript-eslint/ban-types
        getSelectedColumns?: Function | undefined;
        /** Get the selected rows @param boolean asIds - Get the rowNumbers or row DOM elements    myTable.getSelectedRows([bool]); */
        // eslint-disable-next-line @typescript-eslint/ban-types
        getSelectedRows?: Function | undefined;
        /** get table or cell style @param mixed - cell identification or null for the whole table.    myTable.getStyle([string])); */
        // eslint-disable-next-line @typescript-eslint/ban-types
        getStyle?: Function | undefined;
        /** get current cell value @param mixed cellIdent - str compatible with excel, or as object.    myTable.getValue([string]); */
        // eslint-disable-next-line @typescript-eslint/ban-types
        getValue?: Function | undefined;
        /** get value from coords @param integer x @param integer y myTable.getValueFromCoords([integer], [integer]); */
        // eslint-disable-next-line @typescript-eslint/ban-types
        getValueFromCoords?: Function | undefined;
        /** get the current column width @param integer columnNumber - column number starting on zero    myTable.getWidth([integer]); */
        // eslint-disable-next-line @typescript-eslint/ban-types
        getWidth?: Function | undefined;
        /** hide column by number    myTable.hideColumn([int]); */
        // eslint-disable-next-line @typescript-eslint/ban-types
        hideColumn?: Function | undefined;
        /** hide column of index numbers    myTable.hideIndex(); */
        // eslint-disable-next-line @typescript-eslint/ban-types
        hideIndex?: Function | undefined;
        /**
         * add a new column
         * @param mixed - num of columns to be added or data to be added in one single column
         * @param int columnNumber - number of columns to be created
         * @param boolean insertBefore
         * @param object properties - column properties
         * myTable.insertColumn([mixed], [integer], [boolean], [object]);
         */
        // eslint-disable-next-line @typescript-eslint/ban-types
        insertColumn?: Function | undefined;
        /**
         * add a new row
         * @param mixed - number of blank lines to be insert or a single array with the data of the new row
         * @param integer rowNumber - reference row number
         * @param boolean insertBefore
         * myTable.insertRow([mixed], [integer], [boolean]);
         */
        // eslint-disable-next-line @typescript-eslint/ban-types
        insertRow?: Function | undefined;
        /**
         * change the column position
         * @param integer columnPosition
         * @param integer newColumnPosition
         * myTable.moveColumn([integer], [integer]);
         */
        // eslint-disable-next-line @typescript-eslint/ban-types
        moveColumn?: Function | undefined;
        /**
         * change the row position
         * @param integer rowPosition
         * @param integer newRowPosition
         * myTable.moveRow([integer], [integer]);
         */
        // eslint-disable-next-line @typescript-eslint/ban-types
        moveRow?: Function | undefined;
        /**
         * reorder a column asc or desc
         * @param integer columnNumber - column number starting on zero
         * @param smallint sortType - One will order DESC, zero will order ASC, anything else will toggle the current order
         * myTable.orderBy([integer], [boolean]);
         */
        // eslint-disable-next-line @typescript-eslint/ban-types
        orderBy?: Function | undefined;
        /** Go to page number- Valid only when pagination is true. @param integer - Go to page number    myTable.page([integer]); */
        // eslint-disable-next-line @typescript-eslint/ban-types
        page?: Function | undefined;
        /** Redo changes    myTable.redo(); */
        // eslint-disable-next-line @typescript-eslint/ban-types
        redo?: Function | undefined;
        /** Destroy merged by column name @param string columnName - Column name, such as A1.    myTable.removeMerge([string]); */
        // eslint-disable-next-line @typescript-eslint/ban-types
        removeMerge?: Function | undefined;
        /** reset search table    myTable.resetSearch(); */
        // eslint-disable-next-line @typescript-eslint/ban-types
        resetSearch?: Function | undefined;
        /** Reset the table selection @param boolean executeBlur - execute the blur from the table myTable.resetSelection([bool]); */
        // eslint-disable-next-line @typescript-eslint/ban-types
        resetSelection?: Function | undefined;
        /** remove all style from a cell @param string columnName - Column name, example: A1, B3, etc    myTable.resetStyle([string]); */
        // eslint-disable-next-line @typescript-eslint/ban-types
        resetStyle?: Function | undefined;
        /** Set the data from one column by number @param integer columnNumber - Column number @param array colData - Column data    myTable.setColumnData([int], [array]); */
        // eslint-disable-next-line @typescript-eslint/ban-types
        setColumnData?: Function | undefined;
        /** set cell comments @param cell - cell identification @param text - comments    myTable.setComments([string], [string]); */
        // eslint-disable-next-line @typescript-eslint/ban-types
        setComments?: Function | undefined;
        /** Set the table data @param json newData - New json data, null will reload what is in memory.    myTable.setData([json]); */
        // eslint-disable-next-line @typescript-eslint/ban-types
        setData?: Function | undefined;
        /** change header by column @param integer columnNumber - column number starting on zero @param string columnTitle - New header title    myTable.setHeader([integer], [string]); */
        // eslint-disable-next-line @typescript-eslint/ban-types
        setHeader?: Function | undefined;
        /** change row height @param integer rowNumber - row number starting on zero @param string newRowHeight- New row height    myTable.setHeight([integer], [integer]); */
        // eslint-disable-next-line @typescript-eslint/ban-types
        setHeight?: Function | undefined;
        /**
         * Merge cells
         * @param string columnName - Column name, such as A1.
         * @param integer colspan - Number of columns
         * @param integer rowspan - Number of rows
         * myTable.setMerge([string], [int], [int]);
         */
        // eslint-disable-next-line @typescript-eslint/ban-types
        setMerge?: Function | undefined;
        /** set the table or cell meta information @param mixed - json with whole table meta information.    myTable.setMeta[mixed]); */
        // eslint-disable-next-line @typescript-eslint/ban-types
        setMeta?: Function | undefined;
        /**
         * Set the data from one row by number
         * @param integer rowNumber - Row number
         * @param array rowData - Row data
         * myTable.setRowData([int], [array]);
         */
        // eslint-disable-next-line @typescript-eslint/ban-types
        setRowData?: Function | undefined;
        /**
         * set cell(s) CSS style
         * @param mixed - json with whole table style information or just one cell identification. Ex. A1.
         * @param k [optional]- CSS key
         * @param v [optional]- CSS value
         * myTable.setSyle([object], [string], [string]);
         */
        // eslint-disable-next-line @typescript-eslint/ban-types
        setStyle?: Function | undefined;
        /**
         * change the cell value
         * @param mixed cellIdent - str compatible with excel, or as object.
         * @param string Value - new value for the cell
         * @param bool force - update readonly columns
         * myTable.setValue([string], [string], [bool]);
         */
        // eslint-disable-next-line @typescript-eslint/ban-types
        setValue?: Function | undefined;
        /**
         * get value from coords
         * @param integer x
         * @param integer y
         * @param string Value - new value for the cell
         * @param bool force - update readonly columns
         * myTable.getValueFromCoords([integer], [integer], [string], [bool]);
         */
        // eslint-disable-next-line @typescript-eslint/ban-types
        setValueFromCoords?: Function | undefined;
        /**
         * change column width
         * @param integer columnNumber - column number starting on zero
         * @param string newColumnWidth - New column width
         * myTable.setWidth([integer], [integer]);
         */
        // eslint-disable-next-line @typescript-eslint/ban-types
        setWidth?: Function | undefined;
        /** show column by number    myTable.showIndex([int]); */
        // eslint-disable-next-line @typescript-eslint/ban-types
        showColumn?: Function | undefined;
        /** show column of index numbers    myTable.showIndex(); */
        // eslint-disable-next-line @typescript-eslint/ban-types
        showIndex?: Function | undefined;
        /** Undo last changes    myTable.undo(); */
        // eslint-disable-next-line @typescript-eslint/ban-types
        undo?: Function | undefined;
        /**
         * select cells
         * @param object startCell - cell object
         * @param object endCell - cell object
         * @param boolean ignoreEvents - ignore onselection event
         * myTable.updateSelection([cell], [cell], true);
         */
        // eslint-disable-next-line @typescript-eslint/ban-types
        updateSelection?: Function | undefined;
        /** select cells @param integer x1 @param integer y1 @param integer x2 @param integer y2    myTable.updateSelectionFromCoords([integer], [integer], [integer], [integer]); */
        // eslint-disable-next-line @typescript-eslint/ban-types
        updateSelectionFromCoords?: Function | undefined;
        /** Which page showing on jExcel - Valid only when pagination is true.    myTable.whichPage(); */
        // eslint-disable-next-line @typescript-eslint/ban-types
        whichPage?: Function | undefined;
    }

    interface EventsOptions {
        /** After all changes are applied in the table. */
        // eslint-disable-next-line @typescript-eslint/ban-types
        onafterchanges?: Function | undefined;
        /** Before a column value is changed. NOTE: It is possible to overwrite the original value, by return a new value on this method. v3.4.0+ */
        // eslint-disable-next-line @typescript-eslint/ban-types
        onbeforechange?: Function | undefined;
        /** Before a column is excluded. You can cancel the insert event by returning false. */
        // eslint-disable-next-line @typescript-eslint/ban-types
        onbeforedeletecolumn?: Function | undefined;
        /** Before a row is deleted. You can cancel the delete event by returning false. */
        // eslint-disable-next-line @typescript-eslint/ban-types
        onbeforedeleterow?: Function | undefined;
        /** Before a new column is inserted. You can cancel the insert event by returning false. */
        // eslint-disable-next-line @typescript-eslint/ban-types
        onbeforeinsertcolumn?: Function | undefined;
        /** Before a new row is inserted. You can cancel the insert event by returning false. */
        // eslint-disable-next-line @typescript-eslint/ban-types
        onbeforeinsertrow?: Function | undefined;
        /** Before the paste action is performed. Used to parse any input data, should return the data. */
        // eslint-disable-next-line @typescript-eslint/ban-types
        onbeforepaste?: Function | undefined;
        /** On table blur */
        // eslint-disable-next-line @typescript-eslint/ban-types
        onblur?: Function | undefined;
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
        // eslint-disable-next-line @typescript-eslint/ban-types
        onchangeheader?: Function | undefined;
        /** When a setMeta is called. */
        // eslint-disable-next-line @typescript-eslint/ban-types
        onchangemeta?: Function | undefined;
        /** When the page is changed. */
        // eslint-disable-next-line @typescript-eslint/ban-types
        onchangepage?: Function | undefined;
        /** When a setStyle is called. */
        // eslint-disable-next-line @typescript-eslint/ban-types
        onchangestyle?: Function | undefined;
        /** After a column is excluded. */
        // eslint-disable-next-line @typescript-eslint/ban-types
        ondeletecolumn?: Function | undefined;
        /** After a row is excluded. */
        // eslint-disable-next-line @typescript-eslint/ban-types
        ondeleterow?: Function | undefined;
        /** When a closeEditor is called. */
        // eslint-disable-next-line @typescript-eslint/ban-types
        oneditionend?: Function | undefined;
        /** When a openEditor is called. */
        // eslint-disable-next-line @typescript-eslint/ban-types
        oneditionstart?: Function | undefined;
        /** On table focus */
        // eslint-disable-next-line @typescript-eslint/ban-types
        onfocus?: Function | undefined;
        /** After a new column is inserted. */
        // eslint-disable-next-line @typescript-eslint/ban-types
        oninsertcolumn?: Function | undefined;
        /** After a new row is inserted. */
        // eslint-disable-next-line @typescript-eslint/ban-types
        oninsertrow?: Function | undefined;
        /** This method is called when the method setData */
        // eslint-disable-next-line @typescript-eslint/ban-types
        onload?: Function | undefined;
        /** On column merge */
        // eslint-disable-next-line @typescript-eslint/ban-types
        onmerge?: Function | undefined;
        /** After a column is moved to a new position. */
        // eslint-disable-next-line @typescript-eslint/ban-types
        onmovecolumn?: Function | undefined;
        /** After a row is moved to a new position. */
        // eslint-disable-next-line @typescript-eslint/ban-types
        onmoverow?: Function | undefined;
        /** After a paste action is performed in the javascript table. */
        // eslint-disable-next-line @typescript-eslint/ban-types
        onpaste?: Function | undefined;
        /** On redo is applied */
        // eslint-disable-next-line @typescript-eslint/ban-types
        onredo?: Function | undefined;
        /** After a change in column width. */
        // eslint-disable-next-line @typescript-eslint/ban-types
        onresizecolumn?: Function | undefined;
        /** After a change in row height. */
        // eslint-disable-next-line @typescript-eslint/ban-types
        onresizerow?: Function | undefined;
        /** On the selection is changed. */
        // eslint-disable-next-line @typescript-eslint/ban-types
        onselection?: Function | undefined;
        /** After a colum is sorted. */
        // eslint-disable-next-line @typescript-eslint/ban-types
        onsort?: Function | undefined;
        /** On undo is applied */
        // eslint-disable-next-line @typescript-eslint/ban-types
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
        // eslint-disable-next-line @typescript-eslint/ban-types
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
     * @see https://bossanova.uk/jexcel/v4/docs/quick-reference
     */
    type Options =
        & SharedMethodsInitializationOptions
        & MethodsOptions
        & EventsOptions
        & InitializationOptions
        & TranslationsOptions
        & UnDocumentOptions;

    interface ActionHistory {
        action: string;
        insertBefore: boolean;
        numOfRows: number;
        rowData: CellValue[];
        rowNode: HTMLTableRowElement[];
        rowNumber: number;
        rowRecords: HTMLTableDataCellElement[];
    }

    interface JExcelElement {
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

    interface JExcel {
        (element: HTMLDivElement, options?: Options): JExcelElement;

        //
        // Other helpers
        // ----------------------------------------------------------------------
        build: any;
        // eslint-disable-next-line @typescript-eslint/ban-types
        contextMenuControls: Function;
        // eslint-disable-next-line @typescript-eslint/ban-types
        copyControls: Function;
        createTabs: (element: HTMLDivElement, result: any[]) => void;
        current: any;
        // eslint-disable-next-line @typescript-eslint/ban-types
        cutControls: Function;
        // eslint-disable-next-line @typescript-eslint/ban-types
        destroy: Function;
        // eslint-disable-next-line @typescript-eslint/ban-types
        doubleClickControls: Function;
        // eslint-disable-next-line @typescript-eslint/ban-types
        doubleDigitFormat: Function;
        fromSpreadsheet: (result: any[]) => void;
        // eslint-disable-next-line @typescript-eslint/ban-types
        getColumnName: Function;
        // eslint-disable-next-line @typescript-eslint/ban-types
        getColumnNameFromId: Function;
        // eslint-disable-next-line @typescript-eslint/ban-types
        getElement: Function;
        // eslint-disable-next-line @typescript-eslint/ban-types
        getIdFromColumnName: Function;
        // eslint-disable-next-line @typescript-eslint/ban-types
        injectArray: Function;
        isMouseAction: boolean;
        // eslint-disable-next-line @typescript-eslint/ban-types
        keyDownControls: Function;
        methods: object;
        // eslint-disable-next-line @typescript-eslint/ban-types
        mouseDownControls: Function;
        // eslint-disable-next-line @typescript-eslint/ban-types
        mouseMoveControls: Function;
        // eslint-disable-next-line @typescript-eslint/ban-types
        mouseOverControls: Function;
        // eslint-disable-next-line @typescript-eslint/ban-types
        mouseUpControls: Function;
        // eslint-disable-next-line @typescript-eslint/ban-types
        pasteControls: Function;
        timeControl: any;
        timeControlLoading: any;
        // eslint-disable-next-line @typescript-eslint/ban-types
        touchEndControls: Function;
        // eslint-disable-next-line @typescript-eslint/ban-types
        touchStartControls: Function;
        // eslint-disable-next-line @typescript-eslint/ban-types
        validLetter: Function;
    }
}
