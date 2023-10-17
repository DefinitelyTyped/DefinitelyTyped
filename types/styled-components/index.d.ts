// forward declarations
declare global {
    namespace NodeJS {
        // tslint:disable-next-line:no-empty-interface
        interface ReadableStream {}
    }
    // tslint:disable-next-line:no-empty-interface
    interface ShadowRoot {}
}

import * as CSS from "csstype";
import * as hoistNonReactStatics from "hoist-non-react-statics";
import * as React from "react";

export type CSSProperties = CSS.Properties<string | number>;

export type CSSPseudos = { [K in CSS.Pseudos]?: CSSObject };

export interface CSSObject extends CSSProperties, CSSPseudos {
    [key: string]: CSSObject | string | number | undefined;
}

export type CSSKeyframes = object & { [key: string]: CSSObject };

export interface ThemeProps<T> {
    theme: T;
}

export type ThemedStyledProps<P, T> = P & ThemeProps<T>;
export type StyledProps<P> = ThemedStyledProps<P, AnyIfEmpty<DefaultTheme>>;
export type IntrinsicElementsKeys = keyof JSX.IntrinsicElements;

// Any prop that has a default prop becomes optional, but its type is unchanged
// Undeclared default props are augmented into the resulting allowable attributes
// If declared props have indexed properties, ignore default props entirely as keyof gets widened
// Wrap in an outer-level conditional type to allow distribution over props that are unions
type Defaultize<P, D> = P extends any ? string extends keyof P ? P
    :
        & PickU<P, Exclude<keyof P, keyof D>>
        & Partial<PickU<P, Extract<keyof P, keyof D>>>
        & Partial<PickU<D, Exclude<keyof D, keyof P>>>
    : never;

type ReactDefaultizedProps<C, P> = C extends { defaultProps: infer D } ? Defaultize<P, D> : P;

type MakeAttrsOptional<
    C extends string | React.ComponentType<any>,
    O extends object,
    A extends keyof P,
    P = React.ComponentPropsWithRef<C extends IntrinsicElementsKeys | React.ComponentType<any> ? C : never>,
> =
    // Distribute unions early to avoid quadratic expansion
    P extends any ? OmitU<ReactDefaultizedProps<C, P> & O, A> & Partial<PickU<P & O, A>> : never;

export type StyledComponentProps<
    // The Component from whose props are derived
    C extends string | React.ComponentType<any>,
    // The Theme from the current context
    T extends object,
    // The other props added by the template
    O extends object,
    // The props that are made optional by .attrs
    A extends keyof any,
    // The Component passed with "forwardedAs" prop
    FAsC extends string | React.ComponentType<any> = C,
> =
    // Distribute O if O is a union type
    O extends object ? WithOptionalTheme<
            MakeAttrsOptional<C, O, A> & MakeAttrsOptional<FAsC, O, A>,
            T
        >
        : never;

type StyledComponentPropsWithAs<
    C extends string | React.ComponentType<any>,
    T extends object,
    O extends object,
    A extends keyof any,
    AsC extends string | React.ComponentType<any> = C,
    FAsC extends string | React.ComponentType<any> = C,
> = StyledComponentProps<C, T, O, A, FAsC> & { as?: AsC | undefined; forwardedAs?: FAsC | undefined };

export type FalseyValue = undefined | null | false;
export type Interpolation<P> = InterpolationValue | InterpolationFunction<P> | FlattenInterpolation<P>;
// cannot be made a self-referential interface, breaks WithPropNested
// see https://github.com/microsoft/TypeScript/issues/34796
export type FlattenInterpolation<P> = ReadonlyArray<Interpolation<P>>;
export type InterpolationValue = string | number | FalseyValue | Keyframes | StyledComponentInterpolation | CSSObject;
export type SimpleInterpolation = InterpolationValue | FlattenSimpleInterpolation;
export type FlattenSimpleInterpolation = ReadonlyArray<SimpleInterpolation>;

export type InterpolationFunction<P> = (props: P) => Interpolation<P>;

type Attrs<P, A extends Partial<P>, T> = ((props: ThemedStyledProps<P, T>) => A) | A;

export type ThemedGlobalStyledClassProps<P extends { theme?: T | undefined }, T> = WithOptionalTheme<P, T> & {
    suppressMultiMountWarning?: boolean | undefined;
};

export interface GlobalStyleComponent<P extends { theme?: T | undefined }, T>
    extends React.ComponentClass<ThemedGlobalStyledClassProps<P, T>>
{}

// remove the call signature from StyledComponent so Interpolation can still infer InterpolationFunction
type StyledComponentInterpolation =
    | PickU<StyledComponentBase<any, any, any, any>, keyof StyledComponentBase<any, any>>
    | PickU<StyledComponentBase<any, any, any>, keyof StyledComponentBase<any, any>>;

