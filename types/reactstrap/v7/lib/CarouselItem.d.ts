import * as React from 'react';
import { CSSModule } from '../index';

export interface Transition {
    onEnter?: () => void;
    onEntering?: () => void;
    onEntered?: () => void;
    onExit?: () => void;
    onExiting?: () => void;
    onExited?: () => void;
}

export type CarouselItemProps<T = {}> = React.HTMLProps<HTMLElement> & Transition & {
    tag?: React.ReactType;
    in?: boolean;
    cssModule?: CSSModule;
    slide?: boolean;
} & T;

declare class CarouselItem<T = {[key: string]: any}> extends React.Component<CarouselItemProps<T>> {}
export default CarouselItem;
