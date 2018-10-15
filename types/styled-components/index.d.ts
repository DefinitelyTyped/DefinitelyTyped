// Type definitions for styled-components 3.0
// Project: https://github.com/styled-components/styled-components
// Definitions by: Igor Oleinikov <https://github.com/Igorbek>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

/// <reference types="node" />

import * as React from 'react';

export interface ThemeProps<T> {
    theme: T;
}

export type ThemedStyledProps<P, T> = P & ThemeProps<T>;
export type StyledProps<P> = ThemedStyledProps<P, any>;

export type ThemedOuterStyledProps<P, T> = P & {
    theme?: T;
    innerRef?:
        | ((instance: any) => void)
        | React.RefObject<HTMLElement | SVGElement | React.Component>;
};
export type OuterStyledProps<P> = ThemedOuterStyledProps<P, any>;

export type FalseyValue = undefined | null | false;
export type Interpolation<P> =
    | FlattenInterpolation<P>
    | ReadonlyArray<
          FlattenInterpolation<P> | ReadonlyArray<FlattenInterpolation<P>>
      >;
export type FlattenInterpolation<P> =
    | InterpolationValue
    | InterpolationFunction<P>;
export type InterpolationValue =
    | string
    | number
    | Styles
    | FalseyValue
    | StyledComponentClass<any, any>;
export type SimpleInterpolation =
    | InterpolationValue
    | ReadonlyArray<InterpolationValue | ReadonlyArray<InterpolationValue>>;
export interface Styles {
    [ruleOrSelector: string]: string | number | Styles;
}

export type InterpolationFunction<P> = (props: P) => Interpolation<P>;

type Attrs<P, A extends Partial<P>, T> = {
    [K in keyof A]: ((props: ThemedStyledProps<P, T>) => A[K]) | A[K]
};

export interface StyledComponentClass<P, T, O = P>
    extends React.ComponentClass<ThemedOuterStyledProps<O, T>> {
    extend: ThemedStyledFunction<P, T, O>;

    withComponent<K extends keyof JSX.IntrinsicElements>(
        tag: K,
    ): StyledComponentClass<
        JSX.IntrinsicElements[K],
        T,
        JSX.IntrinsicElements[K] & O
    >;
    withComponent<U = {}>(
        element: React.ComponentType<U>,
    ): StyledComponentClass<U, T, U & O>;
}

export interface ThemedStyledFunction<P, T, O = P> {
    (
        strings: TemplateStringsArray,
        ...interpolations: Array<Interpolation<ThemedStyledProps<P, T>>>
    ): StyledComponentClass<P, T, O>;
    <U>(
        strings: TemplateStringsArray,
        ...interpolations: Array<Interpolation<ThemedStyledProps<P & U, T>>>
    ): StyledComponentClass<P & U, T, O & U>;
    attrs<U, A extends Partial<P & U> = {}>(
        attrs: Attrs<P & U, A, T>,
    ): ThemedStyledFunction<DiffBetween<A, P & U>, T, DiffBetween<A, O & U>>;
}

export type StyledFunction<P> = ThemedStyledFunction<P, any>;

type ThemedStyledComponentFactories<T> = {
    [TTag in keyof JSX.IntrinsicElements]: ThemedStyledFunction<
        JSX.IntrinsicElements[TTag],
        T
    >
};

export interface ThemedBaseStyledInterface<T>
    extends ThemedStyledComponentFactories<T> {
    <P, TTag extends keyof JSX.IntrinsicElements>(
        tag: TTag,
    ): ThemedStyledFunction<P, T, P & JSX.IntrinsicElements[TTag]>;
    <P, O>(component: StyledComponentClass<P, T, O>): ThemedStyledFunction<
        P,
        T,
        O
    >;
    <P extends { [prop: string]: any; theme?: T }>(
        component: React.ComponentType<P>,
    ): ThemedStyledFunction<P, T, WithOptionalTheme<P, T>>;
}
export type BaseStyledInterface = ThemedBaseStyledInterface<any>;

export type ThemedStyledInterface<T> = ThemedBaseStyledInterface<T>;
export type StyledInterface = ThemedStyledInterface<any>;

export interface ThemeProviderProps<T> {
    theme?: T | ((theme: T) => T);
}
export type ThemeProviderComponent<T> = React.ComponentClass<
    ThemeProviderProps<T>
>;

export interface ThemedCssFunction<T> {
    (
        strings: TemplateStringsArray,
        ...interpolations: SimpleInterpolation[]
    ): InterpolationValue[];
    <P>(
        strings: TemplateStringsArray,
        ...interpolations: Array<Interpolation<ThemedStyledProps<P, T>>>
    ): Array<FlattenInterpolation<ThemedStyledProps<P, T>>>;
}

// Helper type operators
type KeyofBase = keyof any;
type Diff<T extends KeyofBase, U extends KeyofBase> = ({ [P in T]: P } &
    { [P in U]: never })[T];
type Omit<T, K extends keyof T> = Pick<T, Diff<keyof T, K>>;
type DiffBetween<T, U> = Pick<T, Diff<keyof T, keyof U>> &
    Pick<U, Diff<keyof U, keyof T>>;
type WithOptionalTheme<P extends { theme?: T }, T> = Omit<P, 'theme'> & {
    theme?: T;
};

export interface ThemedStyledComponentsModule<T> {
    default: ThemedStyledInterface<T>;

    css: ThemedCssFunction<T>;
    keyframes(
        strings: TemplateStringsArray,
        ...interpolations: SimpleInterpolation[]
    ): string;
    injectGlobal(
        strings: TemplateStringsArray,
        ...interpolations: SimpleInterpolation[]
    ): void;
    withTheme<P extends { theme?: T }>(
        component: React.ComponentType<P>,
    ): React.ComponentClass<WithOptionalTheme<P, T>>;

    ThemeProvider: ThemeProviderComponent<T>;
}

declare const styled: StyledInterface;

export const css: ThemedCssFunction<any>;

export function withTheme<P extends { theme?: T }, T>(
    component: React.ComponentType<P>,
): React.ComponentClass<WithOptionalTheme<P, T>>;

export function keyframes(
    strings: TemplateStringsArray,
    ...interpolations: SimpleInterpolation[]
): string;

export function injectGlobal(
    strings: TemplateStringsArray,
    ...interpolations: SimpleInterpolation[]
): void;

export function consolidateStreamedStyles(): void;

export function isStyledComponent(
    target: any,
): target is StyledComponentClass<{}, {}>;

export const ThemeProvider: ThemeProviderComponent<object>;

interface StylesheetComponentProps {
    sheet: ServerStyleSheet;
}

interface StyleSheetManagerProps {
    sheet?: StyleSheet;
    target?: Node;
}

export class StyleSheetManager extends React.Component<
    StyleSheetManagerProps
> {}

export class ServerStyleSheet {
    collectStyles(
        tree: React.ReactNode,
    ): React.ReactElement<StylesheetComponentProps>;

    getStyleTags(): string;
    getStyleElement(): Array<React.ReactElement<{}>>;
    interleaveWithNodeStream(
        readableStream: NodeJS.ReadableStream,
    ): NodeJS.ReadableStream;
    instance: StyleSheet;
}

export default styled;
