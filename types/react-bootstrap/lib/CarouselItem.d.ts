import * as React from 'react';

declare namespace CarouselItem {
    interface CarouselItemProps extends React.HTMLProps<CarouselItem> {
        active?: boolean | undefined;
        animtateIn?: boolean | undefined;
        animateOut?: boolean | undefined;
        direction?: string | undefined;
        index?: number | undefined;
        // TODO: Add more specific type
        onAnimateOutEnd?: Function | undefined;
    }
}
declare class CarouselItem extends React.Component<CarouselItem.CarouselItemProps> { }
export = CarouselItem;
