import { ComponentType, Ref } from "react";
import { FixedSizeList, FixedSizeListProps } from "react-window";

export interface ScrollerChildProps {
    ref: Ref<FixedSizeList>;
    outerRef: FixedSizeListProps["outerRef"];
    style: FixedSizeListProps["style"];
    onScroll: FixedSizeListProps["onScroll"];
}

export interface ScrollerProps {
    children: ComponentType<ScrollerChildProps>;
    isGrid?: boolean;
}

export const ReactWindowScroller: ComponentType<ScrollerProps>;
