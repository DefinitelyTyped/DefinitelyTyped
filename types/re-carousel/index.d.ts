import { ComponentType, CSSProperties } from "react";

interface WidgetProps {
    index: number;
    total: number;
    prevHandler: () => void;
    nextHandler: () => void;
    axis?: "x" | "y";
    auto?: boolean;
    loop?: boolean;
    interval?: number;
}

interface CarouselProps {
    axis?: "x" | "y";
    auto?: boolean;
    loop?: boolean;
    interval?: number;
    duration?: number;
    widgets?: ReadonlyArray<ComponentType<WidgetProps>>;
    frames?: JSX.Element[];
    style?: CSSProperties;
    minMove?: number;
    onTransitionEnd?: (siblingFrames: SiblingFrames, duration: number) => void;
}

interface SiblingFrames {
    current: HTMLDivElement;
    prev: HTMLDivElement;
    next: HTMLDivElement;
}

declare const Carousel: ComponentType<CarouselProps>;
export = Carousel;
