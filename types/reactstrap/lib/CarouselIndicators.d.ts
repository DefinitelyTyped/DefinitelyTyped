import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { CSSModule } from '../index';

export type CarouselIndicatorsProps<T = {}> = ReactDOM.HTMLProps<HTMLElement> & {
    items: object[];
    activeIndex: number;
    cssModule?: CSSModule;
    onClickHandler: (idx: number) => void;
} & T;

declare class CarouselIndicators<T = {[key: string]: any}> extends React.Component<CarouselIndicatorsProps<T>> {}
export default CarouselIndicators;
