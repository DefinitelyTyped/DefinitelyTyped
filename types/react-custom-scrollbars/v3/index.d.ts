// Type definitions for react-custom-scrollbars 3.0
// Project: https://github.com/malte-wessel/react-custom-scrollbars
// Definitions by: David-LeBlanc-git <https://github.com/David-LeBlanc-git>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from "react";

declare module "react-custom-scrollbars" {
    export interface positionValues {
        top: number;
        left: number;
        clientWidth: number;
        clientHeight: number;
        scrollWidth: number;
        scrollHeight: number;
        scrollLeft: number;
        scrollTop: number;
    }

    export interface ScrollbarProps extends React.HTMLProps<Scrollbars> {
        onScroll?: React.UIEventHandler<any>;
        onScrollFrame?: (values: positionValues) => void;
        onScrollStart?: () => void;
        onScrollStop?: () => void;
        onUpdate?: (values: positionValues) => void;

        renderView?: React.StatelessComponent<any>;
        renderTrackHorizontal?: React.StatelessComponent<any>;
        renderTrackVertical?: React.StatelessComponent<any>;
        renderThumbHorizontal?: React.StatelessComponent<any>;
        renderThumbVertical?: React.StatelessComponent<any>;

        autoHide?: boolean;
        autoHideTimeout?: number;
        autoHideDuration?: number;

        thumbSize?: number;
        thumbMinSize?: number;
        universal?: boolean;
    }

    export default class Scrollbars extends React.Component<ScrollbarProps> {
        scrollTop(top: number): void;
        scrollLeft(left: number): void;
        scrollToTop(): void;
        scrollToBottom(): void;
        scrollToLeft(): void;
        scrollToRight(): void;
        getScrollLeft(): number;
        getScrollTop(): number;
        getScrollWidth(): number;
        getScrollHeight(): number;
        getWidth(): number;
        getHeight(): number;
        getValues(): positionValues;
    }
}
