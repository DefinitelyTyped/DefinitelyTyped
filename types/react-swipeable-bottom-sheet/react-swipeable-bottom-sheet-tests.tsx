import * as React from "react";
import SwipeableBottomSheet from "react-swipeable-bottom-sheet";

// @ts-expect-error
const overflowHeightIsString = <SwipeableBottomSheet overflowHeight={"64"} />;

// @ts-expect-error
const swipeableViewsPropsslideClassNameIsNumber = <SwipeableBottomSheet swipeableViewsProps={{ slideClassName: 2 }} />;

const validExample = (
    <SwipeableBottomSheet
        overflowHeight={64}
        open={true}
        topShadow={false}
        swipeableViewsProps={{ animateHeight: true }}
        style={{
            zIndex: 1000,
        }}
    >
        <div style={{ height: "40vh", backgroundColor: "blue" }}>
            <p>text</p>
        </div>
    </SwipeableBottomSheet>
);