// abuse Pick to strip the call signature from ForwardRefExoticComponent
type ForwardRefExoticBase<P> = PickU<React.ForwardRefExoticComponent<P>, keyof React.ForwardRefExoticComponent<any>>;

// Config to be used with withConfig
export interface StyledConfig<O extends object = {}> {
    // TODO: Add all types from the original StyledComponentWrapperProperties
    componentId?: string;
    displayName?: string;
    shouldForwardProp?: ((prop: keyof O, defaultValidatorFn: (prop: keyof O) => boolean) => boolean) | undefined;
}

// extracts React defaultProps
type ReactDefaultProps<C> = C extends { defaultProps: infer D } ? D : never;

// any doesn't count as assignable to never in the extends clause, and we default A to never
export type AnyStyledComponent = StyledComponent<any, any, any, any> | StyledComponent<any, any, any>;

export type StyledComponent<
    C extends keyof JSX.IntrinsicElements | React.ComponentType<any>,
    T extends object,
    O extends object = {},
    A extends keyof any = never,
> = // the "string" allows this to be used as an object key
    // I really want to avoid this if possible but it's the only way to use nesting with object styles...
    & string
    & StyledComponentBase<C, T, O, A>
    & hoistNonReactStatics.NonReactStatics<C extends React.ComponentType<any> ? C : never>;

export interface StyledComponentBase<
    C extends string | React.ComponentType<any>,
    T extends object,
    O extends object = {},
    A extends keyof any = never,
> extends ForwardRefExoticBase<StyledComponentProps<C, T, O, A>> {
    // add our own fake call signature to implement the polymorphic 'as' prop
    (
        props: StyledComponentProps<C, T, O, A> & { as?: never | undefined; forwardedAs?: never | undefined },
    ): React.ReactElement<
        StyledComponentProps<C, T, O, A>
    >;
    <AsC extends string | React.ComponentType<any> = C, FAsC extends string | React.ComponentType<any> = AsC>(
        props: StyledComponentPropsWithAs<AsC, T, O, A, AsC, FAsC>,
    ): React.ReactElement<StyledComponentPropsWithAs<AsC, T, O, A, AsC, FAsC>>;

    withComponent<WithC extends AnyStyledComponent>(
        component: WithC,
    ): StyledComponent<
        StyledComponentInnerComponent<WithC>,
        T,
        O & StyledComponentInnerOtherProps<WithC>,
        A | StyledComponentInnerAttrs<WithC>
    >;
    withComponent<WithC extends keyof JSX.IntrinsicElements | React.ComponentType<any>>(
        component: WithC,
    ): StyledComponent<WithC, T, O, A>;
}

export interface ThemedStyledFunctionBase<
    C extends keyof JSX.IntrinsicElements | React.ComponentType<any>,
    T extends object,
    O extends object = {},
    A extends keyof any = never,
> {
    (first: TemplateStringsArray): StyledComponent<C, T, O, A>;
    (
        first:
            | TemplateStringsArray
            | CSSObject
            | InterpolationFunction<ThemedStyledProps<StyledComponentPropsWithRef<C> & O, T>>,
        ...rest: Array<Interpolation<ThemedStyledProps<StyledComponentPropsWithRef<C> & O, T>>>
    ): StyledComponent<C, T, O, A>;
    <U extends object>(
        first:
            | TemplateStringsArray
            | CSSObject
            | InterpolationFunction<ThemedStyledProps<StyledComponentPropsWithRef<C> & O & U, T>>,
        ...rest: Array<Interpolation<ThemedStyledProps<StyledComponentPropsWithRef<C> & O & U, T>>>
    ): StyledComponent<C, T, O & U, A>;
}

export interface ThemedStyledFunction<
    C extends keyof JSX.IntrinsicElements | React.ComponentType<any>,
    T extends object,
    O extends object = {},
    A extends keyof any = never,
> extends ThemedStyledFunctionBase<C, T, O, A> {
    // Fun thing: 'attrs' can also provide a polymorphic 'as' prop
    // My head already hurts enough so maybe later...
    attrs<
        U,
        NewA extends Partial<StyledComponentPropsWithRef<C> & U> & {
            [others: string]: any;
        } = {},
    >(
        attrs: Attrs<StyledComponentPropsWithRef<C> & U, NewA, T>,
    ): ThemedStyledFunction<C, T, O & NewA, A | keyof NewA>;

    withConfig: <Props extends O = O>(
        config: StyledConfig<StyledComponentPropsWithRef<C> & Props>,
    ) => ThemedStyledFunction<C, T, Props, A>;
}

