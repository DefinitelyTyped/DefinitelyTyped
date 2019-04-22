// Type definitions for react-slick 0.23
// Project: https://github.com/akiran/react-slick
// Definitions by: Andrey Balokha <https://github.com/andrewBalekha>
//                 Giedrius Grabauskas <https://github.com/GiedriusGrabauskas>
//                 Andrew Makarov <https://github.com/r3nya>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from "react";

type ComponentConstructor<TProps> =
    | React.ComponentClass<TProps>
    | React.StatelessComponent<TProps>;

export interface CustomArrowProps {
    className?: string;
    style?: React.CSSProperties;
    onClick?: React.MouseEventHandler<any>;
    currentSlide?: number;
    slideCount?: number;
}

export interface ResponsiveObject {
    breakpoint: number;
    settings: "unslick" | Settings;
}

export type SwipeDirection = "left" | "down" | "right" | "up" | string;

export type LazyLoadTypes = "ondemand" | "progressive";

export interface Settings {
    accessibility?: boolean;
    adaptiveHeight?: boolean;
    afterChange?(currentSlide: number): void;
    appendDots?(dots: React.ReactNode): JSX.Element;
    arrows?: boolean;
    asNavFor?: Slider;
    autoplaySpeed?: number;
    autoplay?: boolean;
    beforeChange?(currentSlide: number, nextSlide: number): void;
    centerMode?: boolean;
    centerPadding?: string;
    className?: string;
    cssEase?: string;
    customPaging?(index: number): JSX.Element;
    dotsClass?: string;
    dots?: boolean;
    draggable?: boolean;
    easing?: string;
    edgeFriction?: number;
    fade?: boolean;
    focusOnSelect?: boolean;
    infinite?: boolean;
    initialSlide?: number;
    lazyLoad?: LazyLoadTypes;
    nextArrow?: JSX.Element;
    onEdge?(swipeDirection: SwipeDirection): void;
    onInit?(): void;
    onLazyLoad?(slidesToLoad: number[]): void;
    onReInit?(): void;
    onSwipe?(swipeDirection: SwipeDirection): void;
    pauseOnDotsHover?: boolean;
    pauseOnFocus?: boolean;
    pauseOnHover?: boolean;
    prevArrow?: JSX.Element;
    responsive?: ResponsiveObject[];
    rows?: number;
    rtl?: boolean;
    slide?: string;
    slidesPerRow?: number;
    slidesToScroll?: number;
    slidesToShow?: number;
    speed?: number;
    swipeToSlide?: boolean;
    swipe?: boolean;
    swipeEvent?(swipeDirection: SwipeDirection): void;
    touchMove?: boolean;
    touchThreshold?: number;
    useCSS?: boolean;
    useTransform?: boolean;
    variableWidth?: boolean;
    vertical?: boolean;
    waitForAnimate?: boolean;
}

declare class Slider extends React.Component<Settings, never> {
    slickNext(): void;
    slickPause(): void;
    slickPlay(): void;
    slickPrev(): void;
    slickGoTo(slideNumber: number, dontAnimate?: boolean): void;
}

export default Slider;
