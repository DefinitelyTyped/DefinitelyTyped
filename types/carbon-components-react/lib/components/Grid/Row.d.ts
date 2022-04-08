import * as React from "react";
import { ReactAttr, FCReturn, ReactDivAttr, JSXIntrinsicElementProps } from "../../../typings/shared";

interface RowBaseIsolatedProps {
    condensed?: boolean;
    narrow?: boolean;
}
type SafeProps<P> = Omit<P, 'as' | 'condensed'>;

interface RowBaseProps extends RowBaseIsolatedProps {
    children?: React.ReactNode;
    className?: ReactAttr['className'];
}

export type RowDefaultProps = RowBaseProps &
    ReactDivAttr & {
        as?: undefined;
    };

export type RowIntrinsicProps<K extends keyof JSX.IntrinsicElements> = RowBaseProps &
    SafeProps<JSXIntrinsicElementProps<K>> & {
        as: K;
    };

export type RowCustomComponentProps<C extends React.JSXElementConstructor<any>> = C extends React.JSXElementConstructor<
    infer P
>
    ? RowBaseProps &
          SafeProps<P> & {
              as: C;
          }
    : never;

declare function Row(props: RowDefaultProps): FCReturn;
declare function Row<T extends keyof JSX.IntrinsicElements>(props: RowIntrinsicProps<T>): FCReturn;
declare function Row<T extends React.JSXElementConstructor<any>>(props: RowCustomComponentProps<T>): FCReturn;

export default Row;
