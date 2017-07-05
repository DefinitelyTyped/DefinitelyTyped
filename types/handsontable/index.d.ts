// Type definitions for Handsontable 0.31
// Project: https://handsontable.com/
// Definitions by: Handsoncode sp. z o.o. <http://handsoncode.net/>, Ryan Riley <https://github.com/panesofglass>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped\

declare namespace __Handsontable {
    // The Core class is used inside the Handsontable namespace in the actual source code.
    // However, there is a resolution issue when a class outside a namespace or module
    // extends a class inside a module with the same name. That issue includes a work-around.
    // Using the workaround found here: https://github.com/Microsoft/TypeScript/issues/3602

    class Core {
        constructor(element: Element, options: Handsontable.Options);
        addHook(key: string, callback: Function|any[]): void;
        addHookOnce(key: string, callback: Function|any[]): void;
        alter(action: string, index: number, amount?: number, source?: string, keepEmptyRows?: boolean): void;
        clear(): void;
        colOffset(): number;
        colToProp(col: number): string|number;
        countCols(): number;
        countEmptyCols(ending?: boolean): number;
        countEmptyRows(ending?: boolean): number;
        countRenderedCols(): number;
        countRenderedRows(): number;
        countRows(): number;
        countSourceRows(): number;
        countVisibleCols(): number;
        countVisibleRows(): number;
        deselectCell(): void;
        destroy(): void;
        destroyEditor(revertOriginal?: boolean): void;
        getActiveEditor(): Object;
        getCell(row: number, col: number, topmost?: boolean): Element;
        getCellEditor(row: number, col: number): Object;
        getCellMeta(row: number, col: number): Object;
        getCellRenderer(row: number, col: number): Function;
        getCellValidator(row: number, col: number): any;
        getColHeader(col?: number): any[]|string;
        getColWidth(col: number): number;
        getCoords(elem: Element): Object;
        getCopyableData(row: number, column: number): string;
        getCopyableText(startRow: number, startCol: number, endRow: number, endCol: number): string;
        getData(r?: number, c?: number, r2?: number, c2?: number): any[];
        getDataAtCell(row: number, col: number): any;
        getDataAtCol(col: number): any[];
        getDataAtProp(prop: string|number): any[];
        getDataAtRow(row: number): any[];
        getDataAtRowProp(row: number, prop: string): any;
        getDataType(rowFrom: number, columnFrom: number, rowTo: number, columnTo: number): string;
        getInstance(): any;
        getPlugin(pluginName: string): any;
        getRowHeader(row?: number): any[]|string;
        getRowHeight(row: number): number;
        getSchema(): Object;
        getSelected(): any[];
        getSelectedRange(): Handsontable.Range;
        getSettings(): Handsontable.Options;
        getSourceData(r?: number, c?: number, r2?: number, c2?: number): any[];
        getSourceDataAtCell(row: number, column: number): any;
        getSourceDataAtCol(column: number): any[];
        getSourceDataAtRow(row: number): any[]|Object;
        getValue(): any;
        hasColHeaders(): boolean;
        hasHook(key: string): boolean;
        hasRowHeaders(): boolean;
        isEmptyCol(col: number): boolean;
        isEmptyRow(row: number): boolean;
        isListening(): boolean;
        listen(): void;
        loadData(data: any[]): void;
        populateFromArray(row: number, col: number, input: any[], endRow?: number, endCol?: number, source?: string, method?: string, direction?: string, deltas?: any[]): any;
        propToCol(prop: string | number): number;
        removeCellMeta(row: number, col: number, key: string): void;
        removeHook(key: string, callback: Function): void;
        render(): void;
        rowOffset(): number;
        runHooks(key: string, p1?: any, p2?: any, p3?: any, p4?: any, p5?: any, p6?: any): any;
        selectCell(row: number, col: number, endRow?: number, endCol?: number, scrollToCell?: boolean, changeListener?: boolean): boolean;
        selectCellByProp(row: number, prop: string, endRow?: number, endProp?: string, scrollToCell?: boolean): boolean;
        setCellMeta(row: number, col: number, key: string, val: string): void;
        setCellMetaObject(row: number, col: number, prop: Object): void;
        setDataAtCell(row: number, col: number, value: string, source?: string): void;
        setDataAtCell(changes: Array<[number, number, any]>): void;
        setDataAtRowProp(row: number|any[], prop: string, value: string, source?: string): void;
        spliceCol(col: number, index: number, amount: number, elements?: any): void;
        spliceRow(row: number, index: number, amount: number, elements?: any): void;
        toPhysicalRow(row: number): number;
        toPhysicalColumn(column: number): number;
        toVisualRow(row: number): number;
        toVisualColumn(column: number): number;
        unlisten(): void;
        updateSettings(settings: Object, init?: boolean): void;
        validateCells(callback: Function): void;
    }
}

