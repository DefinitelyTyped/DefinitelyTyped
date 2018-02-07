import * as React from 'react';
import { PureComponent } from 'react'
import { ArrowKeyStepper, AutoSizer, Grid } from 'react-virtualized'

export class ArrowKeyStepperExample extends PureComponent<any, any> {
    constructor(props) {
        super(props)

        this._getColumnWidth = this._getColumnWidth.bind(this)
        this._getRowHeight = this._getRowHeight.bind(this)
        this._cellRenderer = this._cellRenderer.bind(this)
    }

    render() {
        const { mode } = this.state

        return (

            <ArrowKeyStepper
                columnCount={100}
                mode={mode as 'edges'}
                rowCount={100}
            >
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
                                    cellRenderer={({ columnIndex, key, rowIndex, style }) => this._cellRenderer({ columnIndex, key, rowIndex, scrollToColumn, scrollToRow, style })}
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
        )
    }

    _getColumnWidth({ index }) {
        return (1 + (index % 3)) * 60
    }

    _getRowHeight({ index }) {
        return (1 + (index % 3)) * 30
    }

    _cellRenderer({ columnIndex, key, rowIndex, scrollToColumn, scrollToRow, style }) {

        return (
            <div
                className={'className'}
                key={key}
                style={style}
            >
                {`r:${rowIndex}, c:${columnIndex}`}
            </div>
        )
    }
}

import { List } from 'react-virtualized'

export class AutoSizerExample extends PureComponent<any, any> {
    constructor(props) {
        super(props)

        this._rowRenderer = this._rowRenderer.bind(this)
    }

    render() {
        const { list } = this.context
        const { hideDescription } = this.state

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
        )
    }

    _rowRenderer({ index, key, style }) {
        const { list } = this.context
        const row = list.get(index)

        return (
            <div
                key={key}
                className={'styles.row'}
                style={style}
            >
                {row.name}
            </div>
        )
    }
}
import { } from 'react'
import { CellMeasurer, CellMeasurerCache } from 'react-virtualized'

export class DynamicHeightList extends PureComponent<any> {

    _cache: CellMeasurerCache

    constructor(props, context) {
        super(props, context)

        this._cache = new CellMeasurerCache({
            fixedWidth: true,
            minHeight: 50
        })

        this._rowRenderer = this._rowRenderer.bind(this)
    }

    render() {
        const { width } = this.props

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
        )
    }

    _rowRenderer({ index, isScrolling, key, parent, style }) {
        const { getClassName, list } = this.props

        const datum = list.get(index % list.size)
        const classNames = getClassName({ columnIndex: 0, rowIndex: index })

        const imageWidth = 300
        const imageHeight = datum.size * 2

        const source = `http://fillmurray.com/${imageWidth}/${imageHeight}`

        return (
            <CellMeasurer
                cache={this._cache}
                columnIndex={0}
                key={key}
                rowIndex={index}
                parent={parent}
            >
                {({ measure }) => (
                    <div
                        className={classNames}
                        style={style}
                    >
                        <img
                            onLoad={measure}
                            src={source}
                            style={{
                                width: imageWidth
                            }}
                        />
                    </div>
                )}
            </CellMeasurer>
        )
    }
}

import { Collection } from 'react-virtualized'

// Defines a pattern of sizes and positions for a range of 10 rotating cells
// These cells cover an area of 600 (wide) x 400 (tall)
const GUTTER_SIZE = 3
const CELL_WIDTH = 75

export class CollectionExample extends PureComponent<any, any> {
    _columnYMap: any;

    constructor(props, context) {
        super(props, context)

        this.context = context;

        this.state = {
            cellCount: context.list.size,
            columnCount: this._getColumnCount(context.list.size),
            height: 300,
            horizontalOverscanSize: 0,
            scrollToCell: undefined,
            showScrollingPlaceholder: false,
            verticalOverscanSize: 0
        }

        this._columnYMap = []

        this._cellRenderer = this._cellRenderer.bind(this)
        this._cellSizeAndPositionGetter = this._cellSizeAndPositionGetter.bind(this)
        this._noContentRenderer = this._noContentRenderer.bind(this)
        this._onCellCountChange = this._onCellCountChange.bind(this)
        this._onHeightChange = this._onHeightChange.bind(this)
        this._onHorizontalOverscanSizeChange = this._onHorizontalOverscanSizeChange.bind(this)
        this._onScrollToCellChange = this._onScrollToCellChange.bind(this)
        this._onVerticalOverscanSizeChange = this._onVerticalOverscanSizeChange.bind(this)
    }

