// Type definitions for @brainhubeu/react-carousel 2.0
// Project: https://github.com/brainhubeu/react-carousel
// Definitions by: Jack Allen <https://github.com/jackall3n>
//                 Jeff Wen <https://github.com/sinchang>
//                 Robert Hebel <https://github.com/roberthebel>
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

export type PluginStrategy = (originalValue: number, previousValue: number) => number;

export type CarouselPluginFunc = ({ options, carouselProps, refs }: { options?: any, carouselProps: CarouselProps, refs: Record<string, React.RefObject<HTMLElement>>}) => {
    plugin?: () => void;
    beforeCarouselItems?: () => JSX.Element;
    afterCarouselItems?: () => JSX.Element;
    carouselCustomProps?: () => Record<string, () => any>;
    trackCustomProps?: () => Record<string, () => any>;
    slideCustomProps?: () => Record<string, () => any>;
    strategies?: () => Record<string, PluginStrategy>;
    itemClassNames?: () => string[];
    carouselClassNames?: () => string[];
};

export interface CarouselPluginTypes {
    resolve: CarouselPluginFunc;
    options?: any;
}

export interface CarouselProps {
    itemWidth?: number;
    value?: number;
    onChange?(value: number): void;
    slides?: JSX.Element[];
    offset?: number;
    draggable?: boolean;
    animationSpeed?: number;
    className?: string;
    breakpoints?: Pick<CarouselProps, Exclude<keyof CarouselProps, "breakpoints">>;
    plugins?: Array<string|CarouselPluginTypes>;
}

export default class extends React.Component<CarouselProps> {
}

export const slidesToShowPlugin: CarouselPluginFunc;
export const infinitePlugin: CarouselPluginFunc;
export const clickToChangePlugin: CarouselPluginFunc;
export const autoplayPlugin: CarouselPluginFunc;
export const rtlPlugin: CarouselPluginFunc;
export const centeredPlugin: CarouselPluginFunc;
export const slidesToScrollPlugin: CarouselPluginFunc;
export const arrowsPlugin: CarouselPluginFunc;
export const fastSwipePlugin: CarouselPluginFunc;
