// Type definitions for react-virtualized 8.9.0
// Project: https://github.com/bvaughn/react-virtualized
// Definitions by: Andrew de Waal <https://github.com/andrewdewaal>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

/// <reference types="react" />

declare module "react-virtualized" {
    import * as React from "react";

    /*
     * Components
     */

    interface VirtualScrollProps {
        className?: string;
        autoHeight?: boolean;
        estimatedRowSize?: number;
        height: number;
        noRowsRenderer?: Function;
        onRowsRendered?: (info: { overscanStartIndex: number, overscanStopIndex: number, startIndex: number, stopIndex: number }) => void;
        onScroll?: (info: { clientHeight: number, scrollHeight: number, scrollTop: number }) => void;
        overscanRowCount?: number;
        rowHeight: number | ((info: { index: number }) => number);
        rowRenderer: (info: { index: number, isScrolling: boolean }) => React.ReactNode;
        rowClassName?: string | ((info: { index: number }) => string);
        rowCount: number;
        rowStyle?: React.CSSProperties | ((info: { index: number }) => React.CSSProperties);
        scrollToAlignment?: string;
        scrollToIndex?: number;
        scrollTop?: number;
        style?: React.CSSProperties;
        tabIndex?: number;
        width: number;
    }
    export class VirtualScroll extends React.Component<VirtualScrollProps, {}> { }

    type CollectionProps = any;
    export class Collection extends React.Component<CollectionProps, {}> { }

    type FlexTableProps = any;
    export class FlexTable extends React.Component<FlexTableProps, {}> { }

    type FlexColumnProps = any;
    export class FlexColumn extends React.Component<FlexColumnProps, {}> { }

    type SortDirectionProps = any;
    export class SortDirection extends React.Component<SortDirectionProps, {}> { }

    type GridProps = any;
    export class Grid extends React.Component<GridProps, {}> { }

    interface ListProps {
        className?: string;
        autoHeight?: boolean;
        estimatedRowSize?: number;
        height: number;
        noRowsRenderer?: Function;
        onRowsRendered?: (info: { overscanStartIndex: number, overscanStopIndex: number, startIndex: number, stopIndex: number }) => void;
        onScroll?: (info: { clientHeight: number, scrollHeight: number, scrollTop: number }) => void;
        overscanRowCount?: number;
        rowHeight: number | ((info: { index: number }) => number);
        rowRenderer: (info: { index: number, isScrolling: boolean }) => React.ReactNode;
        rowCount: number;
        scrollToAlignment?: string;
        scrollToIndex?: number;
        scrollTop?: number;
        style?: React.CSSProperties;
        tabIndex?: number;
        width: number;
    }
    export class List extends React.Component<ListProps, {}> { }

    // https://github.com/bvaughn/react-virtualized/blob/master/docs/Column.md
    interface ColumnProps {
    	cellDataGetter?: (info: { columnData: any, dataKey: string, rowData: any }) => any;
	cellRenderer?: (info: { cellData: any, columnData: any, dataKey: string, isScrolling: boolean, rowData: any, rowIndex: number }) => any;
	className?: string;
	columnData?: any;
	dataKey: any;
	disableSort?: boolean;
	flexGrow?: number;
	flexShrink?: number;
	headerClassName?: string;
	headerRenderer?: (info: { columnData: any, dataKey: string, disableSort: boolean, label: string, sortBy: string, sortDirection: string }) => any;
	label?: string;
	maxWidth?: number;
	minWidth?: number;
	style?: React.CSSProperties;
	width: number;
    }

    export class Column extends React.Component<ColumnProps, {}> { }