    render() {
        const { cellCount, height, horizontalOverscanSize, scrollToCell, showScrollingPlaceholder, verticalOverscanSize } = this.state

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
        )
    }

    _cellRenderer({ index, isScrolling, key, style }) {
        const { list } = this.context
        const { showScrollingPlaceholder } = this.state

        const datum = list.get(index % list.size)

        // Customize style
        style.backgroundColor = datum.color

        return (
            <div
                className={'styles.cell'}
                key={key}
                style={style}
            >
                {showScrollingPlaceholder && isScrolling ? '...' : index}
            </div>
        )
    }

    _cellSizeAndPositionGetter({ index }) {
        const { list } = this.context
        const { columnCount } = this.state

        const columnPosition = index % (columnCount || 1)
        const datum = list.get(index % list.size)

        // Poor man's Masonry layout; columns won't all line up equally with the bottom.
        const height = datum.size
        const width = CELL_WIDTH
        const x = columnPosition * (GUTTER_SIZE + width)
        const y = this._columnYMap[columnPosition] || 0

        this._columnYMap[columnPosition] = y + height + GUTTER_SIZE

        return {
            height,
            width,
            x,
            y
        }
    }

    _getColumnCount(cellCount) {
        return Math.round(Math.sqrt(cellCount))
    }

    _onHorizontalOverscanSizeChange(event) {
        const horizontalOverscanSize = parseInt(event.target.value, 10) || 0

        this.setState({ horizontalOverscanSize })
    }

    _noContentRenderer() {
        return (
            <div className={'styles.noCells'}>
                No cells
      </div>
        )
    }

    _onCellCountChange(event) {
        const cellCount = parseInt(event.target.value, 10) || 0

        this._columnYMap = []

        this.setState({
            cellCount,
            columnCount: this._getColumnCount(cellCount)
        })
    }

    _onHeightChange(event) {
        const height = parseInt(event.target.value, 10) || 0

        this.setState({ height })
    }

    _onScrollToCellChange(event) {
        const { cellCount } = this.state

        let scrollToCell = Math.min(cellCount - 1, parseInt(event.target.value, 10))

        if (isNaN(scrollToCell)) {
            scrollToCell = undefined
        }

        this.setState({ scrollToCell })
    }

    _onVerticalOverscanSizeChange(event) {
        const verticalOverscanSize = parseInt(event.target.value, 10) || 0

        this.setState({ verticalOverscanSize })
    }
}

import { ColumnSizer } from 'react-virtualized'

export class ColumnSizerExample extends PureComponent<any, any> {
    constructor(props) {
        super(props)

        this._noColumnMaxWidthChange = this._noColumnMaxWidthChange.bind(this)
        this._noColumnMinWidthChange = this._noColumnMinWidthChange.bind(this)
        this._onColumnCountChange = this._onColumnCountChange.bind(this)
        this._noContentRenderer = this._noContentRenderer.bind(this)
        this._cellRenderer = this._cellRenderer.bind(this)
    }

