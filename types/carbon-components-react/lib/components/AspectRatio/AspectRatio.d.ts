import * as React from 'react';
import { ReactDivAttr, JSXIntrinsicElementProps, FCReturn } from '../../../typings/shared';

export type AspectRatioValue = '16x9' | '9x16' | '2x1' | '1x2' | '4x3' | '3x4' | '1x1';

interface AspectRatioBaseIsolatedProps {
    ratio?: AspectRatioValue;
}

type SafeProps<P> = Omit<P, 'as' | keyof AspectRatioBaseIsolatedProps>;

interface AspectRatioBaseProps extends AspectRatioBaseIsolatedProps {
    children?: React.ReactNode;
    className?: string;
}

export type AspectRatioDefaultProps = AspectRatioBaseProps &
    ReactDivAttr & {
        as?: undefined;
    };

export type AspectRatioIntrinsicProps<K extends keyof JSX.IntrinsicElements> = AspectRatioBaseProps &
    SafeProps<JSXIntrinsicElementProps<K>> & {
        as: K;
    };

export type AspectRatioCustomComponentProps<
    C extends React.JSXElementConstructor<any>
> = C extends React.JSXElementConstructor<infer P>
    ? AspectRatioBaseProps &
          SafeProps<P> & {
              as: C;
          }
    : never;

declare function AspectRatio(props: AspectRatioDefaultProps): FCReturn;
declare function AspectRatio<T extends keyof JSX.IntrinsicElements>(props: AspectRatioIntrinsicProps<T>): FCReturn;
declare function AspectRatio<T extends React.JSXElementConstructor<any>>(
    props: AspectRatioCustomComponentProps<T>,
): FCReturn;

export default AspectRatio;
