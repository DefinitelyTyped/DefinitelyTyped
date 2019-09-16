// Type definitions for react-with-styles 4.0
// Project: https://github.com/airbnb/react-with-styles#readme
// Definitions by: Mohsen Azimi <https://github.com/mohsen1>
//                 Brie Bunge <https://github.com/brieb>
//                 Joe Lencioni <https://github.com/lencioni>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';
import * as PropTypes from 'prop-types';
import { CSSProperties } from 'aphrodite';

interface Theme { [key: string]: any; }

interface WithStylesProps<T = Theme> {
    /**
     * This function takes styles that were processed by `withStyles()`, plain objects, or arrays
     * of these things. It returns an object with an opaque structure that must be spread into a
     * JSX element.
     */
    css(...styles: any[]): object;
    styles: { [key: string]: object };
    theme: T;
}

declare const withStylesPropTypes: PropTypes.ValidationMap<WithStylesProps>;

type Nullable<T> = T | null | undefined;
interface Styles {
    [key: string]: Nullable<
        CSSProperties & {
            [pseudoSelectorOrMediaQuery: string]: CSSProperties[keyof CSSProperties] | CSSProperties;
        }
    >;
}

interface WithStylesOptions {
    flushBefore?: boolean;
    pureComponent?: boolean;
}

type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;
type ComponentClassProps<C> = C extends new (props: infer P, context?: any) => any ? P : never;
type SFCProps<C> = C extends (props: infer P & { children?: React.ReactNode }, context?: any) => any ? P : never;
type ElementProps<C> = C extends React.ComponentClass<any>
    ? ComponentClassProps<C>
    : C extends React.SFC<any>
    ? SFCProps<C>
    : any;
type ElementConfig<C> = JSX.LibraryManagedAttributes<C, ElementProps<C>>;

declare function withStyles<T = Theme>(
    styleFn?: ((theme: T) => Styles) | null,
    options?: WithStylesOptions,
): <C extends React.ComponentType<any>>(
    component: C,
) => React.ComponentClass<Omit<ElementConfig<C>, keyof WithStylesProps<T>>>;

declare function css(...styles: any[]): object;

export {
  css,
  withStyles,
  WithStylesProps,
  withStylesPropTypes,
  WithStylesOptions,
  Theme,
  Styles,
  CSSProperties,
};