    render() {
        const {
            columnMaxWidth,
            columnMinWidth,
            columnCount
    } = this.state

        return (
            <div>
                <AutoSizer disableHeight>
                    {({ width }) => (
                        <ColumnSizer
                            columnMaxWidth={columnMaxWidth}
                            columnMinWidth={columnMinWidth}
                            columnCount={columnCount}
                            key='GridColumnSizer'
                            width={width}
                        >
                            {({ adjustedWidth, getColumnWidth, registerChild }) => (
                                <div
                                    className={'styles.GridContainer'}
                                    style={{
                                        height: 50,
                                        width: adjustedWidth
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
        )
    }

    _noColumnMaxWidthChange(event) {
        let columnMaxWidth = parseInt(event.target.value, 10)

        columnMaxWidth = isNaN(columnMaxWidth) ? undefined : Math.min(1000, columnMaxWidth)

        this.setState({ columnMaxWidth })
    }

    _noColumnMinWidthChange(event) {
        let columnMinWidth = parseInt(event.target.value, 10)

        columnMinWidth = isNaN(columnMinWidth) ? undefined : Math.max(1, columnMinWidth)

        this.setState({ columnMinWidth })
    }

    _onColumnCountChange(event) {
        this.setState({ columnCount: parseInt(event.target.value, 10) || 0 })
    }

    _noContentRenderer() {
        return (
            <div className={'styles.noCells'}>
                No cells
      </div>
        )
    }

    _cellRenderer({ columnIndex, key, rowIndex, style }) {
        const className = columnIndex === 0
            ? 'styles.firstCell'
            : 'styles.cell'

        return (
            <div
                className={className}
                key={key}
                style={style}
            >
                {`R:${rowIndex}, C:${columnIndex}`}
            </div>
        )
    }
}

export class GridExample extends PureComponent<any, any> {
    constructor(props, context) {
        super(props, context)

        this.state = {
            columnCount: 1000,
            height: 300,
            overscanColumnCount: 0,
            overscanRowCount: 10,
            rowHeight: 40,
            rowCount: 1000,
            scrollToColumn: undefined,
            scrollToRow: undefined,
            useDynamicRowHeight: false
        }

        this._cellRenderer = this._cellRenderer.bind(this)
        this._getColumnWidth = this._getColumnWidth.bind(this)
        this._getRowClassName = this._getRowClassName.bind(this)
        this._getRowHeight = this._getRowHeight.bind(this)
        this._noContentRenderer = this._noContentRenderer.bind(this)
        this._onColumnCountChange = this._onColumnCountChange.bind(this)
        this._onRowCountChange = this._onRowCountChange.bind(this)
        this._onScrollToColumnChange = this._onScrollToColumnChange.bind(this)
        this._onScrollToRowChange = this._onScrollToRowChange.bind(this)
        this._renderBodyCell = this._renderBodyCell.bind(this)
        this._renderLeftSideCell = this._renderLeftSideCell.bind(this)
    }

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
            useDynamicRowHeight
    } = this.state

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
        )
    }

    _cellRenderer({ columnIndex, key, rowIndex, style }) {
        if (columnIndex === 0) {
            return this._renderLeftSideCell({ key, rowIndex, style })
        } else {
            return this._renderBodyCell({ columnIndex, key, rowIndex, style })
        }
    }

    _getColumnWidth({ index }) {
        switch (index) {
            case 0:
                return 50
            case 1:
                return 100
            case 2:
                return 300
            default:
                return 80
        }
    }

    _getDatum(index) {
        const { list } = this.context

        return list.get(index % list.size)
    }

    _getRowClassName(row) {
        return row % 2 === 0 ? 'styles.evenRow' : 'styles.oddRow'
    }

    _getRowHeight({ index }) {
        return this._getDatum(index).size
    }

    _noContentRenderer() {
        return (
            <div className={'styles.noCells'}>
                No cells
      </div>
        )
    }

    _renderBodyCell({ columnIndex, key, rowIndex, style }) {
        const rowClass = this._getRowClassName(rowIndex)
        const datum = this._getDatum(rowIndex)

        let content

        switch (columnIndex) {
            case 1:
                content = datum.name
                break
            case 2:
                content = datum.random
                break
            default:
                content = `r:${rowIndex}, c:${columnIndex}`
                break
        }

        return (
            <div
                className={'classNames'}
                key={key}
                style={style}
            >
                {content}
            </div>
        )
    }

    _renderLeftSideCell({ key, rowIndex, style }) {
        const datum = this._getDatum(rowIndex)

        // Don't modify styles.
        // These are frozen by React now (as of 16.0.0).
        // Since Grid caches and re-uses them, they aren't safe to modify.
        style = {
            ...style,
            backgroundColor: datum.color
        }

        return (
            <div
                className={'classNames'}
                key={key}
                style={style}
            >
                {datum.name.charAt(0)}
            </div>
        )
    }

    _updateUseDynamicRowHeights(value) {
        this.setState({
            useDynamicRowHeight: value
        })
    }

    _onColumnCountChange(event) {
        const columnCount = parseInt(event.target.value, 10) || 0

        this.setState({ columnCount })
    }

    _onRowCountChange(event) {
        const rowCount = parseInt(event.target.value, 10) || 0

        this.setState({ rowCount })
    }

    _onScrollToColumnChange(event) {
        const { columnCount } = this.state
        let scrollToColumn = Math.min(columnCount - 1, parseInt(event.target.value, 10))

        if (isNaN(scrollToColumn)) {
            scrollToColumn = undefined
        }

        this.setState({ scrollToColumn })
    }

    _onScrollToRowChange(event) {
        const { rowCount } = this.state
        let scrollToRow = Math.min(rowCount - 1, parseInt(event.target.value, 10))

        if (isNaN(scrollToRow)) {
            scrollToRow = undefined
        }

        this.setState({ scrollToRow })
    }
}

import { InfiniteLoader } from 'react-virtualized'

const STATUS_LOADING = 1
const STATUS_LOADED = 2

export class InfiniteLoaderExample extends PureComponent<any, any> {
    _timeoutIds = new Set<number>();

    constructor(props) {
        super(props)

        this._clearData = this._clearData.bind(this)
        this._isRowLoaded = this._isRowLoaded.bind(this)
        this._loadMoreRows = this._loadMoreRows.bind(this)
        this._rowRenderer = this._rowRenderer.bind(this)
    }

    componentWillUnmount() {
        this._timeoutIds.forEach(clearTimeout);
    }

    render() {
        const { list } = this.context
        const { loadedRowCount, loadingRowCount } = this.state

        return (
            <InfiniteLoader
                isRowLoaded={this._isRowLoaded}
                loadMoreRows={this._loadMoreRows}
                rowCount={list.size}
            >
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
        )
    }

    _clearData() {
        this.setState({
            loadedRowCount: 0,
            loadedRowsMap: {},
            loadingRowCount: 0
        })
    }

    _isRowLoaded({ index }) {
        const { loadedRowsMap } = this.state
        return !!loadedRowsMap[index] // STATUS_LOADING or STATUS_LOADED
    }

    _loadMoreRows({ startIndex, stopIndex }) {
        const { loadedRowsMap, loadingRowCount } = this.state
        const increment = stopIndex - startIndex + 1

        for (let i = startIndex; i <= stopIndex; i++) {
            loadedRowsMap[i] = STATUS_LOADING
        }

        this.setState({
            loadingRowCount: loadingRowCount + increment
        })

        const timeoutId = setTimeout(() => {
            const { loadedRowCount, loadingRowCount } = this.state

            this._timeoutIds.delete(timeoutId);

            for (let i = startIndex; i <= stopIndex; i++) {
                loadedRowsMap[i] = STATUS_LOADED
            }

            this.setState({
                loadingRowCount: loadingRowCount - increment,
                loadedRowCount: loadedRowCount + increment
            })

            promiseResolver()
        }, 1000 + Math.round(Math.random() * 2000))

        this._timeoutIds.add(timeoutId);

        let promiseResolver

        return new Promise(resolve => {
            promiseResolver = resolve
        })
    }

    _rowRenderer({ index, key, style }) {
        const { list } = this.context
        const { loadedRowsMap } = this.state

        const row = list.get(index)
        let content

        if (loadedRowsMap[index] === STATUS_LOADED) {
            content = row.name
        } else {
            content = (
                <div
                    className={'styles.placeholder'}
                    style={{ width: row.size }}
                />
            )
        }

        return (
            <div
                className={'styles.row'}
                key={key}
                style={style}
            >
                {content}
            </div>
        )
    }
}

export class ListExample extends PureComponent<any, any> {

    constructor(props, context) {
        super(props, context)

        this.state = {
            listHeight: 300,
            listRowHeight: 50,
            overscanRowCount: 10,
            rowCount: context.list.size,
            scrollToIndex: undefined,
            showScrollingPlaceholder: false,
            useDynamicRowHeight: false
        }

        this._getRowHeight = this._getRowHeight.bind(this)
        this._noRowsRenderer = this._noRowsRenderer.bind(this)
        this._onRowCountChange = this._onRowCountChange.bind(this)
        this._onScrollToRowChange = this._onScrollToRowChange.bind(this)
        this._rowRenderer = this._rowRenderer.bind(this)
    }

    render() {
        const {
            listHeight,
            listRowHeight,
            overscanRowCount,
            rowCount,
            scrollToIndex,
            showScrollingPlaceholder,
            useDynamicRowHeight
    } = this.state

        return (
            <AutoSizer disableHeight>
                {({ width }) => (
                    <List
                        ref='List'
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
        )
    }

    _getDatum(index) {
        const { list } = this.context

        return list.get(index % list.size)
    }

    _getRowHeight({ index }) {
        return this._getDatum(index).size
    }

    _noRowsRenderer() {
        return (
            <div className={'styles.noRows'}>
                No rows
      </div>
        )
    }

    _onRowCountChange(event) {
        const rowCount = parseInt(event.target.value, 10) || 0

        this.setState({ rowCount })
    }

    _onScrollToRowChange(event) {
        const { rowCount } = this.state
        let scrollToIndex = Math.min(rowCount - 1, parseInt(event.target.value, 10))

        if (isNaN(scrollToIndex)) {
            scrollToIndex = undefined
        }

        this.setState({ scrollToIndex })
    }

    _rowRenderer({ index, isScrolling, key, style }) {
        const {
            showScrollingPlaceholder,
            useDynamicRowHeight
        } = this.state

        if (
            showScrollingPlaceholder &&
            isScrolling
        ) {
            return (
                <div
                    className={'cn(styles.row, styles.isScrollingPlaceholder)'}
                    key={key}
                    style={style}
                >
                    Scrolling...
        </div>
            )
        }

        const datum = this._getDatum(index)

        let additionalContent

        if (useDynamicRowHeight) {
            switch (datum.size) {
                case 75:
                    additionalContent = <div>It is medium-sized.</div>
                    break
                case 100:
                    additionalContent = <div>It is large-sized.<br />It has a 3rd row.</div>
                    break
            }
        }

        return (
            <div
                className={'styles.row'}
                key={key}
                style={style}
            >
                <div
                    className={'styles.letter'}
                    style={{
                        backgroundColor: datum.color
                    }}
                >
                    {datum.name.charAt(0)}
                </div>
                <div>
                    <div className={'styles.name'}>
                        {datum.name}
                    </div>
                    <div className={'styles.index'}>
                        This is row {index}
                    </div>
                    {additionalContent}
                </div>
                {useDynamicRowHeight &&
                    <span className={'styles.height'}>
                        {datum.size}px
          </span>
                }
            </div>
        )
    }
}

import {
    WindowScroller,
    createMasonryCellPositioner as createCellPositioner,
    Positioner,
    Masonry,
    MasonryCellProps
} from 'react-virtualized'

export class GridExample2 extends PureComponent<any, any> {
    _columnCount: number;
    _cache: CellMeasurerCache;
    _columnHeights: any;
    _width: number;
    _height: number;
    _scrollTop: number;
    _cellPositioner?: Positioner;
    _masonry: Masonry;

    constructor(props, context) {
        super(props, context)

        this._columnCount = 0

        this._cache = new CellMeasurerCache({
            defaultHeight: 250,
            defaultWidth: 200,
            fixedWidth: true
        })

        this._columnHeights = {}

        this.state = {
            columnWidth: 200,
            height: 300,
            gutterSize: 10,
            windowScrollerEnabled: false
        }

        this._cellRenderer = this._cellRenderer.bind(this)
        this._onResize = this._onResize.bind(this)
        this._renderAutoSizer = this._renderAutoSizer.bind(this)
        this._renderMasonry = this._renderMasonry.bind(this)
        this._setMasonryRef = this._setMasonryRef.bind(this)
    }

    render() {
        const {
            columnWidth,
            height,
            gutterSize,
            windowScrollerEnabled
        } = this.state

        let child

        if (windowScrollerEnabled) {
            child = (
                <WindowScroller>
                    {this._renderAutoSizer}
                </WindowScroller>
            )
        } else {
            child = this._renderAutoSizer({ height })
        }

        return (
            <div>
                {child}
            </div>
        )
    }

    _calculateColumnCount() {
        const {
            columnWidth,
            gutterSize
        } = this.state

        this._columnCount = Math.floor(this._width / (columnWidth + gutterSize))
    }

    _cellRenderer({ index, key, parent, style }: MasonryCellProps) {
        const { list } = this.context
        const { columnWidth } = this.state

        const datum = list.get(index % list.size)

        return (
            <CellMeasurer
                cache={this._cache}
                index={index}
                key={key}
                parent={parent}
            >
                <div
                    className={'styles.Cell'}
                    style={{
                        ...style,
                        width: columnWidth
                    }}
                >
                    <div
                        style={{
                            backgroundColor: datum.color,
                            borderRadius: '0.5rem',
                            height: datum.size * 3,
                            marginBottom: '0.5rem',
                            width: '100%'
                        }}
                    />
                    {datum.random}
                </div>
            </CellMeasurer>
        )
    }

    _initCellPositioner() {
        if (typeof this._cellPositioner === 'undefined') {
            const {
                columnWidth,
                gutterSize
            } = this.state

            this._cellPositioner = createCellPositioner({
                cellMeasurerCache: this._cache,
                columnCount: this._columnCount,
                columnWidth,
                spacer: gutterSize
            })
        }
    }

    _onResize({ height, width }) {
        this._width = width

        this._columnHeights = {}
        this._calculateColumnCount()
        this._resetCellPositioner()
        this._masonry.recomputeCellPositions()
    }

    _renderAutoSizer({ height, scrollTop }: { height: number, scrollTop?: number }) {
        this._height = height
        this._scrollTop = scrollTop

        return (
            <AutoSizer
                disableHeight
                onResize={this._onResize}
            >
                {this._renderMasonry}
            </AutoSizer>
        )
    }

    _renderMasonry({ width }) {
        this._width = width

        this._calculateColumnCount()
        this._initCellPositioner()

        const { height, windowScrollerEnabled } = this.state

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
        )
    }

    _resetCellPositioner() {
        const {
            columnWidth,
            gutterSize
        } = this.state

        this._cellPositioner.reset({
            columnCount: this._columnCount,
            columnWidth,
            spacer: gutterSize
        })
    }

    _setMasonryRef(ref) {
        this._masonry = ref
    }
}

import { MultiGrid } from 'react-virtualized'

const STYLE: React.CSSProperties = {
    border: '1px solid #ddd',
    overflow: 'hidden'
}
const STYLE_BOTTOM_LEFT_GRID: React.CSSProperties = {
    borderRight: '2px solid #aaa',
    backgroundColor: '#f7f7f7'
}
const STYLE_TOP_LEFT_GRID: React.CSSProperties = {
    borderBottom: '2px solid #aaa',
    borderRight: '2px solid #aaa',
    fontWeight: 'bold'
}
const STYLE_TOP_RIGHT_GRID: React.CSSProperties = {
    borderBottom: '2px solid #aaa',
    fontWeight: 'bold'
}

export class MultiGridExample extends PureComponent<{}, any> {
    state
    _onFixedColumnCountChange
    _onFixedRowCountChange
    _onScrollToColumnChange
    _onScrollToRowChange

    constructor(props, context) {
        super(props, context)

        this.state = {
            fixedColumnCount: 2,
            fixedRowCount: 1,
            scrollToColumn: 0,
            scrollToRow: 0
        }

        this._cellRenderer = this._cellRenderer.bind(this)
        this._onFixedColumnCountChange = this._createEventHandler('fixedColumnCount')
        this._onFixedRowCountChange = this._createEventHandler('fixedRowCount')
        this._onScrollToColumnChange = this._createEventHandler('scrollToColumn')
        this._onScrollToRowChange = this._createEventHandler('scrollToRow')
    }

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
        )
    }

    _cellRenderer({ columnIndex, key, rowIndex, style }) {
        return (
            <div
                className={'styles.Cell'}
                key={key}
                style={style}
            >
                {columnIndex}, {rowIndex}
            </div>
        )
    }

    _createEventHandler(property) {
        return (event) => {
            const value = parseInt(event.target.value, 10) || 0

            this.setState({
                [property]: value
            })
        }
    }

    _createLabeledInput(property, eventHandler) {
        const value = this.state[property]

        return (
            `<LabeledInput
                label={property}
                name={property}
                onChange={eventHandler}
                value={value}
            />`
        )
    }
}

import { ScrollSync } from 'react-virtualized'

const LEFT_COLOR_FROM = hexToRgb('#471061')
const LEFT_COLOR_TO = hexToRgb('#BC3959')
const TOP_COLOR_FROM = hexToRgb('#000000')
const TOP_COLOR_TO = hexToRgb('#333333')

function scrollbarSize() { return 42; }
export class GridExample3 extends PureComponent<{}, any> {
    state
    constructor(props, context) {
        super(props, context)

        this.state = {
            columnWidth: 75,
            columnCount: 50,
            height: 300,
            overscanColumnCount: 0,
            overscanRowCount: 5,
            rowHeight: 40,
            rowCount: 100
        }

        this._renderBodyCell = this._renderBodyCell.bind(this)
        this._renderHeaderCell = this._renderHeaderCell.bind(this)
        this._renderLeftSideCell = this._renderLeftSideCell.bind(this)
    }

    render() {
        const {
            columnCount,
            columnWidth,
            height,
            overscanColumnCount,
            overscanRowCount,
            rowHeight,
            rowCount
        } = this.state

        return (

            <ScrollSync>
                {({ clientHeight, clientWidth, onScroll, scrollHeight, scrollLeft, scrollTop, scrollWidth }) => {
                    const x = scrollLeft / (scrollWidth - clientWidth)
                    const y = scrollTop / (scrollHeight - clientHeight)

                    const leftBackgroundColor = mixColors(LEFT_COLOR_FROM, LEFT_COLOR_TO, y)
                    const leftColor = '#ffffff'
                    const topBackgroundColor = mixColors(TOP_COLOR_FROM, TOP_COLOR_TO, x)
                    const topColor = '#ffffff'
                    const middleBackgroundColor = mixColors(leftBackgroundColor, topBackgroundColor, 0.5)
                    const middleColor = '#ffffff'

                    return (
                        <div className={'styles.GridRow'}>
                            <div
                                className={'styles.LeftSideGridContainer'}
                                style={{
                                    position: 'absolute',
                                    left: 0,
                                    top: 0,
                                    color: leftColor,
                                    backgroundColor: `rgb(${topBackgroundColor.r},${topBackgroundColor.g},${topBackgroundColor.b})`
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
                                    backgroundColor: `rgb(${leftBackgroundColor.r},${leftBackgroundColor.g},${leftBackgroundColor.b})`
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
                                            <div style={{
                                                backgroundColor: `rgb(${topBackgroundColor.r},${topBackgroundColor.g},${topBackgroundColor.b})`,
                                                color: topColor,
                                                height: rowHeight,
                                                width: width - scrollbarSize()
                                            }}>
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
                                                    width
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
                    )
                }}
            </ScrollSync>
        )
    }

    _renderBodyCell({ columnIndex, key, rowIndex, style }) {
        if (columnIndex < 1) {
            return
        }

        return this._renderLeftSideCell({ columnIndex, key, rowIndex, style })
    }

    _renderHeaderCell({ columnIndex, key, rowIndex, style }) {
        if (columnIndex < 1) {
            return
        }

        return this._renderLeftHeaderCell({ columnIndex, key, rowIndex, style })
    }

    _renderLeftHeaderCell({ columnIndex, key, rowIndex, style }) {
        return (
            <div
                className={'styles.headerCell'}
                key={key}
                style={style}
            >
                {`C${columnIndex}`}
            </div>
        )
    }

    _renderLeftSideCell({ columnIndex, key, rowIndex, style }) {
        return (
            <div
                className={'classNames'}
                key={key}
                style={style}
            >
                {`R${rowIndex}, C${columnIndex}`}
            </div>
        )
    }
}

function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null
}

/**
 * Ported from sass implementation in C
 * https://github.com/sass/libsass/blob/0e6b4a2850092356aa3ece07c6b249f0221caced/functions.cpp#L209
 */
function mixColors(color1, color2, amount) {
    const weight1 = amount
    const weight2 = 1 - amount

    const r = Math.round(weight1 * color1.r + weight2 * color2.r)
    const g = Math.round(weight1 * color1.g + weight2 * color2.g)
    const b = Math.round(weight1 * color1.b + weight2 * color2.b)

    return { r, g, b }
}

import { Column, Table, SortDirection, SortIndicator } from 'react-virtualized'

export class TableExample extends PureComponent<{}, any> {
    state;
    context;
    constructor(props, context) {
        super(props, context)

        this.state = {
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
            useDynamicRowHeight: false
        }

        this._getRowHeight = this._getRowHeight.bind(this)
        this._headerRenderer = this._headerRenderer.bind(this)
        this._noRowsRenderer = this._noRowsRenderer.bind(this)
        this._onRowCountChange = this._onRowCountChange.bind(this)
        this._onScrollToRowChange = this._onScrollToRowChange.bind(this)
        this._rowClassName = this._rowClassName.bind(this)
        this._sort = this._sort.bind(this)
    }

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
            useDynamicRowHeight
        } = this.state

        const { list } = this.context
        const sortedList = this._isSortEnabled()
            ? list
                .sortBy(item => item[sortBy])
                .update(list =>
                    sortDirection === SortDirection.DESC
                        ? list.reverse()
                        : list
                )
            : list

        const rowGetter = ({ index }) => this._getDatum(sortedList, index)

        return (
            <div>
                <AutoSizer disableHeight>
                    {({ width }) => (
                        <Table
                            ref='Table'
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
                            {!hideIndexRow &&
                                <Column
                                    label='Index'
                                    cellDataGetter={
                                        ({ columnData, dataKey, rowData }) => rowData.index
                                    }
                                    dataKey='index'
                                    disableSort={!this._isSortEnabled()}
                                    width={60}
                                />
                            }
                            <Column
                                dataKey='name'
                                disableSort={!this._isSortEnabled()}
                                headerRenderer={this._headerRenderer}
                                width={90}
                            />
                            <Column
                                width={210}
                                disableSort
                                label='The description label is really long so that it will be truncated'
                                dataKey='random'
                                className={'styles.exampleColumn'}
                                cellRenderer={
                                    ({ cellData, columnData, dataKey, rowData, rowIndex }) => cellData
                                }
                                flexGrow={1}
                            />
                        </Table>
                    )}
                </AutoSizer>
            </div>
        )
    }

    _getDatum(list, index) {
        return list.get(index % list.size)
    }

    _getRowHeight({ index }) {
        const { list } = this.context

        return this._getDatum(list, index).size
    }

    _headerRenderer({
        columnData,
        dataKey,
        disableSort,
        label,
        sortBy,
        sortDirection
    }) {
        return (
            <div>
                Full Name
        {sortBy === dataKey &&
                    <SortIndicator sortDirection={sortDirection} />
                }
            </div>
        )
    }

    _isSortEnabled() {
        const { list } = this.context
        const { rowCount } = this.state

        return rowCount <= list.size
    }

    _noRowsRenderer() {
        return (
            <div className={'styles.noRows'}>
                No rows
      </div>
        )
    }

    _onRowCountChange(event) {
        const rowCount = parseInt(event.target.value, 10) || 0

        this.setState({ rowCount })
    }

    _onScrollToRowChange(event) {
        const { rowCount } = this.state
        let scrollToIndex = Math.min(rowCount - 1, parseInt(event.target.value, 10))

        if (isNaN(scrollToIndex)) {
            scrollToIndex = undefined
        }

        this.setState({ scrollToIndex })
    }

    _rowClassName({ index }) {
        if (index < 0) {
            return 'styles.headerRow'
        } else {
            return index % 2 === 0 ? 'styles.evenRow' : 'styles.oddRow'
        }
    }

    _sort({ sortBy, sortDirection }) {
        this.setState({ sortBy, sortDirection })
    }

    _updateUseDynamicRowHeight(value) {
        this.setState({
            useDynamicRowHeight: value
        })
    }
}

import { TableCellProps } from "react-virtualized"

export class DynamicHeightTableColumnExample extends PureComponent<any, any> {
    state;
    context;
    _cache: CellMeasurerCache;
    constructor(props, context) {
        super(props, context)

        this._cache = new CellMeasurerCache({
            fixedWidth: true,
            minHeight: 25
        })

        this._columnCellRenderer = this._columnCellRenderer.bind(this)
        this._rowGetter = this._rowGetter.bind(this)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.width !== this.props.width) {
            this._cache.clearAll()
        }
    }

