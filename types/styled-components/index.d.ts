// Type definitions for styled-components 4.1
// Project: https://github.com/styled-components/styled-components
// Definitions by: Igor Oleinikov <https://github.com/Igorbek>
//                 Ihor Chulinda <https://github.com/Igmat>
//                 Adam Lavin <https://github.com/lavoaster>
//                 Jessica Franco <https://github.com/Kovensky>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.9

/// <reference types="node" />

import * as React from 'react';
import * as CSS from 'csstype';

export type CSSObject = CSS.Properties<string | number>;

export interface ThemeProps<T> {
    theme: T;
}

export type ThemedStyledProps<P, T> = P & ThemeProps<T>;
export type StyledProps<P> = ThemedStyledProps<P, any>;

export type StyledComponentProps<
    // The Component from whose props are derived
    C extends keyof JSX.IntrinsicElements | React.ComponentType<any>,
    // The Theme from the current context
    T extends object,
    // The other props added by the template
    O extends object,
    // The props that are made optional by .attrs
    A extends keyof any
> = WithOptionalTheme<
    Omit<React.ComponentPropsWithRef<C> & O, A> &
        Partial<Pick<React.ComponentPropsWithRef<C> & O, A>>,
    T
>;

type StyledComponentPropsWithAs<
    C extends keyof JSX.IntrinsicElements | React.ComponentType<any>,
    T extends object,
    O extends object,
    A extends keyof any
> = StyledComponentProps<C, T, O, A> & { as?: C };

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
    | StyledComponentInterpolation
    | CSSObject;
export type SimpleInterpolation =
    | InterpolationValue
    | ReadonlyArray<InterpolationValue | ReadonlyArray<InterpolationValue>>;
export interface Styles {
    [ruleOrSelector: string]: string | number | Styles;
}

export type InterpolationFunction<P> = (props: P) => Interpolation<P>;

type Attrs<P, A extends Partial<P>, T> =
    | ((props: ThemedStyledProps<P, T>) => A)
    | A;
type DeprecatedAttrs<P, A extends Partial<P>, T> = {
    [K in keyof A]: ((props: ThemedStyledProps<P, T>) => A[K]) | A[K]
};

export type ThemedGlobalStyledClassProps<P, T> = P & {
    suppressMultiMountWarning?: boolean
    theme?: T
};

export interface GlobalStyleComponent<P, T>
    extends React.ComponentClass<ThemedGlobalStyledClassProps<P, T>> {}

// remove the call signature from StyledComponent so Interpolation can still infer InterpolationFunction
type StyledComponentInterpolation = Pick<
    StyledComponent<any, any>,
    keyof StyledComponent<any, any>
>;

// abuse Pick to strip the call signature from ForwardRefExoticComponent
type ForwardRefExoticBase<P> = Pick<
    React.ForwardRefExoticComponent<P>,
    keyof React.ForwardRefExoticComponent<any>
>;

// any doesn't count as assignable to never in the extends clause, and we default A to never
export type AnyStyledComponent =
    | StyledComponent<any, any, any, any>
    | StyledComponent<any, any, any>;

export interface StyledComponent<
    C extends keyof JSX.IntrinsicElements | React.ComponentType<any>,
    T extends object,
    O extends object = {},
    A extends keyof any = never
> extends ForwardRefExoticBase<StyledComponentProps<C, T, O, A>> {
    // add our own fake call signature to implement the polymorphic 'as' prop
    // NOTE: TS <3.2 will refuse to infer the generic and this component becomes impossible to use in JSX
    // just the presence of the overload is enough to break JSX
    //
    // TODO (TypeScript 3.2): actually makes the 'as' prop polymorphic
    // (
    //     props: StyledComponentProps<C, T, O, A> & { as?: never }
    //   ): React.ReactElement<StyledComponentProps<C, T, O, A>>
    // <AsC extends keyof JSX.IntrinsicElements | React.ComponentType<any> = C>(
    //   props: StyledComponentPropsWithAs<AsC, T, O, A>
    // ): React.ReactElement<StyledComponentPropsWithAs<AsC, T, O, A>>

    // TODO (TypeScript 3.2): delete this overload
    (
        props: StyledComponentProps<C, T, O, A> & {
            /**
             * Typing Note: prefer using .withComponent for now as it is actually type-safe.
             *
             * String types need to be cast to themselves to become literal types (as={'a' as 'a'}).
             */
            as?: keyof JSX.IntrinsicElements | React.ComponentType<any>
        }
    ): React.ReactElement<StyledComponentProps<C, T, O, A>>;
    withComponent<WithC extends AnyStyledComponent>(
        component: WithC
    ): StyledComponent<
        StyledComponentInnerComponent<WithC>,
        T,
        O & StyledComponentInnerOtherProps<WithC>,
        A | StyledComponentInnerAttrs<WithC>
    >;
    withComponent<
        WithC extends keyof JSX.IntrinsicElements | React.ComponentType<any>
    >(
        component: WithC
    ): StyledComponent<WithC, T, O, A>;
}