declare namespace Handsontable {
    interface Options {
        allowEmpty?: boolean;
        allowInsertColumn?: boolean;
        allowInsertRow?: boolean;
        allowInvalid?: boolean;
        allowRemoveColumn?: boolean;
        allowRemoveRow?: boolean;
        autoColumnSize?: Object|boolean;
        autoComplete?: any[];
        autoRowSize?: Object|boolean;
        autoWrapCol?: boolean;
        autoWrapRow?: boolean;
        bindRowsWithHeaders?: boolean|string;
        cell?: any[];
        cells?: Function;
        checkedTemplate?: boolean|string;
        className?: string|any[];
        colHeaders?: boolean|any[]|Function;
        collapsibleColumns?: boolean|any[];
        columnHeaderHeight?: number|any[];
        columns?: any[];
        columnSorting?: boolean|Object;
        columnSummary?: Object;
        colWidths?: any[]|Function|number|string;
        commentedCellClassName?: string;
        comments?: boolean|any[];
        contextMenu?: boolean|any[]|Object;
        contextMenuCopyPaste?: Object;
        copyable?: boolean;
        copyColsLimit?: number;
        copyPaste?: boolean;
        copyRowsLimit?: number;
        correctFormat?: boolean;
        currentColClassName?: string;
        currentRowClassName?: string;
        customBorders?: boolean|any[];
        data?: any[]|Function;
        dataSchema?: Object;
        dateFormat?: string;
        debug?: boolean;
        defaultDate?: string;
        disableVisualSelection?: boolean|string|any[];
        dropdownMenu?: boolean|Object|any[];
        editor?: string|Function|boolean;
        enterBeginsEditing?: boolean;
        enterMoves?: Object|Function;
        fillHandle?: boolean|string|Object;
        filter?: boolean;
        filteringCaseSensitive?: boolean;
        filters?: boolean;
        fixedColumnsLeft?: number;
        fixedRowsBottom?: number;
        fixedRowsTop?: number;
        format?: string;
        fragmentSelection?: boolean|string;
        ganttChart?: Object;
        headerTooltips?: boolean|Object;
        height?: number|Function;
        hiddenColumns?: boolean|Object;
        hiddenRows?: boolean|Object;
        invalidCellClassName?: string;
        label?: Object;
        language?: string;
        manualColumnFreeze?: boolean;
        manualColumnMove?: boolean|any[];
        manualColumnResize?: boolean|any[];
        manualRowMove?: boolean|any[];
        manualRowResize?: boolean|any[];
        maxCols?: number;
        maxRows?: number;
        mergeCells?: boolean|any[];
        minCols?: number;
        minRows?: number;
        minSpareCols?: number;
        minSpareRows?: number;
        multiSelect?: boolean;
        nestedHeaders?: any[];
        noWordWrapClassName?: string;
        observeChanges?: boolean;
        observeDOMVisibility?: boolean;
        outsideClickDeselects?: boolean;
        pasteMode?: string;
        persistentState?: boolean;
        placeholder?: any;
        placeholderCellClassName?: string;
        preventOverflow?: string|boolean;
        readOnly?: boolean;
        readOnlyCellClassName?: string;
        renderAllRows?: boolean;
        renderer?: string|Function;
        rowHeaders?: boolean|any[]|Function;
        rowHeaderWidth?: number|any[];
        rowHeights?: any[]|Function|number|string;
        search?: boolean;
        selectOptions?: any[];
        skipColumnOnPaste?: boolean;
        sortByRelevance?: boolean;
        sortFunction?: Function;
        sortIndicator?: boolean;
        source?: any[]|Function;
        startCols?: number;
        startRows?: number;
        stretchH?: string;
        strict?: boolean;
        tableClassName?: string|any[];
        tabMoves?: Object;
        title?: string;
        trimDropdown?: boolean;
        trimWhitespace?: boolean;
        type?: string;
        uncheckedTemplate?: boolean|string;
        undo?: boolean;
        validator?: Function|RegExp;
        viewportColumnRenderingOffset?: number|string;
        viewportRowRenderingOffset?: number|string;
        visibleRows?: number;
        width?: number|Function;
        wordWrap?: boolean;
        isEmptyCol?(col: number): boolean;
        isEmptyRow?(row: number): boolean;