    render() {
        const { width } = this.props

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
                <Column
                    className={'styles.tableColumn'}
                    dataKey='name'
                    label='Name'
                    width={125}
                />
                <Column
                    className={'styles.tableColumn'}
                    dataKey='color'
                    label='Color'
                    width={75}
                />
                <Column
                    width={width - 200}
                    dataKey='random'
                    label='Dynamic text'
                    cellRenderer={this._columnCellRenderer}
                />
            </Table>
        )
    }

    _columnCellRenderer(args: TableCellProps) {
        const { list } = this.props

        const datum = list.get(args.rowIndex % list.size)
        const content = args.rowIndex % 5 === 0
            ? ''
            : datum.randomLong

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
                        whiteSpace: 'normal'
                    }}
                >
                    {content}
                </div>
            </CellMeasurer>
        )
    }

    _rowGetter({ index }) {
        const { list } = this.props

        return list.get(index % list.size)
    }
}

export class WindowScrollerExample extends PureComponent<{}, any> {
    state;
    context;
    _windowScroller: WindowScroller;

    constructor(props) {
        super(props)

        this.state = {
            showHeaderText: true
        }

        this._hideHeader = this._hideHeader.bind(this)
        this._rowRenderer = this._rowRenderer.bind(this)
        this._onCheckboxChange = this._onCheckboxChange.bind(this)
        this._setRef = this._setRef.bind(this)
    }

