import * as React from 'react';
import { PureComponent } from 'react';
import {
    ArrowKeyStepper,
    AutoSizer,
    Grid,
    Index,
    CollectionCellRendererParams,
    IndexRange,
    CellMeasurerProps,
    Size,
    TableHeaderProps,
} from 'react-virtualized';

export class ArrowKeyStepperExample extends PureComponent<any, any> {
    render() {
        const { mode } = this.state;

        return (
            <ArrowKeyStepper columnCount={100} mode={mode as 'edges'} rowCount={100}>
                {({ onSectionRendered, scrollToColumn, scrollToRow }) => (
                    <div>
                        <AutoSizer disableHeight>
                            {({ width }) => (
                                <Grid
                                    className={'styles.Grid'}
                                    columnWidth={this._getColumnWidth}
                                    columnCount={100}
                                    height={200}
                                    onSectionRendered={onSectionRendered}
                                    cellRenderer={({ columnIndex, key, rowIndex, style }) =>
                                        this._cellRenderer({
                                            columnIndex,
                                            key,
                                            rowIndex,
                                            scrollToColumn,
                                            scrollToRow,
                                            style,
                                        })
                                    }
                                    rowHeight={this._getRowHeight}
                                    rowCount={100}
                                    scrollToColumn={scrollToColumn}
                                    scrollToRow={scrollToRow}
                                    width={width}
                                />
                            )}
                        </AutoSizer>
                    </div>
                )}
            </ArrowKeyStepper>
        );
    }

    _getColumnWidth({ index }: Index) {
        return (1 + (index % 3)) * 60;
    }

    _getRowHeight({ index }: Index) {
        return (1 + (index % 3)) * 30;
    }

    _cellRenderer({ columnIndex, key, rowIndex, scrollToColumn, scrollToRow, style }: any) {
        return (
            <div className={'className'} key={key} style={style}>
                {`r:${rowIndex}, c:${columnIndex}`}
            </div>
        );
    }
}

import { List } from 'react-virtualized';

export class AutoSizerExample extends PureComponent<any, any> {
    render() {
        const { list } = this.context;
        const { hideDescription } = this.state;

        return (
            <AutoSizer>
                {({ width, height }) => (
                    <List
                        className={'styles.List'}
                        height={height}
                        rowCount={list.size}
                        rowHeight={30}
                        rowRenderer={this._rowRenderer}
                        width={width}
                    />
                )}
            </AutoSizer>
        );
    }

    _rowRenderer({ index, key, style }: any) {
        const { list } = this.context;
        const row = list.get(index);

        return (
            <div key={key} className={'styles.row'} style={style}>
                {row.name}
            </div>
        );
    }
}
import {} from 'react';
import { CellMeasurer, CellMeasurerCache, ListRowProps } from 'react-virtualized';

export class DynamicHeightList extends PureComponent<any> {
    _cache: CellMeasurerCache;

    constructor(props: any, context: any) {
        super(props, context);

        this._cache = new CellMeasurerCache({
            fixedWidth: true,
            minHeight: 50,
        });
    }

    render() {
        const { width } = this.props;

        return (
            <List
                className={'styles.BodyGrid'}
                deferredMeasurementCache={this._cache}
                height={400}
                overscanRowCount={0}
                rowCount={1000}
                rowHeight={this._cache.rowHeight}
                rowRenderer={this._rowRenderer}
                width={width}
            />
        );
    }

    _rowRenderer({ index, isScrolling, key, parent, style }: ListRowProps) {
        const { getClassName, list } = this.props;

        const datum = list.get(index % list.size);
        const classNames = getClassName({ columnIndex: 0, rowIndex: index });

        const imageWidth = 300;
        const imageHeight = datum.size * 2;

        const source = `http://fillmurray.com/${imageWidth}/${imageHeight}`;

        return (
            <CellMeasurer cache={this._cache} columnIndex={0} key={key} rowIndex={index} parent={parent}>
                {({ measure }) => (
                    <div className={classNames} style={style}>
                        <img
                            onLoad={measure}
                            src={source}
                            style={{
                                width: imageWidth,
                            }}
                        />
                    </div>
                )}
            </CellMeasurer>
        );
    }
}

import { Collection } from 'react-virtualized';

// Defines a pattern of sizes and positions for a range of 10 rotating cells
// These cells cover an area of 600 (wide) x 400 (tall)
const GUTTER_SIZE = 3;
const CELL_WIDTH = 75;

export class CollectionExample extends PureComponent<any, any> {
    context: any;
    state: any;
    _columnYMap: any;

    constructor(props: any, context: any) {
        super(props, context);

        this.context = context;

        this.state = {
            cellCount: context.list.size,
            columnCount: this._getColumnCount(context.list.size),
            height: 300,
            horizontalOverscanSize: 0,
            scrollToCell: undefined,
            showScrollingPlaceholder: false,
            verticalOverscanSize: 0,
        };

        this._columnYMap = [];
    }

