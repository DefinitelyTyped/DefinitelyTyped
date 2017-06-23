// Type definitions for react-swipeable-views 0.12
// Project: https://github.com/oliviertassinari/react-swipeable-views
// Definitions by: Michael Ledin <https://github.com/mxl>
//                 Deividas Bakanas <https://github.com/DeividasBakanas>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as React from 'react';

export as namespace ReactSwipeableViews;

export type OnChangeIndexCallback = (indexNew: number, indexLatest: number) => void;
export type OnSwitchingCallback = (index: number) => void;

declare namespace ReactSwipeableViews {
    interface SwipeableViewsProps extends React.Props<SwipeableViews> {
        containerStyle?: React.CSSProperties;
        disabled?: boolean;
        index?: number;
        onChangeIndex?: OnChangeIndexCallback;
        onSwitching?: OnSwitchingCallback;
        resistance?: boolean;
        slideStyle?: React.CSSProperties;
        style?: React.CSSProperties;
        threshold?: number;
    }

    interface SwipeableViewsState {
        indexCurrent?: number;
        indexLatest?: number;
        isDragging?: boolean;
        isFirstRender?: boolean;
        heightLatest?: number;
    }

    class SwipeableViews extends React.Component<SwipeableViewsProps, SwipeableViewsState> {
    }
}

export default ReactSwipeableViews.SwipeableViews;
