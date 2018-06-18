import * as React from 'react';
import { CSSModule } from '../index';

export type CarouselProps<T = {}> = React.HTMLProps<HTMLElement> & {
    activeIndex?: number;
    next: () => void;
    previous: () => void;
    keyboard?: boolean;
    pause?: 'hover' | false;
    ride?: 'carousel';
    interval?: number | string | boolean;
    mouseEnter?: () => void;
    mouseExit?: () => void;
    slide?: boolean;
    cssModule?: CSSModule
} & T;

declare class Carousel<T = {[key: string]: any}> extends React.Component<CarouselProps<T>> {}
export default Carousel;