    render() {
        const {
            cellCount,
            height,
            horizontalOverscanSize,
            scrollToCell,
            showScrollingPlaceholder,
            verticalOverscanSize,
        } = this.state;

        return (
            <AutoSizer disableHeight>
                {({ width }) => (
                    <Collection
                        cellCount={cellCount}
                        cellRenderer={this._cellRenderer}
                        cellSizeAndPositionGetter={this._cellSizeAndPositionGetter}
                        className={'styles.collection'}
                        height={height}
                        horizontalOverscanSize={horizontalOverscanSize}
                        noContentRenderer={this._noContentRenderer}
                        scrollToCell={scrollToCell}
                        verticalOverscanSize={verticalOverscanSize}
                        width={width}
                    />
                )}
            </AutoSizer>
        );
    }

    _cellRenderer({ index, isScrolling, key, style }: CollectionCellRendererParams) {
        const { list } = this.context;
        const { showScrollingPlaceholder } = this.state;

        const datum = list.get(index % list.size);

        return (
            <div className={'styles.cell'} key={key} style={style}>
                {showScrollingPlaceholder && isScrolling ? '...' : index}
            </div>
        );
    }

    _cellSizeAndPositionGetter({ index }: Index) {
        const { list } = this.context;
        const { columnCount } = this.state;

        const columnPosition = index % (columnCount || 1);
        const datum = list.get(index % list.size);

        // Poor man's Masonry layout; columns won't all line up equally with the bottom.
        const height = datum.size;
        const width = CELL_WIDTH;
        const x = columnPosition * (GUTTER_SIZE + width);
        const y = this._columnYMap[columnPosition] || 0;

        this._columnYMap[columnPosition] = y + height + GUTTER_SIZE;

        return {
            height,
            width,
            x,
            y,
        };
    }

    _getColumnCount(cellCount: number) {
        return Math.round(Math.sqrt(cellCount));
    }

    _noContentRenderer() {
        return <div className={'styles.noCells'}>No cells</div>;
    }
}

import { ColumnSizer } from 'react-virtualized';

export class ColumnSizerExample extends PureComponent<any, any> {
    render() {
        const { columnMaxWidth, columnMinWidth, columnCount } = this.state;

        return (
            <div>
                <AutoSizer disableHeight>
                    {({ width }) => (
                        <ColumnSizer
                            columnMaxWidth={columnMaxWidth}
                            columnMinWidth={columnMinWidth}
                            columnCount={columnCount}
                            key="GridColumnSizer"
                            width={width}
                        >
                            {({ adjustedWidth, getColumnWidth, registerChild }) => (
                                <div
                                    className={'styles.GridContainer'}
                                    style={{
                                        height: 50,
                                        width: adjustedWidth,
                                    }}
                                >
                                    <Grid
                                        ref={registerChild}
                                        columnWidth={getColumnWidth}
                                        columnCount={columnCount}
                                        height={50}
                                        noContentRenderer={this._noContentRenderer}
                                        cellRenderer={this._cellRenderer}
                                        rowHeight={50}
                                        rowCount={1}
                                        width={adjustedWidth}
                                    />
                                </div>
                            )}
                        </ColumnSizer>
                    )}
                </AutoSizer>
            </div>
        );
    }

    _noContentRenderer() {
        return <div className={'styles.noCells'}>No cells</div>;
    }

    _cellRenderer({ columnIndex, key, rowIndex, style }: GridCellProps) {
        const className = columnIndex === 0 ? 'styles.firstCell' : 'styles.cell';

        return (
            <div className={className} key={key} style={style}>
                {`R:${rowIndex}, C:${columnIndex}`}
            </div>
        );
    }
}

export class GridExample extends PureComponent<any, any> {
    state = {
        columnCount: 1000,
        height: 300,
        overscanColumnCount: 0,
        overscanRowCount: 10,
        rowHeight: 40,
        rowCount: 1000,
        scrollToColumn: undefined,
        scrollToRow: undefined,
        useDynamicRowHeight: false,
    };

    render() {
        const {
            columnCount,
            height,
            overscanColumnCount,
            overscanRowCount,
            rowHeight,
            rowCount,
            scrollToColumn,
            scrollToRow,
            useDynamicRowHeight,
        } = this.state;

        return (
            <AutoSizer disableHeight>
                {({ width }) => (
                    <Grid
                        cellRenderer={this._cellRenderer}
                        className={'styles.BodyGrid'}
                        columnWidth={this._getColumnWidth}
                        columnCount={columnCount}
                        height={height}
                        noContentRenderer={this._noContentRenderer}
                        overscanColumnCount={overscanColumnCount}
                        overscanRowCount={overscanRowCount}
                        rowHeight={useDynamicRowHeight ? this._getRowHeight : rowHeight}
                        rowCount={rowCount}
                        scrollToColumn={scrollToColumn}
                        scrollToRow={scrollToRow}
                        width={width}
                    />
                )}
            </AutoSizer>
        );
    }

    _cellRenderer(params: GridCellProps) {
        if (params.columnIndex === 0) {
            return this._renderLeftSideCell(params);
        } else {
            return this._renderBodyCell(params);
        }
    }

