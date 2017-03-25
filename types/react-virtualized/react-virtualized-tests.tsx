import * as React from "react";
import * as ReactDOM from "react-dom";

import {
    Collection,
    SortDirection,
    Grid,
    ArrowKeyStepper,
    AutoSizer,
    CellMeasurer,
    ColumnSizer,
    InfiniteLoader,
    ScrollSync,
    WindowScroller,
    WindowScrollerRenderCallBackParams,
    List,
    Column,
    Table,
} from "react-virtualized";

/*
 * Collection
 */

function CollectionTest() {
    const list = [
        { name: "Brian Vaughn", x: 13, y: 34, width: 123, size: 234, height: 123 }
    ];

    // Render your grid
    ReactDOM.render(
        <Collection
            cellCount={list.length}
            cellRenderer={({ index }) => list[index].name}
            cellSizeAndPositionGetter={({ index }) => {
                const datum = list[index];
                return {
                    height: datum.height,
                    width: datum.width,
                    x: datum.x,
                    y: datum.y
                };
            }}
        />,
        document.getElementById("example")
    );
}

function GridTest() {
    // Grid data as an array of arrays
    const list = [
        ['Brian Vaughn', 'Software Engineer', 'San Jose', 'CA', 95125 /* ... */]
        // And so on...
    ];

    // Render your grid
    ReactDOM.render(
        <Grid
            width={300}
            height={300}
            columnWidth={100}
            rowHeight={30}
            columnCount={list[0].length}
            rowCount={list.length}
            cellRenderer={({ columnIndex, isScrolling, rowIndex }) => list[rowIndex][columnIndex]}
        />,
        document.getElementById('example')
    );
}

function ListTest() {
    // List data
    const list = [
        { name: 'Brian Vaughn', occupation: 'Software Engineer', location: 'San Jose, CA, 95125' /* ... */ }
        // And so on...
    ];

    // Render your List
    ReactDOM.render(
        <List
            width={300}
            height={300}
            rowHeight={30}
            rowCount={list.length}
            rowRenderer={({ index, isScrolling }) => list[index]}
        />,
        document.getElementById('example')
    );
}

function TableTest() {
    const list = [
        { name: 'Brian Vaughn', description: 'Software engineer' }
        // And so on...
    ];
    ReactDOM.render(
        <Table
            width={300}
            height={300}
            headerHeight={20}
            rowHeight={30}
            rowCount={list.length}
            rowGetter={({ index }) => list[index]}
        >
            <Column
                label='Name'
                dataKey='name'
                width={100}
            />
            <Column
                width={200}
                label='Description'
                dataKey='description'
            />
        </Table>,
        document.getElementById('example')
    );
}

function ArrowKeyStepperTest() {
    const columnCount = 12;
    const rowCount = 3;

    ReactDOM.render(
        <ArrowKeyStepper columnCount={columnCount} rowCount={rowCount}>
            {({ onSectionRendered, scrollToColumn, scrollToRow }) => (
                <Grid
                    columnWidth={1}
                    height={10}
                    width={20}
                    rowHeight={20}
                    cellRenderer={() => null}
                    columnCount={columnCount}
                    onSectionRendered={onSectionRendered}
                    rowCount={rowCount}
                    scrollToColumn={scrollToColumn}
                    scrollToRow={scrollToRow}
                />
            )}
        </ArrowKeyStepper>,
        document.getElementById('example')
    );
}

function AutoSizerTest() {
    // List data as an array of strings
    const list = [
        'Brian Vaughn'
        // And so on...
    ];
    const _rowRenderer = ({ index, key, style }) => {

        const row = list[index];

        return (
            <div
                key={key}
                className={'styles.row'}
                style={style}
            >
                {row}
            </div>
        )
    }

    // Render your list
    ReactDOM.render(
        <AutoSizer>
            {({ width, height }) => (
                <List
                    className={'styles.List'}
                    height={height}
                    rowCount={list.length}
                    rowHeight={30}
                    rowRenderer={({ index, key, style }) => {
                        const row = list[index];

                        return (
                            <div
                                key={key}
                                className={'styles.row'}
                                style={style}
                            >
                                {row}
                            </div>
                        )
                    }}
                    width={width}
                />
            )}
        </AutoSizer>,
        document.getElementById('example')
    );
}

function CellMeasurerTest() {
    const columnCount = 12;
    const rowCount = 3;
    const cellRenderer = ({ columnIndex, rowIndex }) => `${rowIndex}, ${columnIndex}`;
    const fixedRowHeight = 42;
    const height = 12;
    const width = 12;

    ReactDOM.render(
        <CellMeasurer
            columnIndex={0}
            rowIndex={0}
        >
            {({ getColumnWidth }) => (
                <Grid
                    columnCount={columnCount}
                    columnWidth={getColumnWidth}
                    height={height}
                    cellRenderer={cellRenderer}
                    rowCount={rowCount}
                    rowHeight={fixedRowHeight}
                    width={width}
                />
            )}
        </CellMeasurer>,
        document.getElementById('example')
    );
}

function ColumnSizerTest() {
    ReactDOM.render(
        <ColumnSizer
            columnMaxWidth={100}
            columnMinWidth={50}
            columnCount={12}
            width={120}
        >
            {({ adjustedWidth, getColumnWidth, registerChild }) => (
                <Grid
                    ref={registerChild}
                    columnWidth={getColumnWidth}
                    columnCount={12}
                    height={12}
                    cellRenderer={() => "test"}
                    rowHeight={50}
                    rowCount={12}
                    width={adjustedWidth}
                />
            )}
        </ColumnSizer>,
        document.getElementById('example')
    );
}