    render() {
        const { list, isScrollingCustomElement, customElement } = this.context
        const { showHeaderText } = this.state

        return (

            <div className={'styles.WindowScrollerWrapper'}>
                <WindowScroller
                    ref={this._setRef}
                    scrollElement={isScrollingCustomElement ? customElement : null}
                >
                    {({ height, isScrolling, scrollTop }) => (
                        <AutoSizer disableHeight>
                            {({ width }) => (
                                <List
                                    autoHeight
                                    className={'styles.List'}
                                    height={height}
                                    isScrolling={isScrolling}
                                    overscanRowCount={2}
                                    rowCount={list.size}
                                    rowHeight={30}
                                    rowRenderer={({ index, isVisible, key, style }) => this._rowRenderer({ index, isScrolling, isVisible, key, style })}
                                    scrollTop={scrollTop}
                                    width={width}
                                />
                            )}
                        </AutoSizer>
                    )}
                </WindowScroller>
            </div>
        )
    }

    _hideHeader() {
        const { showHeaderText } = this.state

        this.setState({
            showHeaderText: !showHeaderText
        }, () => {
            this._windowScroller.updatePosition()
        })
    }

    _rowRenderer({ index, isScrolling, isVisible, key, style }) {
        const { list } = this.context
        const row = list.get(index)

        return (
            <div
                key={key}
                className={'className'}
                style={style}
            >
                {row.name}
            </div>
        )
    }

    _setRef(windowScroller) {
        this._windowScroller = windowScroller
    }

    _onCheckboxChange(event) {
        this.context.setScrollingCustomElement(event.target.checked)
    }
}
