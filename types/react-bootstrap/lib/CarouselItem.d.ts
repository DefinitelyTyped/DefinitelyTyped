import * as React from 'react';
import * as ReactDOM from 'react-dom';

declare namespace CarouselItem {
    interface CarouselItemProps extends ReactDOM.HTMLProps<CarouselItem> {
        active?: boolean;
        animtateIn?: boolean;
        animateOut?: boolean;
        direction?: string;
        index?: number;
        // TODO: Add more specific type
        onAnimateOutEnd?: Function;
    }
}
declare class CarouselItem extends React.Component<CarouselItem.CarouselItemProps> { }
export = CarouselItem;
