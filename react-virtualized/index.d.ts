// Type definitions for react-virtualized
// Project: https://github.com/bvaughn/react-virtualized
// Definitions by: Ian Ker-Seymer <https://github.com/ianks>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="./../react/react.d.ts" />

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

    type WindowScrollerProps = any;
    export class WindowScroller extends React.Component<WindowScrollerProps, {}> { }
}
