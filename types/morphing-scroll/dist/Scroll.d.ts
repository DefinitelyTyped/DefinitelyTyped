import React from "react";
interface ScrollType {
    scrollID?: string;
    className?: string;
    scrollXY?: number[];
    objectXY?: number[];
    gap?: number[] | number;
    padding?: number[] | number;
    xDirection?: boolean;
    contentAlignCenter?: boolean;
    wrapAlignCenter?: boolean;
    scrollReverse?: boolean;
    scrollTrigger?: "←→" | "←→/←O→" | "<c>" | "<c>/←O→" | "◄|►" | "◄|►/<c>";
    scrollVisibility?: "<O>" | "↓<O>" | "<Ø>";
    scrollTop?: number | "end";
    lazyRender?: boolean;
    infiniteScroll?: boolean;
    rootMargin?: number[] | number;
    suspending?: boolean;
    fallback?: React.ReactNode;
    thumbElement?: React.ReactNode;
    edgeGradient?: boolean | string;
    objectsWrapperMinSize?: number;
    onScrollValue?: [(scrollTop: number) => boolean, () => void][];
    children: React.ReactNode;
}
declare const Scroll: React.FC<ScrollType>;
export default Scroll;
