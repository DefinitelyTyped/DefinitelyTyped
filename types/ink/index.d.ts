// Type definitions for ink 0.5
// Project: https://github.com/vadimdemedes/ink#readme
// Definitions by: Carlos Precioso <https://github.com/cprecioso>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

/// <reference types="node" />

import { ValidationMap } from "prop-types";

export interface InkElement {}

export type InkNode =
    | ReadonlyArray<InkElement | string | number | null>
    | InkElement
    | string
    | number
    | null;

export declare function h<
    P extends Record<string, any>,
    C extends ComponentClass<P, any, any>
>(type: C, props: P, ...children: InkNode[]): InkElement;
export declare function h<P extends Record<string, any>>(
    type: StatelessComponent<P, any>,
    props: P,
    ...children: InkNode[]
): InkElement;
export declare function h<T extends keyof JSX.IntrinsicElements>(
    type: T,
    props: JSX.IntrinsicElements[T],
    ...children: InkNode[]
): InkElement;

export declare function render(
    tree: InkElement,
    stream?: NodeJS.WriteStream
): (() => void);
export declare function renderToString(
    tree: InkElement,
    prevTree?: InkElement
): string;

export type InkComponent<P extends Record<string, any> = {}> =
    | ComponentClass<P, any, any>
    | StatelessComponent<P, any>;

export interface InkChildren {}

export interface StatelessComponent<
    P extends Record<string, any> = {},
    C extends Record<string, any> = {}
> {
    (props: P, context: C): InkElement;
    defaultProps?: Record<string, any>;
    propTypes?: ValidationMap<Record<string, any>>;
}

export abstract class Component<
    P extends Record<string, any> = {},
    S extends Record<string, any> = {},
    C extends Record<string, any> = {}
> {
    readonly props: P;
    readonly context: C;

    setState(
        nextState: Partial<Component["state"]>,
        callback?: () => void
    ): void;
    setState(
        nextState: (state: Component["state"]) => Partial<Component["state"]>,
        callback?: () => void
    ): void;
}

export interface Component<
    P extends Record<string, any> = {},
    S extends Record<string, any> = {},
    C extends Record<string, any> = {}
> {
    state: S;

    render(
        props: Component["props"],
        state: Component["state"],
        context: Component["state"]
    ): InkElement;

    componentWillMount?(): void;
    componentDidMount?(): void;
    componentWillUnmount?(): void;
    componentWillReceiveProps?(
        nextProps: Component["props"],
        nextState: Component["state"]
    ): void;
    shouldComponentUpdate?(
        nextProps: Component["props"],
        nextState: Component["state"]
    ): void;
    componentWillUpdate?(
        nextProps: Component["props"],
        nextState: Component["state"]
    ): void;
    componentDidUpdate?(): void;

    getChildContext?<CC extends Record<string, any>>(): (() => CC);
}

export interface ComponentClass<
    P extends Record<string, any> = {},
    S extends Record<string, any> = {},
    C extends Record<string, any> = {}
> {
    new (props: Component["props"], context: Component["state"]): Component<
        P,
        S,
        C
    >;
    defaultProps?: Record<string, any>;
    propTypes?: ValidationMap<Record<string, any>>;
}

export declare namespace h {
    export const Fragment: InkComponent<{}>;
}
export declare const Fragment: typeof h.Fragment;

export declare const Color: ComponentClass<{
    rgb?: [number, number, number];
    hsl?: [number, number, number];
    hsv?: [number, number, number];
    hwb?: [number, number, number];
    hex?: string;
    keyword?: string;
    bgRgb?: [number, number, number];
    bgHsl?: [number, number, number];
    bgHsv?: [number, number, number];
    bgHwb?: [number, number, number];
    bgHex?: string;
    bgKeyword?: string;
    reset?: boolean;
    bold?: boolean;
    dim?: boolean;
    italic?: boolean;
    underline?: boolean;
    inverse?: boolean;
    hidden?: boolean;
    strikethrough?: boolean;
    visible?: boolean;
    black?: boolean;
    red?: boolean;
    green?: boolean;
    yellow?: boolean;
    blue?: boolean;
    magenta?: boolean;
    cyan?: boolean;
    white?: boolean;
    gray?: boolean;
    grey?: boolean;
    blackBright?: boolean;
    redBright?: boolean;
    greenBright?: boolean;
    yellowBright?: boolean;
    blueBright?: boolean;
    magentaBright?: boolean;
    cyanBright?: boolean;
    whiteBright?: boolean;
    bgBlack?: boolean;
    bgRed?: boolean;
    bgGreen?: boolean;
    bgYellow?: boolean;
    bgBlue?: boolean;
    bgMagenta?: boolean;
    bgCyan?: boolean;
    bgWhite?: boolean;
    bgBlackBright?: boolean;
    bgRedBright?: boolean;
    bgGreenBright?: boolean;
    bgYellowBright?: boolean;
    bgBlueBright?: boolean;
    bgMagentaBright?: boolean;
    bgCyanBright?: boolean;
    bgWhiteBright?: boolean;
}>;

export declare const Bold: InkComponent<{}>;
export declare const Underline: InkComponent<{}>;

declare global {
    namespace JSX {
        type Element = InkElement;

        type ElementClass = Component;
        type FunctionalElement = StatelessComponent;

        interface ElementAttributesProperty {
            props: {};
        }
        interface ElementChildrenAttribute {
            children: {};
        }

        interface IntrinsicAttributes {}
        interface IntrinsicClassAttributes<T> {
            ref?: (ref: T | null) => void;
        }

        interface IntrinsicElements {
            div: {};
            span: {};
            br: {};
        }
    }
}
