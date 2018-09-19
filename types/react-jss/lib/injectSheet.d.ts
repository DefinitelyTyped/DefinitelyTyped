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
  : C extends (props: infer P) => React.ReactElement<any> | null ? P : never;

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

export interface CSSProperties extends CSS.Properties<number | string> {
  // Allow pseudo selectors and media queries
  [k: string]:
    | CSS.Properties<number | string>[keyof CSS.Properties]
    | CSSProperties;
}
export type Styles<ClassKey extends string = string> = Record<
  ClassKey,
  CSSProperties
>;
export type StyleCreator<C extends string = string, T extends {} = {}> = (
  theme: T
) => Styles<C>;

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

export type ClassNameMap<C extends string> = Record<C, string>;
export type WithSheet<
  S extends string | Styles | StyleCreator<string, any>,
  GivenTheme = undefined
> = {
  classes: ClassNameMap<
    S extends string
      ? S
      : S extends StyleCreator<infer C, any>
        ? C
        : S extends Styles<infer C> ? C : never
  >;
} & WithTheme<S extends StyleCreator<string, infer T> ? T : GivenTheme>;

export interface WithTheme<T> {
  theme: T;
  innerRef?: React.Ref<any> | React.RefObject<any>;
}

export interface StyledComponentProps<ClassKey extends string = string> {
  classes?: Partial<ClassNameMap<ClassKey>>;
  innerRef?: React.Ref<any> | React.RefObject<any>;
}

export default function injectSheet<C extends string, T extends object>(
  stylesOrCreator: Styles<C> | StyleCreator<C, T>,
  options?: InjectOptions
): PropInjector<WithSheet<C, T>, StyledComponentProps<C>>;
