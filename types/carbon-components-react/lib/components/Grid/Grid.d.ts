import * as React from "react";
import { ReactAttr, ReactDivAttr, JSXIntrinsicElementProps, FCReturn } from "../../../typings/shared";

interface GridBaseIsolatedProps {
    condensed?: boolean;
    fullWidth?: boolean;
    narrow?: boolean;
}
type SafeProps<P> = Omit<P, 'as' | keyof GridBaseIsolatedProps>;

interface GridBaseProps extends GridBaseIsolatedProps {
    children?: React.ReactNode;
    className?: ReactAttr['className'];
}

export type GridDefaultProps = GridBaseProps &
    ReactDivAttr & {
        as?: undefined;
    };

export type GridIntrinsicProps<K extends keyof JSX.IntrinsicElements> = GridBaseProps &
    SafeProps<JSXIntrinsicElementProps<K>> & {
        as: K;
    };

export type GridCustomComponentProps<
    C extends React.JSXElementConstructor<any>
> = C extends React.JSXElementConstructor<infer P>
    ? GridBaseProps &
          SafeProps<P> & {
              as: C;
          }
    : never;

declare function Grid(props: GridDefaultProps): FCReturn;
declare function Grid<T extends keyof JSX.IntrinsicElements>(props: GridIntrinsicProps<T>): FCReturn;
declare function Grid<T extends React.JSXElementConstructor<any>>(props: GridCustomComponentProps<T>): FCReturn;

export default Grid;
