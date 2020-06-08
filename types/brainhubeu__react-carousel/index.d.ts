// Type definitions for @brainhubeu/react-carousel 1.15
// Project: https://github.com/brainhubeu/react-carousel
// Definitions by: Jack Allen <https://github.com/jackall3n>
//                Jeff Wen <https://github.com/sinchang>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from "react";

export type ImgProps = React.ReactComponentElement<'img'>;

export interface DotsProps {
    number?: number;
    thumbnails?: ImgProps[];
    value?: number;
    onChange?(value: number): void;
    rtl?: boolean;
}

export class Dots extends React.Component<DotsProps> {
}

export interface CarouselProps {
    value?: number;
    onChange?(value: number): void;
    slides?: JSX.Element[];
    slidesPerPage?: number;
    slidesPerScroll?: number;
    itemWidth?: number;
    offset?: number;
    arrows?: boolean;
    arrowLeft?: JSX.Element;
    arrowRight?: JSX.Element;
    arrowLeftDisabled?: JSX.Element;
    arrowRightDisabled?: JSX.Element;
    addArrowClickHandler?: boolean;
    autoPlay?: number;
    stopAutoPlayOnHover?: boolean;
    clickToChange?: boolean;
    centered?: boolean;
    infinite?: boolean;
    draggable?: boolean;
    keepDirectionWhenDragging?: boolean;
    animationSpeed?: number;
    dots?: boolean;
    breakpoints?: any;
    rtl?: boolean;
    minDraggableOffset?: number;
}

export default class extends React.Component<CarouselProps> {
}
