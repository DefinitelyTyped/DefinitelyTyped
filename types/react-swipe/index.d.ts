/// <reference types="swipe" />

import * as React from "react";

declare class ReactSwipe extends React.Component<ReactSwipe.Props> {
    prev(): void;
    next(): void;
    getPos(): number;
    getNumSlides(): number;
    slide(index: number, duration: number): void;
}

declare namespace ReactSwipe {
    interface Style {
        container: React.CSSProperties;
        wrapper: React.CSSProperties;
        child: React.CSSProperties;
    }

    interface Props {
        children?: React.ReactNode;
        id?: string | undefined;
        swipeOptions?: SwipeOptions | undefined;
        childCount?: number | undefined;
        style?: Style | undefined;
        className?: string | undefined;
    }
}

export = ReactSwipe;
