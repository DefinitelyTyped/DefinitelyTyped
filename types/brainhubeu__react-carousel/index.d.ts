// Type definitions for @brainhubeu/react-carousel 1.10
// Project: https://github.com/brainhubeu/react-carousel
// Definitions by: Leandro Soares <https://github.com/SoaresMG>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.3

import * as React from "react";

export declare interface CarouselBreakpoints {
    slidesPerPage?: number;
    slidesPerScroll?: number;
    arrows?: boolean;
    arrowLeft?: JSX.Element;
    arrowRight?: JSX.Element;
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
    className?: string;
}

export declare interface CarouselProps {
    value?: number;
    onChange?: (value: number) => void;
    children?: JSX.Element | JSX.Element[];
    slides?: JSX.Element[];
    slidesPerPage?: number;
    slidesPerScroll?: number;
    itemWidth?: number;
    offset?: number;
    arrows?: boolean;
    arrowLeft?: JSX.Element;
    arrowRight?: JSX.Element,
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
    className?: string;
    breakpoints?: CarouselBreakpoints;
}

export default class Carousel extends React.Component<CarouselProps> { }
