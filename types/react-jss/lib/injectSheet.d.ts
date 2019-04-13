import * as CSS from "csstype";
import { CreateStyleSheetOptions, JSS } from "jss";
import * as React from "react";
import {
  channel,
  createTheming,
  themeListener,
  ThemeProvider,
  withTheme
} from "theming";

/**
 * omit from T every key K
 *
 * @internal
 */
export type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
/**
 * `T extends ConsistentWith<T, U>` means that where `T` has overlapping properties with
 * `U`, their value types do not conflict.
 *
 * @internal
 */
export type ConsistentWith<DecorationTargetProps, InjectedProps> = {
  [P in keyof DecorationTargetProps]: P extends keyof InjectedProps
    ? InjectedProps[P] extends DecorationTargetProps[P]
      ? DecorationTargetProps[P]
      : InjectedProps[P]
    : DecorationTargetProps[P]
};

/**
 * Like `T & U`, but using the value types from `U` where their properties overlap.
 *
 * @internal
 */
export type Overwrite<T, U> = Omit<T, keyof U> & U;

/**
 * @internal
 */
export type PropsOf<C> = C extends new (props: infer P) => React.Component
  ? P
  : C extends (props: infer P) => React.ReactElement | null ? P : never;

/**
 * a function that takes {component} and returns a component that passes along
 * all the props to {component} except the {InjectedProps} and will accept
 * additional {AdditionalProps}
 *
 * source mui-org/material-ui#12673
 * @internal
 */
export type PropInjector<InjectedProps, AdditionalProps = {}> = <
  C extends React.ComponentType<ConsistentWith<PropsOf<C>, InjectedProps>>
  >(
  component: C
) => React.ComponentType<
  Omit<JSX.LibraryManagedAttributes<C, PropsOf<C>>, keyof InjectedProps> &
  AdditionalProps
  >;

// Allow functions that take the properties of the component and return a CSS value
export type DynamicCSSRule<Props> = {
  [K in keyof CSS.Properties<number | string>]:
  | CSS.Properties<number | string>[K]
  | ((props: Props) => CSS.Properties<number | string>[K])
}[keyof CSS.Properties];

export interface CSSProperties<Props> {
  // Allow pseudo selectors and media queries
  [k: string]:
    | DynamicCSSRule<Props>
    | CSSProperties<Props>;
}
export type Styles<ClassKey extends string | number | symbol = string, Props = {}> = Record<
  ClassKey,
  CSSProperties<Props>
  >;
export type StyleCreator<C extends string | number | symbol = string, T extends {} = {}, Props = {}> = (
  theme: T
) => Styles<C, Props>;

export interface Theming {
  channel: string;
  createTheming: typeof createTheming;
  themeListener: typeof themeListener;
  ThemeProvider: typeof ThemeProvider;
  withTheme: typeof withTheme;
}
export interface InjectOptions extends CreateStyleSheetOptions {
  jss?: JSS;
  theming?: Theming;
}

export type ClassNameMap<C extends string | number | symbol> = Record<C, string>;
export type WithSheet<
    S extends string | Styles | StyleCreator<keyof S, any>,
  GivenTheme = undefined,
Props = {},
  > = {
  classes: ClassNameMap<
    S extends string | number | symbol
      ? S
      : S extends StyleCreator<infer C, any, Props>
      ? C
      : S extends Styles<infer C, Props> ? C : never
    >;
} & WithTheme<S extends StyleCreator<keyof S, infer T> ? T : GivenTheme>;

export interface WithTheme<T> {
  theme: T;
  innerRef?: React.Ref<any> | React.RefObject<any>;
}

export interface StyledComponentProps<ClassKey extends string = string> {
  classes?: Partial<ClassNameMap<ClassKey>>;
  innerRef?: React.Ref<any> | React.RefObject<any>;
}

export default function injectSheet<C extends string, T extends object, Props = {}>(
  stylesOrCreator: Styles<C, Props> | StyleCreator<C, T, Props>,
  options?: InjectOptions
): PropInjector<WithSheet<C, T, Props>, StyledComponentProps<C>>;
