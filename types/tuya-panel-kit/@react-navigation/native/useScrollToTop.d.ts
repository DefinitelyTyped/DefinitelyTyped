import * as React from "react";
// eslint-disable-next-line @definitelytyped/strict-export-declare-modifiers, interface-over-type-literal
declare type ScrollOptions = {
    y?: number | undefined;
    animated?: boolean | undefined;
};
// eslint-disable-next-line @definitelytyped/strict-export-declare-modifiers, interface-over-type-literal
declare type ScrollableView = {
    scrollToTop(): void;
} | {
    scrollTo(options: ScrollOptions): void;
} | {
    scrollToOffset(options: {
        offset?: number | undefined;
        animated?: boolean | undefined;
    }): void;
} | {
    scrollResponderScrollTo(options: ScrollOptions): void;
};
// eslint-disable-next-line @definitelytyped/strict-export-declare-modifiers
declare type ScrollableWrapper = {
    getScrollResponder(): React.ReactNode;
} | {
    getNode(): ScrollableView;
} | ScrollableView;
export default function useScrollToTop(ref: React.RefObject<ScrollableWrapper>): void;
export {};