    _getColumnWidth({ index }: Index) {
        switch (index) {
            case 0:
                return 50;
            case 1:
                return 100;
            case 2:
                return 300;
            default:
                return 80;
        }
    }

    _getDatum(index: number) {
        const { list } = this.context;

        return list.get(index % list.size);
    }

    _getRowClassName(row: number) {
        return row % 2 === 0 ? 'styles.evenRow' : 'styles.oddRow';
    }

    _getRowHeight({ index }: Index) {
        return this._getDatum(index).size;
    }

    _noContentRenderer() {
        return <div className={'styles.noCells'}>No cells</div>;
    }

    _renderBodyCell({ columnIndex, key, rowIndex, style }: GridCellProps) {
        const rowClass = this._getRowClassName(rowIndex);
        const datum = this._getDatum(rowIndex);

        let content;

        switch (columnIndex) {
            case 1:
                content = datum.name;
                break;
            case 2:
                content = datum.random;
                break;
            default:
                content = `r:${rowIndex}, c:${columnIndex}`;
                break;
        }

        return (
            <div className={'classNames'} key={key} style={style}>
                {content}
            </div>
        );
    }

    _renderLeftSideCell({ key, rowIndex, style }: GridCellProps) {
        const datum = this._getDatum(rowIndex);

        // Don't modify styles.
        // These are frozen by React now (as of 16.0.0).
        // Since Grid caches and re-uses them, they aren't safe to modify.
        style = {
            ...style,
            backgroundColor: datum.color,
        };

        return (
            <div className={'classNames'} key={key} style={style}>
                {datum.name.charAt(0)}
            </div>
        );
    }
}

import { InfiniteLoader } from 'react-virtualized';

const STATUS_LOADING = 1;
const STATUS_LOADED = 2;

export class InfiniteLoaderExample extends PureComponent<any, any> {
    _timeoutIds = new Set<number>();

    componentWillUnmount() {
        this._timeoutIds.forEach(clearTimeout);
    }

    render() {
        const { list } = this.context;
        const { loadedRowCount, loadingRowCount } = this.state;

        return (
            <InfiniteLoader isRowLoaded={this._isRowLoaded} loadMoreRows={this._loadMoreRows} rowCount={list.size}>
                {({ onRowsRendered, registerChild }) => (
                    <AutoSizer disableHeight>
                        {({ width }) => (
                            <List
                                ref={registerChild}
                                className={'styles.List'}
                                height={200}
                                onRowsRendered={onRowsRendered}
                                rowCount={list.size}
                                rowHeight={30}
                                rowRenderer={this._rowRenderer}
                                width={width}
                            />
                        )}
                    </AutoSizer>
                )}
            </InfiniteLoader>
        );
    }

    _isRowLoaded({ index }: Index) {
        const { loadedRowsMap } = this.state;
        return !!loadedRowsMap[index]; // STATUS_LOADING or STATUS_LOADED
    }

    _loadMoreRows({ startIndex, stopIndex }: IndexRange) {
        const { loadedRowsMap, loadingRowCount } = this.state;
        const increment = stopIndex - startIndex + 1;

        for (let i = startIndex; i <= stopIndex; i++) {
            loadedRowsMap[i] = STATUS_LOADING;
        }

        this.setState({
            loadingRowCount: loadingRowCount + increment,
        });

        const timeoutId = setTimeout(() => {
            const { loadedRowCount, loadingRowCount } = this.state;

            this._timeoutIds.delete(timeoutId);

            for (let i = startIndex; i <= stopIndex; i++) {
                loadedRowsMap[i] = STATUS_LOADED;
            }

            this.setState({
                loadingRowCount: loadingRowCount - increment,
                loadedRowCount: loadedRowCount + increment,
            });

            promiseResolver();
        }, 1000 + Math.round(Math.random() * 2000));

        this._timeoutIds.add(timeoutId);

        let promiseResolver: () => void;

        return new Promise<void>(resolve => {
            promiseResolver = resolve;
        });
    }

    _rowRenderer({ index, key, style }: ListRowProps) {
        const { list } = this.context;
        const { loadedRowsMap } = this.state;

        const row = list.get(index);
        const content = loadedRowsMap[index] === STATUS_LOADED
            ? row.name
            : <div className={'styles.placeholder'} style={{ width: row.size }} />;

        return (
            <div className={'styles.row'} key={key} style={style}>
                {content}
            </div>
        );
    }
}

export class ListExample extends PureComponent<any, any> {
    constructor(props: any, context: any) {
        super(props, context);

        this.state = {
            listHeight: 300,
            listRowHeight: 50,
            overscanRowCount: 10,
            rowCount: context.list.size,
            scrollToIndex: undefined,
            showScrollingPlaceholder: false,
            useDynamicRowHeight: false,
        };
    }