        // hooks
        afterAutofillApplyValues?(startArea: any[], entireArea: any[]): void;
        afterCellMetaReset?(): void;
        afterChange?(changes: Array<[number, number|string, any, any]>, source?: string): void;
        afterChangesObserved?(): void;
        afterColumnMove?(startColumn: number, endColumn: number): void;
        afterColumnResize?(currentColumn: number, newSize: number, isDoubleClick: boolean): void;
        afterColumnSort?(column: number, order: boolean): void;
        afterContextMenuDefaultOptions?(predefinedItems: any[]): void;
        afterContextMenuHide?(context: Object): void;
        afterContextMenuShow?(context: Object): void;
        afterCopyLimit?(selectedRows: number, selectedColumnds: number, copyRowsLimit: number, copyColumnsLimit: number): void;
        afterCreateCol?(index: number, amount: number): void;
        afterCreateRow?(index: number, amount: number): void;
        afterDeselect?(): void;
        afterDestroy?(): void;
        afterDocumentKeyDown?(event: Event): void;
        afterFilter?(formulasStack: any[]): void;
        afterGetCellMeta?(row: number, col: number, cellProperties: Object): void;
        afterGetColHeader?(col: number, TH: Element): void;
        afterGetColumnHeaderRenderers?(array: any[]): void;
        afterGetRowHeader?(row: number, TH: Element): void;
        afterGetRowHeaderRenderers?(array: any[]): void;
        afterInit?(): void;
        afterLoadData?(firstTime: boolean): void;
        afterMomentumScroll?(): void;
        afterOnCellCornerDblClick?(event: Object): void;
        afterOnCellCornerMouseDown?(event: Object): void;
        afterOnCellMouseDown?(event: Object, coords: Object, TD: Element): void;
        afterOnCellMouseOver?(event: Object, coords: Object, TD: Element): void;
        afterRemoveCol?(index: number, amount: number): void;
        afterRemoveRow?(index: number, amount: number): void;
        afterRender?(isForced: boolean): void;
        afterRenderer?(TD: Element, row: number, col: number, prop: string|number, value: string, cellProperties: Object): void;
        afterRowMove?(startRow: number, endRow: number): void;
        afterRowResize?(currentRow: number, newSize: number, isDoubleClick: boolean): void;
        afterScrollHorizontally?(): void;
        afterScrollVertically?(): void;
        afterSelection?(r: number, c: number, r2: number, c2: number): void;
        afterSelectionByProp?(r: number, p: string, r2: number, p2: string): void;
        afterSelectionEnd?(r: number, c: number, r2: number, c2: number): void;
        afterSelectionEndByProp?(r: number, p: string, r2: number, p2: string): void;
        afterSetCellMeta?(row: number, col: number, key: string, value: any): void;
        afterUpdateSettings?(): void;
        afterValidate?(isValid: boolean, value: any, row: number, prop: string|number, source: string): void|boolean;
        beforeAutofill?(start: Object, end: Object, data: any[]): void;
        beforeCellAlignment?(stateBefore: any, range: any, type: string, alignmentClass: string): void;
        beforeChange?(changes: any[], source: string): void;
        beforeChangeRender?(changes: any[], source: string): void;
        beforeColumnMove?(startColumn: number, endColumn: number): void;
        beforeColumnResize?(currentColumn: number, newSize: number, isDoubleClick: boolean): void;
        beforeColumnSort?(column: number, order: boolean): void;
        beforeDrawBorders?(corners: any[], borderClassName: string): void;
        beforeFilter?(formulasStack: any[]): void;
        beforeGetCellMeta?(row: number, col: number, cellProperties: Object): void;
        beforeInit?(): void;
        beforeInitWalkontable?(walkontableConfig: Object): void;
        beforeKeyDown?(event: Event): void;
        beforeOnCellMouseDown?(event: Event, coords: Object, TD: Element): void;
        beforeRemoveCol?(index: number, amount: number, logicalCols?: any[]): void;
        beforeRemoveRow?(index: number, amount: number, logicalRows?: any[]): void;
        beforeRender?(isForced: boolean): void;
        beforeRenderer?(TD: Element, row: number, col: number, prop: string|number, value: string, cellProperties: Object): void;
        beforeRowMove?(startRow: number, endRow: number): void;
        beforeRowResize?(currentRow: number, newSize: number, isDoubleClick: boolean): any;
        beforeSetRangeEnd?(coords: any[]): void;
        beforeStretchingColumnWidth?(stretchedWidth: number, column: number): void;
        beforeTouchScroll?(): void;
        beforeValidate?(value: any, row: number, prop: string|number, source: string): void;
        construct?(): void;
        init?(): void;
        modifyCol?(col: number): void;
        modifyColHeader?(column: number): void;
        modifyColWidth?(width: number, col: number): void;
        modifyCopyableRange?(copyableRanges: any[]): void;
        modifyRow?(row: number): void;
        modifyRowHeader?(row: number): void;
        modifyRowHeight?(height: number, row: number): void;
        persistentStateLoad?(key: string, valuePlaceholder: Object): void;
        persistentStateReset?(key: string): void;
        persistentStateSave?(key: string, value: any): void;
        unmodifyCol?(col: number): void;
    }

