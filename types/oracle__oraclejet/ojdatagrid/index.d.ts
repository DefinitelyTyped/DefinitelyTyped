import {
    baseComponent,
    baseComponentEventMap,
    baseComponentSettableProperties,
    JetElementCustomEvent,
    JetSetPropertyType,
} from "..";
import { DataProvider } from "../ojdataprovider";
export interface ojDataGrid<K, D> extends baseComponent<ojDataGridSettableProperties<K, D>> {
    bandingInterval: {
        column: number;
        row: number;
    };
    cell: {
        className?: ((context: ojDataGrid.CellContext<K, D>) => string | void | null) | string | null | undefined;
        renderer?:
            | ((context: ojDataGrid.CellContext<K, D>) =>
                | {
                    insert: HTMLElement | string;
                }
                | void
                | null)
            | null
            | undefined;
        style?: ((context: ojDataGrid.CellContext<K, D>) => string | void | null) | string | null | undefined;
    };
    currentCell: ojDataGrid.CurrentCell<K> | null;
    data: DataProvider<K, D>;
    dnd: {
        reorder: {
            row: "enable" | "disable";
        };
    };
    editMode: "none" | "cellNavigation" | "cellEdit";
    gridlines: {
        horizontal: "visible" | "hidden";
        vertical: "visible" | "hidden";
    };
    header: {
        column: {
            className?: ((context: ojDataGrid.HeaderContext<K, D>) => string | void | null) | string | null | undefined;
            label: {
                className?:
                    | ((context: ojDataGrid.LabelContext<K, D>) => string | void | null)
                    | string
                    | null
                    | undefined;
                renderer?:
                    | ((context: ojDataGrid.LabelContext<K, D>) =>
                        | {
                            insert: HTMLElement | string;
                        }
                        | void
                        | null)
                    | null
                    | undefined;
                style?: ((context: ojDataGrid.LabelContext<K, D>) => string | void | null) | string | null | undefined;
            };
            renderer?:
                | ((context: ojDataGrid.HeaderContext<K, D>) =>
                    | {
                        insert: HTMLElement | string;
                    }
                    | void
                    | null)
                | null
                | undefined;
            resizable: {
                height: "enable" | "disable";
                width?: ((context: ojDataGrid.HeaderContext<K, D>) => string) | string | null | undefined;
            };
            sortable?: ((context: ojDataGrid.HeaderContext<K, D>) => string) | string | null | undefined;
            style?: ((context: ojDataGrid.HeaderContext<K, D>) => string | void | null) | string | null | undefined;
        };
        columnEnd: {
            className?: ((context: ojDataGrid.HeaderContext<K, D>) => string | void | null) | string | null | undefined;
            label: {
                className?:
                    | ((context: ojDataGrid.LabelContext<K, D>) => string | void | null)
                    | string
                    | null
                    | undefined;
                renderer?:
                    | ((context: ojDataGrid.LabelContext<K, D>) =>
                        | {
                            insert: HTMLElement | string;
                        }
                        | void
                        | null)
                    | null
                    | undefined;
                style?: ((context: ojDataGrid.HeaderContext<K, D>) => string | void | null) | string | null | undefined;
            };
            renderer?:
                | ((context: ojDataGrid.HeaderContext<K, D>) =>
                    | {
                        insert: HTMLElement | string;
                    }
                    | void
                    | null)
                | null
                | undefined;
            resizable: {
                height: "enable" | "disable";
                width?: ((context: ojDataGrid.HeaderContext<K, D>) => string) | string | null | undefined;
            };
            style?: ((context: ojDataGrid.HeaderContext<K, D>) => string | void | null) | string | null | undefined;
        };
        row: {
            className?: ((context: ojDataGrid.HeaderContext<K, D>) => string | void | null) | string | null | undefined;
            label: {
                className?:
                    | ((context: ojDataGrid.LabelContext<K, D>) => string | void | null)
                    | string
                    | null
                    | undefined;
                renderer?:
                    | ((context: ojDataGrid.LabelContext<K, D>) =>
                        | {
                            insert: HTMLElement | string;
                        }
                        | void
                        | null)
                    | null
                    | undefined;
                style?: ((context: ojDataGrid.LabelContext<K, D>) => string | void | null) | string | null | undefined;
            };
            renderer?:
                | ((context: ojDataGrid.HeaderContext<K, D>) =>
                    | {
                        insert: HTMLElement | string;
                    }
                    | void
                    | null)
                | null
                | undefined;
            resizable: {
                height?: ((context: ojDataGrid.HeaderContext<K, D>) => string) | string | null | undefined;
                width: "enable" | "disable";
            };
            sortable?: ((context: ojDataGrid.HeaderContext<K, D>) => string) | string | null | undefined;
            style?: ((context: ojDataGrid.HeaderContext<K, D>) => string | void | null) | string | null | undefined;
        };
        rowEnd: {
            className?: ((context: ojDataGrid.HeaderContext<K, D>) => string | void | null) | string | null | undefined;
            label: {
                className?:
                    | ((context: ojDataGrid.LabelContext<K, D>) => string | void | null)
                    | string
                    | null
                    | undefined;
                renderer?:
                    | ((context: ojDataGrid.LabelContext<K, D>) =>
                        | {
                            insert: HTMLElement | string;
                        }
                        | void
                        | null)
                    | null
                    | undefined;
                style?: ((context: ojDataGrid.LabelContext<K, D>) => string | void | null) | string | null | undefined;
            };
            renderer?:
                | ((context: ojDataGrid.HeaderContext<K, D>) =>
                    | {
                        insert: HTMLElement | string;
                    }
                    | void
                    | null)
                | null
                | undefined;
            resizable: {
                height?: ((context: ojDataGrid.HeaderContext<K, D>) => string) | string | null | undefined;
                width: "enable" | "disable";
            };
            style?: ((context: ojDataGrid.HeaderContext<K, D>) => string | void | null) | string | null | undefined;
        };
    };
    scrollPolicy: "auto" | "loadMoreOnScroll" | "scroll";
    scrollPolicyOptions: {
        maxColumnCount: number;
        maxRowCount: number;
    };
    scrollPosition: {
        x?: number | undefined;
        y?: number | undefined;
        rowIndex?: number | undefined;
        columnIndex?: number | undefined;
        rowKey?: K | undefined;
        columnKey?: K | undefined;
        offsetX?: number | undefined;
        offsetY?: number | undefined;
    };
    selection: Array<ojDataGrid.Selection<K>>;
    selectionMode: {
        cell: "none" | "single" | "multiple";
        row: "none" | "single" | "multiple";
    };
    translations: {
        accessibleActionableMode?: string | undefined;
        accessibleColumnContext?: string | undefined;
        accessibleColumnEndHeaderContext?: string | undefined;
        accessibleColumnHeaderContext?: string | undefined;
        accessibleColumnSelected?: string | undefined;
        accessibleColumnSpanContext?: string | undefined;
        accessibleFirstColumn?: string | undefined;
        accessibleFirstRow?: string | undefined;
        accessibleLastColumn?: string | undefined;
        accessibleLastRow?: string | undefined;
        accessibleLevelContext?: string | undefined;
        accessibleMultiCellSelected?: string | undefined;
        accessibleNavigationMode?: string | undefined;
        accessibleRangeSelectModeOff?: string | undefined;
        accessibleRangeSelectModeOn?: string | undefined;
        accessibleRowCollapsed?: string | undefined;
        accessibleRowContext?: string | undefined;
        accessibleRowEndHeaderContext?: string | undefined;
        accessibleRowExpanded?: string | undefined;
        accessibleRowHeaderContext?: string | undefined;
        accessibleRowSelected?: string | undefined;
        accessibleRowSpanContext?: string | undefined;
        accessibleSelectionAffordanceBottom?: string | undefined;
        accessibleSelectionAffordanceTop?: string | undefined;
        accessibleSortAscending?: string | undefined;
        accessibleSortDescending?: string | undefined;
        accessibleStateSelected?: string | undefined;
        accessibleSummaryEstimate?: string | undefined;
        accessibleSummaryExact?: string | undefined;
        accessibleSummaryExpanded?: string | undefined;
        labelCut?: string | undefined;
        labelDisableNonContiguous?: string | undefined;
        labelEnableNonContiguous?: string | undefined;
        labelPaste?: string | undefined;
        labelResize?: string | undefined;
        labelResizeDialogSubmit?: string | undefined;
        labelResizeHeight?: string | undefined;
        labelResizeWidth?: string | undefined;
        labelSortCol?: string | undefined;
        labelSortColAsc?: string | undefined;
        labelSortColDsc?: string | undefined;
        labelSortRow?: string | undefined;
        labelSortRowAsc?: string | undefined;
        labelSortRowDsc?: string | undefined;
        msgFetchingData?: string | undefined;
        msgNoData?: string | undefined;
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
    onScrollPolicyOptionsChanged:
        | ((event: JetElementCustomEvent<ojDataGrid<K, D>["scrollPolicyOptions"]>) => any)
        | null;
    onScrollPositionChanged: ((event: JetElementCustomEvent<ojDataGrid<K, D>["scrollPosition"]>) => any) | null;
    onSelectionChanged: ((event: JetElementCustomEvent<ojDataGrid<K, D>["selection"]>) => any) | null;
    onSelectionModeChanged: ((event: JetElementCustomEvent<ojDataGrid<K, D>["selectionMode"]>) => any) | null;
    onOjBeforeCurrentCell: ((event: ojDataGrid.ojBeforeCurrentCell<K>) => any) | null;
    onOjBeforeEdit: ((event: ojDataGrid.ojBeforeEdit<K, D>) => any) | null;
    onOjBeforeEditEnd: ((event: ojDataGrid.ojBeforeEditEnd<K, D>) => any) | null;
    onOjResize: ((event: ojDataGrid.ojResize) => any) | null;
    onOjScroll: ((event: ojDataGrid.ojScroll) => any) | null;
    onOjSort: ((event: ojDataGrid.ojSort) => any) | null;
    addEventListener<T extends keyof ojDataGridEventMap<K, D>>(
        type: T,
        listener: (this: HTMLElement, ev: ojDataGridEventMap<K, D>[T]) => any,
        useCapture?: boolean,
    ): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    getProperty<T extends keyof ojDataGridSettableProperties<K, D>>(property: T): ojDataGrid<K, D>[T];
    getProperty(property: string): any;
    setProperty<T extends keyof ojDataGridSettableProperties<K, D>>(
        property: T,
        value: ojDataGridSettableProperties<K, D>[T],
    ): void;
    setProperty<T extends string>(property: T, value: JetSetPropertyType<T, ojDataGridSettableProperties<K, D>>): void;
    setProperties(properties: ojDataGridSettablePropertiesLenient<K, D>): void;
    getContextByNode(node: Element):
        | ojDataGrid.CellContext<K, D> & {
            subId: "oj-datagrid-cell";
        }
        | ojDataGrid.HeaderContext<K, D> & {
            subId: "oj-datagrid-header";
        }
        | ojDataGrid.LabelContext<K, D> & {
            subId: "oj-datagrid-header-label";
        };
    refresh(): void;
}
export namespace ojDataGrid {
    interface ojBeforeCurrentCell<K> extends
        CustomEvent<{
            currentCell: CurrentCell<K>;
            previousCurrentCell: CurrentCell<K>;
            [propName: string]: any;
        }>
    {
    }
    interface ojBeforeEdit<K, D> extends
        CustomEvent<{
            cellContext: CellContext<K, D>;
            [propName: string]: any;
        }>
    {
    }
    interface ojBeforeEditEnd<K, D> extends
        CustomEvent<{
            cellContext: CellContext<K, D>;
            cancelEdit: boolean;
            [propName: string]: any;
        }>
    {
    }
    interface ojResize extends
        CustomEvent<{
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
        }>
    {
    }
    interface ojScroll extends
        CustomEvent<{
            scrollX: number;
            scrollY: number;
            [propName: string]: any;
        }>
    {
    }
    interface ojSort extends
        CustomEvent<{
            header: any;
            direction: "ascending" | "descending";
            [propName: string]: any;
        }>
    {
    }
    // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
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
        mode: "edit" | "navigation";
    };
    // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
    type CurrentCell<K> = {
        type: "cell" | "header" | "label";
        axis?: "column" | "columnEnd" | "row" | "rowEnd" | undefined;
        index?: number | undefined;
        level?: number | undefined;
        key?: any;
        indexes?: {
            row: number;
            column: number;
        } | undefined;
        keys?: {
            row: K;
            column: K;
        } | undefined;
    };
    // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
    type HeaderContext<K, D> = {
        componentElement: Element;
        parentElement: Element;
        data: D;
        datasource: DataProvider<K, D> | null;
        axis: "column" | "columnEnd" | "row" | "rowEnd";
        index: number;
        key: K;
        level: number;
        extent: number;
        depth: number;
    };
    // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
    type LabelContext<K, D> = {
        componentElement: Element;
        parentElement: Element;
        datasource: DataProvider<K, D> | null;
        axis: "column" | "columnEnd" | "row" | "rowEnd";
        key: K;
        level: number;
    };
    // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
    type Selection<K> = {
        startIndex?: {
            row: number;
            column?: number | undefined;
        } | undefined;
        startKey?: {
            row: K;
            column?: K | undefined;
        } | undefined;
        endIndex?: {
            row: number;
            column?: number | undefined;
        } | undefined;
        endKey?: {
            row: K;
            column?: K | undefined;
        } | undefined;
    };
}
export interface ojDataGridEventMap<K, D> extends baseComponentEventMap<ojDataGridSettableProperties<K, D>> {
    "ojBeforeCurrentCell": ojDataGrid.ojBeforeCurrentCell<K>;
    "ojBeforeEdit": ojDataGrid.ojBeforeEdit<K, D>;
    "ojBeforeEditEnd": ojDataGrid.ojBeforeEditEnd<K, D>;
    "ojResize": ojDataGrid.ojResize;
    "ojScroll": ojDataGrid.ojScroll;
    "ojSort": ojDataGrid.ojSort;
    "bandingIntervalChanged": JetElementCustomEvent<ojDataGrid<K, D>["bandingInterval"]>;
    "cellChanged": JetElementCustomEvent<ojDataGrid<K, D>["cell"]>;
    "currentCellChanged": JetElementCustomEvent<ojDataGrid<K, D>["currentCell"]>;
    "dataChanged": JetElementCustomEvent<ojDataGrid<K, D>["data"]>;
    "dndChanged": JetElementCustomEvent<ojDataGrid<K, D>["dnd"]>;
    "editModeChanged": JetElementCustomEvent<ojDataGrid<K, D>["editMode"]>;
    "gridlinesChanged": JetElementCustomEvent<ojDataGrid<K, D>["gridlines"]>;
    "headerChanged": JetElementCustomEvent<ojDataGrid<K, D>["header"]>;
    "scrollPolicyChanged": JetElementCustomEvent<ojDataGrid<K, D>["scrollPolicy"]>;
    "scrollPolicyOptionsChanged": JetElementCustomEvent<ojDataGrid<K, D>["scrollPolicyOptions"]>;
    "scrollPositionChanged": JetElementCustomEvent<ojDataGrid<K, D>["scrollPosition"]>;
    "selectionChanged": JetElementCustomEvent<ojDataGrid<K, D>["selection"]>;
    "selectionModeChanged": JetElementCustomEvent<ojDataGrid<K, D>["selectionMode"]>;
}
export interface ojDataGridSettableProperties<K, D> extends baseComponentSettableProperties {
    bandingInterval: {
        column: number;
        row: number;
    };
    cell: {
        className?: ((context: ojDataGrid.CellContext<K, D>) => string | void | null) | string | null | undefined;
        renderer?:
            | ((context: ojDataGrid.CellContext<K, D>) =>
                | {
                    insert: HTMLElement | string;
                }
                | void
                | null)
            | null
            | undefined;
        style?: ((context: ojDataGrid.CellContext<K, D>) => string | void | null) | string | null | undefined;
    };
    currentCell: ojDataGrid.CurrentCell<K> | null;
    data: DataProvider<K, D> | null;
    dnd: {
        reorder: {
            row: "enable" | "disable";
        };
    };
    editMode: "none" | "cellNavigation" | "cellEdit";
    gridlines: {
        horizontal: "visible" | "hidden";
        vertical: "visible" | "hidden";
    };
    header: {
        column: {
            className?: ((context: ojDataGrid.HeaderContext<K, D>) => string | void | null) | string | null | undefined;
            label: {
                className?:
                    | ((context: ojDataGrid.LabelContext<K, D>) => string | void | null)
                    | string
                    | null
                    | undefined;
                renderer?:
                    | ((context: ojDataGrid.LabelContext<K, D>) =>
                        | {
                            insert: HTMLElement | string;
                        }
                        | void
                        | null)
                    | null
                    | undefined;
                style?: ((context: ojDataGrid.LabelContext<K, D>) => string | void | null) | string | null | undefined;
            };
            renderer?:
                | ((context: ojDataGrid.HeaderContext<K, D>) =>
                    | {
                        insert: HTMLElement | string;
                    }
                    | void
                    | null)
                | null
                | undefined;
            resizable: {
                height: "enable" | "disable";
                width?: ((context: ojDataGrid.HeaderContext<K, D>) => string) | string | null | undefined;
            };
            sortable?: ((context: ojDataGrid.HeaderContext<K, D>) => string) | string | null | undefined;
            style?: ((context: ojDataGrid.HeaderContext<K, D>) => string | void | null) | string | null | undefined;
        };
        columnEnd: {
            className?: ((context: ojDataGrid.HeaderContext<K, D>) => string | void | null) | string | null | undefined;
            label: {
                className?:
                    | ((context: ojDataGrid.LabelContext<K, D>) => string | void | null)
                    | string
                    | null
                    | undefined;
                renderer?:
                    | ((context: ojDataGrid.LabelContext<K, D>) =>
                        | {
                            insert: HTMLElement | string;
                        }
                        | void
                        | null)
                    | null
                    | undefined;
                style?: ((context: ojDataGrid.HeaderContext<K, D>) => string | void | null) | string | null | undefined;
            };
            renderer?:
                | ((context: ojDataGrid.HeaderContext<K, D>) =>
                    | {
                        insert: HTMLElement | string;
                    }
                    | void
                    | null)
                | null
                | undefined;
            resizable: {
                height: "enable" | "disable";
                width?: ((context: ojDataGrid.HeaderContext<K, D>) => string) | string | null | undefined;
            };
            style?: ((context: ojDataGrid.HeaderContext<K, D>) => string | void | null) | string | null | undefined;
        };
        row: {
            className?: ((context: ojDataGrid.HeaderContext<K, D>) => string | void | null) | string | null | undefined;
            label: {
                className?:
                    | ((context: ojDataGrid.LabelContext<K, D>) => string | void | null)
                    | string
                    | null
                    | undefined;
                renderer?:
                    | ((context: ojDataGrid.LabelContext<K, D>) =>
                        | {
                            insert: HTMLElement | string;
                        }
                        | void
                        | null)
                    | null
                    | undefined;
                style?: ((context: ojDataGrid.LabelContext<K, D>) => string | void | null) | string | null | undefined;
            };
            renderer?:
                | ((context: ojDataGrid.HeaderContext<K, D>) =>
                    | {
                        insert: HTMLElement | string;
                    }
                    | void
                    | null)
                | null
                | undefined;
            resizable: {
                height?: ((context: ojDataGrid.HeaderContext<K, D>) => string) | string | null | undefined;
                width: "enable" | "disable";
            };
            sortable?: ((context: ojDataGrid.HeaderContext<K, D>) => string) | string | null | undefined;
            style?: ((context: ojDataGrid.HeaderContext<K, D>) => string | void | null) | string | null | undefined;
        };
        rowEnd: {
            className?: ((context: ojDataGrid.HeaderContext<K, D>) => string | void | null) | string | null | undefined;
            label: {
                className?:
                    | ((context: ojDataGrid.LabelContext<K, D>) => string | void | null)
                    | string
                    | null
                    | undefined;
                renderer?:
                    | ((context: ojDataGrid.LabelContext<K, D>) =>
                        | {
                            insert: HTMLElement | string;
                        }
                        | void
                        | null)
                    | null
                    | undefined;
                style?: ((context: ojDataGrid.LabelContext<K, D>) => string | void | null) | string | null | undefined;
            };
            renderer?:
                | ((context: ojDataGrid.HeaderContext<K, D>) =>
                    | {
                        insert: HTMLElement | string;
                    }
                    | void
                    | null)
                | null
                | undefined;
            resizable: {
                height?: ((context: ojDataGrid.HeaderContext<K, D>) => string) | string | null | undefined;
                width: "enable" | "disable";
            };
            style?: ((context: ojDataGrid.HeaderContext<K, D>) => string | void | null) | string | null | undefined;
        };
    };
    scrollPolicy: "auto" | "loadMoreOnScroll" | "scroll";
    scrollPolicyOptions: {
        maxColumnCount: number;
        maxRowCount: number;
    };
    scrollPosition: {
        x?: number | undefined;
        y?: number | undefined;
        rowIndex?: number | undefined;
        columnIndex?: number | undefined;
        rowKey?: K | undefined;
        columnKey?: K | undefined;
        offsetX?: number | undefined;
        offsetY?: number | undefined;
    };
    selection: Array<ojDataGrid.Selection<K>>;
    selectionMode: {
        cell: "none" | "single" | "multiple";
        row: "none" | "single" | "multiple";
    };
    translations: {
        accessibleActionableMode?: string | undefined;
        accessibleColumnContext?: string | undefined;
        accessibleColumnEndHeaderContext?: string | undefined;
        accessibleColumnHeaderContext?: string | undefined;
        accessibleColumnSelected?: string | undefined;
        accessibleColumnSpanContext?: string | undefined;
        accessibleFirstColumn?: string | undefined;
        accessibleFirstRow?: string | undefined;
        accessibleLastColumn?: string | undefined;
        accessibleLastRow?: string | undefined;
        accessibleLevelContext?: string | undefined;
        accessibleMultiCellSelected?: string | undefined;
        accessibleNavigationMode?: string | undefined;
        accessibleRangeSelectModeOff?: string | undefined;
        accessibleRangeSelectModeOn?: string | undefined;
        accessibleRowCollapsed?: string | undefined;
        accessibleRowContext?: string | undefined;
        accessibleRowEndHeaderContext?: string | undefined;
        accessibleRowExpanded?: string | undefined;
        accessibleRowHeaderContext?: string | undefined;
        accessibleRowSelected?: string | undefined;
        accessibleRowSpanContext?: string | undefined;
        accessibleSelectionAffordanceBottom?: string | undefined;
        accessibleSelectionAffordanceTop?: string | undefined;
        accessibleSortAscending?: string | undefined;
        accessibleSortDescending?: string | undefined;
        accessibleStateSelected?: string | undefined;
        accessibleSummaryEstimate?: string | undefined;
        accessibleSummaryExact?: string | undefined;
        accessibleSummaryExpanded?: string | undefined;
        labelCut?: string | undefined;
        labelDisableNonContiguous?: string | undefined;
        labelEnableNonContiguous?: string | undefined;
        labelPaste?: string | undefined;
        labelResize?: string | undefined;
        labelResizeDialogSubmit?: string | undefined;
        labelResizeHeight?: string | undefined;
        labelResizeWidth?: string | undefined;
        labelSortCol?: string | undefined;
        labelSortColAsc?: string | undefined;
        labelSortColDsc?: string | undefined;
        labelSortRow?: string | undefined;
        labelSortRowAsc?: string | undefined;
        labelSortRowDsc?: string | undefined;
        msgFetchingData?: string | undefined;
        msgNoData?: string | undefined;
    };
}
export interface ojDataGridSettablePropertiesLenient<K, D> extends Partial<ojDataGridSettableProperties<K, D>> {
    [key: string]: any;
}
