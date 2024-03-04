import * as React from "react";
export type ImgProps = ReactComponentElement<"img">;

export interface DotsProps {
    number?: number | undefined;
    thumbnails?: ImgProps[] | undefined;
    value?: number | undefined;
    onChange?(value: number): void;
    rtl?: boolean | undefined;
    className?: string | undefined;
}

export class Dots extends React.Component<DotsProps> {}

export type PluginStrategy = (originalValue: number, previousValue: number) => number;

export type CarouselPluginFunc = ({
    options,
    carouselProps,
    refs,
}: {
    options?: any;
    carouselProps: CarouselProps;
    refs: Record<string, React.RefObject<HTMLElement>>;
}) => {
    plugin?: (() => void) | undefined;
    beforeCarouselItems?: (() => React.JSX.Element) | undefined;
    afterCarouselItems?: (() => React.JSX.Element) | undefined;
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

export interface CarouselBreakpoints {
    [breakpointNumber: number]: Pick<CarouselProps, Exclude<keyof CarouselProps, "breakpoints">>;
}

export interface CarouselProps {
    children?: React.ReactNode;
    itemWidth?: number | undefined;
    value?: number | undefined;
    onChange?(value: number): void;
    slides?: React.JSX.Element[] | undefined;
    offset?: number | undefined;
    draggable?: boolean | undefined;
    animationSpeed?: number | undefined;
    className?: string | undefined;
    breakpoints?: CarouselBreakpoints | undefined;
    plugins?: Array<string | CarouselPluginTypes> | undefined;
}

export default class extends React.Component<CarouselProps> {}

export const slidesToShowPlugin: CarouselPluginFunc;
export const infinitePlugin: CarouselPluginFunc;
export const clickToChangePlugin: CarouselPluginFunc;
export const autoplayPlugin: CarouselPluginFunc;
export const rtlPlugin: CarouselPluginFunc;
export const centeredPlugin: CarouselPluginFunc;
export const slidesToScrollPlugin: CarouselPluginFunc;
export const arrowsPlugin: CarouselPluginFunc;
export const fastSwipePlugin: CarouselPluginFunc;

interface ReactComponentElement<
    T extends keyof React.JSX.IntrinsicElements | React.JSXElementConstructor<any>,
    P = Pick<React.ComponentProps<T>, Exclude<keyof React.ComponentProps<T>, "key" | "ref">>,
> extends React.ReactElement<P, Exclude<T, number>> {}

export {};
