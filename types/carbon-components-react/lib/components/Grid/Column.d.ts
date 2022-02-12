import * as React from "react";
import {
    ReactAttr,
    ReactDivAttr,
    JSXIntrinsicElementProps,
    FCReturn,
    ReactComponentConstructor
} from "../../../typings/shared";

export interface ColumnSpanDetailed {
    offset?: number | undefined;
    span?: number | undefined;
}

export type ColumnSpan = boolean | number | ColumnSpanDetailed;

interface ColumnBaseIsolatedProps {
    lg?: ColumnSpan | undefined;
    max?: ColumnSpan | undefined;
    md?: ColumnSpan | undefined;
    sm?: ColumnSpan | undefined;
    xlg?: ColumnSpan | undefined;
}

type SafeProps<P> = Omit<P, 'as' | keyof ColumnBaseIsolatedProps>;

interface ColumnBaseProps extends ColumnBaseIsolatedProps {
    children?: React.ReactNode | undefined;
    className?: ReactAttr['className'] | undefined;
}

export type ColumnDefaultProps = ColumnBaseProps &
    ReactDivAttr & {
        as?: undefined;
    };

export type ColumnIntrinsicProps<K extends keyof JSX.IntrinsicElements> = ColumnBaseProps &
    SafeProps<JSXIntrinsicElementProps<K>> & {
        as: K;
    };

export type ColumnCustomComponentProps<
    C extends ReactComponentConstructor<never>
> = C extends ReactComponentConstructor<infer P>
    ? ColumnBaseProps &
          SafeProps<P> & {
              as: C;
          }
    : never;

declare function Column(props: ColumnDefaultProps): FCReturn;
declare function Column<T extends keyof JSX.IntrinsicElements>(props: ColumnIntrinsicProps<T>): FCReturn;
declare function Column<T extends ReactComponentConstructor<never>>(props: ColumnCustomComponentProps<T>): FCReturn;

export default Column;
