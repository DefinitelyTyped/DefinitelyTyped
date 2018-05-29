import * as React from 'react';
import { CSSModule } from '../index';

export type CarouselIndicatorsProps<T = {}> = React.HTMLProps<HTMLElement> & {
    items: object[];
    activeIndex: number;
    cssModule?: CSSModule;
    onClickHandler: (idx: number) => void;
} & T;

declare class CarouselIndicators<T = {}> extends React.Component<CarouselIndicatorsProps<T>> {}
export default CarouselIndicators;