export type StyledFunction<C extends keyof JSX.IntrinsicElements | React.ComponentType<any>> = ThemedStyledFunction<
    C,
    any
>;

type ThemedStyledComponentFactories<T extends object> = {
    [TTag in keyof JSX.IntrinsicElements]: ThemedStyledFunction<TTag, T>;
};

export type StyledComponentInnerComponent<C extends React.ComponentType<any>> = C extends StyledComponent<
    infer I,
    any,
    any,
    any
> ? I
    : C extends StyledComponent<infer I, any, any> ? I
    : C;
export type StyledComponentPropsWithRef<
    C extends keyof JSX.IntrinsicElements | React.ComponentType<any>,
> = C extends AnyStyledComponent ? React.ComponentPropsWithRef<StyledComponentInnerComponent<C>>
    : React.ComponentPropsWithRef<C>;
export type StyledComponentInnerOtherProps<C extends AnyStyledComponent> = C extends StyledComponent<
    any,
    any,
    infer O,
    any
> ? O
    : C extends StyledComponent<any, any, infer O> ? O
    : never;
export type StyledComponentInnerAttrs<C extends AnyStyledComponent> = C extends StyledComponent<any, any, any, infer A>
    ? A
    : never;

export interface ThemedBaseStyledInterface<T extends object> extends ThemedStyledComponentFactories<T> {
    <C extends AnyStyledComponent>(component: C): ThemedStyledFunction<
        StyledComponentInnerComponent<C>,
        T,
        StyledComponentInnerOtherProps<C>,
        StyledComponentInnerAttrs<C>
    >;
    <C extends keyof JSX.IntrinsicElements | React.ComponentType<any>>(
        // unfortunately using a conditional type to validate that it can receive a `theme?: Theme`
        // causes tests to fail in TS 3.1
        component: C,
    ): ThemedStyledFunction<C, T>;
}

export type ThemedStyledInterface<T extends object> = ThemedBaseStyledInterface<AnyIfEmpty<T>>;
export type StyledInterface = ThemedStyledInterface<DefaultTheme>;

export interface BaseThemedCssFunction<T extends object> {
    (first: TemplateStringsArray | CSSObject, ...interpolations: SimpleInterpolation[]): FlattenSimpleInterpolation;
    (
        first: TemplateStringsArray | CSSObject | InterpolationFunction<ThemedStyledProps<{}, T>>,
        ...interpolations: Array<Interpolation<ThemedStyledProps<{}, T>>>
    ): FlattenInterpolation<ThemedStyledProps<{}, T>>;
    <P extends object>(
        first: TemplateStringsArray | CSSObject | InterpolationFunction<ThemedStyledProps<P, T>>,
        ...interpolations: Array<Interpolation<ThemedStyledProps<P, T>>>
    ): FlattenInterpolation<ThemedStyledProps<P, T>>;
}

export type ThemedCssFunction<T extends object> = BaseThemedCssFunction<AnyIfEmpty<T>>;

// Helper type operators
// Pick that distributes over union types
export type PickU<T, K extends keyof T> = T extends any ? { [P in K]: T[P] } : never;
export type OmitU<T, K extends keyof T> = T extends any ? PickU<T, Exclude<keyof T, K>> : never;
type WithOptionalTheme<P extends { theme?: T | undefined }, T> = OmitU<P, "theme"> & {
    theme?: T | undefined;
};
type AnyIfEmpty<T extends object> = keyof T extends never ? any : T;

export interface ThemedStyledComponentsModule<T extends object, U extends object = T> {
    default: ThemedStyledInterface<T>;

    css: ThemedCssFunction<T>;

    // unfortunately keyframes can't interpolate props from the theme
    keyframes: (strings: TemplateStringsArray | CSSKeyframes, ...interpolations: SimpleInterpolation[]) => Keyframes;

    createGlobalStyle: <P extends object = {}>(
        first: TemplateStringsArray | CSSObject | InterpolationFunction<ThemedStyledProps<P, T>>,
        ...interpolations: Array<Interpolation<ThemedStyledProps<P, T>>>
    ) => GlobalStyleComponent<P, T>;

    withTheme: BaseWithThemeFnInterface<T>;
    ThemeProvider: BaseThemeProviderComponent<T, U>;
    ThemeConsumer: React.Consumer<T>;
    ThemeContext: React.Context<T>;
    useTheme(): T;

    // This could be made to assert `target is StyledComponent<any, T>` instead, but that feels not type safe
    isStyledComponent: typeof isStyledComponent;

    ServerStyleSheet: typeof ServerStyleSheet;
    StyleSheetManager: typeof StyleSheetManager;
}