    class Core extends __Handsontable.Core {
    }

    interface Selection {
        start: CellPosition;
        end: CellPosition;
    }

    interface Range {
        from: CellPosition;
        to: CellPosition;
    }

    interface HandsontableRegisterer {
        getInstance(id: string): Core;
        registerInstance(id: string, instance: Core): void;
        removeInstance(id: string): void;
    }

    interface ColumnProperties extends CellProperties {
        data?: string | number;
        title?: string;
        editor?: string | EditorConstructor;
        selectOptions?: any[];
        width?: number;
    }

    interface CellProperties {
        renderer?: CellRenderer;
        type?: string;
        readOnly?: boolean;
        language?: string;
        format?: string;
        validator?: Validator;
        allowInvalid?: boolean;
        className?: string;
    }

    interface CellPosition {
        row: number;
        col: number;
    }

    // so that you can write custom plugins in typescript
    interface BasePlugin {
        init(): void;
        enablePlugin(): void;
        disablePlugin(): void;
        addHook(name: string, callback: Function): void;
        removeHooks(name: string): void;
        clearHooks(): void;
        callOnPluginsReady(callback: Function): void;
        updatePlugin(): void;
        destroy(): void;
        enabled: boolean;
        hot: Core;
    }

    interface PluginConstructor {
        new (hotInstance: Core): BasePlugin;
    }

    interface ContextMenuPluginConstructor extends PluginConstructor {
        SEPARATOR: string;
    }

    interface Plugins {
        AutoColumnSize: PluginConstructor;
        AutoRowSizeAutoRowSize: PluginConstructor;
        BasePlugin: PluginConstructor;
        BindRowsWithHeaders: PluginConstructor;
        CollapsibleColumns: PluginConstructor;
        ColumnSorting: PluginConstructor;
        ColumnSummary: PluginConstructor;
        Comments: PluginConstructor;
        ContextMenu: ContextMenuPluginConstructor;
        ContextMenuCopyPaste: PluginConstructor;
        DragToScroll: PluginConstructor;
        DropdownMenu: PluginConstructor;
        ExportFile: PluginConstructor;
        Filters: PluginConstructor;
        Formulas: PluginConstructor;
        GanttChart: PluginConstructor;
        HeaderTooltips: PluginConstructor;
        HiddenColumns: PluginConstructor;
        HiddenRows: PluginConstructor;
        ManualColumnFreeze: PluginConstructor;
        ManualColumnMove: PluginConstructor;
        ManualColumnResize: PluginConstructor;
        ManualRowMove: PluginConstructor;
        ManualRowResize: PluginConstructor;
        MultipleSelectionHandles: PluginConstructor;
        NestedHeaders: PluginConstructor;
        NestedRows: PluginConstructor;
        ObserveChanges: PluginConstructor;
        TouchScroll: PluginConstructor;
        TrimRows: PluginConstructor;
        registerPlugin(pluginName: string, PluginClass: PluginConstructor): void;
    }

