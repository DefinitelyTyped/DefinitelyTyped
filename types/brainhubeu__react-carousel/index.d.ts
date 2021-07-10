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
    number?: number | undefined;
    thumbnails?: ImgProps[] | undefined;
    value?: number | undefined;
    onChange?(value: number): void;
    rtl?: boolean | undefined;
    className?: string | undefined;
}

export class Dots extends React.Component<DotsProps> {
}

export type PluginStrategy = (originalValue: number, previousValue: number) => number;

export type CarouselPluginFunc = ({ options, carouselProps, refs }: { options?: any, carouselProps: CarouselProps, refs: Record<string, React.RefObject<HTMLElement>>}) => {
    plugin?: (() => void) | undefined;
    beforeCarouselItems?: (() => JSX.Element) | undefined;
    afterCarouselItems?: (() => JSX.Element) | undefined;
    carouselCustomProps?: (() => Record<string, () => any>) | undefined;
    trackCustomProps?: (() => Record<string, () => any>) | undefined;
    slideCustomProps?: (() => Record<string, () => any>) | undefined;
    strategies?: (() => Record<string, PluginStrategy>) | undefined;
    itemClassNames?: (() => string[]) | undefined;
    carouselClassNames?: (() => string[]) | undefined;
};

export interface CarouselPluginTypes {
    resolve: CarouselPluginFunc;
    options?: any;
}

export interface CarouselProps {
    itemWidth?: number | undefined;
    value?: number | undefined;
    onChange?(value: number): void;
    slides?: JSX.Element[] | undefined;
    offset?: number | undefined;
    draggable?: boolean | undefined;
    animationSpeed?: number | undefined;
    className?: string | undefined;
    breakpoints?: Pick<CarouselProps, Exclude<keyof CarouselProps, "breakpoints" | "plugins">> | undefined;
    plugins?: Array<string|CarouselPluginTypes> | undefined;
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
