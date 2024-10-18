import {
    baseComponent,
    baseComponentEventMap,
    baseComponentSettableProperties,
    JetElementCustomEvent,
    JetSetPropertyType,
} from "..";
import { DataProvider } from "../ojdataprovider";
export interface ojTable<K, D> extends baseComponent<ojTableSettableProperties<K, D>> {
    accessibility: {
        rowHeader: string;
    };
    as: string;
    columns:
        | Array<{
            className?: string | null | undefined;
            field?: string | null | undefined;
            footerClassName?: string | null | undefined;
            footerRenderer?:
                | ((context: ojTable.FooterRendererContext<K, D>) => {
                    insert: HTMLElement | string;
                } | void)
                | null
                | undefined;
            footerStyle?: string | null | undefined;
            footerTemplate?: {
                componentElement: Element;
            } | undefined;
            headerClassName?: string | null | undefined;
            headerRenderer?:
                | ((context: ojTable.HeaderRendererContext<K, D>) => {
                    insert: HTMLElement | string;
                } | void)
                | null
                | undefined;
            headerStyle?: string | null | undefined;
            headerTemplate?: {
                componentElement: Element;
                data: object;
            } | undefined;
            headerText?: string | null | undefined;
            id?: string | null | undefined;
            renderer?:
                | ((context: ojTable.ColumnsRendererContext<K, D>) => {
                    insert: HTMLElement | string;
                } | void)
                | null
                | undefined;
            resizable?: "enabled" | "disabled" | undefined;
            sortProperty?: string | null | undefined;
            sortable?: "auto" | "enabled" | "disabled" | undefined;
            style?: string | null | undefined;
            template?: {
                componentElement: Element;
                data: object;
                row: object;
                index: number;
                columnIndex: number;
                key: any;
                mode: string;
            } | undefined;
            width?: number | null | undefined;
        }>
        | null;
    columnsDefault: {
        className?: string | null | undefined;
        field?: string | null | undefined;
        footerClassName?: string | null | undefined;
        footerRenderer?:
            | ((context: ojTable.FooterRendererContext<K, D>) => {
                insert: HTMLElement | string;
            } | void)
            | null
            | undefined;
        footerStyle?: string | null | undefined;
        footerTemplate?: {
            componentElement: Element;
        } | undefined;
        headerClassName?: string | null | undefined;
        headerRenderer?:
            | ((context: ojTable.HeaderRendererContext<K, D>) => {
                insert: HTMLElement | string;
            } | void)
            | null
            | undefined;
        headerStyle?: string | null | undefined;
        headerTemplate?: {
            componentElement: Element;
            data: object;
        } | undefined;
        headerText?: string | null | undefined;
        renderer?:
            | ((context: ojTable.ColumnsRendererContext<K, D>) => {
                insert: HTMLElement | string;
            } | void)
            | null
            | undefined;
        resizable?: "enabled" | "disabled" | undefined;
        sortProperty?: string | null | undefined;
        sortable?: "auto" | "enabled" | "disabled" | undefined;
        style?: string | null | undefined;
        template?: {
            componentElement: Element;
            data: object;
            row: object;
            index: number;
            columnIndex: number;
            key: any;
            mode: string;
        } | undefined;
        width?: number | null | undefined;
    };
    currentRow: ojTable.CurrentRow<K> | null;
    data: DataProvider<K, D> | null;
    display: "list" | "grid";
    dnd: {
        drag: {
            rows: {
                dataTypes?: string | string[] | undefined;
                dragStart?: ((param0: DragEvent, param1: ojTable.DragRowContext<K, D>) => void) | undefined;
                drag?: ((param0: DragEvent) => void) | undefined;
                dragEnd?: ((param0: DragEvent) => void) | undefined;
            };
        };
        drop: {
            columns: {
                dataTypes: string | string[];
                dragEnter?: ((param0: DragEvent, param1: ojTable.DropColumnContext) => void) | undefined;
                dragOver?: ((param0: DragEvent, param1: ojTable.DropColumnContext) => void) | undefined;
                dragLeave?: ((param0: DragEvent, param1: ojTable.DropColumnContext) => void) | undefined;
                drop: (param0: DragEvent, param1: ojTable.DropColumnContext) => void;
            };
            rows: {
                dataTypes: string | string[];
                dragEnter?: ((param0: DragEvent, param1: ojTable.DropRowContext) => void) | undefined;
                dragOver?: ((param0: DragEvent, param1: ojTable.DropRowContext) => void) | undefined;
                dragLeave?: ((param0: DragEvent, param1: ojTable.DropRowContext) => void) | undefined;
                drop: (param0: DragEvent, param1: ojTable.DropRowContext) => void;
            };
        };
        reorder: {
            columns: "enabled" | "disabled";
        };
    };
    editMode: "none" | "rowEdit";
    readonly firstSelectedRow: object;
    horizontalGridVisible: "auto" | "enabled" | "disabled";
    rowRenderer: ((context: ojTable.RowRendererContext<K, D>) => string | HTMLElement | void) | null;
    scrollPolicy: "auto" | "loadMoreOnScroll";
    scrollPolicyOptions: {
        fetchSize: number;
        maxCount: number;
    };
    scrollPosition: {
        x?: number | undefined;
        y?: number | undefined;
        columnIndex?: number | undefined;
        rowIndex?: number | undefined;
        columnKey?: any;
        rowKey?: any;
        offsetX?: number | undefined;
        offsetY?: number | undefined;
    };
    selection:
        | Array<ojTable.RowSelectionStart<K> & ojTable.RowSelectionEnd<K>>
        | Array<ojTable.ColumnSelectionStart<K> & ojTable.ColumnSelectionEnd<K>>;
    selectionMode: {
        column: "single" | "multiple";
        row: "single" | "multiple";
    };
    selectionRequired: boolean;
    verticalGridVisible: "auto" | "enabled" | "disabled";
    translations: {
        labelAccSelectionAffordanceBottom?: string | undefined;
        labelAccSelectionAffordanceTop?: string | undefined;
        labelDisableNonContiguousSelection?: string | undefined;
        labelEditRow?: string | undefined;
        labelEnableNonContiguousSelection?: string | undefined;
        labelResize?: string | undefined;
        labelResizePopupSpinner?: string | undefined;
        labelResizePopupSubmit?: string | undefined;
        labelSelectAndEditRow?: string | undefined;
        labelSelectColum?: string | undefined;
        labelSelectRow?: string | undefined;
        labelSort?: string | undefined;
        labelSortAsc?: string | undefined;
        labelSortDsc?: string | undefined;
        msgColumnResizeWidthValidation?: string | undefined;
        msgFetchingData?: string | undefined;
        msgInitializing?: string | undefined;
        msgNoData?: string | undefined;
        msgScrollPolicyMaxCountDetail?: string | undefined;
        msgScrollPolicyMaxCountSummary?: string | undefined;
        msgStatusSortAscending?: string | undefined;
        msgStatusSortDescending?: string | undefined;
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
    onHorizontalGridVisibleChanged:
        | ((event: JetElementCustomEvent<ojTable<K, D>["horizontalGridVisible"]>) => any)
        | null;
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
    addEventListener<T extends keyof ojTableEventMap<K, D>>(
        type: T,
        listener: (this: HTMLElement, ev: ojTableEventMap<K, D>[T]) => any,
        useCapture?: boolean,
    ): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    getProperty<T extends keyof ojTableSettableProperties<K, D>>(property: T): ojTable<K, D>[T];
    getProperty(property: string): any;
    setProperty<T extends keyof ojTableSettableProperties<K, D>>(
        property: T,
        value: ojTableSettableProperties<K, D>[T],
    ): void;
    setProperty<T extends string>(property: T, value: JetSetPropertyType<T, ojTableSettableProperties<K, D>>): void;
    setProperties(properties: ojTableSettablePropertiesLenient<K, D>): void;
    getContextByNode(node: Element): {
        subId: "oj-table-cell";
        rowIndex: number;
        columnIndex: number;
        key: string;
    } | {
        subId: "oj-table-footer" | "oj-table-header";
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
    interface ojAnimateEnd extends
        CustomEvent<{
            action: "add" | "remove" | "update";
            element: Element;
            [propName: string]: any;
        }>
    {
    }
    interface ojAnimateStart extends
        CustomEvent<{
            action: "add" | "remove" | "update";
            element: Element;
            endCallback: () => void;
            [propName: string]: any;
        }>
    {
    }
    interface ojBeforeCurrentRow<K> extends
        CustomEvent<{
            currentRow: CurrentRow<K>;
            previousCurrentRow: CurrentRow<K>;
            [propName: string]: any;
        }>
    {
    }
    interface ojBeforeRowEdit extends
        CustomEvent<{
            rowContext: object;
            [propName: string]: any;
        }>
    {
    }
    interface ojBeforeRowEditEnd extends
        CustomEvent<{
            rowContext: object;
            cancelEdit: object;
            [propName: string]: any;
        }>
    {
    }
    interface ojSort extends
        CustomEvent<{
            header: Element;
            direction: "ascending" | "descending";
            [propName: string]: any;
        }>
    {
    }
    type ColumnSelectionEnd<K> = {
        endIndex: {
            column: number;
        };
        endKey?: {
            column: K;
        } | undefined;
    } | {
        endIndex?: {
            column: number;
        } | undefined;
        endKey: {
            column: K;
        };
    };
    type ColumnSelectionStart<K> = {
        startIndex: {
            column: number;
        };
        startKey?: {
            column: K;
        } | undefined;
    } | {
        startIndex?: {
            column: number;
        } | undefined;
        startKey: {
            column: K;
        };
    };
    // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
    type ColumnsRendererContext<K, D> = {
        cellContext: {
            datasource: DataProvider<K, D> | null;
            mode: "edit" | "navigation";
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
    // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
    type ContextStatus<K> = {
        rowIndex: number;
        rowKey: K;
        currentRow: CurrentRow<K>;
    };
    type CurrentRow<K> = {
        rowIndex: number;
        rowKey?: K | undefined;
    } | {
        rowIndex?: number | undefined;
        rowKey: K;
    };
    // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
    type DragRowContext<K, D> = {
        rows: Array<{
            data: D;
            index: number;
            key: K;
        }>;
    };
    // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
    type DropColumnContext = {
        columnIndex: number;
    };
    // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
    type DropRowContext = {
        rowIndex: number;
    };
    // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
    type FooterRendererContext<K, D> = {
        columnIndex: number;
        componentElement: Element;
        footerContext: {
            datasource: DataProvider<K, D> | null;
        };
        parentElement: Element;
    };
    // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
    type HeaderRendererContext<K, D> = {
        columnIndex: number;
        columnHeaderDefaultRenderer?: ((param0: object, param1: (param0: object) => void) => void) | undefined;
        columnHeaderSortableIconRenderer?: ((param0: object, param1: (param0: object) => void) => void) | undefined;
        componentElement: Element;
        data: string;
        headerContext: {
            datasource: DataProvider<K, D> | null;
        };
        parentElement: Element;
    };
    // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
    type RowRendererContext<K, D> = {
        componentElement: Element;
        data: {
            [name: string]: any;
        };
        parentElement: Element;
        rowContext: {
            datasource: DataProvider<K, D> | null;
            mode: "edit" | "navigation";
            status: ContextStatus<K>;
        };
    };
    type RowSelectionEnd<K> = {
        endIndex: {
            row: number;
        };
        endKey?: {
            row: K;
        } | undefined;
    } | {
        endIndex?: {
            row: number;
        } | undefined;
        endKey: {
            row: K;
        };
    };
    type RowSelectionStart<K> = {
        startIndex: {
            row: number;
        };
        startKey?: {
            row: K;
        } | undefined;
    } | {
        startIndex?: {
            row: number;
        } | undefined;
        startKey: {
            row: K;
        };
    };
}
export interface ojTableEventMap<K, D> extends baseComponentEventMap<ojTableSettableProperties<K, D>> {
    "ojAnimateEnd": ojTable.ojAnimateEnd;
    "ojAnimateStart": ojTable.ojAnimateStart;
    "ojBeforeCurrentRow": ojTable.ojBeforeCurrentRow<K>;
    "ojBeforeRowEdit": ojTable.ojBeforeRowEdit;
    "ojBeforeRowEditEnd": ojTable.ojBeforeRowEditEnd;
    "ojSort": ojTable.ojSort;
    "accessibilityChanged": JetElementCustomEvent<ojTable<K, D>["accessibility"]>;
    "asChanged": JetElementCustomEvent<ojTable<K, D>["as"]>;
    "columnsChanged": JetElementCustomEvent<ojTable<K, D>["columns"]>;
    "columnsDefaultChanged": JetElementCustomEvent<ojTable<K, D>["columnsDefault"]>;
    "currentRowChanged": JetElementCustomEvent<ojTable<K, D>["currentRow"]>;
    "dataChanged": JetElementCustomEvent<ojTable<K, D>["data"]>;
    "displayChanged": JetElementCustomEvent<ojTable<K, D>["display"]>;
    "dndChanged": JetElementCustomEvent<ojTable<K, D>["dnd"]>;
    "editModeChanged": JetElementCustomEvent<ojTable<K, D>["editMode"]>;
    "firstSelectedRowChanged": JetElementCustomEvent<ojTable<K, D>["firstSelectedRow"]>;
    "horizontalGridVisibleChanged": JetElementCustomEvent<ojTable<K, D>["horizontalGridVisible"]>;
    "rowRendererChanged": JetElementCustomEvent<ojTable<K, D>["rowRenderer"]>;
    "scrollPolicyChanged": JetElementCustomEvent<ojTable<K, D>["scrollPolicy"]>;
    "scrollPolicyOptionsChanged": JetElementCustomEvent<ojTable<K, D>["scrollPolicyOptions"]>;
    "scrollPositionChanged": JetElementCustomEvent<ojTable<K, D>["scrollPosition"]>;
    "selectionChanged": JetElementCustomEvent<ojTable<K, D>["selection"]>;
    "selectionModeChanged": JetElementCustomEvent<ojTable<K, D>["selectionMode"]>;
    "selectionRequiredChanged": JetElementCustomEvent<ojTable<K, D>["selectionRequired"]>;
    "verticalGridVisibleChanged": JetElementCustomEvent<ojTable<K, D>["verticalGridVisible"]>;
}
export interface ojTableSettableProperties<K, D> extends baseComponentSettableProperties {
    accessibility: {
        rowHeader: string;
    };
    as: string;
    columns:
        | Array<{
            className?: string | null | undefined;
            field?: string | null | undefined;
            footerClassName?: string | null | undefined;
            footerRenderer?:
                | ((context: ojTable.FooterRendererContext<K, D>) => {
                    insert: HTMLElement | string;
                } | void)
                | null
                | undefined;
            footerStyle?: string | null | undefined;
            footerTemplate?: {
                componentElement: Element;
            } | undefined;
            headerClassName?: string | null | undefined;
            headerRenderer?:
                | ((context: ojTable.HeaderRendererContext<K, D>) => {
                    insert: HTMLElement | string;
                } | void)
                | null
                | undefined;
            headerStyle?: string | null | undefined;
            headerTemplate?: {
                componentElement: Element;
                data: object;
            } | undefined;
            headerText?: string | null | undefined;
            id?: string | null | undefined;
            renderer?:
                | ((context: ojTable.ColumnsRendererContext<K, D>) => {
                    insert: HTMLElement | string;
                } | void)
                | null
                | undefined;
            resizable?: "enabled" | "disabled" | undefined;
            sortProperty?: string | null | undefined;
            sortable?: "auto" | "enabled" | "disabled" | undefined;
            style?: string | null | undefined;
            template?: {
                componentElement: Element;
                data: object;
                row: object;
                index: number;
                columnIndex: number;
                key: any;
                mode: string;
            } | undefined;
            width?: number | null | undefined;
        }>
        | null;
    columnsDefault: {
        className?: string | null | undefined;
        field?: string | null | undefined;
        footerClassName?: string | null | undefined;
        footerRenderer?:
            | ((context: ojTable.FooterRendererContext<K, D>) => {
                insert: HTMLElement | string;
            } | void)
            | null
            | undefined;
        footerStyle?: string | null | undefined;
        footerTemplate?: {
            componentElement: Element;
        } | undefined;
        headerClassName?: string | null | undefined;
        headerRenderer?:
            | ((context: ojTable.HeaderRendererContext<K, D>) => {
                insert: HTMLElement | string;
            } | void)
            | null
            | undefined;
        headerStyle?: string | null | undefined;
        headerTemplate?: {
            componentElement: Element;
            data: object;
        } | undefined;
        headerText?: string | null | undefined;
        renderer?:
            | ((context: ojTable.ColumnsRendererContext<K, D>) => {
                insert: HTMLElement | string;
            } | void)
            | null
            | undefined;
        resizable?: "enabled" | "disabled" | undefined;
        sortProperty?: string | null | undefined;
        sortable?: "auto" | "enabled" | "disabled" | undefined;
        style?: string | null | undefined;
        template?: {
            componentElement: Element;
            data: object;
            row: object;
            index: number;
            columnIndex: number;
            key: any;
            mode: string;
        } | undefined;
        width?: number | null | undefined;
    };
    currentRow: ojTable.CurrentRow<K> | null;
    data: DataProvider<K, D> | null;
    display: "list" | "grid";
    dnd: {
        drag: {
            rows: {
                dataTypes?: string | string[] | undefined;
                dragStart?: ((param0: DragEvent, param1: ojTable.DragRowContext<K, D>) => void) | undefined;
                drag?: ((param0: DragEvent) => void) | undefined;
                dragEnd?: ((param0: DragEvent) => void) | undefined;
            };
        };
        drop: {
            columns: {
                dataTypes: string | string[];
                dragEnter?: ((param0: DragEvent, param1: ojTable.DropColumnContext) => void) | undefined;
                dragOver?: ((param0: DragEvent, param1: ojTable.DropColumnContext) => void) | undefined;
                dragLeave?: ((param0: DragEvent, param1: ojTable.DropColumnContext) => void) | undefined;
                drop: (param0: DragEvent, param1: ojTable.DropColumnContext) => void;
            };
            rows: {
                dataTypes: string | string[];
                dragEnter?: ((param0: DragEvent, param1: ojTable.DropRowContext) => void) | undefined;
                dragOver?: ((param0: DragEvent, param1: ojTable.DropRowContext) => void) | undefined;
                dragLeave?: ((param0: DragEvent, param1: ojTable.DropRowContext) => void) | undefined;
                drop: (param0: DragEvent, param1: ojTable.DropRowContext) => void;
            };
        };
        reorder: {
            columns: "enabled" | "disabled";
        };
    };
    editMode: "none" | "rowEdit";
    readonly firstSelectedRow: object;
    horizontalGridVisible: "auto" | "enabled" | "disabled";
    rowRenderer: ((context: ojTable.RowRendererContext<K, D>) => string | HTMLElement | void) | null;
    scrollPolicy: "auto" | "loadMoreOnScroll";
    scrollPolicyOptions: {
        fetchSize: number;
        maxCount: number;
    };
    scrollPosition: {
        x?: number | undefined;
        y?: number | undefined;
        columnIndex?: number | undefined;
        rowIndex?: number | undefined;
        columnKey?: any;
        rowKey?: any;
        offsetX?: number | undefined;
        offsetY?: number | undefined;
    };
    selection:
        | Array<ojTable.RowSelectionStart<K> & ojTable.RowSelectionEnd<K>>
        | Array<ojTable.ColumnSelectionStart<K> & ojTable.ColumnSelectionEnd<K>>;
    selectionMode: {
        column: "single" | "multiple";
        row: "single" | "multiple";
    };
    selectionRequired: boolean;
    verticalGridVisible: "auto" | "enabled" | "disabled";
    translations: {
        labelAccSelectionAffordanceBottom?: string | undefined;
        labelAccSelectionAffordanceTop?: string | undefined;
        labelDisableNonContiguousSelection?: string | undefined;
        labelEditRow?: string | undefined;
        labelEnableNonContiguousSelection?: string | undefined;
        labelResize?: string | undefined;
        labelResizePopupSpinner?: string | undefined;
        labelResizePopupSubmit?: string | undefined;
        labelSelectAndEditRow?: string | undefined;
        labelSelectColum?: string | undefined;
        labelSelectRow?: string | undefined;
        labelSort?: string | undefined;
        labelSortAsc?: string | undefined;
        labelSortDsc?: string | undefined;
        msgColumnResizeWidthValidation?: string | undefined;
        msgFetchingData?: string | undefined;
        msgInitializing?: string | undefined;
        msgNoData?: string | undefined;
        msgScrollPolicyMaxCountDetail?: string | undefined;
        msgScrollPolicyMaxCountSummary?: string | undefined;
        msgStatusSortAscending?: string | undefined;
        msgStatusSortDescending?: string | undefined;
    };
}
export interface ojTableSettablePropertiesLenient<K, D> extends Partial<ojTableSettableProperties<K, D>> {
    [key: string]: any;
}
