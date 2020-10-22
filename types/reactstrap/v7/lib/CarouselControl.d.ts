import * as React from 'react';
import { CSSModule } from '../index';

export type CarouselControlProps<T = {}> = React.HTMLProps<HTMLElement> & {
    direction: 'prev' | 'next';
    onClickHandler: () => void;
    cssModule?: CSSModule;
    directionText: string;
} & T;

declare class CarouselControl<T = {[key: string]: any}> extends React.Component<CarouselControlProps<T>> {}
export default CarouselControl;