export interface ThemedStyledFunction<
    C extends keyof JSX.IntrinsicElements | React.ComponentType<any>,
    T extends object,
    O extends object = {},
    A extends keyof any = never
> {
    (
        strings: TemplateStringsArray,
        ...interpolations: Array<
            Interpolation<
                ThemedStyledProps<StyledComponentPropsWithRef<C> & O, T>
            >
        >
    ): StyledComponent<C, T, O, A>;
    <U extends object>(
        strings: TemplateStringsArray,
        ...interpolations: Array<
            Interpolation<
                ThemedStyledProps<StyledComponentPropsWithRef<C> & O & U, T>
            >
        >
    ): StyledComponent<C, T, O & U, A>;
    // Fun thing: 'attrs' can also provide a polymorphic 'as' prop
    // My head already hurts enough so maybe later...
    attrs<
        U,
        A extends Partial<StyledComponentPropsWithRef<C> & U> & {
            [others: string]: any
        } = {}
    >(
        attrs: Attrs<StyledComponentPropsWithRef<C> & U, A, T>
    ): ThemedStyledFunction<C, T, O & A, keyof A>;
    // Only this overload is deprecated
    // tslint:disable:unified-signatures
    /** @deprecated Prefer using the new single function style, to be removed in v5 */
    attrs<
        U,
        A extends Partial<StyledComponentPropsWithRef<C> & U> & {
            [others: string]: any
        } = {}
    >(
        attrs: DeprecatedAttrs<StyledComponentPropsWithRef<C> & U, A, T>
    ): ThemedStyledFunction<C, T, O & A, keyof A>;
    // tslint:enable:unified-signatures
}

export type StyledFunction<
    C extends keyof JSX.IntrinsicElements | React.ComponentType<any>
> = ThemedStyledFunction<C, any>;

type ThemedStyledComponentFactories<T extends object> = {
    [TTag in keyof JSX.IntrinsicElements]: ThemedStyledFunction<TTag, T>
};

type StyledComponentInnerComponent<
    C extends React.ComponentType<any>
> = C extends
    | StyledComponent<infer I, any, any, any>
    | StyledComponent<infer I, any, any>
    ? I
    : C;
type StyledComponentPropsWithRef<
    C extends keyof JSX.IntrinsicElements | React.ComponentType<any>
> = C extends AnyStyledComponent
    ? React.ComponentPropsWithRef<StyledComponentInnerComponent<C>>
    : React.ComponentPropsWithRef<C>;
type StyledComponentInnerOtherProps<C extends AnyStyledComponent> = C extends
    | StyledComponent<any, any, infer O, any>
    | StyledComponent<any, any, infer O>
    ? O
    : never;
type StyledComponentInnerAttrs<
    C extends AnyStyledComponent
> = C extends StyledComponent<any, any, any, infer A> ? A : never;

export interface ThemedBaseStyledInterface<T extends object>
    extends ThemedStyledComponentFactories<T> {
    <TTag extends keyof JSX.IntrinsicElements>(tag: TTag): ThemedStyledFunction<
        TTag,
        T
    >;
    <C extends AnyStyledComponent>(component: C): ThemedStyledFunction<
        StyledComponentInnerComponent<C>,
        T,
        StyledComponentInnerOtherProps<C>,
        StyledComponentInnerAttrs<C>
    >;
    <C extends React.ComponentType<any>>(
        // unfortunately using a conditional type to validate that it can receive a `theme?: Theme`
        // causes tests to fail in TS 3.1
        component: C
    ): ThemedStyledFunction<C, T>;
}

export type ThemedStyledInterface<T extends object> = ThemedBaseStyledInterface<
    Extract<keyof T, string> extends never ? any : T
>;
export type StyledInterface = ThemedStyledInterface<DefaultTheme>;

export interface BaseThemedCssFunction<T extends object> {
    (cssObject: CSSObject): InterpolationValue[];
    (
        strings: TemplateStringsArray,
        ...interpolations: SimpleInterpolation[]
    ): InterpolationValue[];
    <P>(
        strings: TemplateStringsArray,
        ...interpolations: Array<Interpolation<ThemedStyledProps<P, T>>>
    ): Array<FlattenInterpolation<ThemedStyledProps<P, T>>>;
    <P>(func: InterpolationFunction<ThemedStyledProps<P, T>>): Array<
        FlattenInterpolation<ThemedStyledProps<P, T>>
    >;
}
export type ThemedCssFunction<T extends object> = BaseThemedCssFunction<
    Extract<keyof T, string> extends never ? any : T
