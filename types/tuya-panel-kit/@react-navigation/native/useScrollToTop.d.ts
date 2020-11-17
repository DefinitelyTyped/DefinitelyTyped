import * as React from 'react';
declare type ScrollOptions = {
    y?: number;
    animated?: boolean;
};
declare type ScrollableView = {
    scrollToTop(): void;
} | {
    scrollTo(options: ScrollOptions): void;
} | {
    scrollToOffset(options: {
        offset?: number;
        animated?: boolean;
    }): void;
} | {
    scrollResponderScrollTo(options: ScrollOptions): void;
};
declare type ScrollableWrapper = {
    getScrollResponder(): React.ReactNode;
} | {
    getNode(): ScrollableView;
} | ScrollableView;
export default function useScrollToTop(ref: React.RefObject<ScrollableWrapper>): void;
export {};
