import { LayoutDirectionContext } from './LayoutDirectionContext';
import * as React from "react";
import { FCReturn, JSXIntrinsicElementProps, ReactAttr, ReactComponentConstructor, ReactDivAttr } from '../../../typings/shared';

interface LayoutDirectionBaseProps {
    children?: React.ReactNode | undefined;
}

export type LayoutDirectionDefaultProps = LayoutDirectionBaseProps &
    ReactDivAttr & {
        as?: undefined;
    };

export type LayoutDirectionIntrinsicProps<K extends keyof JSX.IntrinsicElements> = LayoutDirectionBaseProps &
    JSXIntrinsicElementProps<K> & {
        as: K;
    };

export type LayoutDirectionCustomComponentProps<
    C extends ReactComponentConstructor<never>
> = C extends ReactComponentConstructor<infer P>
    ? LayoutDirectionBaseProps &
          P & {
              as: C;
          }
    : never;

declare function LayoutDirection(props: LayoutDirectionDefaultProps): FCReturn;
declare function LayoutDirection<T extends keyof JSX.IntrinsicElements>(
    props: LayoutDirectionIntrinsicProps<T>,
): FCReturn;
declare function LayoutDirection<T extends ReactComponentConstructor<never>>(
    props: LayoutDirectionCustomComponentProps<T>,
): FCReturn;

export { LayoutDirectionContext, LayoutDirection };
