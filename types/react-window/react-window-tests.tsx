import {
    FixedSizeList,
    VariableSizeList,
    FixedSizeGrid,
    VariableSizeGrid
} from "react-window";
import * as React from "react";

const FixedSizeListTestRequiredProps: React.SFC = () => (
    <FixedSizeList itemSize={0} height={0} itemCount={0} width={0}>
        {({ style, index }) => <div style={style}>Test {index}</div>}
    </FixedSizeList>
);

const VariableSizeListTestRequiredProps: React.SFC = () => (
    <VariableSizeList itemSize={index => 0} height={0} itemCount={0} width={0}>
        {({ style, index }) => <div style={style}>Test {index}</div>}
    </VariableSizeList>
);

const FixedSizeGridTestRequiredProps: React.SFC = () => (
    <FixedSizeGrid
        columnCount={0}
        columnWidth={0}
        rowCount={0}
        rowHeight={0}
        height={0}
        width={0}
    >
        {({ style, columnIndex, rowIndex }) => (
            <div style={style}>
                Test {rowIndex} {columnIndex}
            </div>
        )}
    </FixedSizeGrid>
);

const VariableSizeGridTestRequiredProps: React.SFC = () => (
    <VariableSizeGrid
        columnCount={0}
        columnWidth={index => 0}
        rowCount={0}
        rowHeight={index => 0}
        height={0}
        width={0}
    >
        {({ style, columnIndex, rowIndex }) => (
            <div style={style}>
                Test {rowIndex} {columnIndex}
            </div>
        )}
    </VariableSizeGrid>
);

const FixedSizeListTestOptionalProps: React.SFC<{ testBool: boolean }> = ({
    testBool
}) => (
    <FixedSizeList
        itemSize={0}
        height={0}
        itemCount={0}
        width={0}
        className=""
        direction={testBool ? "vertical" : "horizontal"}
        initialScrollOffset={0}
        innerRef="innerRef"
        innerTagName="div"
        itemData={{ foo: "bar" }}
        itemKey={index => "foo" + index.toString()}
        onItemsRendered={({
            overscanStartIndex,
            overscanStopIndex,
            visibleStartIndex,
            visibleStopIndex
        }) =>
            overscanStartIndex +
            overscanStopIndex +
            visibleStartIndex +
            visibleStopIndex
        }
        useIsScrolling={true}
        outerTagName="div"
        style={{ color: "cyan" }}
        overscanCount={0}
        outerRef="outerRef"
        ref="ref"
        onScroll={({
            scrollDirection,
            scrollOffset,
            scrollUpdateWasRequested
        }) =>
            scrollDirection === "forward"
                ? scrollUpdateWasRequested
                : scrollOffset
        }
    >
        {({ style, index }) => <div style={style}>Test {index}</div>}
    </FixedSizeList>
);

const VariableSizeListTestOptionalProps: React.SFC<{ testBool: boolean }> = ({
    testBool
}) => (
    <VariableSizeList
        itemSize={() => 0}
        height={0}
        itemCount={0}
        width={0}
        className=""
        direction={testBool ? "vertical" : "horizontal"}
        initialScrollOffset={0}
        innerRef="innerRef"
        innerTagName="div"
        itemData={{ foo: "bar" }}
        itemKey={index => "foo" + index.toString()}
        onItemsRendered={({
            overscanStartIndex,
            overscanStopIndex,
            visibleStartIndex,
            visibleStopIndex
        }) =>
            overscanStartIndex +
            overscanStopIndex +
            visibleStartIndex +
            visibleStopIndex
        }
        useIsScrolling={true}
        outerTagName="div"
        style={{ color: "cyan" }}
        overscanCount={0}
        outerRef="outerRef"
        ref="ref"
        onScroll={({
            scrollDirection,
            scrollOffset,
            scrollUpdateWasRequested
        }) =>
            scrollDirection === "forward"
                ? scrollUpdateWasRequested
                : scrollOffset
        }
        estimatedItemSize={0}
    >
        {({ style, index }) => <div style={style}>Test {index}</div>}
    </VariableSizeList>
);

const VariableSizeGridTestOptionalProps: React.SFC = () => (
    <VariableSizeGrid
        columnCount={0}
        columnWidth={index => 0}
        rowCount={0}
        rowHeight={index => 0}
        height={0}
        width={0}
        className=""
        estimatedColumnWidth={0}
        estimatedRowHeight={0}
        initialScrollLeft={0}
        initialScrollTop={0}
        innerRef="innerRef"
        innerTagName="div"
        itemData={{ foo: "bar" }}
        itemKey={({ columnIndex, rowIndex }) =>
            columnIndex.toString() + rowIndex.toString()
        }
        onItemsRendered={({
            overscanColumnStartIndex,
            overscanColumnStopIndex,
            overscanRowStartIndex,
            overscanRowStopIndex,
            visibleColumnStartIndex,
            visibleColumnStopIndex,
            visibleRowStartIndex,
            visibleRowStopIndex
        }) => undefined}
        onScroll={({
            horizontalScrollDirection,
            scrollLeft,
            scrollTop,
            scrollUpdateWasRequested,
            verticalScrollDirection
        }) => undefined}
        outerRef="outerRef"
        outerTagName="div"
        overscanCount={5}
        ref="ref"
        style={{ color: "red" }}
        useIsScrolling={true}
    >
        {({ style, columnIndex, rowIndex }) => (
            <div style={style}>
                Test {rowIndex} {columnIndex}
            </div>
        )}
    </VariableSizeGrid>
);
