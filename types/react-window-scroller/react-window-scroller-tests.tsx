import * as React from "react";
import { FixedSizeList } from "react-window";
import { ReactWindowScroller } from "react-window-scroller";

const WindowScrollList = () => {
    return (
        <ReactWindowScroller>
            {({ ref, outerRef, style, onScroll }) => (
                <FixedSizeList
                    ref={ref}
                    outerRef={outerRef}
                    style={style}
                    onScroll={onScroll}
                    height={window.innerHeight}
                    width={window.innerWidth}
                    itemCount={1000}
                    itemSize={100}
                >
                    {({ data, index, style }) => <div style={style}>{data[index]}</div>}
                </FixedSizeList>
            )}
        </ReactWindowScroller>
    );
};
