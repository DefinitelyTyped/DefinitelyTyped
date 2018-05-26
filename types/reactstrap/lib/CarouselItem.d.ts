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

export interface CarouselItemProps extends React.HTMLProps<HTMLElement>, Transition {
    tag?: React.ReactType;
    in?: boolean;
    cssModule?: CSSModule;
    slide?: boolean;
}

declare class CarouselItem extends React.Component<CarouselItemProps> {}
export default CarouselItem;
