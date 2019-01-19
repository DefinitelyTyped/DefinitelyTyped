// Type definitions for react-swipe 5.0
// Project: https://github.com/voronianski/react-swipe
// Definitions by: Deividas Bakanas <https://github.com/DeividasBakanas>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

/// <reference types="swipe" />

import * as React from "react";
import * as ReactDOM from "react-dom";

declare class ReactSwipe extends React.Component<ReactSwipe.Props> {
    prev(): void;
    next(): void;
    getPos(): number;
    getNumSlides(): number;
    slide(index: number, duration: number): void;
}

declare namespace ReactSwipe {
    interface Style {
        container: ReactDOM.CSSProperties;
        wrapper: ReactDOM.CSSProperties;
        child: ReactDOM.CSSProperties;
    }

    interface Props {
        id?: string;
        swipeOptions?: SwipeOptions;
        style?: Style;
        className?: string;
    }
}

export = ReactSwipe;
