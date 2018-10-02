import { DataProvider } from '../ojdataprovider';
import { baseComponent, baseComponentEventMap, baseComponentSettableProperties, JetElementCustomEvent, JetSetPropertyType } from '..';
export interface ojDataGrid<K, D> extends baseComponent<ojDataGridSettableProperties<K, D>> {
    bandingInterval: {
        column: number;
        row: number;
    };
    cell: {
        className?: ((context: ojDataGrid.CellContext<K, D>) => string | void | null) | string | null;
        renderer?: ((context: ojDataGrid.CellContext<K, D>) => {
            insert: HTMLElement | string;
        } | void | null) | null;
        style?: ((context: ojDataGrid.CellContext<K, D>) => string | void | null) | string | null;
    };
    currentCell: ojDataGrid.CurrentCell<K> | null;
    data: DataProvider<K, D>;
    dnd: {
        reorder: {
            row: 'enable' | 'disable';
        };
    };
    editMode: 'none' | 'cellNavigation' | 'cellEdit';
    gridlines: {
        horizontal: 'visible' | 'hidden';
        vertical: 'visible' | 'hidden';
    };
    header: {
        column: {
            className?: ((context: ojDataGrid.HeaderContext<K, D>) => string | void | null) | string | null;
            label: {
                className?: ((context: ojDataGrid.LabelContext<K, D>) => string | void | null) | string | null;
                renderer?: ((context: ojDataGrid.LabelContext<K, D>) => {
                    insert: HTMLElement | string;
                } | void | null) | null;
                style?: ((context: ojDataGrid.LabelContext<K, D>) => string | void | null) | string | null;
            };
            renderer?: ((context: ojDataGrid.HeaderContext<K, D>) => {
                insert: HTMLElement | string;
            } | void | null) | null;
            resizable: {
                height: 'enable' | 'disable';
                width?: ((context: ojDataGrid.HeaderContext<K, D>) => string) | string | null;
            };
            sortable?: ((context: ojDataGrid.HeaderContext<K, D>) => string) | string | null;
            style?: ((context: ojDataGrid.HeaderContext<K, D>) => string | void | null) | string | null;
        };
        columnEnd: {
            className?: ((context: ojDataGrid.HeaderContext<K, D>) => string | void | null) | string | null;
            label: {
                className?: ((context: ojDataGrid.LabelContext<K, D>) => string | void | null) | string | null;
                renderer?: ((context: ojDataGrid.LabelContext<K, D>) => {
                    insert: HTMLElement | string;
                } | void | null) | null;
                style?: ((context: ojDataGrid.HeaderContext<K, D>) => string | void | null) | string | null;
            };
            renderer?: ((context: ojDataGrid.HeaderContext<K, D>) => {
                insert: HTMLElement | string;
            } | void | null) | null;
            resizable: {
                height: 'enable' | 'disable';
                width?: ((context: ojDataGrid.HeaderContext<K, D>) => string) | string | null;
            };
            style?: ((context: ojDataGrid.HeaderContext<K, D>) => string | void | null) | string | null;
        };
        row: {
            className?: ((context: ojDataGrid.HeaderContext<K, D>) => string | void | null) | string | null;
            label: {
                className?: ((context: ojDataGrid.LabelContext<K, D>) => string | void | null) | string | null;
                renderer?: ((context: ojDataGrid.LabelContext<K, D>) => {
                    insert: HTMLElement | string;
                } | void | null) | null;
                style?: ((context: ojDataGrid.LabelContext<K, D>) => string | void | null) | string | null;
            };
            renderer?: ((context: ojDataGrid.HeaderContext<K, D>) => {
                insert: HTMLElement | string;
            } | void | null) | null;
            resizable: {
                height?: ((context: ojDataGrid.HeaderContext<K, D>) => string) | string | null;
                width: 'enable' | 'disable';
            };
            sortable?: ((context: ojDataGrid.HeaderContext<K, D>) => string) | string | null;
            style?: ((context: ojDataGrid.HeaderContext<K, D>) => string | void | null) | string | null;
        };
        rowEnd: {
            className?: ((context: ojDataGrid.HeaderContext<K, D>) => string | void | null) | string | null;
            label: {
                className?: ((context: ojDataGrid.LabelContext<K, D>) => string | void | null) | string | null;
                renderer?: ((context: ojDataGrid.LabelContext<K, D>) => {
                    insert: HTMLElement | string;
                } | void | null) | null;
                style?: ((context: ojDataGrid.LabelContext<K, D>) => string | void | null) | string | null;
            };
            renderer?: ((context: ojDataGrid.HeaderContext<K, D>) => {
                insert: HTMLElement | string;
            } | void | null) | null;
            resizable: {
                height?: ((context: ojDataGrid.HeaderContext<K, D>) => string) | string | null;
                width: 'enable' | 'disable';
            };
            style?: ((context: ojDataGrid.HeaderContext<K, D>) => string | void | null) | string | null;
        };
    };
    scrollPolicy: 'auto' | 'loadMoreOnScroll' | 'scroll';
    scrollPolicyOptions: {
        maxColumnCount: number;
        maxRowCount: number;
    };
    scrollPosition: {
        x?: number;
        y?: number;
        rowIndex?: number;
        columnIndex?: number;
        rowKey?: K;
        columnKey?: K;
        offsetX?: number;
        offsetY?: number;
    };
    selection: Array<ojDataGrid.Selection<K>>;
    selectionMode: {
        cell: 'none' | 'single' | 'multiple';
        row: 'none' | 'single' | 'multiple';
    };
    translations: {
        accessibleActionableMode?: string;
        accessibleColumnContext?: string;
        accessibleColumnEndHeaderContext?: string;
        accessibleColumnHeaderContext?: string;
        accessibleColumnSelected?: string;
        accessibleColumnSpanContext?: string;
        accessibleFirstColumn?: string;
        accessibleFirstRow?: string;
        accessibleLastColumn?: string;
        accessibleLastRow?: string;
        accessibleLevelContext?: string;
        accessibleMultiCellSelected?: string;
        accessibleNavigationMode?: string;
        accessibleRangeSelectModeOff?: string;
        accessibleRangeSelectModeOn?: string;
        accessibleRowCollapsed?: string;
        accessibleRowContext?: string;
        accessibleRowEndHeaderContext?: string;
        accessibleRowExpanded?: string;
        accessibleRowHeaderContext?: string;
        accessibleRowSelected?: string;
        accessibleRowSpanContext?: string;
        accessibleSelectionAffordanceBottom?: string;
        accessibleSelectionAffordanceTop?: string;
        accessibleSortAscending?: string;
        accessibleSortDescending?: string;
        accessibleStateSelected?: string;
        accessibleSummaryEstimate?: string;
        accessibleSummaryExact?: string;
        accessibleSummaryExpanded?: string;
        labelCut?: string;
        labelDisableNonContiguous?: string;
        labelEnableNonContiguous?: string;
        labelPaste?: string;
        labelResize?: string;
        labelResizeDialogSubmit?: string;
        labelResizeHeight?: string;
        labelResizeWidth?: string;
        labelSortCol?: string;
        labelSortColAsc?: string;
        labelSortColDsc?: string;
        labelSortRow?: string;
        labelSortRowAsc?: string;
        labelSortRowDsc?: string;
        msgFetchingData?: string;
        msgNoData?: string;
    };
    onBandingIntervalChanged: ((event: JetElementCustomEvent<ojDataGrid<K, D>["bandingInterval"]>) => any) | null;
    onCellChanged: ((event: JetElementCustomEvent<ojDataGrid<K, D>["cell"]>) => any) | null;
    onCurrentCellChanged: ((event: JetElementCustomEvent<ojDataGrid<K, D>["currentCell"]>) => any) | null;
    onDataChanged: ((event: JetElementCustomEvent<ojDataGrid<K, D>["data"]>) => any) | null;
    onDndChanged: ((event: JetElementCustomEvent<ojDataGrid<K, D>["dnd"]>) => any) | null;
    onEditModeChanged: ((event: JetElementCustomEvent<ojDataGrid<K, D>["editMode"]>) => any) | null;
    onGridlinesChanged: ((event: JetElementCustomEvent<ojDataGrid<K, D>["gridlines"]>) => any) | null;
    onHeaderChanged: ((event: JetElementCustomEvent<ojDataGrid<K, D>["header"]>) => any) | null;
    onScrollPolicyChanged: ((event: JetElementCustomEvent<ojDataGrid<K, D>["scrollPolicy"]>) => any) | null;
    onScrollPolicyOptionsChanged: ((event: JetElementCustomEvent<ojDataGrid<K, D>["scrollPolicyOptions"]>) => any) | null;
    onScrollPositionChanged: ((event: JetElementCustomEvent<ojDataGrid<K, D>["scrollPosition"]>) => any) | null;
    onSelectionChanged: ((event: JetElementCustomEvent<ojDataGrid<K, D>["selection"]>) => any) | null;
    onSelectionModeChanged: ((event: JetElementCustomEvent<ojDataGrid<K, D>["selectionMode"]>) => any) | null;
    onOjBeforeCurrentCell: ((event: ojDataGrid.ojBeforeCurrentCell<K>) => any) | null;
    onOjBeforeEdit: ((event: ojDataGrid.ojBeforeEdit<K, D>) => any) | null;
    onOjBeforeEditEnd: ((event: ojDataGrid.ojBeforeEditEnd<K, D>) => any) | null;
    onOjResize: ((event: ojDataGrid.ojResize) => any) | null;
    onOjScroll: ((event: ojDataGrid.ojScroll) => any) | null;
    onOjSort: ((event: ojDataGrid.ojSort) => any) | null;
    addEventListener<T extends keyof ojDataGridEventMap<K, D>>(type: T, listener: (this: HTMLElement, ev: ojDataGridEventMap<K, D>[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    getProperty<T extends keyof ojDataGridSettableProperties<K, D>>(property: T): ojDataGrid<K, D>[T];
    getProperty(property: string): any;
    setProperty<T extends keyof ojDataGridSettableProperties<K, D>>(property: T, value: ojDataGridSettableProperties<K, D>[T]): void;
    setProperty<T extends string>(property: T, value: JetSetPropertyType<T, ojDataGridSettableProperties<K, D>>): void;
    setProperties(properties: ojDataGridSettablePropertiesLenient<K, D>): void;
    getContextByNode(node: Element): ojDataGrid.CellContext<K, D> & {
        subId: 'oj-datagrid-cell';
    } | ojDataGrid.HeaderContext<K, D> & {
        subId: 'oj-datagrid-header';
    } | ojDataGrid.LabelContext<K, D> & {
        subId: 'oj-datagrid-header-label';
    };
    refresh(): void;
}
export namespace ojDataGrid {
    interface ojBeforeCurrentCell<K> extends CustomEvent<{
        currentCell: CurrentCell<K>;
        previousCurrentCell: CurrentCell<K>;
        [propName: string]: any;
    }> {
    }
    interface ojBeforeEdit<K, D> extends CustomEvent<{
        cellContext: CellContext<K, D>;
        [propName: string]: any;
    }> {
    }
    interface ojBeforeEditEnd<K, D> extends CustomEvent<{
        cellContext: CellContext<K, D>;
        cancelEdit: boolean;
        [propName: string]: any;
    }> {
    }
    interface ojResize extends CustomEvent<{
        header: string | number;
        oldDimensions: {
            width: number;
            height: number;
        };
        newDimensions: {
            width: number;
            height: number;
        };
        [propName: string]: any;
    }> {
    }
    interface ojScroll extends CustomEvent<{
        scrollX: number;
        scrollY: number;
        [propName: string]: any;
    }> {
    }
    interface ojSort extends CustomEvent<{
        header: any;
        direction: 'ascending' | 'descending';
        [propName: string]: any;
    }> {
    }
    // tslint:disable-next-line interface-over-type-literal
    type CellContext<K, D> = {
        componentElement: Element;
        parentElement: Element;
        cell: D;
        data: D;
        datasource: DataProvider<K, D> | null;
        indexes: {
            row: number;
            column: number;
        };
        keys: {
            row: K;
            column: K;
        };
        extents: {
            row: number;
            column: number;
        };
        mode: 'edit' | 'navigation';
    };
    // tslint:disable-next-line interface-over-type-literal
    type CurrentCell<K> = {
        type: 'cell' | 'header' | 'label';
        axis?: 'column' | 'columnEnd' | 'row' | 'rowEnd';
        index?: number;
        level?: number;
        key?: any;
        indexes?: {
            row: number;
            column: number;
        };
        keys?: {
            row: K;
            column: K;
        };
    };
    // tslint:disable-next-line interface-over-type-literal
    type HeaderContext<K, D> = {
        componentElement: Element;
        parentElement: Element;
        data: D;
        datasource: DataProvider<K, D> | null;
        axis: 'column' | 'columnEnd' | 'row' | 'rowEnd';
        index: number;
        key: K;
        level: number;
        extent: number;
        depth: number;
    };
    // tslint:disable-next-line interface-over-type-literal
    type LabelContext<K, D> = {
        componentElement: Element;
        parentElement: Element;
        datasource: DataProvider<K, D> | null;
        axis: 'column' | 'columnEnd' | 'row' | 'rowEnd';
        key: K;
        level: number;
    };
    // tslint:disable-next-line interface-over-type-literal
    type Selection<K> = {
        startIndex?: {
            row: number;
            column?: number;
        };
        startKey?: {
            row: K;
            column?: K;
        };
        endIndex?: {
            row: number;
            column?: number;
        };
        endKey?: {
            row: K;
            column?: K;
        };
    };
}
export interface ojDataGridEventMap<K, D> extends baseComponentEventMap<ojDataGridSettableProperties<K, D>> {
    'ojBeforeCurrentCell': ojDataGrid.ojBeforeCurrentCell<K>;
    'ojBeforeEdit': ojDataGrid.ojBeforeEdit<K, D>;
    'ojBeforeEditEnd': ojDataGrid.ojBeforeEditEnd<K, D>;
    'ojResize': ojDataGrid.ojResize;
    'ojScroll': ojDataGrid.ojScroll;
    'ojSort': ojDataGrid.ojSort;
    'bandingIntervalChanged': JetElementCustomEvent<ojDataGrid<K, D>["bandingInterval"]>;
    'cellChanged': JetElementCustomEvent<ojDataGrid<K, D>["cell"]>;
    'currentCellChanged': JetElementCustomEvent<ojDataGrid<K, D>["currentCell"]>;
    'dataChanged': JetElementCustomEvent<ojDataGrid<K, D>["data"]>;
    'dndChanged': JetElementCustomEvent<ojDataGrid<K, D>["dnd"]>;
    'editModeChanged': JetElementCustomEvent<ojDataGrid<K, D>["editMode"]>;
    'gridlinesChanged': JetElementCustomEvent<ojDataGrid<K, D>["gridlines"]>;
    'headerChanged': JetElementCustomEvent<ojDataGrid<K, D>["header"]>;
    'scrollPolicyChanged': JetElementCustomEvent<ojDataGrid<K, D>["scrollPolicy"]>;
    'scrollPolicyOptionsChanged': JetElementCustomEvent<ojDataGrid<K, D>["scrollPolicyOptions"]>;
    'scrollPositionChanged': JetElementCustomEvent<ojDataGrid<K, D>["scrollPosition"]>;
    'selectionChanged': JetElementCustomEvent<ojDataGrid<K, D>["selection"]>;
    'selectionModeChanged': JetElementCustomEvent<ojDataGrid<K, D>["selectionMode"]>;
}
export interface ojDataGridSettableProperties<K, D> extends baseComponentSettableProperties {
    bandingInterval: {
        column: number;
        row: number;
    };
    cell: {
        className?: ((context: ojDataGrid.CellContext<K, D>) => string | void | null) | string | null;
        renderer?: ((context: ojDataGrid.CellContext<K, D>) => {
            insert: HTMLElement | string;
        } | void | null) | null;
        style?: ((context: ojDataGrid.CellContext<K, D>) => string | void | null) | string | null;
    };
    currentCell: ojDataGrid.CurrentCell<K> | null;
    data: DataProvider<K, D> | null;
    dnd: {
        reorder: {
            row: 'enable' | 'disable';
        };
    };
    editMode: 'none' | 'cellNavigation' | 'cellEdit';
    gridlines: {
        horizontal: 'visible' | 'hidden';
        vertical: 'visible' | 'hidden';
    };
    header: {
        column: {
            className?: ((context: ojDataGrid.HeaderContext<K, D>) => string | void | null) | string | null;
            label: {
                className?: ((context: ojDataGrid.LabelContext<K, D>) => string | void | null) | string | null;
                renderer?: ((context: ojDataGrid.LabelContext<K, D>) => {
                    insert: HTMLElement | string;
                } | void | null) | null;
                style?: ((context: ojDataGrid.LabelContext<K, D>) => string | void | null) | string | null;
            };
            renderer?: ((context: ojDataGrid.HeaderContext<K, D>) => {
                insert: HTMLElement | string;
            } | void | null) | null;
            resizable: {
                height: 'enable' | 'disable';
                width?: ((context: ojDataGrid.HeaderContext<K, D>) => string) | string | null;
            };
            sortable?: ((context: ojDataGrid.HeaderContext<K, D>) => string) | string | null;
            style?: ((context: ojDataGrid.HeaderContext<K, D>) => string | void | null) | string | null;
        };
        columnEnd: {
            className?: ((context: ojDataGrid.HeaderContext<K, D>) => string | void | null) | string | null;
            label: {
                className?: ((context: ojDataGrid.LabelContext<K, D>) => string | void | null) | string | null;
                renderer?: ((context: ojDataGrid.LabelContext<K, D>) => {
                    insert: HTMLElement | string;
                } | void | null) | null;
                style?: ((context: ojDataGrid.HeaderContext<K, D>) => string | void | null) | string | null;
            };
            renderer?: ((context: ojDataGrid.HeaderContext<K, D>) => {
                insert: HTMLElement | string;
            } | void | null) | null;
            resizable: {
                height: 'enable' | 'disable';
                width?: ((context: ojDataGrid.HeaderContext<K, D>) => string) | string | null;
            };
            style?: ((context: ojDataGrid.HeaderContext<K, D>) => string | void | null) | string | null;
        };
        row: {
            className?: ((context: ojDataGrid.HeaderContext<K, D>) => string | void | null) | string | null;
            label: {
                className?: ((context: ojDataGrid.LabelContext<K, D>) => string | void | null) | string | null;
                renderer?: ((context: ojDataGrid.LabelContext<K, D>) => {
                    insert: HTMLElement | string;
                } | void | null) | null;
                style?: ((context: ojDataGrid.LabelContext<K, D>) => string | void | null) | string | null;
            };
            renderer?: ((context: ojDataGrid.HeaderContext<K, D>) => {
                insert: HTMLElement | string;
            } | void | null) | null;
            resizable: {
                height?: ((context: ojDataGrid.HeaderContext<K, D>) => string) | string | null;
                width: 'enable' | 'disable';
            };
            sortable?: ((context: ojDataGrid.HeaderContext<K, D>) => string) | string | null;
            style?: ((context: ojDataGrid.HeaderContext<K, D>) => string | void | null) | string | null;
        };
        rowEnd: {
            className?: ((context: ojDataGrid.HeaderContext<K, D>) => string | void | null) | string | null;
            label: {
                className?: ((context: ojDataGrid.LabelContext<K, D>) => string | void | null) | string | null;
                renderer?: ((context: ojDataGrid.LabelContext<K, D>) => {
                    insert: HTMLElement | string;
                } | void | null) | null;
                style?: ((context: ojDataGrid.LabelContext<K, D>) => string | void | null) | string | null;
            };
            renderer?: ((context: ojDataGrid.HeaderContext<K, D>) => {
                insert: HTMLElement | string;
            } | void | null) | null;
            resizable: {
                height?: ((context: ojDataGrid.HeaderContext<K, D>) => string) | string | null;
                width: 'enable' | 'disable';
            };
            style?: ((context: ojDataGrid.HeaderContext<K, D>) => string | void | null) | string | null;
        };
    };
    scrollPolicy: 'auto' | 'loadMoreOnScroll' | 'scroll';
    scrollPolicyOptions: {
        maxColumnCount: number;
        maxRowCount: number;
    };
    scrollPosition: {
        x?: number;
        y?: number;
        rowIndex?: number;
        columnIndex?: number;
        rowKey?: K;
        columnKey?: K;
        offsetX?: number;
        offsetY?: number;
    };
    selection: Array<ojDataGrid.Selection<K>>;
    selectionMode: {
        cell: 'none' | 'single' | 'multiple';
        row: 'none' | 'single' | 'multiple';
    };
    translations: {
        accessibleActionableMode?: string;
        accessibleColumnContext?: string;
        accessibleColumnEndHeaderContext?: string;
        accessibleColumnHeaderContext?: string;
        accessibleColumnSelected?: string;
        accessibleColumnSpanContext?: string;
        accessibleFirstColumn?: string;
        accessibleFirstRow?: string;
        accessibleLastColumn?: string;
        accessibleLastRow?: string;
        accessibleLevelContext?: string;
        accessibleMultiCellSelected?: string;
        accessibleNavigationMode?: string;
        accessibleRangeSelectModeOff?: string;
        accessibleRangeSelectModeOn?: string;
        accessibleRowCollapsed?: string;
        accessibleRowContext?: string;
        accessibleRowEndHeaderContext?: string;
        accessibleRowExpanded?: string;
        accessibleRowHeaderContext?: string;
        accessibleRowSelected?: string;
        accessibleRowSpanContext?: string;
        accessibleSelectionAffordanceBottom?: string;
        accessibleSelectionAffordanceTop?: string;
        accessibleSortAscending?: string;
        accessibleSortDescending?: string;
        accessibleStateSelected?: string;
        accessibleSummaryEstimate?: string;
        accessibleSummaryExact?: string;
        accessibleSummaryExpanded?: string;
        labelCut?: string;
        labelDisableNonContiguous?: string;
        labelEnableNonContiguous?: string;
        labelPaste?: string;
        labelResize?: string;
        labelResizeDialogSubmit?: string;
        labelResizeHeight?: string;
        labelResizeWidth?: string;
        labelSortCol?: string;
        labelSortColAsc?: string;
        labelSortColDsc?: string;
        labelSortRow?: string;
        labelSortRowAsc?: string;
        labelSortRowDsc?: string;
        msgFetchingData?: string;
        msgNoData?: string;
    };
}
export interface ojDataGridSettablePropertiesLenient<K, D> extends Partial<ojDataGridSettableProperties<K, D>> {
    [key: string]: any;
}
