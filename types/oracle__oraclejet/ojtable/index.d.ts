import { DataProvider } from '../ojdataprovider';
import { baseComponent, baseComponentEventMap, baseComponentSettableProperties, JetElementCustomEvent, JetSetPropertyType } from '..';
export interface ojTable<K, D> extends baseComponent<ojTableSettableProperties<K, D>> {
    accessibility: {
        rowHeader: string;
    };
    as: string;
    columns: Array<{
        className?: string | null;
        field?: string | null;
        footerClassName?: string | null;
        footerRenderer?: ((context: ojTable.FooterRendererContext<K, D>) => {
            insert: HTMLElement | string;
        } | void) | null;
        footerStyle?: string | null;
        footerTemplate?: {
            componentElement: Element;
        };
        headerClassName?: string | null;
        headerRenderer?: ((context: ojTable.HeaderRendererContext<K, D>) => {
            insert: HTMLElement | string;
        } | void) | null;
        headerStyle?: string | null;
        headerTemplate?: {
            componentElement: Element;
            data: object;
        };
        headerText?: string | null;
        id?: string | null;
        renderer?: ((context: ojTable.ColumnsRendererContext<K, D>) => {
            insert: HTMLElement | string;
        } | void) | null;
        resizable?: 'enabled' | 'disabled';
        sortProperty?: string | null;
        sortable?: 'auto' | 'enabled' | 'disabled';
        style?: string | null;
        template?: {
            componentElement: Element;
            data: object;
            row: object;
            index: number;
            columnIndex: number;
            key: any;
            mode: string;
        };
        width?: number | null;
    }> | null;
    columnsDefault: {
        className?: string | null;
        field?: string | null;
        footerClassName?: string | null;
        footerRenderer?: ((context: ojTable.FooterRendererContext<K, D>) => {
            insert: HTMLElement | string;
        } | void) | null;
        footerStyle?: string | null;
        footerTemplate?: {
            componentElement: Element;
        };
        headerClassName?: string | null;
        headerRenderer?: ((context: ojTable.HeaderRendererContext<K, D>) => {
            insert: HTMLElement | string;
        } | void) | null;
        headerStyle?: string | null;
        headerTemplate?: {
            componentElement: Element;
            data: object;
        };
        headerText?: string | null;
        renderer?: ((context: ojTable.ColumnsRendererContext<K, D>) => {
            insert: HTMLElement | string;
        } | void) | null;
        resizable?: 'enabled' | 'disabled';
        sortProperty?: string | null;
        sortable?: 'auto' | 'enabled' | 'disabled';
        style?: string | null;
        template?: {
            componentElement: Element;
            data: object;
            row: object;
            index: number;
            columnIndex: number;
            key: any;
            mode: string;
        };
        width?: number | null;
    };
    currentRow: ojTable.CurrentRow<K> | null;
    data: DataProvider<K, D> | null;
    display: 'list' | 'grid';
    dnd: {
        drag: {
            rows: {
                dataTypes?: string | string[];
                dragStart?: ((param0: DragEvent, param1: ojTable.DragRowContext<K, D>) => void);
                drag?: ((param0: DragEvent) => void);
                dragEnd?: ((param0: DragEvent) => void);
            };
        };
        drop: {
            columns: {
                dataTypes: string | string[];
                dragEnter?: ((param0: DragEvent, param1: ojTable.DropColumnContext) => void);
                dragOver?: ((param0: DragEvent, param1: ojTable.DropColumnContext) => void);
                dragLeave?: ((param0: DragEvent, param1: ojTable.DropColumnContext) => void);
                drop: ((param0: DragEvent, param1: ojTable.DropColumnContext) => void);
            };
            rows: {
                dataTypes: string | string[];
                dragEnter?: ((param0: DragEvent, param1: ojTable.DropRowContext) => void);
                dragOver?: ((param0: DragEvent, param1: ojTable.DropRowContext) => void);
                dragLeave?: ((param0: DragEvent, param1: ojTable.DropRowContext) => void);
                drop: ((param0: DragEvent, param1: ojTable.DropRowContext) => void);
            };
        };
        reorder: {
            columns: 'enabled' | 'disabled';
        };
    };
    editMode: 'none' | 'rowEdit';
    readonly firstSelectedRow: object;
    horizontalGridVisible: 'auto' | 'enabled' | 'disabled';
    rowRenderer: ((context: ojTable.RowRendererContext<K, D>) => string | HTMLElement | void) | null;
    scrollPolicy: 'auto' | 'loadMoreOnScroll';
    scrollPolicyOptions: {
        fetchSize: number;
        maxCount: number;
    };
    scrollPosition: {
        x?: number;
        y?: number;
        columnIndex?: number;
        rowIndex?: number;
        columnKey?: any;
        rowKey?: any;
        offsetX?: number;
        offsetY?: number;
    };
    selection: Array<ojTable.RowSelectionStart<K> & ojTable.RowSelectionEnd<K>> | Array<ojTable.ColumnSelectionStart<K> & ojTable.ColumnSelectionEnd<K>>;
    selectionMode: {
        column: 'single' | 'multiple';
        row: 'single' | 'multiple';
    };
    selectionRequired: boolean;
    verticalGridVisible: 'auto' | 'enabled' | 'disabled';
    translations: {
        labelAccSelectionAffordanceBottom?: string;
        labelAccSelectionAffordanceTop?: string;
        labelDisableNonContiguousSelection?: string;
        labelEditRow?: string;
        labelEnableNonContiguousSelection?: string;
        labelResize?: string;
        labelResizePopupSpinner?: string;
        labelResizePopupSubmit?: string;
        labelSelectAndEditRow?: string;
        labelSelectColum?: string;
        labelSelectRow?: string;
        labelSort?: string;
        labelSortAsc?: string;
        labelSortDsc?: string;
        msgColumnResizeWidthValidation?: string;
        msgFetchingData?: string;
        msgInitializing?: string;
        msgNoData?: string;
        msgScrollPolicyMaxCountDetail?: string;
        msgScrollPolicyMaxCountSummary?: string;
        msgStatusSortAscending?: string;
        msgStatusSortDescending?: string;
    };
    onAccessibilityChanged: ((event: JetElementCustomEvent<ojTable<K, D>["accessibility"]>) => any) | null;
    onAsChanged: ((event: JetElementCustomEvent<ojTable<K, D>["as"]>) => any) | null;
    onColumnsChanged: ((event: JetElementCustomEvent<ojTable<K, D>["columns"]>) => any) | null;
    onColumnsDefaultChanged: ((event: JetElementCustomEvent<ojTable<K, D>["columnsDefault"]>) => any) | null;
    onCurrentRowChanged: ((event: JetElementCustomEvent<ojTable<K, D>["currentRow"]>) => any) | null;
    onDataChanged: ((event: JetElementCustomEvent<ojTable<K, D>["data"]>) => any) | null;
    onDisplayChanged: ((event: JetElementCustomEvent<ojTable<K, D>["display"]>) => any) | null;
    onDndChanged: ((event: JetElementCustomEvent<ojTable<K, D>["dnd"]>) => any) | null;
    onEditModeChanged: ((event: JetElementCustomEvent<ojTable<K, D>["editMode"]>) => any) | null;
    onFirstSelectedRowChanged: ((event: JetElementCustomEvent<ojTable<K, D>["firstSelectedRow"]>) => any) | null;
    onHorizontalGridVisibleChanged: ((event: JetElementCustomEvent<ojTable<K, D>["horizontalGridVisible"]>) => any) | null;
    onRowRendererChanged: ((event: JetElementCustomEvent<ojTable<K, D>["rowRenderer"]>) => any) | null;
    onScrollPolicyChanged: ((event: JetElementCustomEvent<ojTable<K, D>["scrollPolicy"]>) => any) | null;
    onScrollPolicyOptionsChanged: ((event: JetElementCustomEvent<ojTable<K, D>["scrollPolicyOptions"]>) => any) | null;
    onScrollPositionChanged: ((event: JetElementCustomEvent<ojTable<K, D>["scrollPosition"]>) => any) | null;
    onSelectionChanged: ((event: JetElementCustomEvent<ojTable<K, D>["selection"]>) => any) | null;
    onSelectionModeChanged: ((event: JetElementCustomEvent<ojTable<K, D>["selectionMode"]>) => any) | null;
    onSelectionRequiredChanged: ((event: JetElementCustomEvent<ojTable<K, D>["selectionRequired"]>) => any) | null;
    onVerticalGridVisibleChanged: ((event: JetElementCustomEvent<ojTable<K, D>["verticalGridVisible"]>) => any) | null;
    onOjAnimateEnd: ((event: ojTable.ojAnimateEnd) => any) | null;
    onOjAnimateStart: ((event: ojTable.ojAnimateStart) => any) | null;
    onOjBeforeCurrentRow: ((event: ojTable.ojBeforeCurrentRow<K>) => any) | null;
    onOjBeforeRowEdit: ((event: ojTable.ojBeforeRowEdit) => any) | null;
    onOjBeforeRowEditEnd: ((event: ojTable.ojBeforeRowEditEnd) => any) | null;
    onOjSort: ((event: ojTable.ojSort) => any) | null;
    addEventListener<T extends keyof ojTableEventMap<K, D>>(type: T, listener: (this: HTMLElement, ev: ojTableEventMap<K, D>[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    getProperty<T extends keyof ojTableSettableProperties<K, D>>(property: T): ojTable<K, D>[T];
    getProperty(property: string): any;
    setProperty<T extends keyof ojTableSettableProperties<K, D>>(property: T, value: ojTableSettableProperties<K, D>[T]): void;
    setProperty<T extends string>(property: T, value: JetSetPropertyType<T, ojTableSettableProperties<K, D>>): void;
    setProperties(properties: ojTableSettablePropertiesLenient<K, D>): void;
    getContextByNode(node: Element): {
        subId: 'oj-table-cell';
        rowIndex: number;
        columnIndex: number;
        key: string;
    } | {
        subId: 'oj-table-footer' | 'oj-table-header';
        index: number;
    };
    getDataForVisibleRow(rowIndex: number): {
        data: D;
        index: number;
        key: K;
    } | null;
    refresh(): void;
    refreshRow(rowIdx: number): Promise<boolean>;
}
export namespace ojTable {
    interface ojAnimateEnd extends CustomEvent<{
        action: 'add' | 'remove' | 'update';
        element: Element;
        [propName: string]: any;
    }> {
    }
    interface ojAnimateStart extends CustomEvent<{
        action: 'add' | 'remove' | 'update';
        element: Element;
        endCallback: (() => void);
        [propName: string]: any;
    }> {
    }
    interface ojBeforeCurrentRow<K> extends CustomEvent<{
        currentRow: CurrentRow<K>;
        previousCurrentRow: CurrentRow<K>;
        [propName: string]: any;
    }> {
    }
    interface ojBeforeRowEdit extends CustomEvent<{
        rowContext: object;
        [propName: string]: any;
    }> {
    }
    interface ojBeforeRowEditEnd extends CustomEvent<{
        rowContext: object;
        cancelEdit: object;
        [propName: string]: any;
    }> {
    }
    interface ojSort extends CustomEvent<{
        header: Element;
        direction: 'ascending' | 'descending';
        [propName: string]: any;
    }> {
    }
    // tslint:disable-next-line interface-over-type-literal
    type ColumnSelectionEnd<K> = {
        endIndex: {
            column: number;
        };
        endKey?: {
            column: K;
        };
    } | {
        endIndex?: {
            column: number;
        };
        endKey: {
            column: K;
        };
    };
    // tslint:disable-next-line interface-over-type-literal
    type ColumnSelectionStart<K> = {
        startIndex: {
            column: number;
        };
        startKey?: {
            column: K;
        };
    } | {
        startIndex?: {
            column: number;
        };
        startKey: {
            column: K;
        };
    };
    // tslint:disable-next-line interface-over-type-literal
    type ColumnsRendererContext<K, D> = {
        cellContext: {
            datasource: DataProvider<K, D> | null;
            mode: 'edit' | 'navigation';
            status: ContextStatus<K>;
        };
        columnIndex: number;
        componentElement: Element;
        data: D;
        parentElement: Element;
        row: {
            [name: string]: any;
        };
    };
    // tslint:disable-next-line interface-over-type-literal
    type ContextStatus<K> = {
        rowIndex: number;
        rowKey: K;
        currentRow: CurrentRow<K>;
    };
    // tslint:disable-next-line interface-over-type-literal
    type CurrentRow<K> = {
        rowIndex: number;
        rowKey?: K;
    } | {
        rowIndex?: number;
        rowKey: K;
    };
    // tslint:disable-next-line interface-over-type-literal
    type DragRowContext<K, D> = {
        rows: Array<{
            data: D;
            index: number;
            key: K;
        }>;
    };
    // tslint:disable-next-line interface-over-type-literal
    type DropColumnContext = {
        columnIndex: number;
    };
    // tslint:disable-next-line interface-over-type-literal
    type DropRowContext = {
        rowIndex: number;
    };
    // tslint:disable-next-line interface-over-type-literal
    type FooterRendererContext<K, D> = {
        columnIndex: number;
        componentElement: Element;
        footerContext: {
            datasource: DataProvider<K, D> | null;
        };
        parentElement: Element;
    };
    // tslint:disable-next-line interface-over-type-literal
    type HeaderRendererContext<K, D> = {
        columnIndex: number;
        columnHeaderDefaultRenderer?: ((param0: object, param1: ((param0: object) => void)) => void);
        columnHeaderSortableIconRenderer?: ((param0: object, param1: ((param0: object) => void)) => void);
        componentElement: Element;
        data: string;
        headerContext: {
            datasource: DataProvider<K, D> | null;
        };
        parentElement: Element;
    };
    // tslint:disable-next-line interface-over-type-literal
    type RowRendererContext<K, D> = {
        componentElement: Element;
        data: {
            [name: string]: any;
        };
        parentElement: Element;
        rowContext: {
            datasource: DataProvider<K, D> | null;
            mode: 'edit' | 'navigation';
            status: ContextStatus<K>;
        };
    };
    // tslint:disable-next-line interface-over-type-literal
    type RowSelectionEnd<K> = {
        endIndex: {
            row: number;
        };
        endKey?: {
            row: K;
        };
    } | {
        endIndex?: {
            row: number;
        };
        endKey: {
            row: K;
        };
    };
    // tslint:disable-next-line interface-over-type-literal
    type RowSelectionStart<K> = {
        startIndex: {
            row: number;
        };
        startKey?: {
            row: K;
        };
    } | {
        startIndex?: {
            row: number;
        };
        startKey: {
            row: K;
        };
    };
}
export interface ojTableEventMap<K, D> extends baseComponentEventMap<ojTableSettableProperties<K, D>> {
    'ojAnimateEnd': ojTable.ojAnimateEnd;
    'ojAnimateStart': ojTable.ojAnimateStart;
    'ojBeforeCurrentRow': ojTable.ojBeforeCurrentRow<K>;
    'ojBeforeRowEdit': ojTable.ojBeforeRowEdit;
    'ojBeforeRowEditEnd': ojTable.ojBeforeRowEditEnd;
    'ojSort': ojTable.ojSort;
    'accessibilityChanged': JetElementCustomEvent<ojTable<K, D>["accessibility"]>;
    'asChanged': JetElementCustomEvent<ojTable<K, D>["as"]>;
    'columnsChanged': JetElementCustomEvent<ojTable<K, D>["columns"]>;
    'columnsDefaultChanged': JetElementCustomEvent<ojTable<K, D>["columnsDefault"]>;
    'currentRowChanged': JetElementCustomEvent<ojTable<K, D>["currentRow"]>;
    'dataChanged': JetElementCustomEvent<ojTable<K, D>["data"]>;
    'displayChanged': JetElementCustomEvent<ojTable<K, D>["display"]>;
    'dndChanged': JetElementCustomEvent<ojTable<K, D>["dnd"]>;
    'editModeChanged': JetElementCustomEvent<ojTable<K, D>["editMode"]>;
    'firstSelectedRowChanged': JetElementCustomEvent<ojTable<K, D>["firstSelectedRow"]>;
    'horizontalGridVisibleChanged': JetElementCustomEvent<ojTable<K, D>["horizontalGridVisible"]>;
    'rowRendererChanged': JetElementCustomEvent<ojTable<K, D>["rowRenderer"]>;
    'scrollPolicyChanged': JetElementCustomEvent<ojTable<K, D>["scrollPolicy"]>;
    'scrollPolicyOptionsChanged': JetElementCustomEvent<ojTable<K, D>["scrollPolicyOptions"]>;
    'scrollPositionChanged': JetElementCustomEvent<ojTable<K, D>["scrollPosition"]>;
    'selectionChanged': JetElementCustomEvent<ojTable<K, D>["selection"]>;
    'selectionModeChanged': JetElementCustomEvent<ojTable<K, D>["selectionMode"]>;
    'selectionRequiredChanged': JetElementCustomEvent<ojTable<K, D>["selectionRequired"]>;
    'verticalGridVisibleChanged': JetElementCustomEvent<ojTable<K, D>["verticalGridVisible"]>;
}
export interface ojTableSettableProperties<K, D> extends baseComponentSettableProperties {
    accessibility: {
        rowHeader: string;
    };
    as: string;
    columns: Array<{
        className?: string | null;
        field?: string | null;
        footerClassName?: string | null;
        footerRenderer?: ((context: ojTable.FooterRendererContext<K, D>) => {
            insert: HTMLElement | string;
        } | void) | null;
        footerStyle?: string | null;
        footerTemplate?: {
            componentElement: Element;
        };
        headerClassName?: string | null;
        headerRenderer?: ((context: ojTable.HeaderRendererContext<K, D>) => {
            insert: HTMLElement | string;
        } | void) | null;
        headerStyle?: string | null;
        headerTemplate?: {
            componentElement: Element;
            data: object;
        };
        headerText?: string | null;
        id?: string | null;
        renderer?: ((context: ojTable.ColumnsRendererContext<K, D>) => {
            insert: HTMLElement | string;
        } | void) | null;
        resizable?: 'enabled' | 'disabled';
        sortProperty?: string | null;
        sortable?: 'auto' | 'enabled' | 'disabled';
        style?: string | null;
        template?: {
            componentElement: Element;
            data: object;
            row: object;
            index: number;
            columnIndex: number;
            key: any;
            mode: string;
        };
        width?: number | null;
    }> | null;
    columnsDefault: {
        className?: string | null;
        field?: string | null;
        footerClassName?: string | null;
        footerRenderer?: ((context: ojTable.FooterRendererContext<K, D>) => {
            insert: HTMLElement | string;
        } | void) | null;
        footerStyle?: string | null;
        footerTemplate?: {
            componentElement: Element;
        };
        headerClassName?: string | null;
        headerRenderer?: ((context: ojTable.HeaderRendererContext<K, D>) => {
            insert: HTMLElement | string;
        } | void) | null;
        headerStyle?: string | null;
        headerTemplate?: {
            componentElement: Element;
            data: object;
        };
        headerText?: string | null;
        renderer?: ((context: ojTable.ColumnsRendererContext<K, D>) => {
            insert: HTMLElement | string;
        } | void) | null;
        resizable?: 'enabled' | 'disabled';
        sortProperty?: string | null;
        sortable?: 'auto' | 'enabled' | 'disabled';
        style?: string | null;
        template?: {
            componentElement: Element;
            data: object;
            row: object;
            index: number;
            columnIndex: number;
            key: any;
            mode: string;
        };
        width?: number | null;
    };
    currentRow: ojTable.CurrentRow<K> | null;
    data: DataProvider<K, D> | null;
    display: 'list' | 'grid';
    dnd: {
        drag: {
            rows: {
                dataTypes?: string | string[];
                dragStart?: ((param0: DragEvent, param1: ojTable.DragRowContext<K, D>) => void);
                drag?: ((param0: DragEvent) => void);
                dragEnd?: ((param0: DragEvent) => void);
            };
        };
        drop: {
            columns: {
                dataTypes: string | string[];
                dragEnter?: ((param0: DragEvent, param1: ojTable.DropColumnContext) => void);
                dragOver?: ((param0: DragEvent, param1: ojTable.DropColumnContext) => void);
                dragLeave?: ((param0: DragEvent, param1: ojTable.DropColumnContext) => void);
                drop: ((param0: DragEvent, param1: ojTable.DropColumnContext) => void);
            };
            rows: {
                dataTypes: string | string[];
                dragEnter?: ((param0: DragEvent, param1: ojTable.DropRowContext) => void);
                dragOver?: ((param0: DragEvent, param1: ojTable.DropRowContext) => void);
                dragLeave?: ((param0: DragEvent, param1: ojTable.DropRowContext) => void);
                drop: ((param0: DragEvent, param1: ojTable.DropRowContext) => void);
            };
        };
        reorder: {
            columns: 'enabled' | 'disabled';
        };
    };
    editMode: 'none' | 'rowEdit';
    readonly firstSelectedRow: object;
    horizontalGridVisible: 'auto' | 'enabled' | 'disabled';
    rowRenderer: ((context: ojTable.RowRendererContext<K, D>) => string | HTMLElement | void) | null;
    scrollPolicy: 'auto' | 'loadMoreOnScroll';
    scrollPolicyOptions: {
        fetchSize: number;
        maxCount: number;
    };
    scrollPosition: {
        x?: number;
        y?: number;
        columnIndex?: number;
        rowIndex?: number;
        columnKey?: any;
        rowKey?: any;
        offsetX?: number;
        offsetY?: number;
    };
    selection: Array<ojTable.RowSelectionStart<K> & ojTable.RowSelectionEnd<K>> | Array<ojTable.ColumnSelectionStart<K> & ojTable.ColumnSelectionEnd<K>>;
    selectionMode: {
        column: 'single' | 'multiple';
        row: 'single' | 'multiple';
    };
    selectionRequired: boolean;
    verticalGridVisible: 'auto' | 'enabled' | 'disabled';
    translations: {
        labelAccSelectionAffordanceBottom?: string;
        labelAccSelectionAffordanceTop?: string;
        labelDisableNonContiguousSelection?: string;
        labelEditRow?: string;
        labelEnableNonContiguousSelection?: string;
        labelResize?: string;
        labelResizePopupSpinner?: string;
        labelResizePopupSubmit?: string;
        labelSelectAndEditRow?: string;
        labelSelectColum?: string;
        labelSelectRow?: string;
        labelSort?: string;
        labelSortAsc?: string;
        labelSortDsc?: string;
        msgColumnResizeWidthValidation?: string;
        msgFetchingData?: string;
        msgInitializing?: string;
        msgNoData?: string;
        msgScrollPolicyMaxCountDetail?: string;
        msgScrollPolicyMaxCountSummary?: string;
        msgStatusSortAscending?: string;
        msgStatusSortDescending?: string;
    };
}
export interface ojTableSettablePropertiesLenient<K, D> extends Partial<ojTableSettableProperties<K, D>> {
    [key: string]: any;
}
