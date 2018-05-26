import * as React from 'react';
import { CSSModule } from '../index';

export interface CarouselProps extends React.HTMLProps<HTMLElement> {
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
}

declare class Carousel extends React.Component<CarouselProps> {}
export default Carousel;
