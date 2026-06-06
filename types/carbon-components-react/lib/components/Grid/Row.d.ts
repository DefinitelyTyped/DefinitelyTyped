import * as React from "react";
import {
    FCReturn,
    JSXIntrinsicElementProps,
    ReactAttr,
    ReactComponentConstructor,
    ReactDivAttr,
} from "../../../typings/shared";

interface RowBaseIsolatedProps {
    condensed?: boolean | undefined;
    narrow?: boolean | undefined;
}
type SafeProps<P> = Omit<P, keyof RowBaseIsolatedProps>;

interface RowBaseProps extends RowBaseIsolatedProps {
    children?: React.ReactNode | undefined;
    className?: ReactAttr["className"] | undefined;
}

export type RowDefaultProps =
    & RowBaseProps
    & ReactDivAttr
    & {
        as?: undefined;
    };

export type RowIntrinsicProps<K extends keyof React.JSX.IntrinsicElements> =
    & RowBaseProps
    & SafeProps<JSXIntrinsicElementProps<K>>
    & {
        as: K;
    };

export type RowCustomComponentProps<C extends ReactComponentConstructor<never>> = C extends ReactComponentConstructor<
    infer P
> ?
        & RowBaseProps
        & SafeProps<P>
        & {
            as: C;
        }
    : never;

declare function Row(props: RowDefaultProps): FCReturn;
declare function Row<T extends keyof React.JSX.IntrinsicElements>(props: RowIntrinsicProps<T>): FCReturn;
declare function Row<T extends ReactComponentConstructor<never>>(props: RowCustomComponentProps<T>): FCReturn;

export default Row;