function InfiniteLoaderTest() {
    const list: string[] = [];

    function isRowLoaded({ index }) {
        return !!list[index];
    }

    function loadMoreRows({ startIndex, stopIndex }: { startIndex: number, stopIndex: number }) {
        return new Promise(resolve => resolve(list.push('test')));
    }

    function rowRenderer({ index, key, style }) {
        const content = list[index];

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


    // Render your list
    ReactDOM.render(
        <InfiniteLoader
            isRowLoaded={isRowLoaded}
            loadMoreRows={loadMoreRows}
            rowCount={12}
        >
            {({ onRowsRendered, registerChild }) => (
                <AutoSizer disableHeight>
                    {({ width }) => (
                        <List
                            ref={registerChild}
                            className={'styles.List'}
                            height={200}
                            onRowsRendered={onRowsRendered}
                            rowCount={list.length}
                            rowHeight={30}
                            rowRenderer={rowRenderer}
                            width={width}
                        />
                    )}
                </AutoSizer>
            )}
        </InfiniteLoader>,
        document.getElementById('example')
    );
}

function ScrollSyncTest() {
    function hexToRgb(hex) {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null
    }

    const LEFT_COLOR_FROM = hexToRgb('#471061')
    const LEFT_COLOR_TO = hexToRgb('#BC3959')
    const TOP_COLOR_FROM = hexToRgb('#000000')
    const TOP_COLOR_TO = hexToRgb('#333333')
    const columnWidth = 20;
    const rowHeight = 10;
    const overscanColumnCount = 10;
    const overscanRowCount = 10;
    const height = 10;
    const rowCount = 100;
    const columnCount = 100;


    function mixColors(color1, color2, amount) {
        const weight1 = amount
        const weight2 = 1 - amount

        const r = Math.round(weight1 * color1.r + weight2 * color2.r)
        const g = Math.round(weight1 * color1.g + weight2 * color2.g)
        const b = Math.round(weight1 * color1.b + weight2 * color2.b)

        return { r, g, b }
    };

    function renderLeftHeaderCell({ columnIndex, key, rowIndex, style }) {
        return (
            <div
                className={'styles.headerCell'}
                key={key}
                style={style}
            >
                {`C${columnIndex}`}
            </div>
        )
    };
    function renderLeftSideCell({ columnIndex, key, rowIndex, style }) {
        const rowClass = rowIndex % 2 === 0
            ? columnIndex % 2 === 0 ? 'styles.evenRow' : 'styles.oddRow'
            : columnIndex % 2 !== 0 ? 'styles.evenRow' : 'styles.oddRow'
        const classNames = [rowClass, 'styles.cell'].join(' ')

        return (
            <div
                className={classNames}
                key={key}
                style={style}
            >
                {`R${rowIndex}, C${columnIndex}`}
            </div>
        )
    };

    function renderHeaderCell({ columnIndex, key, rowIndex, style }) {
        if (columnIndex < 1) {
            return
        }

        return renderLeftHeaderCell({ columnIndex, key, rowIndex, style })
    };

    function renderBodyCell({ columnIndex, key, rowIndex, style }) {
        if (columnIndex < 1) {
            return
        }

        return renderLeftSideCell({ columnIndex, key, rowIndex, style })
    }

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
                                cellRenderer={renderLeftHeaderCell}
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
                                cellRenderer={renderLeftSideCell}
                                columnWidth={columnWidth}
                                columnCount={1}
                                className={'styles.LeftSideGrid'}
                                height={height}
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
                                            width: width
                                        }}>
                                            <Grid
                                                className={'styles.HeaderGrid'}
                                                columnWidth={columnWidth}
                                                columnCount={columnCount}
                                                height={rowHeight}
                                                overscanColumnCount={overscanColumnCount}
                                                cellRenderer={renderHeaderCell}
                                                rowHeight={rowHeight}
                                                rowCount={1}
                                                scrollLeft={scrollLeft}
                                                width={width}
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
                                                cellRenderer={renderBodyCell}
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
    );
}

function WindowScrollerTest() {
    const onScroll = function ({scrollTop}: { scrollTop: number }) { };
    const onResize = function ({height}: { height: number }) { };
    const list = [
        { name: 'Brian Vaughn', description: 'Software engineer' }
        // And so on...
    ];
    ReactDOM.render(
        <WindowScroller onScroll={onScroll} onResize={onResize}>
            {({ height, isScrolling, scrollTop }) => (
                <AutoSizer disableHeight>
                    {({ width }) => (
                        <List
                            autoHeight
                            className={'styles.List'}
                            height={height}
                            overscanRowCount={2}
                            rowCount={list.length}
                            rowHeight={30}
                            rowRenderer={({ index, isVisible, key, style }) => list[index].name}
                            scrollTop={scrollTop}
                            width={width}
                        />
                    )}
                </AutoSizer>
            )}
        </WindowScroller>,
        document.getElementById('example')
    );
    // test that onScroll & onResize are optional
    ReactDOM.render(
        <WindowScroller />,
        document.getElementById('example')
    );
}
