import * as React from "react";
import { ReactAttr, ReactDivAttr, JSXIntrinsicElementProps, FCReturn } from "../../../typings/shared";

export interface ColumnSpanDetailed {
    offset?: number;
    span?: number;
}

export type ColumnSpan = boolean | number | ColumnSpanDetailed;

interface ColumnBaseIsolatedProps {
    lg?: ColumnSpan;
    max?: ColumnSpan;
    md?: ColumnSpan;
    sm?: ColumnSpan;
    xlg?: ColumnSpan;
}

type SafeProps<P> = Omit<P, 'as' | keyof ColumnBaseIsolatedProps>;

interface ColumnBaseProps extends ColumnBaseIsolatedProps {
    children?: React.ReactNode;
    className?: ReactAttr['className'];
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
    C extends React.JSXElementConstructor<any>
> = C extends React.JSXElementConstructor<infer P>
    ? ColumnBaseProps &
          SafeProps<P> & {
              as: C;
          }
    : never;

declare function Column(props: ColumnDefaultProps): FCReturn;
declare function Column<T extends keyof JSX.IntrinsicElements>(props: ColumnIntrinsicProps<T>): FCReturn;
declare function Column<T extends React.JSXElementConstructor<any>>(props: ColumnCustomComponentProps<T>): FCReturn;

export default Column;