>;

// Helper type operators
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
type DiffBetween<T, U> = Pick<T, Exclude<keyof T, keyof U>> &
    Pick<U, Exclude<keyof U, keyof T>>;
type WithOptionalTheme<P extends { theme?: T }, T> = Omit<P, 'theme'> & {
    theme?: T
};

export interface ThemedStyledComponentsModule<T extends object> {
    default: ThemedStyledInterface<T>;

    css: ThemedCssFunction<T>;

    keyframes(cssObject: CSSObject): Keyframes;
    keyframes(
        strings: TemplateStringsArray,
        ...interpolations: SimpleInterpolation[]
    ): Keyframes;

    createGlobalStyle(cssObject: CSSObject): GlobalStyleComponent<{}, T>;
    createGlobalStyle<P = {}>(
        strings: TemplateStringsArray,
        ...interpolations: Array<Interpolation<ThemedStyledProps<P, T>>>
    ): GlobalStyleComponent<P, T>;
    createGlobalStyle<P = {}>(
        func: InterpolationFunction<ThemedStyledProps<P, T>>
    ): GlobalStyleComponent<P, T>;

    withTheme: WithThemeFnInterface<T>;
    ThemeProvider: ThemeProviderComponent<T>;
    ThemeConsumer: React.Consumer<T>;
    ThemeContext: React.Context<T>;
}

declare const styled: StyledInterface;

export const css: ThemedCssFunction<DefaultTheme>;

export type BaseWithThemeFnInterface<T extends object> = <
    C extends React.ComponentType<any>
>(
    // this check is roundabout because the extends clause above would
    // not allow any component that accepts _more_ than theme as a prop
    component: React.ComponentProps<C> extends { theme?: T } ? C : never
) => React.ForwardRefExoticComponent<
    WithOptionalTheme<React.ComponentPropsWithRef<C>, T>
>;
export type WithThemeFnInterface<T extends object> = BaseWithThemeFnInterface<
    Extract<keyof T, string> extends never ? any : T
>;
export const withTheme: WithThemeFnInterface<DefaultTheme>;

// tslint:disable-next-line:no-empty-interface
export interface DefaultTheme {}

export interface ThemeProviderProps<T extends object> {
    children?: React.ReactChild; // only one child is allowed, goes through React.Children.only
    theme: T | ((theme: T) => T);
}
export type BaseThemeProviderComponent<T extends object> = React.ComponentClass<
    ThemeProviderProps<T>
>;
export type ThemeProviderComponent<
    T extends object
> = BaseThemeProviderComponent<Extract<keyof T, string> extends never ? any : T>;
export const ThemeProvider: ThemeProviderComponent<DefaultTheme>;
// NOTE: this technically starts as undefined
// Also, this cannot be DefaultTheme as it breaks TypedComponents' assignability
export const ThemeContext: React.Context<any>;
export const ThemeConsumer: typeof ThemeContext['Consumer'];

export interface Keyframes {
    getName(): string;
}

export function keyframes(cssObject: CSSObject): Keyframes;
export function keyframes(
    strings: TemplateStringsArray,
    ...interpolations: SimpleInterpolation[]
): Keyframes;

export function createGlobalStyle(
    cssObject: CSSObject
): GlobalStyleComponent<{}, DefaultTheme>;
export function createGlobalStyle<P = {}>(
    strings: TemplateStringsArray,
    ...interpolations: Array<Interpolation<ThemedStyledProps<P, DefaultTheme>>>
): GlobalStyleComponent<P, DefaultTheme>;
export function createGlobalStyle<P = {}>(
    func: InterpolationFunction<ThemedStyledProps<P, DefaultTheme>>
): GlobalStyleComponent<P, DefaultTheme>;

export function isStyledComponent(
    target: any
): target is StyledComponent<any, any>;

export class ServerStyleSheet {
    collectStyles(
        tree: React.ReactNode
    ): React.ReactElement<{ sheet: ServerStyleSheet }>;

    getStyleTags(): string;
    getStyleElement(): Array<React.ReactElement<{}>>;
    interleaveWithNodeStream(
        readableStream: NodeJS.ReadableStream
    ): NodeJS.ReadableStream;
    readonly instance: this;
}

type StyleSheetManagerProps =
    | {
          sheet: ServerStyleSheet
          target?: never
      }
    | {
          sheet?: never
          target: HTMLElement
      };

export class StyleSheetManager extends React.Component<
    StyleSheetManagerProps
> {}

export default styled;
