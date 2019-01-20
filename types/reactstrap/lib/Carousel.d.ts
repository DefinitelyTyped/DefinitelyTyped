import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { CSSModule } from '../index';

export type CarouselProps<T = {}> = ReactDOM.HTMLProps<HTMLElement> & {
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

export type UncontrolledProps<T = {}> = ReactDOM.HTMLProps<HTMLElement> & {
    items: any[];
    activeIndex?: number;
    next?: () => void;
    previous?: () => void;
    keyboard?: boolean;
    pause?: "hover" | false;
    ride?: "carousel";
    interval?: number | string | boolean;
    mouseEnter?: () => void;
    mouseExit?: () => void;
    slide?: boolean;
    cssModule?: CSSModule;
    controls?: boolean;
    indicators?: boolean;
    autoPlay?: boolean;
} & T;

export type UncontrolledCarouselProps<T = {}> = UncontrolledProps<T>;

declare class Carousel<T = {[key: string]: any}> extends React.Component<CarouselProps<T>> {}
export default Carousel;