    render() {
        const {
            listHeight,
            listRowHeight,
            overscanRowCount,
            rowCount,
            scrollToIndex,
            showScrollingPlaceholder,
            useDynamicRowHeight,
        } = this.state;

        return (
            <AutoSizer disableHeight>
                {({ width }) => (
                    <List
                        ref="List"
                        className={'styles.List'}
                        height={listHeight}
                        overscanRowCount={overscanRowCount}
                        noRowsRenderer={this._noRowsRenderer}
                        rowCount={rowCount}
                        rowHeight={useDynamicRowHeight ? this._getRowHeight : listRowHeight}
                        rowRenderer={this._rowRenderer}
                        scrollToIndex={scrollToIndex}
                        width={width}
                    />
                )}
            </AutoSizer>
        );
    }

    _getDatum(index: number) {
        const { list } = this.context;

        return list.get(index % list.size);
    }

    _getRowHeight({ index }: Index) {
        return this._getDatum(index).size;
    }

    _noRowsRenderer() {
        return <div className={'styles.noRows'}>No rows</div>;
    }

    _rowRenderer({ index, isScrolling, key, style }: ListRowProps) {
        const { showScrollingPlaceholder, useDynamicRowHeight } = this.state;

        if (showScrollingPlaceholder && isScrolling) {
            return (
                <div className={'cn(styles.row, styles.isScrollingPlaceholder)'} key={key} style={style}>
                    Scrolling...
                </div>
            );
        }

        const datum = this._getDatum(index);

        let additionalContent;

        if (useDynamicRowHeight) {
            switch (datum.size) {
                case 75:
                    additionalContent = <div>It is medium-sized.</div>;
                    break;
                case 100:
                    additionalContent = (
                        <div>
                            It is large-sized.
                            <br />
                            It has a 3rd row.
                        </div>
                    );
                    break;
            }
        }

        return (
            <div className={'styles.row'} key={key} style={style}>
                <div
                    className={'styles.letter'}
                    style={{
                        backgroundColor: datum.color,
                    }}
                >
                    {datum.name.charAt(0)}
                </div>
                <div>
                    <div className={'styles.name'}>{datum.name}</div>
                    <div className={'styles.index'}>This is row {index}</div>
                    {additionalContent}
                </div>
                {useDynamicRowHeight && <span className={'styles.height'}>{datum.size}px</span>}
            </div>
        );
    }
}

import {
    WindowScroller,
    createMasonryCellPositioner as createCellPositioner,
    Positioner,
    Masonry,
    MasonryCellProps,
} from 'react-virtualized';

export class GridExample2 extends PureComponent<any, any> {
    _columnCount: number;
    _cache: CellMeasurerCache;
    _columnHeights: any;
    _width = 0;
    _height = 0;
    _scrollTop?: number;
    _cellPositioner: Positioner;
    _masonry: Masonry;

    constructor(props: any, context: any) {
        super(props, context);

        this._columnCount = 0;

        this._cache = new CellMeasurerCache({
            defaultHeight: 250,
            defaultWidth: 200,
            fixedWidth: true,
        });

        this._columnHeights = {};

        this.state = {
            columnWidth: 200,
            height: 300,
            gutterSize: 10,
            windowScrollerEnabled: false,
        };

        this._cellRenderer = this._cellRenderer.bind(this);
        this._onResize = this._onResize.bind(this);
        this._renderAutoSizer = this._renderAutoSizer.bind(this);
        this._renderMasonry = this._renderMasonry.bind(this);
        this._setMasonryRef = this._setMasonryRef.bind(this);
    }

    render() {
        const { columnWidth, height, gutterSize, windowScrollerEnabled } = this.state;

        const child = windowScrollerEnabled ? (
            <WindowScroller>{this._renderAutoSizer}</WindowScroller>
        ) : (
            this._renderAutoSizer({ height })
        );

        return <div>{child}</div>;
    }

    _calculateColumnCount() {
        const { columnWidth, gutterSize } = this.state;

        this._columnCount = Math.floor(this._width / (columnWidth + gutterSize));
    }

    _cellRenderer({ index, key, parent, style }: MasonryCellProps) {
        const { list } = this.context;
        const { columnWidth } = this.state;

        const datum = list.get(index % list.size);

        return (
            <CellMeasurer cache={this._cache} index={index} key={key} parent={parent}>
                <div
                    className={'styles.Cell'}
                    style={{
                        ...style,
                        width: columnWidth,
                    }}
                >
                    <div
                        style={{
                            backgroundColor: datum.color,
                            borderRadius: '0.5rem',
                            height: datum.size * 3,
                            marginBottom: '0.5rem',
                            width: '100%',
                        }}
                    />
                    {datum.random}
                </div>
            </CellMeasurer>
        );
    }

    _initCellPositioner() {
        if (typeof this._cellPositioner === 'undefined') {
            const { columnWidth, gutterSize } = this.state;

            this._cellPositioner = createCellPositioner({
                cellMeasurerCache: this._cache,
                columnCount: this._columnCount,
                columnWidth,
                spacer: gutterSize,
            });
        }
    }

    _onResize({ height, width }: Size) {
        this._width = width;

        this._columnHeights = {};
        this._calculateColumnCount();
        this._resetCellPositioner();
        this._masonry.recomputeCellPositions();
    }