declare const styled: StyledInterface;

export const css: ThemedCssFunction<DefaultTheme>;

export type BaseWithThemeFnInterface<T extends object> = <C extends React.ComponentType<any>>(
    // this check is roundabout because the extends clause above would
    // not allow any component that accepts _more_ than theme as a prop
    component: React.ComponentProps<C> extends { theme?: T | undefined } ? C : never,
) => React.ForwardRefExoticComponent<
    WithOptionalTheme<JSX.LibraryManagedAttributes<C, React.ComponentPropsWithRef<C>>, T>
>;
export type WithThemeFnInterface<T extends object> = BaseWithThemeFnInterface<AnyIfEmpty<T>>;
export const withTheme: WithThemeFnInterface<DefaultTheme>;

export function useTheme(): DefaultTheme;

/**
 * This interface can be augmented by users to add types to `styled-components`' default theme
 * without needing to reexport `ThemedStyledComponentsModule`.
 */
// Unfortunately, there is no way to write tests for this
// as any augmentation will break the tests for the default case (not augmented).
// tslint:disable-next-line:no-empty-interface
export interface DefaultTheme {}

export interface ThemeProviderProps<T extends object, U extends object = T> {
    children?: React.ReactNode | undefined;
    theme: T | ((theme: U) => T);
}
export type BaseThemeProviderComponent<T extends object, U extends object = T> = React.ComponentClass<
    ThemeProviderProps<T, U>
>;
export type ThemeProviderComponent<T extends object, U extends object = T> = BaseThemeProviderComponent<
    AnyIfEmpty<T>,
    AnyIfEmpty<U>
>;
export const ThemeProvider: ThemeProviderComponent<AnyIfEmpty<DefaultTheme>>;
// NOTE: this technically starts as undefined, but allowing undefined is unhelpful when used correctly
export const ThemeContext: React.Context<AnyIfEmpty<DefaultTheme>>;
export const ThemeConsumer: typeof ThemeContext["Consumer"];

export interface Keyframes {
    getName(): string;
}

export function keyframes(
    strings: TemplateStringsArray | CSSKeyframes,
    ...interpolations: SimpleInterpolation[]
): Keyframes;

export function createGlobalStyle<P extends object = {}>(
    first: TemplateStringsArray | CSSObject | InterpolationFunction<ThemedStyledProps<P, DefaultTheme>>,
    ...interpolations: Array<Interpolation<ThemedStyledProps<P, DefaultTheme>>>
): GlobalStyleComponent<P, DefaultTheme>;

export function isStyledComponent(target: any): target is StyledComponent<any, any>;

export class ServerStyleSheet {
    collectStyles(tree: React.ReactNode): React.ReactElement<{ sheet: ServerStyleSheet }>;

    getStyleTags(): string;
    getStyleElement(): Array<React.ReactElement<{}>>;
    interleaveWithNodeStream(readableStream: NodeJS.ReadableStream): NodeJS.ReadableStream;
    readonly instance: this;
    seal(): void;
    clearTag(): void;
}

export type StylisPlugin = (
    context: number,
    selector: string[],
    parent: string[],
    content: string,
    line: number,
    column: number,
    length: number,
) => string | void;

export interface StyleSheetManagerProps {
    children?: React.ReactNode;
    disableCSSOMInjection?: boolean | undefined;
    disableVendorPrefixes?: boolean | undefined;
    stylisPlugins?: StylisPlugin[] | undefined;
    sheet?: ServerStyleSheet | undefined;
    target?: HTMLElement | ShadowRoot | undefined;
}

export class StyleSheetManager extends React.Component<StyleSheetManagerProps> {}

/**
 * The CSS prop is not declared by default in the types as it would cause 'css' to be present
 * on the types of anything that uses styled-components indirectly, even if they do not use the
 * babel plugin.
 *
 * You can load a default declaration by using writing this special import from
 * a typescript file. This module does not exist in reality, which is why the {} is important:
 *
 * ```ts
 * import {} from 'styled-components/cssprop'
 * ```
 *
 * Or you can declare your own module augmentation, which allows you to specify the type of Theme:
 *
 * ```ts
 * import { CSSProp } from 'styled-components'
 *
 * interface MyTheme {}
 *
 * declare module 'react' {
 *   interface Attributes {
 *     css?: CSSProp<MyTheme>
 *   }
 * }
 * ```
 */
// ONLY string literals and inline invocations of css`` are supported, anything else crashes the plugin
export type CSSProp<T = AnyIfEmpty<DefaultTheme>> = string | CSSObject | FlattenInterpolation<ThemeProps<T>>;

export default styled;
