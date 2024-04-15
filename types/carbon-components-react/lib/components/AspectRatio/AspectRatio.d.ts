import * as React from "react";
import { FCReturn, JSXIntrinsicElementProps, ReactComponentConstructor, ReactDivAttr } from "../../../typings/shared";

export type AspectRatioValue = "16x9" | "9x16" | "2x1" | "1x2" | "4x3" | "3x4" | "1x1";

interface AspectRatioBaseIsolatedProps {
    ratio?: AspectRatioValue | undefined;
}

type SafeProps<P> = Omit<P, "as" | keyof AspectRatioBaseIsolatedProps>;

interface AspectRatioBaseProps extends AspectRatioBaseIsolatedProps {
    children?: React.ReactNode | undefined;
    className?: string | undefined;
}

export type AspectRatioDefaultProps =
    & AspectRatioBaseProps
    & ReactDivAttr
    & {
        as?: undefined;
    };

export type AspectRatioIntrinsicProps<K extends keyof React.JSX.IntrinsicElements> =
    & AspectRatioBaseProps
    & SafeProps<JSXIntrinsicElementProps<K>>
    & {
        as: K;
    };

export type AspectRatioCustomComponentProps<
    C extends ReactComponentConstructor<never>,
> = C extends ReactComponentConstructor<infer P> ?
        & AspectRatioBaseProps
        & SafeProps<P>
        & {
            as: C;
        }
    : never;

declare function AspectRatio(props: AspectRatioDefaultProps): FCReturn;
declare function AspectRatio<T extends keyof React.JSX.IntrinsicElements>(
    props: AspectRatioIntrinsicProps<T>,
): FCReturn;
declare function AspectRatio<T extends ReactComponentConstructor<never>>(
    props: AspectRatioCustomComponentProps<T>,
): FCReturn;

export default AspectRatio;
