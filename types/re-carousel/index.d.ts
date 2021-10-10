// Type definitions for re-carousel 2.4
// Project: https://github.com/amio/re-carousel
// Definitions by: Josh Kramer <https://github.com/jkjustjoshing>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { ComponentType, CSSProperties } from 'react';

interface WidgetProps {
    index: number;
    total: number;
    prevHandler: () => void;
    nextHandler: () => void;
    axis?: 'x' | 'y';
    auto?: boolean;
    loop?: boolean;
    interval?: number;
}

interface CarouselProps {
    axis?: 'x' | 'y';
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