    // ref: https://github.com/bvaughn/react-virtualized/blob/master/docs/Table.md
    interface TableProps {
        autoHeight?: boolean;
        children?: React.ReactNode;
        className?: string;
        disableHeader?: boolean;
        estimatedRowSize?: number;
        gridClassName?: string;
        gridStyle?: any;
        headerClassName?: string;
        headerHeight: number;
        headerStyle?: any;
        height: number;
        id?: string;
        noRowsRender?: () => void;
        onHeaderClick?: (dataKey: string, columnData: any) => void;
        onRowClick?: (info: { index: number }) => void;
        onRowDoubleClick?: (info: { index: number }) => void;
        onRowMouseOut?: (info: { index: number }) => void;
        onRowMouseOver?: (info: { index: number }) => void;
        onRowsRendered?: (info: { index: number }) => void;
        overscanRowCount?: number;
        onScroll?: (info: { clientHeight: number, scrollHeight: number, scrollTop: number }) => void;
        rowClassName?: string | ((info: { index: number }) => string);
        rowCount: number;
        rowGetter?: (info: { index: number }) => any;
        rowHeight: number | ((info: { index: number }) => number);
        rowRenderer?: (info: { index: number, isScrolling: boolean }) => React.ReactNode;
        rowStyle?: React.CSSProperties | ((info: { index: number }) => React.CSSProperties);
        scrollToAlignment?: string;
        scrollToIndex?: number;
        scrollTop?: number;
        sort?: (info: { sortBy: string, sortDirection: 'ASC' | 'DESC' }) => void;
        sortBy?: string;
        sortDirection?: 'ASC' | 'DESC';
        style?: React.CSSProperties;
        tabIndex?: number;
        width: number;
    }

    export class Table extends React.Component<TableProps, {}> { }

    /*
     * Higher-Order Components
     */

    interface AutoSizerProps {
        disableHeight?: boolean;
        disableWidth?: boolean;
        onResize?: (info: { height: number, width: number }) => any;
    }
    export class AutoSizer extends React.Component<AutoSizerProps, {}> { }

    interface ArrowKeyStepperProps {
        children?: React.StatelessComponent<{
            onSectionRendered: Function,
            scrollToColumn: number,
            scrollToRow: number
        }>;
        className?: string;
        columnCount: number;
        rowCount: number;
    }
    export class ArrowKeyStepper extends React.Component<ArrowKeyStepperProps, {}> { }

    interface CellMeasurerProps {
        cellRenderer: (info: { columnIndex: number, rowIndex: number }) => React.ReactNode;
        cellSizeCache?: {
            clearAllColumnWidths(): void;
            clearAllRowHeights(): void;
            clearColumnWidth(index: number): void;
            clearRowHeight(index: number): void;
            getColumnWidth(index: number): number;
            getRowHeight(index: number): number;
            hasColumnWidth(index: number): boolean;
            hasRowHeight(index: number): boolean;
            setColumnWidth(index: number, width: number): void;
            setRowHeight(index: number, height: number): void;
        };
        children?: React.StatelessComponent<{
            getColumnWidth: () => number,
            getRowHeight: () => number,
            resetMeasurements: () => any,
            resetMeasurementsForColumn: (index: number) => any,
            resetMeasurementsForRow: (index: number) => any,
        }>;
        columnCount: number;
        container?: React.ReactType;
        height?: number;
        rowCount: number;
        width?: number;
    }
    export class CellMeasurer extends React.Component<CellMeasurerProps, {}> { }

    interface ColumnSizerProps {
        children?: React.StatelessComponent<{ adjustedWidth: number, getColumnWidth: () => number, registerChild: any }>;
        columnMaxWidth?: number;
        columnMinWidth?: number;
        columnCount?: number;
        width: number;
    }
    export class ColumnSizer extends React.Component<ColumnSizerProps, {}> { }

    type InfiniteLoaderProps = any;
    export class InfiniteLoader extends React.Component<InfiniteLoaderProps, {}> { }

    type ScrollSyncProps = any;
    export class ScrollSync extends React.Component<ScrollSyncProps, {}> { }

    export module WindowScroller {
        export type OnResizeArg = {
            height: number;
        }
        export type OnScrollArg = {
            scrollTop: number;
        }
        export type RenderCallbackArg = {
            height: number;
            scrollTop: number;
            isScrolling: boolean;
        }
        export type Props = {
            onScroll?: (arg: OnScrollArg) => void;
            onResize?: (arg: OnResizeArg) => void;
            // TODO `children` should be typed here
        };
    }
    export class WindowScroller extends React.Component<WindowScroller.Props, {}> { }
}