    interface Hooks {
        register(key: string): void;
        run(instace: Core, hookName: string, key?: any, value?: any): any;
    }

    interface Dom {
        addEvent(element: HTMLElement, eventName: string, callback: Function): void;
        addClass(element: HTMLElement, className: string | string[]): void;
        removeClass(element: HTMLElement, className: string | string[]): void;
        offset(element: HTMLElement): any;
        getWindowScrollLeft(): number;
        getWindowScrollTop(): number;
        outerHeight(element: HTMLElement): number;
        hasClass(element: HTMLElement, className: string): boolean | undefined;
        empty(element: HTMLElement): void;
    }

    interface ArrayMapper {
        clearMap(): void;
        getIndexByValue(value: any): number;
        getValueByIndex(index: number): any;
        insertItems(index: number, amount?: number): number[];
        removeItems(index: number | number[], amount?: number): number[];
        unshiftItems(index: number | number[], amount?: number): void;
        shiftItems(index: number, amount?: number): void;
    }

    interface Utils {
        arrayMapper: ArrayMapper;
    }

    interface Helper {
        arrayFilter(array: any[], predicate: Function): any[];
        arrayEach(array: any[], predicate: Function): void;
        arrayMap(array: any[], predicate: Function): any[];
        arrayReduce(array: any[], predicate: Function, initialValue?: any): any;
        objectEach(obj: any, predicate: Function): void;
        rangeEach(rangeFrom: number, rangeTo: number | Function, iteratee?: Function): void;
        mixin(Base: any, ...mixins: any[]): void;
        isNumeric(number: any): boolean;
        createSpreadsheetData(rows: number, columns: number): any;
    }

    type CellRenderer = (
            instance: Core,
            td: HTMLTableCellElement,
            row: number,
            col: number,
            prop: string,
            value: any,
            cellProperties: any) => void;

    interface Editor {
        open(): void;
    }

    interface EditorConstructor {
        new (instance: Core): Editor;
    }

    interface Editors {
        TextEditor: EditorConstructor;
    }

    type Validator = (value: any, callback: (condition: boolean) => void) => void;

    interface Renderers {
        TextRenderer: CellRenderer;
        NumericRenderer: CellRenderer;
        AutocompleteRenderer: CellRenderer;
    }

    type AsyncAutocompleteSourceFunction = (query: string, process: (values: any[]) => void) => void;

    interface AutocompleteColumn extends ColumnProperties {
        source?: any[] | AsyncAutocompleteSourceFunction;
        strict?: boolean;
        trimDropdown?: boolean;
    }

    interface DateColumn extends ColumnProperties {
        dateFormat?: string;
        correctFormat?: boolean;
    }

    interface NumericColumn extends ColumnProperties {
        format?: string;
        language?: string;
    }

    interface CheckboxColumnLabel {
        position?: 'before' | 'after';
        property?: string;
        value: string;
    }

    interface CheckboxColumn extends ColumnProperties {
        checkedTemplate?: any;
        uncheckedTemplate?: any;
        label?: CheckboxColumnLabel;
    }

    type CellMetaFunction = (row: number, column: number, prop: string) => void;

    type DropdownColumn = AutocompleteColumn;
}

declare class Handsontable extends __Handsontable.Core {
    static plugins: Handsontable.Plugins;
    static hooks: Handsontable.Hooks;
    static Dom: Handsontable.Dom;
    static dom: Handsontable.Dom;
    static helper: Handsontable.Helper;
    static utils: Handsontable.Utils;
    static renderers: Handsontable.Renderers;
    static editors: Handsontable.Editors;
}

export = Handsontable;
export as namespace Handsontable;
