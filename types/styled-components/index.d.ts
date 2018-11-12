// Type definitions for styled-components 4.0
// Project: https://github.com/styled-components/styled-components
// Definitions by: Igor Oleinikov <https://github.com/Igorbek>
//                 Ihor Chulinda <https://github.com/Igmat>
//                 Adam Lavin <https://github.com/lavoaster>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

/// <reference types="node" />

import * as React from 'react';

export interface ThemeProps<T> {
    theme: T;
}

export type ThemedStyledProps<P, T> = P & ThemeProps<T>;
export type StyledProps<P> = ThemedStyledProps<P, any>;

export type ThemedOuterStyledProps<P, T> = WithOptionalTheme<P, T> & {
    as?: React.ReactType | keyof JSX.IntrinsicElements;
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
    | Keyframes
    | StyledComponentInterpolation;
export type SimpleInterpolation =
    | InterpolationValue
    | ReadonlyArray<InterpolationValue | ReadonlyArray<InterpolationValue>>;
export interface Styles {
    [ruleOrSelector: string]: string | number | Styles;
}

export type InterpolationFunction<P> = (props: P) => Interpolation<P>;

type Attrs<P, A extends Partial<P>, T> = ((props: ThemedStyledProps<P, T>) => A) | A;

type DeprecatedAttrs<P, A extends Partial<P>, T> = {
    [K in keyof A]: ((props: ThemedStyledProps<P, T>) => A[K]) | A[K]
};

export type ThemedGlobalStyledClassProps<P, T> = P & {
    theme?: T;
};

export interface GlobalStyleClass<P, T>
    extends React.ComponentClass<ThemedGlobalStyledClassProps<P, T>> {}

/** @deprecated Use StyledComponent instead */
export type StyledComponentClass<P, T, O = {}> = StyledComponent<P, T, O>;

// Make the StyledComponentInterpolation non-callable because typescript can't tell
// between this and InterpolationFunction when inferring Interpolation
type StyledComponentInterpolation = Pick<StyledComponent<any, any>, keyof StyledComponent<any, any>>;

export interface StyledComponent<P, T, O = {}>
    extends React.ForwardRefExoticComponent<ThemedOuterStyledProps<React.PropsWithRef<P & O>, T>> {
    withComponent<K extends keyof JSX.IntrinsicElements>(
        tag: K,
    ): StyledComponent<
        JSX.IntrinsicElements[K],
        T,
        O
    >;
    withComponent<U extends { className?: string } = {}>(
        element: React.ComponentType<U>,
    ): StyledComponent<U, T, O>;
}

export interface ThemedStyledFunction<P, T, O = {}> {
    (
        strings: TemplateStringsArray,
        ...interpolations: Array<Interpolation<ThemedStyledProps<P, T>>>
    ): StyledComponent<P, T, O>;
    <U>(
        strings: TemplateStringsArray,
        ...interpolations: Array<Interpolation<ThemedStyledProps<P & U, T>>>
    ): StyledComponent<P, T, O & U>;
    attrs<U, A extends Partial<P & O & U> & { [others: string]: any; } = {}>(
        attrs: Attrs<P & O & U, A, T>,
    ): ThemedStyledFunction<DiffBetween<A, P & U>, T, DiffBetween<A, P & O & U>>;

    // these can't be unified because only one of the overloads is deprecated
    // tslint:disable:unified-signatures
    /** @deprecated Use the function form instead */
    attrs<U, A extends Partial<P & O & U> & { [others: string]: any; } = {}>(
        attrs: DeprecatedAttrs<P & O & U, A, T>,
    ): ThemedStyledFunction<DiffBetween<A, P & U>, T, DiffBetween<A, P & O & U>>;
    // tslint:enable:unified-signatures
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
    <P, O>(component: StyledComponent<P, T, O>): ThemedStyledFunction<
        P,
        T,
        O
    >;
    <P extends { [prop: string]: any; className?: string; theme?: T }>(
        component: React.ComponentType<P>,
    ): ThemedStyledFunction<P, T, WithOptionalTheme<{}, T>>;
}

export type ThemedStyledInterface<T> = ThemedBaseStyledInterface<Extract<keyof T, string> extends never ? any : T>;
export type StyledInterface = ThemedStyledInterface<DefaultTheme>;
// tslint:disable-next-line:no-empty-interface
export interface DefaultTheme {}

export interface ThemeProviderProps<T> {
    theme?: T | ((theme: T) => T);
}
export type BaseThemeProviderComponent<T> = React.ComponentClass<
    ThemeProviderProps<T>
    >;
export type ThemeProviderComponent<T> = BaseThemeProviderComponent<Extract<keyof T, string> extends never ? any : T>;
export interface BaseThemedCssFunction<T> {
    (
        strings: TemplateStringsArray,
        ...interpolations: SimpleInterpolation[]
    ): InterpolationValue[];
    <P>(
        strings: TemplateStringsArray,
        ...interpolations: Array<Interpolation<ThemedStyledProps<P, T>>>
    ): Array<FlattenInterpolation<ThemedStyledProps<P, T>>>;
}
export type ThemedCssFunction<T> = BaseThemedCssFunction<Extract<keyof T, string> extends never ? any : T>;

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
    ): Keyframes;

    createGlobalStyle<P = {}>(
        strings: TemplateStringsArray,
        ...interpolations: Array<Interpolation<ThemedStyledProps<P, T>>>
    ): GlobalStyleClass<P, T>;

    withTheme: WithThemeFnInterface<T>;

    ThemeProvider: ThemeProviderComponent<T>;
    ThemeConsumer: ThemeConsumerComponent<T>;
}

declare const styled: StyledInterface;

export const css: ThemedCssFunction<DefaultTheme>;

export type BaseWithThemeFnInterface<T> = <C extends React.ComponentType<any>>(
        component: React.ComponentProps<C> extends { theme?: any } ? C : never,
    ) => React.ForwardRefExoticComponent<WithOptionalTheme<React.ComponentPropsWithRef<C>, T>>;
export type WithThemeFnInterface<T> = BaseWithThemeFnInterface<Extract<keyof T, string> extends never ? any : T>;
export const withTheme: WithThemeFnInterface<DefaultTheme>;

export interface ThemeConsumerProps<T> {
    children(theme: T): React.ReactNode;
}
export type BaseThemeConsumerComponent<T> = React.ComponentClass<ThemeConsumerProps<T>>;
export type ThemeConsumerComponent<T> = BaseThemeConsumerComponent<Extract<keyof T, string> extends never ? any : T>;
export const ThemeConsumer: ThemeConsumerComponent<object>;

export interface Keyframes {
    getName(): string;
}

export function keyframes(
    strings: TemplateStringsArray,
    ...interpolations: SimpleInterpolation[]
): Keyframes;

export function createGlobalStyle<P = {}>(
    strings: TemplateStringsArray,
    ...interpolations: Array<Interpolation<ThemedStyledProps<P, DefaultTheme>>>
): GlobalStyleClass<P, DefaultTheme>;

export function isStyledComponent(
    target: any,
): target is StyledComponent<{}, {}>;

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