    _renderAutoSizer({ height, scrollTop }: { height: number; scrollTop?: number }) {
        this._height = height;
        this._scrollTop = scrollTop;

        return (
            <AutoSizer disableHeight onResize={this._onResize}>
                {this._renderMasonry}
            </AutoSizer>
        );
    }

    _renderMasonry({ width }: Size) {
        this._width = width;

        this._calculateColumnCount();
        this._initCellPositioner();

        const { height, windowScrollerEnabled } = this.state;

        return (
            <Masonry
                autoHeight={windowScrollerEnabled}
                cellCount={1000}
                cellMeasurerCache={this._cache}
                cellPositioner={this._cellPositioner}
                cellRenderer={this._cellRenderer}
                height={windowScrollerEnabled ? this._height : height}
                ref={this._setMasonryRef}
                scrollTop={this._scrollTop}
                width={width}
            />
        );
    }

    _resetCellPositioner() {
        const { columnWidth, gutterSize } = this.state;

        this._cellPositioner.reset({
            columnCount: this._columnCount,
            columnWidth,
            spacer: gutterSize,
        });
    }

    _setMasonryRef(ref: any) {
        this._masonry = ref;
    }
}

import { MultiGrid } from 'react-virtualized';

const STYLE: React.CSSProperties = {
    border: '1px solid #ddd',
    overflow: 'hidden',
};
const STYLE_BOTTOM_LEFT_GRID: React.CSSProperties = {
    borderRight: '2px solid #aaa',
    backgroundColor: '#f7f7f7',
};
const STYLE_TOP_LEFT_GRID: React.CSSProperties = {
    borderBottom: '2px solid #aaa',
    borderRight: '2px solid #aaa',
    fontWeight: 'bold',
};
const STYLE_TOP_RIGHT_GRID: React.CSSProperties = {
    borderBottom: '2px solid #aaa',
    fontWeight: 'bold',
};

export class MultiGridExample extends PureComponent<{}, any> {
    state = {
        fixedColumnCount: 2,
        fixedRowCount: 1,
        scrollToColumn: 0,
        scrollToRow: 0,
    };

    render() {
        return (
            <AutoSizer disableHeight>
                {({ width }) => (
                    <MultiGrid
                        {...this.state}
                        cellRenderer={this._cellRenderer}
                        columnWidth={75}
                        columnCount={50}
                        height={300}
                        rowHeight={40}
                        rowCount={100}
                        style={STYLE}
                        styleBottomLeftGrid={STYLE_BOTTOM_LEFT_GRID}
                        styleTopLeftGrid={STYLE_TOP_LEFT_GRID}
                        styleTopRightGrid={STYLE_TOP_RIGHT_GRID}
                        width={width}
                    />
                )}
            </AutoSizer>
        );
    }

    _cellRenderer({ columnIndex, key, rowIndex, style }: GridCellProps) {
        return (
            <div className={'styles.Cell'} key={key} style={style}>
                {columnIndex}, {rowIndex}
            </div>
        );
    }
}

import { ScrollSync } from 'react-virtualized';

const LEFT_COLOR_FROM = hexToRgb('#471061');
const LEFT_COLOR_TO = hexToRgb('#BC3959');
const TOP_COLOR_FROM = hexToRgb('#000000');
const TOP_COLOR_TO = hexToRgb('#333333');

function scrollbarSize() {
    return 42;
}
export class GridExample3 extends PureComponent<{}, any> {
    state = {
        columnWidth: 75,
        columnCount: 50,
        height: 300,
        overscanColumnCount: 0,
        overscanRowCount: 5,
        rowHeight: 40,
        rowCount: 100,
    };

