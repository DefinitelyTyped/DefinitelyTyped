// Type definitions for ink 0.5
// Project: https://github.com/vadimdemedes/ink#readme
// Definitions by: Carlos Precioso <https://github.com/cprecioso>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

/// <reference types="node" />

import { ValidationMap } from "prop-types";

export interface InkElement {
    component: InkComponent<any>;
    instance: Component<any, any, any> | null;
    ref: (ref: any) => void;
    _props: any;
    _children: InkNode[];
}

export type InkNode =
    | ReadonlyArray<InkElement | string | number | null>
    | InkElement
    | string
    | number
    | null;

export function h<P extends Record<string, any>>(
    type: ComponentClass<P, any, any> | StatelessComponent<P, any>,
    props: P,
    ...children: InkNode[]
): InkElement;

export function h<T extends keyof JSX.IntrinsicElements>(
    type: T,
    props: JSX.IntrinsicElements[T],
    ...children: InkNode[]
): InkElement;

export function render(
    tree: InkElement,
    stream?: NodeJS.WriteStream
): (() => void);
export function renderToString(tree: InkElement, prevTree?: InkElement): string;

export type InkComponent<P extends Record<string, any> = {}> =
    | ComponentClass<P, any, any>
    | StatelessComponent<P, any>;

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
    readonly props: P & { children?: InkNode };
    readonly context: C;

    setState(
        nextState:
            | Partial<Component["state"]>
            | ((state: Component["state"]) => Partial<Component["state"]>),
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

    getChildContext?(): (() => Record<string, any>);
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

export namespace h {
    const Fragment: InkComponent;
}
export const Fragment: typeof h.Fragment;

export const Color: ComponentClass<{
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

export const Bold: InkComponent;
export const Underline: InkComponent;

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
