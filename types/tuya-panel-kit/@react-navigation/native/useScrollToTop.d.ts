import * as React from 'react';
// tslint:disable-next-line strict-export-declare-modifiers interface-over-type-literal
declare type ScrollOptions = {
    y?: number;
    animated?: boolean;
};
// tslint:disable-next-line strict-export-declare-modifiers interface-over-type-literal
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
// tslint:disable-next-line strict-export-declare-modifiers
declare type ScrollableWrapper = {
    getScrollResponder(): React.ReactNode;
} | {
    getNode(): ScrollableView;
} | ScrollableView;
export default function useScrollToTop(ref: React.RefObject<ScrollableWrapper>): void;
export {};