    render() {
        const {
            columnCount,
            columnWidth,
            height,
            overscanColumnCount,
            overscanRowCount,
            rowHeight,
            rowCount,
        } = this.state;

        return (
            <ScrollSync>
                {({ clientHeight, clientWidth, onScroll, scrollHeight, scrollLeft, scrollTop, scrollWidth }) => {
                    const x = scrollLeft / (scrollWidth - clientWidth);
                    const y = scrollTop / (scrollHeight - clientHeight);

                    const leftBackgroundColor = mixColors(LEFT_COLOR_FROM, LEFT_COLOR_TO, y);
                    const leftColor = '#ffffff';
                    const topBackgroundColor = mixColors(TOP_COLOR_FROM, TOP_COLOR_TO, x);
                    const topColor = '#ffffff';
                    const middleBackgroundColor = mixColors(leftBackgroundColor, topBackgroundColor, 0.5);
                    const middleColor = '#ffffff';

                    return (
                        <div className={'styles.GridRow'}>
                            <div
                                className={'styles.LeftSideGridContainer'}
                                style={{
                                    position: 'absolute',
                                    left: 0,
                                    top: 0,
                                    color: leftColor,
                                    backgroundColor: `rgb(${topBackgroundColor.r},${topBackgroundColor.g},${topBackgroundColor.b})`,
                                }}
                            >
                                <Grid
                                    cellRenderer={this._renderLeftHeaderCell}
                                    className={'styles.HeaderGrid'}
                                    width={columnWidth}
                                    height={rowHeight}
                                    rowHeight={rowHeight}
                                    columnWidth={columnWidth}
                                    rowCount={1}
                                    columnCount={1}
                                />
                            </div>
                            <div
                                className={'styles.LeftSideGridContainer'}
                                style={{
                                    position: 'absolute',
                                    left: 0,
                                    top: rowHeight,
                                    color: leftColor,
                                    backgroundColor: `rgb(${leftBackgroundColor.r},${leftBackgroundColor.g},${leftBackgroundColor.b})`,
                                }}
                            >
                                <Grid
                                    overscanColumnCount={overscanColumnCount}
                                    overscanRowCount={overscanRowCount}
                                    cellRenderer={this._renderLeftSideCell}
                                    columnWidth={columnWidth}
                                    columnCount={1}
                                    className={'styles.LeftSideGrid'}
                                    height={height - scrollbarSize()}
                                    rowHeight={rowHeight}
                                    rowCount={rowCount}
                                    scrollTop={scrollTop}
                                    width={columnWidth}
                                />
                            </div>
                            <div className={'styles.GridColumn'}>
                                <AutoSizer disableHeight>
                                    {({ width }) => (
                                        <div>
                                            <div
                                                style={{
                                                    backgroundColor: `rgb(${topBackgroundColor.r},${topBackgroundColor.g},${topBackgroundColor.b})`,
                                                    color: topColor,
                                                    height: rowHeight,
                                                    width: width - scrollbarSize(),
                                                }}
                                            >
                                                <Grid
                                                    className={'styles.HeaderGrid'}
                                                    columnWidth={columnWidth}
                                                    columnCount={columnCount}
                                                    height={rowHeight}
                                                    overscanColumnCount={overscanColumnCount}
                                                    cellRenderer={this._renderHeaderCell}
                                                    rowHeight={rowHeight}
                                                    rowCount={1}
                                                    scrollLeft={scrollLeft}
                                                    width={width - scrollbarSize()}
                                                />
                                            </div>
                                            <div
                                                style={{
                                                    backgroundColor: `rgb(${middleBackgroundColor.r},${middleBackgroundColor.g},${middleBackgroundColor.b})`,
                                                    color: middleColor,
                                                    height,
                                                    width,
                                                }}
                                            >
                                                <Grid
                                                    className={'styles.BodyGrid'}
                                                    columnWidth={columnWidth}
                                                    columnCount={columnCount}
                                                    height={height}
                                                    onScroll={onScroll}
                                                    overscanColumnCount={overscanColumnCount}
                                                    overscanRowCount={overscanRowCount}
                                                    cellRenderer={this._renderBodyCell}
                                                    rowHeight={rowHeight}
                                                    rowCount={rowCount}
                                                    width={width}
                                                />
                                            </div>
                                        </div>
                                    )}
                                </AutoSizer>
                            </div>
                        </div>
                    );
                }}
            </ScrollSync>
        );
    }

    _renderBodyCell(params: GridCellProps) {
        if (params.columnIndex < 1) {
            return;
        }

        return this._renderLeftSideCell(params);
    }

    _renderHeaderCell(params: GridCellProps) {
        if (params.columnIndex < 1) {
            return;
        }

        return this._renderLeftHeaderCell(params);
    }

    _renderLeftHeaderCell({ columnIndex, key, rowIndex, style }: GridCellProps) {
        return (
            <div className={'styles.headerCell'} key={key} style={style}>
                {`C${columnIndex}`}
            </div>
        );
    }

    _renderLeftSideCell({ columnIndex, key, rowIndex, style }: GridCellProps) {
        return (
            <div className={'classNames'} key={key} style={style}>
                {`R${rowIndex}, C${columnIndex}`}
            </div>
        );
    }
}

function hexToRgb(hex: string) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
        ? {
              r: parseInt(result[1], 16),
              g: parseInt(result[2], 16),
              b: parseInt(result[3], 16),
          }
        : null;
}

/**
 * Ported from sass implementation in C
 * https://github.com/sass/libsass/blob/0e6b4a2850092356aa3ece07c6b249f0221caced/functions.cpp#L209
 */
function mixColors(color1: any, color2: any, amount: any) {
    const weight1 = amount;
    const weight2 = 1 - amount;

    const r = Math.round(weight1 * color1.r + weight2 * color2.r);
    const g = Math.round(weight1 * color1.g + weight2 * color2.g);
    const b = Math.round(weight1 * color1.b + weight2 * color2.b);

    return { r, g, b };
}

import { Column, Table, SortDirection, SortIndicator } from 'react-virtualized';

export class TableExample extends PureComponent<{}, any> {
    state = {
        disableHeader: false,
        headerHeight: 30,
        height: 270,
        hideIndexRow: false,
        overscanRowCount: 10,
        rowHeight: 40,
        rowCount: 1000,
        scrollToIndex: undefined,
        sortBy: 'index',
        sortDirection: SortDirection.ASC,
        useDynamicRowHeight: false,
    };

