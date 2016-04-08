// Type definitions for react-swipeable-views
// Project: https://github.com/oliviertassinari/react-swipeable-views
// Definitions by: Michael Ledin <https://github.com/mxl>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

///<reference path='../react/react.d.ts' />

declare namespace ReactSwipeableViews {
    import React = __React;

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

declare module 'react-swipeable-views' {
    export default ReactSwipeableViews.SwipeableViews;
}
