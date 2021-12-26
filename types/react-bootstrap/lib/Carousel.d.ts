import * as React from 'react';
import { Omit, Sizes, SelectCallback } from 'react-bootstrap';
import CarouselItem = require('./CarouselItem');
import CarouselCaption = require('./CarouselCaption');

declare namespace Carousel {
    export type CarouselProps = Omit<React.HTMLProps<Carousel>, 'wrap'> & {
        activeIndex?: number | undefined;
        bsSize?: Sizes | undefined;
        bsStyle?: string | undefined;
        controls?: boolean | undefined;
        defaultActiveIndex?: number | undefined;
        direction?: string | undefined;
        indicators?: boolean | undefined;
        interval?: number | null | undefined;
        nextIcon?: React.ReactNode | undefined;
        onSelect?: SelectCallback | undefined;
        // TODO: Add more specific type
        onSlideEnd?: Function | undefined;
        pauseOnHover?: boolean | undefined;
        prevIcon?: React.ReactNode | undefined;
        slide?: boolean | undefined;
        wrap?: boolean | undefined;
    };
}
declare class Carousel extends React.Component<Carousel.CarouselProps> {
    public static Caption: typeof CarouselCaption;
    public static Item: typeof CarouselItem;
}
export = Carousel;