    render() {
        const {
            disableHeader,
            headerHeight,
            height,
            hideIndexRow,
            overscanRowCount,
            rowHeight,
            rowCount,
            scrollToIndex,
            sortBy,
            sortDirection,
            useDynamicRowHeight,
        } = this.state;

        const { list } = this.context;
        const sortedList = list;

        const rowGetter = ({ index }: Index) => this._getDatum(sortedList, index);

        return (
            <div>
                <AutoSizer disableHeight>
                    {({ width }) => (
                        <Table
                            ref="Table"
                            disableHeader={disableHeader}
                            headerClassName={'styles.headerColumn'}
                            headerHeight={headerHeight}
                            height={height}
                            noRowsRenderer={this._noRowsRenderer}
                            overscanRowCount={overscanRowCount}
                            rowClassName={this._rowClassName}
                            rowHeight={useDynamicRowHeight ? this._getRowHeight : rowHeight}
                            rowGetter={rowGetter}
                            rowCount={rowCount}
                            scrollToIndex={scrollToIndex}
                            sort={this._sort}
                            sortBy={sortBy}
                            sortDirection={sortDirection}
                            width={width}
                        >
                            {!hideIndexRow && (
                                <Column
                                    label="Index"
                                    cellDataGetter={({ columnData, dataKey, rowData }) => rowData.index}
                                    dataKey="index"
                                    disableSort={!this._isSortEnabled()}
                                    defaultSortDirection={SortDirection.DESC}
                                    width={60}
                                />
                            )}
                            <Column
                                dataKey="name"
                                disableSort={!this._isSortEnabled()}
                                defaultSortDirection={SortDirection.ASC}
                                headerRenderer={this._headerRenderer}
                                width={90}
                            />
                            <Column
                                width={210}
                                disableSort
                                label="The description label is really long so that it will be truncated"
                                dataKey="random"
                                className={'styles.exampleColumn'}
                                cellRenderer={({ cellData, columnData, dataKey, rowData, rowIndex }) => cellData}
                                flexGrow={1}
                            />
                        </Table>
                    )}
                </AutoSizer>
            </div>
        );
    }

    _getDatum(list: any, index: number) {
        return list.get(index % list.size);
    }

    _getRowHeight({ index }: Index) {
        const { list } = this.context;

        return this._getDatum(list, index).size;
    }

    _headerRenderer({ columnData, dataKey, disableSort, label, sortBy, sortDirection }: TableHeaderProps) {
        return (
            <div>
                Full Name
                {sortBy === dataKey && <SortIndicator sortDirection={sortDirection} />}
            </div>
        );
    }

    _isSortEnabled() {
        const { list } = this.context;
        const { rowCount } = this.state;

        return rowCount <= list.size;
    }

    _noRowsRenderer() {
        return <div className={'styles.noRows'}>No rows</div>;
    }

    _rowClassName({ index }: Index) {
        if (index < 0) {
            return 'styles.headerRow';
        } else {
            return index % 2 === 0 ? 'styles.evenRow' : 'styles.oddRow';
        }
    }

    _sort({ sortBy, sortDirection }: { sortBy: string; sortDirection: SortDirectionType }) {
        this.setState({ sortBy, sortDirection });
    }
}

import { TableCellProps } from 'react-virtualized';

export class DynamicHeightTableColumnExample extends PureComponent<any, any> {
    _cache = new CellMeasurerCache({
        fixedWidth: true,
        minHeight: 25,
    });

    render() {
        const { width } = this.props;

        return (
            <Table
                deferredMeasurementCache={this._cache}
                headerHeight={20}
                height={400}
                overscanRowCount={2}
                rowClassName={'styles.tableRow'}
                rowHeight={this._cache.rowHeight}
                rowGetter={this._rowGetter}
                rowCount={1000}
                width={width}
            >
                <Column className={'styles.tableColumn'} dataKey="name" label="Name" width={125} />
                <Column className={'styles.tableColumn'} dataKey="color" label="Color" width={75} />
                <Column
                    width={width - 200}
                    dataKey="random"
                    label="Dynamic text"
                    cellRenderer={this._columnCellRenderer}
                />
            </Table>
        );
    }

    _columnCellRenderer(args: TableCellProps) {
        const { list } = this.props;

        const datum = list.get(args.rowIndex % list.size);
        const content = args.rowIndex % 5 === 0 ? '' : datum.randomLong;

        return (
            <CellMeasurer
                cache={this._cache}
                columnIndex={0}
                key={args.dataKey}
                parent={args.parent}
                rowIndex={args.rowIndex}
            >
                <div
                    className={'styles.tableColumn'}
                    style={{
                        whiteSpace: 'normal',
                    }}
                >
                    {content}
                </div>
            </CellMeasurer>
        );
    }

    _rowGetter({ index }: Index) {
        const { list } = this.props;

        return list.get(index % list.size);
    }
}

export class WindowScrollerExample extends PureComponent<{}, any> {
    _windowScroller: WindowScroller;
    state = {
        showHeaderText: true,
    };

