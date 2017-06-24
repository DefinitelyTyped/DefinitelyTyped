// Type definitions for react-swipeable-views
// Project: https://github.com/oliviertassinari/react-swipeable-views
// Definitions by: Michael Ledin <https://github.com/mxl>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as React from 'react';

export as namespace ReactSwipeableViews;

declare namespace ReactSwipeableViews {
    export interface SwipeableViewsProps extends React.Props<SwipeableViews> {
        containerStyle?: React.CSSProperties;
        disabled?: boolean;
        index?: number;
        onChangeIndex?: (indexNew:number, indexLatest:number) => void;
        onSwitching?: (index:number) => void;
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

    export class SwipeableViews extends React.Component<SwipeableViewsProps, SwipeableViewsState> {
    }
}

export default ReactSwipeableViews.SwipeableViews;
