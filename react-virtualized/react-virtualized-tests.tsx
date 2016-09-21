/// <reference path="react-virtualized.d.ts"/>
/// <reference path="../react/react.d.ts"/>
/// <reference path="../react/react-dom.d.ts"/>

import * as React from "react";
import * as ReactDOM from "react-dom";

import {
    Collection,
    FlexTable,
    FlexColumn,
    SortDirection,
    Grid,
    VirtualScroll,
    ArrowKeyStepper,
    AutoSizer,
    CellMeasurer,
    ColumnSizer,
    InfiniteLoader,
    ScrollSync,
    WindowScroller,
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
            } }
            height={300}
            width={300}
            />,
        document.getElementById("example")
    );
}


function FlexTableTest() {
    const list = [
        { name: 'Brian Vaughn', description: 'Software engineer' }
        // And so on...
    ];

    // Render your table
    ReactDOM.render(
        <FlexTable
            width={300}
            height={300}
            headerHeight={20}
            rowHeight={30}
            rowCount={list.length}
            rowGetter={
                ({ index }) => list[index]
            }
            >
            <FlexColumn
                label="Name"
                dataKey="name"
                width={100}
                />
            <FlexColumn
                width={200}
                label="Description"
                dataKey="description"
                />
        </FlexTable>,
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

function VirtualScrollTest() {
    // List data as an array of strings
    const list = [
        'Brian Vaughn'
        // And so on...
    ];

    // Render your list
    ReactDOM.render(
        <VirtualScroll
            width={300}
            height={300}
            rowCount={list.length}
            rowHeight={20}
            rowRenderer={({ index, isScrolling }) => list[index]}
            />,
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
                    columnCount={columnCount}
                    onSectionRendered={onSectionRendered}
                    rowCount={rowCount}
                    scrollToColumn={scrollToColumn}
                    scrollToRow={scrollToRow}
                    />
            ) }
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

    // Render your list
    ReactDOM.render(
        <AutoSizer>
            {({ height, width }) => (
                <VirtualScroll
                    width={width}
                    height={height}
                    rowCount={list.length}
                    rowHeight={20}
                    rowRenderer={
                        ({ index }) => list[index] // Could also be a DOM element
                    }
                    />
            ) }
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
            cellRenderer={cellRenderer}
            columnCount={columnCount}
            height={fixedRowHeight}
            rowCount={rowCount}
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
            ) }
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
            ) }
        </ColumnSizer>,
        document.getElementById('example')
    );
}

function InfiniteLoaderTest() {
    const list: string[] = [];

    function isRowLoaded({ index }) {
        return !!list[index];
    }

    function loadMoreRows({ startIndex, stopIndex }) {
        return list.push('test');
    }

    // Render your list
    ReactDOM.render(
        <InfiniteLoader
            isRowLoaded={isRowLoaded}
            loadMoreRows={loadMoreRows}
            rowCount={12}
            >
            {({ onRowsRendered, registerChild }) => (
                <VirtualScroll
                    ref={registerChild}
                    width={300}
                    height={200}
                    onRowsRendered={onRowsRendered}
                    rowCount={list.length}
                    rowHeight={20}
                    rowRenderer={
                        ({ index }) => list[index] // Could also be a DOM element
                    }
                    />
            ) }
        </InfiniteLoader>,
        document.getElementById('example')
    );
}

function ScrollSyncTest() {
    return (
        <ScrollSync>
            {({ clientHeight, clientWidth, onScroll, scrollHeight, scrollLeft, scrollTop, scrollWidth }) => (
                <div className='Table'>
                    <div className='LeftColumn'>
                        <VirtualScroll
                            rowRenderer={() => "test"}
                            rowCount={42}
                            height={12}
                            width={12}
                            rowHeight={120}
                            scrollTop={scrollTop}/>
                        />
                    </div>
                    <div className='RightColumn'>
                        <Grid
                            onScroll={onScroll}/>
                    </div>
                </div>
            ) }
        </ScrollSync>
    );
}

function WindowScrollerTest() {
    ReactDOM.render(
        <WindowScroller>
            {({ height, isScrolling, scrollTop }) => (
                <VirtualScroll
                    autoHeight
                    height={height}
                    rowCount={12}
                    rowHeight={12}
                    rowRenderer={() => 'test'}
                    scrollTop={scrollTop}
                    width={120}/>
            ) }
        </WindowScroller>,
        document.getElementById('example')
    );
}