    render() {
        const { list, isScrollingCustomElement, customElement } = this.context;
        const { showHeaderText } = this.state;

        return (
            <div className={'styles.WindowScrollerWrapper'}>
                <WindowScroller ref={this._setRef} scrollElement={isScrollingCustomElement ? customElement : null}>
                    {({ height, isScrolling, scrollTop, onChildScroll }) => (
                        <AutoSizer disableHeight>
                            {({ width }) => (
                                <List
                                    onScroll={onChildScroll}
                                    autoHeight
                                    className={'styles.List'}
                                    height={height}
                                    isScrolling={isScrolling}
                                    overscanRowCount={2}
                                    rowCount={list.size}
                                    rowHeight={30}
                                    rowRenderer={params =>
                                        this._rowRenderer({
                                            ...params,
                                            isScrolling,
                                        })
                                    }
                                    scrollTop={scrollTop}
                                    width={width}
                                />
                            )}
                        </AutoSizer>
                    )}
                </WindowScroller>
            </div>
        );
    }

    _rowRenderer({ index, isScrolling, isVisible, key, style }: ListRowProps) {
        const { list } = this.context;
        const row = list.get(index);

        return (
            <div key={key} className={'className'} style={style}>
                {row.name}
            </div>
        );
    }

    _setRef(windowScroller: any) {
        this._windowScroller = windowScroller;
    }
}

import { GridCellProps, GridCellRangeProps, SortParams, SortDirectionType } from 'react-virtualized';

export class GridCellRangeRendererExample extends PureComponent<{}, any> {
    state = {
        columnWidth: 75,
        columnCount: 50,
        height: 300,
        rowHeight: 40,
        rowCount: 100,
    };

    render() {
        const { columnCount, columnWidth, height, rowHeight, rowCount } = this.state;

        return (
            <Grid
                cellRangeRenderer={this._cellRangeRenderer}
                cellRenderer={(props: GridCellProps): React.ReactNode => (
                    <div key={props.key} style={props.style}>
                        I'm a table cell
                    </div>
                )}
                columnCount={columnCount}
                columnWidth={columnWidth}
                height={height}
                rowCount={rowCount}
                rowHeight={rowHeight}
                width={columnWidth}
            />
        );
    }

    _cellRangeRenderer({
        cellCache, // Temporary cell cache used while scrolling
        cellRenderer, // Cell renderer prop supplied to Grid
        columnSizeAndPositionManager, // @see CellSizeAndPositionManager,
        columnStartIndex, // Index of first column (inclusive) to render
        columnStopIndex, // Index of last column (inclusive) to render
        horizontalOffsetAdjustment, // Horizontal pixel offset (required for scaling)
        isScrolling, // The Grid is currently being scrolled
        rowSizeAndPositionManager, // @see CellSizeAndPositionManager,
        rowStartIndex, // Index of first column (inclusive) to render
        rowStopIndex, // Index of last column (inclusive) to render
        scrollLeft, // Current horizontal scroll offset of Grid
        scrollTop, // Current vertical scroll offset of Grid
        styleCache, // Temporary style (size & position) cache used while scrolling
        verticalOffsetAdjustment, // Vertical pixel offset (required for scaling)
        parent,
        visibleColumnIndices,
        visibleRowIndices,
    }: GridCellRangeProps): React.ReactNode[] {
        const renderedCells: React.ReactNode[] = [];
        const style: React.CSSProperties = {};

        for (let rowIndex = rowStartIndex; rowIndex <= rowStopIndex; rowIndex++) {
            // This contains :offset (top) and :size (height) information for the cell
            const rowDatum = rowSizeAndPositionManager.getSizeAndPositionOfCell(rowIndex);

            for (let columnIndex = columnStartIndex; columnIndex <= columnStopIndex; columnIndex++) {
                // This contains :offset (left) and :size (width) information for the cell
                const columnDatum = columnSizeAndPositionManager.getSizeAndPositionOfCell(columnIndex);

                // Be sure to adjust cell position in case the total set of cells is too large to be supported by the browser natively.
                // In this case, Grid will shift cells as a user scrolls to increase cell density.
                const left = columnDatum.offset + horizontalOffsetAdjustment;
                const top = rowDatum.offset + verticalOffsetAdjustment;

                // The rest of the information you need to render the cell are contained in the data.
                // Be sure to provide unique :key attributes.
                const key = `${rowIndex}-${columnIndex}`;
                const height = rowDatum.size;
                const width = columnDatum.size;
                const isVisible =
                    columnIndex >= visibleColumnIndices.start &&
                    columnIndex <= visibleColumnIndices.stop &&
                    rowIndex >= visibleRowIndices.start &&
                    rowIndex <= visibleRowIndices.stop;

                // Now render your cell and additional UI as you see fit.
                // Add all rendered children to the :renderedCells Array.
                const gridCellProps: GridCellProps = {
                    columnIndex,
                    isScrolling,
                    isVisible,
                    key,
                    parent,
                    rowIndex,
                    style,
                };

                renderedCells.push(cellRenderer(gridCellProps));
            }
        }

        return renderedCells;
    }
}
